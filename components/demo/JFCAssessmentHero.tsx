'use client';

import React from 'react';
import './AssessmentHero.css';

interface JFCAssessmentHeroProps {
  lang?: 'en' | 'ja';
}

const JFCAssessmentHero: React.FC<JFCAssessmentHeroProps> = ({ lang = 'en' }) => {
  const content = {
    en: {
      badge: 'SOLUNAI CONTINUITY ENGINE',
      title: 'Japanese Fit Coefficient (JFC)',
      subtitle: '14-Scenario Situational Judgment Assessment for Japanese Workplace Success',
      features: [
        { number: '14', label: 'Scenarios' },
        { number: '5', label: 'Dimensions' },
        { number: 'SJT', label: 'Methodology' }
      ]
    },
    ja: {
      badge: 'SOLUNAI継続エンジン',
      title: '日本適合係数 (JFC)',
      subtitle: '日本の職場で成功するための14シナリオ状況判断評価',
      features: [
        { number: '14', label: 'シナリオ' },
        { number: '5', label: '次元' },
        { number: 'SJT', label: '方法論' }
      ]
    }
  };

  const c = content[lang];

  return (
    <section className="assessment-hero">
      <div className="assessment-hero-container">
        <div className="assessment-hero-badge">{c.badge}</div>
        <h1 className="assessment-hero-title">{c.title}</h1>
        <p className="assessment-hero-subtitle">{c.subtitle}</p>
        <div className="assessment-hero-features">
          {c.features.map((feature, i) => (
            <div key={i} className="hero-feature">
              <span className="feature-number">{feature.number}</span>
              <span className="feature-label">{feature.label}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default JFCAssessmentHero;
