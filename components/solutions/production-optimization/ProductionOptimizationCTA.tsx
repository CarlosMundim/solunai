'use client';

import React from 'react';
import Link from 'next/link';
import './ProductionOptimizationCTA.css';

interface ProductionOptimizationCTAProps {
  lang: 'ja' | 'en';
}

const ProductionOptimizationCTA: React.FC<ProductionOptimizationCTAProps> = ({ lang }) => {
  const content = {
    ja: {
      heading: 'AIとIoTで実現する',
      headingHighlight: '全体最適化',
      description: '部分最適から全体最適へ。リアルタイムデータに基づく生産管理で、工場全体のパフォーマンスを最大化します。まずは無料で現場診断を実施します。',
      button: '無料相談を申し込む',
      link: '/contact'
    },
    en: {
      heading: 'Achieve Total Optimization',
      headingHighlight: 'with AI and IoT',
      description: "Move from local to global optimization. Real-time data-driven production management maximizes your entire factory's performance. Start with a free shop floor assessment.",
      button: 'Schedule Free Consultation',
      link: '/en/contact'
    }
  };

  const t = content[lang];

  return (
    <section className="po-cta">
      <div className="po-cta-container">
        <div className="po-cta-grid">
          {/* Left Column - Heading Only */}
          <div className="po-cta-left">
            <h2 className="po-cta-heading">
              {t.heading}
              <br />
              <span className="po-cta-heading-highlight">{t.headingHighlight}</span>
            </h2>
          </div>

          {/* Right Column - Description + Button */}
          <div className="po-cta-right">
            <p className="po-cta-description">{t.description}</p>
            <Link href={t.link} className="po-cta-button">
              {t.button}
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProductionOptimizationCTA;
