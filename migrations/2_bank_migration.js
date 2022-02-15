const Bank = artifacts.require("Bank");

function deploy(deployer) {
  return deployer.deploy(Bank);
}

module.exports = deploy;
