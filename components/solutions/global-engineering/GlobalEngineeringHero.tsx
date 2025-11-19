'use client';

import React from 'react';
import './GlobalEngineeringHero.css';

interface GlobalEngineeringHeroProps {
  lang: 'ja' | 'en';
}

const GlobalEngineeringHero: React.FC<GlobalEngineeringHeroProps> = ({ lang }) => {
  const content = {
    ja: {
      badge: 'SOLUNAI + WORLDEMP',
      heading: 'グローバル人材、文化的マッチング保証',
      subheading: '20年以上の実績を持つWorldEmpの採用力 + Solunaiの47次元文化評価',
      stats: [
        { value: '20+', label: '年の実績' },
        { value: '2-6', label: '週で配備' },
        { value: '300+', label: 'クライアント' }
      ]
    },
    en: {
      badge: 'SOLUNAI + WORLDEMP',
      heading: 'Global Talent, Cultural Fit Guaranteed',
      subheading: 'WorldEmp\'s 20+ years recruitment expertise + Solunai\'s 47 Dimensions cultural assessment',
      stats: [
        { value: '20+', label: 'Years Experience' },
        { value: '2-6', label: 'Weeks to Deploy' },
        { value: '300+', label: 'Clients Worldwide' }
      ]
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
        <div className="global-engineering-hero-stats">
          {t.stats.map((stat, index) => (
            <div key={index} className="hero-stat">
              <div className="hero-stat-value">{stat.value}</div>
              <div className="hero-stat-label">{stat.label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default GlobalEngineeringHero;
