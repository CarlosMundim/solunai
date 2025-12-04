'use client';

import React, { useEffect } from 'react';
import './HeroVideo.css';

interface HeroVideoProps {
  lang: 'ja' | 'en';
}

const HeroVideo: React.FC<HeroVideoProps> = ({ lang }) => {
  const content = {
    ja: {
      headline: 'AIだけど、ちゃんと「人」を見る。',
      subheadline: '急な退職、ベテラン不足、引き継ぎが進まない――中小企業の「人」と「仕事」の悩みは、どこも同じです。Solunaiは、現場の声とデータを静かに見える化し、ムリ・ムダ・モレを減らしながら、社員が安心して働ける職場づくりをお手伝いします。',
      primaryCta: '資料請求（無料）',
      secondaryCta: 'オンライン相談を予約',
      scroll: '詳しく見る'
    },
    en: {
      headline: 'AI that pays attention to people.',
      subheadline: 'Sudden resignations, lack of experienced staff, poor handovers – these issues are common in many small and mid-sized companies. Solunai quietly makes your on-site reality visible, reduces unnecessary strain, and helps you build a workplace where employees can work with peace of mind.',
      primaryCta: 'Request Information (Free)',
      secondaryCta: 'Book Online Consultation',
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
            backgroundImage: 'url(/images/solunai-hero-desktop.jpg)',
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
