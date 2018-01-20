const SimpleContract = artifacts.require("./SimpleContract.sol");
contract('SimpleContract', function (accounts) {
    it("should return the value provided", function (done) {
        let simple_contract;
        SimpleContract.deployed().then((instance) => {
            simple_contract = instance;
            simple_contract.setValue.call("test value");
        }).then(() => {
            let result = simple_contract.sayHello.call();
            assert.equal(result, "test value");
        });
        done();
    });
});
