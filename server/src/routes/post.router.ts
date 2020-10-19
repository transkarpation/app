import { Router } from 'express'
import ctrl from '../controllers/post.controller'


const r = Router();

r.get('/', ctrl.index)

r.get('/:id', ctrl.get)

r.post('/', ctrl.store)

r.put('/:id', ctrl.update)

r.delete('/:id', ctrl.delete)

export default r;