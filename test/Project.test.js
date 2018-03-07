// const assert = require('assert')
const ganache = require('ganache-cli')
const Web3 = require('web3')

const web3 = new Web3(new Web3.providers.HttpProvider("http://localhost:9545"))
//
// const compiledFactory = require('../build/ProjectFactory.json')
// const compiledProject = require('../build/Project.json')
//
// let accounts, factory, projectAddress, project

var ProjectFactory = artifacts.require("../contracts/ProjectFactory.sol");
var Project = artifacts.require("../contracts/Project.sol");

const projectDetails = (accounts) =>
  ["New App Web", "Make new web app", "Need in 2 weeks", {
    from: accounts[0], value: web3.utils.toWei('2', 'ether')
  }]

contract('Project Factory', async (accounts) => {
  let factoryInstance
  beforeEach(async () => {
    factoryInstance = await ProjectFactory.deployed()
  })

  it('deploys factory', async () => {
    assert.ok(factoryInstance.address)
  })

  it('deploys a project from factory', async () => {
    const projectDetailsArray = projectDetails(accounts)

    await factoryInstance.createProject(...projectDetailsArray)

    const deployedProjects = await factoryInstance.getDeployedProjects.call()
    assert.lengthOf(deployedProjects, 1)
  })

})

contract('Project', async (accounts) => {
  let factoryInstance, projectDetailsArray, deployedProject, projectInstance
  beforeEach(async () => {
    factoryInstance = await ProjectFactory.deployed()
    projectDetailsArray = projectDetails(accounts)
    deployedProject = await factoryInstance.createProject(...projectDetailsArray)
    projectInstance = Project.at(deployedProject.logs[0].address)
  })

  it('deploys project', async () => {
		assert.ok(projectInstance.address)
	})

  it("should have intial props", async () => {
    const projectInfo = await projectInstance.getProjectState.call()
    console.log('???', projectInfo)
  })
})

// describe('Projects', () => {
// 	it('marks caller of project factory as manager', async () => {
// 		const manager = await project.methods.manager().call()
// 		assert.equal(accounts[0], manager)
// 	})
//
// 	// it('allows people to contribute money and marks them as approvers', async () => {
// 	// 	await project.methods
// 	// 		.contribute()
// 	// 		.send({ value: '200', from: accounts[1] })
//   //
// 	// 	const isContributor = await project.methods.approvers(accounts[1]).call()
// 	// 	assert(isContributor)
// 	// })
//   //
// 	// it('requires a minimum contribution', async () => {
// 	// 	try {
// 	// 		await project.methods.contribute().send({
// 	// 			value: '99',
// 	// 			from: accounts[1],
// 	// 		})
// 	// 		assert(false)
// 	// 	} catch (err) {
// 	// 		assert(err)
// 	// 	}
// 	// })
//   //
// 	// it('allows manager to make a payment request', async () => {
// 	// 	await project.methods
// 	// 		.createRequest('buy materials', '100', accounts[5])
// 	// 		.send({
// 	// 			from: accounts[0],
// 	// 			gas: '1000000',
// 	// 		})
//   //
// 	// 	const request = await project.methods.requests(0).call()
// 	// 	assert.equal('buy materials', request.description)
// 	// })
//   //
// 	// it('processes requests', async () => {
// 	// 	console.log('before payment', await web3.eth.getBalance(accounts[5]))
//   //
// 	// 	await project.methods.contribute().send({
// 	// 		from: accounts[0],
// 	// 		value: web3.utils.toWei('10', 'ether'),
// 	// 	})
//   //
// 	// 	await project.methods
// 	// 		.createRequest(
// 	// 			'buy materials',
// 	// 			web3.utils.toWei('5', 'ether'),
// 	// 			accounts[5],
// 	// 		)
// 	// 		.send({
// 	// 			from: accounts[0],
// 	// 			gas: '1000000',
// 	// 		})
//   //
// 	// 	await project.methods.approveRequest(0).send({
// 	// 		from: accounts[0],
// 	// 		gas: '1000000',
// 	// 	})
//   //
// 	// 	await project.methods.finalizeRequest(0).send({
// 	// 		from: accounts[0],
// 	// 		gas: '1000000',
// 	// 	})
//   //
// 	// 	let balance = await web3.eth.getBalance(accounts[5])
// 	// 	// balance = parseFloat(web3.utils.fromWei(balance, 'ether'))
// 	// 	balance = web3.utils.fromWei(balance, 'ether')
//   //
// 	// 	console.log('after payment', await web3.eth.getBalance(accounts[5]))
//   //
// 	// 	assert(balance > 104)
// 	// })
// })
