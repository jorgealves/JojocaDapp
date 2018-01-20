pragma solidity ^0.4.18;

import "./SimpleContract.sol";

contract ContractFactory {

    string[] public names;
    address[] public contracts;

    function createContract() public payable returns (uint){
        address newContract = new SimpleContract();
        contracts.push(newContract);
        return contracts.length;
    }


    function setValueOn(string value, uint id) public {
        SimpleContract ctract = SimpleContract(contracts[id]);

        ctract.setValue(value);
        names.push(value);
    }

    function getContractAddress(uint id) view public returns (address) {
        address addr = SimpleContract(contracts[id]);
        return addr;
    }
}
