import React from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'

import web3 from '../../../web3/web3'
import factory from '../../../web3/factory'
import CardList from '../../components/cardlist/cardlist'

/*
** This view lists the projects available to take on freelancing
*/
class Home extends React.Component {
	state = {
		projects: [],
	}

	componentWillMount = async () => {
		const projects = await factory.methods.getDeployedProjects().call()

		return this.setState({ projects })
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
