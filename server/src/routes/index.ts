import {Router} from 'express'
import photo from './photo.router'
import authRouter from './auth.router'
import {validate} from '../mw/request.validate.mw'
import { PhotoReq } from '../requests/Photo';
import { UserReq } from '../requests/User';

const router = Router();

router.use('/auth', validate(UserReq), authRouter)
router.use('/photos', validate(PhotoReq), photo)

export default router;