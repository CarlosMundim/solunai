'use client';

import React from 'react';
import './AIImplementationCTA.css';

interface AIImplementationCTAProps {
  lang: 'ja' | 'en';
}

const AIImplementationCTA: React.FC<AIImplementationCTAProps> = ({ lang }) => {
  const content = {
    ja: {
      title: 'AI実装を今すぐ開始',
      subtitle: '無料アセスメントで潜在的なROIを発見',
      features: [
        '2-4週間のスプリント配信',
        'ROI保証付き実装',
        '5段階の実証済みプロセス',
        '24/7継続的サポート'
      ],
      primaryCTA: '無料コンサルテーションを予約',
      secondaryCTA: 'AI実装ガイドをダウンロード'
    },
    en: {
      title: 'Start Your AI Implementation Today',
      subtitle: 'Discover Your Potential ROI with a Free Assessment',
      features: [
        '2-4 week sprint delivery',
        'ROI-guaranteed implementation',
        '5-phase proven process',
        '24/7 ongoing support'
      ],
      primaryCTA: 'Schedule Free Consultation',
      secondaryCTA: 'Download AI Implementation Guide'
    }
  };

  const currentContent = content[lang];

  return (
    <section className="ai-implementation-cta">
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

export default AIImplementationCTA;
