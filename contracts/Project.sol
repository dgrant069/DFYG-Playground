pragma solidity ^0.4.18;

contract Project {
    struct ProjectApprovals {
        bool freelancerAppoved;
        address freelancerAddress;
        bool managerApproved;
    }

    address public manager;
    address public freelancer;
    string public projectName;
    string public details;
    string public terms;
    uint public budget;

    modifier restricted() {
        require(msg.sender == manager);
        _;
    }

    function Project(string _projectName, string _details, string _terms, uint _budget, address creator) public {
        manager = creator;
        projectName = _projectName;
        details = _details;
        terms = _terms;
        budget = _budget;
    }
}
