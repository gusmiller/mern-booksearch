/*******************************************************************
 * Carleton Bootcamp - 2024
 * Copyright 2024 Carleton University refactored by Gustavo Miller
 * License: free and unencumbered software
 * Assignment # 21 - MERN Google Book Search
 * 
 * Filename: queries.js
 * Date : 1/18/2024 7:37:28 AM
 * 
 *   QUERY_LOGIN
 *   ADDUSER
 *   SAVE_BOOK
 *   REMOVE_BOOK
 *******************************************************************/
import { gql } from '@apollo/client';

export const LOGIN_USER = gql`
     mutation login($email: String!, $password: String!) {
          login(email: $email, password: $password) {
               token
               user {
                    _id
                    username
                    email
                    savedBooks{
                         bookId
                    }
               }
          }
     }
`;
export const ADD_USER = gql`
     mutation addUser($username: String!, $email: String!, $password: String!) {
          addUser(username: $username, email: $email, password: $password) {
               token
               user {
                    _id
                    username
                    email
               }
          }
     }
`;
export const SAVE_BOOK = gql`
     mutation saveBook($bookData: BookInput!) {
          saveBook(input: $bookData) {
               _id
               username
               email
               savedBooks {
                    bookId
                    authors
                    description
                    title
                    image
                    link
               }
          }
     }
`;
export const REMOVE_BOOK = gql`
     mutation removeBook($bookId: String!) {
          removeBook(bookId: $bookId) {
               _id
               savedBooks {
                    bookId
               }
          }
     }
`;