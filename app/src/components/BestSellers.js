// BestSellers.js

import React from 'react';
import { Container, Row, Col, Card } from 'react-bootstrap';

const BestSellers = () => {
  const bestSellers = [
    { id: 4, name: 'My Name is Barbra', price: 149.99, image: 'https://images4.penguinrandomhouse.com/cover/9780525429524' },
    { id: 5, name: 'Breaking Twitter', price: 159.99, image: 'https://www.hachettebookgroup.com/wp-content/uploads/2023/06/9781538707623.jpg?resize=674,1024' },
    { id: 6, name: 'The Professer', price: 169.99, image: 'https://encrypted-tbn2.gstatic.com/images?q=tbn:ANd9GcQ8iQRRGhxZthxQkvzLt46oNyHkpjwZ7GWltWZKZ3_2iT4BSGRc' },
    { id: 11, name: 'The Ministry Of Outmost Happiness', price: 149.99, image: 'https://rukminim2.flixcart.com/image/850/1000/kidgnm80-0/book/w/8/v/the-ministry-of-utmost-happiness-original-imafy6yyfhxkz3xf.jpeg?q=20' },
    { id: 18, name: 'The Stair and Strange Moon', price: 200.99, image:'https://images-na.ssl-images-amazon.com/images/S/compressed.photo.goodreads.com/books/1678631297i/123204365.jpg'},
    { id: 20, name: 'RHYS and Bown', price: 220.99, image:'https://images-na.ssl-images-amazon.com/images/S/compressed.photo.goodreads.com/books/1687768076i/112974876.jpg'},
    { id: 21, name: 'The Engeggment Ring', price: 230.99, image:'https://images-na.ssl-images-amazon.com/images/S/compressed.photo.goodreads.com/books/1685017955i/123112160.jpg'},
    { id: 22, name: 'Botond Markovices', price: 249.99, image:'https://images-na.ssl-images-amazon.com/images/S/compressed.photo.goodreads.com/books/1698240079i/200402654.jpg'},
  ];

  return (
    <Container>
      <h2>Best Sellers</h2>
      <Row>
        {bestSellers.map((product) => (
          <Col key={product.id} sm={12} md={6} lg={4} xl={3}>
            <Card className="mb-4">
              <Card.Img variant="top" src={product.image} />
              <Card.Body>
                <Card.Title>{product.name}</Card.Title>
                <Card.Text>Rs. &nbsp;{product.price}</Card.Text>
              </Card.Body>
            </Card>
          </Col>
        ))}
      </Row>
    </Container>
  );
};

export default BestSellers;
