'use client';

import React from 'react';
import './ProblemStatement.css';

interface ProblemStatementProps {
  lang: 'ja' | 'en';
}

const ProblemStatement: React.FC<ProblemStatementProps> = ({ lang }) => {
  const content = {
    ja: {
      title: '日本の製造業が直面する3つの課題',
      problems: [
        {
          number: '01',
          title: '人材不足',
          description: 'AI・デジタルツイン専門家の深刻な不足により、最新技術の導入が遅れています。'
        },
        {
          number: '02',
          title: '長期プロジェクト',
          description: '従来のDXプロジェクトは4-6ヶ月かかり、機会損失とコスト増大を招いています。'
        },
        {
          number: '03',
          title: 'レガシーシステム',
          description: '既存システムとの統合が困難で、データ活用が進まず、変革が停滞しています。'
        }
      ]
    },
    en: {
      title: '3 Challenges Facing Japanese Manufacturing',
      problems: [
        {
          number: '01',
          title: 'Talent Shortage',
          description: 'Severe shortage of AI and Digital Twin specialists delays adoption of cutting-edge technologies.'
        },
        {
          number: '02',
          title: 'Long Project Timelines',
          description: 'Traditional DX projects take 4-6 months, causing opportunity loss and cost escalation.'
        },
        {
          number: '03',
          title: 'Legacy System Integration',
          description: 'Difficulty integrating with existing systems prevents data utilization and stalls transformation.'
        }
      ]
    }
  };

  const currentContent = content[lang];

  return (
    <section className="problem-statement-section" aria-label={lang === 'ja' ? '課題' : 'Challenges'}>
      <div className="problem-statement-container">
        <h2 className="problem-statement-title">{currentContent.title}</h2>

        <div className="problems-grid">
          {currentContent.problems.map((problem, index) => (
            <div
              key={index}
              className="problem-card"
              style={{ animationDelay: `${index * 0.15}s` }}
            >
              <div className="problem-number">{problem.number}</div>
              <h3 className="problem-title">{problem.title}</h3>
              <p className="problem-description">{problem.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProblemStatement;
