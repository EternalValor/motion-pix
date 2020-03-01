import genreDefs from '../static/genres';

export default function TvShow(data) {
  this.id = data && data.id ? data.id : 0;
  this.title = data && data.title ? data.title : '';
  this.backdropPath = data && data.backdropPath ? data.backdropPath : null;
  this.posterPath = data && data.posterPath ? data.posterPath : null;
  this.voteAverage = data && data.voteAverage ? data.voteAverage : 0;
  this.releaseDate = data && data.releaseDate ? data.releaseDate : undefined;
  this.genres = data && data.genres ? data.genres : [];
  this.overview =
    data && data.overview ? data.overview : 'No overview provided';
  this.originalLanguage =
    data && data.originalLanguage ? data.originalLanguage : 'N/A';
}

export const apiToTvMap = [
  ['id', 'id'],
  ['name', 'title'],
  ['backdrop_path', 'backdropPath'],
  ['poster_path', 'posterPath'],
  ['vote_average', 'voteAverage'],
  ['first_air_date', 'releaseDate'],
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
  ['overview', 'overview'],
  ['original_language', 'originalLanguage']
];
