import {
  FETCH_TRENDING,
  FETCH_POPULAR_TV,
  FETCH_POPULAR_MOVIES,
  FETCH_TV_GENRES,
  FETCH_MOVIE_GENRES,
  FETCH_FEATURED_LISTS,
  FETCH_MOVIE_DETAILS,
  FETCH_MOVIE_CAST,
  FETCH_DISCOVER,
  RESET_SCREENPLAY
} from './types';
import { api_base_url, apiKey, image_base_url } from '../api_info';

export const fetchTrending = backdropSize => dispatch => {
  fetch(`${api_base_url}/trending/movie/week?api_key=${apiKey}`)
    .then(res => res.json())
    .then(data => {
      const src = [];
      let trending = data.results.slice(0, 5);
      trending.forEach(movie => {
        src.push(`${image_base_url}/w${backdropSize}/${movie.backdrop_path}`);
      });
      let trendingInfo = { trending, src };
      dispatch({
        type: FETCH_TRENDING,
        payload: trendingInfo
      });
    });
};

export const fetchPopularTV = () => dispatch => {
  fetch(`${api_base_url}/tv/popular?api_key=${apiKey}`)
    .then(res => res.json())
    .then(data => {
      dispatch({
        type: FETCH_POPULAR_TV,
        payload: data.results
      });
    });
};

export const fetchPopularMovies = () => dispatch => {
  fetch(`${api_base_url}/movie/popular?api_key=${apiKey}`)
    .then(res => res.json())
    .then(data => {
      dispatch({
        type: FETCH_POPULAR_MOVIES,
        payload: data.results
      });
    });
};

export const fetchTvGenres = () => dispatch => {
  fetch(`${api_base_url}/genre/tv/list?api_key=${apiKey}`)
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
  fetch(`${api_base_url}/genre/movie/list?api_key=${apiKey}`)
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
  fetch(`${api_base_url}/movie/${movie_id}/lists?api_key=${apiKey}`)
    .then(res => res.json())
    .then(data => {
      data.results.filter(list => list.item_count >= 3);
      Promise.all([
        fetch(`${api_base_url}/list/${data.results[0].id}?api_key=${apiKey}`),
        fetch(`${api_base_url}/list/${data.results[1].id}?api_key=${apiKey}`),
        fetch(`${api_base_url}/list/${data.results[2].id}?api_key=${apiKey}`)
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

export const fetchScreenPlayDetails = (movie_id, type) => dispatch => {
  fetch(`${api_base_url}/${type}/${movie_id}?api_key=${apiKey}`)
    .then(res => res.json())
    .then(data =>
      dispatch({
        type: FETCH_MOVIE_DETAILS,
        payload: data.id
          ? type === 'tv'
            ? {
                ...data,
                title: data.name,
                release_date: parseInt(data.first_air_date),
                runtime: data.episode_run_time[0]
              }
            : data
          : {}
      })
    )
    .catch(err =>
      dispatch({
        type: FETCH_MOVIE_DETAILS,
        payload: {}
      })
    );
};

export const fetchMovieCast = (movie_id, type) => dispatch => {
  fetch(`${api_base_url}/${type}/${movie_id}/credits?api_key=${apiKey}`)
    .then(res => res.json())
    .then(data =>
      dispatch({
        type: FETCH_MOVIE_CAST,
        payload: data.cast
          ? type === 'tv'
            ? data.cast.map(castMember => ({
                ...castMember,
                cast_id: castMember.id
              }))
            : data.cast
          : []
      })
    )
    .catch(err =>
      dispatch({
        type: FETCH_MOVIE_CAST,
        payload: []
      })
    );
};

export const fetchDiscover = query => dispatch => {
  fetch(`${api_base_url}/discover/${query}&api_key=${apiKey}`)
    .then(res => res.json())
    .then(data => {
      dispatch({ type: FETCH_DISCOVER, payload: data });
    });
};

export const resetScreenPlay = () => {
  return {
    type: RESET_SCREENPLAY,
    payload: {}
  };
};
