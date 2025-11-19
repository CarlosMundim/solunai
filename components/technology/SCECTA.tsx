'use client';

import React from 'react';
import './SCECTA.css';

interface SCECTAProps {
  lang: 'ja' | 'en';
}

const SCECTA: React.FC<SCECTAProps> = ({ lang }) => {
  const content = {
    ja: {
      title: 'SCEで製造業を変革',
      description: '継続性アーキテクチャがどのようにお客様の製造プロセスを改善できるか、ご相談ください。',
      primaryButton: '無料相談を予約',
      secondaryButton: 'ソリューションを見る'
    },
    en: {
      title: 'Transform Manufacturing with SCE',
      description: 'Contact us to discuss how continuity architecture can improve your manufacturing processes.',
      primaryButton: 'Book Free Consultation',
      secondaryButton: 'View Solutions'
    }
  };

  const currentContent = content[lang];

  return (
    <section className="sce-cta-section">
      <div className="sce-cta-container">
        <div className="sce-cta-main">
          <h2 className="sce-cta-title">{currentContent.title}</h2>
          <p className="sce-cta-description">{currentContent.description}</p>
          <div className="sce-cta-buttons">
            <a href="/contact" className="btn-primary">
              {currentContent.primaryButton}
            </a>
            <a href="/solutions" className="btn-secondary">
              {currentContent.secondaryButton}
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SCECTA;
