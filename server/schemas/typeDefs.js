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
  # Define which fields are accessible from the Book model
  type Book {
     bookId: ID
     authors: [String]
     description: String
     title: String
     image: String
     link: String
  }
`;

module.exports = typeDefs;