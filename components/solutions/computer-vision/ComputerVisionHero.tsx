'use client';

import React from 'react';
import SCEBadge from '@/components/SCEBadge';
import './ComputerVisionHero.css';

interface ComputerVisionHeroProps {
  lang: 'ja' | 'en';
}

const ComputerVisionHero: React.FC<ComputerVisionHeroProps> = ({ lang }) => {
  const content = {
    ja: {
      badge: 'コンピュータビジョン',
      heading: 'AI品質検査',
      subheading: '中小製造業のために',
      sceFeature: 'SCE搭載：失敗パターンを記憶し、時間とともに検査精度を向上'
    },
    en: {
      badge: 'COMPUTER VISION',
      heading: 'AI Quality Inspection',
      subheading: 'Built for SME Manufacturers',
      sceFeature: 'Powered by SCE: Remembers failure patterns and improves inspection accuracy over time'
    }
  };

  const t = content[lang];

  return (
    <section className="computer-vision-hero">
      <div className="computer-vision-hero-background"></div>
      <div className="computer-vision-hero-overlay"></div>
      <div className="computer-vision-hero-container">
        <div className="computer-vision-hero-badges">
          <div className="computer-vision-hero-badge">{t.badge}</div>
          <SCEBadge lang={lang} variant="light" />
        </div>
        <h1 className="computer-vision-hero-heading">
          {t.heading}
        </h1>
        <p className="computer-vision-hero-subheading">{t.subheading}</p>
        <p className="computer-vision-hero-sce-feature">{t.sceFeature}</p>
      </div>
    </section>
  );
};

export default ComputerVisionHero;
