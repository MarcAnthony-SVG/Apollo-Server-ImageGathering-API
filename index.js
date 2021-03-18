const { ApolloServer } = require('apollo-server');
const { TwitterAPI } = require('./API/datasources/index.js');
const { resolvers } = require('./API/resolvers/index.js');
const { typeDefs } = require('./API/schemas/index.gql');
require('dotenv').config();
const server = new ApolloServer({
  typeDefs,
  resolvers,
  tracing: true,
  introspection: true,
  playground: true,
  dataSources: () => {
    return {
      twitterAPI: new TwitterAPI(),
    };
  },
  context: () => {
    return {
      Token: process.env.Token,
      Authorization: process.env.BEARER_TOKEN,
    };
  },
});

server.listen({ port: process.env.PORT || 4000 }).then(({ url }) => {
  console.log(`🚀 Server ready at ${url}`);
});
