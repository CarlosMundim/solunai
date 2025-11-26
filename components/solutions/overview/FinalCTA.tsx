'use client';

import React from 'react';
import Link from 'next/link';
import './FinalCTA.css';

interface FinalCTAProps {
  lang: 'ja' | 'en';
}

const FinalCTA: React.FC<FinalCTAProps> = ({ lang }) => {
  const content = {
    ja: {
      heading: '製造業の課題、',
      headingHighlight: '無料で診断します',
      description: '30分の無料診断で、御社工場のAI活用可能性をお伝えします',
      buttonText: '無料診断を予約',
      buttonLink: '/contact',
      secondaryButtonText: 'お問い合わせ',
      secondaryButtonLink: '/contact'
    },
    en: {
      heading: 'Free',
      headingHighlight: 'Manufacturing Assessment',
      description: 'In 30 minutes, we\'ll identify AI opportunities for your factory',
      buttonText: 'Schedule Free Assessment',
      buttonLink: '/en/contact',
      secondaryButtonText: 'Contact Us',
      secondaryButtonLink: '/en/contact'
    }
  };

  const t = content[lang];

  return (
    <section className="final-cta">
      <div className="final-cta-container">
        <div className="final-cta-grid">
          {/* Left Column - Heading Only */}
          <div className="final-cta-left">
            <h2 className="final-cta-heading">
              {t.heading}
              <br />
              <span className="final-cta-heading-highlight">{t.headingHighlight}</span>
            </h2>
          </div>

          {/* Right Column - Description + Buttons */}
          <div className="final-cta-right">
            <p className="final-cta-description">{t.description}</p>
            <div className="final-cta-buttons">
              <Link href={t.buttonLink} className="final-cta-button primary">
                {t.buttonText}
              </Link>
              <Link href={t.secondaryButtonLink} className="final-cta-button secondary">
                {t.secondaryButtonText}
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FinalCTA;
