'use client';

import React from 'react';
import './GEKeyCapabilities.css';

interface GEKeyCapabilitiesProps {
  lang: 'ja' | 'en';
}

const GEKeyCapabilities: React.FC<GEKeyCapabilitiesProps> = ({ lang }) => {
  const content = {
    ja: {
      heading: '世界の技術者を貴社の開発チームに',
      subheading: '日本品質を維持しながら、コストを最適化',
      capabilities: [
        {
          id: 'global-talent-access',
          title: '世界中のスペシャリストへアクセス',
          description: '機械、電気、ソフトウェア、BIM、プロセスエンジニアなど、専門分野ごとの高度な人材を、日本の給与水準の30-50%のコストで活用。2-6週間で新メンバーを参画させ、即戦力化します。'
        },
        {
          id: 'cost-optimization',
          title: '大幅なコスト削減',
          description: '紹介手数料なしの定額サービス。日本で同じスキルのエンジニアを雇用する場合と比較して、50-70%のコスト削減を実現。余剰予算を設備投資や研究開発に回せます。'
        },
        {
          id: '24-7-productivity',
          title: '24時間体制の開発サイクル',
          description: '時差を活かした継続的な開発体制。日本チームが終業後も、海外チームが作業を継続。朝出社すると設計や検証が完了しており、開発スピードが2倍に加速します。'
        },
        {
          id: 'quality-standards',
          title: '日本品質基準の徹底',
          description: '日本の製造業で求められる品質管理基準、文書化ルール、コミュニケーション様式を海外チームに徹底教育。文化的な橋渡し役として、Solunaiが常にサポートします。'
        },
        {
          id: 'scalable-teams',
          title: '柔軟なチーム拡張',
          description: '繁忙期は増員、閑散期は縮小。プロジェクトの規模に応じて、1名から20名まで柔軟にチーム構成を調整可能。正社員雇用のリスクなく、必要な時に必要な人員を確保できます。'
        },
        {
          id: 'manufacturing-expertise',
          title: '製造業特化の専門知識',
          description: '自動車部品、精密機器、産業機械など、日本の製造業を深く理解したエンジニアを厳選。単なるリモート人材ではなく、製造現場の課題を理解し、実用的な解決策を提案できる技術者です。'
        }
      ]
    },
    en: {
      heading: 'Build Your Engineering Team Globally',
      subheading: 'Japanese quality standards at optimized costs',
      capabilities: [
        {
          id: 'global-talent-access',
          title: 'Access to Global Specialists',
          description: 'Mechanical, electrical, software, BIM, process engineers and more. Highly skilled professionals at 30-50% of Japanese salary costs. New team members onboarded and productive within 2-6 weeks.'
        },
        {
          id: 'cost-optimization',
          title: 'Significant Cost Reduction',
          description: 'Fixed-fee service with no placement commissions. Achieve 50-70% cost savings compared to hiring equivalent engineering talent in Japan. Redirect savings toward equipment investment and R&D.'
        },
        {
          id: '24-7-productivity',
          title: '24/7 Development Cycle',
          description: 'Leverage time zones for continuous development. Offshore teams continue work after Japanese hours end. Arrive at the office to completed designs and validations — development speed doubles.'
        },
        {
          id: 'quality-standards',
          title: 'Japanese Quality Standards',
          description: 'Offshore teams trained thoroughly in Japanese manufacturing QC standards, documentation practices, and communication protocols. Solunai serves as cultural bridge, providing ongoing support and alignment.'
        },
        {
          id: 'scalable-teams',
          title: 'Flexible Team Scaling',
          description: 'Scale up during peak periods, down during quiet times. Adjust team composition from 1 to 20+ members based on project needs. No permanent hiring risks — access resources exactly when needed.'
        },
        {
          id: 'manufacturing-expertise',
          title: 'Manufacturing-Focused Expertise',
          description: 'Engineers selected for deep understanding of Japanese manufacturing — automotive parts, precision equipment, industrial machinery. Not generic remote workers, but technical professionals who grasp shop floor challenges and deliver practical solutions.'
        }
      ]
    }
  };

  const t = content[lang];

  return (
    <section className="ge-key-capabilities">
      <div className="ge-key-capabilities-container">
        <h2 className="ge-key-capabilities-heading">{t.heading}</h2>
        <p className="ge-key-capabilities-subheading">{t.subheading}</p>

        <div className="ge-key-capabilities-grid">
          {t.capabilities.map((capability) => (
            <div key={capability.id} className="ge-capability-card">
              <h3 className="ge-capability-title">{capability.title}</h3>
              <p className="ge-capability-description">{capability.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default GEKeyCapabilities;
