/*******************************************************************
 * Carleton Bootcamp - 2024
 * Copyright 2024 Carleton University refactored by Gustavo Miller
 * License: free and unencumbered software
 * Assignment # 21 - MERN Google Book Search
 * 
 * Filename: server.js
 * Date : 1/16/2024 9:27:28 PM
 *******************************************************************/
require('dotenv').config({path: '../.env'});

const express = require('express');
const { ApolloServer } = require('@apollo/server'); //ApolloServer class
const { expressMiddleware } = require('@apollo/server/express4'); //expressMiddleware helper function
const { authMiddleware } = require('./utils/auth');
const path = require('path');

// Import the two parts of a GraphQL schema
const { typeDefs, resolvers } = require('./schemas');
const db = require('./config/connection');

//const PORT = process.env.PORT;
const PORT = process.env.PORT || 3001;

const app = express();
const server = new ApolloServer({
     typeDefs,
     resolvers,
});

// Create a new instance of an Apollo server with the GraphQL schema
const startApolloServer = async () => {
     await server.start(); //Start Apollo server

     app.use(express.urlencoded({ extended: false }));
     app.use(express.json());

     app.use('/graphql', expressMiddleware(server, {
          context: authMiddleware
     }));

     // Code extracted from 11-Ins-MERN-Setup. Important for MERN Setup: When our application runs 
     // from production, it functions slightly differently than in development
     // In development, we run two servers concurrently that work together
     // In production, our Node server runs and delivers our client-side bundle from the dist/ folder 
     if (process.env.NODE_ENV === 'production') {
          app.use(express.static(path.join(__dirname, '../client/dist')));

          app.get('*', (req, res) => {
               res.sendFile(path.join(__dirname, '../client/dist/index.html'));
          });
     }

     db.once('open', () => {
          app.listen(PORT, () => {
               console.log(`GraphQL Server running on port ${PORT}!`);
               console.log(`Use GraphQL at ${process.env.VITE_URL}/graphql`);
          })
     })
};

// Call the async function to start the server
startApolloServer();