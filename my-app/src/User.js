// src/User.js
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom'; // Import useNavigate for redirection
import './User.css';

function User() {
  const [isLogin, setIsLogin] = useState(true);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const [successMessage, setSuccessMessage] = useState('');
  const navigate = useNavigate(); // For navigation after user creation

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!email || !password) {
      setError('Please fill in all fields.');
      return;
    }
    setError('');
    
    if (isLogin) {
      // For login: you can replace this with actual login logic
      alert('Logging in...');
    } else {
      // For account creation, simulate success message or real API call
      setSuccessMessage('Account created successfully! Redirecting to login...');
      setTimeout(() => {
        navigate('/login'); // Redirect to login page after 3 seconds
      }, 3000);
    }
  };

  const toggleForm = () => {
    setIsLogin(!isLogin);
    setSuccessMessage(''); // Clear success message when switching between forms
  };

  return (
    <div className="user-container">
      <div className="user-card">
        <h2 className="user-heading">{isLogin ? 'Login' : 'Create an Account'}</h2>
        <form onSubmit={handleSubmit} className="user-form">
          <div className="input-group">
            <label htmlFor="email">Email:</label>
            <input
              type="email"
              id="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Enter your email"
            />
          </div>
          <div className="input-group">
            <label htmlFor="password">Password:</label>
            <input
              type="password"
              id="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              placeholder="Enter your password"
            />
          </div>
          {error && <p className="error">{error}</p>}
          <button type="submit" className="submit-btn">{isLogin ? 'Login' : 'Create Account'}</button>
        </form>
        {successMessage && <p className="success">{successMessage}</p>}
        <p className="toggle-link" onClick={toggleForm}>
          {isLogin ? 'Don\'t have an account? Sign up' : 'Already have an account? Login'}
        </p>
      </div>
    </div>
  );
}

export default User;
