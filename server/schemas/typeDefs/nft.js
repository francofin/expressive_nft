const {gql} = require('apollo-server-express');

module.exports= gql`



    type NFT {
        _id:ID
        title:String
        description:String
        image:Image
        artist:User
        attributes:[String]
        price:Int
        forSale:Boolean
        readyToMint:Boolean
        uploadToDrawing:Boolean
        publish:Boolean
        minted:Boolean
    }



    input NFTCreateInput{
        title:String
        description:String
        image:ImageInput
        attributes:[String]
        price:Int
        forSale:Boolean
        readyToMint:Boolean
        uploadToDrawing:Boolean
        publish:Boolean
        minted:Boolean
    }


    type Query {
        totalPost: Int!
        allNFTs: [NFT!]!
        NFTsByArtist: [NFT!]!
        singleNFT(nftId: String):NFT!
    }

    type Mutation {
        createNFT(input:NFTCreateInput): NFT!
    }


`