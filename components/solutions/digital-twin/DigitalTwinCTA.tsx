'use client';

import React from 'react';
import Link from 'next/link';
import './DigitalTwinCTA.css';

interface DigitalTwinCTAProps {
  lang: 'ja' | 'en';
}

const DigitalTwinCTA: React.FC<DigitalTwinCTAProps> = ({ lang }) => {
  const content = {
    ja: {
      heading: '既存設備を活かした',
      headingHighlight: 'デジタルツイン導入',
      description: '設備の入れ替えは不要。Siemens、PTC、Dassaultなど大手ベンダーの技術を、中小企業でも導入可能な価格で。まずは無料で現場診断と導入シミュレーションを実施します。',
      button: '無料相談を申し込む',
      link: '/contact'
    },
    en: {
      heading: 'Digital Twin Integration',
      headingHighlight: 'Using Your Existing Equipment',
      description: "No equipment replacement needed. Access enterprise technology from Siemens, PTC, and Dassault at SME-friendly pricing. Start with a free shop floor assessment and implementation simulation.",
      button: 'Schedule Free Consultation',
      link: '/en/contact'
    }
  };

  const t = content[lang];

  return (
    <section className="digital-twin-cta">
      <div className="digital-twin-cta-container">
        <div className="digital-twin-cta-grid">
          {/* Left Column - Heading Only */}
          <div className="digital-twin-cta-left">
            <h2 className="digital-twin-cta-heading">
              {t.heading}
              <br />
              <span className="digital-twin-cta-heading-highlight">{t.headingHighlight}</span>
            </h2>
          </div>

          {/* Right Column - Description + Button */}
          <div className="digital-twin-cta-right">
            <p className="digital-twin-cta-description">{t.description}</p>
            <Link href={t.link} className="digital-twin-cta-button">
              {t.button}
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default DigitalTwinCTA;
