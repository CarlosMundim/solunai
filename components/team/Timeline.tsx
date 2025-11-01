'use client';

import React from 'react';
import './Timeline.css';

interface TimelineProps {
  lang: 'ja' | 'en';
}

const Timeline: React.FC<TimelineProps> = ({ lang }) => {
  const content = {
    ja: {
      title: '私たちの歩み',
      subtitle: '実証された実績の軌跡',
      milestones: [
        {
          period: '1990年代-2000年代',
          event: 'Carlos - Continental変革',
          description: 'US$7M → $365M（52倍成長達成）',
          highlight: '52×',
          type: 'growth',
        },
        {
          period: '2000年代-2010年代',
          event: 'Tomoo - 戦略的エグジット',
          description: '¥120億円以上のポートフォリオ',
          highlight: '¥12B+',
          type: 'exit',
        },
        {
          period: '2010年代',
          event: 'Carlos - グローバル製造オペレーション',
          description: 'KNM、OUTSOURCING、My Terra',
          highlight: '30+ Years',
          type: 'experience',
        },
        {
          period: '2020年代初期',
          event: '統合専門知識 → Solunai設立',
          description: '60年以上の統合経験を結集',
          highlight: '60+ Years',
          type: 'founding',
        },
        {
          period: '2024年',
          event: 'WorldEmpパートナーシップ確立',
          description: 'グローバルエンジニアリング能力獲得',
          highlight: 'Global',
          type: 'partnership',
        },
        {
          period: '2025年',
          event: 'FBM Hudson €2.5M-€3.8M プロジェクト獲得',
          description: 'ヨーロッパ製造業での実証',
          highlight: '€2.5M+',
          type: 'project',
        },
        {
          period: '2026年',
          event: '日本SME展開',
          description: '目標：10-15社のクライアント獲得',
          highlight: '10-15',
          type: 'expansion',
        },
      ],
    },
    en: {
      title: 'Our Journey',
      subtitle: 'A Track Record of Proven Results',
      milestones: [
        {
          period: '1990s-2000s',
          event: 'Carlos - Continental Transformation',
          description: 'US$7M → $365M (52× growth achievement)',
          highlight: '52×',
          type: 'growth',
        },
        {
          period: '2000s-2010s',
          event: 'Tomoo - Strategic Exits',
          description: '¥12B+ portfolio',
          highlight: '¥12B+',
          type: 'exit',
        },
        {
          period: '2010s',
          event: 'Carlos - Global Manufacturing Operations',
          description: 'KNM, OUTSOURCING, My Terra',
          highlight: '30+ Years',
          type: 'experience',
        },
        {
          period: 'Early 2020s',
          event: 'Combined Expertise → Solunai Founded',
          description: '60+ years combined experience united',
          highlight: '60+ Years',
          type: 'founding',
        },
        {
          period: '2024',
          event: 'WorldEmp Partnership Established',
          description: 'Global engineering capability acquired',
          highlight: 'Global',
          type: 'partnership',
        },
        {
          period: '2025',
          event: 'FBM Hudson €2.5M-€3.8M Project Secured',
          description: 'European manufacturing proof point',
          highlight: '€2.5M+',
          type: 'project',
        },
        {
          period: '2026',
          event: 'Japanese SME Expansion',
          description: 'Target: 10-15 clients',
          highlight: '10-15',
          type: 'expansion',
        },
      ],
    },
  };

  const text = content[lang];

  return (
    <section className="timeline-section">
      <div className="timeline-container">
        <h2 className="timeline-title">{text.title}</h2>
        <p className="timeline-subtitle">{text.subtitle}</p>

        <div className="timeline-track">
          {text.milestones.map((milestone, idx) => (
            <div key={idx} className={`timeline-milestone ${milestone.type}`}>
              <div className="milestone-marker">
                <div className="marker-dot"></div>
                <div className="marker-line"></div>
              </div>

              <div className="milestone-content">
                <div className="milestone-period">{milestone.period}</div>
                <div className="milestone-highlight">{milestone.highlight}</div>
                <h3 className="milestone-event">{milestone.event}</h3>
                <p className="milestone-description">{milestone.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Timeline;
