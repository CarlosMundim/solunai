'use client';

import React from 'react';
import './SCEResearchBanner.css';

interface SCEResearchBannerProps {
  lang: 'ja' | 'en';
}

const SCEResearchBanner: React.FC<SCEResearchBannerProps> = ({ lang }) => {
  const content = {
    ja: {
      title: '研究背景',
      description1: 'SCEは「Kodaプロジェクト」から生まれました。2023年から2025年にかけて行われた、継続性ベースのNHI（非人間知性）に関する多年にわたる研究プロジェクトです。',
      description2: 'この研究成果は122ページの学術論文としてarXivに投稿されています。'
    },
    en: {
      title: 'Research Background',
      description1: 'SCE originated from the "Koda Project"—a multi-year research programme on continuity-based NHI (Non-Human Intelligence) conducted from 2023 to 2025.',
      description2: 'This research has been submitted to arXiv as a 122-page academic paper.'
    }
  };

  const currentContent = content[lang];

  return (
    <div className="sce-research-banner">
      <div className="sce-research-banner-container">
        <span className="research-banner-title">{currentContent.title}:</span>
        <span className="research-banner-description">
          {currentContent.description1}<br />
          {currentContent.description2}
        </span>
      </div>
    </div>
  );
};

export default SCEResearchBanner;
