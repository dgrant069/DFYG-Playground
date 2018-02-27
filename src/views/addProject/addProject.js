import React from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import { Form, Button, Input, Message, TextArea } from 'semantic-ui-react'

import styles from './addProject.css'

class AddProject extends React.Component {
	state = {
		projectName: '',
		details: '',
		terms: '',
		budget: '',
		errorMessage: '',
		loading: false,
		ether: 0,
		etherConversion: 0,
	}

	componentWillMount() {
		fetch('https://api.coinmarketcap.com/v1/ticker/ethereum/?convert=USD')
			.then((response) => response.json())
			.then((data) => {
				const currentPrice = Number(data[0].price_usd)
				return this.setState({ etherConversion: currentPrice })
			})
			.catch((error) => {
				return this.setState({ errorMessage: error })
			})
	}

	onSubmit = async (event) => {
		event.preventDefault()

		this.setState({ loading: true, errorMessage: '' })

		const ether = this.state.ether.toFixed(10)
		const weiBudget = web3.utils.toWei(ether.toString(), 'ether')
		try {
			const accounts = await web3.eth.getAccounts()
			await factory.methods
				.createProject(
					this.state.projectName,
					this.state.details,
					this.state.terms,
				)
				.send({
					from: accounts[0],
					value: weiBudget,
				})

			this.setState({ loading: false })
			this.props.router.push('/')
		} catch (err) {
			this.setState({ errorMessage: err.message })
			this.setState({ loading: false })
		}
	}

	handleBudget = (event) => {
		const ether = event.target.value / this.state.etherConversion
		this.setState({ budget: event.target.value })
		this.setState({ ether: ether })
	}

	render() {
		return (
			<section>
				<h3>Create a Project</h3>

				<Form onSubmit={this.onSubmit} error={!!this.state.errorMessage}>
					<Form.Field>
						<label>Project Name</label>
						<Input
							value={this.state.projectName}
							onChange={(event) =>
								this.setState({ projectName: event.target.value })
							}
						/>
					</Form.Field>
					<Form.Field>
						<label>Project Details</label>
						<TextArea
							value={this.state.details}
							onChange={(event) =>
								this.setState({ details: event.target.value })
							}
						/>
					</Form.Field>
					<Form.Field>
						<label>Terms</label>
						<TextArea
							value={this.state.terms}
							onChange={(event) => this.setState({ terms: event.target.value })}
						/>
					</Form.Field>
					<Form.Field>
						<label>Projected Budget</label>
						<Input
							label="USD"
							labelPosition="right"
							value={this.state.budget}
							onChange={this.handleBudget}
						/>
						<div>
							<p>{this.state.ether.toFixed(4)} ETH</p>
						</div>
					</Form.Field>

					<Message error header="Oops!" content={this.state.errorMessage} />
					<Button loading={this.state.loading} primary>
						Create
					</Button>
				</Form>
			</section>
		)
	}
}

export default AddProject
