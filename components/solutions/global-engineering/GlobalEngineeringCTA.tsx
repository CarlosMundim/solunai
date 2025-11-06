'use client';

import React from 'react';
import Link from 'next/link';
import './GlobalEngineeringCTA.css';

interface GlobalEngineeringCTAProps {
  lang: 'ja' | 'en';
}

const GlobalEngineeringCTA: React.FC<GlobalEngineeringCTAProps> = ({ lang }) => {
  const content = {
    ja: {
      heading: '世界標準の',
      headingHighlight: 'エンジニアリング人材',
      description: '品質を落とさずコスト削減30-50%。グローバルな優秀人材を2週間でチームに。日本品質×海外コスト。まずは無料相談で最適な体制をご提案します。',
      button: '無料相談を申し込む',
      link: '/contact'
    },
    en: {
      heading: 'World-Class',
      headingHighlight: 'Engineering Talent',
      description: 'Reduce costs 30-50% without compromising quality. Add exceptional global talent to your team within 2 weeks. Japanese quality × Global cost. Start with a free consultation.',
      button: 'Schedule Free Consultation',
      link: '/en/contact'
    }
  };

  const t = content[lang];

  return (
    <section className="ge-cta">
      <div className="ge-cta-container">
        <div className="ge-cta-grid">
          {/* Left Column - Heading Only */}
          <div className="ge-cta-left">
            <h2 className="ge-cta-heading">
              {t.heading}
              <br />
              <span className="ge-cta-heading-highlight">{t.headingHighlight}</span>
            </h2>
          </div>

          {/* Right Column - Description + Button */}
          <div className="ge-cta-right">
            <p className="ge-cta-description">{t.description}</p>
            <Link href={t.link} className="ge-cta-button">
              {t.button}
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default GlobalEngineeringCTA;
