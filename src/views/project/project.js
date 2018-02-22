import React from 'react'
import { Card, Button } from 'semantic-ui-react'
import { Link } from 'react-router'

import styles from './project.css'

const Project = ({ router }) => {
	const cards = [
		{
			header: router.params.address,
			meta: 'Address of Manager',
			description:
				'The address of the manager who created this project and can create requests to withdraw money',
			style: { overflowWrap: 'break-word' },
		},
		{
			header: 'Project Description',
			meta: 'Description of project',
			description: 'DESCRIPTION',
		},
		{
			header: 'Terms and Conditions',
			meta: 'Terms and Conditions of Project',
			description: 'THE TERMS OF CONDITIONS',
		},
		{
			header: 'Project Budget',
			meta: 'Project Budget in Ether',
			description: 'THE AMOUNT ?AND DOLLAR CONVERSION?',
		},
	]

	const onAccept = (event) => {
		event.preventDefault()
	}

	const onCompletion = (event) => {
		event.preventDefault()
	}

	return (
		<section>
			<h1>Project X</h1>
			<Card.Group items={cards} />
			<div className={styles.buttonMargin}>
				<Button onClick={onAccept} primary>
					Accept Project
				</Button>
				<Button onClick={onCompletion} primary>
					Complete Project
				</Button>
			</div>
		</section>
	)
}

export default Project
