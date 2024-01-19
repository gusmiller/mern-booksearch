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
 *   QUERY_SAVEBOOK
 *   QUERY_REMOVEBOOK
 *******************************************************************/
import { gql } from '@apollo/client';

export const LOGINUSER = gql`
     mutation login($email: String!, $password: String!) {
          login(email: $email, password: $password) {
               token
               user {
                    _id
                    username
                    email
               }
          }
     }
`;
export const REGISTER_USER = gql`
     mutation registerUser($username: String!, $email: String!, $password: String!) {
          registerUser(username: $username, email: $email, password: $password) {
               token
               user {
                    _id
                    username
                    email
               }
          }
     }
`;
export const QUERY_SAVEBOOK = gql`
     mutation saveBook($input: BookInput) {
          saveBook(input: $input) {
               _id
          }
     }
`;
export const QUERY_REMOVEBOOK = gql`
     mutation removeBook($bookId: String) {
          removeBook(bookId: $bookId) {
               _id
               savedBooks {
                    bookId
               }
          }
     }
`;