import { getCustomRepository } from 'typeorm';
// import { Photo } from '../db/entity/Photo';
import { PhotoRepository } from '../db/repositories/photo.repository';
import { Request, Response } from 'express'
import { plainToClass, classToPlain } from 'class-transformer'
import { PhotoReq } from '../requests/Photo'
import { validate } from 'class-validator';
import { Photo } from '../db/entity/Photo';


export default {
    async save(req: Request, res: Response) {
        const output = plainToClass(PhotoReq, req.body, { excludeExtraneousValues: true });
        const errors = await validate(output)
        if (errors.length > 0) {
            return res.status(400).send(errors);
        }

        const body = await classToPlain(output)

        const photoR = getCustomRepository(PhotoRepository)
        const dbResult = await photoR.save(body)

        res.send(dbResult)
        // res.send(output)
        // const photoRepo = getCustomRepository(PhotoRepository);
        // const result = await photoRepo.save({
        //     name: 'photo 1',
        //     description: 'awesom photo 1',
        //     filename: 'photo1.jpg',
        //     views: 1        })
        // res.send(result)

    },

    update(req: Request, res: Response) {

    },

    delete(req: Request, res: Response) {

    }
}