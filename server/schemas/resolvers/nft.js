const { authMiddleware } = require('../../utils/auth');
const { User, NFT } = require('../../models');
const shortid = require('shortid');
const {DateTimeResolver} = require('graphql-scalars');
const user = require('../typeDefs/user');



const createNFT = async(parent, args, {req}) => {
    const currentUser = await authMiddleware({req});

    const userId = await User.findOne({email: currentUser.email})
    let newNFT = await new NFT({...args.input, artist:userId._id}).save().then((nft) => nft.populate('artist', '_id userName'));

    console.log(newNFT);

    return newNFT
}

const allNFTs = async(parent, args, {req}) => {
    return await NFT.find({})
                .populate('artist', 'userName _id images')
                .sort({ createdAt: -1 }).exec();
}


const NFTsByArtist = async(parent, args, {req}) => {
    const currentUser = await authMiddleware({req});
    const user = await User.findOne({email:currentUser.email}).exec();

    const userPost = await NFT.find({artist:user}).populate('artist', 'userName _id').sort({ createdAt: -1 }).exec();
    return userPost;
}




module.exports ={
    Query:{
       allNFTs,
       NFTsByArtist
    }, 
    Mutation: {
        createNFT
        
    }

}