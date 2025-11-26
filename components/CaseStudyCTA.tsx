'use client';

import React from 'react';
import Link from 'next/link';
import './CaseStudyCTA.css';

interface CaseStudyCTAProps {
  lang: 'ja' | 'en';
}

const CaseStudyCTA: React.FC<CaseStudyCTAProps> = ({ lang }) => {
  const content = {
    ja: {
      heading: '製造業の課題、無料で診断します',
      subheading: '30分の無料診断で、御社工場のAI活用可能性をお伝えします',
      ctaButton: '無料診断を予約',
      ctaLink: '/contact',
      secondaryButton: 'お問い合わせ',
      secondaryLink: '/contact'
    },
    en: {
      heading: 'Free Manufacturing Assessment',
      subheading: 'In 30 minutes, we\'ll identify AI opportunities for your factory',
      ctaButton: 'Schedule Free Assessment',
      ctaLink: '/en/contact',
      secondaryButton: 'Contact Us',
      secondaryLink: '/en/contact'
    }
  };

  const currentContent = content[lang];

  return (
    <section className="case-study-cta">
      <div className="cta-container">
        <div className="cta-content">
          <h2 className="cta-heading">{currentContent.heading}</h2>
          <p className="cta-subheading">{currentContent.subheading}</p>

          <div className="cta-buttons">
            <Link href={currentContent.ctaLink} className="cta-button primary">
              {currentContent.ctaButton}
            </Link>
            <Link href={currentContent.secondaryLink} className="cta-button secondary">
              {currentContent.secondaryButton}
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CaseStudyCTA;
