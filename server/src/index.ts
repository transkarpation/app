import 'reflect-metadata'
import {createConnection} from 'typeorm'
import express from 'express'
import routes from './routes'

const app = express();

createConnection().then((connection) => {
    app.use('/api', routes);
    app.listen(3333, () => console.log('listening on 3333'))
}).catch(e => console.log(e));






