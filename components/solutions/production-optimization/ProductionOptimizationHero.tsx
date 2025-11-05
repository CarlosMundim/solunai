'use client';

import React from 'react';
import './ProductionOptimizationHero.css';

interface ProductionOptimizationHeroProps {
  lang: 'ja' | 'en';
}

const ProductionOptimizationHero: React.FC<ProductionOptimizationHeroProps> = ({ lang }) => {
  const content = {
    ja: {
      badge: '生産最適化',
      heading: 'AI生産最適化',
      subheading: '中小製造業のスループット向上と無駄削減'
    },
    en: {
      badge: 'PRODUCTION OPTIMIZATION',
      heading: 'AI Production Optimization',
      subheading: 'Increase Throughput and Reduce Waste for SME Manufacturers'
    }
  };

  const t = content[lang];

  return (
    <section className="production-optimization-hero">
      <div className="production-optimization-hero-background"></div>
      <div className="production-optimization-hero-overlay"></div>
      <div className="production-optimization-hero-container">
        <div className="production-optimization-hero-badge">{t.badge}</div>
        <h1 className="production-optimization-hero-heading">
          {t.heading}
        </h1>
        <p className="production-optimization-hero-subheading">{t.subheading}</p>
      </div>
    </section>
  );
};

export default ProductionOptimizationHero;
