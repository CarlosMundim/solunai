'use client';

import React from 'react';
import './SolutionDetail.css';

export interface DetailedSolution {
  id: string;
  name: string;
  targetIndustries: string[];
  problemsSolved: string[];
  solutionFeatures: string[];
  techStack: string[];
  results: {
    metric: string;
    value: string;
  }[];
  investment: {
    implementation: string;
    annualLicense: string;
    support: string;
    payback: string;
    annualSavings: string;
  };
  caseStudy: {
    client: string;
    contract: string;
    results: string;
  };
  useCases: string[];
  accentColor: string;
}

interface SolutionDetailProps {
  solution: DetailedSolution;
  onClose: () => void;
  lang: 'ja' | 'en';
}

const SolutionDetail: React.FC<SolutionDetailProps> = ({ solution, onClose, lang }) => {
  const labels = {
    ja: {
      targetIndustries: '対象業界',
      problemsSolved: '解決する課題',
      solutionFeatures: 'Solunaiソリューション',
      techStack: '技術スタック',
      results: '達成される成果',
      investment: '投資とROI',
      implementation: '実装費用',
      annualLicense: '年間ライセンス',
      support: 'サポート',
      payback: '投資回収期間',
      annualSavings: '年間削減額',
      caseStudy: '導入実績',
      useCases: '適用例',
      close: '閉じる',
      downloadBrochure: '詳細資料をダウンロード',
      requestDemo: '無料デモを予約'
    },
    en: {
      targetIndustries: 'Target Industries',
      problemsSolved: 'Problems Solved',
      solutionFeatures: 'Solunai Solution',
      techStack: 'Technology Stack',
      results: 'Results Achieved',
      investment: 'Investment & ROI',
      implementation: 'Implementation',
      annualLicense: 'Annual License',
      support: 'Support',
      payback: 'Payback Period',
      annualSavings: 'Annual Savings',
      caseStudy: 'Case Study',
      useCases: 'Use Cases',
      close: 'Close',
      downloadBrochure: 'Download Brochure',
      requestDemo: 'Request Demo'
    }
  };

  const currentLabels = labels[lang];

  return (
    <div className="solution-detail-overlay" onClick={onClose}>
      <div
        className="solution-detail-content"
        onClick={(e) => e.stopPropagation()}
        style={{ '--accent-color': solution.accentColor } as React.CSSProperties}
      >
        <button className="close-btn" onClick={onClose}>×</button>

        <div className="detail-header">
          <h2>{solution.name}</h2>
        </div>

        <div className="detail-body">
          {/* Target Industries */}
          <section className="detail-section">
            <h3>{currentLabels.targetIndustries}</h3>
            <ul className="check-list">
              {solution.targetIndustries.map((industry, index) => (
                <li key={index}>{industry}</li>
              ))}
            </ul>
          </section>

          {/* Problems Solved */}
          <section className="detail-section">
            <h3>{currentLabels.problemsSolved}</h3>
            <ul className="problem-list">
              {solution.problemsSolved.map((problem, index) => (
                <li key={index}>{problem}</li>
              ))}
            </ul>
          </section>

          {/* Solution Features */}
          <section className="detail-section">
            <h3>{currentLabels.solutionFeatures}</h3>
            <ul className="check-list">
              {solution.solutionFeatures.map((feature, index) => (
                <li key={index}>{feature}</li>
              ))}
            </ul>
          </section>

          {/* Tech Stack */}
          <section className="detail-section">
            <h3>{currentLabels.techStack}</h3>
            <ul className="tech-list">
              {solution.techStack.map((tech, index) => (
                <li key={index}>{tech}</li>
              ))}
            </ul>
          </section>

          {/* Results */}
          <section className="detail-section">
            <h3>{currentLabels.results}</h3>
            <div className="results-grid">
              {solution.results.map((result, index) => (
                <div key={index} className="result-item">
                  <div className="result-value">{result.value}</div>
                  <div className="result-metric">{result.metric}</div>
                </div>
              ))}
            </div>
          </section>

          {/* Investment & ROI */}
          <section className="detail-section investment-section">
            <h3>{currentLabels.investment}</h3>
            <div className="investment-grid">
              <div className="investment-item">
                <span className="investment-label">{currentLabels.implementation}:</span>
                <span className="investment-value">{solution.investment.implementation}</span>
              </div>
              <div className="investment-item">
                <span className="investment-label">{currentLabels.annualLicense}:</span>
                <span className="investment-value">{solution.investment.annualLicense}</span>
              </div>
              <div className="investment-item">
                <span className="investment-label">{currentLabels.support}:</span>
                <span className="investment-value">{solution.investment.support}</span>
              </div>
              <div className="investment-highlight">
                <span className="investment-label">{currentLabels.payback}:</span>
                <span className="investment-value highlight">{solution.investment.payback}</span>
              </div>
              <div className="investment-highlight">
                <span className="investment-label">{currentLabels.annualSavings}:</span>
                <span className="investment-value highlight">{solution.investment.annualSavings}</span>
              </div>
            </div>
          </section>

          {/* Case Study */}
          <section className="detail-section case-study-section">
            <h3>{currentLabels.caseStudy}</h3>
            <div className="case-study-card">
              <div className="case-study-item">
                <strong>{solution.caseStudy.client}</strong>
              </div>
              <div className="case-study-item">{solution.caseStudy.contract}</div>
              <div className="case-study-item">{solution.caseStudy.results}</div>
            </div>
          </section>

          {/* Use Cases */}
          <section className="detail-section">
            <h3>{currentLabels.useCases}</h3>
            <ul className="use-cases-list">
              {solution.useCases.map((useCase, index) => (
                <li key={index}>{useCase}</li>
              ))}
            </ul>
          </section>
        </div>

        <div className="detail-footer">
          <button className="action-btn primary">
            {currentLabels.requestDemo}
          </button>
          <button className="action-btn secondary">
            {currentLabels.downloadBrochure}
          </button>
        </div>
      </div>
    </div>
  );
};

export default SolutionDetail;
