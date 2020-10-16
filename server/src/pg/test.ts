import "reflect-metadata";
import {UserRepository} from '../db/repositories/user.reposityry';
import {getCustomRepository, createConnection, getConnection} from 'typeorm'
import { PhotoRepository } from '../db/repositories/photo.repository';
import { User } from '../db/entity/User';
import { PostDetails } from '../db/entity/PostDetails';
import { Post } from '../db/entity/Post';
import {Comment} from '../db/entity/Comment';


async function createUser() {
    const conn = await createConnection();

    const post = await conn.getRepository(Post).findOne({where: {title: "super post"}})
    if(post) {
        const comment = new Comment();
        comment.text = "Another Cool post";
        comment.post = post;
        const result = await conn.getRepository(Comment).save(comment)
        console.log(result)
    }



    // const result = await conn.getRepository(Post)
}

createUser().then()