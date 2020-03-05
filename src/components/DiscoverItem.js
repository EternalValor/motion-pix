import React from 'react';
import { image_base_url } from '../api_info';
import { Link } from 'react-router-dom';

const discoverItem = props => {
  return (
    <div className="discover-item" data-test="discover-item">
      <Link to={`/${props.type}/${props.discoverItemData.id}`} className="link">
        <div
          style={{
            backgroundImage: `url(${image_base_url}/w185${props.discoverItemData.poster_path})`
          }}
          className="discover-item__poster"
        />
      </Link>
      <div className="discover-item__info">
        <h2 className="discover-item__heading">
          {props.discoverItemData.title
            ? props.discoverItemData.title
            : props.discoverItemData.name}
        </h2>
        <div className="discover-item__date">
          {new Date(
            props.discoverItemData.release_date
              ? props.discoverItemData.release_date
              : props.discoverItemData.first_air_date
          ).toDateString()}
        </div>
        <div className="discover-item__desc-container">
          <div className="discover-item__description">
            {props.discoverItemData.overview
              ? `${props.discoverItemData.overview.slice(0, 150)}...`
              : 'No description provided yet ;('}
          </div>
          <div className="discover-item__more-info">
            <Link
              to={`/${props.type}/${props.discoverItemData.id}`}
              className="link">
              More Info
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default discoverItem;
