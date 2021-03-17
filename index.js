// const { ApolloServer } = require('apollo-server');
const { TwitterAPI } = require('./API/datasources/index.js');
const { resolvers } = require('./API/resolvers/index.js');
const { typeDefs } = require('./API/schemas/index.gql');


const express = require('express');
const { ApolloServer } = require('apollo-server-express');

const app = express();
require('dotenv').config();
const server = new ApolloServer({
  typeDefs,
  resolvers,
  playground: true,
  tracing: true,
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

server.applyMiddleware({ app });

app.use((req, res) => {
  res.status(200);
  res.send('Hello!');
  res.end();
});

app.listen({ port: 4000 }, () =>
  console.log(`🚀 Server ready at http://localhost:4000${server.graphqlPath}`)
)

// console.log(`🚀 Server ready at http://localhost:4000/graphql`);
