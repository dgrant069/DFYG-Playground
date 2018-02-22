import React from 'react'
import { Card, Button } from 'semantic-ui-react'
import { Link } from 'react-router'

import web3 from '../../../web3/web3'
import ProjectContract from '../../../web3/project'
import styles from './project.css'

class Project extends React.Component {
	state = {
		cards: [],
		projectAddress: this.props.router.params.address,
		errorMessage: '',
	}

	componentWillMount = async () => {
		const etherConversion = await fetch(
			'https://api.coinmarketcap.com/v1/ticker/ethereum/?convert=USD',
		)
			.then((response) => response.json())
			.then((data) => {
				return Number(data[0].price_usd)
			})
			.catch((error) => {
				return this.setState({ errorMessage: error })
			})

		const project = ProjectContract(this.state.projectAddress)
		const projectInfo = await project.methods.getProjectInfo().call()
		console.log('project', project)

		const projectEther = web3.utils.fromWei(projectInfo[3], 'ether')
		const projectUsd = projectEther * etherConversion

		const cards = [
			{
				header: `Project: ${projectInfo[0]}`,
				meta: 'Project Address:',
				description: this.state.projectAddress,
				style: { overflowWrap: 'break-word' },
				fluid: true,
			},
			{
				header: 'Owner',
				meta: 'Who can approve payments from budget',
				description: projectInfo[4],
				style: { overflowWrap: 'break-word' },
			},
			{
				header: 'Description',
				description: projectInfo[1],
			},
			{
				header: 'Terms and Conditions',
				meta: 'Also can include project acceptence criteria',
				description: projectInfo[2],
			},
			{
				header: 'Budget',
				meta: 'Project Budget in Ether and current USD amount',
				description: `${projectEther} Ether => $${projectUsd.toFixed(2)} USD`,
			},
		]

		return this.setState({ cards })
	}

	onAccept = (event) => {
		event.preventDefault()
	}

	onCompletion = (event) => {
		event.preventDefault()
	}

	render() {
		return (
			<section>
				<Card.Group items={this.state.cards} />
				<div className={styles.buttonMargin}>
					<Button onClick={this.onAccept} primary>
						Accept Project
					</Button>
					<Button onClick={this.onCompletion} primary>
						Complete Project
					</Button>
				</div>
			</section>
		)
	}
}

export default Project
