/*******************************************************************
 * Carleton Bootcamp - 2024
 * Copyright 2024 Carleton University refactored by Gustavo Miller
 * License: free and unencumbered software
 * Assignment # 21 - MERN Google Book Search
 * 
 * Filename: Book.js
 * Date : 1/16/2024 9:27:28 PM
 *******************************************************************/
 
const { Schema } = require('mongoose');

// This is a subdocument schema, it won't become its own model but we'll use it as the schema for the User's `savedBooks` array in User.js
const bookSchema = new Schema({
     authors: [
          {
               type: String,
          },
     ],
     description: {
          type: String,
          required: true,
     },
     // saved book id from GoogleBooks
     bookId: {
          type: String,
          required: true,
     },
     image: {
          type: String,
     },
     link: {
          type: String,
     },
     title: {
          type: String,
          required: true,
     },
});

module.exports = bookSchema;
