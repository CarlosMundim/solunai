import React from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import DigitalTwinCTA from '@/components/solutions/digital-twin/DigitalTwinCTA';

export const metadata = {
  title: 'Computer Vision QC - Solunai',
  description: 'Continuously convert siloed, unstructured data from across your manufacturing operations into clean, modeled, and standardized formats. AI-powered automated inspection for quality improvement.',
  keywords: 'Computer Vision, Quality Control, AI Inspection, Deep Learning, Manufacturing',
};

export default function ComputerVisionPage() {
  return (
    <>
      <Header lang="en" />
      <main>
        <section className="digital-twin-hero">
          <div className="digital-twin-hero-container">
            <div className="digital-twin-hero-badge">COMPUTER VISION QC</div>
            <h1 className="digital-twin-hero-heading">
              AI-powered automated inspection<br />
              <span className="digital-twin-hero-heading-highlight">for revolutionary quality</span>
            </h1>
            <p className="digital-twin-hero-description">
              Leverage computer vision and deep learning to automate quality inspection in manufacturing processes. Detect even microscopic defects that human eyes might miss, with real-time feedback and high accuracy.
            </p>
          </div>
        </section>
        <DigitalTwinCTA lang="en" />
      </main>
      <Footer lang="en" />
    </>
  );
}
