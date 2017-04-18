import React from 'react';
import {Link} from 'react-router';
import '../../../node_modules/font-awesome/css/font-awesome.min.css';

import styles from './footer.css';

const Footer = () => {
  return (
    <footer className={`${styles.footer} ${styles.appPadding}`}>
      <Link className={styles.footerLogoWrapper}>
        <img src="boston_fart.png" alt="Footer logo" className={styles.footerLogo}/>
      </Link>

      <div className={styles.footerNavWrapper} role="navigation">
        <ul className={styles.footerNavList}>
          <li className={styles.footerNavItem}><a href="#" className={styles.footerNavLink}>ADVERTISE</a></li>
          <li className={styles.footerNavSplit}>|</li>
          <li className={styles.footerNavItem}><a href="#" className={styles.footerNavLink}>PRIVACY</a></li>
          <li className={styles.footerNavSplit}>|</li>
          <li className={styles.footerNavItem}><a href="#" className={styles.footerNavLink}>TERMS</a></li>
          <li className={styles.footerNavSplit}>|</li>
          <li className={styles.footerNavItem}><a href="#" className={styles.footerNavLink}>COPYRIGHT</a></li>
        </ul>
      </div>

      <div className={styles.footerSocialWrapper}>
        <ul className={styles.footerSocialList}>
          <li className={styles.footerSocialItem}><a href="#" className={styles.footerSocialLink}><i className="ion-social-facebook" aria-hidden="true"></i></a></li>
          <li className={styles.footerSocialItem}><a href="#" className={styles.footerSocialLink}><i className="ion-social-twitter" aria-hidden="true"></i></a></li>
          <li className={styles.footerSocialItem}><a href="#" className={styles.footerSocialLink}><i className="ion-social-youtube" aria-hidden="true"></i></a></li>
        </ul>
      </div>
    </footer>
  );
};

export default Footer;
