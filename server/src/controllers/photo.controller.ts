// import { Photo } from '../db/entity/Photo';
import { Request, Response } from 'express'
import { plainToClass, classToPlain } from 'class-transformer'
import { PhotoReq } from '../requests/Photo'
import { validate } from 'class-validator';
import { Photo } from '../db/entity/Photo';
import {User} from '../db/entity/User'
import { getCustomRepository } from 'typeorm';
import { UserRepository } from '../db/repositories/user.reposityry'
import { PhotoRepository } from '../db/repositories/photo.repository'


export default {
    async save(req: Request, res: Response) {
        const photoR = getCustomRepository(PhotoRepository)
        let user = new User();
        let reqUser = req.user as {id: number}
        user.id = reqUser.id;
        console.log(user)
        const photo = await photoR.create({
            user: user,
            ...req.body
        })

        res.send(photo)
    },

    async getAll(req: Request, res: Response) {
        const userR = getCustomRepository(UserRepository);
        let reqUser = req.user as {id: string};
        const user = await userR.findOne(reqUser.id);
        let photos = await user?.photos;
        res.send(photos)
    },

    update(req: Request, res: Response) {

    },

    delete(req: Request, res: Response) {

    }
}