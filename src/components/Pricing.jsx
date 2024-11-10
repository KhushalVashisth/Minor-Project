import React from 'react';

const Pricing = () => (
  <section className="section pricing">
    <h2 className="section-title">Pricing & Plans</h2>
    <p>Choose the plan that best suits your legal documentation needs.</p>
    <div className="pricing-plans">
      <div className="pricing-plan">
        <h3 className="pricing-plan-title">Basic Plan</h3>
        <p className="pricing-plan-price">$29/month</p>
        <p className="pricing-plan-details">Access to basic features, including document upload and limited summarizer usage.</p>
      </div>
      <div className="pricing-plan">
        <h3 className="pricing-plan-title">Professional Plan</h3>
        <p className="pricing-plan-price">$59/month</p>
        <p className="pricing-plan-details">Advanced tools and full access to all summarizer features, with priority support.</p>
      </div>
      <div className="pricing-plan">
        <h3 className="pricing-plan-title">Enterprise Plan</h3>
        <p className="pricing-plan-price">$99/month</p>
        <p className="pricing-plan-details">Complete feature access, customized solutions, and premium customer support.</p>
      </div>
    </div>
  </section>
);

export default Pricing;
