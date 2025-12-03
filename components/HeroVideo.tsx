'use client';

import React, { useEffect } from 'react';
import './HeroVideo.css';

interface HeroVideoProps {
  lang: 'ja' | 'en';
}

const HeroVideo: React.FC<HeroVideoProps> = ({ lang }) => {
  const content = {
    ja: {
      headline: '応用AI・カルチュラルインテリジェンス・エージェント基盤',
      subheadline: 'ソルナイ株式会社は、精度・安全性・長期運用性を重視した応用AI、エージェント基盤、カルチュラル・インテリジェンス技術を提供します。',
      primaryCta: 'お問い合わせ',
      secondaryCta: 'ソリューションを見る',
      scroll: '詳しく見る'
    },
    en: {
      headline: 'Applied AI, Cultural Intelligence & Agentic Infrastructure',
      subheadline: 'Solunai Systems develops applied AI, agentic infrastructure and cultural-intelligence platforms designed for precision, safety and long-term operational stability.',
      primaryCta: 'Contact Us',
      secondaryCta: 'Explore Solutions',
      scroll: 'Discover'
    }
  };

  const currentContent = content[lang];

  return (
    <section className="hero-video-section" aria-label={lang === 'ja' ? 'ヒーロー' : 'Hero'}>
      {/* Background Image */}
      <div className="hero-video-container">
        <div
          className="hero-background-image"
          style={{
            backgroundImage: 'url(/images/Hero-manufacturing.jpg)',
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            width: '100%',
            height: '100%'
          }}
        ></div>
        <div className="hero-video-overlay"></div>
      </div>

      {/* Content */}
      <div className="hero-content-wrapper">
        <div className="hero-content">
          <h1 className="hero-headline">
            {currentContent.headline}
          </h1>
          <p className="hero-subheadline">{currentContent.subheadline}</p>
          <div className="hero-cta-buttons">
            <a href="/contact" className="hero-cta-primary">{currentContent.primaryCta}</a>
            <a href="/solutions" className="hero-cta-secondary">{currentContent.secondaryCta}</a>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="scroll-indicator">
        <span className="scroll-text">{currentContent.scroll}</span>
        <span className="scroll-arrow">↓</span>
      </div>
    </section>
  );
};

export default HeroVideo;
