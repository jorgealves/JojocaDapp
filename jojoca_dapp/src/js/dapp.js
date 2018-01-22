import "jquery";
import 'bootstrap-sass';
import "../sass/styles.scss";
import Web3 from "web3";

let web3 = new Web3(new Web3.providers.HttpProvider("https://ropsten.infura.io/"));

let contractFactoryAddress = "0xb7a9155cf937d4bf761b422047221fae12d1d5c5";

let contractFactoryABI = [
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
    }
];

let ContractFactory = new web3.eth.contract(contractFactoryABI);

$(document).ready(() => {
    $('.js-contract-factory-abi').text(JSON.stringify(ContractFactory.abi));
});