import React from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import DigitalTwinCTA from '@/components/solutions/digital-twin/DigitalTwinCTA';

export const metadata = {
  title: 'Global Engineering - Solunai',
  description: 'Create AI-powered applications from a single prompt. Enlist agents that speak both manufacturing and data science to rapidly build custom solutions tailored to your business needs.',
  keywords: 'AI Agents, Custom Development, Manufacturing Software, Data Science, Rapid Development',
};

export default function GlobalEngineeringPage() {
  return (
    <>
      <Header lang="en" />
      <main>
        <section className="digital-twin-hero">
          <div className="digital-twin-hero-container">
            <div className="digital-twin-hero-badge">GLOBAL ENGINEERING</div>
            <h1 className="digital-twin-hero-heading">
              Rapid development<br />
              <span className="digital-twin-hero-heading-highlight">of custom solutions with AI agents</span>
            </h1>
            <p className="digital-twin-hero-description">
              AI agents that understand both manufacturing and data science propose and build solutions optimized for your business. Develop custom applications in weeks from a single prompt.
            </p>
          </div>
        </section>
        <DigitalTwinCTA lang="en" />
      </main>
      <Footer lang="en" />
    </>
  );
}
