'use client';

import React from 'react';
import './ValueProposition.css';

interface ValuePropositionProps {
  lang: 'ja' | 'en';
}

const ValueProposition: React.FC<ValuePropositionProps> = ({ lang }) => {
  const content = {
    ja: {
      title: '完全な製造業変革ソリューション',
      columns: [
        {
          icon: 'AI',
          title: 'AIソリューション',
          subtitle: '最先端のAI技術で製造業を変革',
          features: [
            'デジタルツイン技術',
            'コンピュータビジョン品質管理',
            '予知保全システム',
            'AI生産最適化'
          ],
          result: '実証済み：コスト30-50%削減、品質95%改善'
        },
        {
          icon: 'GE',
          title: 'グローバルエンジニア',
          subtitle: '世界クラスの人材を数週間で配備',
          features: [
            'WorldEmp提携（オランダ）',
            '2-6週間で配備（従来4-6ヶ月）',
            'ML・自動化・ビジョン専門家',
            'プロジェクトベースで柔軟対応'
          ],
          result: '日本の人材不足問題を解決'
        },
        {
          icon: 'ROI',
          title: '実証済みの成果',
          subtitle: '国際的な実績と信頼性',
          features: [
            'FBM Hudson: €2.5M-€3.8M プロジェクト',
            'ROI: 178-295% IRR',
            '投資回収: 4-7ヶ月',
            'EU パートナーシップ'
          ],
          result: '大規模変革の実行能力を証明'
        }
      ]
    },
    en: {
      title: 'Complete Manufacturing Transformation Solutions',
      columns: [
        {
          icon: 'AI',
          title: 'AI Solutions',
          subtitle: 'Transform manufacturing with cutting-edge AI technology',
          features: [
            'Digital Twin Technology',
            'Computer Vision Quality Control',
            'Predictive Maintenance Systems',
            'AI Production Optimization'
          ],
          result: 'Proven: 30-50% cost reduction, 95% quality improvement'
        },
        {
          icon: 'GE',
          title: 'Global Engineers',
          subtitle: 'World-class talent deployed in weeks',
          features: [
            'WorldEmp Partnership (Netherlands)',
            '2-6 weeks deployment (vs. 4-6 months traditional)',
            'ML, Automation, Vision Specialists',
            'Flexible project-based engagement'
          ],
          result: 'Solving Japan\'s talent shortage'
        },
        {
          icon: 'ROI',
          title: 'Proven Results',
          subtitle: 'International track record and credibility',
          features: [
            'FBM Hudson: €2.5M-€3.8M Project',
            'ROI: 178-295% IRR',
            'Payback: 4-7 months',
            'EU Partnerships'
          ],
          result: 'Proven large-scale transformation capability'
        }
      ]
    }
  };

  const currentContent = content[lang];

  return (
    <section
      id="value-proposition"
      className="value-proposition-section"
      aria-label={lang === 'ja' ? '価値提案' : 'Value Proposition'}
    >
      <div className="value-proposition-container">
        <h2 className="value-proposition-title">{currentContent.title}</h2>

        <div className="value-proposition-grid">
          {currentContent.columns.map((column, index) => (
            <div
              key={index}
              className="value-proposition-card"
              style={{ animationDelay: `${index * 0.15}s` }}
            >
              <div className="card-icon" aria-hidden="true">{column.icon}</div>
              <h3 className="card-title">{column.title}</h3>
              <p className="card-subtitle">{column.subtitle}</p>

              <ul className="card-features" role="list">
                {column.features.map((feature, idx) => (
                  <li key={idx}>
                    <span className="feature-check" aria-hidden="true">✓</span>
                    <span>{feature}</span>
                  </li>
                ))}
              </ul>

              <div className="card-result">
                <strong>{column.result}</strong>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ValueProposition;
