import "reflect-metadata";
import {createConnection, getConnection, getRepository} from 'typeorm'
import { Post } from "../db/entity/Post";
import {Comment} from  "../db/entity/Comment";

import faker from 'faker'
import { Author } from "../db/entity/Author";
import { Category } from "../db/entity/Category";
faker.locale = 'ru'

async function createPostsForAuthor(count: number, author: Author):Promise<string> {
    const conn = await getConnection();
    for (const i of Array.from({length: count})) {
        const post = new Post();
        post.text = faker.lorem.paragraphs(2);
        post.author = Promise.resolve(author);
        await conn.getRepository(Post).save(post)
    }
    return 'ok';
}


async function index() {
    const conn = await createConnection()
    const post = new Post()
    post.text = "It is cool"

    const category = new Category();
    category.name = "it"

    ;(await post.categories).push(category);


    await conn.getRepository(Post).save(post);
}

index().then()