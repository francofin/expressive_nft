import { gql } from '@apollo/client';
import {USER_INFO, NFT_DATA} from './fragments';

export const UPDATE_USER = gql`
    mutation updateUser($input: UpdateUserInput!) {
        updateUser(input: $input) {
           ...userInfo
        }
    }
    ${USER_INFO}
`


export const CREATE_USER = gql`
    mutation createUser {
      createUser {
        userName
        email
      }
    }
`;


export const CREATE_NFT = gql`
    mutation createNFT($input: NFTCreateInput!) {
      createNFT(input: $input) {
            ...nftData
        }
    }
    ${NFT_DATA}
`;