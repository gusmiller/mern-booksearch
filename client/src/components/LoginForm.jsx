/*******************************************************************
 * Carleton Bootcamp - 2024
 * Copyright 2024 Carleton University refactored by Gustavo Miller
 * License: free and unencumbered software
 * Assignment # 21 - MERN Google Book Search
 * 
 * Filename: LoginForm.jsx
 * Date : 1/16/2024 9:27:28 PM
 *******************************************************************/
import { useState } from 'react';
import { Form, Button, Alert } from 'react-bootstrap';

import { useMutation } from '@apollo/client';
import { LOGINUSER } from '../utils/mutations';
import Auth from '../utils/auth';

const LoginForm = () => {
     const [userFormData, setUserFormData] = useState({ email: 'gustavo@miller.com', password: 'GM$ller' });
     const [validated] = useState(false);
     const [showAlert, setShowAlert] = useState(false);
     const [loginUser] = useMutation(LOGINUSER);

     const handleInputChange = (event) => {
          const { name, value } = event.target;
          setUserFormData({ ...userFormData, [name]: value });
     };

     const handleFormSubmit = async (event) => {
          event.preventDefault();

          const form = event.currentTarget; // Validate form
          if (form.checkValidity() === false) {
               event.preventDefault();
               event.stopPropagation();
          }

          try {
               const { data } = await loginUser({ variables: { ...userFormData }, });

               const loginUserData = data && data.login;
               // here is where we will handle the case where the server response is missing or does not contain loginUser
               if (loginUserData) {
                    const { token, user } = loginUserData;
                    Auth.login(token);
               } else {
                    // another way to handle this would be to throw an error
                    console.error('loginUser mutation response does not contain loginUser:', data);
                    setShowAlert(true);
               }
          } catch (err) {
               console.error(err);
               setShowAlert(true);
          }

          setUserFormData({ username: '', email: '', password: '', });
     };

     return (
          <>
               <Form noValidate validated={validated} onSubmit={handleFormSubmit}>
                    <Alert dismissible onClose={() => setShowAlert(false)} show={showAlert} variant='danger'>Invalid login credentials!</Alert>
                    <Form.Group className='mb-3'>
                         <Form.Label htmlFor='email'>Email</Form.Label>
                         <Form.Control type='text' placeholder='Your email' name='email' onChange={handleInputChange} value={userFormData.email} required />
                         <Form.Control.Feedback type='invalid'>Email is required!</Form.Control.Feedback>
                    </Form.Group>

                    <Form.Group className='mb-3'>
                         <Form.Label htmlFor='password'>Password</Form.Label>
                         <Form.Control type='password' placeholder='Your password' name='password' onChange={handleInputChange} value={userFormData.password} required />
                         <Form.Control.Feedback type='invalid'>Password is required!</Form.Control.Feedback>
                    </Form.Group>
                    <Button disabled={!(userFormData.email && userFormData.password)} type='submit' variant='success'>Submit</Button>
               </Form>
          </>
     );
};

export default LoginForm;
