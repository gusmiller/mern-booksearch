/*******************************************************************
 * Carleton Bootcamp - 2024
 * Copyright 2024 Carleton University refactored by Gustavo Miller
 * License: free and unencumbered software
 * Assignment # 21 - MERN Google Book Search
 * 
 * Filename: index.js
 * Date : 1/16/2024 9:27:28 PM
 *******************************************************************/
 
 const router = require('express').Router();
const userRoutes = require('./user-routes');

router.use('/users', userRoutes);

module.exports = router;
