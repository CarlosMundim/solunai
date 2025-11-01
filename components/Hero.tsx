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
        line1: '完全な製造業デジタル変革',
        line2: 'AIソリューション + グローバルエンジニアリング'
      },
      subheadline: 'デジタルツインから完全なEPC・製造サービスまで—ターンキーソリューションを提供。世界クラスのエンジニア人材を数週間で配備可能。実証済みAIでコスト30-50%削減、品質95%改善、4-10ヶ月でROI実現。',
      trustIndicators: [
        '✓ 時間削減90%',
        '✓ 展開速度52倍',
        '✓ 国際パートナーシップ（EU）'
      ],
      cta: '無料相談を予約',
      scroll: 'スクロール'
    },
    en: {
      headline: {
        line1: 'Complete Manufacturing Transformation',
        line2: 'AI Solutions + Global Engineering Expertise'
      },
      subheadline: 'From AI-powered digital twins to complete EPC and fabrication services—we deliver turnkey manufacturing transformation. Access world-class engineering talent deployed in weeks, plus proven AI solutions that reduce costs 30-50%, improve quality 95%, and deliver ROI in 4-10 months.',
      trustIndicators: [
        '✓ 90% time reduction',
        '✓ 52× faster deployment',
        '✓ International partnerships (EU)'
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
