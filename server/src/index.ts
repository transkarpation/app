import 'reflect-metadata'
import { createConnection } from 'typeorm'
import express from 'express'
import * as bodyParser from 'body-parser';
import cors from 'cors';
import routes from './routes'
import { graphqlHTTP } from 'express-graphql';

import schema from './graphql/schema'

const app = express();

createConnection().then((connection) => {
    app.use(bodyParser.json())
    app.use(cors())
    app.use('/api', routes);
    app.use('/graphql', graphqlHTTP({
        schema,
        graphiql: true
    }));
    app.listen(8080, () => console.log('listening on 8080'))
}).catch(e => console.log(e));
