'use client';

import React from 'react';
import './SCEHero.css';

interface SCEHeroProps {
  lang: 'ja' | 'en';
}

const SCEHero: React.FC<SCEHeroProps> = ({ lang }) => {
  const content = {
    ja: {
      badge: 'コア・テクノロジー',
      title: 'Solunai Continuity Engine',
      subtitle: '記憶し、学習し、継続する AI',
      description: '従来のAIはセッションごとにリセットされます。SCEは長期記憶、失敗追跡、役割ベースの行動安定性を備えた継続性アーキテクチャです。数週間から数ヶ月にわたってコンテキストを維持し、真のビジネス価値を提供します。',
      features: [
        '永続的なコンテキスト記憶',
        '失敗ログと自己改善',
        '役割ベースの行動安定性',
        '人間参加型ガバナンス'
      ]
    },
    en: {
      badge: 'Core Technology',
      title: 'Solunai Continuity Engine',
      subtitle: 'AI That Remembers, Learns, and Persists',
      description: 'Traditional AI resets every session. SCE is a continuity architecture with long-term memory, failure tracking, and role-based behavioral stability. It maintains context across weeks and months, delivering true business value.',
      features: [
        'Persistent contextual memory',
        'Failure logs and self-improvement',
        'Role-based behavioral stability',
        'Human-in-the-loop governance'
      ]
    }
  };

  const currentContent = content[lang];

  return (
    <section className="sce-hero-section">
      <div className="sce-hero-container">
        <div className="sce-hero-content">
          <span className="sce-hero-badge">{currentContent.badge}</span>
          <h1 className="sce-hero-title">{currentContent.title}</h1>
          <p className="sce-hero-subtitle">{currentContent.subtitle}</p>
          <p className="sce-hero-description">{currentContent.description}</p>

          <div className="sce-hero-features">
            {currentContent.features.map((feature, index) => (
              <div key={index} className="sce-hero-feature">
                <span className="feature-bullet">•</span>
                <span>{feature}</span>
              </div>
            ))}
          </div>
        </div>

        <div className="sce-hero-visual">
          <div className="sce-engine-diagram">
            <div className="engine-core">SCE</div>
            <div className="engine-ring ring-1">Memory</div>
            <div className="engine-ring ring-2">Learning</div>
            <div className="engine-ring ring-3">Governance</div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SCEHero;
