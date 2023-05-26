// SPDX-License-Identifier: UNLICENSED
pragma solidity ^0.8.9;

//TRANSPARENT PROXY PATTERN

contract Box {

    uint256 private value;

    event ValueChanged(uint256 newValue);

    function store(uint256 newValue) public {
        value = newValue;
        emit ValueChanged(newValue); 
    }

    function retrieve() public view returns (uint256) {
        return value;
        
    }
}