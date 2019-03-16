import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { fetchTrending } from '../actions/apiActions';
import HeroCarousel from '../components/HeroCarousel';
import Featured from '../components/Featured';
import Loader from '../components/Loader';
// import { api_base_url, apiKey, image_base_url } from '../api_info';

class Home extends React.Component {
  render() {
    if (Object.keys(this.props.trendingInfo).length) {
      return (
        <React.Fragment>
          <HeroCarousel
            trending={this.props.trendingInfo.trending}
            src={this.props.trendingInfo.src}
          />
          <Featured trending={this.props.trendingInfo.trending} />
        </React.Fragment>
      );
    } else {
      return (
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
              If this takes too long, then please check your internet connection
              and try again later.
            </div>
          </div>
        </React.Fragment>
      );
    }
  }
}

Home.propTypes = {
  backdropSize: PropTypes.number.isRequired,
  trendingInfo: PropTypes.object.isRequired
};

const mapStateToProps = state => ({
  backdropSize: state.displaySettings.backdropSize,
  trendingInfo: state.apiData.trendingInfo
});

export default connect(
  mapStateToProps,
  { fetchTrending }
)(Home);
