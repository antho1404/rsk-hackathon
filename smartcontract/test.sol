pragma solidity ^0.4.24;

contract Test {
    address public owner;

    bytes32[] tests;
    uint test_count;

    event Transfer(bytes32 id);

    constructor() public {
        owner = msg.sender;
    }

    modifier onlyOwner() {
        if (msg.sender == owner) _;
    }

    function test(uint foo, bool bar) public onlyOwner returns (bytes32 id) {
        id = keccak256(abi.encodePacked(foo, bar));
        tests[test_count] = id;
        test_count++;
        return id;
    }
}