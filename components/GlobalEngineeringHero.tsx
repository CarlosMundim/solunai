'use client';

import React from 'react';
import './GlobalEngineeringHero.css';

interface GlobalEngineeringHeroProps {
  lang: 'ja' | 'en';
}

const GlobalEngineeringHero: React.FC<GlobalEngineeringHeroProps> = ({ lang }) => {
  const content = {
    ja: {
      mainTitle: 'グローバルエンジニアリング配備',
      subtitle: 'WorldEmpパートナーシップ - 2-6週間で世界クラスのエンジニア',
      points: [
        '採用できないスキルへの即座のアクセス',
        '従来の採用より52倍速い',
        '30-40%のコスト削減',
        '文化的マッチングと日本語サポート'
      ],
      stats: [
        { value: '2-6週間', label: '配備時間' },
        { value: '52倍', label: '従来比スピード' },
        { value: '30-40%', label: 'コスト削減' },
        { value: '5つ', label: '専門カテゴリー' }
      ]
    },
    en: {
      mainTitle: 'Global Engineering Deployment',
      subtitle: 'WorldEmp Partnership - World-Class Engineers in 2-6 Weeks',
      points: [
        'Immediate access to skills you cannot hire',
        '52x faster than traditional hiring',
        '30-40% cost reduction',
        'Cultural matching & Japanese language support'
      ],
      stats: [
        { value: '2-6 Weeks', label: 'Deployment Time' },
        { value: '52x', label: 'Faster Than Traditional' },
        { value: '30-40%', label: 'Cost Reduction' },
        { value: '5', label: 'Specialty Categories' }
      ]
    }
  };

  const currentContent = content[lang];

  return (
    <section className="global-engineering-hero">
      <div className="hero-background">
        <div className="hero-overlay"></div>
        <div className="hero-grid-pattern"></div>
      </div>

      <div className="hero-content">
        <div className="hero-main">
          <h1 className="hero-title">
            {currentContent.mainTitle}
          </h1>
          <p className="hero-subtitle">{currentContent.subtitle}</p>

          <div className="hero-points">
            {currentContent.points.map((point, index) => (
              <div key={index} className="hero-point">
                <div className="point-icon">
                  <svg viewBox="0 0 20 20" fill="currentColor">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                </div>
                <span>{point}</span>
              </div>
            ))}
          </div>
        </div>

        <div className="hero-stats">
          {currentContent.stats.map((stat, index) => (
            <div key={index} className="stat-card">
              <div className="stat-value">{stat.value}</div>
              <div className="stat-label">{stat.label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default GlobalEngineeringHero;
