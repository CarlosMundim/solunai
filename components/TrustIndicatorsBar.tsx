'use client';

import React from 'react';
import './TrustIndicatorsBar.css';

interface TrustIndicatorsBarProps {
  lang: 'ja' | 'en';
}

const TrustIndicatorsBar: React.FC<TrustIndicatorsBarProps> = ({ lang }) => {
  const content = {
    ja: {
      indicators: [
        {
          label: 'ムリ・ムダ削減',
          title: 'ムリ・ムダ削減をサポート',
          subtitle: '小さな改善をコツコツ積み上げる仕組みづくり'
        },
        {
          label: '知恵の見える化',
          title: 'ベテランの知恵を「見える化」',
          subtitle: '属人化したノウハウを、次の世代へつなぐ'
        },
        {
          label: '現場の声',
          title: '現場の声をそのまま経営に',
          subtitle: '日報・会議・ヒアリングを、分かりやすく整理'
        },
        {
          label: '簡単導入',
          title: '難しいITは不要',
          subtitle: '既存のPC・環境から少しずつ導入可能'
        }
      ],
      expandedText: ''
    },
    en: {
      indicators: [
        {
          label: 'REDUCE WASTE',
          title: 'Support to reduce overwork and waste',
          subtitle: 'Build a structure for steady, small improvements'
        },
        {
          label: 'KNOWLEDGE',
          title: 'Make veteran know-how visible',
          subtitle: 'Pass individual skills on to the next generation'
        },
        {
          label: 'REAL VOICE',
          title: 'Bring real voice of workplace to management',
          subtitle: 'Turn reports and meetings into clear insight'
        },
        {
          label: 'EASY START',
          title: 'No complex IT required',
          subtitle: 'Start step by step with existing PCs and environment'
        }
      ],
      expandedText: ''
    }
  };

  const currentContent = content[lang];

  return (
    <section className="trust-indicators-section">
      <div className="trust-indicators-container">
        <div className="trust-indicators-grid">
          {currentContent.indicators.map((indicator, index) => (
            <div key={index} className="trust-indicator-card">
              <span className="indicator-label">{indicator.label}</span>
              <h3 className="indicator-title">{indicator.title}</h3>
              <p className="indicator-subtitle">{indicator.subtitle}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TrustIndicatorsBar;
