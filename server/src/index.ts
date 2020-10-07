import 'reflect-metadata'
import {createConnection} from 'typeorm'
import express from 'express'
import * as bodyParser from 'body-parser';
import routes from './routes'

const app = express();

createConnection().then((connection) => {
    app.use(bodyParser.json())
    app.use('/api', routes);
    app.listen(8080, () => console.log('listening on 8080'))
}).catch(e => console.log(e));






