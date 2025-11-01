'use client';

import React from 'react';
import Link from 'next/link';
import './FutureCases.css';

interface FutureCasesProps {
  lang: 'ja' | 'en';
}

const FutureCases: React.FC<FutureCasesProps> = ({ lang }) => {
  const content = {
    ja: {
      heading: '今後の導入事例',
      project: {
        badge: '2026年第1四半期展開予定',
        title: '日本SME製造業様向けプロジェクト',
        industry: '業界：自動車部品製造',
        challenge: '課題：品質管理のボトルネック',
        solution: 'ソリューション：AIコンピュータビジョン検査',
        outcomes: {
          title: '予想される成果',
          items: [
            '欠陥検出27倍高速化',
            '精度95%改善',
            '年間¥3-5M削減'
          ]
        },
        cta: 'パイロットプログラムにご関心のある企業様はお問い合わせください'
      }
    },
    en: {
      heading: 'Future Case Studies',
      project: {
        badge: 'Planned for Q1 2026',
        title: 'Project for Japanese SME Manufacturer',
        industry: 'Industry: Automotive Parts Manufacturing',
        challenge: 'Challenge: Quality control bottleneck',
        solution: 'Solution: AI Computer Vision Inspection',
        outcomes: {
          title: 'Expected Outcomes',
          items: [
            '27× faster defect detection',
            '95% accuracy improvement',
            '¥3-5M annual cost reduction'
          ]
        },
        cta: 'Contact us if interested in pilot program'
      }
    }
  };

  const currentContent = content[lang];

  return (
    <section className="future-cases">
      <div className="future-cases-container">
        <h2 className="future-cases-heading">{currentContent.heading}</h2>

        <div className="future-project-card">
          <div className="project-badge">{currentContent.project.badge}</div>

          <h3 className="project-title">{currentContent.project.title}</h3>

          <div className="project-details">
            <div className="project-detail-item">
              <div className="detail-icon">🏭</div>
              <div className="detail-text">{currentContent.project.industry}</div>
            </div>

            <div className="project-detail-item">
              <div className="detail-icon">⚠️</div>
              <div className="detail-text">{currentContent.project.challenge}</div>
            </div>

            <div className="project-detail-item">
              <div className="detail-icon">💡</div>
              <div className="detail-text">{currentContent.project.solution}</div>
            </div>
          </div>

          <div className="project-outcomes">
            <h4 className="outcomes-title">{currentContent.project.outcomes.title}</h4>
            <ul className="outcomes-list">
              {currentContent.project.outcomes.items.map((item, index) => (
                <li key={index}>{item}</li>
              ))}
            </ul>
          </div>

          <div className="project-cta">
            {currentContent.project.cta}
          </div>
        </div>
      </div>
    </section>
  );
};

export default FutureCases;
