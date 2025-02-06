const {gql} = require('apollo-server-express');

module.exports= gql`

    scalar Datetime

    type Image {
        url:String
        public_id:String
    }

    type Query {
        me: String!
    }
        
    type User {
        _id: ID!
        firstName:String!
        lastName:String!
        userName:String!
        email:String!
        images:[Image]
        profileTextPargaraph:String
        createdAt: Datetime
        updatedAt: Datetime
        country:String
        isPremium: Boolean
        website:[String]
        daysActiveCount: Int
    }


    type CreateUserResponse {
        userName:String!
        email:String!  
    }

    input ImageInput {
        url:String
        public_id:String
    }


    input UpdateUserInput{
        userName:String
        email:String
        firstName:String
        lastName:String
        images:[ImageInput]
        profileTextPargaraph:String
        country:String
        isPremium: Boolean
        website:[String]
    }

    type Query {
        profile:User
        publicProfile(userName: String!):User!
        allUsers:[User!]
    }


    type Mutation {
        createUser:CreateUserResponse!
        updateUser(input: UpdateUserInput): User!
        followUser:User!
    }


`