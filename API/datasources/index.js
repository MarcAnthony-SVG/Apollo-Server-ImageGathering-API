// import { RESTDataSource } from 'apollo-datasource-rest';
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
  async getTweet(id) {
    return this.get(`tweets/${id}`);
  }
  async getArtist(username) {
    return this.get(
      `users/by/username/${username}?user.fields=profile_image_url`
    );
  }
  async recentSearch(search) {
    var set = await this.get(`tweets/search/recent?query=${search}`);
    return set;
  }
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
