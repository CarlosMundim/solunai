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
        text: 'AIとグローバル・エンジニアリング・エクセレンスで日本の製造業を変革する',
      },
      mission: {
        title: '私たちのミッション',
        subtitle: 'Solunaiは日本の製造業の人材ギャップを以下の組み合わせで解決：',
        pillars: [
          {
            icon: '01',
            title: '最先端AI技術',
            description: 'デジタルツイン、コンピュータビジョン、予測分析',
          },
          {
            icon: '02',
            title: 'グローバル・エンジニアリング専門知識',
            description: 'WorldEmp提携による世界クラスの人材',
          },
          {
            icon: '03',
            title: '深い製造業ドメイン知識',
            description: '60年以上の統合経験',
          },
          {
            icon: '04',
            title: '実証済みの実行能力',
            description: '欧州製造業変革プロジェクト',
          },
        ],
      },
      unique: {
        title: 'なぜSolunaiがユニークなのか',
        points: [
          {
            not: 'ソフトウェア会社だけではない',
            but: 'AIを構築する製造エンジニア',
          },
          {
            not: '日本企業だけではない',
            but: 'グローバル視点とローカル実行力',
          },
          {
            not: 'AI専門家だけではない',
            but: '実証済みの製造変革リーダー',
          },
          {
            not: 'コンサルタントだけではない',
            but: '完全なターンキーソリューションを提供',
          },
        ],
      },
      result: {
        title: '結果',
        text: '日本のSME製造業が必要とし、金融機関が評価する、完全な製造変革プロバイダー',
      },
    },
    en: {
      vision: {
        title: 'Our Vision',
        text: 'Transforming Japanese Manufacturing with AI and Global Engineering Excellence',
      },
      mission: {
        title: 'Our Mission',
        subtitle: 'Solunai solves Japan\'s manufacturing talent gap through a unique combination of:',
        pillars: [
          {
            icon: '01',
            title: 'Production-Ready AI Technology',
            description: 'Digital Twin, Computer Vision, Predictive Analytics',
          },
          {
            icon: '02',
            title: 'Global Engineering Expertise',
            description: 'World-class talent through WorldEmp partnership',
          },
          {
            icon: '03',
            title: 'Deep Manufacturing Domain Knowledge',
            description: '60+ years combined experience',
          },
          {
            icon: '04',
            title: 'Proven Execution Capability',
            description: 'European manufacturing transformation projects',
          },
        ],
      },
      unique: {
        title: 'Why Solunai is Unique',
        points: [
          {
            not: 'Not just a software company',
            but: 'Manufacturing engineers who build AI',
          },
          {
            not: 'Not just a Japanese company',
            but: 'Global perspective with local execution',
          },
          {
            not: 'Not just AI experts',
            but: 'Proven manufacturing transformation leaders',
          },
          {
            not: 'Not just consultants',
            but: 'Complete turnkey solution providers',
          },
        ],
      },
      result: {
        title: 'The Result',
        text: 'A complete manufacturing transformation provider that Japanese SMEs need and financial institutions trust',
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
