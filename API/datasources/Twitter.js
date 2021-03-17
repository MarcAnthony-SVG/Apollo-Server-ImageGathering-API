const { RESTDataSource } = require('apollo-datasource-rest');

 class TwitterAPI extends RESTDataSource {
  constructor() {
    super();
    this.baseURL = 'https://api.twitter.com/2/';
  }
  willSendRequest(request) {
    request.headers.set(
      'Authorization',
      `Bearer ${this.context.Authorization}`
    );
  }
  //getTweet was changed to getTweetById
  async getTweetById(id) {
    return this.get(`tweets/${id}`);
  }
  //getArtist was changed to getArtistByUsername
  async getArtist(username) {
    return this.get(
      `users/by/username/${username}?user.fields=profile_image_url`
    );
  }
  //recentSearch was changed to getSearchByInput
  async recentSearch(search) {
    var set = await this.get(`tweets/search/recent?query=${search}`);
    return set;
  }
  /* These last functions are concepts and need to be build out. 
  So far the issue I'm having is with twitter not giving location data for use in commercial applications.
  It seems like the only way I will be able to get location data is for research purposes. 
  */
  async getLocationAndArtist(artist, location) {
    const results = await this.get(id);
    return results;
  }
  async getTattoosInMyArea(location) {
    const results = await this.get(location);
    return results;
  }
  async streamTweetsByTagLocNPic(location, style, artist) {
    const results = await this.get(`search/stream${tag}`);
    console.log('DataSource', results);
    return results;
  }
}
module.exports.TwitterAPI = TwitterAPI;
