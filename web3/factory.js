import web3 from './web3'
import ProjectFactory from '../build/contracts/ProjectFactory.json'
const env = require('../envs/constants')

const instance = new web3.eth.Contract(
	ProjectFactory.abi,
	env.DEV_DEPLOYED_CONTRACT_ADDRESS,
)

export default instance
