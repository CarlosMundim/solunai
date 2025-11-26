'use client';

import React from 'react';
import './TechnologyPartners.css';

interface TechnologyPartnersProps {
  lang: 'ja' | 'en';
}

const TechnologyPartners: React.FC<TechnologyPartnersProps> = ({ lang }) => {
  const content = {
    ja: {
      heading: 'エンタープライズグレードの技術基盤',
      subheading: 'Solunaiは業界標準の技術を活用しています',
      partners: [
        {
          id: 'digital-twin',
          name: 'デジタルツイン',
          icon: '🏭',
          features: [
            'フォトリアリスティックなデジタルツイン可視化',
            'リアルタイム物理シミュレーション',
            'GPUアクセラレーション計算'
          ]
        },
        {
          id: 'simulation',
          name: '物理シミュレーション',
          icon: '⚙️',
          features: [
            'CFD熱解析、FEA構造解析',
            '高精度なパフォーマンス予測',
            'マルチフィジックスシミュレーション'
          ]
        },
        {
          id: 'cloud',
          name: 'クラウドインフラ',
          icon: '☁️',
          features: [
            'エンタープライズグレードのクラウドインフラ',
            '99.9%稼働時間保証',
            'ISO 27001 / SOC 2準拠'
          ]
        },
        {
          id: 'ai',
          name: 'AIエンジン',
          icon: '🤖',
          features: [
            '最先端の自然言語処理',
            'マルチモーダルAI機能',
            '安全性と信頼性を重視'
          ]
        }
      ]
    },
    en: {
      heading: 'Enterprise-grade technology foundation',
      subheading: 'Solunai leverages industry-standard technology',
      partners: [
        {
          id: 'digital-twin',
          name: 'Digital Twin',
          icon: '🏭',
          features: [
            'Photorealistic Digital Twin Visualization',
            'Real-time physics simulation',
            'GPU-accelerated computing'
          ]
        },
        {
          id: 'simulation',
          name: 'Physics Simulation',
          icon: '⚙️',
          features: [
            'CFD thermal analysis, FEA structural analysis',
            'Highly accurate performance prediction',
            'Multiphysics Simulation'
          ]
        },
        {
          id: 'cloud',
          name: 'Cloud Infrastructure',
          icon: '☁️',
          features: [
            'Enterprise-grade cloud infrastructure',
            '99.9% uptime guarantee',
            'ISO 27001 / SOC 2 compliant'
          ]
        },
        {
          id: 'ai',
          name: 'AI Engine',
          icon: '🤖',
          features: [
            'Advanced natural language processing',
            'Multimodal AI Capabilities',
            'Safety and reliability focused'
          ]
        }
      ]
    }
  };

  const t = content[lang];

  return (
    <section className="technology-partners">
      <div className="technology-partners-container">
        <h2 className="technology-partners-heading">{t.heading}</h2>
        <p className="technology-partners-subheading">{t.subheading}</p>

        <div className="technology-partners-grid">
          {t.partners.map((partner) => (
            <div key={partner.id} className="partner-card">
              <div className="partner-logo">
                <span className="partner-icon">{partner.icon}</span>
              </div>
              <h3 className="partner-name">{partner.name}</h3>
              <ul className="partner-features">
                {partner.features.map((feature, index) => (
                  <li key={index}>{feature}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TechnologyPartners;
