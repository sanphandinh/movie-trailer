export default {
  GET_DISCOVER_MOVIES: {
    url: '/movie',
    params: `api_key, language, region, sort_by, certification_country, 
    certification, certification.lte, certification.gte, include_adult, include_video, 
    page, primary_release_year, primary_release_date.gte, primary_release_date.lte, 
    release_date.gte, release_date.lte, with_release_type, year, vote_count.gte, 
    vote_count.lte, vote_average.gte, vote_average.lte, with_cast, with_crew, 
    with_people, with_companies, with_genres, without_genres, with_keywords, 
    without_keywords, with_runtime.gte, with_runtime.lte, with_original_language`
  },
  GET_DISCOVER_TV: {
    url: '/tv',
    params: `api_key, language, sort_by, air_date.gte, 
    air_date.lte, first_air_date.gte, first_air_date.lte, first_air_date_year, page, 
    timezone, vote_average.gte, vote_count.gte, with_genres, 
    with_networks, without_genres, with_runtime.gte, with_runtime.gte, include_null_first_air_dates, 
    with_original_language, without_keywords, screened_theatrically, with_companies, with_keywords`
  }
};
