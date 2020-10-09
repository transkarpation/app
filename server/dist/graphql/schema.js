"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var graphql_1 = require("graphql");
var userType = new graphql_1.GraphQLObjectType({
    name: 'User',
    fields: {
        id: { type: graphql_1.GraphQLString },
        name: { type: graphql_1.GraphQLString },
    }
});
var queryType = new graphql_1.GraphQLObjectType({
    name: 'Query',
    fields: {
        user: {
            type: userType,
            // `args` describes the arguments that the `user` query accepts
            args: {
                id: { type: graphql_1.GraphQLString }
            },
            resolve: function (_, _a) {
                var id = _a.id;
                return {
                    id: 'sdoifjs',
                    name: 'sldfjslfdjksldf'
                };
            }
        }
    }
});
exports.default = new graphql_1.GraphQLSchema({ query: queryType });
