import React from 'react';

const Features = () => (
  <section className="section features">
    <h2 className="section-title">Features</h2>
    <ul className="features-list">
      <li className="feature-item">
        <div className="feature-icon">🔍</div>
        <h3 className="feature-title">ML Verification</h3>
        <p className="feature-text">
          Ensure secure verification of legal personnel through machine learning for ID validation.
        </p>
      </li>
      <li className="feature-item">
        <div className="feature-icon">💼</div>
        <h3 className="feature-title">AI-Powered Petitions</h3>
        <p className="feature-text">
          AI-generated petitions reviewed by lawyers to enhance chances of success.
        </p>
      </li>
      <li className="feature-item">
        <div className="feature-icon">⚖️</div>
        <h3 className="feature-title">Credit-Based Summarizer</h3>
        <p className="feature-text">
          Summarizes court verdicts concisely, ensuring transparency for all stakeholders.
        </p>
      </li>
      <li className="feature-item">
        <div className="feature-icon">🔒</div>
        <h3 className="feature-title">Role-Based Access</h3>
        <p className="feature-text">
          Provides secure access control for clients, lawyers, and judges based on their roles.
        </p>
      </li>
    </ul>
  </section>
);

export default Features;
