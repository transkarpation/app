import {Router} from 'express'
import photo from './photo.router'

const router = Router();

router.use('/photos', photo)

export default router;