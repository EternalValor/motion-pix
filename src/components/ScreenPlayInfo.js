import React from 'react';
import Slider from 'react-slick';
import Icon from './Icon';
import { image_base_url } from '../api_info';

const NextArrow = props => (
  <div
    className={props.className}
    style={{ ...props.style, display: 'block' }}
    onClick={props.onClick}>
    <Icon name="chevron-right" className="screenplay-info__carousel__arrow" />
  </div>
);

const PrevArrow = props => (
  <div
    className={props.className}
    style={{ ...props.style, display: 'block' }}
    onClick={props.onClick}>
    <Icon name="chevron-left" className="screenplay-info__carousel__arrow" />
  </div>
);

const screenPlayInfo = props => {
  let settings = {
    lazyLoad: true,
    infinite: false,
    speed: 500,
    slidesToShow: 5,
    slidesToScroll: 3,
    nextArrow: <NextArrow />,
    prevArrow: <PrevArrow />,
    responsive: [
      {
        breakpoint: 1100,
        settings: {
          slidesToShow: 4,
          slidesToScroll: 2
        }
      },
      {
        breakpoint: 850,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 2
        }
      },
      {
        breakpoint: 325,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1
        }
      }
    ]
  };
  console.log(props.movieCast);
  let movieCast = props.movieCast.slice(0, 15);
  return (
    <div className="screenplay-info">
      {/* Left Side */}
      <div className="screenplay-info__left">
        {/* Displayed only on mobile */}
        <div className="screenplay-info__overview">
          <h3 className="screenplay-info__overview__heading">Overview</h3>
          <div className="screenplay-info__overview__text">
            {props.movieDetails.overview}
          </div>
          <div className="screenplay-info__overview__trailer">
            <div className="play-button play-button--black" /> &nbsp;&nbsp;Play
            Trailer
          </div>
        </div>

        {/* Main Info - Always displayed */}
        <div className="screenplay-info__cast">
          <h2 className="screenplay-info__section-heading">Cast</h2>
          <Slider className="screenplay-info__carousel" {...settings}>
            {movieCast.map(castMember => (
              <div key={castMember.cast_id}>
                <div className="screenplay-info__carousel__item">
                  <img
                    src={`${image_base_url}/w185${castMember.profile_path}`}
                    alt={castMember.name}
                    className="screenplay-info__carousel__item__image"
                  />
                  <div className="screenplay-info__carousel__item__text-container">
                    <div className="screenplay-info__carousel__item__text">
                      <h4 className="screenplay-info__carousel__item__actor">
                        {castMember.name}
                      </h4>
                      <div className="screenplay-info__carousel__item__character">
                        {castMember.character}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </Slider>
        </div>

        <div className="screenplay-info__reviews">
          <h2 className="screenplay-info__section-heading">Reviews</h2>
          <div className="screenplay-info__reviews__write-review">
            Please Sign In to leave a review.
          </div>
        </div>
      </div>

      {/* Right Side */}
      <div className="screenplay-info__right">
        <div className="screenplay-info__fun-facts">
          <h3 className="screenplay-info__fun-facts__heading">Fun Facts</h3>
          <div className="screenplay-info__fun-facts__fact">
            <h4 className="screenplay-info__fun-facts__fact__heading">
              Status
            </h4>
            <div className="screenplay-info__fun-facts__fact__info">
              {props.movieDetails.status}
            </div>
          </div>
          <div className="screenplay-info__fun-facts__fact">
            <h4 className="screenplay-info__fun-facts__fact__heading">
              Original Language
            </h4>
            <div className="screenplay-info__fun-facts__fact__info">
              {props.movieDetails.original_language.toUpperCase()}
            </div>
          </div>
          <div className="screenplay-info__fun-facts__fact">
            <h4 className="screenplay-info__fun-facts__fact__heading">
              Runtime
            </h4>
            <div className="screenplay-info__fun-facts__fact__info">
              {`${props.movieDetails.runtime} minutes`}
            </div>
          </div>
          <div className="screenplay-info__fun-facts__fact">
            <h4 className="screenplay-info__fun-facts__fact__heading">
              Budget
            </h4>
            <div className="screenplay-info__fun-facts__fact__info">
              {new Intl.NumberFormat('en-US', {
                style: 'currency',
                currency: 'USD'
              }).format(props.movieDetails.budget)}
            </div>
          </div>
          <div className="screenplay-info__fun-facts__fact">
            <h4 className="screenplay-info__fun-facts__fact__heading">
              Revenue
            </h4>
            <div className="screenplay-info__fun-facts__fact__info">
              {new Intl.NumberFormat('en-US', {
                style: 'currency',
                currency: 'USD'
              }).format(props.movieDetails.revenue)}
            </div>
          </div>
          <div className="screenplay-info__fun-facts__fact">
            <h4 className="screenplay-info__fun-facts__fact__heading">
              Genres
            </h4>
            <div className="screenplay-info__fun-facts__fact__info">
              Released
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default screenPlayInfo;
