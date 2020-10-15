import { Router } from 'express'
import photoCtrl from '../controllers/photo.controller'


const r = Router();

r.get('/', photoCtrl.getAll)

r.get('/:id', () => { })

r.post('/', photoCtrl.save)

r.put('/:id', () => { })

export default r;