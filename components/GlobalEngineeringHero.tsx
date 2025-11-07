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
      heading: 'グローバルエンジニアリング配備',
      subheading: 'WorldEmp パートナーシップ - 世界クラスのエンジニアを2-6週間で'
    },
    en: {
      badge: 'GLOBAL ENGINEERING',
      heading: 'Global Engineering Deployment',
      subheading: 'WorldEmp Partnership - World-Class Engineers in 2-6 Weeks'
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
