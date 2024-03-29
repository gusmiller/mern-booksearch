/*******************************************************************
 * Carleton Bootcamp - 2024
 * Copyright 2024 Carleton University refactored by Gustavo Miller
 * License: free and unencumbered software
 * Assignment # 21 - MERN Google Book Search
 * 
 * Filename: SearchBooks.jsx
 * Date : 1/16/2024 9:27:28 PM
 *******************************************************************/
import { useState, useEffect } from 'react';
import { useMutation, useLazyQuery } from '@apollo/client';
import { Container, Col, Form, Button, Card, Row } from 'react-bootstrap';

import { SAVE_BOOK } from '../utils/mutations';

import Auth from '../utils/auth';
import { SEARCH_GOOGLE_BOOKS } from '../utils/queries';
import { saveBookIds, getSavedBookIds } from '../utils/localStorage';

const SearchBooks = () => {
     const [searchedBooks, setSearchedBooks] = useState([]); // State holding returned google api data
     const [searchInput, setSearchInput] = useState(''); // State for holding our search field data     
     const [savedBookIds, setSavedBookIds] = useState(getSavedBookIds()); // State to hold saved bookId values

     const [searchGoogleBooks, { loading, data }] = useLazyQuery(SEARCH_GOOGLE_BOOKS);

     const [saveBook] = useMutation(SAVE_BOOK, {
          context: { headers: { Authorization: `Bearer ${Auth.getToken()}`, }, },
     });

     useEffect(() => {
          if (data) {
               const bookData = data.searchGoogleBooks.map((book) => ({
                    bookId: book.bookId,
                    authors: book.authors || ['No authors to display'],
                    title: book.title,
                    description: book.description || 'No description available',
                    image: book.image || '',
               }));

               setSearchedBooks(bookData);
          }
     }, [data]);

     // set up useEffect hook to save `savedBookIds` list to localStorage on component unmount
     // learn more here: https://reactjs.org/docs/hooks-effect.html#effects-with-cleanup
     useEffect(() => { return () => saveBookIds(savedBookIds); });

     /**
      * This method will execute the search for books and set state on form submit
      * @param {*} event 
      * @returns 
      */
     const handleFormSubmit = async (event) => {
          event.preventDefault();

          if (!searchInput) { return false; }

          try {
               // using the Lazy Query for searching Google Books
               searchGoogleBooks({ variables: { searchInput }, });
               setSearchInput('');
          } catch (err) {
               console.error(err);
          }
     };

     /**
      * This method will handle the saving a book to our database using the graphql mutations
      * we first perform a search of the book by the ID. This will return 1 record. Then we 
      * fetch for the Token (from the local storage) and validate we are logged in.
      * Using the save Book mutation we save the book, pass on the headers with token
      * @param {*} bookId 
      * @returns 
      */
     const handleSaveBook = async (bookId) => {
          const bookToSave = await searchedBooks.find((book) => book.bookId === bookId);
          const token = Auth.loggedIn() ? Auth.getToken() : null; // Validate user logged in and get token
          if (!token) { return false; }

          try {
               const response = await saveBook({
                    variables: { bookData: bookToSave },
                    headers: { Authorization: `Bearer ${Auth.getToken()}`, },
               });

               // if book successfully saves to user's account, save book id to state
               setSavedBookIds([...savedBookIds, bookToSave.bookId]);

          } catch (err) {
               console.error(err);
          }
     };

     return (
          <>
               <div className="text-light bg-dark p-5">
                    <Container>
                         <h1>Search for Books!</h1>
                         <Form onSubmit={handleFormSubmit}>
                              <Row>
                                   <Col xs={12} md={8}>
                                        <Form.Control name='searchInput' value={searchInput}
                                             onChange={(e) => setSearchInput(e.target.value)} type='text' size='lg' placeholder='Search for a book' />
                                   </Col>
                                   <Col xs={12} md={4}><Button type='submit' variant='success' size='lg'>Submit Search</Button></Col>
                              </Row>
                         </Form>
                    </Container>
               </div>

               <Container>
                    <h2 className='pt-5'>
                         {searchedBooks.length ? `Viewing ${searchedBooks.length} results:` : 'Search for a book to begin'}
                    </h2>
                    <Row>
                         {searchedBooks.map((book) => {
                              return (
                                   <Col md="4" key={book.bookId}>
                                        <Card border='dark'>
                                             {book.image ? (<Card.Img src={book.image} alt={`The cover for ${book.title}`} variant='top' />) : null}
                                             <Card.Body>
                                                  <Card.Title>{book.title}</Card.Title>
                                                  <p className='small'>Authors: {book.authors}</p>
                                                  <Card.Text>{book.description}</Card.Text>
                                                  <Card.Link href={book.link} hidden>URL Link {book.link}</Card.Link>
                                                  {Auth.loggedIn() && (
                                                       <Button
                                                            disabled={savedBookIds?.some((savedBookId) => savedBookId === book.bookId)}
                                                            className='btn-block btn-info' onClick={() => handleSaveBook(book.bookId)}>
                                                            {savedBookIds?.some((savedBookId) => savedBookId === book.bookId)
                                                                 ? 'This book has already been saved!' : 'Save this Book!'}
                                                       </Button>
                                                  )}
                                             </Card.Body>
                                        </Card>
                                   </Col>
                              );
                         })}
                    </Row>
               </Container>
          </>
     );
};

export default SearchBooks;