const mongoose = require("mongoose");
const { ObjectId, Schema, model } = mongoose;
const dateFormat = require('../utils/dateFormat');
const {nanoid} = require('nanoid');


const userSchema = new Schema({
firstName: {
    type: String,
    trim: true,
    },
lastName: {
    type: String,
    trim: true,
},
userName:{
    type:String,
    required:true,
    index:true,
    unique:true
},
email: {
    type: String,
    required: true,
    unique: true,
    match: [/.+@.+\..+/, "Must match an email address!"],
    index: true
},
images:{
    type:Array,
    default:[{
        url:'https://via.placeholder.com/200x200.png?text=Profile',
        public_id:`${nanoid()}.${Date.now()}`
    }]
},
profileTextPargaraph: {
    type: String,
    minlength: 30,
    maxlength: 1000,
},
birthday: {
    type: Date,
    get: (timestamp) => dateFormat(timestamp),
},
daysActive: {
    type: Number
},
isPremium: {
    type: Boolean,
    default:false
},
country:{
    type:String,
    trim:true
},
website:[{
    type:String,
    trim: true
}],
stripeSession:{
    
},
   
}, {timestamps:true});


userSchema.virtual('daysActiveCount').get(function() {
    const oneDay = 1000 * 60 * 60 * 24;
    let currentDate = new Date();
    let daysActive = Math.round(currentDate.getTime() - this.createdAt.getTime()) / (oneDay);
    return daysActive.toFixed(0);
  })

const User = model("User", userSchema);
  
module.exports = User;