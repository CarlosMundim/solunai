'use client';

import React from 'react';
import './OverviewHero.css';

interface OverviewHeroProps {
  lang: 'ja' | 'en';
}

const OverviewHero: React.FC<OverviewHeroProps> = ({ lang }) => {
  const content = {
    ja: {
      badge: 'SOLUNAI',
      heading1: '製造業のための',
      heading2: 'AIプラットフォーム',
      leftColumn: '日本の製造業に特化して設計されたSolunaiは、工場の全データソースからリアルタイムでデータを収集し、AIエージェントによって処理します。従来は活用困難だった製造現場のデータを、現場オペレーター、管理者、経営層すべてのステークホルダーにとって有用なインサイトに変換します。データ接続、構造化、分析を比類なきスピードで実現。',
      rightColumn1: '日本の製造業は設備投資を続けていますが、生産性向上は道半ば。その核心的課題は製造データの複雑性です。工場データは異質で非構造化されており、そのままではAI活用が困難です。',
      rightColumn2: '私たちのプラットフォームは、30年以上の製造業実績と、自動車・産業機器分野での実証を重ねて開発されました。日本の製造業の商習慣に適合し、世界をリードするAIエコシステムとの連携を可能にします。'
    },
    en: {
      badge: 'SOLUNAI',
      heading1: 'The AI platform',
      heading2: 'purpose-built for Japanese manufacturing',
      leftColumn: 'Built on continuously streaming data from every plant data source and powered by AI agents, Solunai takes vast amounts of otherwise unwieldy and unusable manufacturing data and generates reliable, useful insights for all plant stakeholders — operators, managers, and executives — connecting, structuring, and analyzing with unmatched speed.',
      rightColumn1: 'Japanese manufacturers invest heavily in equipment and transformation, but productivity improvements remain challenging. The core problem with manufacturing data remains unsolved. Plant data is too heterogenous and unstructured for AI.',
      rightColumn2: 'Our platform has been shaped by 30+ years of manufacturing leadership and proven across automotive and industrial equipment sectors, built to align with Japanese business practices while remaining open and interoperable with the world\'s leading AI ecosystems.'
    }
  };

  const t = content[lang];

  return (
    <section className="overview-hero">
      <div className="overview-hero-container">
        <div className="overview-hero-badge">{t.badge}</div>

        <h1 className="overview-hero-heading">
          {t.heading1}
          <br />
          <span className="overview-hero-heading-highlight">{t.heading2}</span>
        </h1>

        <div className="overview-hero-columns">
          <div className="overview-hero-column-left">
            <p>{t.leftColumn}</p>
          </div>

          <div className="overview-hero-column-right">
            <p className="overview-hero-problem">{t.rightColumn1}</p>
            <p className="overview-hero-solution">{t.rightColumn2}</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default OverviewHero;
