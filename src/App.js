import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Layout from './components/Layout';
import Home from './pages/Home';
import ScreenPlay from './pages/ScreenPlay';
import Discover from './pages/Discover';
import Populars from './pages/Populars';
import Construction from './components/Construction';
import ScrollToTop from './components/ScrollToTop';
import { connect } from 'react-redux';
import {
  fetchTvGenres,
  fetchMovieGenres,
  fetchTrending,
  fetchPopularTV,
  fetchPopularMovies
} from './actions/apiActions';
import { setBackdropSize } from './actions/displayActions';

class App extends Component {
  async componentDidMount() {
    this.props.fetchTvGenres();
    this.props.fetchMovieGenres();
    this.props.fetchPopularTV();
    this.props.fetchPopularMovies();
    await this.props.setBackdropSize(window.innerWidth);
    this.props.fetchTrending(this.props.backdropSize);
    console.log(this.props.backdropSize);
    console.log('[APP HAS LOADED]');
  }

  render() {
    return (
      <Router>
        <ScrollToTop>
          <Layout>
            <Switch>
              <Route path="/search" component={Construction} />
              <Route
                path="/tv-show/:id"
                render={props => <ScreenPlay {...props} type="tv" />}
              />
              <Route
                path="/movie/:id"
                render={props => <ScreenPlay {...props} type="movie" />}
              />
              <Route path="/popular/:type" component={Populars} />
              <Route path="/discover" component={Discover} />
              <Route path="/" exact component={Home} />
            </Switch>
          </Layout>
        </ScrollToTop>
      </Router>
    );
  }
}

App.propTypes = {
  fetchTvGenres: PropTypes.func.isRequired,
  fetchMovieGenres: PropTypes.func.isRequired,
  setBackdropSize: PropTypes.func.isRequired,
  backdropSize: PropTypes.number.isRequired
};

const mapStateToProps = state => ({
  backdropSize: state.displaySettings.backdropSize
});

export default connect(
  mapStateToProps,
  {
    fetchTvGenres,
    fetchMovieGenres,
    setBackdropSize,
    fetchTrending,
    fetchPopularTV,
    fetchPopularMovies
  }
)(App);
