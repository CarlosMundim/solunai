'use client';

import React from 'react';
import './AboutHero.css';

interface AboutHeroProps {
  lang: 'ja' | 'en';
}

const AboutHero: React.FC<AboutHeroProps> = ({ lang }) => {
  const content = {
    ja: {
      title: 'AIで日本の製造業を変革',
      subtitle: 'アクセスしやすいAIソリューションで製造業に革命を',
      tagline: '2030年までにすべての日本の製造業者をAI化',
    },
    en: {
      title: 'Transforming Japanese Manufacturing with AI',
      subtitle: 'Revolutionize manufacturing through accessible AI solutions',
      tagline: 'Every Japanese manufacturer AI-powered by 2030',
    },
  };

  const text = content[lang];

  return (
    <section className="about-hero">
      <div className="about-hero-background">
        <div className="about-hero-overlay"></div>
        <div className="about-hero-grid"></div>
      </div>

      <div className="about-hero-container">
        <div className="about-hero-content">
          <h1 className="about-hero-title">{text.title}</h1>
          <h2 className="about-hero-subtitle">{text.subtitle}</h2>
          <p className="about-hero-tagline">{text.tagline}</p>
        </div>

        <div className="about-hero-stats">
          <div className="stat-item">
            <div className="stat-number">2025</div>
            <div className="stat-label">
              {lang === 'ja' ? '設立年' : 'Founded'}
            </div>
          </div>
          <div className="stat-item highlight">
            <div className="stat-number">30+</div>
            <div className="stat-label">
              {lang === 'ja' ? '年の製造業経験' : 'Years Manufacturing Experience'}
            </div>
          </div>
          <div className="stat-item highlight">
            <div className="stat-number">178-295%</div>
            <div className="stat-label">
              {lang === 'ja' ? 'IRR実績' : 'IRR Case Studies'}
            </div>
          </div>
          <div className="stat-item">
            <div className="stat-number">Global</div>
            <div className="stat-label">
              {lang === 'ja' ? 'エンジニアリングネットワーク' : 'Engineering Network'}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutHero;
