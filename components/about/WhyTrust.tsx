'use client';

import React from 'react';
import './WhyTrust.css';

interface WhyTrustProps {
  lang: 'ja' | 'en';
}

const WhyTrust: React.FC<WhyTrustProps> = ({ lang }) => {
  const content = {
    ja: {
      title: 'なぜ製造業はソルナイを信頼するのか',
      reasons: [
        {
          title: '実証済みの実績',
          description: '52倍の成長達成、¥120億円以上のエグジット実績、€2.5M+のプロジェクト価値',
          icon: '📊',
        },
        {
          title: '深い製造業の専門知識',
          description: '60年以上の統合経験。単なるソフトウェア会社ではなく、製造業のエキスパートです',
          icon: '🏭',
        },
        {
          title: 'AI + エンジニアリング人材',
          description: 'テクノロジーだけでなく、WorldEmpパートナーシップを通じて世界クラスのエンジニアを提供',
          icon: '🤝',
        },
        {
          title: '日本市場への理解',
          description: '日本の製造業文化、規制、ビジネス慣行への深い理解',
          icon: '🇯🇵',
        },
        {
          title: '政府支援へのアクセス',
          description: 'ものづくり補助金、JFC融資、JETRO支援プログラムへの専門知識',
          icon: '🏛️',
        },
        {
          title: 'ターンキー型デリバリー',
          description: '戦略から実装まで、完全なエンドツーエンドソリューション',
          icon: '🔑',
        },
      ],
    },
    en: {
      title: 'Why Manufacturers Trust Solunai',
      reasons: [
        {
          title: 'Proven Track Record',
          description: '52× growth achievement, ¥12B+ exits, €2.5M+ project value delivered',
          icon: '📊',
        },
        {
          title: 'Deep Manufacturing Expertise',
          description: '60+ years combined experience. We\'re not just software - we\'re manufacturing experts',
          icon: '🏭',
        },
        {
          title: 'AI + Engineering Talent',
          description: 'Not just technology - we deliver world-class engineers through WorldEmp partnership',
          icon: '🤝',
        },
        {
          title: 'Japanese Market Understanding',
          description: 'Deep knowledge of Japanese manufacturing culture, regulations, and business practices',
          icon: '🇯🇵',
        },
        {
          title: 'Government Support Access',
          description: 'Expert guidance on Monozukuri grants, JFC loans, JETRO support programs',
          icon: '🏛️',
        },
        {
          title: 'Turnkey Delivery',
          description: 'Complete end-to-end solutions from strategy to implementation',
          icon: '🔑',
        },
      ],
    },
  };

  const text = content[lang];

  return (
    <section className="why-trust">
      <div className="why-trust-container">
        <h2 className="why-trust-title">{text.title}</h2>

        <div className="reasons-grid">
          {text.reasons.map((reason, index) => (
            <div key={index} className="reason-card">
              <div className="reason-icon">{reason.icon}</div>
              <h3 className="reason-title">{reason.title}</h3>
              <p className="reason-description">{reason.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhyTrust;
