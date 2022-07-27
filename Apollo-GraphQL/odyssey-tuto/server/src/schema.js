const { gql } = require('apollo-server');

('This is the schema');
const typeDefs = gql`
  type Query {
    tracksForHome: [Track!]
  }
  "a track is a group of modules that teaches about a specific topic"
  type Track {
    id: ID!
    title: String!
    author: Author!
    thumbnail: String!
    length: Int
    "number of modules this track contains"
    modulesCount: Int
  }
  type Author {
    id: ID!
    name: String!
    "URL pointing to the image"
    photo: String
  }
`;

module.exports = typeDefs;
