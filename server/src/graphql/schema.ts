import { GraphQLObjectType, GraphQLSchema, GraphQLString } from 'graphql'

const userType = new GraphQLObjectType({
    name: 'User',
    fields: {
        id: { type: GraphQLString },
        name: { type: GraphQLString },
    }
});

const queryType = new GraphQLObjectType({
    name: 'Query',
    fields: {
      user: {
        type: userType,
        // `args` describes the arguments that the `user` query accepts
        args: {
          id: { type: GraphQLString }
        },
        resolve: (_: any, {id}: any) => {
          return {
              id: 'sdoifjs',
              name: 'sldfjslfdjksldf'
          };
        }
      }
    }
  });

export default new GraphQLSchema({query: queryType});
