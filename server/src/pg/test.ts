import {UserRepository} from '../db/repositories/user.reposityry';
import {getCustomRepository, createConnection, getConnection} from 'typeorm'
import { PhotoRepository } from '../db/repositories/photo.repository';
import { User } from '../db/entity/User';


async function createUser() {
    const conn = await createConnection();
}

createUser().then(result => console.log(result))