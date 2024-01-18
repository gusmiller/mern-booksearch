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
import { ApolloClient, InMemoryCache, ApolloProvider } from '@apollo/client';
import { Outlet } from 'react-router-dom';

import Navbar from './components/Navbar';

const client = new ApolloClient({
     uri: '/graphql',
     cache: new InMemoryCache(),
});

function App() {
     return (
          <ApolloProvider client={client}>
               <Navbar />
               <Outlet />
          </ApolloProvider>
     );
}

export default App;