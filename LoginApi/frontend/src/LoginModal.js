import React, { useState } from 'react';
import { Modal, Button } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';
import { loginUser } from './api';

const LoginModal = ({ show, onHide }) => {
  // State variables to manage form inputs and login status
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [userName, setUserName] = useState('');
  const [loginSuccess, setLoginSuccess] = useState(false);
  const [loginError, setLoginError] = useState(false);
  const navigate = useNavigate(); // Hook for navigation

  // Function to handle form submission
  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      // Prepare user data from form inputs
      const userData = { email, password };
      // Call the loginUser function from the API to perform login
      const response = await loginUser(userData);

      // Handle successful login
      setUserName(response.name); // Update user name for welcome message
      setLoginSuccess(true); // Set login success status
    } catch (error) {
      // Handle login error
      setLoginSuccess(false); // Reset login success status
      setLoginError(true); // Set login error status
    }
  };

  return (
    <Modal show={show} onHide={onHide}>
      <Modal.Header closeButton>
        <Modal.Title>Login</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        {loginSuccess ? (
          // Display welcome message upon successful login
          <p className="text-success">Welcome, {userName}!</p>
        ) : (
          // Display login form
          <div>
            {loginError && <p className="text-danger">Sorry, you were not successful in logging in.</p>}
            <form onSubmit={handleSubmit}>
              <div className="form-group">
                <label>Email</label>
                <input type="email" className="form-control" placeholder="Email" value={email} onChange={(e) => setEmail(e.target.value)} />
              </div>
              <div className="form-group">
                <label>Password</label>
                <input type="password" className="form-control" placeholder="Password" value={password} onChange={(e) => setPassword(e.target.value)} />
              </div>
              <button type="submit" className="btn btn-primary">Login</button>
            </form>
          </div>
        )}
      </Modal.Body>
    </Modal>
  );
};

export default LoginModal;
