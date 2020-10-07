import { join } from "path";
import {createConnection, Connection} from "typeorm";
import {Photo} from "./entity/Photo";

export async function connect(): Promise<Connection> {
    // const conn: Connection = await createConnection({
    //     type: 'sqlite',
    //     database: './db.db',
    //     entities: [Photo],
    //     synchronize: true,
    //     logging: true
    // });

    const conn: Connection = await createConnection();

    return conn;
}