'use client';

import React from 'react';
import SCEBadge from '@/components/SCEBadge';
import './PredictiveMaintenanceHero.css';

interface PredictiveMaintenanceHeroProps {
  lang: 'ja' | 'en';
}

const PredictiveMaintenanceHero: React.FC<PredictiveMaintenanceHeroProps> = ({ lang }) => {
  const content = {
    ja: {
      badge: '予知保全',
      heading: 'AI予知保全',
      subheading: '中小製造業のために',
      sceFeature: 'SCE搭載：機器履歴の完全な継続性で予測精度を向上'
    },
    en: {
      badge: 'PREDICTIVE MAINTENANCE',
      heading: 'AI Predictive Maintenance',
      subheading: 'Built for SME Manufacturers',
      sceFeature: 'Powered by SCE: Complete equipment history continuity for improved prediction accuracy'
    }
  };

  const t = content[lang];

  return (
    <section className="predictive-maintenance-hero">
      <div className="predictive-maintenance-hero-background"></div>
      <div className="predictive-maintenance-hero-overlay"></div>
      <div className="predictive-maintenance-hero-container">
        <div className="predictive-maintenance-hero-badges">
          <div className="predictive-maintenance-hero-badge">{t.badge}</div>
          <SCEBadge lang={lang} variant="light" />
        </div>
        <h1 className="predictive-maintenance-hero-heading">
          {t.heading}
        </h1>
        <p className="predictive-maintenance-hero-subheading">{t.subheading}</p>
        <p className="predictive-maintenance-hero-sce-feature">{t.sceFeature}</p>
      </div>
    </section>
  );
};

export default PredictiveMaintenanceHero;
