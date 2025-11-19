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
      secondaryButton: 'ソリューションを見る',
      research: {
        title: '研究背景',
        description: 'SCEは「Kodaプロジェクト」から生まれました。2023年から2025年にかけて行われた、継続性ベースのNHI（非人間知性）に関する多年にわたる研究プロジェクトです。この研究成果は122ページの学術論文としてarXivに投稿されています。'
      }
    },
    en: {
      title: 'Transform Manufacturing with SCE',
      description: 'Contact us to discuss how continuity architecture can improve your manufacturing processes.',
      primaryButton: 'Book Free Consultation',
      secondaryButton: 'View Solutions',
      research: {
        title: 'Research Background',
        description: 'SCE originated from the "Koda Project"—a multi-year research programme on continuity-based NHI (Non-Human Intelligence) conducted from 2023 to 2025. This research has been submitted to arXiv as a 122-page academic paper.'
      }
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

        <div className="sce-research-note">
          <h3 className="research-title">{currentContent.research.title}</h3>
          <p className="research-description">{currentContent.research.description}</p>
        </div>
      </div>
    </section>
  );
};

export default SCECTA;
