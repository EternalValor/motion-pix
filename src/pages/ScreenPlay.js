import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import {
  fetchMovieDetails,
  fetchMovieCast,
  resetScreenPlay
} from '../actions/apiActions';
import ScreenPlayHero from '../components/ScreenPlayHero';
import ScreenPlayInfo from '../components/ScreenPlayInfo';
import Loader from '../components/Loader';

class ScreenPlay extends React.Component {
  componentDidMount() {
    this.props.fetchMovieDetails(this.props.match.params.id);
    this.props.fetchMovieCast(this.props.match.params.id);
  }

  componentWillUnmount() {
    this.props.resetScreenPlay();
  }

  render() {
    console.log('MOVIE DETAILS', this.props.movieDetails);
    return (
      <React.Fragment>
        {Object.keys(this.props.movieDetails).length ? (
          <React.Fragment>
            <ScreenPlayHero movieDetails={this.props.movieDetails} />
            <ScreenPlayInfo
              movieDetails={this.props.movieDetails}
              movieCast={this.props.movieCast}
            />
          </React.Fragment>
        ) : (
          <React.Fragment>
            <div
              style={{
                width: '50%',
                height: '40rem',
                position: 'relative',
                margin: '0 auto'
              }}>
              <Loader />
            </div>
            <div
              style={{
                textAlign: 'center',
                marginBottom: '10rem',
                fontSize: '1.6rem'
              }}>
              Loading...
              <div style={{ fontSize: '1rem', fontWeight: '300' }}>
                If this takes too long, then the screenplay you're requesting is
                unknown.
              </div>
            </div>
          </React.Fragment>
        )}
      </React.Fragment>
    );
  }
}

ScreenPlay.propTypes = {
  fetchMovieDetails: PropTypes.func.isRequired,
  resetScreenPlay: PropTypes.func.isRequired,
  movieDetails: PropTypes.object.isRequired,
  movieCast: PropTypes.array.isRequired
};

const mapStateToProps = state => ({
  movieDetails: state.apiData.movieDetails,
  movieCast: state.apiData.movieCast
});

export default connect(
  mapStateToProps,
  { fetchMovieDetails, fetchMovieCast, resetScreenPlay }
)(ScreenPlay);
