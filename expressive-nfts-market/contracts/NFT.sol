//SPDX-License-Identifier: MIT

pragma solidity ^0.8.4;

//open zeppelin nft functionality
import "@openzeppelin/contracts/token/ERC721/ERC721.sol";
import "@openzeppelin/contracts/token/ERC721/extensions/ERC721URIStorage.sol";
import "@openzeppelin/contracts/utils/Counters.sol";

contract NFT is ERC721URIStorage {
    using Counters for Counters.Counter;
    //Counters.allow us to keep track of token ids.
    Counters.Counter private _tokenIds;
    //address of market place for NFTs to interact.
    address contractAddress;
    //Give NFT makret, ability to transact with tokens or change ownership. 
    //Set Approval for all. This allows us to change ownership. 
    //constructor to set up address.

    //Set name and symbol of the market place. 
    constructor(address marketPlaceAddress) ERC721('Expressive Teen', 'EXTN') {
        contractAddress = marketPlaceAddress;
    }

    function mintToken(string memory tokenURI) public returns(uint){
        //tokenIds get information from the counters whcih incrememnt and decrement, we can access those functions

        _tokenIds.increment();
        uint256 newItemId = _tokenIds.current();

        //mint function from ERC721, pass id and url, when we mint we also want the token uri set up
        _mint(msg.sender, newItemId);

        //set topken URI takes ID and url
        _setTokenURI(newItemId, tokenURI);

        //need marketplace approval to transact between users. 
        setApprovalForAll(contractAddress, true);

        //return id so that we can set it for sale. 
        return newItemId;
    }
}