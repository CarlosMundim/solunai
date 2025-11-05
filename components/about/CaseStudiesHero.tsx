'use client';

import React from 'react';
import './CaseStudiesHero.css';

interface CaseStudiesHeroProps {
  lang: 'ja' | 'en';
}

const CaseStudiesHero: React.FC<CaseStudiesHeroProps> = ({ lang }) => {
  const content = {
    ja: {
      title: '製造業AIの実証済みの成果',
      subtitle: '日本の製造業におけるAI駆動のデジタル変革',
      description: '測定可能な結果をもたらすAIソリューションを提供しています',
    },
    en: {
      title: 'Proven Results in Manufacturing AI',
      subtitle: 'AI-Driven Digital Transformation in Japanese Manufacturing',
      description: 'Delivering measurable results through AI solutions',
    },
  };

  const text = content[lang];

  return (
    <section className="case-studies-hero">
      <div className="case-studies-hero-background">
        <div className="case-studies-hero-overlay"></div>
        <div className="case-studies-hero-grid"></div>
      </div>

      <div className="case-studies-hero-container">
        <div className="case-studies-hero-content">
          <h1 className="case-studies-hero-title">{text.title}</h1>
          <h2 className="case-studies-hero-subtitle">{text.subtitle}</h2>
          <p className="case-studies-hero-description">{text.description}</p>
        </div>

        <div className="case-studies-hero-stats">
          <div className="stat-box">
            <div className="stat-value">¥207M</div>
            <div className="stat-label">
              {lang === 'ja' ? '総契約価値' : 'Total Contract Value'}
            </div>
          </div>
          <div className="stat-box highlight">
            <div className="stat-value">55%</div>
            <div className="stat-label">
              {lang === 'ja' ? 'ダウンタイム削減' : 'Downtime Reduction'}
            </div>
          </div>
          <div className="stat-box highlight">
            <div className="stat-value">40%</div>
            <div className="stat-label">
              {lang === 'ja' ? '不良品削減' : 'Defect Reduction'}
            </div>
          </div>
          <div className="stat-box">
            <div className="stat-value">70%</div>
            <div className="stat-label">
              {lang === 'ja' ? '人材マッチング高速化' : 'Faster Talent Matching'}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CaseStudiesHero;
