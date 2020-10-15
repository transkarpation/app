import passport from 'passport';
import { Strategy as LocalStrategy } from 'passport-local';
import { Strategy as JwtStrategy, ExtractJwt } from 'passport-jwt';
import { getCustomRepository } from 'typeorm';
import { jwtSecret } from './jwt.config';
import { UserRepository } from '../db/repositories/user.reposityry'
import { Request } from 'express'
import {ErrorResponse} from '../helpers/error.handler.helper'
import HttpStatusCode from '../constants/httpStatusCode.constants'
import {authErrorMessages} from '../constants/auth.constants'

passport.use(
    'register',
    new LocalStrategy({passReqToCallback: true, usernameField: 'email'}, async (req: Request, email: string, password: string, next): Promise<void> => {
        const userRepository = getCustomRepository(UserRepository);

        let user: any = await userRepository.getByEmail(email);
        if (user) {
            return next(new ErrorResponse(HttpStatusCode.UNAUTHORIZED, authErrorMessages.TAKEN_EMAIL), null);
        }

        user = await userRepository.save(req.body)

        let {id, email: userEmail, password: userPassword} = user

        // return next(null, {id, email: userEmail, password: userPassword})
        return next(null, user)

    })
)

passport.use(
    'login',
    new LocalStrategy({ passReqToCallback: true, usernameField: 'email' },async (req: Request, email: string, password: string, next): Promise<void> => {
        const userRepository = getCustomRepository(UserRepository);

        let user = await userRepository.getByEmail(email);

        if(!user) {
            return next(new ErrorResponse(HttpStatusCode.UNAUTHORIZED, authErrorMessages.INCORRECT_CREDENTIALS), null)
        }

        if (user.password !== password) {
            return next(new ErrorResponse(HttpStatusCode.UNAUTHORIZED, authErrorMessages.INCORRECT_CREDENTIALS), null)
        }

        let {id, email: userEmail, password: userPassword} = user


        // return next(null, {id, email: userEmail, password: userPassword});
        return next(null, user);

    })

)

passport.use(
	'jwt',
	new JwtStrategy(
		{
			jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(),
			secretOrKey: jwtSecret,
		},
		async ({ id }: { id: string }, next): Promise<void> => {
			try {
				const userRepository = getCustomRepository(UserRepository);
				const user = await userRepository.getById(id);

				return next(null, user);
			} catch (error) {
				return next(null, null);
			}
		},
	),
);

export default passport;