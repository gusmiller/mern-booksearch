/*******************************************************************
 * Carleton Bootcamp - 2024
 * Copyright 2024 Carleton University refactored by Gustavo Miller
 * License: free and unencumbered software
 * Assignment # 21 - MERN Google Book Search
 * 
 * Filename: auth.js
 * Date : 1/16/2024 9:27:28 PM
 *******************************************************************/
const jwt = require('jsonwebtoken');
const { GraphQLError } = require('graphql');

const secret = 'mysecretsshhhhh'; //Secret password
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
     authMiddleware: function (req, res, next) {
          let token = req.headers.authorization || '';
          if (req.headers.authorization) { token = token.split(' ').pop().trim(); }
          if (!token) { return res.status(400).json({ message: 'Invalid token!' }); }

          // Attempt to Validate token and return user data
          try {
               const { data } = jwt.verify(token, secret, { maxAge: expiration });
               return { user: data };
          } catch (error) {
               console.error('Invalid token', error);
               return res.status(400).json({ message: 'invalid token!' });
          }
     },
     /**
      * This will return the token
      * @param {*} param0 
      * @returns 
      */
     signToken: function ({ email, username, _id }) {
          const payload = { email, username, _id };
          return jwt.sign({ data: payload }, secret, { expiresIn: expiration });
     },
};
