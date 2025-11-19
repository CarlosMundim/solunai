'use client';

import React from 'react';
import './GlobalEngineeringCTA.css';

interface GlobalEngineeringCTAProps {
  lang: 'ja' | 'en';
}

const GlobalEngineeringCTA: React.FC<GlobalEngineeringCTAProps> = ({ lang }) => {
  const content = {
    ja: {
      title: 'Solunai + WorldEmpで始める',
      subtitle: '文化的マッチングが保証されたグローバル人材配備',
      features: [
        '20年以上の実績',
        '2-6週間で配備',
        '47次元文化評価',
        '300+クライアント'
      ],
      primaryCTA: '無料相談を予約',
      secondaryCTA: 'WorldEmpについて詳しく'
    },
    en: {
      title: 'Get Started with Solunai + WorldEmp',
      subtitle: 'Global talent deployment with guaranteed cultural fit',
      features: [
        '20+ years experience',
        '2-6 week deployment',
        '47 Dimensions assessment',
        '300+ clients worldwide'
      ],
      primaryCTA: 'Schedule Free Consultation',
      secondaryCTA: 'Learn More About WorldEmp'
    }
  };

  const currentContent = content[lang];

  return (
    <section className="global-engineering-cta">
      <div className="cta-background">
        <div className="cta-overlay"></div>
        <div className="cta-grid-pattern"></div>
      </div>

      <div className="cta-content">
        <h2 className="cta-title">{currentContent.title}</h2>
        <p className="cta-subtitle">{currentContent.subtitle}</p>

        <div className="cta-features">
          {currentContent.features.map((feature, index) => (
            <div key={index} className="cta-feature">
              <svg className="feature-icon" viewBox="0 0 20 20" fill="currentColor">
                <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
              </svg>
              <span>{feature}</span>
            </div>
          ))}
        </div>

        <div className="cta-buttons">
          <button className="cta-button primary">
            {currentContent.primaryCTA}
          </button>
          <button className="cta-button secondary">
            {currentContent.secondaryCTA}
          </button>
        </div>
      </div>
    </section>
  );
};

export default GlobalEngineeringCTA;
