/*******************************************************************
 * Carleton Bootcamp - 2024
 * Copyright 2024 Carleton University refactored by Gustavo Miller
 * License: free and unencumbered software
 * Assignment # 21 - MERN Google Book Search
 * 
 * Filename: typeDefs.js
 * Date : 1/16/2024 10:27:25 PM
 * 
 * Typedefs is a query language for the API, and it is Strongly type
 * language
 *******************************************************************/
const typeDefs = `
  # Define which fields are accessible from the Class model
  type Class {
     _id: ID
     name: String
     building: String
     creditHours: Int
  }

  # Define which queries the front end is allowed to make and what data is returned
  type Query {
     classes: [Class]
  }
`;

module.exports = typeDefs;
