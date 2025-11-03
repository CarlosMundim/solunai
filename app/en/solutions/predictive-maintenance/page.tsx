import React from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import DigitalTwinCTA from '@/components/solutions/digital-twin/DigitalTwinCTA';

export const metadata = {
  title: 'Predictive Maintenance - Solunai',
  description: 'Optimize every aspect of plant performance - uptime, throughput, quality, energy, materials usage, scheduling, and more. AI-powered insights predict equipment failures.',
  keywords: 'Predictive Maintenance, AI, Machine Learning, Equipment Monitoring, Downtime Reduction',
};

export default function PredictiveMaintenancePage() {
  return (
    <>
      <Header lang="en" />
      <main>
        <section className="digital-twin-hero">
          <div className="digital-twin-hero-container">
            <div className="digital-twin-hero-badge">PREDICTIVE MAINTENANCE</div>
            <h1 className="digital-twin-hero-heading">
              Predict equipment failures<br />
              <span className="digital-twin-hero-heading-highlight">and reduce downtime with AI</span>
            </h1>
            <p className="digital-twin-hero-description">
              Using machine learning algorithms, monitor equipment status in real-time and detect early signs of failure. Predictive maintenance reduces unplanned downtime by up to 80% and significantly lowers maintenance costs.
            </p>
          </div>
        </section>
        <DigitalTwinCTA lang="en" />
      </main>
      <Footer lang="en" />
    </>
  );
}
