/*******************************************************************
 * Carleton Bootcamp - 2024
 * Copyright 2024 Carleton University refactored by Gustavo Miller
 * License: free and unencumbered software
 * Assignment # 21 - MERN Google Book Search
 * 
 * Filename: resolver.js
 * Date : 1/16/2024 10:26:12 PM
 *******************************************************************/
const { Class } = require('../models');

// Create the functions that fulfill the queries defined in `typeDefs.js`
const resolvers = {
     Query: {
          classes: async () => {
               // Get and return all documents from the classes collection
               return await Class.find({});
          }
     }
};

module.exports = resolvers;
