/*******************************************************************
 * Carleton Bootcamp - 2024
 * Copyright 2024 Carleton University refactored by Gustavo Miller
 * License: free and unencumbered software
 * Assignment # 21 - MERN Google Book Search
 * 
 * Filename: connection.js
 * Date : 1/16/2024 9:27:28 PM
 *******************************************************************/
require('dotenv').config({path: '../.env'});
const mongoose = require('mongoose');
mongoose.connect(`${process.env.DB_HOST + process.env.DB_NAME}`);
module.exports = mongoose.connection;