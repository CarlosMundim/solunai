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
          label: '製造業の専門知識',
          title: '60年以上の製造業経験',
          subtitle: '創業者の製造業における豊富な経験'
        },
        {
          label: '政府準拠',
          title: 'METI準拠',
          subtitle: '経済産業省Connected Industries'
        },
        {
          label: 'セキュリティ基準',
          title: 'ISO 27001対応',
          subtitle: '国際セキュリティ基準に準拠'
        }
      ]
    },
    en: {
      indicators: [
        {
          label: 'MANUFACTURING EXPERTISE',
          title: 'Over 60 years of experience',
          subtitle: "Based on the founder's manufacturing experience"
        },
        {
          label: 'GOVERNMENT ALIGNED',
          title: 'METI Compliant',
          subtitle: 'Connected Industries framework'
        },
        {
          label: 'SECURITY FRAMEWORK',
          title: 'ISO 27001 Ready',
          subtitle: 'International security standards'
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
            <div key={index} className="trust-indicator-card">
              <span className="indicator-label">{indicator.label}</span>
              <h3 className="indicator-title">{indicator.title}</h3>
              <p className="indicator-subtitle">{indicator.subtitle}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TrustIndicatorsBar;
