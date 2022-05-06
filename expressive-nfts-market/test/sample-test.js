const { expect } = require("chai");
const { ethers } = require("hardhat");

describe("ETMarket", function () {
  it("It Should Mint and trade NFTs", async function () {

    //test to recieve contracts and contrcat addresses. 
    // ensure we have contract address, smart contracts are deployed and market place exists
    const Market = await ethers.getContractFactory('ETMarket');
    //abi allow us to interact with the market
    const market = await Market.deploy();
    await market.deployed();
    const marketAddress = market.address;

    //NFT Address
    const NFT = await ethers.getContractFactory('NFT');
    const nft = await NFT.deploy(marketAddress);
    await nft.deployed()
    const nftContractAddress = nft.address;


    //test to get listing and uction price
    let listingPrice = await market.getListingPrice()
    listingPrice = listingPrice.toString()

    const auctionPrice = ethers.utils.parseUnits('100', 'ether');



    //test for Minting
    await nft.mintToken('https-t1')
    await nft.mintToken('https-t2')

    await market.createMarketItem(nftContractAddress, 1, auctionPrice, {value: listingPrice})
    await market.createMarketItem(nftContractAddress, 2, auctionPrice, {value: listingPrice})

    //test for different addresses from different users, test accounts, return an array pf addresses. 
    //first address is seller
    const[_, buyerAddress] = await ethers.getSigners();
    //getSigners from hardhat

    //create market sale with address and price and id
    await market.connect(buyerAddress).createMarketSale(nftContractAddress, 1, {value:auctionPrice})
    

    let marketItems = await market.fetchMarketTokens();
    marketItems = await Promise.all(marketItems.map(async i => {
      // get token uri
      const tokenUri = await nft.tokenURI(i.tokenId);
      let item  = {
        price: i.price.toString(),
        tokenId: i.tokenId.toString(),
        seller: i.seller, 
        owner: i.owner,
        tokenUri
      }
      return item;
    }))

    //test all items
    console.log('items', marketItems);
  });
});
