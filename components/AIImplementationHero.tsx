'use client';

import React from 'react';
import './AIImplementationHero.css';

interface AIImplementationHeroProps {
  lang: 'ja' | 'en';
}

const AIImplementationHero: React.FC<AIImplementationHeroProps> = ({ lang }) => {
  const content = {
    ja: {
      mainTitle: 'AI実装サービス',
      subtitle: 'アセスメントから本番稼働まで - あなたの製造業AI変革',
      points: [
        '5段階の実証済みプロセス',
        '2-4週間のスプリント配信',
        '完全なターンキーソリューション',
        'ROI保証付き実装'
      ],
      stats: [
        { value: '2-4週間', label: 'スプリントサイクル' },
        { value: '100%', label: 'ターンキー配信' },
        { value: '€2.5M+', label: '実証済み実績' },
        { value: '24/7', label: '継続的サポート' }
      ]
    },
    en: {
      mainTitle: 'AI Implementation Services',
      subtitle: 'From Assessment to Production - Your Manufacturing AI Transformation',
      points: [
        '5-Phase Proven Process',
        '2-4 Week Sprint Delivery',
        'Complete Turnkey Solution',
        'ROI-Guaranteed Implementation'
      ],
      stats: [
        { value: '2-4 Weeks', label: 'Sprint Cycles' },
        { value: '100%', label: 'Turnkey Delivery' },
        { value: '€2.5M+', label: 'Proven Track Record' },
        { value: '24/7', label: 'Ongoing Support' }
      ]
    }
  };

  const currentContent = content[lang];

  return (
    <section className="ai-implementation-hero">
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

export default AIImplementationHero;
