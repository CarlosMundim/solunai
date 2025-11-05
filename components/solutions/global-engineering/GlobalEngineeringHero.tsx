'use client';

import React from 'react';
import './GlobalEngineeringHero.css';

interface GlobalEngineeringHeroProps {
  lang: 'ja' | 'en';
}

const GlobalEngineeringHero: React.FC<GlobalEngineeringHeroProps> = ({ lang }) => {
  const content = {
    ja: {
      badge: 'グローバルエンジニアリング',
      heading: '世界中の優秀な技術者と',
      subheading: '日本の製造業のコストと品質を両立'
    },
    en: {
      badge: 'GLOBAL ENGINEERING',
      heading: 'Access World-Class Engineering Talent',
      subheading: 'Cost Optimization Without Compromising Quality'
    }
  };

  const t = content[lang];

  return (
    <section className="global-engineering-hero">
      <div className="global-engineering-hero-background"></div>
      <div className="global-engineering-hero-overlay"></div>
      <div className="global-engineering-hero-container">
        <div className="global-engineering-hero-badge">{t.badge}</div>
        <h1 className="global-engineering-hero-heading">
          {t.heading}
        </h1>
        <p className="global-engineering-hero-subheading">{t.subheading}</p>
      </div>
    </section>
  );
};

export default GlobalEngineeringHero;
