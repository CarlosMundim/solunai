'use client';

import React from 'react';
import Link from 'next/link';
import './ServicesCaseProof.css';

interface ServicesCaseProofProps {
  lang: 'ja' | 'en';
}

const ServicesCaseProof: React.FC<ServicesCaseProofProps> = ({ lang }) => {
  const content = {
    ja: {
      title: 'FBM Hudson 実績証明',
      subtitle: '実証済みの実行力とROI',
      investment: '€2.5M-€3.8Mのデジタル変革',
      stats: [
        { value: '90%', label: '時間削減' },
        { value: '95%', label: '精度達成' },
        { value: '€2.5M+', label: 'プロジェクト価値' },
        { value: '完了', label: 'フェーズ1' }
      ],
      highlights: [
        'WorldEmpエンジニアを配備',
        'エンドツーエンドデジタルツイン実装',
        'AI駆動の品質管理システム',
        'リアルタイム生産最適化',
        'フェーズ2を現在展開中'
      ],
      cta: {
        text: '完全なケーススタディを見る',
        link: '/case-studies'
      }
    },
    en: {
      title: 'FBM Hudson Success Proof',
      subtitle: 'Proven Execution and ROI',
      investment: '€2.5M-€3.8M Digital Transformation',
      stats: [
        { value: '90%', label: 'Time Reduction' },
        { value: '95%', label: 'Accuracy Achieved' },
        { value: '€2.5M+', label: 'Project Value' },
        { value: 'Complete', label: 'Phase 1' }
      ],
      highlights: [
        'WorldEmp engineers deployed',
        'End-to-end digital twin implementation',
        'AI-driven quality control systems',
        'Real-time production optimization',
        'Phase 2 currently deploying'
      ],
      cta: {
        text: 'View Full Case Study',
        link: '/en/case-studies'
      }
    }
  };

  const currentContent = content[lang];

  return (
    <section className="services-case-proof">
      <div className="case-proof-container">
        <div className="proof-header">
          <h2 className="proof-title">{currentContent.title}</h2>
          <p className="proof-subtitle">{currentContent.subtitle}</p>
          <div className="proof-investment">{currentContent.investment}</div>
        </div>

        <div className="proof-stats">
          {currentContent.stats.map((stat, index) => (
            <div key={index} className="proof-stat-card">
              <div className="stat-value-large">{stat.value}</div>
              <div className="stat-label-large">{stat.label}</div>
            </div>
          ))}
        </div>

        <div className="proof-highlights">
          {currentContent.highlights.map((highlight, index) => (
            <div key={index} className="highlight-item">
              <svg className="highlight-check" viewBox="0 0 20 20" fill="currentColor">
                <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
              </svg>
              <span>{highlight}</span>
            </div>
          ))}
        </div>

        <div className="proof-cta">
          <Link href={currentContent.cta.link} className="proof-cta-button">
            {currentContent.cta.text}
          </Link>
        </div>
      </div>
    </section>
  );
};

export default ServicesCaseProof;
