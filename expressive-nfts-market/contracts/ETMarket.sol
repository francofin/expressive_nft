//SPDX-License-Identifier: MIT

pragma solidity ^0.8.4;

//open zeppeling nft functionality
import "@openzeppelin/contracts/token/ERC721/ERC721.sol";
import "@openzeppelin/contracts/security/ReentrancyGuard.sol";
import "@openzeppelin/contracts/utils/Counters.sol";

//reetrancy, security against multiple request transactions. 

import 'hardhat/console.sol';


contract ETMarket is ReentrancyGuard {
    using Counters for Counters.Counter;


    //we want to keep track of items minting, number of transactions, items or tokens that have not been sold.
    //Shows what we have left when making them. Keep track of total number of items. 
    //Keep track using tokenId, keeps track of number of arrays. 


    Counters.Counter private _tokenIds;
    Counters.Counter private _tokensSold;

    //determine owner of contract, charge listing fee, owner makes a commisssion 

    address payable owner;
    //we can use ether the same way as matic, with matic, 0.045 is in the cents, but ether 0.045 is much more. 
    //We can use ether to list the price

    uint256 listingPrice = 0.045 ether;
    
    constructor() {
        owner = payable(msg.sender);
    }

    //structs for tokens

    struct MarketToken {
        uint itemId;
        address nftContract;
        uint256 tokenId;
        address payable seller;
        address payable owner;
        uint256 price;
        bool sold;
    }

    //tokenId to return which Item is being used
    mapping(uint256 =>  MarketToken) private idToMarketToken;

    //events which emit blockchain information, useful on client side. listens to event from front end apps

    event MarketTokenMinted (
        uint indexed itemId,
        address indexed nftContract,
        uint256 indexed tokenId, 
        address seller,
        address owner, 
        uint256 price,
        bool sold
    );

    function getListingPrice() public view returns(uint256) {
        return listingPrice;
    }


    //create a market item to put for sale
    //create a market sale for buying and selling between different parties

    //nonreentrant protects against multiple requests it is a modifier
    function createMarketItem(address nftContract, uint tokenId, uint price) public payable nonReentrant {
        //price must be greater than 0
        require(price > 0, 'Price must be at least one wei');
        require(msg.value == listingPrice, 'Price must be equal to listing price');

        //need to increment item once minted to track
        _tokenIds.increment();

        uint itemId = _tokenIds.current();

        //put it up for sale, we can change status of bool to no owner
        //the seller is the person who is minting. 
        idToMarketToken[itemId] = MarketToken(itemId, nftContract, tokenId, payable(msg.sender), payable(address(0)), price, false);

        //Functionality to transact the NFT. 
        IERC721(nftContract).transferFrom(msg.sender, address(this), tokenId);

        emit MarketTokenMinted(itemId, nftContract, tokenId, msg.sender, address(0), price, false);

        }

        //function to conduct transactions and market sales.

    function createMarketSale(address nftContract, uint itemId) public payable nonReentrant {
        uint price = idToMarketToken[itemId].price;

        uint tokenId = idToMarketToken[itemId].tokenId;

        require(msg.value == price, 'Please submit asking price to continue');


        //transfer amount to seller
        idToMarketToken[itemId].seller.transfer(msg.value);
        //transfer token from contract address to buyer
        IERC721(nftContract).transferFrom(address(this), msg.sender, tokenId);
        idToMarketToken[itemId].owner = payable(msg.sender);
        idToMarketToken[itemId].sold = true;

        _tokensSold.increment();

        payable(owner).transfer(listingPrice);

    }
//function to fetch market items. for minting, buying and selling, return number of unsold items

    function fetchMarketTokens() public view returns(MarketToken[] memory){
        uint itemsCount = _tokenIds.current();
        uint unsoldItemCount = _tokenIds.current() - _tokensSold.current();
        uint currentIndex = 0;

        //grab information for items crreated and items not sold. 
        //Looping number of items created, if the number has not been sold add to array that shows on the front end. 
        MarketToken[] memory items = new MarketToken[](unsoldItemCount);
        for(uint i=0; i<itemsCount; i++) {
            if(idToMarketToken[i+1].owner == address(0)){
                uint currentId = i+1;
                MarketToken storage currentItem = idToMarketToken[currentId];
                items[currentIndex] = currentItem;
                currentIndex +=1;
            }
        }
        return items;
    }

//return purchased NFTs

    function fetchMyNFTs() public view returns(MarketToken[] memory) {  
        uint totalItemCount = _tokenIds.current();
        //counter for each user. 
        uint itemCount = 0;
        uint currentIndex = 0;

        for(uint i = 0; i < totalItemCount; i++) {
            if(idToMarketToken[i+1].owner == msg.sender) {
                itemCount+=1;
            }
        }

        //second loop to loop through amount purchased with itemcount
        //check if owner == msg.sender


        MarketToken[] memory items = new MarketToken[](itemCount);

        for(uint i=0; i<totalItemCount; i++){
            if(idToMarketToken[i+1].owner == msg.sender){
                uint currentId = idToMarketToken[i+1].itemId;
                MarketToken storage currentItem = idToMarketToken[currentId];
                items[currentIndex] = currentItem;
                currentIndex +=1;
            }
        }
        return items;
    }


    // function to return an array of minted NFTs

    function fetchItemsCreated() public view returns(MarketToken[] memory){
        //instead of looking for owner, we look for the seller, seller mints NFTs and theyre using the app top mint so we look for seller
        uint totalItemCount = _tokenIds.current();
        uint itemCount = 0;
        uint currentIndex = 0;

        for(uint i = 0; i < totalItemCount; i++) {
            if(idToMarketToken[i+1].seller == msg.sender) {
                itemCount+=1;
            }
        }

         MarketToken[] memory items = new MarketToken[](itemCount);

        for(uint i=0; i<totalItemCount; i++){
            if(idToMarketToken[i+1].seller == msg.sender){
                uint currentId = idToMarketToken[i+1].itemId;
                MarketToken storage currentItem = idToMarketToken[currentId];
                items[currentIndex] = currentItem;
                currentIndex +=1;
            }
        }
        return items;

    }

}