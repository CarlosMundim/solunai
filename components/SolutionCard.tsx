'use client';

import React from 'react';
import './SolutionCard.css';

export interface SolutionData {
  id: string;
  icon: string;
  name: string;
  targetIndustry: string;
  keyProblem: string;
  benefits: string[];
  pricingRange: string;
  roi: string;
  status: string;
  statusBadge: 'deployed' | 'in-progress' | 'roadmap';
  accentColor: string;
}

interface SolutionCardProps {
  solution: SolutionData;
  onLearnMore: (id: string) => void;
  lang: 'ja' | 'en';
}

const SolutionCard: React.FC<SolutionCardProps> = ({ solution, onLearnMore, lang }) => {
  const labels = {
    ja: {
      learnMore: '詳細を見る',
      deployed: '✓ 導入実績',
      'in-progress': '導入中',
      roadmap: 'ロードマップ'
    },
    en: {
      learnMore: 'Learn More',
      deployed: '✓ Deployed',
      'in-progress': 'In Progress',
      roadmap: 'Roadmap'
    }
  };

  const currentLabels = labels[lang];

  return (
    <div
      className="solution-card"
      style={{ '--accent-color': solution.accentColor } as React.CSSProperties}
    >
      <div className="card-header">
        <div className="icon-container">
          <span className="icon-text">{solution.icon}</span>
        </div>
        <span className={`status-badge status-${solution.statusBadge}`}>
          {currentLabels[solution.statusBadge]}
        </span>
      </div>

      <h3 className="solution-name">{solution.name}</h3>
      <p className="target-industry">{solution.targetIndustry}</p>
      <p className="key-problem">{solution.keyProblem}</p>

      <ul className="benefits-list">
        {solution.benefits.map((benefit, index) => (
          <li key={index}>{benefit}</li>
        ))}
      </ul>

      <div className="card-footer">
        <div className="pricing-info">
          <div className="pricing-label">{solution.pricingRange}</div>
          <div className="roi-label">{solution.roi}</div>
        </div>

        <button
          className="learn-more-btn"
          onClick={() => onLearnMore(solution.id)}
        >
          {currentLabels.learnMore}
        </button>
      </div>
    </div>
  );
};

export default SolutionCard;
