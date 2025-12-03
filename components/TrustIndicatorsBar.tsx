'use client';

import React from 'react';
import './TrustIndicatorsBar.css';

interface TrustIndicatorsBarProps {
  lang: 'ja' | 'en';
}

const TrustIndicatorsBar: React.FC<TrustIndicatorsBarProps> = ({ lang }) => {
  const content = {
    ja: {
      indicators: [
        {
          label: '日本拠点',
          title: '日本拠点のAI開発',
          subtitle: '日本企業の文化と業務を熟知'
        },
        {
          label: 'データ主権',
          title: '主権型データ管理',
          subtitle: 'データはすべて国内に保存'
        },
        {
          label: 'エージェントAI',
          title: '企業向けエージェントAI',
          subtitle: '状況を理解し行動するAI'
        },
        {
          label: '導入実績',
          title: '大規模組織での導入知見',
          subtitle: '研究から企業運用まで幅広い実績'
        }
      ],
      expandedText: 'ソルナイは、日本企業の組織文化、業務フロー、ガバナンス基準に適合するAIシステムの開発を専門としています。当社のエージェンティックAIは、国内でのデータ管理を前提とした主権型アーキテクチャで構築されており、企業が安心して導入できる堅牢な基盤を備えています。'
    },
    en: {
      indicators: [
        {
          label: 'JAPAN-BASED',
          title: 'Japan-Based AI Development',
          subtitle: 'Deep understanding of Japanese business'
        },
        {
          label: 'DATA SOVEREIGNTY',
          title: 'Sovereign Data Control',
          subtitle: 'All data stays inside Japan'
        },
        {
          label: 'AGENTIC AI',
          title: 'Enterprise Agentic AI',
          subtitle: 'AI that understands context and acts'
        },
        {
          label: 'EXPERTISE',
          title: 'Expertise from Large-Scale Deployments',
          subtitle: 'From research to enterprise operations'
        }
      ],
      expandedText: 'Solunai specialises in developing AI systems that align with Japanese organisational culture, operational workflows, and governance requirements. Our agentic AI is built on a sovereign architecture designed for full domestic data control, allowing organisations to deploy AI with confidence.'
    }
  };

  const currentContent = content[lang];

  return (
    <section className="trust-indicators-section">
      <div className="trust-indicators-container">
        <div className="trust-indicators-grid">
          {currentContent.indicators.map((indicator, index) => (
            <div key={index} className="trust-indicator-card">
              <span className="indicator-label">{indicator.label}</span>
              <h3 className="indicator-title">{indicator.title}</h3>
              <p className="indicator-subtitle">{indicator.subtitle}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TrustIndicatorsBar;
