/*******************************************************************
 * Carleton Bootcamp - 2024
 * Copyright 2024 Carleton University refactored by Gustavo Miller
 * License: free and unencumbered software
 * Assignment # 21 - MERN Google Book Search
 * 
 * Filename: main.jsx
 * Date : 1/16/2024 9:27:28 PM
 *******************************************************************/
import ReactDOM from 'react-dom/client'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import 'bootstrap/dist/css/bootstrap.min.css'

import App from './App.jsx'
import SearchBooks from './pages/SearchBooks'
import SavedBooks from './pages/SavedBooks'

const router = createBrowserRouter([
     {
          path: '/',
          element: <App />,
          errorElement: <h1 className='display-2 mt-3'>Wrong page!</h1>,
          children: [
               {
                    index: true,
                    element: <SearchBooks />
               }, {
                    path: '/saved',
                    element: <SavedBooks />
               }
          ]
     }
])

ReactDOM.createRoot(document.getElementById('root')).render(
     <RouterProvider router={router} />
)