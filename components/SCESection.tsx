'use client';

import React from 'react';
import Link from 'next/link';
import './SCESection.css';

interface SCESectionProps {
  lang: 'ja' | 'en';
}

const SCESection: React.FC<SCESectionProps> = ({ lang }) => {
  const content = {
    ja: {
      eyebrow: '独自テクノロジー',
      heading: 'Solunai Continuity Engine',
      subheading: '従来のAIはセッションごとにリセット。SCEは違います。',
      description: '長期記憶、失敗追跡、役割ベースの行動安定性を備えた継続性アーキテクチャ。製造業向けAIの新しい標準。',
      features: [
        {
          icon: '◆',
          title: '長期コンテキスト記憶',
          description: '過去のやり取り、決定事項、学習内容を永続的に保持'
        },
        {
          icon: '◆',
          title: '失敗追跡と自己改善',
          description: 'エラーパターンを記録し、時間とともに精度を向上'
        },
        {
          icon: '◆',
          title: '役割ベース安定性',
          description: '定義された役割と境界内で一貫した行動を維持'
        },
        {
          icon: '◆',
          title: 'ガバナンス対応設計',
          description: '人間による監視と制御を組み込んだアーキテクチャ'
        }
      ],
      cta: 'SCEテクノロジーを詳しく見る',
      ctaLink: '/technology'
    },
    en: {
      eyebrow: 'PROPRIETARY TECHNOLOGY',
      heading: 'Solunai Continuity Engine',
      subheading: 'Traditional AI resets every session. SCE is different.',
      description: 'A continuity architecture with long-term memory, failure tracking, and role-based behavioral stability. The new standard for manufacturing AI.',
      features: [
        {
          icon: '◆',
          title: 'Long-term Context Memory',
          description: 'Persistently retains past interactions, decisions, and learnings'
        },
        {
          icon: '◆',
          title: 'Failure Tracking & Self-Improvement',
          description: 'Records error patterns and improves accuracy over time'
        },
        {
          icon: '◆',
          title: 'Role-Based Stability',
          description: 'Maintains consistent behavior within defined roles and boundaries'
        },
        {
          icon: '◆',
          title: 'Governance-Aware Design',
          description: 'Architecture with built-in human oversight and control'
        }
      ],
      cta: 'Learn More About SCE Technology',
      ctaLink: '/en/technology'
    }
  };

  const t = content[lang];

  return (
    <section className="sce-section">
      <div className="sce-section-container">
        <div className="sce-section-header">
          <span className="sce-section-eyebrow">{t.eyebrow}</span>
          <h2 className="sce-section-heading">{t.heading}</h2>
          <p className="sce-section-subheading">{t.subheading}</p>
          <p className="sce-section-description">{t.description}</p>
        </div>

        <div className="sce-section-features">
          {t.features.map((feature, index) => (
            <div key={index} className="sce-section-feature">
              <div className="sce-section-feature-icon">{feature.icon}</div>
              <h3 className="sce-section-feature-title">{feature.title}</h3>
              <p className="sce-section-feature-description">{feature.description}</p>
            </div>
          ))}
        </div>

        <div className="sce-section-cta-wrapper">
          <Link href={t.ctaLink} className="sce-section-cta">
            {t.cta}
            <span className="sce-section-cta-arrow">→</span>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default SCESection;
