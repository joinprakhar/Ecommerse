// SpecialOffers.js

import React from 'react';
import { Container, Row, Col, Card } from 'react-bootstrap';

const SpecialOffers = () => {
  const specialOffers = [
    { id: 7, name: 'Goods Girls Dont die', price: 179.99, actualprice: 150, image: 'https://images-na.ssl-images-amazon.com/images/S/compressed.photo.goodreads.com/books/1685351575i/122658643.jpg' },
    { id: 8, name: 'The refugee Ocean', price: 289.99,actualprice: 200, image: 'https://images-na.ssl-images-amazon.com/images/S/compressed.photo.goodreads.com/books/1676323819i/101144534.jpg' },
    { id: 9, name: 'Bookshops and Bonnydust', price: 199.99,actualprice: 150, image: 'https://images-na.ssl-images-amazon.com/images/S/compressed.photo.goodreads.com/books/1678122626i/65213543.jpg' },
    { id: 12, name: 'The Hunger Games', price: 300.99,actualprice: 180, image: 'https://images-na.ssl-images-amazon.com/images/S/compressed.photo.goodreads.com/books/1586722975i/2767052.jpg' },
    { id: 13, name: 'In The Pines', price: 279.99,actualprice: 220, image: 'https://images-na.ssl-images-amazon.com/images/S/compressed.photo.goodreads.com/books/1678754539i/123195815.jpg' },
    { id: 15, name: 'The Repers and The Angles', price: 199.99,actualprice: 160, image: 'https://images-na.ssl-images-amazon.com/images/S/compressed.photo.goodreads.com/books/1388716938i/8051458.jpg'},
    
    { id: 16, name: 'Tim Powers The Anbious Gate', price: 279.99, actualprice: 220,image: 'https://images-na.ssl-images-amazon.com/images/S/compressed.photo.goodreads.com/books/1344409006i/142296.jpg'},
    
    { id: 17, name: 'Mike Resnigk', price: 99.99,actualprice: 250, image: 'https://images-na.ssl-images-amazon.com/images/S/compressed.photo.goodreads.com/books/1284431932i/8253037.jpg'},
  ];

  return (
    <Container>
      <h2>Special Offers</h2>
      <Row>
        {specialOffers.map((product) => (
          <Col key={product.id} sm={12} md={6} lg={4} xl={3}>
            <Card className="mb-4">
              <Card.Img variant="top" src={product.image} />
              <Card.Body>
                <Card.Title>{product.name}</Card.Title>
                <Card.Text className='text-decoration-line-through'>Rs. &nbsp;{product.price}</Card.Text>
                <Card.Text>Rs. &nbsp;{product.actualprice}</Card.Text>
              </Card.Body>
            </Card>
          </Col>
        ))}
      </Row>
    </Container>
  );
};

export default SpecialOffers;
