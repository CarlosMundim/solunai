'use client';

import React from 'react';
import './ProblemSolution.css';

interface ProblemSolutionProps {
  lang: 'ja' | 'en';
}

const ProblemSolution: React.FC<ProblemSolutionProps> = ({ lang }) => {
  const content = {
    ja: {
      intro: '大手ベンダーのデジタルツイン技術（Siemens、PTC、Dassault）を、中小製造業でも導入可能に。Solunaiは複数のベンダーシステムを統合し、既存設備と連携する「データ統合の専門家」です。',
      problemTitle: 'SME製造業の課題',
      problem: 'Siemens、GE、Microsoft などの大手デジタルツインソリューションは高額で複雑。中小製造業には導入コストが高く、既存の複数ベンダーシステム（PLC、SCADA、MES）との統合が困難です。',
      solutionTitle: 'Solunaiの強み',
      solution: 'Solunaiは「統合スペシャリスト」として、あらゆるベンダーのシステムをISA-95標準に基づいて統一。NVIDIA Omniverse、Siemens、Ansysなど業界リーダーとのパートナーシップを活用し、中小企業に手の届く価格で提供します。'
    },
    en: {
      intro: 'Access enterprise-grade digital twin technology from Siemens, PTC, and Dassault — designed for mid-sized manufacturers. Solunai is the integration specialist that connects multi-vendor systems with your existing equipment.',
      problemTitle: 'The SME Challenge',
      problem: 'Enterprise digital twin solutions from Siemens, GE, and Microsoft are expensive and complex. Mid-sized manufacturers struggle with high implementation costs and integration across multiple vendor systems (PLC, SCADA, MES).',
      solutionTitle: 'The Solunai Advantage',
      solution: 'Solunai positions as an "integration specialist" — unifying any vendor system using ISA-95 standards. Through partnerships with industry leaders like NVIDIA Omniverse, Siemens, and Ansys, we deliver enterprise technology at SME-accessible pricing.'
    }
  };

  const t = content[lang];

  return (
    <section className="problem-solution">
      <div className="problem-solution-container">
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
