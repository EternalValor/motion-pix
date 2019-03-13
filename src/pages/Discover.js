import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import DiscoverForm from '../components/DiscoverForm';
import DiscoverGrid from '../components/DiscoverGrid';
import Icon from '../components/Icon';

class Discover extends React.Component {
  state = {
    activeSelector: 'left',
    discoverType: 'movie',
    page: 1
  };

  handleSelectorClick = selector => {
    if (selector === 'tv')
      this.setState({ activeSelector: 'right', discoverType: 'tv' });
    else if (selector === 'movie')
      this.setState({ activeSelector: 'left', discoverType: 'movie' });
  };

  componentDidMount() {
    this.props.history.replace('/discover', {
      query: {
        year: 'All',
        genre: 'All',
        sortOption: 'popularity.desc',
        page: 1
      },
      type: this.state.discoverType
    });
  }

  updateType = callback => {
    const type = this.props.history.location.state.type;
    this.setState(
      {
        discoverType: type,
        activeSelector: type === 'movie' ? 'left' : 'right'
      },
      callback
    );
  };

  handlePreviousClick = () => {
    if (this.state.page !== 1) {
      this.setState(state => {
        const oldPage = this.props.history.location.state.query.page
          ? this.props.history.location.state.query.page
          : state.page;

        return { page: oldPage - 1 };
      });
    }
  };

  handleNextClick = () => {
    if (this.state.page < this.props.discoverData.total_pages) {
      this.setState(state => {
        const oldPage = this.props.history.location.state.query.page
          ? this.props.history.location.state.query.page
          : state.page;
        return { page: oldPage + 1 };
      });
    }
  };

  resetPage = () => {
    this.setState({ page: 1 });
  };

  render() {
    let leftSelectorClass =
      this.state.discoverType === 'movie'
        ? 'discover__selector discover__selector--active'
        : 'discover__selector';
    let rightSelectorClass =
      this.state.discoverType === 'tv'
        ? 'discover__selector discover__selector--active'
        : 'discover__selector';

    return (
      <div className="discover">
        <h1 className="discover__heading">Discover the latest releases</h1>
        <div className="discover__selectors">
          <span
            className={leftSelectorClass}
            onClick={() => this.handleSelectorClick('movie')}>
            Movies
          </span>
          <span
            className={rightSelectorClass}
            onClick={() => this.handleSelectorClick('tv')}>
            TV Shows
          </span>
          <div
            className={`discover__selectors__underline discover__selectors__underline--${
              this.state.activeSelector
            }`}
          />
        </div>
        <DiscoverForm
          type={this.state.discoverType}
          history={this.props.history}
          updateType={this.updateType}
          page={this.state.page}
          resetPage={this.resetPage}
        />
        <DiscoverGrid type={this.state.discoverType} />
        <div className="discover-page-number">
          <div
            className="discover-page-number__nav-button"
            onClick={this.handlePreviousClick}>
            <Icon
              name="arrow-right"
              className="discover-page-number__icon discover-page-number__icon--rotated"
            />
            <span className="discover-page-number__nav-button__text">
              Previous
            </span>
          </div>
          <span className="discover-page-number__indicator">
            {this.props.discoverData.page} of{' '}
            {this.props.discoverData.total_pages}
          </span>
          <div
            className="discover-page-number__nav-button"
            onClick={this.handleNextClick}>
            <span className="discover-page-number__nav-button__text">Next</span>
            <Icon name="arrow-right" className="discover-page-number__icon" />
          </div>
        </div>
      </div>
    );
  }
}

Discover.propTypes = {
  discoverData: PropTypes.object.isRequired
};

const mapStateToProps = state => ({
  discoverData: state.apiData.discoverData
});

export default connect(mapStateToProps)(Discover);
