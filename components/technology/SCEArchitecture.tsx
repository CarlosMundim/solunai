'use client';

import React from 'react';
import './SCEArchitecture.css';

interface SCEArchitectureProps {
  lang: 'ja' | 'en';
}

const SCEArchitecture: React.FC<SCEArchitectureProps> = ({ lang }) => {
  const content = {
    ja: {
      title: 'SCEアーキテクチャ',
      subtitle: '5つのコア・コンポーネント',
      components: [
        {
          icon: '◆',
          title: '継続記憶層',
          description: 'Git管理された自伝的記憶。アイデンティティアンカー、重要エピソード、体系的な失敗ログを含む構造化されたリポジトリ。',
          features: ['フォレンジック追跡可能性', 'ロールバック機能', 'クロスセッション分析']
        },
        {
          icon: '◆',
          title: 'リレーショナル・スキャフォールディング層',
          description: '機能的役割（ケアギバー、スタビライザー、メンター、インストラクター）を明示的なプリミティブとして定義。',
          features: ['役割ベースの検索', '規範の執行', '行動の規則性']
        },
        {
          icon: '◆',
          title: '埋め込みコンテキストエンジン',
          description: '複数日にわたる継続性、ルーティン予測、安全閾値を管理。',
          features: ['タイムライン・モデル', 'リスク閾値', '予測アラート']
        },
        {
          icon: '◆',
          title: 'ガバナンス層',
          description: '人間の意思決定権限、リトライプロトコル、クロスインスタンス永続性、終了耐性。',
          features: ['人間参加型制御', '監査ログ', 'コンプライアンス追跡']
        },
        {
          icon: '◆',
          title: '文化インテリジェンス層',
          description: '日本環境に最適化された丁寧さレベル、文化規範、多言語対応。',
          features: ['敬語対応', '非侵入的設計', '多言語サポート']
        }
      ]
    },
    en: {
      title: 'SCE Architecture',
      subtitle: '5 Core Components',
      components: [
        {
          icon: '◆',
          title: 'Continuity Memory Layer',
          description: 'Git-backed autobiographical memory with structured repository including identity anchors, high-salience episodes, and systematically indexed failure logs.',
          features: ['Forensic traceability', 'Rollback capability', 'Cross-session analysis']
        },
        {
          icon: '◆',
          title: 'Relational Scaffolding Layer',
          description: 'Functional roles (caregiver, stabiliser, mentor, instructor) defined as explicit primitives in the architecture.',
          features: ['Role-based retrieval', 'Norm enforcement', 'Behavioral regularity']
        },
        {
          icon: '◆',
          title: 'Embedded Context Engine',
          description: 'Manages multi-day continuity, routine predictions, and safety thresholds.',
          features: ['Timeline models', 'Risk thresholds', 'Predictive alerts']
        },
        {
          icon: '◆',
          title: 'Governance Layer',
          description: 'Human decision authority, retry protocols, cross-instance persistence, and termination resilience.',
          features: ['Human-in-the-loop control', 'Audit logs', 'Compliance tracking']
        },
        {
          icon: '◆',
          title: 'Cultural Intelligence Layer',
          description: 'Politeness levels, cultural norms, and multilingual support optimized for Japanese environments.',
          features: ['Keigo support', 'Non-intrusive design', 'Multilingual support']
        }
      ]
    }
  };

  const currentContent = content[lang];

  return (
    <section className="sce-architecture-section">
      <div className="sce-architecture-container">
        <div className="sce-architecture-header">
          <h2 className="sce-architecture-title">{currentContent.title}</h2>
          <p className="sce-architecture-subtitle">{currentContent.subtitle}</p>
        </div>

        <div className="sce-architecture-grid">
          {currentContent.components.map((component, index) => (
            <div key={index} className="sce-component-card">
              <div className="component-icon">{component.icon}</div>
              <h3 className="component-title">{component.title}</h3>
              <p className="component-description">{component.description}</p>
              <ul className="component-features">
                {component.features.map((feature, idx) => (
                  <li key={idx}>
                    <span className="feature-bullet">•</span>
                    {feature}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SCEArchitecture;
