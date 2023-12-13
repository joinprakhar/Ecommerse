// ContactForm.js

import React from 'react';
import { Container, Row, Col, Form, Button } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';
const ContactForm = () => {
    const navigate = useNavigate();
  // Handle form submission logic here
  const handleSubmit = (event) => {
    
    // Add your form submission logic here
    event.preventDefault();
    toast.success('Form submitted!');
    navigate('/');
  };

  return (
    <Container>
      <Row>
        <Col md={{ span: 6, offset: 3 }} className="mt-5">
          <h2>Contact Us</h2>
          <Form onSubmit={handleSubmit}>
            {/* Add your form fields here */}
            <Form.Group controlId="formName">
              <Form.Label>Name</Form.Label>
              <Form.Control type="text" placeholder="Your Name" required />
            </Form.Group>
            <Form.Group controlId="formEmail">
              <Form.Label>Email</Form.Label>
              <Form.Control type="email" placeholder="Your Email" required />
            </Form.Group>
            <Form.Group controlId="formMessage">
              <Form.Label>Message</Form.Label>
              <Form.Control as="textarea" rows={3} placeholder="Your Message" required />
            </Form.Group>
            <br></br>
            <Button variant="primary" type="submit">
              Submit
            </Button>
          </Form>
        </Col>
      </Row>
    </Container>
  );
};

export default ContactForm;
