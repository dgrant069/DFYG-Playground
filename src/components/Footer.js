import React from 'react';
import {Link} from 'react-router';
import '../../node_modules/font-awesome/css/font-awesome.min.css';

const Footer = () => {
  return (
    <footer className="footer app-padding">
      <Link className="footer-logo-wrapper">
        <img src="Hummingbird-Logo-Header-Mobile-Web-2x.png" alt="Footer logo" className="footer-logo"/>
      </Link>

      <div className="footer-nav-wrapper" role="navigation">
        <ul className="footer-nav-list">
          <li className="footer-nav-item"><a href="#" className="footer-nav-link">ADVERTISE</a></li>
          <li className="footer-nav-split">|</li>
          <li className="footer-nav-item"><a href="#" className="footer-nav-link">PRIVACY</a></li>
          <li className="footer-nav-split">|</li>
          <li className="footer-nav-item"><a href="#" className="footer-nav-link">TERMS</a></li>
          <li className="footer-nav-split">|</li>
          <li className="footer-nav-item"><a href="#" className="footer-nav-link">COPYRIGHT</a></li>
        </ul>
      </div>

      <div className="footer-social-wrapper">
        <ul className="footer-social-list">
          <li className="footer-social-item"><a href="#" className="footer-social-link"><i className="ion-social-facebook" aria-hidden="true"></i></a></li>
          <li className="footer-social-item"><a href="#" className="footer-social-link"><i className="ion-social-twitter" aria-hidden="true"></i></a></li>
          <li className="footer-social-item"><a href="#" className="footer-social-link"><i className="ion-social-youtube" aria-hidden="true"></i></a></li>
        </ul>
      </div>
    </footer>
  );
};

export default Footer;
