'use client';

import React from 'react';
import './CaseStudyHero.css';

interface CaseStudyHeroProps {
  lang: 'ja' | 'en';
}

const CaseStudyHero: React.FC<CaseStudyHeroProps> = ({ lang }) => {
  const content = {
    ja: {
      heading: '導入事例',
      subheading: 'グローバル製造業のデジタル変革実績',
      description: 'Solunaiは世界クラスの製造企業に、実証済みのAIソリューションとグローバルエンジニアリングサービスを提供しています。',
      metrics: [
        { label: '大規模プロジェクト実行能力', value: '€2.5M-€3.8M' },
        { label: '投資回収期間', value: '4-7ヶ月' },
        { label: 'ROI', value: '178-295% IRR' }
      ]
    },
    en: {
      heading: 'Success Stories',
      subheading: 'Global Manufacturing Digital Transformation Track Record',
      description: 'Solunai delivers proven AI solutions and global engineering services to world-class manufacturing companies.',
      metrics: [
        { label: 'Large-scale project execution', value: '€2.5M-€3.8M' },
        { label: 'Payback period', value: '4-7 months' },
        { label: 'ROI', value: '178-295% IRR' }
      ]
    }
  };

  const currentContent = content[lang];

  return (
    <section className="case-study-hero">
      <div className="case-study-hero-container">
        <div className="case-study-hero-content">
          <h1 className="case-study-hero-heading">{currentContent.heading}</h1>
          <h2 className="case-study-hero-subheading">{currentContent.subheading}</h2>
          <p className="case-study-hero-description">{currentContent.description}</p>

          <div className="case-study-hero-metrics">
            {currentContent.metrics.map((metric, index) => (
              <div key={index} className="metric-card">
                <div className="metric-value">{metric.value}</div>
                <div className="metric-label">{metric.label}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default CaseStudyHero;
