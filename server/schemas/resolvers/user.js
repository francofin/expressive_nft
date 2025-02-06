const { authMiddleware } = require('../../utils/auth');
const { User } = require('../../models');
const shortid = require('shortid');
const {DateTimeResolver} = require('graphql-scalars');


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
    console.log("Who Am I ", user);
    return user;
}

const publicProfile = async(parent, args, {req}) => {
    return await User.findOne({userName:args.userName}).exec();
}

const allUsers = async(parent, args, {req}) => {
    return await User.find({}).exec();
}


const me = () => {
    return "Magic"
};


module.exports ={
    Query:{
       me,
       profile,
       publicProfile,
       allUsers
    }, 
    Mutation: {
        createUser,
        updateUser
        
    }

}