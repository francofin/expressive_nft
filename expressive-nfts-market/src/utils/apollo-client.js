import {AuthContext, AuthProvider} from "@utils/authContext";
import {ApolloClient, InMemoryCache, concat, ApolloLink, HttpLink } from "@apollo/client";
import withApollo from 'next-with-apollo';
import React, { useEffect, useContext } from "react";





// const MyClient = () => {

//     const {state, dispatch} = useContext(AuthContext);

//     console.log("from app", state)

//     const httpLink = new HttpLink({ uri: process.env.NEXT_PUBLIC_GRAPHQL_ENDPOINT });

//     const authLink = new ApolloLink((operation, forward) => {
        
//         // add the authorization to the headers
//         operation.setContext(({ headers = {} }) => ({
//             headers: {
//             ...headers,
//             authtoken: state.user ? state.user.token : "",
//             }
//         }));
        
//         return forward(operation);
//         });

//         const client  = new ApolloClient({
//             link: concat(authLink, httpLink),
//             cache: new InMemoryCache()
//         });

//         return client;
// };

const httpLink = new HttpLink({ uri: process.env.NEXT_PUBLIC_GRAPHQL_ENDPOINT });

const authLink = new ApolloLink((operation, forward) => {
        
    const userToken = window.localStorage.getItem('authtoken');
    // add the authorization to the headers
    operation.setContext(({ headers = {} }) => ({
        headers: {
        ...headers,
        authtoken: userToken ? userToken : "",
        }
    }));
    
    return forward(operation);
});

export const client  = new ApolloClient({
    link:  concat(authLink,httpLink),
    cache: new InMemoryCache()
});



