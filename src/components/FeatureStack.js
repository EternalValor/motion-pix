import React from 'react';
import { Link } from 'react-router-dom';

// Initialize classes for individual feature-stack items
const defaultFirstClasses = [
  'feature-stack__item',
  'feature-stack__item--first'
];
const defaultSecondClasses = [
  'feature-stack__item',
  'feature-stack__item--second'
];
const defaultThirdClasses = [
  'feature-stack__item',
  'feature-stack__item--third'
];
let firstItemClasses = [...defaultFirstClasses];
let secondItemClasses = [...defaultSecondClasses];
let thirdItemClasses = [...defaultThirdClasses];

class FeatureStack extends React.Component {
  state = {
    currentHover: -1
  };

  handleHover = e => {
    this.setState({ currentHover: parseInt(e.target.dataset.position) });
  };

  handleLeave = () => {
    this.setState({ currentHover: -1 });
  };

  render() {
    // Switch classes depending on hover state
    if (this.state.currentHover === 1) {
      firstItemClasses = [
        ...defaultFirstClasses,
        'feature-stack__item--first--hover'
      ];
      secondItemClasses = [...defaultSecondClasses];
    } else if (this.state.currentHover === 2) {
      secondItemClasses = [
        ...defaultSecondClasses,
        'feature-stack__item--second--hover'
      ];
      firstItemClasses = [
        ...defaultFirstClasses,
        'feature-stack__item--first--second-hover'
      ];
      thirdItemClasses = [...defaultThirdClasses];
    } else if (this.state.currentHover === 3) {
      thirdItemClasses = [
        ...defaultThirdClasses,
        'feature-stack__item--third--hover'
      ];
      secondItemClasses = [
        ...defaultSecondClasses,
        'feature-stack__item--second--third-hover'
      ];
      firstItemClasses = [
        ...defaultFirstClasses,
        'feature-stack__item--first--third-hover'
      ];
    } else {
      firstItemClasses = [...defaultFirstClasses];
      secondItemClasses = [...defaultSecondClasses];
      thirdItemClasses = [...defaultThirdClasses];
    }

    // Render featured movie list when lists are done loading
    // When it's not fully loaded, a placeholder is rendered
    let featureStack = this.props.listData ? (
      <div className="feature-stack" onMouseLeave={this.handleLeave}>
        <h3 className="feature-stack__heading">
          <Link className="link" to={`/list/${this.props.listData.id}`}>
            {this.props.listData.name}
          </Link>
        </h3>

        <FeatureStackItem
          className={firstItemClasses.join(' ')}
          data={this.props.listData.items[0]}
          handleHover={this.handleHover}
          position={1}
        />
        <FeatureStackItem
          className={secondItemClasses.join(' ')}
          data={this.props.listData.items[1]}
          handleHover={this.handleHover}
          position={2}
        />
        <FeatureStackItem
          className={thirdItemClasses.join(' ')}
          data={this.props.listData.items[2]}
          handleHover={this.handleHover}
          position={3}
        />
      </div>
    ) : (
      <div className="feature-stack" onMouseLeave={this.handleLeave}>
        <div
          className={firstItemClasses.join(' ')}
          onMouseOver={this.handleHover}
          data-position={1}
        />
        <div
          className={secondItemClasses.join(' ')}
          onMouseOver={this.handleHover}
          data-position={2}
        />
        <div
          className={thirdItemClasses.join(' ')}
          onMouseOver={this.handleHover}
          data-position={3}
        />
      </div>
    );

    return (
      <React.Fragment data-test="feature-stack">{featureStack}</React.Fragment>
    );
  }
}

/**
 *
 * @param {Object} props - React element props
 * @param {Object} props.data - Data object containing the movie details
 * @param {func} props.handleHover - Function to handle the hover of the item
 * @param {number} props.position - The position of the movie in the feature stack
 * @param {string} props.className - Classes to apply to feature stack item
 */
const FeatureStackItem = props =>
  props.data ? (
    <Link to={`/movie/${props.data.id}`}>
      <div
        style={{
          background: `url(https://image.tmdb.org/t/p/w200/${props.data.poster_path})`,
          backgroundSize: 'cover'
        }}
        onMouseOver={props.handleHover}
        className={props.className}>
        <div
          className="feature-stack__item__content"
          data-position={props.position}>
          <h4 className="feature-stack__item__heading">{props.data.title}</h4>
        </div>
      </div>
    </Link>
  ) : null;

export default FeatureStack;
