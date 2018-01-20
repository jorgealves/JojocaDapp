pragma solidity ^0.4.18;

contract SimpleContract {

    bytes32 _value;

    function stringToBytes32(string memory source) private pure returns (bytes32 result) {
        bytes memory tempEmptyStringTest = bytes(source);
        if (tempEmptyStringTest.length == 0) {
            return 0x0;
        }

        assembly {
            result := mload(add(source, 32))
        }
    }

    function setValue(string memory value) public {
        _value = stringToBytes32(value);
    }

    function sayHello() view public returns (bytes32)  {
        return _value;
    }
}
