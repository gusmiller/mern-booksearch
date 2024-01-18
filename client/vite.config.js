/*******************************************************************
 * Carleton Bootcamp - 2024
 * Copyright 2024 Carleton University refactored by Gustavo Miller
 * License: free and unencumbered software
 * Assignment # 21 - MERN Google Book Search
 * 
 * Filename: vite.config.js
 * Date : 1/16/2024 9:27:28 PM
 *******************************************************************/
 
import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
     plugins: [react()],
     server: {
          port: 4000,
          open: true,
          proxy: {
               '/api': {
                    target: 'http://localhost:4001',
                    secure: false,
                    changeOrigin: true
               }
          }
     }
})
