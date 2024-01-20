/*******************************************************************
 * Carleton Bootcamp - 2024
 * Copyright 2024 Carleton University refactored by Gustavo Miller
 * License: free and unencumbered software
 * Assignment # 21 - MERN Google Book Search
 * 
 * Filename: auth.js
 * Date : 1/16/2024 9:27:28 PM
 * 
 * New class -instantiate for a user, decode a token and get the
 * user's information out of it 
 * 
 *   getProfile- Get user data
 *   loggedIn  - Validate user is logged in and token not expired
 *   isTokenExpired-Validate for expired token
 *   getToken  - Get token from local storage
 *   login     - User logs in
 *   logout    - User logs out
 *******************************************************************/
import decode from 'jwt-decode';

class AuthService {

     getProfile() { return decode(this.getToken()); }
     getToken() { return localStorage.getItem('id_token'); }
     loggedIn() {          
          const token = this.getToken();
          return (!!token && !this.isTokenExpired(token)); // handwaiving here
     }
     isTokenExpired(token) {
          try {
               const decoded = decode(token);
               if (decoded.exp < Date.now() / 1000) {
                    localStorage.removeItem('id_token');
                    return true;
                  } else return false;
          } catch (err) {
               return false;
          }
     }

     login(idToken) {
          localStorage.setItem('id_token', idToken); //Store token to localStorage
          window.location.assign('/'); //Redirect to main
     }

     logout() {          
          localStorage.removeItem('id_token'); //Clear token/profile from localStorage
          window.location.assign('/'); // Reload/reset application state
     }     
}

export default new AuthService();