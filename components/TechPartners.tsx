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
      subtitle: 'Solunaiは世界トップクラスの技術パートナーと提携',
      partners: [
        {
          name: 'NVIDIA Omniverse',
          logo: '🎮',
          features: [
            'フォトリアルなデジタルツイン可視化',
            'リアルタイム物理シミュレーション',
            'GPUアクセラレーション計算'
          ]
        },
        {
          name: 'ANSYS Twin Builder',
          logo: '⚙️',
          features: [
            'CFD熱解析、FEA構造解析',
            '高精度な性能予測',
            'マルチフィジックスシミュレーション'
          ]
        },
        {
          name: 'Microsoft Azure',
          logo: '☁️',
          features: [
            'エンタープライズグレードのクラウド基盤',
            '99.9%稼働率保証',
            'ISO 27001 / SOC 2準拠'
          ]
        },
        {
          name: 'Claude AI (Anthropic)',
          logo: '🤖',
          features: [
            '最先端の自然言語処理',
            'マルチモーダルAI能力',
            '安全性と信頼性を重視'
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
      subtitle: 'Solunai partners with world-class technology providers',
      partners: [
        {
          name: 'NVIDIA Omniverse',
          logo: '🎮',
          features: [
            'Photorealistic digital twin visualization',
            'Real-time physics simulation',
            'GPU-accelerated computing'
          ]
        },
        {
          name: 'ANSYS Twin Builder',
          logo: '⚙️',
          features: [
            'CFD thermal analysis, FEA structural analysis',
            'High-precision performance prediction',
            'Multi-physics simulation'
          ]
        },
        {
          name: 'Microsoft Azure',
          logo: '☁️',
          features: [
            'Enterprise-grade cloud infrastructure',
            '99.9% uptime SLA',
            'ISO 27001 / SOC 2 compliant'
          ]
        },
        {
          name: 'Claude AI (Anthropic)',
          logo: '🤖',
          features: [
            'State-of-the-art natural language processing',
            'Multimodal AI capabilities',
            'Safety and reliability focused'
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
          {currentContent.partners.map((partner, index) => (
            <div key={index} className="partner-card">
              <div className="partner-logo">
                <span className="logo-icon">{partner.logo}</span>
              </div>
              <h3 className="partner-name">{partner.name}</h3>
              <ul className="partner-features">
                {partner.features.map((feature, featureIndex) => (
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
