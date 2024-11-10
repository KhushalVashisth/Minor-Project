import React, { useState } from 'react';
import Login from './Login';
import Signup from './Signup';

const Header = () => {
  const [showLogin, setShowLogin] = useState(false);
  const [showSignup, setShowSignup] = useState(false);

  return (
    <header className="header">
      <div className="header-container">
        <div className="logo">
          <a href="/">LegalPlatform</a>
        </div>
        <nav className="nav-links">
          <a href="#features">Features</a>
          <a href="#services">Services</a>
          <a href="#pricing">Pricing</a>
          <a href="#partners">Partners</a>
          <a href="#contact">Contact</a>
        </nav>
        <div className="auth-buttons">
          <button onClick={() => setShowLogin(true)} className="btn login-btn">Login</button>
          <button onClick={() => setShowSignup(true)} className="btn signup-btn">Sign Up</button>
        </div>
      </div>
      
      {showLogin && <Login onClose={() => setShowLogin(false)} />}
      {showSignup && <Signup onClose={() => setShowSignup(false)} />}
    </header>
  );
};

export default Header;
