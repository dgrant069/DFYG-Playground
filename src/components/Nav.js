import React from 'react';
import {IndexLink, Link} from 'react-router';

const Nav = ({ location, layout, closeMobileNav }) => {
  const navLinks = () => {
    const links = [
      { name: 'Home', navTo: '' },
      { name: 'Watch Now', navTo: 'watchnow' },
      { name: 'News', navTo: 'news' },
      { name: 'Sports', navTo: 'sports' },
      { name: 'Entertainment', navTo: 'entertainment' },
      { name: 'Kids', navTo: 'kids' }
    ];

    return links.map((link, keyId) => {
      return (
        <li className={`nav-list-item ${location.pathname === `/${link.navTo}` ? 'selected' : ''}`} key={keyId}>
          <Link to={`/${link.navTo}` } className="nav-link" onClick={closeMobileNav}>{link.name}</Link>
        </li>
      );
    });
  };

  return (
    <nav className={`nav-container ${layout}`}>
      <ul className="nav-list">
        {navLinks()}
      </ul>
    </nav>
  );
};

export default Nav;
