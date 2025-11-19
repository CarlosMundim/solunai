'use client';

import React from 'react';
import SCEBadge from '@/components/SCEBadge';
import './DigitalTwinHero.css';

interface DigitalTwinHeroProps {
  lang: 'ja' | 'en';
}

const DigitalTwinHero: React.FC<DigitalTwinHeroProps> = ({ lang }) => {
  const content = {
    ja: {
      badge: 'デジタルツイン',
      heading: 'デジタルツイン統合プラットフォーム',
      subheading: '日本の製造業のために',
      sceFeature: 'SCE搭載：セッション間でパラメータと最適化結果を継続的に記憶・学習'
    },
    en: {
      badge: 'DIGITAL TWIN',
      heading: 'Digital Twin Integration Platform',
      subheading: 'For Japanese Manufacturing Businesses',
      sceFeature: 'Powered by SCE: Continuously remembers and learns parameters and optimization results across sessions'
    }
  };

  const t = content[lang];

  return (
    <section className="digital-twin-hero">
      <div className="digital-twin-hero-background"></div>
      <div className="digital-twin-hero-overlay"></div>
      <div className="digital-twin-hero-container">
        <div className="digital-twin-hero-badges">
          <div className="digital-twin-hero-badge">{t.badge}</div>
          <SCEBadge lang={lang} variant="light" />
        </div>
        <h1 className="digital-twin-hero-heading">
          {t.heading}
        </h1>
        <p className="digital-twin-hero-subheading">{t.subheading}</p>
        <p className="digital-twin-hero-sce-feature">{t.sceFeature}</p>
      </div>
    </section>
  );
};

export default DigitalTwinHero;
