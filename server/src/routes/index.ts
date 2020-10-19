import {Router} from 'express'
import photo from './photo.router'
import authRouter from './auth.router'
import {validate} from '../mw/request.validate.mw'
import { PhotoReq } from '../requests/Photo';
import { UserReq } from '../requests/User';
import { Post } from '../db/entity/Post';
import postRouter from './post.router';
import { User } from '../db/entity/User';

const router = Router();

router.use('/auth', validate(User), authRouter)
router.use('/posts', validate(Post), postRouter)
// router.use('/photos', validate(PhotoReq), photo)

export default router;