// SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;

contract SimpleContract {
    string[] private names;

    function setName(string memory _name) public {
        names.push(_name);
    }

    function getAllNames() public view returns (string[] memory) {
        return names;
    }

    function reset() public {
        delete names;
    }

    function deleteName(string memory _name) public {
        for (uint256 i = 0; i < names.length; i++) {
            if (keccak256(bytes(names[i])) == keccak256(bytes(_name))) {
                for (uint256 j = i; j < names.length - 1; j++) {
                    names[j] = names[j + 1];
                }
                names.pop();
                break;
            }
        }
    }
}