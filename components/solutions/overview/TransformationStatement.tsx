'use client';

import React from 'react';
import './TransformationStatement.css';

interface TransformationStatementProps {
  lang: 'ja' | 'en';
}

const TransformationStatement: React.FC<TransformationStatementProps> = ({ lang }) => {
  const content = {
    ja: {
      heading: 'データ信号から製造業の変革へ',
      description: 'Solunaiを使えば、製造業者はAIを活用してあらゆる信号を捉え、意味のあるインサイトに変換し、リアルタイムで意思決定を実行します — すべての工場で、企業全体で、そして未来に向けて。'
    },
    en: {
      heading: 'From data signals to manufacturing transformation',
      description: 'With Solunai, manufacturers harness AI to capture every signal, transform it into meaningful insights, and drive real-time decisions — across every plant, throughout the enterprise, and into the future.'
    }
  };

  const t = content[lang];

  return (
    <section className="transformation-statement">
      <div className="transformation-statement-container">
        <h2 className="transformation-statement-heading">{t.heading}</h2>
        <p className="transformation-statement-description">{t.description}</p>
      </div>
    </section>
  );
};

export default TransformationStatement;
