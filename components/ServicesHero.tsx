'use client';

import React from 'react';
import './ServicesHero.css';

interface ServicesHeroProps {
  lang: 'ja' | 'en';
}

const ServicesHero: React.FC<ServicesHeroProps> = ({ lang }) => {
  const content = {
    ja: {
      mainTitle: 'AI + グローバルエンジニア',
      subtitle: '完全な製造業変革 - ソフトウェアだけではない',
      points: [
        'AIソリューション + エンジニアリング人材',
        'WorldEmpパートナーシップ（2-6週間配備）',
        '60年以上の製造業専門知識',
        'ターンキー型デリバリー'
      ],
      stats: [
        { value: '2-6週間', label: 'エンジニア配備' },
        { value: '30-40%', label: 'コスト削減' },
        { value: '52倍', label: '従来比スピード' },
        { value: '€2.5M+', label: '実証済み実績' }
      ]
    },
    en: {
      mainTitle: 'AI + Global Engineers',
      subtitle: 'Complete Manufacturing Transformation - Not Just Software',
      points: [
        'AI Solutions + Engineering Talent',
        'WorldEmp Partnership (2-6 week deployment)',
        '60+ years manufacturing expertise',
        'Turnkey delivery'
      ],
      stats: [
        { value: '2-6 Weeks', label: 'Engineer Deployment' },
        { value: '30-40%', label: 'Cost Reduction' },
        { value: '52x', label: 'Faster Than Traditional' },
        { value: '€2.5M+', label: 'Proven Track Record' }
      ]
    }
  };

  const currentContent = content[lang];

  return (
    <section className="services-hero">
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

export default ServicesHero;
