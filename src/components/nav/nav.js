import React from 'react';
import {Link} from 'react-router';

import styles from './nav.css';

const Nav = ({ location, layout, closeMobileNav }) => {
  const navLinks = () => {
    const links = [
      { name: 'Home', navTo: '' },
      { name: 'User', navTo: '/userProfile'}
    ];

    return links.map((link, keyId) => {
      return (
        <li className={`${styles.navListItem} ${location.pathname === `/${link.navTo}` ? styles.selected : ''}`} key={keyId}>
          <Link to={`${link.navTo}` } className={styles.navLink} onClick={closeMobileNav}>{link.name}</Link>
        </li>
      );
    });
  };

  console.log('nav styles, %o', styles);
  const layoutClass = layout === "menu" ? styles.menu : "";

  return (
    <nav className={`${styles.navContainer} ${layoutClass}`}>
      <ul className={styles.navList}>
        {navLinks()}
      </ul>
    </nav>
  );
};

export default Nav;
