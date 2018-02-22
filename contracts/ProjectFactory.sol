pragma solidity ^0.4.18;

import './Project.sol';

contract ProjectFactory {
    address[] public deployedProjects;

    event deployFinished(
        address ProjectAddress
    );

    function createProject(string projectName, string details, string terms, uint budget) public {
        address newProject = new Project(projectName, details, terms, budget, msg.sender);
        deployedProjects.push(newProject);
        deployFinished(newProject);
    }

    function getDeployedProjects() public view returns(address[]) {
        return deployedProjects;
    }
}
