import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Layout from './components/Layout';
import Home from './pages/Home';
import Construction from './components/Construction';
import ScrollToTop from './components/ScrollToTop';
import { connect } from 'react-redux';
import { fetchTvGenres, fetchMovieGenres } from './actions/apiActions';

class App extends Component {
  componentDidMount() {
    this.props.fetchTvGenres();
    this.props.fetchMovieGenres();
    console.log('[APP HAS LOADED]');
  }

  render() {
    return (
      <Router>
        <ScrollToTop>
          <Layout>
            <Switch>
              <Route path="/tv-show/:id" component={Construction} />
              <Route path="/movie/:id" component={Construction} />
              <Route
                path="/discover"
                render={props => <div>Discover Page</div>}
              />
              <Route path="/" exact component={Home} />
            </Switch>
          </Layout>
        </ScrollToTop>
      </Router>
    );
  }
}

App.propTypes = {
  fetchTvGenres: PropTypes.func.isRequired
};

export default connect(
  state => ({}),
  { fetchTvGenres, fetchMovieGenres }
)(App);
