import React from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import DigitalTwinCTA from '@/components/solutions/digital-twin/DigitalTwinCTA';

export const metadata = {
  title: 'Production Optimization - Solunai',
  description: 'Put AI in the loop with operators - guiding real-time decisions with easy to read graphics and actionable alerts.',
  keywords: 'Production Optimization, Real-time Analytics, Operational Excellence, Manufacturing Efficiency',
};

export default function ProductionOptimizationPage() {
  return (
    <>
      <Header lang="en" />
      <main>
        <section className="digital-twin-hero">
          <div className="digital-twin-hero-container">
            <div className="digital-twin-hero-badge">PRODUCTION OPTIMIZATION</div>
            <h1 className="digital-twin-hero-heading">
              Maximize productivity<br />
              <span className="digital-twin-hero-heading-highlight">with real-time data</span>
            </h1>
            <p className="digital-twin-hero-description">
              AI supports operator decision-making in real-time. Transform complex factory data into easy-to-read dashboards and provide actionable alerts. Achieve both improved production efficiency and cost reduction simultaneously.
            </p>
          </div>
        </section>
        <DigitalTwinCTA lang="en" />
      </main>
      <Footer lang="en" />
    </>
  );
}
