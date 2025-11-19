'use client';

import React from 'react';
import './AssessmentHero.css';

const AssessmentHeroJA: React.FC = () => {
  return (
    <section className="assessment-hero">
      <div className="assessment-hero-container">
        <div className="assessment-hero-badge">SOLUNAI継続エンジン</div>
        <h1 className="assessment-hero-title">
          47次元 文化適合性評価
        </h1>
        <p className="assessment-hero-subtitle">
          日本の職場で成功するためのAI駆動文化適合性分析
        </p>
        <div className="assessment-hero-features">
          <div className="hero-feature">
            <span className="feature-number">15</span>
            <span className="feature-label">コア次元</span>
          </div>
          <div className="hero-feature">
            <span className="feature-number">5</span>
            <span className="feature-label">分</span>
          </div>
          <div className="hero-feature">
            <span className="feature-number">SCE</span>
            <span className="feature-label">搭載</span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AssessmentHeroJA;
