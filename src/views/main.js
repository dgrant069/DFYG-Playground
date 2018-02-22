import React from 'react'
import { Container } from 'semantic-ui-react'

import Header from '../components/header/header'
import Footer from '../components/footer/footer'

import styles from '../styles/common.css'

const Main = ({ children, location }) => {
	return (
		<div className={styles.app}>
			<Header location={location} />
			<main className={styles.main}>
				<Container className={`${styles.appPadding}`}>{children}</Container>
			</main>
			<Footer />
		</div>
	)
}

export default Main
