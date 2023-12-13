// Footer.js

import React from 'react';
import { Container, Row, Col, Button } from 'react-bootstrap';
import { Link } from 'react-router-dom'; // Make sure to import Link from react-router-dom

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer>
      <Container>
        <Row>
          <Col className='text-center py-3'>
            <p>EasyShop &copy; {currentYear}</p>

            <Link to="/contact">
              <Button variant="secondary">Contact Us</Button>
            </Link>
            &nbsp;&nbsp;
            <Link to="/bookquiz">
              <Button variant="success">Play A Quiz</Button>
            </Link>
          </Col>
        </Row>
      </Container>
    </footer>
  );
};

export default Footer;
