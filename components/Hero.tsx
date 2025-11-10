'use client';

import React from 'react';
import './Hero.css';

interface HeroProps {
  lang: 'ja' | 'en';
}

const Hero: React.FC<HeroProps> = ({ lang }) => {
  const content = {
    ja: {
      headline: {
        line1: '日本の製造業危機を解決する',
        line2: 'AI優先ビジネスモデル'
      },
      subheadline: '12人の専門家 + 50-100の専門AIエージェントで運営。高効率なAI活用により、顧客に大幅なコスト削減を提供し、日本の1,100万人労働力不足を解決します。',
      trustIndicators: [
        '✓ AI優先の高効率モデル',
        '✓ 大幅なコスト削減を実現',
        '✓ 12人 + 50-100 AIエージェント'
      ],
      cta: '無料相談を予約',
      scroll: 'スクロール'
    },
    en: {
      headline: {
        line1: 'Solving Japan\'s Manufacturing Crisis',
        line2: 'AI-First Business Model'
      },
      subheadline: 'Operating with 12 human experts + 50-100 specialized AI agents. High-efficiency AI utilization delivers significant cost reduction to clients while solving Japan\'s 11 million worker shortage.',
      trustIndicators: [
        '✓ AI-first high-efficiency model',
        '✓ Significant cost reduction',
        '✓ 12 humans + 50-100 AI agents'
      ],
      cta: 'Schedule Free Consultation',
      scroll: 'scroll down'
    }
  };

  const currentContent = content[lang];

  const handleScrollDown = () => {
    const nextSection = document.getElementById('solutions-preview');
    if (nextSection) {
      nextSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="hero" className="hero-section" aria-label={lang === 'ja' ? 'ヒーローセクション' : 'Hero section'}>
      {/* Background Image */}
      <div className="hero-background">
        <img
          src="/images/Hero-manufacturing.jpg"
          alt=""
          className="hero-background-image"
          aria-hidden="true"
        />
      </div>

      {/* Dark Gradient Overlay */}
      <div className="hero-overlay"></div>

      {/* Red Ribbons */}
      <div className="hero-ribbon-top" aria-hidden="true"></div>
      <div className="hero-ribbon-right" aria-hidden="true"></div>

      {/* Hero Content */}
      <div className="hero-content">
        <h1 className="hero-headline">
          {currentContent.headline.line1}<br />
          {currentContent.headline.line2}
        </h1>

        <p className="hero-subheadline">
          {currentContent.subheadline}
        </p>

        <div className="trust-indicators" aria-label={lang === 'ja' ? '主要指標' : 'Key metrics'}>
          {currentContent.trustIndicators.map((indicator, index) => (
            <React.Fragment key={index}>
              <span>{indicator}</span>
              {index < currentContent.trustIndicators.length - 1 && (
                <span className="separator">•</span>
              )}
            </React.Fragment>
          ))}
        </div>

        <a href="#contact" className="hero-cta-button">
          {currentContent.cta}
        </a>
      </div>

      {/* Scroll Indicator */}
      <div
        className="scroll-indicator"
        onClick={handleScrollDown}
        role="button"
        tabIndex={0}
        onKeyDown={(e) => e.key === 'Enter' && handleScrollDown()}
        aria-label={lang === 'ja' ? '次のセクションへスクロール' : 'Scroll to next section'}
      >
        <span>{currentContent.scroll}</span>
        <span className="scroll-arrow">↓</span>
      </div>
    </section>
  );
};

export default Hero;
