'use client';

import React from 'react';
import './EPCFabricationHero.css';

interface EPCFabricationHeroProps {
  lang: 'ja' | 'en';
}

const EPCFabricationHero: React.FC<EPCFabricationHeroProps> = ({ lang }) => {
  const content = {
    ja: {
      mainTitle: 'EPC & 製作サービス',
      subtitle: 'エンジニアリング、調達、建設 - ターンキープラント・ソリューション',
      points: [
        '完全なプラント設計と自動化',
        'エンド・ツー・エンドのプロジェクト管理',
        '設備製作と設置',
        'ライフサイクルサポートとメンテナンス'
      ],
      stats: [
        { value: '60年以上', label: '製造業専門知識' },
        { value: '€2.5M+', label: 'プロジェクト価値' },
        { value: '100%', label: 'ターンキー配信' },
        { value: '24/7', label: '継続的サポート' }
      ]
    },
    en: {
      mainTitle: 'EPC & Fabrication Services',
      subtitle: 'Engineering, Procurement, Construction - Turnkey Plant Solutions',
      points: [
        'Complete plant design and automation',
        'End-to-end project management',
        'Equipment fabrication and installation',
        'Lifecycle support and maintenance'
      ],
      stats: [
        { value: '60+ Years', label: 'Manufacturing Expertise' },
        { value: '€2.5M+', label: 'Project Value' },
        { value: '100%', label: 'Turnkey Delivery' },
        { value: '24/7', label: 'Ongoing Support' }
      ]
    }
  };

  const currentContent = content[lang];

  return (
    <section className="epc-fabrication-hero">
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

export default EPCFabricationHero;
