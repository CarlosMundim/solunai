'use client';

import React from 'react';
import './FundingStrategy.css';

interface FundingStrategyProps {
  lang: 'ja' | 'en';
}

const FundingStrategy: React.FC<FundingStrategyProps> = ({ lang }) => {
  const content = {
    ja: {
      title: '資金調達戦略',
      subtitle: 'Funding Strategy - Path to Profitability',
      intro: '政府補助金から収益化まで、明確な資金計画',

      phases: [
        {
          phase: 'フェーズ1',
          period: '現在 - 2025年',
          title: '政府補助金・低金利融資',
          totalTarget: '目標総額: ¥60M - ¥80M',
          sources: [
            {
              name: 'ものづくり補助金',
              amount: '¥40M',
              status: '申請準備中',
              description: '製造業デジタル化支援'
            },
            {
              name: '日本政策金融公庫（JFC）製造業融資',
              amount: '¥15M - ¥30M',
              status: '申請準備中',
              description: '低金利製造業支援融資'
            },
            {
              name: 'JETRO支援プログラム',
              amount: '¥5M - ¥10M',
              status: '検討中',
              description: '海外展開支援'
            }
          ],
          usage: [
            '初期製品開発（¥20M-25M）',
            'WorldEmpエンジニア配備（¥15M-20M）',
            'セールス・マーケティング（¥15M-20M）',
            '運転資金（¥10M-15M）'
          ]
        },
        {
          phase: 'フェーズ2',
          period: '2026年',
          title: '収益再投資 + 戦略的パートナーシップ',
          sources: [
            {
              name: 'FBM契約からの利益再投資',
              description: '既存プロジェクトからのキャッシュフロー'
            },
            {
              name: 'WorldEmpチーム拡大',
              description: '変動費モデルでスケール'
            },
            {
              name: 'セールス・マーケティング投資',
              amount: '¥20M - ¥30M',
              description: '日本市場開拓'
            }
          ]
        },
        {
          phase: 'フェーズ3',
          period: '2027年以降',
          title: '黒字化運営',
          milestones: [
            {
              label: '損益分岐点',
              target: '2026年Q3予測'
            },
            {
              label: '黒字化',
              target: '2027年Q1'
            },
            {
              label: 'シリーズA検討',
              target: 'スケール必要時（2028年以降）'
            }
          ]
        }
      ],

      riskMitigation: {
        title: 'リスク軽減戦略',
        items: [
          '複数の資金源による分散',
          '変動費モデルによる固定費抑制',
          '実証済み契約（FBM）による信用力',
          '政府支援プログラムの活用'
        ]
      }
    },

    en: {
      title: 'Funding Strategy',
      subtitle: 'Path to Profitability',
      intro: 'Clear funding plan from government grants to profitability',

      phases: [
        {
          phase: 'Phase 1',
          period: 'Current - 2025',
          title: 'Government Grants & Low-Interest Loans',
          totalTarget: 'Total Target: ¥60M - ¥80M',
          sources: [
            {
              name: 'Monozukuri Subsidy',
              amount: '¥40M',
              status: 'Application in progress',
              description: 'Manufacturing digitalization support'
            },
            {
              name: 'Japan Finance Corporation (JFC) Manufacturing Loan',
              amount: '¥15M - ¥30M',
              status: 'Application in progress',
              description: 'Low-interest manufacturing support'
            },
            {
              name: 'JETRO Support Program',
              amount: '¥5M - ¥10M',
              status: 'Under consideration',
              description: 'Global expansion support'
            }
          ],
          usage: [
            'Initial product development (¥20M-25M)',
            'WorldEmp engineer deployment (¥15M-20M)',
            'Sales & marketing (¥15M-20M)',
            'Working capital (¥10M-15M)'
          ]
        },
        {
          phase: 'Phase 2',
          period: '2026',
          title: 'Revenue Reinvestment + Strategic Partnerships',
          sources: [
            {
              name: 'Reinvest FBM contract profits',
              description: 'Cash flow from existing projects'
            },
            {
              name: 'Expand WorldEmp team',
              description: 'Scale with variable cost model'
            },
            {
              name: 'Sales & marketing investment',
              amount: '¥20M - ¥30M',
              description: 'Japanese market expansion'
            }
          ]
        },
        {
          phase: 'Phase 3',
          period: '2027+',
          title: 'Profitable Operations',
          milestones: [
            {
              label: 'Breakeven',
              target: 'Q3 2026 projected'
            },
            {
              label: 'Profitability',
              target: 'Q1 2027'
            },
            {
              label: 'Series A consideration',
              target: 'If scaling requires (2028+)'
            }
          ]
        }
      ],

      riskMitigation: {
        title: 'Risk Mitigation Strategy',
        items: [
          'Diversification across multiple funding sources',
          'Variable cost model minimizes fixed costs',
          'Proven contract (FBM) provides credibility',
          'Leverage government support programs'
        ]
      }
    }
  };

  const current = content[lang];

  return (
    <section className="funding-strategy-section">
      <div className="funding-container">
        <div className="funding-header">
          <h2>{current.title}</h2>
          <p className="subtitle">{current.subtitle}</p>
          <p className="intro">{current.intro}</p>
        </div>

        <div className="phases-timeline">
          {current.phases.map((phase, index) => (
            <div key={index} className="phase-card">
              <div className="phase-header">
                <div className="phase-badge">{phase.phase}</div>
                <div className="phase-period">{phase.period}</div>
              </div>

              <h3 className="phase-title">{phase.title}</h3>

              {phase.totalTarget && (
                <div className="phase-total">{phase.totalTarget}</div>
              )}

              {phase.sources && (
                <div className="funding-sources">
                  {phase.sources.map((source, sourceIndex) => (
                    <div key={sourceIndex} className="source-item">
                      <div className="source-header">
                        <div className="source-name">{source.name}</div>
                        {source.amount && (
                          <div className="source-amount">{source.amount}</div>
                        )}
                      </div>
                      {'status' in source && source.status && (
                        <div className="source-status">{source.status}</div>
                      )}
                      <div className="source-description">{source.description}</div>
                    </div>
                  ))}
                </div>
              )}

              {phase.usage && (
                <div className="fund-usage">
                  <h4>{lang === 'ja' ? '資金使途:' : 'Fund Allocation:'}</h4>
                  <ul>
                    {phase.usage.map((use, useIndex) => (
                      <li key={useIndex}>{use}</li>
                    ))}
                  </ul>
                </div>
              )}

              {phase.milestones && (
                <div className="phase-milestones">
                  {phase.milestones.map((milestone, milestoneIndex) => (
                    <div key={milestoneIndex} className="milestone-item">
                      <div className="milestone-label">{milestone.label}</div>
                      <div className="milestone-target">{milestone.target}</div>
                    </div>
                  ))}
                </div>
              )}
            </div>
          ))}
        </div>

        <div className="risk-mitigation">
          <h3>{current.riskMitigation.title}</h3>
          <div className="risk-grid">
            {current.riskMitigation.items.map((item, index) => (
              <div key={index} className="risk-item">
                <span className="risk-icon">✓</span>
                <span>{item}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default FundingStrategy;
