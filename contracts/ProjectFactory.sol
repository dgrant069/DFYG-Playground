pragma solidity ^0.4.18;

import './Project.sol';

contract ProjectFactory {
    address[] public deployedProjects;

    event deployFinished(
        address ProjectAddress
    );

    function createProject(string projectName, string details, string terms) public payable {
        address newProject = new Project(projectName, details, terms, msg.sender);
        deployedProjects.push(newProject);
        newProject.transfer(msg.value);
        deployFinished(newProject);
    }
    
    function getDeployedProjects() public view returns(address[]) {
        return deployedProjects;
    }
}
