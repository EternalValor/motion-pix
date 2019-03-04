import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { image_base_url } from '../api_info';
import Icon from '../components/Icon';

const screenPlayHero = props => (
  <div
    style={{
      backgroundImage: `url(${image_base_url}/w${props.backdropSize}${
        props.movieDetails.backdrop_path
      })`
    }}
    className="screenplay-hero">
    <div className="screenplay-hero__content">
      <div className="screenplay-hero__content--top">
        <div className="screenplay-hero__poster-container">
          <img
            src={`${image_base_url}/w185${props.movieDetails.poster_path}`}
            alt="movieposter"
            className="screenplay-hero__poster"
          />
        </div>
        <div className="screenplay-hero__text">
          <h1 className="screenplay-hero__heading">
            {`${props.movieDetails.title} (${parseInt(
              props.movieDetails.release_date
            )})`}
          </h1>
          <div className="screenplay-hero__overview">
            <h3 className="screenplay-hero__overview__heading">Overview</h3>
            <div className="screenplay-hero__overview__text">
              {props.movieDetails.overview
                ? `${props.movieDetails.overview.split('.')[0]}. ${
                    props.movieDetails.overview.split('.')[1]
                  }.`
                : ' '}
            </div>
            <div className="screenplay-hero__trailer">
              <div className="play-button" /> &nbsp;&nbsp;Play Trailer
            </div>
          </div>
        </div>
      </div>
      <div className="screenplay-hero__content--bottom">
        <div className="screenplay-hero__buttons">
          <Icon
            name="format-list-bulleted-square"
            className="screenplay-hero__icon"
          />
          <Icon name="clock" className="screenplay-hero__icon" />
          <Icon name="heart" className="screenplay-hero__icon" />
        </div>
      </div>
    </div>
  </div>
);

screenPlayHero.propTypes = {
  backdropSize: PropTypes.number.isRequired
};

const mapStateToProps = state => ({
  backdropSize: state.displaySettings.backdropSize
});

export default connect(
  mapStateToProps,
  {}
)(screenPlayHero);
