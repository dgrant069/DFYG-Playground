import React from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'

import CardList from '../../components/cardlist/cardlist'

/*
** This view lists the projects available to take on freelancing
*/
class Home extends React.Component {
	state = {
		projects: [],
	}

	render() {
		return (
			<section>
				<CardList cardProps={this.state.projects} />
			</section>
		)
	}
}

export default Home
