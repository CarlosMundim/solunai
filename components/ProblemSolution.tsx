'use client';

import React from 'react';
import './ProblemSolution.css';

interface ProblemSolutionProps {
  lang: 'ja' | 'en';
}

const ProblemSolution: React.FC<ProblemSolutionProps> = ({ lang }) => {
  const content = {
    ja: {
      problemTitle: '日本製造業の危機',
      problemSubtitle: '課題：',
      problemPoints: [
        '高齢化：製造業従事者の28%が60歳以上',
        '人材不足：AI・自動化エンジニアが採用できない',
        '若者離れ：工場勤務を敬遠（3K仕事）',
        'コスト競争：中国の労働コスト1/3',
        '採用時間：従来4-6ヶ月の採用サイクル'
      ],
      problemConclusion: 'このままでは日本の製造業が空洞化',
      solutionTitle: 'Solunaiの解決策',
      solutionSubtitle: 'AI + グローバルエンジニア = 完全な変革',
      solutionPoints: [
        {
          title: 'AI技術が手作業を置き換え',
          detail: '品質管理：人間検査より27倍速く、95%精度'
        },
        {
          title: 'グローバル人材が不足を補完',
          detail: '2-6週間で配備（従来の52倍速）'
        },
        {
          title: 'コスト削減と品質向上を同時実現',
          detail: '30-50%コスト削減、品質95%改善'
        },
        {
          title: '柔軟なコスト構造',
          detail: 'プロジェクトベース、固定費不要'
        }
      ],
      solutionConclusion: '日本のSME製造業のための完全なソリューション'
    },
    en: {
      problemTitle: 'Japan Manufacturing Crisis',
      problemSubtitle: 'Challenges:',
      problemPoints: [
        'Aging workforce: 28% over 60 years old',
        'Talent shortage: Cannot hire AI/automation engineers',
        'Youth exodus: Factory jobs perceived as undesirable',
        'Cost competition: China labor cost 1/3 of Japan',
        'Hiring time: 4-6 month recruitment cycle'
      ],
      problemConclusion: 'Without change, Japan\'s manufacturing will hollow out',
      solutionTitle: 'Solunai\'s Solution',
      solutionSubtitle: 'AI + Global Engineers = Complete Transformation',
      solutionPoints: [
        {
          title: 'AI technology replaces manual tasks',
          detail: 'Quality control: 27× faster than humans, 95% accuracy'
        },
        {
          title: 'Global talent fills shortage',
          detail: '2-6 weeks deployment (52× faster than traditional)'
        },
        {
          title: 'Simultaneous cost reduction and quality improvement',
          detail: '30-50% cost reduction, 95% quality improvement'
        },
        {
          title: 'Flexible cost structure',
          detail: 'Project-based, no fixed overhead'
        }
      ],
      solutionConclusion: 'Complete solution for Japanese SME manufacturers'
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
                  <span className="bullet" aria-hidden="true">•</span>
                  <span>{point}</span>
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
                    <span className="check-icon" aria-hidden="true">✓</span>
                    <div className="solution-text">
                      <strong>{point.title}</strong>
                      <p className="solution-detail">
                        <span className="arrow" aria-hidden="true">→</span> {point.detail}
                      </p>
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
