'use client';

import React from 'react';
import './DigitalTwinHero.css';

interface DigitalTwinHeroProps {
  lang: 'ja' | 'en';
}

const DigitalTwinHero: React.FC<DigitalTwinHeroProps> = ({ lang }) => {
  const content = {
    ja: {
      badge: 'デジタルツイン',
      heading: 'デジタルツイン統合プラットフォーム',
      subheading: '日本の製造業のために'
    },
    en: {
      badge: 'DIGITAL TWIN',
      heading: 'Digital Twin Integration Platform',
      subheading: 'For Japanese Manufacturing Businesses'
    }
  };

  const t = content[lang];

  return (
    <section className="digital-twin-hero">
      <div className="digital-twin-hero-background"></div>
      <div className="digital-twin-hero-overlay"></div>
      <div className="digital-twin-hero-container">
        <div className="digital-twin-hero-badge">{t.badge}</div>
        <h1 className="digital-twin-hero-heading">
          {t.heading}
        </h1>
        <p className="digital-twin-hero-subheading">{t.subheading}</p>
      </div>
    </section>
  );
};

export default DigitalTwinHero;
