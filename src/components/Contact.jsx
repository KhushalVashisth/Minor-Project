import React from 'react';

const Contact = () => (
  <section className="section contact">
    <h2 className="section-title">Contact & Support</h2>
    <p>If you need help, reach out to us anytime. We’re here to assist you!</p>
    
    <div className="contact-info">
      <div className="contact-item">
        <i className="fas fa-envelope"></i> {/* Email Icon */}
        <p>Email: <a href="mailto:support@legalplatform.com">support@legalplatform.com</a></p>
      </div>
      
      <div className="contact-item">
        <i className="fas fa-phone-alt"></i> {/* Phone Icon */}
        <p>Phone: <a href="tel:+12345678900">+1-234-567-8900</a></p>
      </div>
      
      <div className="contact-item">
        <i className="fas fa-map-marker-alt"></i> {/* Address Icon */}
        <p>Address: 123 Legal St., City, Country</p>
      </div>
    </div>
  </section>
);

export default Contact;

