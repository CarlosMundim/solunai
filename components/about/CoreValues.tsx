'use client';

import React from 'react';
import './CoreValues.css';

interface CoreValuesProps {
  lang: 'ja' | 'en';
}

const CoreValues: React.FC<CoreValuesProps> = ({ lang }) => {
  const content = {
    ja: {
      title: '私たちの価値観',
      subtitle: 'すべての活動の基盤となる原則',
      values: [
        {
          icon: '◆',
          title: 'イノベーション',
          description: '最先端のAI技術と製造業のベストプラクティスを組み合わせ、革新的なソリューションを提供します。',
        },
        {
          icon: '◆',
          title: 'エクセレンス',
          description: 'Carlosの30年以上の製造業経験を活かし、世界クラスの品質と実行力を提供します。',
        },
        {
          icon: '◆',
          title: 'パートナーシップ',
          description: 'お客様と共に成長し、長期的な信頼関係を構築します。ベンダーではなく、パートナーとして。',
        },
        {
          icon: '◆',
          title: '誠実性',
          description: '透明性、正直さ、倫理的なビジネス慣行を通じて信頼を築きます。',
        },
      ],
    },
    en: {
      title: 'Our Core Values',
      subtitle: 'Principles that guide everything we do',
      values: [
        {
          icon: '◆',
          title: 'Innovation',
          description: 'Combining cutting-edge AI technology with manufacturing best practices to deliver transformative solutions.',
        },
        {
          icon: '◆',
          title: 'Excellence',
          description: 'Leveraging Carlos\'s 30+ years of manufacturing experience to deliver world-class quality and execution.',
        },
        {
          icon: '◆',
          title: 'Partnership',
          description: 'Growing with our clients and building long-term relationships. We\'re partners, not vendors.',
        },
        {
          icon: '◆',
          title: 'Integrity',
          description: 'Building trust through transparency, honesty, and ethical business practices.',
        },
      ],
    },
  };

  const text = content[lang];

  return (
    <section className="core-values">
      <div className="core-values-container">
        <div className="core-values-header">
          <h2 className="core-values-title">{text.title}</h2>
          <p className="core-values-subtitle">{text.subtitle}</p>
        </div>

        <div className="values-grid">
          {text.values.map((value, index) => (
            <div key={index} className="value-card">
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

export default CoreValues;
