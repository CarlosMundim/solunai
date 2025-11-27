'use client';

import React from 'react';
import { Building2, Lightbulb, BarChart3, Bot, Globe, Factory, TrendingUp, CheckCircle, DollarSign } from 'lucide-react';
import './ServicesCompetitiveComparison.css';

const competitorIcons = {
  largeSI: Building2,
  startup: Lightbulb,
  consultant: BarChart3
};

const advantageIcons = {
  ai: Bot,
  global: Globe,
  manufacturing: Factory,
  scalable: TrendingUp,
  complete: CheckCircle,
  variable: DollarSign
};

interface ServicesCompetitiveComparisonProps {
  lang: 'ja' | 'en';
}

const ServicesCompetitiveComparison: React.FC<ServicesCompetitiveComparisonProps> = ({ lang }) => {
  const content = {
    ja: {
      title: 'Solunai vs 代替手段',
      subtitle: 'なぜ企業がSolunaiを選ぶのか',
      competitors: [
        {
          type: '大手SI（NEC、富士通、日立）',
          iconKey: 'largeSI',
          solunai: {
            points: [
              { label: 'コスト', value: '50-70%低い' },
              { label: '実装期間', value: '12-18ヶ月' },
              { label: 'ターゲット', value: '中小企業向け' },
              { label: 'AI技術', value: '自社開発' }
            ]
          },
          competitor: {
            points: [
              { label: 'コスト', value: '非常に高額' },
              { label: '実装期間', value: '24-36ヶ月' },
              { label: 'ターゲット', value: '大企業のみ' },
              { label: 'AI技術', value: '外注' }
            ]
          }
        },
        {
          type: 'AIスタートアップ',
          iconKey: 'startup',
          solunai: {
            points: [
              { label: 'ソリューション', value: '完全統合' },
              { label: 'エンジニア', value: 'WorldEmp人材' },
              { label: '実績', value: '€2.5M+実証済み' },
              { label: '専門性', value: '製造業60年' }
            ]
          },
          competitor: {
            points: [
              { label: 'ソリューション', value: 'ソフトウェアのみ' },
              { label: 'エンジニア', value: 'なし' },
              { label: '実績', value: '未実証' },
              { label: '専門性', value: '製造業経験なし' }
            ]
          }
        },
        {
          type: '従来のコンサルタント',
          iconKey: 'consultant',
          solunai: {
            points: [
              { label: 'AI技術', value: '含まれる' },
              { label: '実装速度', value: '迅速（2-6週間）' },
              { label: 'サポート', value: '継続的24/7' },
              { label: '成果', value: '保証されたROI' }
            ]
          },
          competitor: {
            points: [
              { label: 'AI技術', value: 'なし' },
              { label: '実装速度', value: '遅い（4-6ヶ月）' },
              { label: 'サポート', value: 'プロジェクト終了で終わり' },
              { label: '成果', value: 'レポートのみ' }
            ]
          }
        }
      ],
      solunaiUnique: {
        title: 'Solunaiの独自優位性',
        points: [
          { iconKey: 'ai', text: 'AI技術（エージェンシック、コンピュータビジョン）' },
          { iconKey: 'global', text: 'グローバルエンジニアリング（WorldEmp 2-6週間）' },
          { iconKey: 'manufacturing', text: '製造業専門知識（60年以上の統合経験）' },
          { iconKey: 'scalable', text: 'スケーラブルデリバリー（20-30社同時対応）' },
          { iconKey: 'complete', text: '完全ソリューション（ソフトウェアだけでない）' },
          { iconKey: 'variable', text: '変動費（WorldEmpがプロジェクトに応じて拡張）' }
        ]
      }
    },
    en: {
      title: 'Solunai vs Alternatives',
      subtitle: 'Why Companies Choose Solunai',
      competitors: [
        {
          type: 'Large SIs (NEC, Fujitsu, Hitachi)',
          iconKey: 'largeSI',
          solunai: {
            points: [
              { label: 'Cost', value: '50-70% lower' },
              { label: 'Timeline', value: '12-18 months' },
              { label: 'Target', value: 'SME-focused' },
              { label: 'AI Tech', value: 'In-house' }
            ]
          },
          competitor: {
            points: [
              { label: 'Cost', value: 'Very expensive' },
              { label: 'Timeline', value: '24-36 months' },
              { label: 'Target', value: 'Enterprise-only' },
              { label: 'AI Tech', value: 'Outsourced' }
            ]
          }
        },
        {
          type: 'AI Startups',
          iconKey: 'startup',
          solunai: {
            points: [
              { label: 'Solution', value: 'Complete integration' },
              { label: 'Engineers', value: 'WorldEmp talent' },
              { label: 'Track Record', value: '€2.5M+ proven' },
              { label: 'Expertise', value: '60 years manufacturing' }
            ]
          },
          competitor: {
            points: [
              { label: 'Solution', value: 'Software-only' },
              { label: 'Engineers', value: 'None' },
              { label: 'Track Record', value: 'Unproven scale' },
              { label: 'Expertise', value: 'No manufacturing' }
            ]
          }
        },
        {
          type: 'Traditional Consultants',
          iconKey: 'consultant',
          solunai: {
            points: [
              { label: 'AI Tech', value: 'Included' },
              { label: 'Speed', value: 'Fast (2-6 weeks)' },
              { label: 'Support', value: 'Ongoing 24/7' },
              { label: 'Outcome', value: 'Guaranteed ROI' }
            ]
          },
          competitor: {
            points: [
              { label: 'AI Tech', value: 'None' },
              { label: 'Speed', value: 'Slow (4-6 months)' },
              { label: 'Support', value: 'Project-end abandonment' },
              { label: 'Outcome', value: 'Reports only' }
            ]
          }
        }
      ],
      solunaiUnique: {
        title: 'Solunai Unique Advantages',
        points: [
          { iconKey: 'ai', text: 'AI technology (agentic systems, computer vision)' },
          { iconKey: 'global', text: 'Global engineering (WorldEmp 2-6 weeks)' },
          { iconKey: 'manufacturing', text: 'Manufacturing expertise (60+ years combined)' },
          { iconKey: 'scalable', text: 'Scalable delivery (20-30 clients simultaneously)' },
          { iconKey: 'complete', text: 'Complete solution (not just software)' },
          { iconKey: 'variable', text: 'Variable costs (WorldEmp scales with projects)' }
        ]
      }
    }
  };

  const currentContent = content[lang];

  return (
    <section className="services-competitive-comparison">
      <div className="competitive-container">
        <div className="competitive-header">
          <h2 className="competitive-title">{currentContent.title}</h2>
          <p className="competitive-subtitle">{currentContent.subtitle}</p>
        </div>

        <div className="competitors-grid">
          {currentContent.competitors.map((comp, index) => {
            const CompIcon = competitorIcons[comp.iconKey as keyof typeof competitorIcons];
            return (
            <div key={index} className="competitor-comparison-card">
              <div className="competitor-header">
                <span className="competitor-icon">
                  <CompIcon size={28} strokeWidth={1.5} />
                </span>
                <h3 className="competitor-type">{comp.type}</h3>
              </div>

              <div className="comparison-columns">
                <div className="comparison-column solunai-col">
                  <div className="column-header-small">Solunai</div>
                  <div className="comparison-points">
                    {comp.solunai.points.map((point, idx) => (
                      <div key={idx} className="point-row positive">
                        <span className="point-label">{point.label}:</span>
                        <span className="point-value">{point.value}</span>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="comparison-column competitor-col">
                  <div className="column-header-small">{comp.type.split('（')[0].split(' (')[0]}</div>
                  <div className="comparison-points">
                    {comp.competitor.points.map((point, idx) => (
                      <div key={idx} className="point-row negative">
                        <span className="point-label">{point.label}:</span>
                        <span className="point-value">{point.value}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
            );
          })}
        </div>

        <div className="unique-advantages">
          <h3 className="advantages-title">{currentContent.solunaiUnique.title}</h3>
          <div className="advantages-grid">
            {currentContent.solunaiUnique.points.map((point, index) => {
              const AdvIcon = advantageIcons[point.iconKey as keyof typeof advantageIcons];
              return (
              <div key={index} className="advantage-item">
                <span className="advantage-icon">
                  <AdvIcon size={24} strokeWidth={1.5} />
                </span>
                <span className="advantage-text">{point.text}</span>
              </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ServicesCompetitiveComparison;
