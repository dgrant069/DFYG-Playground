import React from 'react';
import {Link} from 'react-router';
import classNames from 'classnames';

import Nav from './Nav';

class Header extends React.Component {
  state = { isMobileNavOpen: false };

  toggleMenu = (event) => {
    event.preventDefault();
    this.setState({
      isMobileNavOpen: !this.state.isMobileNavOpen
    });
  };

  removeMenuDesktop = () => {
    if(window.innerWidth >= 1025) {
      this.navigateClosesNav();
    }
  };

  navigateClosesNav = (event) => {
    this.setState({
      isMobileNavOpen: false
    });
  };

  /**
   * Add event listener
   */
  componentDidMount() {
    window.addEventListener("resize", this.removeMenuDesktop);
  }

  /**
   * Remove event listener
   */
  componentWillUnmount() {
    window.removeEventListener("resize", this.removeMenuDesktop);
  }

  render() {
    const isMobileNavOpen = this.state.isMobileNavOpen;
    const navMenuWrapper = classNames('nav-menu-wrapper', { 'opened': isMobileNavOpen });

    return (
      <header className="header app-padding">
        <div className={navMenuWrapper}>
          <button className="ion-navicon nav-open-icon nav-menu-icon"
                  onClick={this.toggleMenu}>
          </button>
          <button className="ion-android-close nav-close-icon nav-menu-icon"
                  onClick={this.toggleMenu}>
          </button>
          <Nav location={ location }
               layout="menu"
               closeMobileNav={this.navigateClosesNav}/>
        </div>

        <Link to="/" className="logo-wrapper">
          <img src="Hummingbird-Logo-Header-Mobile-Web-2x.png" alt="Logo" className="logo"/>
        </Link>

        <div className="nav-inline-wrapper">
          <Nav location={ location } layout="inline"/>
        </div>
      </header>
    );
  }
}

export default Header;
