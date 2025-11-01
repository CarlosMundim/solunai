'use client';

import React from 'react';
import './PrimaryCTA.css';

interface PrimaryCTAProps {
  lang: 'ja' | 'en';
}

const PrimaryCTA: React.FC<PrimaryCTAProps> = ({ lang }) => {
  const content = {
    ja: {
      title: '製造業の未来を\n今日から実現',
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
      title: 'Realize the Future of\nManufacturing Today',
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
        <h2 className="cta-title">
          {currentContent.title.split('\n').map((line, i) => (
            <React.Fragment key={i}>
              {line}
              {i < currentContent.title.split('\n').length - 1 && <br />}
            </React.Fragment>
          ))}
        </h2>
        <p className="cta-subtitle">{currentContent.subtitle}</p>

        <button className="cta-button">
          {currentContent.ctaButton}
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
    </section>
  );
};

export default PrimaryCTA;
