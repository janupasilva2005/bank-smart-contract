const bank_test = artifacts.require("Bank");

/*
 * uncomment accounts to access the test accounts made available by the
 * Ethereum client
 * See docs: https://www.trufflesuite.com/docs/truffle/testing/writing-tests-in-javascript
 */
contract("bank_test", (accounts) => {
  it("Should return 10 balance on the start", async () => {
    const instance = await bank_test.deployed();
    const balance = await instance.balance({ from: accounts[0] });

    expect(balance.toString()).to.be.equal("0");
  });

  it("Should return 10 after depositing 10", async () => {
    const instance = await bank_test.deployed();
    await instance.deposit(10, { from: accounts[0] });

    const balance = await instance.balance({ from: accounts[0] });
    expect(balance.toString()).to.be.equal("10");
  });
});
