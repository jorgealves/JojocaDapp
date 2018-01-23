const Voting = artifacts.require("./Voting.sol");

module.exports = function (deployer) {
  // Use deployer to state migration tasks.
  deployer.deploy(Voting,
    [
      'John Cena',
      'Jim Gordon'
    ],
    'Who would make the best villain?'
  );
};
