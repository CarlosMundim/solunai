'use client';

import React from 'react';
import './HeroVideo.css';

interface HeroVideoProps {
  lang: 'ja' | 'en';
}

const HeroVideo: React.FC<HeroVideoProps> = ({ lang }) => {
  const content = {
    ja: {
      headline: '日本の製造業を\nAIで革新する',
      subheadline: 'デジタルツイン技術とグローバルエンジニアリングで、製造業の完全な変革を数週間で実現。実証済みのAIソリューションで生産性を最大化します。',
      scroll: 'スクロール'
    },
    en: {
      headline: 'AI-Powered Manufacturing\nInnovation for Japan',
      subheadline: 'Complete manufacturing transformation in weeks with Digital Twin technology and global engineering expertise. Maximize productivity with proven AI solutions.',
      scroll: 'Scroll'
    }
  };

  const currentContent = content[lang];

  return (
    <section className="hero-video-section" aria-label={lang === 'ja' ? 'ヒーロー' : 'Hero'}>
      {/* Video Background */}
      <div className="hero-video-container">
        <video
          autoPlay
          loop
          muted
          playsInline
          className="hero-video"
          poster="/images/hero-poster.jpg"
        >
          <source src="/videos/hero-production-line.mp4" type="video/mp4" />
        </video>
        <div className="hero-video-overlay"></div>
      </div>

      {/* Content */}
      <div className="hero-content-wrapper">
        <div className="hero-content">
          <h1 className="hero-headline">
            {currentContent.headline.split('\n').map((line, i) => (
              <React.Fragment key={i}>
                {line}
                {i < currentContent.headline.split('\n').length - 1 && <br />}
              </React.Fragment>
            ))}
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
