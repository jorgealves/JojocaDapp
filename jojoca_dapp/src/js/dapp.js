import "jquery";
import 'bootstrap-sass';
import "../sass/styles.scss";
import Web3 from "web3";

let web3 = new Web3(new Web3.providers.HttpProvider("http://ganache:8545"));

let contractFactoryAddress = "0x1e394db5dac756e0514d6f9f8a52f7cf66d74ae9";

let contractFactoryABI = [
    {
        "constant": false,
        "inputs": [],
        "name": "createContract",
        "outputs": [
            {
                "name": "",
                "type": "uint256"
            }
        ],
        "payable": true,
        "stateMutability": "payable",
        "type": "function"
    },
    {
        "constant": true,
        "inputs": [
            {
                "name": "",
                "type": "uint256"
            }
        ],
        "name": "names",
        "outputs": [
            {
                "name": "",
                "type": "string"
            }
        ],
        "payable": false,
        "stateMutability": "view",
        "type": "function"
    },
    {
        "constant": true,
        "inputs": [
            {
                "name": "",
                "type": "uint256"
            }
        ],
        "name": "contracts",
        "outputs": [
            {
                "name": "",
                "type": "address"
            }
        ],
        "payable": false,
        "stateMutability": "view",
        "type": "function"
    },
    {
        "constant": false,
        "inputs": [
            {
                "name": "value",
                "type": "string"
            },
            {
                "name": "id",
                "type": "uint256"
            }
        ],
        "name": "setValueOn",
        "outputs": [],
        "payable": false,
        "stateMutability": "nonpayable",
        "type": "function"
    },
    {
        "constant": true,
        "inputs": [
            {
                "name": "id",
                "type": "uint256"
            }
        ],
        "name": "getContractAddress",
        "outputs": [
            {
                "name": "",
                "type": "address"
            }
        ],
        "payable": false,
        "stateMutability": "view",
        "type": "function"
    }
];

let ContractFactory = new web3.eth.contract(contractFactoryABI);



$(document).ready(() => {
    $('.js-contract-factory-abi').text(JSON.stringify(ContractFactory.abi));
});