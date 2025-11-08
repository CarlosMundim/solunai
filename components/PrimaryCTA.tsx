'use client';

import React from 'react';
import './PrimaryCTA.css';

interface PrimaryCTAProps {
  lang: 'ja' | 'en';
}

const PrimaryCTA: React.FC<PrimaryCTAProps> = ({ lang }) => {
  const content = {
    ja: {
      title: '製造業の未来を\n今日から\n実現',
      subtitle: 'AI専門家との無料相談で、貴社の課題と最適なソリューションを診断します',
      ctaButton: '無料相談を予約',
      features: [
        '45分の戦略相談',
        'ROI分析レポート',
        'カスタム実装プラン',
        '即日回答'
      ]
    },
    en: {
      title: 'Realizing the Future of Manufacturing Today',
      subtitle: 'Free consultation with AI specialists to diagnose your challenges and optimal solutions',
      ctaButton: 'Schedule Free Consultation',
      features: [
        '45-minute Strategy Session',
        'ROI Analysis Report',
        'Custom Implementation Plan',
        'Same-day Response'
      ]
    }
  };

  const currentContent = content[lang];

  return (
    <section className="primary-cta-section" aria-label={lang === 'ja' ? 'お問い合わせ' : 'Contact'}>
      <div className="primary-cta-container">
        <div className="cta-content-grid">
          {/* Left Column - Heading */}
          <div className="cta-heading-column">
            <h2 className="cta-title">
              {currentContent.title.split('\n').map((line, index) => (
                <React.Fragment key={index}>
                  {line}
                  {index < currentContent.title.split('\n').length - 1 && <br />}
                </React.Fragment>
              ))}
            </h2>
          </div>

          {/* Right Column - Content */}
          <div className="cta-details-column">
            <p className="cta-subtitle">{currentContent.subtitle}</p>

            <button className="cta-button">
              {currentContent.ctaButton}
              <svg className="arrow-icon" width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M4 10H16M16 10L11 5M16 10L11 15" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </button>

            <div className="cta-features">
              {currentContent.features.map((feature, index) => (
                <div key={index} className="cta-feature">
                  <span className="cta-feature-check">✓</span>
                  <span>{feature}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PrimaryCTA;
