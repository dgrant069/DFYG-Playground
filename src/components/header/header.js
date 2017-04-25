import React from 'react';
import {Link} from 'react-router';

import Nav from '../nav/nav';

import styles from './header.css';

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
    console.log("header styles %o", styles);
    const navMenuWrapperOpen = this.state.isMobileNavOpen ? styles.opened : styles.closed;

    return (
      <header className={`${styles.header} ${styles.appPadding} ${navMenuWrapperOpen}`}>
        <div className={styles.navMenuWrapper}>
          <button className={`ion-navicon ${styles.navOpenIcon} ${styles.navMenuIcon}`}
                  onClick={this.toggleMenu}>
          </button>
          <button className={`ion-android-close ${styles.navCloseIcon} ${styles.navMenuIcon}`}
                  onClick={this.toggleMenu}>
          </button>
          <div className={styles.navContainer}>
            <Nav location={ location }
                 layout="menu"
                 closeMobileNav={this.navigateClosesNav}/>
          </div>
        </div>

        <Link to="/" className={styles.logoWrapper}>
          <img src="boston_logo.png" alt="Logo" className={styles.logo}/>
        </Link>

        <div className={styles.navInlineWrapper}>
          <Nav location={ location } layout="inline"/>
        </div>
      </header>
    );
  }
}

export default Header;
