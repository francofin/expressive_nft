const mongoose = require('mongoose')
const {ObjectId, Schema, model} = mongoose;
const {nanoid} = require('nanoid');
const dateFormat = require('../utils/dateFormat');


const NFTSchema = new Schema({
    description:{
        type:String,
        required: 'Description is required'
    },
    title:{
        type:String
    },
    image:{
        url: {
            type:String,
            default: 'https://via.placeholder.com/200x200.png?text=Profile'
        },
        public_id: {
            type:String,
            default:`${nanoid()}.${Date.now()}`
        }
    },
    artist: {
        type:ObjectId,
        ref:"User"
    },
    price:{
        type:Number
    },
    attributes:[{
        type:String
    }],
    forSale:{
        type:Boolean,
        default:false
    },
    readyToMint:{
        type:Boolean,
        default:false
    },
    uploadToDrawing:{
        type:Boolean,
        default:true
    },
    publish:{
        type:Boolean,
        default:false
    },
    minted:{
        type:Boolean,
        default:false
    }

}, {timestamps:true, toJSON: {virtuals: true}});



const NFT = model("NFT", NFTSchema);
  
module.exports = NFT;