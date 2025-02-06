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
        country
        images {
            url
            public_id
        }
    }
`


export const NFT_DATA = gql`
    fragment nftData on NFT {
        _id
        title
        description
        image {
            url
            public_id
        }
        attributes
        price
        forSale
        readyToMint
        publish
        minted
        artist {
            _id
            userName
        }
    }
`;
