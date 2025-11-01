'use client';

import React from 'react';
import './TechnologyPartners.css';

interface TechnologyPartnersProps {
  lang: 'ja' | 'en';
}

const TechnologyPartners: React.FC<TechnologyPartnersProps> = ({ lang }) => {
  const content = {
    ja: {
      title: 'グローバル技術パートナーシップ',
      subtitle: '世界トップクラスの技術パートナーと連携し、最先端のAIソリューションを提供',
      partners: [
        {
          name: 'NVIDIA',
          description: 'Omniverseデジタルツイン技術'
        },
        {
          name: 'Microsoft Azure',
          description: 'クラウドインフラとAIサービス'
        },
        {
          name: 'ANSYS',
          description: 'シミュレーション・解析技術'
        },
        {
          name: 'Anthropic',
          description: 'Claude AI - 高度な分析と最適化'
        }
      ],
      worldemp: {
        title: 'WorldEmp グローバルエンジニアリング',
        description: 'オランダ・インド・日本を拠点に、機械学習・自動化・ビジョン専門家を2-6週間で配備（従来の4-6ヶ月から大幅短縮）'
      }
    },
    en: {
      title: 'Global Technology Partnerships',
      subtitle: 'Delivering cutting-edge AI solutions through collaboration with world-class technology partners',
      partners: [
        {
          name: 'NVIDIA',
          description: 'Omniverse Digital Twin Technology'
        },
        {
          name: 'Microsoft Azure',
          description: 'Cloud Infrastructure & AI Services'
        },
        {
          name: 'ANSYS',
          description: 'Simulation & Analysis Technology'
        },
        {
          name: 'Anthropic',
          description: 'Claude AI - Advanced Analytics & Optimization'
        }
      ],
      worldemp: {
        title: 'WorldEmp Global Engineering',
        description: 'Deploy ML, automation, and vision specialists in 2-6 weeks (vs. 4-6 months traditional) from Netherlands, India, and Japan bases'
      }
    }
  };

  const currentContent = content[lang];

  return (
    <section className="technology-partners-section" aria-label={lang === 'ja' ? '技術パートナー' : 'Technology Partners'}>
      <div className="technology-partners-container">
        <h2 className="partners-title">{currentContent.title}</h2>
        <p className="partners-subtitle">{currentContent.subtitle}</p>

        <div className="partners-grid">
          {currentContent.partners.map((partner, index) => (
            <div
              key={index}
              className="partner-card"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="partner-logo-placeholder">
                <span className="partner-name">{partner.name}</span>
              </div>
              <p className="partner-description">{partner.description}</p>
            </div>
          ))}
        </div>

        <div className="worldemp-section">
          <h3 className="worldemp-title">{currentContent.worldemp.title}</h3>
          <p className="worldemp-description">{currentContent.worldemp.description}</p>
        </div>
      </div>
    </section>
  );
};

export default TechnologyPartners;
