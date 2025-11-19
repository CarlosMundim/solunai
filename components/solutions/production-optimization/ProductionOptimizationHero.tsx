'use client';

import React from 'react';
import SCEBadge from '@/components/SCEBadge';
import './ProductionOptimizationHero.css';

interface ProductionOptimizationHeroProps {
  lang: 'ja' | 'en';
}

const ProductionOptimizationHero: React.FC<ProductionOptimizationHeroProps> = ({ lang }) => {
  const content = {
    ja: {
      badge: '生産最適化',
      heading: 'AI生産最適化',
      subheading: '中小製造業のスループット向上と無駄削減',
      sceFeature: 'SCE搭載：長期的な生産データと季節変動を活用した最適化'
    },
    en: {
      badge: 'PRODUCTION OPTIMIZATION',
      heading: 'AI Production Optimization',
      subheading: 'Increase Throughput and Reduce Waste for SME Manufacturers',
      sceFeature: 'Powered by SCE: Optimization leveraging long-term production data and seasonal variations'
    }
  };

  const t = content[lang];

  return (
    <section className="production-optimization-hero">
      <div className="production-optimization-hero-background"></div>
      <div className="production-optimization-hero-overlay"></div>
      <div className="production-optimization-hero-container">
        <div className="production-optimization-hero-badges">
          <div className="production-optimization-hero-badge">{t.badge}</div>
          <SCEBadge lang={lang} variant="light" />
        </div>
        <h1 className="production-optimization-hero-heading">
          {t.heading}
        </h1>
        <p className="production-optimization-hero-subheading">{t.subheading}</p>
        <p className="production-optimization-hero-sce-feature">{t.sceFeature}</p>
      </div>
    </section>
  );
};

export default ProductionOptimizationHero;
