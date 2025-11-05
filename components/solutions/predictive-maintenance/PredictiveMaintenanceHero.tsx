'use client';

import React from 'react';
import './PredictiveMaintenanceHero.css';

interface PredictiveMaintenanceHeroProps {
  lang: 'ja' | 'en';
}

const PredictiveMaintenanceHero: React.FC<PredictiveMaintenanceHeroProps> = ({ lang }) => {
  const content = {
    ja: {
      badge: '予知保全',
      heading: 'AI予知保全',
      subheading: '中小製造業のために'
    },
    en: {
      badge: 'PREDICTIVE MAINTENANCE',
      heading: 'AI Predictive Maintenance',
      subheading: 'Built for SME Manufacturers'
    }
  };

  const t = content[lang];

  return (
    <section className="predictive-maintenance-hero">
      <div className="predictive-maintenance-hero-background"></div>
      <div className="predictive-maintenance-hero-overlay"></div>
      <div className="predictive-maintenance-hero-container">
        <div className="predictive-maintenance-hero-badge">{t.badge}</div>
        <h1 className="predictive-maintenance-hero-heading">
          {t.heading}
        </h1>
        <p className="predictive-maintenance-hero-subheading">{t.subheading}</p>
      </div>
    </section>
  );
};

export default PredictiveMaintenanceHero;
