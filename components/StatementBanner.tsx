'use client';

import React from 'react';
import './StatementBanner.css';

interface StatementBannerProps {
  lang: 'ja' | 'en';
}

const StatementBanner: React.FC<StatementBannerProps> = ({ lang }) => {
  const content = {
    ja: {
      statement: 'データ接続から生産最適化まで\nすべてのステップにAIを'
    },
    en: {
      statement: 'AI at Every Step\nFrom Data Connection to Production Optimization'
    }
  };

  const currentContent = content[lang];

  return (
    <section className="statement-banner-section" aria-label={lang === 'ja' ? '声明' : 'Statement'}>
      <div className="statement-banner-container">
        <h2 className="statement-banner-text">
          {currentContent.statement.split('\n').map((line, i) => (
            <React.Fragment key={i}>
              {line}
              {i < currentContent.statement.split('\n').length - 1 && <br />}
            </React.Fragment>
          ))}
        </h2>
      </div>
    </section>
  );
};

export default StatementBanner;
