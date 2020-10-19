import { Request, Response } from 'express'
import { getRepository } from 'typeorm'
import { Post } from '../db/entity/Post'
import { User } from '../db/entity/User'
import { plainToClass } from 'class-transformer';


export default {
    async index(req: Request, res: Response) {
        const reqUser = req.user as User;
        if(reqUser) {
            const posts = await reqUser.posts;
            res.send(posts)
        }
    },

    async get(req: Request, res: Response) {

    },

    async store(req: Request, res: Response) {
        const postRepository = getRepository(Post)
        const post = postRepository.create();

        post.title = req.body.title;
        post.text = req.body.text;
        post.author = Promise.resolve(req.user as User);

        let dbResult = await postRepository.save(post, {});
        dbResult = plainToClass(Post, dbResult, {excludeExtraneousValues: true})
        res.send(dbResult)
    },

    async update(req: Request, res: Response) {
        const reqUser = req.user as User;
        let post;
        try {
            post = await getRepository(Post).findOneOrFail({where: {id: req.params.id, author: reqUser.id}})
            post.title = req.body.title;
            post.text = req.body.text;
        } catch (e) {
            return res.status(401).send('Bad request')
        }

        if(post) {
            post = await getRepository(Post).save(post);
            return res.send(post);
        }
    },

    async delete(req: Request, res: Response) {
        const reqUser = req.user as User;
        let post;
        try {
            post = await getRepository(Post).findOneOrFail({where: {id: req.params.id, author: reqUser.id}})

        } catch (e) {
            console.log(e)
           return res.status(401).send('Bad request')
        }

        if(post) {
           const result = await getRepository(Post).remove(post);
           return res.send('deleted')
        }

    }
}