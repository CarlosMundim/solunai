'use client';

import React from 'react';
import Link from 'next/link';
import './SolutionsGrid.css';

interface SolutionsGridProps {
  lang: 'ja' | 'en';
}

interface Solution {
  number: string;
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
      sectionBadge: 'ソリューション',
      sectionTitle: '製造業の課題を解決する\n4つのAIソリューション',
      sectionDescription: 'AI品質検査から予知保全まで、日本の製造業に特化した包括的なAI技術スイート'
    },
    en: {
      sectionBadge: 'Solutions',
      sectionTitle: '4 AI Solutions\nSolving Manufacturing Challenges',
      sectionDescription: 'From AI quality inspection to predictive maintenance, a comprehensive AI technology suite specialized for Japanese manufacturing'
    }
  };

  const solutions: Solution[] = [
    {
      number: '01',
      titleJa: 'AI品質検査システム',
      titleEn: 'AI Quality Inspection',
      metric1Ja: '95%+ 欠陥検出率',
      metric1En: '95%+ defect detection',
      metric2Ja: '検査時間27倍高速化',
      metric2En: '27x faster inspection',
      ctaJa: '詳細を見る',
      ctaEn: 'Learn More',
      link: '/solutions/computer-vision'
    },
    {
      number: '02',
      titleJa: '予知保全ソリューション',
      titleEn: 'Predictive Maintenance',
      metric1Ja: '48-72時間前の故障予測',
      metric1En: '48-72hr failure prediction',
      metric2Ja: 'ダウンタイム40%削減',
      metric2En: '40% downtime reduction',
      ctaJa: '詳細を見る',
      ctaEn: 'Learn More',
      link: '/solutions/predictive-maintenance'
    },
    {
      number: '03',
      titleJa: '生産最適化AI',
      titleEn: 'Production Optimization',
      metric1Ja: 'エネルギーコスト20-30%削減',
      metric1En: '20-30% energy cost reduction',
      metric2Ja: 'スループット最大化',
      metric2En: 'Throughput maximization',
      ctaJa: '詳細を見る',
      ctaEn: 'Learn More',
      link: '/solutions/production-optimization'
    },
    {
      number: '04',
      titleJa: 'グローバルエンジニアリング',
      titleEn: 'Global Engineering',
      metric1Ja: '国内採用の30-50%のコスト',
      metric1En: '30-50% of Japan hiring cost',
      metric2Ja: '2-6週間で配置',
      metric2En: '2-6 week deployment',
      ctaJa: '詳細を見る',
      ctaEn: 'Learn More',
      link: '/services/global-engineering'
    }
  ];

  const currentContent = content[lang];

  return (
    <section className="solutions-grid-section" aria-label={currentContent.sectionBadge}>
      {/* Header Section */}
      <div className="solutions-grid-header">
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
              <div className="solution-number">{solution.number}</div>
              <h3 className="solution-title">
                {lang === 'ja' ? solution.titleJa : solution.titleEn}
              </h3>
              <div className="solution-metrics">
                <div className="solution-metric">
                  <span className="metric-icon">✓</span>
                  <span className="metric-text">
                    {lang === 'ja' ? solution.metric1Ja : solution.metric1En}
                  </span>
                </div>
                <div className="solution-metric">
                  <span className="metric-icon">✓</span>
                  <span className="metric-text">
                    {lang === 'ja' ? solution.metric2Ja : solution.metric2En}
                  </span>
                </div>
              </div>
              <Link href={solution.link} className="solution-cta">
                {lang === 'ja' ? solution.ctaJa : solution.ctaEn}
                <span className="cta-arrow">→</span>
              </Link>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default SolutionsGrid;
