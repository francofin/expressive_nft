import { gql } from '@apollo/client';
import {USER_INFO} from './fragments';

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