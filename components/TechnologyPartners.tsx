'use client';

import React from 'react';
import './TechnologyPartners.css';

interface TechnologyPartnersProps {
  lang: 'ja' | 'en';
}

const TechnologyPartners: React.FC<TechnologyPartnersProps> = ({ lang }) => {
  const content = {
    ja: {
      title: 'パートナーシップ & テクノロジー',
      subtitle: '信頼できるパートナーと最先端技術で、製造業のデジタル変革を実現',
      techStack: {
        title: '採用技術',
        items: [
          { name: 'デジタルツイン', description: '高精度3Dシミュレーション・可視化' },
          { name: 'クラウドインフラ', description: 'エンタープライズグレードの可用性とセキュリティ' },
          { name: 'AIアナリティクス', description: '予測保全と最適化アルゴリズム' },
          { name: 'IoT統合', description: 'リアルタイムデータ収集と監視' }
        ]
      },
      worldemp: {
        title: 'WorldEmp グローバルエンジニアリング',
        description: 'オランダ・インド・日本を拠点に、機械学習・自動化・ビジョン専門家を2-6週間で配備（従来の4-6ヶ月から大幅短縮）',
        ctaButton: '詳細を見る'
      }
    },
    en: {
      title: 'Partnerships & Technology',
      subtitle: 'Industrial technology and proven global partnerships',
      techStack: {
        title: 'Technology Stack',
        items: [
          { name: 'Digital Twin', description: 'High-precision 3D simulation and visualization' },
          { name: 'Cloud Infrastructure', description: 'Enterprise-grade availability and security' },
          { name: 'AI Analytics', description: 'Predictive maintenance and optimization algorithms' },
          { name: 'IoT Integration', description: 'Real-time data collection and monitoring' }
        ]
      },
      worldemp: {
        title: 'WorldEmp Global Engineering',
        description: 'Deploy ML, automation, and vision specialists in 2-6 weeks (vs. 4-6 months traditional) from Netherlands, India, and Japan bases',
        ctaButton: 'Learn More'
      }
    }
  };

  const currentContent = content[lang];

  return (
    <section className="technology-partners-section" aria-label={lang === 'ja' ? 'パートナーシップ' : 'Partnerships'}>
      <div className="technology-partners-container">
        <h2 className="partners-title">{currentContent.title}</h2>
        <p className="partners-subtitle">{currentContent.subtitle}</p>

        {/* Technology Stack - Text only, no unauthorized logos */}
        <div className="tech-stack-section">
          <h3 className="tech-stack-title">{currentContent.techStack.title}</h3>
          <div className="partners-grid">
            {currentContent.techStack.items.map((item, index) => (
              <div
                key={index}
                className="partner-card"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <h4 className="tech-item-name">{item.name}</h4>
                <p className="partner-description">{item.description}</p>
              </div>
            ))}
          </div>
        </div>

        {/* WorldEmp - Authorized partnership */}
        <div className="worldemp-section">
          <div className="worldemp-logo-container">
            <img
              src="/images/WorldEmpLogo_white.png"
              alt="WorldEmp Logo"
              className="worldemp-logo"
            />
          </div>
          <h3 className="worldemp-title">{currentContent.worldemp.title}</h3>
          <p className="worldemp-description">{currentContent.worldemp.description}</p>
          <a
            href="https://worldemp.com/"
            target="_blank"
            rel="noopener noreferrer"
            className="worldemp-cta-button"
          >
            {currentContent.worldemp.ctaButton}
            <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M4 10H16M16 10L11 5M16 10L11 15" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          </a>
        </div>
      </div>
    </section>
  );
};

export default TechnologyPartners;
