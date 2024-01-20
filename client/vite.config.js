/*******************************************************************
 * Carleton Bootcamp - 2024
 * Copyright 2024 Carleton University refactored by Gustavo Miller
 * License: free and unencumbered software
 * Assignment # 21 - MERN Google Book Search
 * 
 * Filename: vite.config.js
 * Date : 1/16/2024 9:27:28 PM
 * 
 * When running vite from the command line, Vite will automatically 
 * try to resolve a config file named vite.config.js inside project 
 * root (other JS and TS extensions are also supported).
 * URL: https://vitejs.dev/config/
 *******************************************************************/

// Dotenv is a zero-dependency module that loads environment variables from 
// a .env file into process.env. Storing configuration in the environment 
// separate from code is based on The Twelve-Factor App methodology
// https://www.npmjs.com/package/dotenv
require("dotenv").config();

import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
     plugins: [react()],
     server: {
          port: process.env.PORT,
          open: true,
          proxy: {
               '/graphql': {
                    target: `http://localhost:${process.env.PORT}`,
                    secure: false,
                    changeOrigin: true
               }
          }
     }
})
