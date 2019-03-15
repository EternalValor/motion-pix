import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import {
  fetchScreenPlayDetails,
  fetchMovieCast,
  resetScreenPlay
} from '../actions/apiActions';
import ScreenPlayHero from '../components/ScreenPlayHero';
import ScreenPlayInfo from '../components/ScreenPlayInfo';
import Loader from '../components/Loader';

class ScreenPlay extends React.Component {
  componentDidMount() {
    this.props.fetchScreenPlayDetails(
      this.props.match.params.id,
      this.props.type
    );
    this.props.fetchMovieCast(this.props.match.params.id, this.props.type);
  }

  componentWillUnmount() {
    this.props.resetScreenPlay();
  }

  render() {
    return (
      <React.Fragment>
        {Object.keys(this.props.screenplayDetails).length ? (
          <React.Fragment>
            <ScreenPlayHero screenplayDetails={this.props.screenplayDetails} />
            <ScreenPlayInfo
              screenplayDetails={this.props.screenplayDetails}
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
  fetchScreenPlayDetails: PropTypes.func.isRequired,
  resetScreenPlay: PropTypes.func.isRequired,
  screenplayDetails: PropTypes.object.isRequired,
  movieCast: PropTypes.array.isRequired
};

const mapStateToProps = state => ({
  screenplayDetails: state.apiData.screenplayDetails,
  movieCast: state.apiData.movieCast
});

export default connect(
  mapStateToProps,
  { fetchScreenPlayDetails, fetchMovieCast, resetScreenPlay }
)(ScreenPlay);
