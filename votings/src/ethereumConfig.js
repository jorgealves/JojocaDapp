const Web3 = require('web3');

const ETHERIUM_SERVER_ADDR = 'http://localhost:8545';

export const web3 = new Web3(
  typeof web3 !== 'undefined' ?
    web3.currentProvider
    : new Web3.providers.HttpProvider(ETHERIUM_SERVER_ADDR)
);
