import Web3 from 'web3'
const env = require('../envs/constants')

let web3

if (typeof window !== 'undefined' && window.web3 !== 'undefined') {
	web3 = new Web3(window.web3.currentProvider)
} else {
	const provider = new Web3.providers.HttpProvider(
		`https://ropsten.infura.io/${env.INFURA_API_KEY}`,
	)
	// const provider = new Web3.providers.HttpProvider('http://127.0.0.1:7545')
	// const provider = new Web3.providers.HttpProvider('http://127.0.0.1:8545')
	// const provider = new Web3.providers.HttpProvider('http://127.0.0.1:9545')
	web3 = new Web3(provider)
}

export default web3
