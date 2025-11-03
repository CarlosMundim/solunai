'use client';

import React from 'react';
import Image from 'next/image';
import './TechnologyPartners.css';

interface TechnologyPartnersProps {
  lang: 'ja' | 'en';
}

const TechnologyPartners: React.FC<TechnologyPartnersProps> = ({ lang }) => {
  const content = {
    ja: {
      heading: 'エンタープライズグレードの技術基盤',
      subheading: 'Solunaiは世界クラスのテクノロジーパートナーと協力しています',
      partners: [
        {
          id: 'nvidia',
          logo: '/images/partners/nvidia.png',
          name: 'NVIDIA Omniverse',
          features: [
            'フォトリアリスティックなデジタルツイン可視化',
            'リアルタイム物理シミュレーション',
            'GPU加速コンピューティング'
          ]
        },
        {
          id: 'ansys',
          logo: '/images/partners/ansys.png',
          name: 'ANSYS Twin Builder',
          features: [
            'CFD熱解析、FEA構造解析',
            '高精度なパフォーマンス予測',
            'マルチフィジックスシミュレーション'
          ]
        },
        {
          id: 'microsoft',
          logo: '/images/partners/microsoft.png',
          name: 'Microsoft Azure',
          features: [
            'エンタープライズグレードのクラウドインフラ',
            '99.9%稼働時間保証',
            'ISO 27001 / SOC 2準拠'
          ]
        },
        {
          id: 'anthropic',
          logo: '/images/partners/anthropic.png',
          name: 'Claude AI (Anthropic)',
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
      subheading: 'Solunai teams up with world-class technology partners',
      partners: [
        {
          id: 'nvidia',
          logo: '/images/partners/nvidia.png',
          name: 'NVIDIA Omniverse',
          features: [
            'Photorealistic Digital Twin Visualization',
            'Real-time physics simulation',
            'GPU-accelerated computing'
          ]
        },
        {
          id: 'ansys',
          logo: '/images/partners/ansys.png',
          name: 'ANSYS Twin Builder',
          features: [
            'CFD thermal analysis, FEA structural analysis',
            'Highly accurate performance prediction',
            'Multiphysics Simulation'
          ]
        },
        {
          id: 'microsoft',
          logo: '/images/partners/microsoft.png',
          name: 'Microsoft Azure',
          features: [
            'Enterprise-grade cloud infrastructure',
            '99.9% uptime guarantee',
            'ISO 27001 / SOC 2 compliant'
          ]
        },
        {
          id: 'anthropic',
          logo: '/images/partners/anthropic.png',
          name: 'Claude AI (Anthropic)',
          features: [
            'Cutting-edge natural language processing',
            'Multimodal AI Capabilities',
            'Safety and reliability are key'
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
                <Image
                  src={partner.logo}
                  alt={partner.name}
                  width={180}
                  height={60}
                  style={{ objectFit: 'contain' }}
                />
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
