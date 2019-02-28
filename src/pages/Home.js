import React from 'react';
import HeroCarousel from '../components/HeroCarousel';
import Featured from '../components/Featured';
import { apiStem, apiKey, imageUrlStem } from '../api_info';

class Home extends React.Component {
  state = {
    trending: [],
    src: [],
    popularMovies: []
  };

  componentDidMount() {
    // Fetch trending movies and ~ lazy load images
    fetch(`${apiStem}/trending/movie/week?api_key=${apiKey}`)
      .then(res => res.json())
      .then(data => {
        // Create state with initial small images
        const src = [];
        let trending = data.results.slice(0, 5);
        trending.forEach(movie => {
          src.push(`${imageUrlStem}/w200/${movie.backdrop_path}`);
        });
        this.setState({ trending, src });

        // Update state with the larger images
        this.state.trending.forEach((movie, index) => {
          const src = `${imageUrlStem}/w1280/${movie.backdrop_path}`;
          let stateSrc = this.state.src;
          stateSrc[index] = src;
          const imageLoader = new Image();
          imageLoader.src = src;
          imageLoader.onload = () => {
            this.setState({ src: stateSrc });
          };
        });
      });
  }

  render() {
    return (
      <React.Fragment>
        <HeroCarousel trending={this.state.trending} src={this.state.src} />
        <Featured trending={this.state.trending} />
      </React.Fragment>
    );
  }
}

export default Home;
