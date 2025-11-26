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
        line1: '製造業の現場課題を、',
        line2: 'AIで解決'
      },
      subheadline: '人手不足、品質問題、設備の突然故障、コスト増大。製造業が直面する現実的な課題に、実績あるAI技術で対応します。',
      trustIndicators: [
        '✓ 30%のコスト削減実績',
        '✓ 95%の欠陥検出率',
        '✓ 60年以上の製造業経験'
      ],
      cta: '無料診断を予約',
      ctaSecondary: 'ソリューションを見る',
      scroll: 'スクロール'
    },
    en: {
      headline: {
        line1: 'Solving Manufacturing Challenges',
        line2: 'with AI'
      },
      subheadline: 'Labor shortage, quality issues, equipment downtime, rising costs. We address real manufacturing challenges with proven AI solutions.',
      trustIndicators: [
        '✓ 30% cost reduction achieved',
        '✓ 95% defect detection rate',
        '✓ 60+ years manufacturing experience'
      ],
      cta: 'Schedule Free Assessment',
      ctaSecondary: 'View Solutions',
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

        <div className="hero-cta-group">
          <a href="#contact" className="hero-cta-button hero-cta-primary">
            {currentContent.cta}
          </a>
          <a href="#solutions-preview" className="hero-cta-button hero-cta-secondary">
            {currentContent.ctaSecondary}
          </a>
        </div>
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
