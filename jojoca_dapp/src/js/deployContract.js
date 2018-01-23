const Web3 = require('web3');
const solc = require('solc');
const fs = require('fs');

const ETHERIUM_SERVER_ADDR = 'http://localhost:8545';

const web3 = new Web3(
  new Web3.providers.HttpProvider(ETHERIUM_SERVER_ADDR)
);

const { asciiToHex } = web3.utils;

let accounts;
let contractInstance;
// list all accounts
// console.log(web3.eth.accounts);
// version 1.0
web3.eth.getAccounts()
  .then(accounts => {
    const compiledContract = solc.compile(
      fs.readFileSync('./src/contract.sol').toString()
    );

    const abi = JSON.parse(
      compiledContract.contracts[':Voting'].interface
    )
    const VotingContract = new web3.eth.Contract(abi);

    // build transaction
    const bytecode = compiledContract.contracts[':Voting'].bytecode;

    VotingContract.deploy({
      data: bytecode,
      arguments: [
        [
          asciiToHex('Yes'),
          asciiToHex('No')
        ]
      ]
    })
    .send({
      from: accounts[0],
      gas: 1000000
    })
    .then(instance => {
      contractInstance = instance
    });

    


  });

/*
const VotingContract = web3.eth.contract(
  JSON.parse('[{"constant":false,"inputs":[{"name":"candidate","type":"bytes32"}],"name":"totalVotesFor","outputs":[{"name":"","type":"uint8"}],"payable":false,"type":"function"},{"constant":false,"inputs":[{"name":"candidate","type":"bytes32"}],"name":"validCandidate","outputs":[{"name":"","type":"bool"}],"payable":false,"type":"function"},{"constant":true,"inputs":[{"name":"","type":"bytes32"}],"name":"votesReceived","outputs":[{"name":"","type":"uint8"}],"payable":false,"type":"function"},{"constant":true,"inputs":[{"name":"x","type":"bytes32"}],"name":"bytes32ToString","outputs":[{"name":"","type":"string"}],"payable":false,"type":"function"},{"constant":true,"inputs":[{"name":"","type":"uint256"}],"name":"candidateList","outputs":[{"name":"","type":"bytes32"}],"payable":false,"type":"function"},{"constant":false,"inputs":[{"name":"candidate","type":"bytes32"}],"name":"voteForCandidate","outputs":[],"payable":false,"type":"function"},{"constant":true,"inputs":[],"name":"contractOwner","outputs":[{"name":"","type":"address"}],"payable":false,"type":"function"},{"inputs":[{"name":"candidateNames","type":"bytes32[]"}],"payable":false,"type":"constructor"}]')
);
*/
// const byteCode = compiledCode.contracts[':Voting'].bytecode;

/*
const deployedContract = VotingContract.new(
  ['Yes', 'No'], 
  {
    data: byteCode,
    from: web3.eth.accounts[0],
    gas: 4700000 
  }
);
*/

// console.log(deployedContract.address);

// export default VotingContract.at(deployedContract.address);
// export default VotingContract.at('0x0515e48d9243fa7bf7b4597c7444aaca6d780d81');

// window.ascii2hex = web3.utils.asciiToHex;



// check for the number of votes for 'yes'
// contractInstance.totalVotesFor.call('Yes');

// vote for 'Yes'
// contractInstance.voteForCandidate('Yes', { from: web3.eth.accounts[0] });
// contractInstance.voteForCandidate('Yes', { from: web3.eth.accounts[0] });
// contractInstance.voteForCandidate('Yes', { from: web3.eth.accounts[0] });

// contractInstance.totalVotesFor.call('Yes').toLocaleString();
