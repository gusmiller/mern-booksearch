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

// set token secret and expiration date
const secret = 'mysecretsshhhhh';
const expiration = '2h';

module.exports = {
     // function for our authenticated routes
     authMiddleware: function (req, res, next) {          
          let token = req.query.token || req.headers.authorization; //tokens via req.query/headers

          if (req.headers.authorization) {
               token = token.split(' ').pop().trim();
          }

          if (!token) { return res.status(400).json({ message: 'Invalid token!' }); }

          // Validate token and return user data
          try {
               const { data } = jwt.verify(token, secret, { maxAge: expiration });
               req.user = data;
          } catch {
               console.log('Invalid token');
               return res.status(400).json({ message: 'invalid token!' });
          }
          
          next(); // send to next endpoint
     },
     signToken: function ({ email, username, _id }) {
          const payload = { email, username, _id };
          return jwt.sign({ data: payload }, secret, { expiresIn: expiration });
     },
};
