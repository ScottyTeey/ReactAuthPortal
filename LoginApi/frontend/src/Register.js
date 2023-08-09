import React, { useState } from 'react';
import { registerUser } from './api';

const Register = () => {
  const [Name, setName] = useState('');
  const [Email, setEmail] = useState('');
  const [Password, setPassword] = useState('');
  const [registrationSuccess, setRegistrationSuccess] = useState(false); // New state for success message

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const userData = { Name, Email, Password };
      const response = await registerUser(userData);

      // Handle successful registration
      setRegistrationSuccess(true); // Set success state to true
    } catch (error) {
      // Handle registration error
    }
  };

  return (
    <div>
      <h2>Register</h2>
      {registrationSuccess ? ( // Conditionally render success message
        <p>Registration successful! Please log in.</p>
      ) : (
        <form onSubmit={handleSubmit}>
          <input type="text" placeholder="Name" value={Name} onChange={(e) => setName(e.target.value)} />
          <input type="email" placeholder="Email" value={Email} onChange={(e) => setEmail(e.target.value)} />
          <input type="password" placeholder="Password" value={Password} onChange={(e) => setPassword(e.target.value)} />
          <button type="submit">Register</button>
        </form>
      )}
    </div>
  );
};

export default Register;
