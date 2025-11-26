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
          icon: '01',
          title: '現場主義',
          description: '現場を知る者だけが、現場の課題を解決できる',
        },
        {
          icon: '02',
          title: '実績重視',
          description: '約束ではなく、実証された結果',
        },
        {
          icon: '03',
          title: 'ものづくり尊重',
          description: '日本の製造業の伝統とAI技術の融合',
        },
        {
          icon: '04',
          title: '中小企業パートナー',
          description: '大企業向け技術を中小企業の現場へ',
        },
        {
          icon: '05',
          title: 'グローバル視点',
          description: '世界の技術者ネットワークを日本の製造業へ',
        },
      ],
    },
    en: {
      title: 'Our Values',
      values: [
        {
          icon: '01',
          title: 'Shop Floor First',
          description: 'Only those who know the factory floor can solve factory problems',
        },
        {
          icon: '02',
          title: 'Results Focus',
          description: 'Proven results, not promises',
        },
        {
          icon: '03',
          title: 'Monozukuri Respect',
          description: 'Combining Japanese manufacturing tradition with AI technology',
        },
        {
          icon: '04',
          title: 'SME Partnership',
          description: 'Enterprise technology for SME shop floors',
        },
        {
          icon: '05',
          title: 'Global Perspective',
          description: 'Global engineering network for Japanese manufacturing',
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
