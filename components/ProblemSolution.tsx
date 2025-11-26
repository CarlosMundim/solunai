'use client';

import React from 'react';
import './ProblemSolution.css';

interface ProblemSolutionProps {
  lang: 'ja' | 'en';
}

const ProblemSolution: React.FC<ProblemSolutionProps> = ({ lang }) => {
  const content = {
    ja: {
      problemBadge: 'CHALLENGES',
      problemTitle: '製造業の課題',
      problemSubtitle: '直面する4つの危機',
      problemPoints: [
        {
          title: '人手不足',
          detail: '2040年までに1,100万人の労働力不足'
        },
        {
          title: '品質問題',
          detail: '人的エラーによる不良品発生と検査遅延'
        },
        {
          title: '設備故障',
          detail: '予期せぬダウンタイムによる生産損失'
        },
        {
          title: 'コスト上昇',
          detail: '人件費と運営コストの継続的増加'
        }
      ],
      problemConclusion: '従来の方法では競争力を維持できない',
      solutionBadge: 'SOLUTIONS',
      solutionTitle: 'Solunaiの解決策',
      solutionSubtitle: 'AI + グローバル人材 = 製造業DX',
      solutionPoints: [
        {
          title: 'AIによる自動化',
          detail: '24時間稼働、人手不足を解消'
        },
        {
          title: '95%+ 欠陥検出',
          detail: 'コンピュータビジョンで高精度品質管理'
        },
        {
          title: '予知保全',
          detail: 'AI故障予測で計画的メンテナンス'
        },
        {
          title: '30%コスト削減',
          detail: '実証済み：運営コスト30-50%削減'
        }
      ],
      solutionConclusion: '日本製造業の競争力を取り戻す'
    },
    en: {
      problemBadge: 'CHALLENGES',
      problemTitle: 'Manufacturing Challenges',
      problemSubtitle: 'Four crises we face',
      problemPoints: [
        {
          title: 'Labor shortage',
          detail: 'Labor shortage of 11 million people by 2040'
        },
        {
          title: 'Quality problems',
          detail: 'Defective products and inspection delays caused by human error'
        },
        {
          title: 'Equipment failure',
          detail: 'Lost production due to unplanned downtime'
        },
        {
          title: 'Rising costs',
          detail: 'Continued increases in labor and operating costs'
        }
      ],
      problemConclusion: 'Traditional methods cannot remain competitive',
      solutionBadge: 'SOLUTIONS',
      solutionTitle: "Solunai's Solution",
      solutionSubtitle: 'AI + Global Talent = Manufacturing DX',
      solutionPoints: [
        {
          title: 'AI automation',
          detail: '24 hour operation eliminates labor shortages'
        },
        {
          title: '95%+ defect detection',
          detail: 'High precision quality control with computer vision'
        },
        {
          title: 'Predictive Maintenance',
          detail: 'Planned maintenance with AI failure prediction'
        },
        {
          title: '30% cost reduction',
          detail: 'Proven: Reduce operational costs by 30-50%'
        }
      ],
      solutionConclusion: 'Restoring the competitiveness of Japanese manufacturing'
    }
  };

  const currentContent = content[lang];

  return (
    <section
      id="problem-solution"
      className="problem-solution-section"
      aria-label={lang === 'ja' ? '課題と解決策' : 'Problem and Solution'}
    >
      <div className="problem-solution-container">
        {/* Problem Card */}
        <div className="problem-card">
          <div className="card-content">
            <span className="card-badge">{currentContent.problemBadge}</span>
            <h2 className="card-title">{currentContent.problemTitle}</h2>
            <h3 className="card-subtitle">{currentContent.problemSubtitle}</h3>

            <ul className="points-list" role="list">
              {currentContent.problemPoints.map((point, index) => (
                <li key={index}>
                  <span className="point-marker" aria-hidden="true"></span>
                  <div className="point-content">
                    <strong>{point.title}</strong>
                    <p className="point-detail">{point.detail}</p>
                  </div>
                </li>
              ))}
            </ul>

            <div className="conclusion problem-conclusion">
              {currentContent.problemConclusion}
            </div>
          </div>
        </div>

        {/* Solution Card */}
        <div className="solution-card-ps">
          <div className="card-content">
            <span className="card-badge">{currentContent.solutionBadge}</span>
            <h2 className="card-title">{currentContent.solutionTitle}</h2>
            <h3 className="card-subtitle">
              {currentContent.solutionSubtitle}
            </h3>

            <ul className="points-list" role="list">
              {currentContent.solutionPoints.map((point, index) => (
                <li key={index}>
                  <span className="check-marker" aria-hidden="true">+</span>
                  <div className="point-content">
                    <strong>{point.title}</strong>
                    <p className="point-detail">{point.detail}</p>
                  </div>
                </li>
              ))}
            </ul>

            <div className="conclusion solution-conclusion">
              {currentContent.solutionConclusion}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProblemSolution;
