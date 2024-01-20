/*******************************************************************
 * Carleton Bootcamp - 2024
 * Copyright 2024 Carleton University refactored by Gustavo Miller
 * License: free and unencumbered software
 * Assignment # 21 - MERN Google Book Search
 * 
 * Filename: auth.js
 * Date : 1/16/2024 9:27:28 PM
 *******************************************************************/

// Dotenv is a zero-dependency module that loads environment variables from 
// a .env file into process.env. Storing configuration in the environment 
// separate from code is based on The Twelve-Factor App methodology
// https://www.npmjs.com/package/dotenv
require("dotenv").config();

const jwt = require('jsonwebtoken');
const { GraphQLError } = require('graphql');

const secret = process.env.SECRET; //Secret password
const expiration = '2h'; //Expiration time span

module.exports = {
     AuthenticationError: new GraphQLError('Could not authenticate user.', {
          extensions: {
               code: 'UNAUTHENTICATED',
          },
     }),

     /**
      * Middleware to authenticate routes - in case user is not logged in
      * @param {*} req - request??
      * @param {*} res - response
      * @param {*} next - proceed with next route call
      * @returns 
      */
     authMiddleware: function ({ req }) {
          let token = req.body.token || req.query.token || req.headers.authorization;
          if (req.headers.authorization) { token = token.split(' ').pop().trim(); }
          if (!token) { return req }

          // Attempt to Validate token and return user data
          try {
               const { data } = jwt.verify(token, secret, { maxAge: expiration });
               req.user = data;
          } catch (error) {
               console.error('Invalid token', error);
               return { user: null }
          }
          return req;
     },

     /**
      * Authenticate routes. This will return the token
      * @param {*} param0 
      * @returns 
      */
     signToken: function ({ email, username, _id }) {
          const payload = { email, username, _id };
          return jwt.sign({ data: payload }, secret, { expiresIn: expiration });
     },
};
