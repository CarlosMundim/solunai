'use client';

import React from 'react';
import './FBMHighlight.css';

interface FBMHighlightProps {
  lang: 'ja' | 'en';
}

const FBMHighlight: React.FC<FBMHighlightProps> = ({ lang }) => {
  const content = {
    ja: {
      badge: '国際事例 ✓',
      title: '導入事例：FBM Hudson Italiana',
      subtitle: 'イタリア・UAEのHVAC製造業大手のデジタル変革',
      companyTitle: '企業概要',
      companyDescription: '創業84年、熱交換器・エアクーラー製造\n石油・ガス、LNG、精製プラント向け',
      challengesTitle: '課題',
      challenges: [
        '見積作成：手動で10分以上/件',
        'エンジニアリング：14-21日の納期',
        '品質検査：サンプリングのみ（5-10%）'
      ],
      solutionTitle: 'Solunaiソリューション',
      solutions: [
        'AI見積システム（NVIDIA Omniverse + Claude AI）',
        'デジタルツイン基盤（ANSYS Twin Builder）',
        'コンピュータビジョン品質管理'
      ],
      resultsTitle: '成果',
      results: [
        {
          icon: '⏱️',
          metric: '見積時間：14-21日 → 48-72時間',
          detail: '85%短縮'
        },
        {
          icon: '🚀',
          metric: '生産コスト削減',
          detail: '15-25%削減見込み'
        },
        {
          icon: '✅',
          metric: '技術スループット',
          detail: '200%向上'
        },
        {
          icon: '💰',
          metric: '契約開始',
          detail: '2025年10月締結'
        }
      ],
      contractTitle: '契約期間',
      contractValue: '24ヶ月プロジェクト',
      contractDuration: '2025年10月開始',
      cta: '詳細な事例を見る'
    },
    en: {
      badge: 'International Client ✓',
      title: 'Case Study: FBM Hudson Italiana',
      subtitle: 'Digital Transformation for Leading HVAC Manufacturer (Italy/UAE)',
      companyTitle: 'Company Profile',
      companyDescription: '84-year heritage, heat exchangers and air coolers\nOil & Gas, LNG, refinery plants',
      challengesTitle: 'Challenges',
      challenges: [
        'Quotation: Manual, 10+ minutes per quote',
        'Engineering: 14-21 day turnaround',
        'Quality inspection: Sampling only (5-10%)'
      ],
      solutionTitle: 'Solunai Solution',
      solutions: [
        'AI Quotation System (NVIDIA Omniverse + Claude AI)',
        'Digital Twin Infrastructure (ANSYS Twin Builder)',
        'Computer Vision Quality Control'
      ],
      resultsTitle: 'Results Achieved',
      results: [
        {
          icon: '⏱️',
          metric: 'Quote time: 14-21 days → 48-72 hours',
          detail: '85% faster'
        },
        {
          icon: '🚀',
          metric: 'Production cost reduction',
          detail: '15-25% projected'
        },
        {
          icon: '✅',
          metric: 'Technical throughput',
          detail: '200% increase'
        },
        {
          icon: '💰',
          metric: 'Contract signed',
          detail: 'October 2025'
        }
      ],
      contractTitle: 'Project Duration',
      contractValue: '24-month project',
      contractDuration: 'Started October 2025',
      cta: 'View full case study'
    }
  };

  const currentContent = content[lang];

  return (
    <section
      id="fbm-highlight"
      className="fbm-highlight-section"
      aria-label={lang === 'ja' ? 'FBM事例紹介' : 'FBM Case Study'}
    >
      {/* Background Image with Overlay */}
      <div className="fbm-background">
        <img
          src="/images/Hero_Car_02B.jpg"
          alt=""
          className="fbm-background-image"
          aria-hidden="true"
        />
        <div className="fbm-overlay"></div>
      </div>

      <div className="fbm-container">
        {/* Badge */}
        <div className="fbm-badge">{currentContent.badge}</div>

        {/* Header */}
        <div className="fbm-header">
          <h2 className="fbm-title">{currentContent.title}</h2>
          <p className="fbm-subtitle">{currentContent.subtitle}</p>
        </div>

        {/* Content Grid */}
        <div className="fbm-content-grid">
          {/* Company Profile */}
          <div className="fbm-card">
            <h3 className="fbm-card-title">{currentContent.companyTitle}</h3>
            <p className="fbm-card-text">{currentContent.companyDescription}</p>
          </div>

          {/* Challenges */}
          <div className="fbm-card">
            <h3 className="fbm-card-title">{currentContent.challengesTitle}</h3>
            <ul className="fbm-list" role="list">
              {currentContent.challenges.map((challenge, index) => (
                <li key={index}>{challenge}</li>
              ))}
            </ul>
          </div>

          {/* Solutions */}
          <div className="fbm-card">
            <h3 className="fbm-card-title">{currentContent.solutionTitle}</h3>
            <ul className="fbm-list solution-list" role="list">
              {currentContent.solutions.map((solution, index) => (
                <li key={index}>
                  <span className="check" aria-hidden="true">✓</span> {solution}
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Results Grid */}
        <div className="fbm-results-section">
          <h3 className="fbm-results-title">{currentContent.resultsTitle}</h3>
          <div className="fbm-results-grid">
            {currentContent.results.map((result, index) => (
              <div key={index} className="result-card">
                <div className="result-icon" aria-hidden="true">{result.icon}</div>
                <div className="result-metric">{result.metric}</div>
                <div className="result-detail">{result.detail}</div>
              </div>
            ))}
          </div>
        </div>

        {/* Contract Value */}
        <div className="fbm-contract">
          <div className="contract-label">{currentContent.contractTitle}</div>
          <div className="contract-value">{currentContent.contractValue}</div>
          <div className="contract-duration">{currentContent.contractDuration}</div>
        </div>

        {/* CTA Button */}
        <div className="fbm-cta-wrapper">
          <a href="#case-studies" className="fbm-cta-button">
            {currentContent.cta}
          </a>
        </div>
      </div>
    </section>
  );
};

export default FBMHighlight;
