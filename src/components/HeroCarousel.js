import React from 'react';
import Slider from 'react-slick';
import { Link } from 'react-router-dom';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

class HeroCarousel extends React.Component {
  state = {
    src: null
  };

  render() {
    console.log(this.props);
    let settings = {
      dots: true,
      infinite: true,
      speed: 500,
      slidesToShow: 1,
      slidesToScroll: 1,
      arrows: false,
      dotsClass: 'slick-dots custom-dots',
      autoplay: true,
      autoplaySpeed: 3000
    };

    return (
      <div className="hero">
        <h2 className="hero__heading">Top Trending</h2>
        <Slider className="hero__carousel" {...settings}>
          {this.props.trending.map((movie, index) => (
            <div key={movie.id}>
              <Link className="link" to={`/movie/${movie.id}`}>
                <div
                  style={{ backgroundImage: `url(${this.props.src[index]})` }}
                  className="hero__carousel__item">
                  <div className="hero__carousel__item__content">
                    <img
                      src={`https://image.tmdb.org/t/p/w200/${
                        movie.poster_path
                      }`}
                      alt={movie.title}
                      className="hero__carousel__poster"
                    />
                    <div className="hero__carousel__headings">
                      <h3 className="hero__carousel__title">{movie.title}</h3>
                      <h5 className="hero__carousel__subtitle">
                        {movie.title}
                      </h5>
                    </div>
                  </div>
                </div>
              </Link>
            </div>
          ))}
        </Slider>
      </div>
    );
  }
}

export default HeroCarousel;
