'use client';

import React from 'react';
import './ProblemSolution.css';

interface ProblemSolutionProps {
  lang: 'ja' | 'en';
}

const ProblemSolution: React.FC<ProblemSolutionProps> = ({ lang }) => {
  const content = {
    ja: {
      heading: 'エンタープライズ技術を中小企業の価格で',
      intro: '大手ベンダーのデジタルツイン技術を、中小製造業でも導入可能に。Solunaiは複数のベンダーシステムを統合し、既存設備と連携する「データ統合の専門家」です。',
      problemTitle: 'SME製造業の課題',
      problem: 'Siemens、GE、Microsoft などの大手デジタルツインソリューションは高額で複雑。中小製造業には導入コストが高く、既存の複数ベンダーシステム（PLC、SCADA、MES）との統合が困難です。',
      solutionTitle: 'Solunaiの強み',
      solution: 'Solunaiは「統合スペシャリスト」として、あらゆるベンダーのシステムをISA-95標準に基づいて統一。業界標準の技術を活用し、中小企業に手の届く価格でエンタープライズグレードのデジタルツインを提供します。'
    },
    en: {
      heading: 'Enterprise Technology at SME Pricing',
      intro: 'Access enterprise-grade digital twin technology designed for mid-sized manufacturers. Solunai is the integration specialist that connects multi-vendor systems with your existing equipment.',
      problemTitle: 'The SME Challenge',
      problem: 'Enterprise digital twin solutions from Siemens, GE, and Microsoft are expensive and complex. Mid-sized manufacturers struggle with high implementation costs and integration across multiple vendor systems (PLC, SCADA, MES).',
      solutionTitle: 'The Solunai Advantage',
      solution: 'Solunai positions as an "integration specialist" — unifying any vendor system using ISA-95 standards. Using industry-standard technology, we deliver enterprise-grade digital twins at SME-accessible pricing.'
    }
  };

  const t = content[lang];

  return (
    <section className="problem-solution">
      <div className="problem-solution-container">
        <h2 className="problem-solution-heading">{t.heading}</h2>
        <div className="problem-solution-intro">
          <p>{t.intro}</p>
        </div>
        <div className="problem-solution-grid">
          <div className="problem-solution-card problem-card">
            <h3 className="problem-solution-title">{t.problemTitle}</h3>
            <p>{t.problem}</p>
          </div>
          <div className="problem-solution-card solution-card">
            <h3 className="problem-solution-title">{t.solutionTitle}</h3>
            <p>{t.solution}</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProblemSolution;
