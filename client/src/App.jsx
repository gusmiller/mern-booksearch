/*******************************************************************
 * Carleton Bootcamp - 2024
 * Copyright 2024 Carleton University refactored by Gustavo Miller
 * License: free and unencumbered software
 * Assignment # 21 - MERN Google Book Search
 * 
 * Filename: App.jsx
 * Date : 1/16/2024 9:27:28 PM
 *******************************************************************/
import './App.css';
import { Outlet } from 'react-router-dom';
import { ApolloClient, InMemoryCache, ApolloProvider, createHttpLink } from '@apollo/client';
import { setContext } from '@apollo/client/link/context';
import Navbar from './components/Navbar';

// Construct our main GraphQL API endpoint
const httpLink = createHttpLink({ uri: '/graphql', });

/**
 * Construct request middleware that will attach the JWT token to 
 * every request as an `authorization` header. It first gets the 
 * authentication token from local storage if it exists. It then 
 * return the headers to the context so httpLink can read them
 */
const authLink = setContext((_, { headers }) => {
     const token = localStorage.getItem('id_token');
     return {
          headers: { ...headers, authorization: token ? `Bearer ${token}` : '', },
     };
});

/**
 * There is only one endpoint that ends with Slash Graphql. Apollo Client stores
 * the results of your GraphQL queries in a local, normalized, in-memory cache. 
 * This enables Apollo Client to respond almost immediately to queries for 
 * already-cached data, without even sending a network request.
 * https://www.apollographql.com/docs/react/caching/overview
 */
const client = new ApolloClient({ link: authLink.concat(httpLink), cache: new InMemoryCache(), });

function App() {
     return (
          <ApolloProvider client={client}>
               <Navbar />
               <Outlet />
          </ApolloProvider>
     );
}

export default App;