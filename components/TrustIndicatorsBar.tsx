'use client';

import React from 'react';
import './TrustIndicatorsBar.css';

interface TrustIndicatorsBarProps {
  lang: 'ja' | 'en';
}

const TrustIndicatorsBar: React.FC<TrustIndicatorsBarProps> = ({ lang }) => {
  const content = {
    ja: {
      indicators: [
        {
          number: '60+',
          label: '年の製造業経験',
          sublabel: 'Combined Experience'
        },
        {
          number: '01',
          label: '国際プロジェクト実績',
          sublabel: 'FBM Hudson Italiana'
        },
        {
          number: 'METI',
          label: '経済産業省準拠',
          sublabel: 'Connected Industries'
        },
        {
          number: 'ISO',
          label: 'ISO 27001対応',
          sublabel: 'Security Framework'
        }
      ]
    },
    en: {
      indicators: [
        {
          number: '60+',
          label: 'Years Manufacturing Experience',
          sublabel: 'Combined Expertise'
        },
        {
          number: '01',
          label: 'International Project Delivered',
          sublabel: 'FBM Hudson Italiana'
        },
        {
          number: 'METI',
          label: 'Government Aligned',
          sublabel: 'Connected Industries'
        },
        {
          number: 'ISO',
          label: 'ISO 27001 Ready',
          sublabel: 'Security Framework'
        }
      ]
    }
  };

  const currentContent = content[lang];

  return (
    <section className="trust-indicators-section">
      <div className="trust-indicators-container">
        <div className="trust-indicators-grid">
          {currentContent.indicators.map((indicator, index) => (
            <div
              key={index}
              className="trust-indicator-card"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="indicator-number">{indicator.number}</div>
              <div className="indicator-text">
                <span className="indicator-label">{indicator.label}</span>
                <span className="indicator-sublabel">{indicator.sublabel}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TrustIndicatorsBar;
