'use client';

import React from 'react';
import Link from 'next/link';
import './AboutCTA.css';

interface AboutCTAProps {
  lang: 'ja' | 'en';
}

const AboutCTA: React.FC<AboutCTAProps> = ({ lang }) => {
  const content = {
    ja: {
      title: '一緒に製造業の未来を創りませんか',
      subtitle: 'AI駆動の製造業変革について、無料相談をご利用ください',
      primaryButton: 'お問い合わせ',
      secondaryButton: 'ケーススタディを見る',
      contactLink: '/contact',
      caseStudiesLink: '/about/case-studies',
    },
    en: {
      title: 'Ready to Reduce Defects and Lower Costs?',
      subtitle: 'Get a free consultation on AI-driven manufacturing improvements',
      primaryButton: 'Contact Us',
      secondaryButton: 'View Case Studies',
      contactLink: '/en/contact',
      caseStudiesLink: '/en/about/case-studies',
    },
  };

  const text = content[lang];

  return (
    <section className="about-cta">
      <div className="about-cta-container">
        <h2 className="about-cta-title">{text.title}</h2>
        <p className="about-cta-subtitle">{text.subtitle}</p>

        <div className="about-cta-buttons">
          <Link href={text.contactLink} className="cta-button primary">
            {text.primaryButton}
          </Link>
          <Link href={text.caseStudiesLink} className="cta-button secondary">
            {text.secondaryButton}
          </Link>
        </div>
      </div>
    </section>
  );
};

export default AboutCTA;
