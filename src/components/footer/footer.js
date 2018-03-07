import React from 'react'
import { Link } from 'react-router'
import { css } from 'glamor'
// import {css, StyleSheet} from 'aphrodite';

import '../../../node_modules/font-awesome/css/font-awesome.min.css'
import { componentStyles } from './footer.css.js'

// import styles from './footer.css';
// import styles from './common.css.js';

// const styles = StyleSheet.create(componentStyles());
const styles = componentStyles()

class Footer extends React.Component {
	state = {
		logoSpun: 0,
	}

	updateState = (event) => {
		event.preventDefault()
		this.setState((prevState) => {
			return { logoSpun: prevState.logoSpun + 1 }
		})
	}

	bounce = () => {
		if ((this.state.logoSpun / 2) % 1) {
			return css.keyframes({
				'0%': { transform: 'scale(1)' },
				'50%': { transform: 'scale(1.5) rotateY(180deg)' },
				'100%': { transform: 'scale(1) rotateY(360deg)' },
			})
		} else {
			return css.keyframes({
				'0%': { transform: 'scale(1)' },
				'50%': { transform: 'scale(1.5) rotateX(180deg)' },
				'100%': { transform: 'scale(1) rotateX(360deg)' },
			})
		}
	}

	render() {
		return (
			<footer className={css(styles.footer)}>
				<Link className={css(styles.footerLogoWrapper)}>
					<img
						src="boston_fart.png"
						alt="Footer logo"
						className={css(styles.footerLogo, {
							':hover': { animation: `${this.bounce()} 3s` },
						})}
						onClick={this.updateState}
					/>
				</Link>

				<div className={css(styles.footerNavWrapper)} role="navigation">
					<ul className={css(styles.footerNavList)}>
						<li className={css(styles.footerNavItem)}>
							<a href="#" className={css(styles.footerNavLink)}>
								ADVERTISE
							</a>
						</li>
						<li className={css(styles.footerNavSplit)}>|</li>
						<li className={css(styles.footerNavItem)}>
							<a href="#" className={css(styles.footerNavLink)}>
								PRIVACY
							</a>
						</li>
						<li className={css(styles.footerNavSplit)}>|</li>
						<li className={css(styles.footerNavItem)}>
							<a href="#" className={css(styles.footerNavLink)}>
								TERMS
							</a>
						</li>
						<li className={css(styles.footerNavSplit)}>|</li>
						<li className={css(styles.footerNavItem)}>
							<a href="#" className={css(styles.footerNavLink)}>
								COPYRIGHT
							</a>
						</li>
					</ul>
				</div>

				<div className={css(styles.footerSocialWrapper)}>
					<ul className={css(styles.footerSocialList)}>
						<li className={css(styles.footerSocialItem)}>
							<a href="#" className={css(styles.footerSocialLink)}>
								<i className="ion-social-facebook" aria-hidden="true" />
							</a>
						</li>
						<li className={css(styles.footerSocialItem)}>
							<a href="#" className={css(styles.footerSocialLink)}>
								<i className="ion-social-twitter" aria-hidden="true" />
							</a>
						</li>
						<li className={css(styles.footerSocialItem)}>
							<a href="#" className={css(styles.footerSocialLink)}>
								<i className="ion-social-youtube" aria-hidden="true" />
							</a>
						</li>
					</ul>
				</div>
			</footer>
		)
	}
}

export default Footer
