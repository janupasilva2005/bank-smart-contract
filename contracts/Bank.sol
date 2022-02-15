// SPDX-License-Identifier: MIT
pragma solidity >=0.4.22 <0.9.0;

/**
* 1. Deposit
* 2. Get balance
* 3. Send
*/
contract Bank {
  mapping(address => uint) balances;

  function deposit(uint amount) public payable {
    balances[msg.sender] = balances[msg.sender] + amount;
  }

  function balance() public view returns(uint) {
    return balances[msg.sender];
  }

  function withdraw(uint amount) public {
    require(balances[msg.sender] >= amount, "Insufficient funds");
    balances[msg.sender] = balances[msg.sender] - amount;
  }

  function send(uint amount, address sender) public {
    require(balances[msg.sender] >= amount, "Insufficient funds");
    balances[msg.sender] = balances[msg.sender] - amount;

    balances[sender] = balances[msg.sender] + amount;
  }
}
