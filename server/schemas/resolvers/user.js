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

const me = () => {
    return "Magic"
};


module.exports ={
    Query:{
       me     
    }, 
    Mutation: {
        createUser,
        
    }

}