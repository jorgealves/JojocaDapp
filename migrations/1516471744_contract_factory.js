const ContractFactory = artifacts.require("./ContractFactory.sol");

module.exports = function (deployer) {
    // Use deployer to state migration tasks.
    deployer.deploy(ContractFactory);
};
