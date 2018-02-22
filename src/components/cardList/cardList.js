import React from 'react'
import { Card } from 'semantic-ui-react'
import { Link } from 'react-router'

const CardList = ({ cardProps }) => {
	const cards = cardProps.map((address) => {
		return {
			header: address,
			description: <Link to={`/project/${address}`}>View Project</Link>,
			fluid: true,
		}
	})

	return <Card.Group items={cards} />
}

export default CardList
