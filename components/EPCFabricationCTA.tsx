'use client';

import React from 'react';
import './EPCFabricationCTA.css';

interface EPCFabricationCTAProps {
  lang: 'ja' | 'en';
}

const EPCFabricationCTA: React.FC<EPCFabricationCTAProps> = ({ lang }) => {
  const content = {
    ja: {
      title: 'EPCプロジェクトを今すぐ開始',
      subtitle: '無料コンサルテーションでプロジェクト要件を評価',
      features: [
        'ターンキー配信',
        '予定通り・予算内',
        '品質保証',
        '24/7プロジェクトサポート'
      ],
      primaryCTA: '無料コンサルテーションを予約',
      secondaryCTA: 'EPCサービスガイドをダウンロード'
    },
    en: {
      title: 'Start Your EPC Project Today',
      subtitle: 'Assess Your Project Requirements with a Free Consultation',
      features: [
        'Turnkey delivery',
        'On-time & on-budget',
        'Quality guaranteed',
        '24/7 project support'
      ],
      primaryCTA: 'Schedule Free Consultation',
      secondaryCTA: 'Download EPC Services Guide'
    }
  };

  const currentContent = content[lang];

  return (
    <section className="epc-fabrication-cta">
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

export default EPCFabricationCTA;
