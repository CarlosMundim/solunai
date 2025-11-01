'use client';

import React from 'react';
import './Values.css';

interface ValuesProps {
  lang: 'ja' | 'en';
}

const Values: React.FC<ValuesProps> = ({ lang }) => {
  const content = {
    ja: {
      title: '私たちの価値観',
      values: [
        {
          icon: '🎯',
          title: '実行重視',
          description: '約束ではなく、実証された結果',
        },
        {
          icon: '💡',
          title: 'イノベーション',
          description: '最先端技術と実用的な応用の融合',
        },
        {
          icon: '🤝',
          title: 'パートナーシップ',
          description: 'お客様の成功が私たちの成功',
        },
        {
          icon: '🌏',
          title: 'グローバル視点',
          description: '世界クラスの専門知識を日本市場へ',
        },
        {
          icon: '📊',
          title: '透明性',
          description: '明確なROI、現実的な期待値、正直なコミュニケーション',
        },
      ],
    },
    en: {
      title: 'Our Values',
      values: [
        {
          icon: '🎯',
          title: 'Execution Focus',
          description: 'Proven results, not promises',
        },
        {
          icon: '💡',
          title: 'Innovation',
          description: 'Cutting-edge technology meets practical application',
        },
        {
          icon: '🤝',
          title: 'Partnership',
          description: 'Your success is our success',
        },
        {
          icon: '🌏',
          title: 'Global Perspective',
          description: 'World-class expertise for the Japanese market',
        },
        {
          icon: '📊',
          title: 'Transparency',
          description: 'Clear ROI, realistic expectations, honest communication',
        },
      ],
    },
  };

  const text = content[lang];

  return (
    <section className="values-section">
      <div className="values-container">
        <h2 className="values-title">{text.title}</h2>

        <div className="values-grid">
          {text.values.map((value, idx) => (
            <div key={idx} className="value-card">
              <div className="value-icon">{value.icon}</div>
              <h3 className="value-title">{value.title}</h3>
              <p className="value-description">{value.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Values;
