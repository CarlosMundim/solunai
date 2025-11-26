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
      title: '製造業の課題、無料で診断します',
      subtitle: '30分の無料診断で、御社工場のAI活用可能性をお伝えします',
      primaryButton: '無料診断を予約',
      secondaryButton: 'お問い合わせ',
      contactLink: '/contact',
      caseStudiesLink: '/contact',
    },
    en: {
      title: 'Free Manufacturing Assessment',
      subtitle: 'In 30 minutes, we\'ll identify AI opportunities for your factory',
      primaryButton: 'Schedule Free Assessment',
      secondaryButton: 'Contact Us',
      contactLink: '/en/contact',
      caseStudiesLink: '/en/contact',
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
