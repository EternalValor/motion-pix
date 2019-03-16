import React from 'react';

class Populars extends React.Component {
  componentDidMount() {
    console.log(this.props);
  }

  componentDidUpdate(prevProps, prevState) {
    console.log(prevProps);
  }
  render() {
    return (
      <div className="populars">
        <h1 className="populars__heading">
          Popular{' '}
          {this.props.match.params.id === 'movies' ? 'Movies' : 'TV Shows'}{' '}
        </h1>
      </div>
    );
  }
}

export default Populars;
