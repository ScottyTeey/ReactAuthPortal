import React, { useState } from 'react';
import { Modal, Button, Form } from 'react-bootstrap';
import { registerUser } from './api'; // Import your API function

const RegisterModal = ({ show, onHide }) => {
  // State variables to manage registration form inputs and registration status
  const [Name, setName] = useState('');
  const [Email, setEmail] = useState('');
  const [Password, setPassword] = useState('');
  const [registrationSuccess, setRegistrationSuccess] = useState(false);

  // Function to handle form submission
  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      // Prepare user data from form inputs
      const userData = { Name, Email, Password };
      // Call the registerUser function from the API to perform registration
      const response = await registerUser(userData);

      // Handle successful registration
      setRegistrationSuccess(true);
    } catch (error) {
      // Handle registration error (could be expanded to show error messages to the user)
    }
  };

  return (
    <Modal show={show} onHide={onHide} centered>
      <Modal.Header closeButton>
        <Modal.Title>Register</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        {registrationSuccess ? (
          // Display registration success message
          <p>Registration successful! Please log in.</p>
        ) : (
          // Display registration form
          <Form onSubmit={handleSubmit}>
            <Form.Group controlId="name">
              <Form.Label>Name</Form.Label>
              <Form.Control type="text" placeholder="Enter your name" value={Name} onChange={(e) => setName(e.target.value)} required/>
            </Form.Group>
            <Form.Group controlId="email">
              <Form.Label>Email</Form.Label>
              <Form.Control type="email" placeholder="Enter your email" value={Email} onChange={(e) => setEmail(e.target.value)} required/>
            </Form.Group>
            <Form.Group controlId="password">
              <Form.Label>Password</Form.Label>
              <Form.Control type="password" placeholder="Enter your password" value={Password} onChange={(e) => setPassword(e.target.value)} required/>
            </Form.Group>
            <Button variant="primary" type="submit">
              Register
            </Button>
          </Form>
        )}
      </Modal.Body>
      <Modal.Footer>
        <Button variant="secondary" onClick={onHide}>
          Close
        </Button>
      </Modal.Footer>
    </Modal>
  );
};

export default RegisterModal;
