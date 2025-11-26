'use client';

import React from 'react';
import './ProblemSolution.css';

interface ProblemSolutionProps {
  lang: 'ja' | 'en';
}

const ProblemSolution: React.FC<ProblemSolutionProps> = ({ lang }) => {
  const content = {
    ja: {
      problemTitle: '製造業の課題',
      problemSubtitle: '直面する4つの危機',
      problemPoints: [
        {
          icon: '👥',
          title: '人手不足',
          detail: '2040年までに1,100万人の労働力不足'
        },
        {
          icon: '⚠️',
          title: '品質問題',
          detail: '人的エラーによる不良品発生と検査遅延'
        },
        {
          icon: '🔧',
          title: '設備故障',
          detail: '予期せぬダウンタイムによる生産損失'
        },
        {
          icon: '💸',
          title: 'コスト上昇',
          detail: '人件費と運営コストの継続的増加'
        }
      ],
      problemConclusion: '従来の方法では競争力を維持できない',
      solutionTitle: 'Solunaiの解決策',
      solutionSubtitle: 'AI + グローバル人材 = 製造業DX',
      solutionPoints: [
        {
          icon: '🤖',
          title: 'AIによる自動化',
          detail: '24時間稼働、人手不足を解消'
        },
        {
          icon: '✓',
          title: '95%+ 欠陥検出',
          detail: 'コンピュータビジョンで高精度品質管理'
        },
        {
          icon: '📊',
          title: '予知保全',
          detail: 'AI故障予測で計画的メンテナンス'
        },
        {
          icon: '📈',
          title: '30%コスト削減',
          detail: '実証済み：運営コスト30-50%削減'
        }
      ],
      solutionConclusion: '日本製造業の競争力を取り戻す'
    },
    en: {
      problemTitle: 'Manufacturing Challenges',
      problemSubtitle: '4 Critical Issues',
      problemPoints: [
        {
          icon: '👥',
          title: 'Labor Shortage',
          detail: '11 million worker shortage by 2040'
        },
        {
          icon: '⚠️',
          title: 'Quality Issues',
          detail: 'Defects from human error and slow inspection'
        },
        {
          icon: '🔧',
          title: 'Equipment Downtime',
          detail: 'Unexpected failures causing production losses'
        },
        {
          icon: '💸',
          title: 'Rising Costs',
          detail: 'Continuous increase in labor and operations'
        }
      ],
      problemConclusion: 'Traditional methods cannot maintain competitiveness',
      solutionTitle: 'Solunai Solutions',
      solutionSubtitle: 'AI + Global Talent = Manufacturing DX',
      solutionPoints: [
        {
          icon: '🤖',
          title: 'AI Automation',
          detail: '24/7 operations, solving labor shortage'
        },
        {
          icon: '✓',
          title: '95%+ Defect Detection',
          detail: 'Computer vision for high-precision quality control'
        },
        {
          icon: '📊',
          title: 'Predictive Maintenance',
          detail: 'AI-powered failure prediction and planning'
        },
        {
          icon: '📈',
          title: '30% Cost Reduction',
          detail: 'Proven: 30-50% operational cost savings'
        }
      ],
      solutionConclusion: 'Restoring competitiveness to Japanese manufacturing'
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
        {/* Problem Side */}
        <div className="problem-side">
          <div className="side-content">
            <h2 className="side-title">{currentContent.problemTitle}</h2>
            <h3 className="side-subtitle">{currentContent.problemSubtitle}</h3>

            <ul className="problem-list" role="list">
              {currentContent.problemPoints.map((point, index) => (
                <li key={index}>
                  <span className="point-icon" aria-hidden="true">{point.icon}</span>
                  <div className="point-content">
                    <strong>{point.title}</strong>
                    <p className="point-detail">{point.detail}</p>
                  </div>
                </li>
              ))}
            </ul>

            <div className="conclusion problem-conclusion">
              <strong>{currentContent.problemConclusion}</strong>
            </div>
          </div>
        </div>

        {/* Solution Side */}
        <div className="solution-side">
          <div className="side-content">
            <h2 className="side-title">{currentContent.solutionTitle}</h2>
            <h3 className="side-subtitle solution-subtitle">
              {currentContent.solutionSubtitle}
            </h3>

            <ul className="solution-list" role="list">
              {currentContent.solutionPoints.map((point, index) => (
                <li key={index}>
                  <div className="solution-point">
                    <span className="point-icon" aria-hidden="true">{point.icon}</span>
                    <div className="solution-text">
                      <strong>{point.title}</strong>
                      <p className="solution-detail">{point.detail}</p>
                    </div>
                  </div>
                </li>
              ))}
            </ul>

            <div className="conclusion solution-conclusion">
              <strong>{currentContent.solutionConclusion}</strong>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProblemSolution;
