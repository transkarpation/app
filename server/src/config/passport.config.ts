import passport from 'passport';
import { Strategy as LocalStrategy } from 'passport-local';
import { Strategy as JwtStrategy, ExtractJwt } from 'passport-jwt';
import { Any, getCustomRepository } from 'typeorm';
import { jwtSecret } from './jwt.config';
import { UserRepository } from '../db/repositories/user.reposityry'
import { Request } from 'express'
import { User } from '../db/entity/User';

passport.use(
    'register',
    new LocalStrategy({passReqToCallback: true, usernameField: 'email'}, async (req: Request, email: string, password: string, next): Promise<void> => {
        const userRepository = getCustomRepository(UserRepository);

        let user: any = await userRepository.getByEmail(email);
        if (user) {
            return next(null, null);
        }

        user = await userRepository.save(req.body)

        let {id, email: userEmail, password: userPassword} = user

        return next(null, {id, email: userEmail, password: userPassword})
    })
)

passport.use(
    'login',
    new LocalStrategy({ passReqToCallback: true, usernameField: 'email' },async (req: Request, email: string, password: string, next): Promise<void> => {
        const userRepository = getCustomRepository(UserRepository);

        let user = await userRepository.getByEmail(email);

        if(!user) {
            return next(null, null)
        }

        if (user.password !== password) {
            return next(null, null)
        }

        let {id, email: userEmail, password: userPassword} = user


        return next(null, {id, email: userEmail, password: userPassword});
    })

)

export default passport;