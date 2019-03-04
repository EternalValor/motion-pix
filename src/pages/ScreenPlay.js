import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { fetchMovieDetails, fetchMovieCast } from '../actions/apiActions';
import ScreenPlayHero from '../components/ScreenPlayHero';
import ScreenPlayInfo from '../components/ScreenPlayInfo';

class ScreenPlay extends React.Component {
  componentDidMount() {
    this.props.fetchMovieDetails(this.props.match.params.id);
    this.props.fetchMovieCast(this.props.match.params.id);
  }
  render() {
    console.log(this.props.movieDetails);
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
          <div className="screenplay-hero" />
        )}
      </React.Fragment>
    );
  }
}

ScreenPlay.propTypes = {
  fetchMovieDetails: PropTypes.func.isRequired,
  movieDetails: PropTypes.object.isRequired,
  movieCast: PropTypes.array.isRequired
};

const mapStateToProps = state => ({
  movieDetails: state.apiData.movieDetails,
  movieCast: state.apiData.movieCast
});

export default connect(
  mapStateToProps,
  { fetchMovieDetails, fetchMovieCast }
)(ScreenPlay);
