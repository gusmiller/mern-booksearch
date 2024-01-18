/*******************************************************************
 * Carleton Bootcamp - 2024
 * Copyright 2024 Carleton University refactored by Gustavo Miller
 * License: free and unencumbered software
 * Assignment # 21 - MERN Google Book Search
 * 
 * Filename: server.js
 * Date : 1/16/2024 9:27:28 PM
 *******************************************************************/
const express = require('express');

// Import the ApolloServer class and expressMiddleware helper function
const { ApolloServer } = require('@apollo/server');
const { expressMiddleware } = require('@apollo/server/express4');

// Import the two parts of a GraphQL schema
const { typeDefs, resolvers } = require('./schemas');
const db = require('./config/connection');

const PORT = process.env.PORT || 3003;
const server = new ApolloServer({
     typeDefs,
     resolvers
});

const app = express();

// Create a new instance of an Apollo server with the GraphQL schema
const startApolloServer = async () => {
     await server.start(); //Start Apollo server

     app.use(express.urlencoded({ extended: false }));
     app.use(express.json());

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

     app.use('/graphql', expressMiddleware(server));

     db.once('open', () => {
          app.listen(PORT, () => {
               console.log(`API server running on port ${PORT}!`);
               console.log(`Use GraphQL at http://localhost:${PORT}/graphql`);
          })
     })
};

// Call the async function to start the server
startApolloServer();