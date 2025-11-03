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
      heading: 'データシグナルから',
      headingHighlight: '産業変革へ',
      description: 'Solunaiにより、製造業はAIを活用してあらゆるシグナルをキャプチャし、意味のあるものにし、リアルタイムで行動します。工場全体、企業全体、そして未来へと。',
      buttonText: 'お問い合わせ',
      buttonLink: '/contact'
    },
    en: {
      heading: 'From data signals',
      headingHighlight: 'to industrial transformation',
      description: 'With Solunai, manufacturers use AI to capture every signal, make it meaningful, and act in real time — across plants, across enterprises, and into the future.',
      buttonText: 'Contact Us',
      buttonLink: '/en/contact'
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

          {/* Right Column - Description + Button */}
          <div className="final-cta-right">
            <p className="final-cta-description">{t.description}</p>
            <Link href={t.buttonLink} className="final-cta-button">
              {t.buttonText}
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FinalCTA;
