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

  type Auth {
     token: ID!
     user: [User]
  }

  type User {
     _id: ID
     username: String
     email: String
     password: String
     bookCount: Int
     savedBooks: [Book],
  }

  # Define which queries the front end is allowed to make and what data is returned
  type Query {
     me: [User]
     searchGoogleBooks(searchInput: String!): [Book]
  }

  type Mutation{
     login(email: String!, password: String): Auth
     addUser(username: String!, email: String!, password: String): Auth
     saveBook(bookData: BookInput!): User
     removeBook(bookId: ID!): User
     )
  }

  input BookInput {
     authors: [String]
     description: String
     title: String
     bookId: ID
     image: String
     link: String
   }
`;

module.exports = typeDefs;
