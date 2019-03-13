import {
  FETCH_POPULAR_TV,
  FETCH_POPULAR_MOVIES,
  FETCH_TV_GENRES,
  FETCH_MOVIE_GENRES,
  FETCH_FEATURED_LISTS,
  FETCH_MOVIE_DETAILS,
  FETCH_MOVIE_CAST,
  FETCH_DISCOVER
} from '../actions/types';

const initialState = {
  popularTV: [],
  popularMovies: [],
  genresTV: {},
  genresMovies: {},
  featuredLists: [],
  movieDetails: {},
  movieCast: [],
  discoverData: {}
};

export default function(state = initialState, action) {
  switch (action.type) {
    case FETCH_POPULAR_TV:
      return {
        ...state,
        popularTV: action.payload
      };
    case FETCH_POPULAR_MOVIES:
      return {
        ...state,
        popularMovies: action.payload
      };
    case FETCH_TV_GENRES:
      return {
        ...state,
        genresTV: action.payload
      };
    case FETCH_MOVIE_GENRES:
      return {
        ...state,
        genresMovies: action.payload
      };
    case FETCH_FEATURED_LISTS:
      return {
        ...state,
        featuredLists: action.payload
      };
    case FETCH_MOVIE_DETAILS:
      return {
        ...state,
        movieDetails: action.payload
      };
    case FETCH_MOVIE_CAST:
      return {
        ...state,
        movieCast: action.payload
      };
    case FETCH_DISCOVER:
      return {
        ...state,
        discoverData: action.payload
      };
    default:
      return state;
  }
}
