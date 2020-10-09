"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    Object.defineProperty(o, k2, { enumerable: true, get: function() { return m[k]; } });
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
require("reflect-metadata");
var typeorm_1 = require("typeorm");
var express_1 = __importDefault(require("express"));
var passport_config_1 = __importDefault(require("./config/passport.config"));
var bodyParser = __importStar(require("body-parser"));
var cors_1 = __importDefault(require("cors"));
var routes_1 = __importDefault(require("./routes"));
var jwt_config_1 = require("./config/jwt.config");
var express_graphql_1 = require("express-graphql");
var jwt_mw_1 = require("./mw/jwt.mw");
var schema_1 = __importDefault(require("./graphql/schema"));
var app = express_1.default();
typeorm_1.createConnection().then(function (connection) {
    app.use(bodyParser.json());
    app.use(cors_1.default());
    app.use(passport_config_1.default.initialize());
    app.use('/api', jwt_mw_1.authenticateJwt(jwt_config_1.routesWhiteList), routes_1.default);
    app.use('/graphql', express_graphql_1.graphqlHTTP({
        schema: schema_1.default,
        graphiql: true
    }));
    app.listen(8080, function () { return console.log('listening on 8080'); });
}).catch(function (e) { return console.log(e); });
