import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import DiscoverItem from './DiscoverItem';
import uuid from 'uuid';

const discoverGrid = props => {
  let fakeDiscoverItems = [];
  for (let i = 0; i < 20; i++)
    fakeDiscoverItems[i] = (
      <div key={uuid()} className="discover-item discover-item--fake">
        <div className="discover-item__poster discover-item__poster--fake fake-div" />
        <div className="discover-item__info discover-item__info--fake fake-div">
          <div className="discover-item__heading discover-item__heading--fake fake-div" />
          <div className="discover-item__date discover-item__date--fake fake-div" />
          <div className="discover-item__description discover-item__description--fake fake-div" />
          <div className="discover-item__more-info discover-item__more-info--fake fake-div" />
        </div>
      </div>
    );

  return (
    <div className="discover-grid">
      {Object.keys(props.discoverData).length
        ? props.discoverData.results.map(item => (
            <DiscoverItem
              key={item.id}
              discoverItemData={item}
              type={props.type === 'movie' ? 'movie' : 'tv-show'}
            />
          ))
        : fakeDiscoverItems.map(item => item)}
    </div>
  );
};

discoverGrid.propTypes = {
  discoverData: PropTypes.object.isRequired,
  type: PropTypes.string.isRequired
};

const mapStateToProps = state => ({
  discoverData: state.apiData.discoverData
});

export default connect(mapStateToProps)(discoverGrid);
