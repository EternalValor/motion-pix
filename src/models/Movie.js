import genreDefs from '../static/genres';

export default function Movie(data) {
  this.id = data && data.id ? data.id : 0;
  this.backdropPath = data && data.backdropPath ? data.backdropPath : null;
  this.budget = data && data.budget ? data.budget : 0;
  this.genres = data && data.genres ? data.genres : [];
  this.originalLanguage =
    data && data.originalLanguage ? data.originalLanguage : 'N/A';
  this.overview = data && data.overview ? data.overview : '';
  this.posterPath = data && data.posterPath ? data.posterPath : null;
  this.releaseDate = data && data.releaseDate ? data.releaseDate : undefined;
  this.runtime = data && data.runtime ? data.runtime : null;
  this.status = data && data.status ? data.status : '';
  this.title = data && data.title ? data.title : '';
  this.voteAverage = data && data.voteAverage ? data.voteAverage : 0;
}

export const apiToMovieMap = [
  ['id', 'id'],
  ['backdrop_path', 'backdropPath'],
  ['budget', 'budget'],
  ['genres', 'genres'],
  [
    'genre_ids',
    apiObj => {
      const genres = apiObj.genre_ids.reduce((genresArray, genreId) => {
        const genreObj = genreDefs.filter(genre => genre.id === genreId)[0];
        genresArray.push(genreObj);
        return genresArray;
      }, []);
      return { genres };
    }
  ],
  ['original_language', 'originalLanguage'],
  ['overview', 'overview'],
  ['poster_path', 'posterPath'],
  ['release_date', 'releaseDate'],
  ['runtime', 'runtime'],
  ['status', 'status'],
  ['title', 'title'],
  ['vote_average', 'voteAverage']
];
