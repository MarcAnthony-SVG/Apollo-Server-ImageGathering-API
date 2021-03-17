// const { ApolloServer } = require('apollo-server');
// // const { ApolloServerPluginInlineTrace } = require('apollo-server-core');
// const { TwitterAPI } = require('./datasources/index.js');
// const { typeDefs } = require('./schemas/index.gql');
// const { resolvers } = require('./resolvers/index.js');

// require('dotenv').config();
// const server = new ApolloServer({
//   typeDefs,
//   resolvers,
//   // plugins: [ApolloServerPluginInlineTrace()],
//   dataSources: () => {
//     return {
//       twitterAPI: new TwitterAPI(),
//     };
//   },
//   context: () => {
//     return {
//       Token: process.env.Token,
//       Authorization: process.env.BEARER_TOKEN,
//     };
//   },
// });

// // const config = {
// //   api: {
// //     bodyParser: false,
// //   },
// // };
// server.listen({ port: process.env.PORT || 4000 }).then(({ url }) => {
//   console.log(`🚀 Server ready at ${url}`);
// });
