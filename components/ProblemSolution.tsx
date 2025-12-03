'use client';

import React from 'react';
import './ProblemSolution.css';

interface ProblemSolutionProps {
  lang: 'ja' | 'en';
}

const ProblemSolution: React.FC<ProblemSolutionProps> = ({ lang }) => {
  const content = {
    ja: {
      problemBadge: '課題',
      problemTitle: '日本企業が直面する現実的な課題',
      problemSubtitle: 'AI導入の複雑さ',
      problemPoints: [
        {
          title: '判断の複雑さ',
          detail: 'AI導入の「何を、どこまで、どのように」が不明確'
        },
        {
          title: '部門間の壁',
          detail: '業務内容や専門知識が部門ごとに異なる'
        },
        {
          title: 'ガバナンスの懸念',
          detail: '海外製AIへのデータ主権・セキュリティ不安'
        },
        {
          title: '文化との不一致',
          detail: '日本の組織文化に馴染まないAIツール'
        }
      ],
      problemConclusion: '現場・管理部門・経営層すべてが納得できる設計が必要',
      solutionBadge: '提供価値',
      solutionTitle: 'ソルナイの提供価値',
      solutionSubtitle: '主権型エージェンティックAI',
      solutionPoints: [
        {
          title: '文脈理解',
          detail: '企業固有の業務慣習・専門用語・文化を理解'
        },
        {
          title: '安全設計',
          detail: '国内データ管理を前提とした主権型アーキテクチャ'
        },
        {
          title: '実証済み知見',
          detail: '大学・教育機関・産業現場での実績'
        },
        {
          title: '一貫支援',
          detail: 'PoCから全社展開まで伴走'
        }
      ],
      solutionConclusion: 'AIを長期的な価値創出の源泉に'
    },
    en: {
      problemBadge: 'CHALLENGES',
      problemTitle: 'Real Challenges Japanese Organisations Face',
      problemSubtitle: 'The Complexity of AI Adoption',
      problemPoints: [
        {
          title: 'Complex decisions',
          detail: 'Unclear scope: what, how far, and how to use AI'
        },
        {
          title: 'Departmental silos',
          detail: 'Different workflows and expertise across divisions'
        },
        {
          title: 'Governance concerns',
          detail: 'Data sovereignty and security worries with foreign AI'
        },
        {
          title: 'Cultural mismatch',
          detail: 'Generic AI tools that do not fit Japanese organisations'
        }
      ],
      problemConclusion: 'Solutions must satisfy frontline staff, management, and executives',
      solutionBadge: 'OUR APPROACH',
      solutionTitle: "Solunai's Value Proposition",
      solutionSubtitle: 'Sovereign Agentic AI',
      solutionPoints: [
        {
          title: 'Contextual understanding',
          detail: 'Learns your workflows, terminology, and culture'
        },
        {
          title: 'Sovereign architecture',
          detail: 'Built for domestic data control from the ground up'
        },
        {
          title: 'Proven expertise',
          detail: 'Experience across universities, institutions, and industry'
        },
        {
          title: 'End-to-end support',
          detail: 'From PoC to full-scale deployment'
        }
      ],
      solutionConclusion: 'AI as a sustained source of value for your organisation'
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
