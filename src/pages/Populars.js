import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { image_base_url } from '../api_info';
import { Link } from 'react-router-dom';
import Loader from '../components/Loader';

function percentToColor(perc) {
  var r,
    g,
    b = 0;
  if (perc < 50) {
    r = 255;
    g = Math.round(5.1 * perc);
  } else {
    g = 255;
    r = Math.round(510 - 5.1 * perc);
  }
  var h = r * 0x10000 + g * 0x100 + b * 0x1;
  return '#' + ('000000' + h.toString(16)).slice(-6);
}

class Populars extends React.Component {
  componentDidMount() {
    console.log(this.props.match.params.type);
  }
  render() {
    const populars =
      this.props.match.params.type === 'movies'
        ? this.props.popularMovies
        : this.props.popularTV;
    console.log(populars);

    if (populars.length) {
      return (
        <div className="populars">
          <h1 className="populars__heading">
            Popular{' '}
            {this.props.match.params.type === 'movies' ? 'Movies' : 'TV Shows'}
          </h1>
          <div className="populars__items-container">
            {populars.map(item => (
              <div key={item.id} className="populars__item">
                <Link
                  to={
                    this.props.match.params.type === 'movies'
                      ? `/movie/${item.id}`
                      : `/tv-show/${item.id}`
                  }
                  className="link">
                  <div
                    style={{
                      backgroundImage: `url(${image_base_url}/w${
                        this.props.smallBackdropSize
                      }${item.backdrop_path})`
                    }}
                    className="populars__item__banner">
                    <div className="populars__item__banner__overview">
                      {`${item.overview.slice(0, 150)}...`}
                    </div>
                  </div>
                </Link>
                <div className="populars__item__info">
                  <div className="populars__item__rating">
                    <div
                      className="populars__item__rating-circle"
                      style={{
                        borderColor: percentToColor(
                          (item.vote_average / 10) * 100
                        )
                      }}>
                      <div className="populars__item__rating-circle__content">
                        {Math.floor((item.vote_average / 10) * 100)}%
                      </div>
                    </div>
                  </div>
                  <div className="populars__item__text">
                    <Link
                      to={
                        this.props.match.params.type === 'movies'
                          ? `/movie/${item.id}`
                          : `/tv-show/${item.id}`
                      }
                      className="link">
                      <h3 className="populars__item__heading">
                        {item.title ? item.title : item.name}
                      </h3>
                    </Link>
                    <div className="populars__item__date">
                      {new Date(
                        item.release_date
                          ? item.release_date
                          : item.first_air_date
                      ).toDateString()}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
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

Populars.protypes = {
  popularTV: PropTypes.array.isRequired,
  popularMovies: PropTypes.array.isRequired,
  smallBackdropSize: PropTypes.number.isRequired
};

const mapStateToProps = state => ({
  popularTV: state.apiData.popularTV,
  popularMovies: state.apiData.popularMovies,
  smallBackdropSize: state.displaySettings.smallBackdropSize
});

export default connect(mapStateToProps)(Populars);
