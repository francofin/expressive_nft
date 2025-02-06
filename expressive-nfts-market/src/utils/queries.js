import { gql } from '@apollo/client';
import {USER_INFO, NFT_DATA} from './fragments';


export const PROFILE = gql`
    query{
      profile{
        ...userInfo
      }
    }
    ${USER_INFO}
    `;

export const GET_ALL_NFTS = gql`
  query allNFTs {
      allNFTs{
          ...nftData
      }
  }
  ${NFT_DATA}
`;

export const NFT_BY_ARTIST = gql`
    query {
        NFTsByArtist {
            ...nftData
        }
    }
    ${NFT_DATA}
`;


export const GET_NFT_BY_ARTIST = gql`
  query NFTsByArtist {
    NFTsByArtist{
          ...nftData
      }
  }
  ${NFT_DATA}
`;