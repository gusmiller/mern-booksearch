/*******************************************************************
 * Carleton Bootcamp - 2024
 * Copyright 2024 Gustavo Miller
 * License: free and unencumbered software
 * Assignment # 21 - MERN Google Book Search
 * 
 * Filename: App.jsx
 * Date : 1/16/2024 9:27:28 PM
 *******************************************************************/
 
import './App.css';
import { Outlet } from 'react-router-dom';

import Navbar from './components/Navbar';

function App() {
     return (
          <>
               <Navbar />
               <Outlet />
          </>
     );
}

export default App;
