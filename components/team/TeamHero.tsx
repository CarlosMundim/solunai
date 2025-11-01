'use client';

import React from 'react';
import './TeamHero.css';

interface TeamHeroProps {
  lang: 'ja' | 'en';
}

const TeamHero: React.FC<TeamHeroProps> = ({ lang }) => {
  const content = {
    ja: {
      title: '私たちのチーム',
      subtitle: '60年以上の製造業リーダーシップ経験',
      tagline: '世界クラスの実行能力',
      carlos: {
        highlight: 'Carlos',
        experience: '30年の製造エンジニアリング',
        achievement: '52倍成長の実績',
      },
      tomoo: {
        highlight: 'Tomoo',
        experience: '25年の日本製造業',
        achievement: '¥120億円以上のエグジット実績',
      },
      capabilities: 'AI技術 + グローバルエンジニアリング + 製造業の深い知見',
    },
    en: {
      title: 'Our Team',
      subtitle: '60+ Years Combined Manufacturing Leadership',
      tagline: 'World-Class Execution Capability',
      carlos: {
        highlight: 'Carlos',
        experience: '30 years manufacturing engineering',
        achievement: '52× growth achievement',
      },
      tomoo: {
        highlight: 'Tomoo',
        experience: '25 years Japanese manufacturing',
        achievement: '¥12B+ exit portfolio',
      },
      capabilities: 'AI Technology + Global Engineering + Deep Manufacturing Expertise',
    },
  };

  const text = content[lang];

  return (
    <section className="team-hero">
      <div className="team-hero-container">
        <div className="team-hero-content">
          <h1 className="team-hero-title">{text.title}</h1>
          <h2 className="team-hero-subtitle">{text.subtitle}</h2>
          <p className="team-hero-tagline">{text.tagline}</p>

          <div className="team-hero-highlights">
            <div className="founder-highlight">
              <span className="founder-name">{text.carlos.highlight}:</span>{' '}
              <span className="founder-experience">{text.carlos.experience}</span>
              <span className="separator">|</span>
              <span className="founder-achievement">{text.carlos.achievement}</span>
            </div>
            <div className="founder-highlight">
              <span className="founder-name">{text.tomoo.highlight}:</span>{' '}
              <span className="founder-experience">{text.tomoo.experience}</span>
              <span className="separator">|</span>
              <span className="founder-achievement">{text.tomoo.achievement}</span>
            </div>
          </div>

          <div className="team-hero-capabilities">
            {text.capabilities}
          </div>
        </div>

        {/* Visual Stats */}
        <div className="team-hero-stats">
          <div className="stat-card">
            <div className="stat-number">60+</div>
            <div className="stat-label">
              {lang === 'ja' ? '年の統合経験' : 'Years Combined Experience'}
            </div>
          </div>
          <div className="stat-card highlight">
            <div className="stat-number">52×</div>
            <div className="stat-label">
              {lang === 'ja' ? '成長実績' : 'Growth Achievement'}
            </div>
          </div>
          <div className="stat-card highlight">
            <div className="stat-number">¥12B+</div>
            <div className="stat-label">
              {lang === 'ja' ? 'エグジット実績' : 'Exit Portfolio'}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TeamHero;
