import web3 from './web3'
import Project from '../build/contracts/Project.json'

const contractInstance = (address) => {
	return new web3.eth.Contract(Project.abi, address)
}

export default contractInstance
