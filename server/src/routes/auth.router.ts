import {Router} from 'express'
import loginMw from '../mw/login.mw'
import registerMw from '../mw/register.mw'
import authCtrl from '../controllers/auth.controller'

const r = Router();

r.post('/login', loginMw, authCtrl.sendUser)
r.post('/register', registerMw, authCtrl.sendUser)
r.get('/loguot', () => {})

export default r;