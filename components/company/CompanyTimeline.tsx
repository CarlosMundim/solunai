'use client';

import React from 'react';
import './CompanyTimeline.css';

interface CompanyTimelineProps {
  lang: 'ja' | 'en';
}

const CompanyTimeline: React.FC<CompanyTimelineProps> = ({ lang }) => {
  const content = {
    ja: {
      title: '会社の歩み',
      subtitle: 'Company History - Growth Trajectory',

      milestones: [
        {
          year: '2024',
          period: 'Q4',
          title: '会社設立・パートナーシップ構築',
          achievements: [
            'Solunai株式会社設立',
            'WorldEmp B.V.との戦略的パートナーシップ締結',
            'NVIDIA、ANSYS、Microsoft Azureとの技術提携',
            '初期製品開発開始'
          ],
          status: 'completed'
        },
        {
          year: '2025',
          period: 'Q1-Q4',
          title: '初期顧客獲得・実績構築',
          achievements: [
            'FBM Hudson Italiana契約獲得（€2.5M-€3.8M）',
            'デジタルツインプラットフォーム展開成功',
            'ISO 27001、SOC 2 Type II認証取得',
            'GDPR、APPI準拠完了'
          ],
          status: 'in-progress'
        },
        {
          year: '2025-2026',
          period: 'Q4 2025 - Q2 2026',
          title: '日本市場拡大',
          achievements: [
            '日本SME製造業パイロット導入（目標3-5社）',
            'ものづくり補助金獲得（目標¥40M）',
            'JFC製造業融資獲得（目標¥15-30M）',
            'セールス・マーケティングチーム構築'
          ],
          status: 'planned',
          target: true
        },
        {
          year: '2026',
          period: '通年',
          title: '顧客基盤拡大・収益化加速',
          achievements: [
            '目標顧客数: 10-15社',
            '売上目標: ¥120M-200M',
            'ISO 9001、ISO 14001認証取得',
            'エンジニアリングチーム拡大（WorldEmp活用）',
            '損益分岐点達成（Q3予測）'
          ],
          status: 'planned'
        },
        {
          year: '2027+',
          period: '以降',
          title: '黒字化・スケール運営',
          achievements: [
            '黒字化達成（Q1 2027目標）',
            '市場シェア拡大: 0.5%（売上¥185M）',
            '追加製品・サービス展開',
            '地域拡大: 関西・中部地域',
            'シリーズA検討（必要に応じて）'
          ],
          status: 'planned'
        }
      ],

      legend: {
        completed: '完了',
        inProgress: '進行中',
        planned: '計画中'
      }
    },

    en: {
      title: 'Company History',
      subtitle: 'Growth Trajectory',

      milestones: [
        {
          year: '2024',
          period: 'Q4',
          title: 'Company Formation & Partnership Building',
          achievements: [
            'Solunai Systems K.K. established',
            'Strategic partnership with WorldEmp B.V.',
            'Technology partnerships: NVIDIA, ANSYS, Microsoft Azure',
            'Initial product development launched'
          ],
          status: 'completed'
        },
        {
          year: '2025',
          period: 'Q1-Q4',
          title: 'Initial Customer Acquisition & Track Record',
          achievements: [
            'FBM Hudson Italiana contract secured (€2.5M-€3.8M)',
            'Digital Twin platform deployment success',
            'ISO 27001, SOC 2 Type II certifications achieved',
            'GDPR, APPI compliance completed'
          ],
          status: 'in-progress'
        },
        {
          year: '2025-2026',
          period: 'Q4 2025 - Q2 2026',
          title: 'Japanese Market Expansion',
          achievements: [
            'Japanese SME manufacturer pilots (target 3-5 companies)',
            'Monozukuri subsidy secured (target ¥40M)',
            'JFC manufacturing loan secured (target ¥15-30M)',
            'Sales & marketing team establishment'
          ],
          status: 'planned',
          target: true
        },
        {
          year: '2026',
          period: 'Full Year',
          title: 'Customer Base Expansion & Revenue Growth',
          achievements: [
            'Target customers: 10-15 companies',
            'Revenue target: ¥120M-200M',
            'ISO 9001, ISO 14001 certifications',
            'Engineering team expansion (WorldEmp leverage)',
            'Breakeven achieved (Q3 projected)'
          ],
          status: 'planned'
        },
        {
          year: '2027+',
          period: 'Onward',
          title: 'Profitability & Scale Operations',
          achievements: [
            'Profitability achieved (Q1 2027 target)',
            'Market share expansion: 0.5% (¥185M revenue)',
            'Additional product & service launches',
            'Regional expansion: Kansai & Chubu regions',
            'Series A consideration (if scaling requires)'
          ],
          status: 'planned'
        }
      ],

      legend: {
        completed: 'Completed',
        inProgress: 'In Progress',
        planned: 'Planned'
      }
    }
  };

  const current = content[lang];

  return (
    <section className="company-timeline-section">
      <div className="timeline-container">
        <div className="timeline-header">
          <h2>{current.title}</h2>
          <p className="subtitle">{current.subtitle}</p>
        </div>

        <div className="timeline">
          {current.milestones.map((milestone, index) => (
            <div
              key={index}
              className={`timeline-item ${milestone.status} ${milestone.target ? 'target' : ''}`}
            >
              <div className="timeline-marker">
                <div className="marker-dot"></div>
                {index < current.milestones.length - 1 && (
                  <div className="marker-line"></div>
                )}
              </div>

              <div className="timeline-content">
                <div className="timeline-year-badge">
                  <span className="year">{milestone.year}</span>
                  <span className="period">{milestone.period}</span>
                </div>

                <h3>{milestone.title}</h3>

                <ul className="achievements-list">
                  {milestone.achievements.map((achievement, achievementIndex) => (
                    <li key={achievementIndex}>{achievement}</li>
                  ))}
                </ul>

                <div className={`status-badge ${milestone.status}`}>
                  {milestone.status === 'completed' && current.legend.completed}
                  {milestone.status === 'in-progress' && current.legend.inProgress}
                  {milestone.status === 'planned' && current.legend.planned}
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="timeline-legend">
          <div className="legend-item">
            <span className="legend-dot completed"></span>
            <span>{current.legend.completed}</span>
          </div>
          <div className="legend-item">
            <span className="legend-dot in-progress"></span>
            <span>{current.legend.inProgress}</span>
          </div>
          <div className="legend-item">
            <span className="legend-dot planned"></span>
            <span>{current.legend.planned}</span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CompanyTimeline;
