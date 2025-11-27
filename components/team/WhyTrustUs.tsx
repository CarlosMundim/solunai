'use client';

import React from 'react';
import { Award, Globe, Factory, TrendingUp, Check } from 'lucide-react';
import './WhyTrustUs.css';

const trustIcons = {
  track: Award,
  global: Globe,
  manufacturing: Factory,
  scalable: TrendingUp,
};

interface WhyTrustUsProps {
  lang: 'ja' | 'en';
}

const WhyTrustUs: React.FC<WhyTrustUsProps> = ({ lang }) => {
  const content = {
    ja: {
      title: 'なぜSolunaiを信頼すべきか',
      subtitle: '実証された実績と国際的な信頼性',
      sections: [
        {
          iconKey: 'track',
          title: '実証された実績',
          points: [
            'Carlos: 実証済みの成長実績（Continental）',
            'Tomoo: 戦略的エグジット実績',
            'FBM Hudson: 国際プロジェクト進行中',
          ],
        },
        {
          iconKey: 'global',
          title: '国際的な信頼性',
          points: [
            'EU パートナーシップ（WorldEmp、FBM）',
            'エンタープライズグレードの技術基盤',
            'ISO 27001、SOC 2、GDPR準拠',
          ],
        },
        {
          iconKey: 'manufacturing',
          title: '製造業の深い知見',
          points: [
            '60年以上の統合経験',
            '自動車、HVAC、電子機器、機械製造',
            'プロセスエンジニアリングから戦略的M&Aまで',
          ],
        },
        {
          iconKey: 'scalable',
          title: 'スケーラブルな実行',
          points: [
            'WorldEmpによる柔軟なエンジニアリング能力',
            '変動費構造（固定費リスクなし）',
            '同時に20-30社のクライアントに対応可能',
          ],
        },
      ],
      stats: [
        {
          number: '実証済み',
          label: '成長実績',
          sublabel: 'Continental変革',
        },
        {
          number: '戦略的',
          label: 'エグジット実績',
          sublabel: '価値創出',
        },
        {
          number: '60+',
          label: '年の経験',
          sublabel: '統合製造業知識',
        },
        {
          number: '国際',
          label: '進行中プロジェクト',
          sublabel: 'FBM Hudson',
        },
      ],
    },
    en: {
      title: 'Why Trust Solunai',
      subtitle: 'Proven Track Record and International Credibility',
      sections: [
        {
          iconKey: 'track',
          title: 'Proven Track Record',
          points: [
            'Carlos: Proven growth achievement (Continental)',
            'Tomoo: Strategic exit portfolio',
            'FBM Hudson: International project in progress',
          ],
        },
        {
          iconKey: 'global',
          title: 'International Credibility',
          points: [
            'EU partnerships (WorldEmp, FBM)',
            'Enterprise-grade technology foundation',
            'ISO 27001, SOC 2, GDPR compliant',
          ],
        },
        {
          iconKey: 'manufacturing',
          title: 'Deep Manufacturing Expertise',
          points: [
            '60+ years combined experience',
            'Automotive, HVAC, electronics, machinery manufacturing',
            'Process engineering to strategic M&A',
          ],
        },
        {
          iconKey: 'scalable',
          title: 'Scalable Execution',
          points: [
            'Flexible engineering capacity via WorldEmp',
            'Variable cost structure (no fixed cost risk)',
            'Capable of serving 20-30 clients simultaneously',
          ],
        },
      ],
      stats: [
        {
          number: 'Proven',
          label: 'Growth Achievement',
          sublabel: 'Continental Transformation',
        },
        {
          number: 'Strategic',
          label: 'Exit Portfolio',
          sublabel: 'Value Creation',
        },
        {
          number: '60+',
          label: 'Years Experience',
          sublabel: 'Combined Manufacturing Knowledge',
        },
        {
          number: 'Global',
          label: 'Active Project',
          sublabel: 'FBM Hudson',
        },
      ],
    },
  };

  const text = content[lang];

  return (
    <section className="trust-section">
      <div className="trust-container">
        <h2 className="trust-title">{text.title}</h2>
        <p className="trust-subtitle">{text.subtitle}</p>

        {/* Trust Sections */}
        <div className="trust-grid">
          {text.sections.map((section, idx) => {
            const IconComponent = trustIcons[section.iconKey as keyof typeof trustIcons];
            return (
            <div key={idx} className="trust-card">
              <div className="trust-icon">
                <IconComponent size={32} strokeWidth={1.5} />
              </div>
              <h3 className="trust-card-title">{section.title}</h3>
              <ul className="trust-points">
                {section.points.map((point, pIdx) => (
                  <li key={pIdx} className="trust-point">
                    <span className="point-bullet">
                      <Check size={14} strokeWidth={2.5} />
                    </span>
                    <span className="point-text">{point}</span>
                  </li>
                ))}
              </ul>
            </div>
          );
          })}
        </div>

        {/* Stats Showcase */}
        <div className="trust-stats">
          {text.stats.map((stat, idx) => (
            <div key={idx} className="trust-stat">
              <div className="stat-number-large">{stat.number}</div>
              <div className="stat-label-large">{stat.label}</div>
              <div className="stat-sublabel">{stat.sublabel}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhyTrustUs;
