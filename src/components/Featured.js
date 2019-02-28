import React from 'react';
import PropTypes from 'prop-types';
import Icon from './Icon';
import FeaturedItem from './FeatureItem';
import FeatureLists from './FeatureLists';
import { connect } from 'react-redux';
import { fetchPopularTV, fetchPopularMovies } from '../actions/apiActions';

class Featured extends React.Component {
  componentDidMount() {
    this.props.fetchPopularTV();
    this.props.fetchPopularMovies();
  }

  render() {
    // Used to load a default placeholder while content in loading
    let defaultPic = (
      <div
        style={{
          width: '100%',
          height: '100%',
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          backgroundImage:
            'linear-gradient(to top, rgba(0, 0, 0, .4), transparent)'
        }}>
        <Icon
          style={{ width: '60%', height: '60%', fill: '#FFFFFF' }}
          name="camera"
        />
      </div>
    );

    return (
      <div className="featured">
        <div className="popular-features">
          <div className="feature-block feature-block__on-tv">
            <h2 className="feature-block__title">Popular on TV</h2>
            <div className="feature-block__items">
              {this.props.popularTV.length ? (
                <FeaturedItem
                  data={this.props.popularTV[0]}
                  size="big"
                  genres={this.props.genresTV}
                />
              ) : (
                defaultPic
              )}
              <div className="feature-block__small-items">
                {this.props.popularTV.length ? (
                  <FeaturedItem
                    data={this.props.popularTV[1]}
                    size="small"
                    genres={this.props.genresTV}
                  />
                ) : (
                  defaultPic
                )}

                {this.props.popularTV.length ? (
                  <FeaturedItem
                    data={this.props.popularTV[2]}
                    size="small"
                    genres={this.props.genresTV}
                  />
                ) : (
                  defaultPic
                )}
              </div>
            </div>
          </div>

          <div className="feature-block in-theaters">
            <h2 className="feature-block__title">In Theaters</h2>
            <div className="feature-block__items">
              <div className="feature-block__item feature-block__item--big">
                {this.props.popularMovies.length ? (
                  <FeaturedItem
                    data={this.props.popularMovies[0]}
                    size="big"
                    genres={this.props.genresMovies}
                  />
                ) : (
                  defaultPic
                )}
                <div className="feature-block__item__shade" />
              </div>

              <div className="feature-block__small-items">
                {this.props.popularMovies.length ? (
                  <FeaturedItem
                    data={this.props.popularMovies[1]}
                    size="small"
                    genres={this.props.genresMovies}
                  />
                ) : (
                  defaultPic
                )}

                {this.props.popularMovies.length ? (
                  <FeaturedItem
                    data={this.props.popularMovies[2]}
                    size="small"
                    genres={this.props.genresMovies}
                  />
                ) : (
                  defaultPic
                )}
              </div>
            </div>
          </div>
        </div>
        {this.props.trending.length ? (
          <FeatureLists trending={this.props.trending} />
        ) : null}
      </div>
    );
  }
}

Featured.propTypes = {
  fetchPopularTV: PropTypes.func.isRequired,
  fetchPopularMovies: PropTypes.func.isRequired,
  popularTV: PropTypes.array.isRequired,
  popularMovies: PropTypes.array.isRequired
};

const mapStateToProps = state => ({
  popularTV: state.apiData.popularTV,
  popularMovies: state.apiData.popularMovies,
  genresTV: state.apiData.genresTV,
  genresMovies: state.apiData.genresMovies
});

export default connect(
  mapStateToProps,
  { fetchPopularTV, fetchPopularMovies }
)(Featured);
