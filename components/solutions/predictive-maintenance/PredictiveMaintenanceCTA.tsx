'use client';

import React from 'react';
import Link from 'next/link';
import './PredictiveMaintenanceCTA.css';

interface PredictiveMaintenanceCTAProps {
  lang: 'ja' | 'en';
}

const PredictiveMaintenanceCTA: React.FC<PredictiveMaintenanceCTAProps> = ({ lang }) => {
  const content = {
    ja: {
      heading: '故障の予測で実現する',
      headingHighlight: 'ゼロダウンタイム',
      description: 'AIが設備の異常を2週間〜1ヶ月前に予測。計画的なメンテナンスで、突発的な生産停止をゼロに。まずは無料で現場診断を実施します。',
      button: '無料相談を申し込む',
      link: '/contact'
    },
    en: {
      heading: 'Achieve Zero Downtime',
      headingHighlight: 'Through Failure Prediction',
      description: 'AI predicts equipment anomalies 2 weeks to 1 month in advance. Planned maintenance eliminates unexpected production stops. Start with a free shop floor assessment.',
      button: 'Schedule Free Consultation',
      link: '/en/contact'
    }
  };

  const t = content[lang];

  return (
    <section className="pm-cta">
      <div className="pm-cta-container">
        <div className="pm-cta-grid">
          {/* Left Column - Heading Only */}
          <div className="pm-cta-left">
            <h2 className="pm-cta-heading">
              {t.heading}
              <br />
              <span className="pm-cta-heading-highlight">{t.headingHighlight}</span>
            </h2>
          </div>

          {/* Right Column - Description + Button */}
          <div className="pm-cta-right">
            <p className="pm-cta-description">{t.description}</p>
            <Link href={t.link} className="pm-cta-button">
              {t.button}
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PredictiveMaintenanceCTA;
