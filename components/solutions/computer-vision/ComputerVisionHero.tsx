'use client';

import React from 'react';
import './ComputerVisionHero.css';

interface ComputerVisionHeroProps {
  lang: 'ja' | 'en';
}

const ComputerVisionHero: React.FC<ComputerVisionHeroProps> = ({ lang }) => {
  const content = {
    ja: {
      badge: 'コンピュータビジョン',
      heading: 'AI品質検査',
      subheading: '中小製造業のために'
    },
    en: {
      badge: 'COMPUTER VISION',
      heading: 'AI Quality Inspection',
      subheading: 'Built for SME Manufacturers'
    }
  };

  const t = content[lang];

  return (
    <section className="computer-vision-hero">
      <div className="computer-vision-hero-background"></div>
      <div className="computer-vision-hero-overlay"></div>
      <div className="computer-vision-hero-container">
        <div className="computer-vision-hero-badge">{t.badge}</div>
        <h1 className="computer-vision-hero-heading">
          {t.heading}
        </h1>
        <p className="computer-vision-hero-subheading">{t.subheading}</p>
      </div>
    </section>
  );
};

export default ComputerVisionHero;
