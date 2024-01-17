/*******************************************************************
 * Carleton Bootcamp - 2024
 * Copyright 2024 Carleton University refactored by Gustavo Miller
 * License: free and unencumbered software
 * Assignment # 21 - MERN Google Book Search
 * 
 * Filename: user-routes.js
 * Date : 1/16/2024 9:27:28 PM
 *******************************************************************/
 
 const router = require('express').Router();
const {
     createUser,
     getSingleUser,
     saveBook,
     deleteBook,
     login,
} = require('../../controllers/user-controller');

//import middleware
const { authMiddleware } = require('../../utils/auth');

// put authMiddleware anywhere we need to send a token for verification of user
router.route('/').post(createUser).put(authMiddleware, saveBook);

router.route('/login').post(login);

router.route('/me').get(authMiddleware, getSingleUser);

router.route('/books/:bookId').delete(authMiddleware, deleteBook);

module.exports = router;
