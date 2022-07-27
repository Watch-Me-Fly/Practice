const resolvers = {
  Query: {
    // returns an array of Tracks that will be used to populate
    // the homepage grid of our web client
    tracksForHome: (_, __, { dataSources }) => {
      // trackAPI in lowercase as it is an instance of TrackAPI
      return dataSources.trackAPI.getTracksForHome();
    },
  },
  Track: {
    // authorId is defined in the API
    author: ({ authorId }, _, { dataSources }) => {
      return dataSources.trackAPI.getAuthor(authorId);
    },
  },
};
module.exports = resolvers;
