'use client';

import React from 'react';
import './TechPartners.css';

interface TechPartnersProps {
  lang: 'ja' | 'en';
}

const TechPartners: React.FC<TechPartnersProps> = ({ lang }) => {
  const content = {
    ja: {
      title: 'エンタープライズグレードの技術基盤',
      subtitle: '最先端の技術スタックで製造業のデジタル変革を実現',
      techStack: [
        {
          name: 'デジタルツイン',
          icon: '🏭',
          features: [
            'フォトリアルな3D可視化',
            'リアルタイム物理シミュレーション',
            '高精度な性能予測'
          ]
        },
        {
          name: 'シミュレーション解析',
          icon: '⚙️',
          features: [
            'CFD熱解析、FEA構造解析',
            'マルチフィジックスシミュレーション',
            '設計最適化'
          ]
        },
        {
          name: 'クラウドインフラ',
          icon: '☁️',
          features: [
            'エンタープライズグレードの基盤',
            '99.9%稼働率',
            'ISO 27001 / SOC 2準拠'
          ]
        },
        {
          name: 'AIアナリティクス',
          icon: '🤖',
          features: [
            '予測保全アルゴリズム',
            '品質管理自動化',
            '最適化エンジン'
          ]
        }
      ],
      reliability: {
        title: '実証済みの信頼性',
        metrics: [
          '✓ FBM Hudson: €2.5M-€3.8M プロジェクト',
          '✓ 24/7稼働',
          '✓ エンタープライズサポート'
        ]
      }
    },
    en: {
      title: 'Enterprise-Grade Technology Foundation',
      subtitle: 'Industrial-grade technology stack for manufacturing operations',
      techStack: [
        {
          name: 'Digital Twin',
          icon: '🏭',
          features: [
            'Photorealistic 3D visualization',
            'Real-time physics simulation',
            'High-precision performance prediction'
          ]
        },
        {
          name: 'Simulation & Analysis',
          icon: '⚙️',
          features: [
            'CFD thermal & FEA structural analysis',
            'Multi-physics simulation',
            'Design optimization'
          ]
        },
        {
          name: 'Cloud Infrastructure',
          icon: '☁️',
          features: [
            'Enterprise-grade foundation',
            '99.9% uptime',
            'ISO 27001 / SOC 2 compliant'
          ]
        },
        {
          name: 'AI Analytics',
          icon: '🤖',
          features: [
            'Predictive maintenance algorithms',
            'Quality control automation',
            'Optimization engine'
          ]
        }
      ],
      reliability: {
        title: 'Proven Reliability',
        metrics: [
          '✓ FBM Hudson: €2.5M-€3.8M project',
          '✓ 24/7 operations',
          '✓ Enterprise support'
        ]
      }
    }
  };

  const currentContent = content[lang];

  return (
    <section className="tech-partners-section">
      <div className="partners-container">
        <div className="partners-header">
          <h2>{currentContent.title}</h2>
          <p>{currentContent.subtitle}</p>
        </div>

        <div className="partners-grid">
          {currentContent.techStack.map((tech, index) => (
            <div key={index} className="partner-card">
              <div className="partner-logo">
                <span className="logo-icon">{tech.icon}</span>
              </div>
              <h3 className="partner-name">{tech.name}</h3>
              <ul className="partner-features">
                {tech.features.map((feature, featureIndex) => (
                  <li key={featureIndex}>{feature}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="reliability-badge">
          <h3>{currentContent.reliability.title}</h3>
          <div className="reliability-metrics">
            {currentContent.reliability.metrics.map((metric, index) => (
              <div key={index} className="metric-item">
                {metric}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default TechPartners;
