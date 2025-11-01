'use client';

import React from 'react';
import './SolutionsHero.css';

interface SolutionsHeroProps {
  lang: 'ja' | 'en';
}

const SolutionsHero: React.FC<SolutionsHeroProps> = ({ lang }) => {
  const content = {
    ja: {
      title: '製造業DXソリューション',
      subtitle: 'AIと自動化で日本の製造業を変革',
      stats: [
        { label: '実証済みソリューション', value: '4' },
        { label: '投資回収期間', value: '3-12ヶ月' },
        { label: 'コスト削減', value: '30-50%' },
        { label: '品質改善', value: '95%' }
      ]
    },
    en: {
      title: 'Manufacturing DX Solutions',
      subtitle: 'Transforming Japanese Manufacturing with AI and Automation',
      stats: [
        { label: 'Proven Solutions', value: '4' },
        { label: 'Payback Period', value: '3-12 months' },
        { label: 'Cost Reduction', value: '30-50%' },
        { label: 'Quality Improvement', value: '95%' }
      ]
    }
  };

  const currentContent = content[lang];

  return (
    <section className="solutions-hero">
      <div className="hero-background">
        <div className="hero-overlay"></div>
      </div>

      <div className="hero-content">
        <h1 className="hero-title">{currentContent.title}</h1>
        <p className="hero-subtitle">{currentContent.subtitle}</p>

        <div className="hero-stats">
          {currentContent.stats.map((stat, index) => (
            <div key={index} className="stat-item">
              <div className="stat-value">{stat.value}</div>
              <div className="stat-label">{stat.label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SolutionsHero;
