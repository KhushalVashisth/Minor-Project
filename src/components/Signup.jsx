import React from 'react';

const Signup = ({ onClose }) => (
  <div className="modal-overlay">
    <div className="modal">
      <h2 className="modal-title">Sign Up</h2>
      <form className="modal-form">
        <label htmlFor="name" className="modal-label">Name</label>
        <input type="text" id="name" className="modal-input" placeholder="Enter your name" required />

        <label htmlFor="email" className="modal-label">Email</label>
        <input type="email" id="email" className="modal-input" placeholder="Enter your email" required />

        <label htmlFor="password" className="modal-label">Password</label>
        <input type="password" id="password" className="modal-input" placeholder="Enter your password" required />

        <button type="submit" className="modal-button">Sign Up</button>
      </form>
      <button onClick={onClose} className="modal-close">Close</button>
    </div>
  </div>
);

export default Signup;
