const ContractFactory = artifacts.require("./ContractFactory.sol");
contract('ContractFactory', function (accounts) {
    it("should assert true", function (done) {
        let contract_factory;
        ContractFactory.deployed().then((instance) => {
            contract_factory = instance;
            contract_factory.createContract.call();
            contract_factory.createContract.call();
        }).then(() => {
            contract_factory.setValueOn.call("First", 0);
            return contract_factory.setValueOn.call("Second", 1);
        }).then((result) => {
            assert.equal(result, 1);
        });
        done();
    });
})
;
