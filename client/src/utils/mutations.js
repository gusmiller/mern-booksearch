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
 *   QUERY_ADDUSER
 *   QUERY_SAVEBOOK
 *   QUERY_REMOVEBOOK
 *******************************************************************/
import { gql } from '@apollo/client';

// login mutation
export const QUERY_LOGIN = gql`
     mutation login($email: String!, $password: String!) {
          login(email: $email, password: $password) {
               token
               user {
                    _id
                    username
                    email
                    bookCount
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
     }
`;

export const QUERY_ADDUSER = gql`
     mutation addUser($username: String!, $email: String!, $password: String!) {
          addUser(username: $username, email: $email, password: $password) {
               token
               user {
                    _id
                    username
                    email
                    bookCount
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
     }
`;

export const QUERY_SAVEBOOK = gql`
     mutation saveBook($bookData: BookInput!) {
          saveBook(bookData: $bookData) {
               _id
               username
               email
               bookCount
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

export const QUERY_REMOVEBOOK = gql`
     mutation removeBook($bookId: ID!) {
          removeBook(bookId: $bookId) {
               _id
               username
               email
               bookCount
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