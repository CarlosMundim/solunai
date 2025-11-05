'use client';

import React from 'react';
import './TeamHero.css';

interface TeamHeroProps {
  lang: 'ja' | 'en';
}

const TeamHero: React.FC<TeamHeroProps> = ({ lang }) => {
  const content = {
    ja: {
      title: 'Solunaiを支える専門家',
      subtitle: '製造業とAIの深い専門知識',
      tagline: '世界クラスの実行能力',
      carlos: {
        highlight: 'Carlos Magno Freitas Mundim',
        experience: 'CTO - 30年以上の製造業・自動化経験',
        achievement: '178-295% IRR実績',
      },
      tomoo: {
        highlight: 'Tomoo Hara',
        experience: 'マネージングディレクター - 日本製造業のベテラン',
        achievement: '戦略的ビジネス開発',
      },
      jeanette: {
        highlight: 'Jeanette van Niekerk',
        experience: 'オペレーションディレクター - プロジェクト管理',
        achievement: '国際オペレーション調整',
      },
      capabilities: 'AI技術 + グローバルエンジニアリング + 製造業の深い知見',
    },
    en: {
      title: 'Meet the Experts Behind Solunai',
      subtitle: 'Deep expertise in manufacturing and AI',
      tagline: 'World-Class Execution Capability',
      carlos: {
        highlight: 'Carlos Magno Freitas Mundim',
        experience: 'CTO - 30+ years manufacturing & automation',
        achievement: '178-295% IRR case studies',
      },
      tomoo: {
        highlight: 'Tomoo Hara',
        experience: 'Managing Director - Japanese manufacturing veteran',
        achievement: 'Strategic business development',
      },
      jeanette: {
        highlight: 'Jeanette van Niekerk',
        experience: 'Operations Director - Project management',
        achievement: 'International operations coordination',
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
            <div className="founder-highlight">
              <span className="founder-name">{text.jeanette.highlight}:</span>{' '}
              <span className="founder-experience">{text.jeanette.experience}</span>
              <span className="separator">|</span>
              <span className="founder-achievement">{text.jeanette.achievement}</span>
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
