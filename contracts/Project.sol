pragma solidity ^0.4.18;

contract Project {
  string public projectName;
  string public details;
  string public terms;
  uint public budget; // Not sure what to do with this yet
  address public manager;
  address public freelancer;
  bool public freelancerAccepted;
  bool public managerHired;
  bool public isCompleted;

  event LogFundsReceived(address sender, uint amount);
  event LogFundsSent(address receiver, uint amount);

  modifier restricted() {
    require(msg.sender == manager);
    _;
  }

  function() payable {
    LogFundsReceived(msg.sender, msg.value);
  }

  // Can't use 'this' here, so setting budget equal to this.balance won't work
  function Project(
    string _projectName, string _details, string _terms, address creator
    ) public payable {
      projectName = _projectName;
      details = _details;
      terms = _terms;
      manager = creator;
      freelancerAccepted = false;
      managerHired = false;
      isCompleted = false;
  }

  function getProjectInfo() public view returns(
    string, string, string, uint, address
    ) {
      return (
        projectName,
        details,
        terms,
        this.balance,
        manager
      );
  }

  function freelancerAccepts() public {
    require(msg.sender != manager);
    require(!managerHired);
    require(!isCompleted);
    require(!freelancerAccepted);

    freelancerAccepted = true;
    freelancer = msg.sender;
  }

  function managerHires() public restricted {
    managerHired = true;
  }

  function completeProject() public {
    require(msg.sender == freelancer);
    require(managerHired);
    freelancer.transfer(this.balance);
    isCompleted = true;
  }
}
