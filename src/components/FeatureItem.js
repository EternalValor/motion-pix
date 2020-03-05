import React from 'react';
import { Link } from 'react-router-dom';

const featureItem = props => {
  let returnedElement;

  if (props.size === 'big') {
    returnedElement = (
      <div className="feature-block__item feature-block__item--big">
        <React.Fragment>
          <div className="feature-block__item__content">
            <h4 className="feature-block__item__title">
              {props.data.title ? props.data.title : props.data.name}
            </h4>
            <div className="feature-block__item__genres">
              {`${props.genres[props.data.genre_ids[0]]}, ${
                props.genres[props.data.genre_ids[1]]
              }`}
            </div>
          </div>
          <img
            className="feature-block__image"
            src={`https://image.tmdb.org/t/p/w500${props.data.backdrop_path}`}
            alt={props.data.title}
          />
        </React.Fragment>
        <div className="feature-block__item__shade" />
      </div>
    );
  } else if (props.size === 'small') {
    returnedElement = (
      <div className="feature-block__item feature-block__item--small">
        <React.Fragment>
          <div className="feature-block__item__content feature-block__item__content--small">
            <h4 className="feature-block__item__title">
              {props.data.title ? props.data.title : props.data.name}
            </h4>
            <div className="feature-block__item__genres">
              {`${props.genres[props.data.genre_ids[0]]}, ${
                props.genres[props.data.genre_ids[1]]
              }`}
            </div>
          </div>
          <img
            className="feature-block__image"
            src={`https://image.tmdb.org/t/p/w300${props.data.backdrop_path}`}
            alt={props.data.title}
          />
        </React.Fragment>
        <div className="feature-block__item__shade" />
      </div>
    );
  }

  return props.data.first_air_date ? (
    <Link to={`/tv-show/${props.data.id}`} data-test="feature-item">
      {returnedElement}
    </Link>
  ) : (
    <Link to={`/movie/${props.data.id}`} data-test="feature-item">
      {returnedElement}
    </Link>
  );
};

export default featureItem;
