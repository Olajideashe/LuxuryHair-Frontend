import React from 'react';
import './Login.css';
import { Link } from 'react-router-dom';

const Login = () => {
  return (
    <div className="login-page">
      {/* Blurred background hero header */}
      <div className="login-hero">
        <div className="login-hero-overlay">
          <h2>ACCOUNT</h2>
          <p>Home / Account</p>
        </div>
      </div>

      <div className="login-form-container">
        <form className="login-form">
          <input type="email" placeholder="Email" required />
          <input type="password" placeholder="Password" required />
          
          <button type="submit">Sign In</button>

          <div className="login-links">
            <Link to="/forgot-password">Forgot your password?</Link>
            <Link to="/register">Create account</Link>
            <Link to="/">Return to Store</Link>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Login;
