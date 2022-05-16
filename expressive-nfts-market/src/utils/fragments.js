import { gql } from "@apollo/client";


export const USER_INFO =gql`
    fragment userInfo on User {
        _id
        firstName
        lastName
        userName
        email
        profileTextPargaraph
        createdAt
        updatedAt
        images {
            url
            public_id
        }
    }
`


export default USER_INFO;