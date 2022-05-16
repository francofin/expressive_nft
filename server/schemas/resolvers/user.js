const { authMiddleware } = require('../../utils/auth');
const { User } = require('../../models');
const shortid = require('shortid');
const {DateTimeResolver} = require('graphql-scalars');
const user = require('../typeDefs/user');

const createUser = async(parent, args, {req}) => {
    const currentUser = await authMiddleware({req});
    console.log(currentUser)
    const user  = await User.findOne({email: currentUser.email});
    return user ? user : new User({
        email: currentUser.email,
        userName: shortid.generate()
    }).save();

}

const updateUser = async(parent, args, {req}) => {
    const currentUser = await authMiddleware({req});
    const updatedUser = await User.findOneAndUpdate({email: currentUser.email}, {...args.input}, {new:true}).exec();
    return updatedUser;
}

const profile = async(parent, args, {req}) => {
    const currentUser = await authMiddleware({req});
    const user = await User.findOne({email:currentUser.email}).exec();
    return user;
}


const me = () => {
    return "Magic"
};


module.exports ={
    Query:{
       me,
       profile
    }, 
    Mutation: {
        createUser,
        updateUser
        
    }

}