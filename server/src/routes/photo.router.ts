import { Router } from 'express'
import photoCtrl from '../controllers/photo.controller'


const r = Router();

r.get('/', (req, res) => {
    res.send('get photos')
})

r.get('/:id', () => { })

r.post('/', photoCtrl.save)

r.put('/:id', () => { })

export default r;