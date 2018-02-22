import React from 'react'
import { Link } from 'react-router'

import styles from './nav.css'

const Nav = ({ location, layout, closeMobileNav }) => {
	const navLinks = () => {
		const links = [
			{ name: 'Home', navTo: '/' },
			{ name: 'Create Project', navTo: '/AddProject' },
		]

		return links.map((link, keyId) => {
			return (
				<li
					className={`${styles.navListItem} ${
						location.pathname === `${link.navTo}` ? styles.selected : ''
					}`}
					key={keyId}>
					<Link
						to={`${link.navTo}`}
						className={styles.navLink}
						onClick={closeMobileNav}>
						{link.name}
					</Link>
				</li>
			)
		})
	}

	const layoutClass = layout === 'menu' ? styles.menu : ''

	return (
		<nav className={`${styles.navContainer} ${layoutClass}`}>
			<ul className={styles.navList}>{navLinks()}</ul>
		</nav>
	)
}

export default Nav
