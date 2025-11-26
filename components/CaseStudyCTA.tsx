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
      heading: 'あなたの製造業も変革しませんか？',
      subheading: '無料相談で以下をご提供',
      benefits: [
        '60分の製造業診断',
        'カスタムROI予測',
        '技術準備評価',
        '予備的な変革ロードマップ'
      ],
      ctaButton: '無料相談を予約',
      ctaLink: '#contact'
    },
    en: {
      heading: 'Get Similar Results for Your Factory?',
      subheading: 'Free consultation includes',
      benefits: [
        '60-minute manufacturing assessment',
        'Custom ROI projection',
        'Technology readiness evaluation',
        'Implementation roadmap'
      ],
      ctaButton: 'Schedule Free Consultation',
      ctaLink: '#contact'
    }
  };

  const currentContent = content[lang];

  return (
    <section className="case-study-cta">
      <div className="cta-container">
        <div className="cta-content">
          <h2 className="cta-heading">{currentContent.heading}</h2>
          <p className="cta-subheading">{currentContent.subheading}</p>

          <ul className="cta-benefits">
            {currentContent.benefits.map((benefit, index) => (
              <li key={index}>{benefit}</li>
            ))}
          </ul>

          <Link href={currentContent.ctaLink} className="cta-button">
            {currentContent.ctaButton}
          </Link>
        </div>
      </div>
    </section>
  );
};

export default CaseStudyCTA;
