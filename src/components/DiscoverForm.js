import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { fetchDiscover } from '../actions/apiActions';
import Icon from './Icon';

const makeQuery = (type, query) => {
  let generatedQuery = `${type}?include_adult=false&vote_count.gte=100&sort_by=${
    query.sortOption
  }${query.genre === 'All' ? '' : `&with_genres=${query.genre}`}${
    query.year === 'All' ? '' : `&year=${query.year}`
  }${`&page=${query.page}`}`;

  return generatedQuery;
};

class DiscoverForm extends React.Component {
  state = {
    sortClicked: false,
    sortActive: 0,
    sortOptions: [
      'Popularity Descending',
      'Popularity Ascending',
      'Title Ascending'
    ],
    apiSortOptions: ['popularity.desc', 'popularity.asc', 'title.asc'],
    query: {
      year: 'All',
      genre: 'All',
      sortOption: 'popularity.desc',
      page: this.props.page
    },
    popState: false
  };

  componentDidMount() {
    this.props.fetchDiscover(makeQuery(this.props.type, this.state.query));
    window.onpopstate = () =>
      this.setState(
        { query: this.props.history.location.state.query, popState: true },
        () => {
          this.props.updateType(() =>
            this.props.fetchDiscover(
              makeQuery(
                this.props.history.location.state.type,
                this.props.history.location.state.query
              )
            )
          );
        }
      );
  }

  componentWillUnmount() {
    window.onpopstate = () => {};
  }

  handleSortClick = e => {
    this.setState((state, props) => {
      return { sortClicked: !state.sortClicked };
    });
  };

  handleSortSelectorClick = (e, index) => {
    const order = parseInt(e.target.dataset.order);
    if (this.state.sortClicked) {
      this.setState(state => {
        const query = {
          ...state.query,
          sortOption: state.apiSortOptions[index],
          page: 1
        };
        this.props.resetPage();
        this.props.fetchDiscover(makeQuery(this.props.type, query));
        this.props.history.push('/discover', { query, type: this.props.type });

        return {
          sortActive: order,
          query,
          popState: false
        };
      });
    }
  };

  handleListClick = e => {
    const name = e.target.name;
    const value = e.target.value;
    this.setState(
      (state, props) => {
        const query = { ...state.query, [name]: value };
        this.props.fetchDiscover(makeQuery(this.props.type, query));
        this.props.history.push('/discover', { query, type: this.props.type });

        return { query, popState: false };
      },
      () => this.props.resetPage()
    );
  };

  onSelectChange = e => {
    const value = e.target.value;
    this.setState(state => {
      this.props.resetPage();
      return {
        query: { ...state.query, genre: value, page: 1 },
        popState: false
      };
    });
  };

  onSubmit = e => {
    e.preventDefault();
  };

  componentWillUpdate(nextProps, nextState, snapShot) {
    if (nextProps.type !== this.props.type) {
      const query = {
        year: 'All',
        genre: 'All',
        sortOption: 'popularity.desc',
        page: 1
      };
      this.setState({ query, popState: false }, () => {
        this.props.fetchDiscover(makeQuery(nextProps.type, query));
        this.props.history.push('/discover', { query, type: this.props.type });
      });
    }

    if (nextProps.page !== this.props.page) {
      this.setState(state => {
        const oldQuery = this.props.history.location.state.query
          ? this.props.history.location.state.query
          : state.query;
        const query = { ...oldQuery, page: nextProps.page };
        this.props.fetchDiscover(makeQuery(this.props.type, query));
        this.props.history.push('/discover', {
          query: query,
          type: this.props.type
        });
        return { query };
      });
    }
  }

  render() {
    // Make list of years for dropdown
    let years = [];
    const year = new Date().getFullYear();
    for (let i = year; i >= 1900; i--) years.push(i);

    // Select genres depending on type of screenplay
    let genres = {};
    if (this.props.type === 'movie') genres = this.props.genresMovies;
    else if (this.props.type === 'tv') genres = this.props.genresTV;

    // Specify class for sort items when clicked
    let sortClickedClass = this.state.sortClicked
      ? 'discover-form__sort__item--clicked'
      : '';

    return (
      <form className="discover-form" onSubmit={this.onSubmit}>
        {/* Year Input */}
        <div className="discover-form__input-container">
          <h3 className="discover-form__input__heading">Year</h3>
          <select
            name="year"
            className="discover-form__input discover-form__list discover-form__list--years"
            onClick={this.handleListClick}>
            <option value="All">All</option>
            {years.map(year => (
              <option key={year} value={year}>
                {year}
              </option>
            ))}
          </select>
          <div className="discover-form__list__down-arrow" />
        </div>

        {/* Genres Input */}
        <div className="discover-form__input-container">
          <h3 className="discover-form__input__heading">Genres</h3>
          <select
            name="genre"
            className="discover-form__input discover-form__list discover-form__list--genres"
            onClick={this.handleListClick}
            value={this.state.query.genre}
            onChange={this.onSelectChange}>
            <option value="All">All</option>
            {Object.keys(genres).map(genre => (
              <option key={genre} value={genre}>
                {genres[genre]}
              </option>
            ))}
          </select>
          <div className="discover-form__list__down-arrow" />
        </div>

        {/* Sort selector */}
        <div className="discover-form__sort">
          <div
            className="discover-form__sort-container"
            onClick={this.handleSortClick}>
            <Icon name="sort-variant" className="discover-form__sort-icon" />
            <div className="discover-form__sort__items">
              {this.state.sortOptions.map((option, index) => (
                <div
                  key={option}
                  className={`discover-form__sort__item ${sortClickedClass} ${
                    this.state.sortActive === index
                      ? 'discover-form__sort__item--active'
                      : ''
                  }`}
                  onClick={e => this.handleSortSelectorClick(e, index)}
                  data-order={index}>
                  {option}
                </div>
              ))}
            </div>
          </div>
        </div>
      </form>
    );
  }
}

DiscoverForm.propTypes = {
  type: PropTypes.string.isRequired,
  genresMovies: PropTypes.object.isRequired,
  genresTV: PropTypes.object.isRequired,
  fetchDiscover: PropTypes.func.isRequired,
  discoverData: PropTypes.object.isRequired
};

const mapStateToProps = state => ({
  genresMovies: state.apiData.genresMovies,
  genresTV: state.apiData.genresTV,
  discoverData: state.apiData.discoverData
});

export default connect(
  mapStateToProps,
  { fetchDiscover }
)(DiscoverForm);
