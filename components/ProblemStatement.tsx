'use client';

import React from 'react';
import './ProblemStatement.css';

interface ProblemStatementProps {
  lang: 'ja' | 'en';
}

const ProblemStatement: React.FC<ProblemStatementProps> = ({ lang }) => {
  const content = {
    ja: {
      title: '日本製造業の3つの危機',
      problems: [
        {
          number: '01',
          title: '12兆円の損失危機',
          description: '経済産業省警告：2025年までにDXしない中小企業は年間12兆円の損失。中小企業のわずか16%のみがAIを使用。'
        },
        {
          number: '02',
          title: '1,100万人の労働力不足',
          description: '2040年までに1,100万人の労働力不足。2024年だけで350社の中小企業が人材不足のみで倒産。'
        },
        {
          number: '03',
          title: '高コストで非効率なDX',
          description: '従来型：100人雇用、20%利益率、4-6ヶ月。Solunai：12人+AIエージェント、80%利益率、2-6週間。'
        }
      ]
    },
    en: {
      title: '3 Crises Facing Japanese Manufacturing',
      problems: [
        {
          number: '01',
          title: '¥12 Trillion Loss Crisis',
          description: 'METI warning: SMEs without DX by 2025 face ¥12 trillion annual losses. Only 16% of SMEs use AI.'
        },
        {
          number: '02',
          title: '11 Million Worker Shortage',
          description: '11 million worker shortage by 2040. In 2024 alone, 350 SMEs failed due to labor shortage.'
        },
        {
          number: '03',
          title: 'Expensive & Inefficient DX',
          description: 'Traditional: 100 employees, 20% margins, 4-6 months. Solunai: 12 humans + AI agents, 80% margins, 2-6 weeks.'
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
