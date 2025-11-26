'use client';

import React from 'react';
import './TrustIndicatorsBar.css';

interface TrustIndicatorsBarProps {
  lang: 'ja' | 'en';
}

const TrustIndicatorsBar: React.FC<TrustIndicatorsBarProps> = ({ lang }) => {
  const content = {
    ja: {
      title: '信頼の証',
      indicators: [
        {
          label: '創業2024年',
          sublabel: '新興企業',
          icon: '🏢'
        },
        {
          label: '製造業経験',
          sublabel: '60年以上',
          icon: '⚙️'
        },
        {
          label: '国際プロジェクト実績',
          sublabel: 'FBM Hudson',
          icon: '🌏'
        },
        {
          label: 'METI準拠',
          sublabel: '経済産業省',
          icon: '✓'
        },
        {
          label: 'ISO 27001対応',
          sublabel: '情報セキュリティ',
          icon: '🔒'
        }
      ]
    },
    en: {
      title: 'Trust Indicators',
      indicators: [
        {
          label: 'Founded',
          sublabel: '2024',
          icon: '🏢'
        },
        {
          label: 'Manufacturing Experience',
          sublabel: '60+ Years',
          icon: '⚙️'
        },
        {
          label: 'International Project Delivery',
          sublabel: 'FBM Hudson',
          icon: '🌏'
        },
        {
          label: 'METI Aligned',
          sublabel: 'Government Standards',
          icon: '✓'
        },
        {
          label: 'ISO 27001 Ready',
          sublabel: 'Security Framework',
          icon: '🔒'
        }
      ]
    }
  };

  const currentContent = content[lang];

  return (
    <section
      className="trust-indicators-section"
      aria-label={lang === 'ja' ? '信頼の証' : 'Trust Indicators'}
    >
      <div className="trust-indicators-container">
        <h3 className="trust-indicators-title">{currentContent.title}</h3>
        <div className="trust-indicators-bar">
          {currentContent.indicators.map((indicator, index) => (
            <React.Fragment key={index}>
              <div
                className="trust-indicator-item"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="indicator-icon" aria-hidden="true">
                  {indicator.icon}
                </div>
                <div className="indicator-content">
                  <span className="indicator-label">{indicator.label}</span>
                  <span className="indicator-sublabel">{indicator.sublabel}</span>
                </div>
              </div>
              {index < currentContent.indicators.length - 1 && (
                <div className="indicator-divider" aria-hidden="true" />
              )}
            </React.Fragment>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TrustIndicatorsBar;
