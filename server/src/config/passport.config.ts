import passport from 'passport';
import { Strategy as LocalStrategy } from 'passport-local';
import { Strategy as JwtStrategy, ExtractJwt } from 'passport-jwt';
import { getCustomRepository } from 'typeorm';
import { jwtSecret } from './jwt.config';
import { UserRepository } from '../db/repositories/user.reposityry'

passport.use(
    'register',
    new LocalStrategy({passReqToCallback: true}, async (req, email: string, password: string, next): Promise<void> => {
        const userRepository = getCustomRepository(UserRepository);

        const user = await userRepository.getByEmail(email);
        if (user) {
            return next(null, null);
        }

        // await userRepository.save(req.output)
    })
)

passport.use(
    'login',
    new LocalStrategy(async (email: string, password: string, next): Promise<void> => {
        const userRepository = getCustomRepository(UserRepository);
    })

)