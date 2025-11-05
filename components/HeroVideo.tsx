'use client';

import React from 'react';
import './HeroVideo.css';

interface HeroVideoProps {
  lang: 'ja' | 'en';
}

const HeroVideo: React.FC<HeroVideoProps> = ({ lang }) => {
  const content = {
    ja: {
      headline: '日本の製造業をAIで革新する',
      subheadline: 'デジタルツイン技術とグローバルエンジニアリングで、製造業の完全な変革を数週間で実現。実証済みのAIソリューションで生産性を最大化します。',
      scroll: 'スクロール'
    },
    en: {
      headline: 'Revolutionizing Japanese Manufacturing with AI',
      subheadline: 'Completely transform your manufacturing operations in weeks with digital twin technology and global engineering. Maximize productivity with proven AI solutions.',
      scroll: 'Scroll'
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
