// BUILDING THE SERVER USING APOLLIO SERVER

// one method of importing data from a file (instead of import {file} from 'file')
const { ApolloServer } = require('apollo-server');
const typeDefs = require('./schema');
// resolvers to replace mock data
const resolvers = require('./resolvers');
// this is the datasource file : track-api.js
const TrackAPI = require('./datasources/track-api');

// passing an object instead of mocks:"true" to provide data to fill fields
/* 
const mocks = {
  Query: () => ({
    // Array( #{number of elements to be returned} )
    tracksForHome: () => [...new Array(6)],
  }),
  Track: () => ({
    id: () => 'track_1',
    title: () => 'Astro Kitty, Space Explorer',
    author: () => {
      return {
        name: 'Grumpy cat',
        photo:
          'https://res.cloudinary.com/dety84pbu/image/upload/v1606816219/kitty-veyron-sm_mctf3c.jpg',
      };
    },
    thumbnail: () =>
      'https://res.cloudinary.com/dety84pbu/image/upload/v1598465568/nebula_cat_djkt9r.jpg',
    length: () => 1210,
    modulesCount: () => 6,
  }),
};
*/

const server = new ApolloServer({
  typeDefs,
  resolvers,
  // to connect server with TrackAPI enables access to datasources.trackAPI and its methods from context parameter of resolver
  dataSources: () => {
    return {
      trackAPI: new TrackAPI(),
    };
  },
  // (mocks) instead of resolvers would allow us to access the variable mocks
  // (mocks:true) instructs Apollo Server to populate the every queried field with a placeholder value
});

// listen is async method
server.listen().then(() => {
  console.log(`
    🚀 Server ready at http://localhost:4000/
    🔈 Listening on port 4000
    📪 Query at http://localhost:4000
    `);
});
