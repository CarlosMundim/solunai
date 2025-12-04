'use client';

import React from 'react';
import Image from 'next/image';
import './SolutionsGrid.css';

interface SolutionsGridProps {
  lang: 'ja' | 'en';
}

interface Solution {
  numberJa: string;
  numberEn: string;
  titleJa: string;
  titleEn: string;
  metric1Ja: string;
  metric1En: string;
  metric2Ja: string;
  metric2En: string;
  ctaJa: string;
  ctaEn: string;
  link: string;
}

const SolutionsGrid: React.FC<SolutionsGridProps> = ({ lang }) => {
  const content = {
    ja: {
      sectionBadge: 'サービス紹介',
      sectionTitle: 'Solunaiができること',
      sectionDescription: '現場に寄り添い、少しずつ導入できるAIサポート'
    },
    en: {
      sectionBadge: 'Our Services',
      sectionTitle: 'What Solunai Can Do',
      sectionDescription: 'AI support that stays close to your workplace and grows step by step'
    }
  };

  const solutions: Solution[] = [
    {
      numberJa: 'ムリ・ムダ削減',
      numberEn: 'Reduce Waste',
      titleJa: 'ムリ・ムダ削減をサポート',
      titleEn: 'Reducing Unreasonableness and Waste',
      metric1Ja: '小さな改善をコツコツ積み上げる仕組みづくり',
      metric1En: 'Creating systems for steady, incremental improvements',
      metric2Ja: '',
      metric2En: '',
      ctaJa: '詳しく見る',
      ctaEn: 'Learn More',
      link: '/services'
    },
    {
      numberJa: '知恵の見える化',
      numberEn: 'Visualize Expertise',
      titleJa: 'ベテランの知恵を「見える化」',
      titleEn: 'Visualizing Veteran Wisdom',
      metric1Ja: '属人化したノウハウを、次の世代へつなぐ',
      metric1En: 'Passing on personal know-how to the next generation',
      metric2Ja: '',
      metric2En: '',
      ctaJa: '詳しく見る',
      ctaEn: 'Learn More',
      link: '/services'
    },
    {
      numberJa: '現場の声',
      numberEn: 'Field Insights',
      titleJa: '現場の声をそのまま経営に',
      titleEn: 'Voices from the Field to Management',
      metric1Ja: '日報・会議・ヒアリングを、分かりやすく整理',
      metric1En: 'Organize daily reports, meetings, and hearings clearly',
      metric2Ja: '',
      metric2En: '',
      ctaJa: '詳しく見る',
      ctaEn: 'Learn More',
      link: '/services'
    },
    {
      numberJa: '簡単導入',
      numberEn: 'Easy Setup',
      titleJa: '難しいITは不要',
      titleEn: 'No Complicated IT Required',
      metric1Ja: '既存のPC・環境から少しずつ導入可能',
      metric1En: 'Can be introduced gradually from existing PCs',
      metric2Ja: '',
      metric2En: '',
      ctaJa: '詳しく見る',
      ctaEn: 'Learn More',
      link: '/services'
    }
  ];

  const currentContent = content[lang];

  return (
    <section className="solutions-grid-section" aria-label={currentContent.sectionBadge}>
      {/* Header Section with KODA Branding */}
      <div className="solutions-grid-header">
        <div className="solutions-grid-branding">
          <Image
            src="/images/logos/emoticon.png"
            alt="SOLUNAi"
            width={120}
            height={120}
            className="solutions-grid-emoticon"
          />
        </div>
        <span className="solutions-grid-badge">{currentContent.sectionBadge}</span>
        <h2 className="solutions-grid-title">
          {currentContent.sectionTitle.split('\n').map((line, index) => (
            <React.Fragment key={index}>
              {line}
              {index < currentContent.sectionTitle.split('\n').length - 1 && <br />}
            </React.Fragment>
          ))}
        </h2>
        <p className="solutions-grid-description">{currentContent.sectionDescription}</p>
      </div>

      {/* Solutions Grid */}
      <div className="solutions-grid-container">
        {solutions.map((solution, index) => (
          <div key={index} className="solution-card">
            <div className="solution-card-content">
              <div className="solution-number">{lang === 'ja' ? solution.numberJa : solution.numberEn}</div>
              <h3 className="solution-title">
                {lang === 'ja' ? solution.titleJa : solution.titleEn}
              </h3>
              <div className="solution-metrics">
                <div className="solution-metric">
                  <span className="metric-text">
                    {lang === 'ja' ? solution.metric1Ja : solution.metric1En}
                  </span>
                </div>
                {(lang === 'ja' ? solution.metric2Ja : solution.metric2En) && (
                  <div className="solution-metric">
                    <span className="metric-text">
                      {lang === 'ja' ? solution.metric2Ja : solution.metric2En}
                    </span>
                  </div>
                )}
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default SolutionsGrid;
