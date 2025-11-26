'use client';

import React from 'react';
import './CompanyPhilosophy.css';

interface CompanyPhilosophyProps {
  lang: 'ja' | 'en';
}

const CompanyPhilosophy: React.FC<CompanyPhilosophyProps> = ({ lang }) => {
  const content = {
    ja: {
      vision: {
        title: '私たちのビジョン',
        text: '製造業の現場課題をAIで解決する',
      },
      mission: {
        title: '私たちのミッション',
        subtitle: '中小企業でも導入可能な製造業AIを提供',
        pillars: [
          {
            icon: '01',
            title: 'AI品質検査システム',
            description: '95%以上の欠陥検出率、検査時間を27倍高速化',
          },
          {
            icon: '02',
            title: '予知保全ソリューション',
            description: '48-72時間前の故障予測、ダウンタイム40%削減',
          },
          {
            icon: '03',
            title: '生産最適化AI',
            description: 'エネルギーコスト20-30%削減、生産効率の最大化',
          },
          {
            icon: '04',
            title: 'グローバルエンジニアリング',
            description: '国内採用の30-50%のコストで熟練技術者を提供',
          },
        ],
      },
      unique: {
        title: 'なぜSolunaiがユニークなのか',
        points: [
          {
            not: 'ソフトウェア会社だけではない',
            but: '現場を理解する製造エンジニア',
          },
          {
            not: '日本企業だけではない',
            but: 'グローバル視点とローカル実行力',
          },
          {
            not: 'AI専門家だけではない',
            but: '実証済みの現場経験',
          },
          {
            not: 'コンサルタントだけではない',
            but: '実装して結果を出す',
          },
        ],
      },
      result: {
        title: '結果',
        text: '現場を知り、実績を持ち、中小企業の課題を解決する製造業AIパートナー',
      },
    },
    en: {
      vision: {
        title: 'Our Vision',
        text: 'Solving manufacturing challenges with AI',
      },
      mission: {
        title: 'Our Mission',
        subtitle: 'Manufacturing AI accessible to SMEs',
        pillars: [
          {
            icon: '01',
            title: 'AI Quality Inspection',
            description: '95%+ defect detection, 27x faster inspection time',
          },
          {
            icon: '02',
            title: 'Predictive Maintenance',
            description: '48-72 hour failure prediction, 40% downtime reduction',
          },
          {
            icon: '03',
            title: 'Production Optimization',
            description: '20-30% energy cost reduction, maximize throughput',
          },
          {
            icon: '04',
            title: 'Global Engineering',
            description: 'Skilled engineers at 30-50% of Japan hiring cost',
          },
        ],
      },
      unique: {
        title: 'Why Solunai is Unique',
        points: [
          {
            not: 'Not just a software company',
            but: 'Manufacturing engineers who understand your problems',
          },
          {
            not: 'Not just a Japanese company',
            but: 'Global perspective with local execution',
          },
          {
            not: 'Not just AI experts',
            but: 'Proven factory floor experience',
          },
          {
            not: 'Not just consultants',
            but: 'We implement and deliver results',
          },
        ],
      },
      result: {
        title: 'The Result',
        text: 'A manufacturing AI partner who knows the shop floor, has proven results, and solves SME challenges',
      },
    },
  };

  const text = content[lang];

  return (
    <section className="company-philosophy">
      <div className="philosophy-container">
        {/* Vision */}
        <div className="vision-section">
          <h2 className="philosophy-title">{text.vision.title}</h2>
          <p className="vision-text">{text.vision.text}</p>
        </div>

        {/* Mission */}
        <div className="mission-section">
          <h2 className="philosophy-title">{text.mission.title}</h2>
          <p className="mission-subtitle">{text.mission.subtitle}</p>

          <div className="pillars-grid">
            {text.mission.pillars.map((pillar, idx) => (
              <div key={idx} className="pillar-card">
                <div className="pillar-icon">{pillar.icon}</div>
                <h3 className="pillar-title">{pillar.title}</h3>
                <p className="pillar-description">{pillar.description}</p>
              </div>
            ))}
          </div>
        </div>

        {/* What Makes Us Unique */}
        <div className="unique-section">
          <h2 className="philosophy-title">{text.unique.title}</h2>
          <div className="unique-grid">
            {text.unique.points.map((point, idx) => (
              <div key={idx} className="unique-card">
                <div className="unique-not">{point.not}</div>
                <div className="unique-arrow">→</div>
                <div className="unique-but">{point.but}</div>
              </div>
            ))}
          </div>
        </div>

        {/* Result */}
        <div className="result-section">
          <h2 className="philosophy-title">{text.result.title}</h2>
          <p className="result-text">{text.result.text}</p>
        </div>
      </div>
    </section>
  );
};

export default CompanyPhilosophy;
