import 'reflect-metadata'
import { createConnection } from 'typeorm'
import express from 'express'
import * as bodyParser from 'body-parser';
import routes from './routes'
import { graphqlHTTP } from 'express-graphql';

import {schema, rootResolver} from './graphql/schema'

const app = express();

createConnection().then((connection) => {
    app.use(bodyParser.json())
    app.use('/api', routes);
    app.use('/graphql', graphqlHTTP({
        schema,
        rootValue: rootResolver,
        graphiql: true
    }));
    app.listen(8080, () => console.log('listening on 8080'))
}).catch(e => console.log(e));
