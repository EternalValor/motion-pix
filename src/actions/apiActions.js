import {
  FETCH_POPULAR_TV,
  FETCH_POPULAR_MOVIES,
  FETCH_TV_GENRES,
  FETCH_MOVIE_GENRES,
  FETCH_FEATURED_LISTS
} from './types';
import { apiStem, apiKey } from '../api_info';

export const fetchPopularTV = () => dispatch => {
  fetch(`${apiStem}/tv/popular?api_key=${apiKey}`)
    .then(res => res.json())
    .then(data => {
      dispatch({
        type: FETCH_POPULAR_TV,
        payload: data.results
      });
    });
};

export const fetchPopularMovies = () => dispatch => {
  fetch(`${apiStem}/movie/popular?api_key=${apiKey}`)
    .then(res => res.json())
    .then(data => {
      dispatch({
        type: FETCH_POPULAR_MOVIES,
        payload: data.results
      });
    });
};

export const fetchTvGenres = () => dispatch => {
  fetch(`${apiStem}/genre/tv/list?api_key=${apiKey}`)
    .then(res => res.json())
    .then(data => {
      let genres = {};
      data.genres.forEach(genre => {
        genres[genre.id] = genre.name;
      });
      dispatch({
        type: FETCH_TV_GENRES,
        payload: genres
      });
    });
};

export const fetchMovieGenres = () => dispatch => {
  fetch(`${apiStem}/genre/movie/list?api_key=${apiKey}`)
    .then(res => res.json())
    .then(data => {
      let genres = {};
      data.genres.forEach(genre => {
        genres[genre.id] = genre.name;
      });
      dispatch({
        type: FETCH_MOVIE_GENRES,
        payload: genres
      });
    });
};

export const fetchFeaturedLists = movie_id => dispatch => {
  fetch(`${apiStem}/movie/${movie_id}/lists?api_key=${apiKey}`)
    .then(res => res.json())
    .then(data => {
      data.results.filter(list => list.item_count >= 3);
      Promise.all([
        fetch(`${apiStem}/list/${data.results[0].id}?api_key=${apiKey}`),
        fetch(`${apiStem}/list/${data.results[1].id}?api_key=${apiKey}`),
        fetch(`${apiStem}/list/${data.results[2].id}?api_key=${apiKey}`)
      ]).then(([list1, list2, list3]) => {
        Promise.all([list1.json(), list2.json(), list3.json()]).then(res =>
          dispatch({
            type: FETCH_FEATURED_LISTS,
            payload: res
          })
        );
      });
    });
};
