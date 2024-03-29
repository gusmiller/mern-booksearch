/*******************************************************************
 * Carleton Bootcamp - 2024
 * Copyright 2024 Carleton University refactored by Gustavo Miller
 * License: free and unencumbered software
 * Assignment # 21 - MERN Google Book Search
 * 
 * Filename: resolver.js
 * Date : 1/16/2024 10:26:12 PM
 * 
 * me - Retrieves the user profile 
 * searchGoogleBooks - returns an array of books based on the search 
 * input. It uses fetch api to make a request to the google books api
 *******************************************************************/
const { User } = require('../models');
const { signToken, AuthenticationError } = require('../utils/auth');

const resolvers = {

     /**
      * GraphQL Queries definition
      *   me - Returns user logged in
      *   searchGoogleBooks - Returns  array of books (if any)
      */
     Query: {

          me: async (parent, args, context ) => {
               if (context.user) {
                    return await User.findOne({ _id: context.user._id });
               }
               throw AuthenticationError;
          },
          searchGoogleBooks: async (_, { searchInput }) => {
               try {
                    const response = await fetch(`https://www.googleapis.com/books/v1/volumes?q=${searchInput}`);
                    const data = await response.json();

                    const searchResults = data.items.map((item) => ({
                         authors: item.volumeInfo.authors || ['No author to display'],
                         description: item.volumeInfo.description || 'No description',
                         bookId: item.id,
                         image: item.volumeInfo.imageLinks?.thumbnail || '',
                         link: item.volumeInfo.infoLink,
                         title: item.volumeInfo.title,
                    }));

                    return searchResults;
               } catch (error) {
                    console.error(error);
                    throw new Error('Google Books search failed!');
               }
          },
     },

     /**
      * Mutations definition
      *   login - Returns a token and the user that is logged in
      *   addUser -  Add user to MongoDB, returns a token/user
      *   saveBook - Persists books to the users
      *   removeBook - Deletes book from the users profile
      */
     Mutation: {

          login: async (_, { email, password }) => {
               const useraccess = await User.findOne({ email });

               if (!useraccess) { throw AuthenticationError; }
               const validpassword = await useraccess.isCorrectPassword(password);
               if (!validpassword) { throw AuthenticationError; }

               const token = signToken(useraccess);
               return { token, useraccess };
          },

          addUser: async (parent, { username, email, password }) => {
               const newuser = await User.create({ username, email, password });
               const token = signToken(newuser);
               return { token, newuser };
          },

          saveBook: async (_, { input }, context) => {
               const { authors, description, title, bookId, image, link } = input;

               if (context.user) {
                    const bookSaved = await User.findOneAndUpdate(
                         { _id: context.user._id },
                         { $addToSet: { savedBooks: { authors, description, title, bookId, image, link } } },
                         { new: true, runValidators: true }
                    );
                    return bookSaved;
               }

               throw AuthenticationError;
          },

          removeBook: async (parent, { bookId }, context) => {
               if (context.user) {
                    const removeBook = await User.findOneAndUpdate(
                         { _id: context.user._id },
                         { $pull: { savedBooks: { bookId } } },
                         { new: true }
                    );
                    return removeBook;
               }
               throw AuthenticationError;
          },
     },
};
// export the resolvers
module.exports = resolvers;