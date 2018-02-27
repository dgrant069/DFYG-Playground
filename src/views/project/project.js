import React from 'react'
import { Card, Button } from 'semantic-ui-react'
import { Link } from 'react-router'

import styles from './project.css'

class Project extends React.Component {
	state = {
		project: '',
		cards: [],
		projectAddress: this.props.router.params.address,
		errorMessage: '',
		isAccepted: false,
		isCompleted: false,
		isHired: false,
		isManager: false,
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

		const cards = [
			{
				header: `Project: <PROJECT NAME>`,
				meta: 'Project Address:',
				description: this.state.projectAddress,
				style: { overflowWrap: 'break-word' },
				fluid: true,
				raised: true,
			},
			{
				header: 'Owner',
				meta: 'Who can approve payments from budget',
				description: '<MANAGER>',
				style: { overflowWrap: 'break-word' },
				raised: true,
			},
			{
				header: 'Description',
				description: '<DESCRIPTION>',
				raised: true,
			},
			{
				header: 'Terms and Conditions',
				meta: 'Also can include project acceptence criteria',
				description: '<TERMS>',
				raised: true,
			},
			{
				header: 'Budget',
				meta: 'Project Budget in Ether and current USD amount',
				description: `<ETHER AMOUNT> Ether => $<DOLLAR AMOUNT> USD`,
				raised: true,
			},
		]
	}

	onAccept = async (event) => {
		event.preventDefault()
	}

	onHire = async (event) => {
		event.preventDefault()
	}

	onCompletion = async (event) => {
		event.preventDefault()
	}

	render() {
		console.log('this.state', this.state)
		return (
			<section>
				<Card.Group items={this.state.cards} />
				<Card
					header="Completion Status"
					description={this.state.isCompleted ? 'COMPLETED' : 'In Progress'}
					raised={true}
				/>
				<div className={styles.buttonMargin}>
					<Button
						onClick={this.onAccept}
						style={{
							visibility:
								!this.state.isManager && !this.state.isAccepted
									? 'visible'
									: 'hidden',
						}}
						primary>
						Accept Project
					</Button>

					<Button
						onClick={this.onHire}
						style={{
							visibility:
								this.state.isManager &&
								this.state.isAccepted &&
								!this.state.isHired
									? 'visible'
									: 'hidden',
						}}
						primary>
						Hire Freelancer
					</Button>

					<Button
						onClick={this.onCompletion}
						style={{
							visibility:
								!this.state.isManager &&
								this.state.isAccepted &&
								this.state.isHired &&
								!this.state.isCompleted
									? 'visible'
									: 'hidden',
						}}
						primary>
						Complete Project
					</Button>
				</div>
			</section>
		)
	}
}

export default Project
