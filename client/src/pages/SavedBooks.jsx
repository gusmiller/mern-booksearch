/*******************************************************************
 * Carleton Bootcamp - 2024
 * Copyright 2024 Carleton University refactored by Gustavo Miller
 * License: free and unencumbered software
 * Assignment # 21 - MERN Google Book Search
 * 
 * Filename: SavedBooks.jsx
 * Date : 1/16/2024 9:27:28 PM
 *******************************************************************/
import { useQuery, useMutation } from '@apollo/client';
import { Container, Card, Button, Row, Col } from 'react-bootstrap';
import Auth from '../utils/auth';

import { GET_ME } from '../utils/queries';
import { REMOVE_BOOK } from '../utils/mutations';
import { removeBookId } from '../utils/localStorage';

const SavedBooks = () => {
     // Pass the query for execution on component load to the useQuery hook. The useQuery hook will 
     // always give back an object.
     const { loading, data } = useQuery(GET_ME);
     const [removeBook, { error }] = useMutation(REMOVE_BOOK);
     const userData = data?.me || {}; //Assign data from data object

     // create function that accepts the book's mongo _id value as param and deletes the book from the database
     const handleDeleteBook = async (bookId) => {
          const token = Auth.loggedIn() ? Auth.getToken() : null;
          if (!token) { return false; }

          try {
               const response = await removeBook({ variables: { bookId: bookId, }});
               removeBookId(bookId);
          } catch (err) {
               console.error(err);
          }
     };

     // While there is no data then  show loading
     if (loading) { return <h2>LOADING...</h2>; }

     return (
          <>
               <div className="fluid text-light bg-dark p-5">
                    <Container><h1>Viewing saved books!</h1></Container>
               </div>
               <Container>
                    <h2 className='pt-5'>
                         {userData.savedBooks?.length
                              ? `Viewing ${userData.savedBooks.length} saved ${userData.savedBooks.length === 1 ? 'book' : 'books'}:`
                              : 'You have no saved books!'}
                    </h2>
                    <Row>
                         {userData.savedBooks?.map((book, index) => {
                              return (
                                   <Col key={index} md="4">
                                        <Card key={book.bookId} border='dark'>
                                             {book.image ? <Card.Img src={book.image} alt={`The cover for ${book.title}`} variant='top' /> : null}
                                             <Card.Body>
                                                  <Card.Title>{book.title}</Card.Title>
                                                  <p className='small'>Authors: {book.authors}</p>
                                                  <Card.Text>{book.description}</Card.Text>
                                                  <Card.Link href={book.link} hidden>URL Link</Card.Link>
                                                  <Button className='btn-block btn-danger' onClick={() => handleDeleteBook(book.bookId)}>Delete this Book!</Button>
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

export default SavedBooks;
