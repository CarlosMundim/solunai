'use client';

import React, { useEffect } from 'react';
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
      headline: 'AI-Powered Manufacturing Excellence',
      subheadline: 'Digital twin technology and global engineering talent deployed in weeks. Proven results: 30-50% cost reduction, 95% quality improvement.',
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
