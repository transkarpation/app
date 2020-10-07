import { getCustomRepository } from 'typeorm';
import { Photo } from '../db/entity/Photo';
import { PhotoRepository } from '../db/repositories/photo.repository';
import {Request, Response} from 'express'

export default {
    async save (req: Request, res: Response) {
        const photoRepo = getCustomRepository(PhotoRepository);
        const result = await photoRepo.save({
            name: 'photo 1',
            description: 'awesom photo 1',
            filename: 'photo1.jpg',
            views: 1        })
        res.send(result)

    },

    update (req: Request, res: Response) {

    },

    delete (req: Request, res: Response) {

    }
}