const HDWalletProvider = require('truffle-hdwallet-provider')

const env = require('./envs/constants')

module.exports = {
	// See <http://truffleframework.com/docs/advanced/configuration>
	// to customize your Truffle configuration!
	solc: {
		optimizer: {
			enabled: true,
			runs: 200,
		},
	},
	networks: {
		ganache: {
			host: 'http://127.0.0.1',
			port: 7545,
			network_id: '*', // Match any network id
		},
		'ganache-cli': {
			host: 'http://127.0.0.1',
			port: 8545,
			network_id: '*', // Match any network id
		},
		development: {
			host: 'http://127.0.0.1',
			port: 9545,
			network_id: '*', // Match any network id
		},
		ropsten: {
			provider: function() {
				return new HDWalletProvider(
					env.DEV_MNEMONIC,
					`https://ropsten.infura.io/${env.INFURA_API_KEY}`,
				)
			},
			network_id: '3',
			gas: 4698712,
		},
		rinkeby: {
			provider: function() {
				return new HDWalletProvider(
					env.DEV_MNEMONIC,
					`https://rinkeby.infura.io/${env.INFURA_API_KEY}`,
				)
			},
			network_id: '2',
		},
	},
}
