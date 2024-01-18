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
 *   getMe - route to get logged in user's info (needs the token)
 *   createUser - route to create new user
 *   loginUser - route to login book
 *   saveBook  - route to save book for current user (user logged in)
 *   deleteBook- route to delete book for current user (user logged in)
 *   searchGoogleBooks - make a search to google books api
 *******************************************************************/
export const getMe = (token) => {
     return fetch('/api/users/me', {
          headers: {
               'Content-Type': 'application/json',
               authorization: `Bearer ${token}`,
          },
     });
};

export const createUser = (userData) => {
     return fetch('/api/users', {
          method: 'POST',
          headers: {
               'Content-Type': 'application/json',
          },
          body: JSON.stringify(userData),
     });
};

export const loginUser = (userData) => {
     return fetch('/api/users/login', {
          method: 'POST',
          headers: {
               'Content-Type': 'application/json',
          },
          body: JSON.stringify(userData),
     });
};

export const saveBook = (bookData, token) => {
     return fetch('/api/users', {
          method: 'PUT',
          headers: {
               'Content-Type': 'application/json',
               authorization: `Bearer ${token}`,
          },
          body: JSON.stringify(bookData),
     });
};

export const deleteBook = (bookId, token) => {
     return fetch(`/api/users/books/${bookId}`, {
          method: 'DELETE',
          headers: {
               authorization: `Bearer ${token}`,
          },
     });
};

// make a search to google books api
// https://www.googleapis.com/books/v1/volumes?q=harry+potter
export const searchGoogleBooks = (query) => {
     return fetch(`https://www.googleapis.com/books/v1/volumes?q=${query}`);
};
