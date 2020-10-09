import passport from '../config/passport.config';

export default passport.authenticate('login', { session: false });
