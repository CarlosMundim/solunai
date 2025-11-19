'use client';

import React from 'react';
import './AssessmentHero.css';

const AssessmentHero: React.FC = () => {
  return (
    <section className="assessment-hero">
      <div className="assessment-hero-container">
        <div className="assessment-hero-badge">SOLUNAI CONTINUITY ENGINE</div>
        <h1 className="assessment-hero-title">
          47 Dimensions Cultural Assessment
        </h1>
        <p className="assessment-hero-subtitle">
          AI-powered cultural compatibility analysis for Japanese workplace success
        </p>
        <div className="assessment-hero-features">
          <div className="hero-feature">
            <span className="feature-number">15</span>
            <span className="feature-label">Core Dimensions</span>
          </div>
          <div className="hero-feature">
            <span className="feature-number">5</span>
            <span className="feature-label">Minutes</span>
          </div>
          <div className="hero-feature">
            <span className="feature-number">SCE</span>
            <span className="feature-label">Powered</span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AssessmentHero;
