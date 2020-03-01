import React from 'react';
import Icon from './Icon';
import { Link, NavLink } from 'react-router-dom';
import { Redirect } from 'react-router-dom';

class Layout extends React.Component {
  state = {
    overlayMenuVisible: false,
    redirect: false
  };

  handleMenuClick = () => {
    const currentState = this.state.overlayMenuVisible;
    this.setState({ overlayMenuVisible: !currentState });
  };

  closeMenu = () => {
    this.setState({ overlayMenuVisible: false });
  };

  onSubmit = e => {
    e.preventDefault();
    this.setState({ redirect: true }, () => this.setState({ redirect: false }));
  };

  render() {
    let overlayClass = this.state.overlayMenuVisible
      ? 'header-bar__links header-bar__links--overlay'
      : 'header-bar__links';
    if (!this.state.redirect) {
      return (
        <React.Fragment>
          <div className="header">
            <div className="header-bar">
              <Link className="link" to="/">
                <span className="logo" onClick={this.closeMenu}>
                  <Icon className="logo-icon" name="camera" />
                  <span className="u-bold">Motion</span>Pix
                </span>
              </Link>
              <span
                style={
                  this.state.overlayMenuVisible ? { color: '#99dd61' } : {}
                }
                onClick={this.handleMenuClick}
                className="header-bar__menu-btn"
                role="button">
                &#9776;
              </span>
              {this.state.overlayMenuVisible ? (
                <React.Fragment>
                  <div className="overlay-filter" onClick={this.closeMenu} />
                  <ul className={overlayClass} onClick={this.closeMenu}>
                    {/* Make these into links */}
                    <li>Sign In</li>
                    <li>
                      <NavLink
                        className="link"
                        to="/"
                        exact
                        activeClassName="active-nav-link">
                        Home
                      </NavLink>
                    </li>
                    <li>
                      <NavLink
                        className="link"
                        to="/discover"
                        activeClassName="active-nav-link">
                        Discover
                      </NavLink>
                    </li>
                    <li>
                      <NavLink
                        className="link"
                        to="/popular/movies"
                        activeClassName="active-nav-link">
                        Movies
                      </NavLink>
                    </li>
                    <li>
                      <NavLink
                        className="link"
                        to="/popular/tv-shows"
                        activeClassName="active-nav-link">
                        TV Shows
                      </NavLink>
                    </li>
                  </ul>
                </React.Fragment>
              ) : null}
              <ul className="header-bar__links header-bar__links--desktop">
                {/* Make these into links */}
                <li>
                  <Link className="link" to="/discover">
                    Discover
                  </Link>
                </li>
                <li>
                  <Link className="link" to="/popular/movies">
                    Movies
                  </Link>
                </li>
                <li>
                  <Link className="link" to="/popular/tv-shows">
                    TV Shows
                  </Link>
                </li>
                <li>Sign In</li>
              </ul>
            </div>
          </div>
          <div className="main">
            <div className="navigation">
              <Icon
                className="navigation__icon navigation__back"
                name="chevron-left"
              />
              <Icon
                className="navigation__icon navigation__forward"
                name="chevron-right"
              />
              <form onSubmit={this.onSubmit} className="search-form">
                <Icon className="navigation__icon" name="magnify" />
                <input
                  type="text"
                  className="search-bar"
                  placeholder="Search for a movie, tv show, actor..."
                />
              </form>
            </div>

            <div className="main__content">{this.props.children}</div>

            <div className="footer">
              <Icon className="footer__film-icon" name="film" />
              <span className="logo">
                <Icon className="logo-icon" name="camera" />
                <span className="u-bold">Motion</span>Pix
              </span>
              <div className="footer__lists">
                <ul className="footer__list">
                  <li className="u-semi-bold u-fs-18">The Basics</li>
                  <li>About Us</li>
                  <li>Contact Us</li>
                  <a href="https://github.com/EternalValor/motion-pix" className="link">
                    Github
                    <Icon className="github-circle" name="github-circle" />
                  </a>
                </ul>
                <ul className="footer__list">
                  <li className="u-semi-bold u-fs-18">Community</li>
                  <li>Forums</li>
                  <li>Members</li>
                  <li>Social Media</li>
                </ul>
              </div>
              <div className="footer__watermark">Powered by TMDb</div>
            </div>
          </div>
        </React.Fragment>
      );
    } else {
      return <Redirect to="/search" push />;
    }
  }
}

export default Layout;
