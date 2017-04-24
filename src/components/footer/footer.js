import React from 'react';
import {Link} from 'react-router';
import {css} from 'glamor';
// import {css, StyleSheet} from 'aphrodite';

import '../../../node_modules/font-awesome/css/font-awesome.min.css';
import {componentStyles} from './footer.css.js';

// import styles from './footer.css';
// import styles from './common.css.js';

// const styles = StyleSheet.create(componentStyles());
const styles = componentStyles();

class Footer extends React.Component {
  render(){
// const Footer = () => {
console.log("styles, %o", styles);
  return (
    <footer className={css(styles.footer)}>
      <Link className={css(styles.footerLogoWrapper)}>
        <img src="boston_fart.png" alt="Footer logo" className={css(styles.footerLogo)}/>
      </Link>

      <div className={css(styles.footerNavWrapper)} role="navigation">
        <ul className={css(styles.footerNavList)}>
          <li className={css(styles.footerNavItem)}><a href="#" className={css(styles.footerNavLink)}>ADVERTISE</a></li>
          <li className={css(styles.footerNavSplit)}>|</li>
          <li className={css(styles.footerNavItem)}><a href="#" className={css(styles.footerNavLink)}>PRIVACY</a></li>
          <li className={css(styles.footerNavSplit)}>|</li>
          <li className={css(styles.footerNavItem)}><a href="#" className={css(styles.footerNavLink)}>TERMS</a></li>
          <li className={css(styles.footerNavSplit)}>|</li>
          <li className={css(styles.footerNavItem)}><a href="#" className={css(styles.footerNavLink)}>COPYRIGHT</a></li>
        </ul>
      </div>

      <div className={css(styles.footerSocialWrapper)}>
        <ul className={css(styles.footerSocialList)}>
          <li className={css(styles.footerSocialItem)}><a href="#" className={css(styles.footerSocialLink)}><i className="ion-social-facebook" aria-hidden="true"></i></a></li>
          <li className={css(styles.footerSocialItem)}><a href="#" className={css(styles.footerSocialLink)}><i className="ion-social-twitter" aria-hidden="true"></i></a></li>
          <li className={css(styles.footerSocialItem)}><a href="#" className={css(styles.footerSocialLink)}><i className="ion-social-youtube" aria-hidden="true"></i></a></li>
        </ul>
      </div>
    </footer>
  );
  }
};

export default Footer;
