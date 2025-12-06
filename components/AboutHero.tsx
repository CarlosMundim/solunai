'use client';

import './AboutHero.css';

interface AboutHeroProps {
  lang: 'ja' | 'en';
}

export default function AboutHero({ lang }: AboutHeroProps) {
  const content = {
    ja: {
      label: '会社概要',
      headline: 'ソルナイについて',
      tagline: '静かに、確実に。現場に寄り添うAIを。',
      subheadline: 'ソルナイ株式会社は、日本の職場文化を理解し、誤解を生まない「静かなAI」を開発する企業です。',
      langSwitch: 'English',
      langHref: '/en/about',
    },
    en: {
      label: 'About Us',
      headline: 'About Solunai',
      tagline: 'Quiet, dependable AI for real workplaces.',
      subheadline: 'Solunai builds AI that fits Japanese communication and work culture, supporting people gently without disruption.',
      langSwitch: '日本語ページへ',
      langHref: '/about',
    },
  };

  const c = content[lang];

  return (
    <section className="about-hero-section" aria-label={c.label}>
      <div className="about-hero-container">
        <div
          className="about-hero-background"
          style={{
            backgroundImage: 'url(/images/solunai-consultation.jpg)',
          }}
        />
        <div className="about-hero-overlay" />
      </div>

      <div className="about-hero-lang-switch">
        <a href={c.langHref} className="about-hero-lang-link">
          {c.langSwitch}
        </a>
      </div>

      <div className="about-hero-content-wrapper">
        <div className="about-hero-content">
          <div className="about-hero-label">
            <div className="about-hero-label-dot" />
            <span className="about-hero-label-text">{c.label}</span>
          </div>
          <h1 className="about-hero-headline">{c.headline}</h1>
          <p className="about-hero-tagline">{c.tagline}</p>
          <p className="about-hero-subheadline">{c.subheadline}</p>
        </div>
      </div>
    </section>
  );
}
