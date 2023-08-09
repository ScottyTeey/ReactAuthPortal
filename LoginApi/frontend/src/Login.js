import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { loginUser } from './api';

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [userName, setUserName] = useState('');
  const [loginSuccess, setLoginSuccess] = useState(false);
  const [loginError, setLoginError] = useState(false); // State to track login error
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const userData = { email, password };
      const response = await loginUser(userData);

      // Handle successful login
      setUserName(response.name);
      setLoginSuccess(true);

      // Redirect to the home page
      //navigate('/home');
    } catch (error) {
      // Handle login error
      setLoginSuccess(false);
      setLoginError(true); // Set login error state
    }
  };

  return (
    <div className="container mt-5">
      <h2>Login</h2>
      {loginSuccess ? (
        <p className="mt-3">Welcome, {userName}!</p>
      ) : (
        <div>
          {loginError && <p className="text-danger mt-3">Sorry, you were not successful in logging in.</p>}
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
    </div>
  );
};

export default Login;
