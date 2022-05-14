// import React, { useEffect, useContext, createContext, useMemo, useReducer } from "react";
// import client from '@utils/apollo-client';
// import {AuthContext, AuthProvider} from "@utils/authContext";
// import {ApolloClient, InMemoryCache, ApolloProvider, concat, ApolloLink, HttpLink } from "@apollo/client";

// const apolloReducer = (state, action) => {
//     switch(action.type){
//         case "AUTHENTICATED_USER":
//             return {...state, client: action.payload}
//         default:
//             return state
//     }
// }

// const ApolloContextWrapper = createContext();

// const initialState = {
//     client: null
// };

// const ApolloWrapperProvider = ({children}) => {

//     const {state:userState} = useContext(AuthContext);
//     const[state, dispatch] = useReducer(apolloReducer, initialState);

//     useEffect(() => {

//         const unsubscribe = () => {
//             const httpLink = new HttpLink({ uri: process.env.NEXT_PUBLIC_GRAPHQL_ENDPOINT });

//             const authLink = new ApolloLink((operation, forward) => {
            
//             // add the authorization to the headers
//             operation.setContext(({ headers = {} }) => ({
//                 headers: {
//                 ...headers,
//                 authtoken: userState.user ? userState.user.token : "",
//                 }
//             }));
            
//             return forward(operation);
//             });

//             const client  = new ApolloClient({
//                 link: concat(authLink, httpLink),
//                 cache: new InMemoryCache()
//             });

//             if(client){
//                 dispatch({
//                     type:'AUTHENTICATED_USER',
//                     payload:{client: client}
//                 });
//             } else{
//                 dispatch({
//                     type:'AUTHENTICATED_USER',
//                     payload: null
//                 });
//             }

//         }

//             return () => unsubscribe();
//     }, []);


//     const value = {state, dispatch};
//     return <ApolloContextWrapper.Provider value={value}>
//                 <ApolloProvider client={value.state.client}>
//                     {children}
//                 </ApolloProvider>
//         </ApolloContextWrapper.Provider>

// }


// export {ApolloContextWrapper, ApolloWrapperProvider};