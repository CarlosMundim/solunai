'use client';

import React from 'react';
import Link from 'next/link';
import './ComputerVisionCTA.css';

interface ComputerVisionCTAProps {
  lang: 'ja' | 'en';
}

const ComputerVisionCTA: React.FC<ComputerVisionCTAProps> = ({ lang }) => {
  const content = {
    ja: {
      heading: '既存カメラを活用した',
      headingHighlight: 'AI品質検査',
      description: 'カメラの入れ替えは不要。どのメーカーのカメラでも、AIによる高度な画像検査が可能に。まずは無料で現場診断と導入シミュレーションを実施します。',
      button: '無料相談を申し込む',
      link: '/contact'
    },
    en: {
      heading: 'AI Quality Inspection',
      headingHighlight: 'Using Your Existing Cameras',
      description: "No camera replacement needed. Add advanced AI inspection capabilities to any manufacturer's cameras. Start with a free shop floor assessment and implementation simulation.",
      button: 'Schedule Free Consultation',
      link: '/en/contact'
    }
  };

  const t = content[lang];

  return (
    <section className="cv-cta">
      <div className="cv-cta-container">
        <div className="cv-cta-grid">
          {/* Left Column - Heading Only */}
          <div className="cv-cta-left">
            <h2 className="cv-cta-heading">
              {t.heading}
              <br />
              <span className="cv-cta-heading-highlight">{t.headingHighlight}</span>
            </h2>
          </div>

          {/* Right Column - Description + Button */}
          <div className="cv-cta-right">
            <p className="cv-cta-description">{t.description}</p>
            <Link href={t.link} className="cv-cta-button">
              {t.button}
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ComputerVisionCTA;
