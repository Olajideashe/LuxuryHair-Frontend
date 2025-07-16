import React from 'react';
import './Register.css';
import { Link } from 'react-router-dom';

const Register = () => {
  return (
    <div className="register-page">
      {/* Hero Banner */}
      <div className="register-hero">
        <div className="register-hero-overlay">
          <h2>CREATE ACCOUNT</h2>
          <p>Home / Create Account</p>
        </div>
      </div>

      {/* Form Section */}
      <div className="register-form-container">
        <form className="register-form">
          <input type="text" placeholder="Full Name" required />
          <input type="email" placeholder="Email" required />
          <input type="password" placeholder="Password" required />
          <input type="password" placeholder="Confirm Password" required />
          
          <button type="submit">Create Account</button>

          <div className="register-links">
            <Link to="/login">Already have an account? Sign in</Link>
            <Link to="/">Return to Store</Link>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Register;
