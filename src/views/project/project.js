import React from 'react'
import { Card, Button } from 'semantic-ui-react'
import { Link } from 'react-router'

import web3 from '../../../web3/web3'
import ProjectContract from '../../../web3/project'
import styles from './project.css'

class Project extends React.Component {
	state = {
		project: ProjectContract(this.props.router.params.address),
		cards: [],
		projectAddress: this.props.router.params.address,
		errorMessage: '',
		isAccepted: false,
		isCompleted: false,
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

		const projectInfo = await this.state.project.methods.getProjectInfo().call()

		const {
			0: projectName,
			1: description,
			2: terms,
			3: budget,
			4: manager,
		} = projectInfo

		const projectEther = web3.utils.fromWei(budget, 'ether')
		const projectUsd = projectEther * etherConversion

		const accounts = await web3.eth.getAccounts()
		const isManager = manager === accounts[0]
		console.log('accounts', accounts)

		const cards = [
			{
				header: `Project: ${projectName}`,
				meta: 'Project Address:',
				description: this.state.projectAddress,
				style: { overflowWrap: 'break-word' },
				fluid: true,
				raised: true,
			},
			{
				header: 'Owner',
				meta: 'Who can approve payments from budget',
				description: manager,
				style: { overflowWrap: 'break-word' },
				raised: true,
			},
			{
				header: 'Description',
				description: description,
			},
			{
				header: 'Terms and Conditions',
				meta: 'Also can include project acceptence criteria',
				description: terms,
			},
			{
				header: 'Budget',
				meta: 'Project Budget in Ether and current USD amount',
				description: `<ETHER AMOUNT> Ether => $<DOLLAR AMOUNT> USD`,
				raised: true,
			},
		]
	}

		return this.setState({ cards, isManager })
	}

	onAccept = async (event) => {
		event.preventDefault()

		await this.state.project.methods.freelancerAccepts().call()

		return this.setState({ isAccepted: true })
	}

	onHire = async (event) => {
		event.preventDefault()

		await this.state.project.methods.managerHires().call()
	}

	onCompletion = async (event) => {
		event.preventDefault()

		await this.state.project.methods.completeProject().call()
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
								this.state.isManager && this.state.isAccepted
									? 'visible'
									: 'hidden',
						}}
						primary>
						Hire Freelancer
					</Button>

					<Button
						onClick={this.onCompletion}
						style={{ visibility: this.state.isAccepted ? 'visible' : 'hidden' }}
						primary>
						Complete Project
					</Button>
				</div>
			</section>
		)
	}
}

export default Project
