//File include defination of URL of module MOVIE

export default {
  //For get list movie is up comming in threaler
  GET_MOVIE_UP_COMING: {
    url: '/upcoming',
    params: 'api_key, language, page, region'
  },
  // As name, it get list top rated
  GET_MOVIE_TOP_RATED: {
    url: '/top_rated',
    params: 'api_key, language, page, region'
  },
  // As name, it get list movie is popular
  GET_MOVIE_POPULAR: {
    url: '/popular',
    params: 'api_key, language, page, region'
  },
  // Get list movie is playing on threaler
  GET_MOVIE_NOW_PLAYING: {
    url: '/now_playing',
    params: 'api_key, language, page, region'
  },
  //Get movie lastest
  GET_MOVIE_LASTEST: {
    url: '/latest',
    params: 'api_key, language'
  },
  GET_LIST_OF_LISTS_OF_MOVIE: {
    url: '/{movie_id}/lists',
    params: 'api_key, language, page'
  },
  //Get the user reviews for a movie.
  GET_REVIEW_OF_MOVIE: {
    url: '/{movie_id}/reviews',
    params: 'api_key, language, page'
  },
  // Get a list of similar movies. This is not the same as the "Recommendation" system you see on the website.
  // These items are assembled by looking at keywords and genres.
  GET_SIMILAR_MOVIE_OF_MOVIE: {
    url: '/{movie_id}/similar',
    params: 'api_key, language, page'
  },
  //Get a list of recommended movies for a movie.
  GET_RECOMMENDED_MOVIES_OF_MOVIE: {
    url: '/{movie_id}/recommendations',
    params: 'api_key, language, page'
  },
  //Get a list of translations that have been created for a movie.
  GET_TRANSLATION_OF_MOVIE: {
    url: '/{movie_id}/translations',
    params: 'api_key'
  },
  //Get the videos that have been added to a movie.
  GET_VIDEOS_OF_MOVIE: {
    url: '/{movie_id}/videos',
    params: 'api_key, language'
  },
  //   Release dates support different types:

  // Premiere
  // Theatrical (limited)
  // Theatrical
  // Digital
  // Physical
  // TV
  GET_RELEASE_DATE_OF_MOVIE: {
    url: '/{movie_id}/release_dates',
    params: 'api_key'
  },
  //Get the keywords that have been added to a movie.
  GET_KEYWORDS_OF_MOVIE: {
    url: '/{movie_id}/keywords',
    params: 'api_key'
  },
  //   Get the images that belong to a movie.

  // Querying images with a language parameter will filter the results. If you want to include a fallback language (especially useful for backdrops) you can use the include_image_language parameter.
  // This should be a comma seperated value like so: include_image_language=en,null.
  GET_IMAGES_OF_MOVIE: {
    url: '/{movie_id}/keywords',
    params: 'api_key, language, include_image_language'
  },
  //Get the external ids for a movie. We currently support the following external sources.
  //   |----------------|---------------|
  //   |Media Databases |	  Social IDs  |
  //   |----------------|---------------|
  //   |IMDb ID	        |    Facebook   |
  //   |----------------|---------------|
  //   |                |    Instagram  |
  //   |----------------|---------------|
  //   |                |    Twitter    |
  //   |----------------|---------------|
  GET_EXTERNAL_ID_OF_MOVIE: {
    url: '/{movie_id}/external_ids',
    params: 'api_key'
  },
  //Get the cast and crew for a movie.
  GET_CREDITS_OF_MOVIE: {
    url: '/{movie_id}/credits',
    params: 'api_key'
  },
  //   Get the changes for a movie. By default only the last 24 hours are returned.

  // You can query up to 14 days in a single query by using the start_date and end_date query parameters.
  GET_CHANGES_OF_MOVIE: {
    url: '/{movie_id}/changes',
    params: 'api_key, start_date, end_date, page'
  },
  //Get all of the alternative titles for a movie.
  GET_ALTERNATIVE_TILES_OF_MOVIE: {
    url: '/{movie_id}/alternative_titles',
    params: 'api_key, country'
  },
  //   Grab the following account states for a session:

  // Movie rating
  // If it belongs to your watchlist
  // If it belongs to your favourite list
  GET_ACCOUNT_STATE_OF_MOVIE: {
    url: '/{movie_id}/account_states',
    params: 'api_key, session_id, guest_session_id'
  },
  //   Get the primary information about a movie.
  GET_DETAILS_OF_MOVIE: {
    url: '/{movie_id}',
    params: 'api_key, language, append_to_response'
  }
};
