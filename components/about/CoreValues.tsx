'use client';

import React from 'react';
import { Lightbulb, Award, Users, Shield } from 'lucide-react';
import './CoreValues.css';

interface CoreValuesProps {
  lang: 'ja' | 'en';
}

const valueIcons = {
  innovation: Lightbulb,
  excellence: Award,
  partnership: Users,
  integrity: Shield,
};

const CoreValues: React.FC<CoreValuesProps> = ({ lang }) => {
  const content = {
    ja: {
      title: '私たちの価値観',
      subtitle: 'すべての活動の基盤となる原則',
      values: [
        {
          iconKey: 'innovation',
          title: 'イノベーション',
          description: '最先端のAI技術と製造業のベストプラクティスを組み合わせ、革新的なソリューションを提供します。',
        },
        {
          iconKey: 'excellence',
          title: 'エクセレンス',
          description: 'Carlosの30年以上の製造業経験を活かし、世界クラスの品質と実行力を提供します。',
        },
        {
          iconKey: 'partnership',
          title: 'パートナーシップ',
          description: 'お客様と共に成長し、長期的な信頼関係を構築します。ベンダーではなく、パートナーとして。',
        },
        {
          iconKey: 'integrity',
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
          iconKey: 'innovation',
          title: 'Innovation',
          description: 'Combining proven AI technology with manufacturing best practices to deliver measurable improvements.',
        },
        {
          iconKey: 'excellence',
          title: 'Excellence',
          description: 'Leveraging Carlos\'s 30+ years of manufacturing experience to deliver world-class quality and execution.',
        },
        {
          iconKey: 'partnership',
          title: 'Partnership',
          description: 'Growing with our clients and building long-term relationships. We\'re partners, not vendors.',
        },
        {
          iconKey: 'integrity',
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
          {text.values.map((value, index) => {
            const IconComponent = valueIcons[value.iconKey as keyof typeof valueIcons];
            return (
              <div key={index} className="value-card">
                <div className="value-icon">
                  <IconComponent size={32} strokeWidth={1.5} />
                </div>
                <h3 className="value-title">{value.title}</h3>
                <p className="value-description">{value.description}</p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default CoreValues;
