const { RESTDataSource } = require('apollo-datasource-rest');

class TrackAPI extends RESTDataSource {
  constructor() {
    super(); // ensures getting everything from parent class (RESTDataSource)
    this.baseURL = 'https://odyssey-lift-off-rest-api.herokuapp.com/';
  }
  getTracksForHome() {
    return this.get('tracks'); // tracks endpoint
  }
  getAuthor(authorId) {
    return this.get(`author/${authorId}`);
    // to call /author/:id endpoint
  }
}
module.exports = TrackAPI;
