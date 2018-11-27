pragma solidity ^0.4.25;

contract Test {
    address public owner;

    event Transfer(uint value, string to);

    constructor() public {}

    function test(uint btcvalue, string addr1, string addr2) public {
        emit Transfer(btcvalue / 2, addr1);
        emit Transfer(btcvalue / 2, addr2);
    }
}