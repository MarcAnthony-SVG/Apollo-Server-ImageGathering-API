// import axios from 'axios';
const axios = require('axios');

const resolvers = {
  Query: {
    tweet: async (_Source, { id }, { dataSources }) => {
      const response = await dataSources.twitterAPI.getTweet(id);
      var tweet = {
        id: response.data.id,
        text: response.data.text,
      };
      return tweet;
    },
    artist: async (_Source, { username }, { dataSources }) => {
      const response = await dataSources.twitterAPI.getArtist(username);
      var artist = {
        id: response.data.id,
        // name: response.data.text,
        username: response.data.username,
        profile_image_url: response.data.profile_image_url,
        // location: response.data.location,
        // url: response.data.url,
      };
      return artist;
    },
    searched: async (_Source, { search }, { dataSources }) => {
      let response = await dataSources.twitterAPI.recentSearch(search);
      let dataArray = response.data;
      var tweets = dataArray.map((item) => {
        var tweet = {
          id: item.id,
          text: item.text,
        };
        return tweet;
      });

      return tweets;
    },
    //////////////////////////////////////////////////////////////////////////////////////////////////
    ///////////////////////////////////////pixabay reolvers///////////////////////////////////////////
    //////////////////////////////////////////////////////////////////////////////////////////////////
    
    //Change searched_PB_By_Style to getStylesFromPixababy
    searched_PB_By_Style: async (_, { style }, { Token }) => {
      try {
        const searched_PB_By_Style = await axios.get(
          `https://pixabay.com/api/?key=${Token}&q=${style}&image_type=photo&pretty=true`
        );
        return searched_PB_By_Style.data.hits.map(
          ({ id, tags, largeImageURL, likes, user }) => ({
            id,
            tags,
            largeImageURL,
            likes,
            user,
          })
        );
      } catch (error) {
        throw error;
      }
    },
  },
};
module.exports.resolvers = resolvers;
