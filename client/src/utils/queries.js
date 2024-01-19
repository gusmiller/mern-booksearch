/*******************************************************************
 * Carleton Bootcamp - 2024
 * Copyright 2024 Carleton University refactored by Gustavo Miller
 * License: free and unencumbered software
 * Assignment # 21 - MERN Google Book Search
 * 
 * Filename: queries.js
 * Date : 1/18/2024 7:37:28 AM
 * 
 *   GET_ME
 *   SEARCH_GOOGLE_BOOKS
 *******************************************************************/
import { gql } from '@apollo/client';

export const GET_ME = gql`
     query me {
          me {
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
     }`;