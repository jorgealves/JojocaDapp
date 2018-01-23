
const Voting = artifacts.require("./Voting.sol");

contract('Voting', function (accounts) {
    it("should work", function () {
        return Voting.deployed()
            .then(instance => 
                assert.equal(instance, instance)
            )
    });
    
    it("should have an initial voting set to zero for a candidate", function (done) {
        Voting.deployed().then(
            (instance) => instance.totalVotesFor.call('Jim Gordon')
        ).then(result => {
            console.log(result);
            assert.equal(result, 0);  
            done();
        });
    });

    it("should add the voter to the list of voters", function (done) {
        const candidate = 'John Cena';
        const address = '0x9aeb848aa9187c2dbd7e16159f0ce7db82205fcb';
        let contractInstance; 

        Voting.deployed().then(
            instance => {
                contractInstance = instance;
                return instance.voteForCandidate.call(
                    candidate,
                    address
                )
            }
        ).then(
            () => contractInstance.getAllVoters()
        ).then(
            result => {
                console.log(result);
                assert.equal(result, 1);
                done();
            }
        );
    });
});

