import 'reflect-metadata'
import { createConnection } from 'typeorm'
import express from 'express'
import passport from './config/passport.config';
import * as bodyParser from 'body-parser';
import cors from 'cors';
import routes from './routes'
import { routesWhiteList } from './config/jwt.config';
import { graphqlHTTP } from 'express-graphql';
import { authenticateJwt } from './mw/jwt.mw'
import errorHandlerMiddleware from './mw/error.handler.mw'
import schema from './graphql/schema'

const app = express();

createConnection().then((connection) => {
    app.use(bodyParser.json())
    app.use(bodyParser.urlencoded({ extended: true }))
    app.use(cors())
    app.use(passport.initialize())
    app.use('/api', authenticateJwt(routesWhiteList), routes);
    app.use('/graphql', graphqlHTTP({
        schema,
        graphiql: true
    }));
    app.use(errorHandlerMiddleware);
    app.listen(8080, () => console.log('listening on 8080'))
}).catch(e => console.log(e));
