import React from 'react';

const Services = () => (
  <section className="section services">
    <h2 className="section-title">Additional Services</h2>
    <ul className="services-list">
      <li className="service-item">
        <div className="service-icon">🖋️</div>
        <h3 className="service-title">Notary Services</h3>
        <p className="service-text">
          Digital notary services for streamlined document verification without physical appointments.
        </p>
      </li>
      <li className="service-item">
        <div className="service-icon">🌐</div>
        <h3 className="service-title">Virtual Mediation</h3>
        <p className="service-text">
          Online mediation sessions facilitated by certified mediators for effective dispute resolution.
        </p>
      </li>
      <li className="service-item">
        <div className="service-icon">📝</div>
        <h3 className="service-title">Document Translation</h3>
        <p className="service-text">
          Translates documents into the court’s official language, ensuring smooth legal proceedings.
        </p>
      </li>
    </ul>
  </section>
);

export default Services;
