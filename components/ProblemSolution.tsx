'use client';

import React from 'react';
import './ProblemSolution.css';

interface ProblemSolutionProps {
  lang: 'ja' | 'en';
}

const ProblemSolution: React.FC<ProblemSolutionProps> = ({ lang }) => {
  const content = {
    ja: {
      problemBadge: '困りごと',
      problemTitle: '中小企業の「よくある困りごと」',
      problemSubtitle: '現場で起きている、本当の悩み',
      problemPoints: [
        {
          title: '突然の退職',
          detail: '「えっ、来月辞めるの？」――引き継ぎの時間もない'
        },
        {
          title: 'ベテラン頼み',
          detail: '「あの人がいないと回らない」部署はありませんか'
        },
        {
          title: '若手が定着しない',
          detail: '教える余裕がなく、気づけば辞めている'
        },
        {
          title: '日報が形骸化',
          detail: '書いてはいるけど、誰も読んでいない'
        }
      ],
      problemConclusion: 'どれも「人」にまつわる悩み。でも、解決の糸口は「仕組み」にあります。',
      solutionBadge: 'Solunaiの考え方',
      solutionTitle: '人を辞めさせない仕組みをつくる',
      solutionSubtitle: 'AIで「見える化」、人は「判断」に集中',
      solutionPoints: [
        {
          title: '声を拾う',
          detail: '日報・会話・報告から、社員のホンネを見える化'
        },
        {
          title: '知恵を残す',
          detail: 'ベテランのノウハウを、次の世代につなぐ'
        },
        {
          title: 'ムダを減らす',
          detail: '繰り返し作業や確認作業を、AIがサポート'
        },
        {
          title: '少しずつ始める',
          detail: '大きな投資なし。今あるPCから、小さく導入'
        }
      ],
      solutionConclusion: '「AIを使う」のではなく、「人が働きやすくなる」ことがゴールです。'
    },
    en: {
      problemBadge: 'COMMON CHALLENGES',
      problemTitle: 'Issues SMEs Face Every Day',
      problemSubtitle: 'Real struggles happening on the ground',
      problemPoints: [
        {
          title: 'Sudden resignations',
          detail: '"Wait, you\'re leaving next month?" — No time for handover'
        },
        {
          title: 'Over-reliance on veterans',
          detail: 'Do you have departments that can\'t function without "that one person"?'
        },
        {
          title: 'Young staff don\'t stay',
          detail: 'No time to train them, and before you know it, they\'re gone'
        },
        {
          title: 'Daily reports become hollow',
          detail: 'Everyone writes them, but nobody reads them'
        }
      ],
      problemConclusion: 'These are all "people" problems. But the solution lies in building better systems.',
      solutionBadge: 'Our Approach',
      solutionTitle: 'Building systems that keep people',
      solutionSubtitle: 'AI makes things visible, people focus on decisions',
      solutionPoints: [
        {
          title: 'Capture voices',
          detail: 'Surface real feelings from reports, conversations, and feedback'
        },
        {
          title: 'Preserve wisdom',
          detail: 'Pass veteran know-how to the next generation'
        },
        {
          title: 'Reduce waste',
          detail: 'AI supports repetitive tasks and double-checking'
        },
        {
          title: 'Start small',
          detail: 'No big investment. Begin with existing PCs, step by step'
        }
      ],
      solutionConclusion: 'The goal isn\'t "using AI" — it\'s making work better for people.'
    }
  };

  const currentContent = content[lang];

  return (
    <section
      id="problem-solution"
      className="problem-solution-section"
      aria-label={lang === 'ja' ? '課題と解決策' : 'Problem and Solution'}
    >
      {/* Section Image - SME Office Scene */}
      <div className="problem-solution-image-wrapper">
        <img
          src="/images/solunai-problem-office.jpg"
          alt={lang === 'ja' ? '中小企業のオフィス風景' : 'SME office scene'}
          className="problem-solution-image"
        />
      </div>

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
