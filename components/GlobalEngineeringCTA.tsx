'use client';

import React from 'react';
import './GlobalEngineeringCTA.css';

interface GlobalEngineeringCTAProps {
  lang: 'ja' | 'en';
}

const GlobalEngineeringCTA: React.FC<GlobalEngineeringCTAProps> = ({ lang }) => {
  const content = {
    ja: {
      title: 'グローバルエンジニアリング配備を今すぐ開始',
      subtitle: '無料コンサルテーションで人材ニーズを評価',
      features: [
        '2-6週間で配備',
        '30-40%コスト削減',
        '52倍速い採用',
        '文化的マッチング保証'
      ],
      primaryCTA: '無料コンサルテーションを予約',
      secondaryCTA: '人材配備ガイドをダウンロード'
    },
    en: {
      title: 'Start Global Engineering Deployment Today',
      subtitle: 'Assess Your Talent Needs with a Free Consultation',
      features: [
        '2-6 week deployment',
        '30-40% cost reduction',
        '52x faster hiring',
        'Cultural matching guaranteed'
      ],
      primaryCTA: 'Schedule Free Consultation',
      secondaryCTA: 'Download Talent Deployment Guide'
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
