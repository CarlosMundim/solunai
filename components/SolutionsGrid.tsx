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
      sectionTitle: '産業領域に特化した\n5つのAIソリューション',
      sectionDescription: '医療教育から企業研修まで、日本の組織文化を理解した対話型AIで課題を解決'
    },
    en: {
      sectionBadge: 'Solutions',
      sectionTitle: '5 AI Solutions\nfor Key Industries',
      sectionDescription: 'From medical education to corporate training, dialogue-based AI that understands Japanese organisational culture'
    }
  };

  const solutions: Solution[] = [
    {
      number: '01',
      titleJa: '医療・医学教育',
      titleEn: 'Healthcare & Medical Education',
      metric1Ja: 'OSCE準備・医療面接の練習',
      metric1En: 'OSCE prep & patient interview practice',
      metric2Ja: '臨床コミュニケーション力の育成',
      metric2En: 'Clinical communication training',
      ctaJa: '詳しく見る',
      ctaEn: 'Learn More',
      link: '/solutions/healthcare'
    },
    {
      number: '02',
      titleJa: '看護・介護教育',
      titleEn: 'Nursing & Caregiver Training',
      metric1Ja: '多様な患者シナリオの再現',
      metric1En: 'Diverse patient scenario simulation',
      metric2Ja: '看護現場での対話力向上',
      metric2En: 'Communication skills for care',
      ctaJa: '詳しく見る',
      ctaEn: 'Learn More',
      link: '/solutions/nursing'
    },
    {
      number: '03',
      titleJa: '企業研修',
      titleEn: 'Corporate Communication Training',
      metric1Ja: '業務固有のロールプレイ',
      metric1En: 'Customised workplace roleplay',
      metric2Ja: '行動変容につながる研修',
      metric2En: 'Training that drives behavioural change',
      ctaJa: '詳しく見る',
      ctaEn: 'Learn More',
      link: '/solutions/corporate-training'
    },
    {
      number: '04',
      titleJa: '業務自動化',
      titleEn: 'Enterprise Workflow Automation',
      metric1Ja: '業務フローを理解するAI',
      metric1En: 'AI that understands your workflows',
      metric2Ja: '国内データ管理・ガバナンス対応',
      metric2En: 'Domestic data control & governance',
      ctaJa: '詳しく見る',
      ctaEn: 'Learn More',
      link: '/solutions/enterprise-automation'
    },
    {
      number: '05',
      titleJa: '多文化対応',
      titleEn: 'Cross-Cultural Workforce',
      metric1Ja: '日本文化を理解した対話AI',
      metric1En: 'AI grounded in Japanese culture',
      metric2Ja: '相互理解を促すロールプレイ',
      metric2En: 'Roleplay for mutual understanding',
      ctaJa: '詳しく見る',
      ctaEn: 'Learn More',
      link: '/solutions/cross-cultural'
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
