/*******************************************************************
 * Carleton Bootcamp - 2024
 * Copyright 2024 Carleton University refactored by Gustavo Miller
 * License: free and unencumbered software
 * Assignment # 21 - MERN Google Book Search
 * 
 * Filename: API.js
 * Date : 1/16/2024 9:27:28 PM
 * 
 * REST Api calls to manipulate data. 
 *   searchGoogleBooks - make a search to google books api
 *******************************************************************/

// make a search to google books api
// https://www.googleapis.com/books/v1/volumes?q=harry+potter
export const searchGoogleBooks = (query) => {
     return fetch(`https://www.googleapis.com/books/v1/volumes?q=${query}`);
};
