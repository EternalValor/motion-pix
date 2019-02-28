import React from 'react';
import PropTypes from 'prop-types';
import FeatureStack from './FeatureStack';
import { connect } from 'react-redux';
import { fetchFeaturedLists } from '../actions/apiActions';

class FeatureLists extends React.Component {
  componentDidMount() {
    this.props.fetchFeaturedLists(this.props.trending[0].id);
  }

  render() {
    console.log('[FEATURELISTS TRENDING] ', this.props.featuredLists);
    return (
      <div className="feature-lists">
        <h2 className="feature-lists__heading">Feature Lists</h2>
        <div className="feature-lists__stacks">
          <FeatureStack listData={this.props.featuredLists[0]} />
          <FeatureStack listData={this.props.featuredLists[1]} />
          <FeatureStack listData={this.props.featuredLists[2]} />
        </div>
      </div>
    );
  }
}

FeatureLists.propTypes = {
  fetchFeaturedLists: PropTypes.func.isRequired
};

const mapStateToProps = state => ({
  featuredLists: state.apiData.featuredLists
});

export default connect(
  mapStateToProps,
  { fetchFeaturedLists }
)(FeatureLists);
