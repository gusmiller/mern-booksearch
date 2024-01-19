/*******************************************************************
 * Carleton Bootcamp - 2024
 * Copyright 2024 Carleton University refactored by Gustavo Miller
 * License: free and unencumbered software
 * Assignment # 21 - MERN Google Book Search
 * 
 * Filename: SignupForm.jsx
 * Date : 1/16/2024 9:27:28 PM
 *******************************************************************/
import { useState } from 'react';
import { Form, Button, Alert } from 'react-bootstrap';
import { useMutation } from '@apollo/client';
import { REGISTER_USER } from '../utils/mutations'; //Import mutations
import Auth from '../utils/auth'; //Import authentication methods

const SignupForm = () => {
     const [userFormData, setUserFormData] = useState({ username: 'Gustavo Miller', email: 'gustavo@miller.com', password: 'GM$ller' }); //Initial state for validation
     const [validated] = useState(false);
     const [showAlert, setShowAlert] = useState(false); //State for alert
     const [registerUser, { error }] = useMutation(REGISTER_USER);

     /**
      * Handlert for input change
      * @param {*} event 
      */
     const handleInputChange = (event) => {
          const { name, value } = event.target;
          setUserFormData({ ...userFormData, [name]: value });
     };

     const handleFormSubmit = async (event) => {
          event.preventDefault();

          // check if form has everything (as per react-bootstrap docs)
          const form = event.currentTarget;
          if (form.checkValidity() === false) {
               event.preventDefault();
               event.stopPropagation();
          }

          try {

               const { data } = await registerUser({ variables: { ...userFormData }, });
               const { token, user } = data.registerUser;
               Auth.login(token);

          } catch (err) {
               console.error(err);
               setShowAlert(true); //Show alert
          }

          setUserFormData({ username: '', email: '', password: '', });
     };

     return (
          <>
               {/* This is needed for the validation functionality above */}
               <Form noValidate validated={validated} onSubmit={handleFormSubmit}>
                    {/* show alert if server response is bad */}
                    <Alert dismissible onClose={() => setShowAlert(false)} show={showAlert} variant='danger'>Something went wrong with your signup!</Alert>

                    <Form.Group className='mb-3'>
                         <Form.Label htmlFor='username'>Username</Form.Label>
                         <Form.Control type='text' placeholder='Your username' name='username' onChange={handleInputChange} value={userFormData.username} required />
                         <Form.Control.Feedback type='invalid'>Username is required!</Form.Control.Feedback>
                    </Form.Group>

                    <Form.Group className='mb-3'>
                         <Form.Label htmlFor='email'>Email</Form.Label>
                         <Form.Control type='email' placeholder='Your email address' name='email' onChange={handleInputChange} value={userFormData.email} required />
                         <Form.Control.Feedback type='invalid'>Email is required!</Form.Control.Feedback>
                    </Form.Group>

                    <Form.Group className='mb-3'>
                         <Form.Label htmlFor='password'>Password</Form.Label>
                         <Form.Control type='password' placeholder='Your password' name='password' onChange={handleInputChange} value={userFormData.password} required />
                         <Form.Control.Feedback type='invalid'>Password is required!</Form.Control.Feedback>
                    </Form.Group>
                    <Button disabled={!(userFormData.username && userFormData.email && userFormData.password)} type='submit' variant='success'>Submit</Button>
               </Form>
          </>
     );
};

export default SignupForm;
