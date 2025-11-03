'use client';

import React from 'react';
import './ImplementationFramework.css';

interface ImplementationFrameworkProps {
  lang: 'ja' | 'en';
}

const ImplementationFramework: React.FC<ImplementationFrameworkProps> = ({ lang }) => {
  const content = {
    ja: {
      heading: '段階的導入ロードマップ',
      subheading: 'あらゆる製造業向け、日本の中小企業に最適化された実践的アプローチ',
      phases: [
        {
          phase: 'フェーズ 1',
          duration: '1〜3ヶ月',
          title: '現状分析とパイロット導入',
          description: '投資を最小限に抑え、最も効果が見込まれる1ライン・1工程からスタート',
          activities: [
            '現場視察と既存システム調査（無料）',
            '導入効果シミュレーション',
            '1ラインへのセンサー・データ収集設備設置',
            'リアルタイムモニタリング開始',
            '現場作業員向けトレーニング（2日間）'
          ],
          deliverables: [
            '現状分析レポート',
            '導入効果分析',
            '1ラインのリアルタイムダッシュボード'
          ]
        },
        {
          phase: 'フェーズ 2',
          duration: '3〜6ヶ月',
          title: '工場全体への展開',
          description: 'パイロット結果を基に、全ラインへ段階的に拡張',
          activities: [
            '全生産ラインへのIoTセンサー拡張',
            '既存MES・ERPシステムとの統合',
            '統一名前空間（Unified Namespace）構築',
            '3D工場可視化の実装',
            'マネージャー向け分析トレーニング'
          ],
          deliverables: [
            '工場全体のリアルタイム可視化',
            '全システム統合完了',
            'ISA-95準拠データモデル'
          ]
        },
        {
          phase: 'フェーズ 3',
          duration: '6〜12ヶ月',
          title: '高度なシミュレーション・最適化',
          description: '蓄積データを活用した予測分析と生産最適化',
          activities: [
            '物理シミュレーション機能追加（CFD、FEA）',
            '機械学習による設備故障予測',
            '生産計画最適化アルゴリズム導入',
            'デジタルツインモデルの高度化',
            'サプライチェーン連携準備'
          ],
          deliverables: [
            '予測保全システム稼働',
            '生産最適化レコメンデーション',
            '完全なデジタルツイン環境'
          ]
        }
      ],
      support: {
        heading: 'Solunaiの導入支援体制',
        items: [
          {
            title: '専任プロジェクトマネージャー',
            description: '導入開始から運用定着まで、製造業経験者が伴走'
          },
          {
            title: 'オンサイト技術サポート',
            description: '初期導入時は週1回の現場訪問、運用開始後も月次訪問'
          },
          {
            title: '段階的導入オプション',
            description: '各フェーズの効果を確認しながら、次フェーズへの展開判断が可能'
          }
        ]
      },
      note: '※ 導入期間は工場規模・既存設備により変動します。無料の現場診断で最適な導入計画を提案します。'
    },
    en: {
      heading: 'Phased Implementation Roadmap',
      subheading: 'For all manufacturers, optimized for Japanese SMEs with practical step-by-step approach',
      phases: [
        {
          phase: 'Phase 1',
          duration: '1-3 Months',
          title: 'Assessment & Pilot Implementation',
          description: 'Start with one production line to minimize investment and prove value',
          activities: [
            'Shop floor assessment and existing system survey (free)',
            'Implementation impact simulation',
            'Sensor and data collection setup for one line',
            'Real-time monitoring launch',
            'Shop floor worker training (2 days)'
          ],
          deliverables: [
            'Current state analysis report',
            'Implementation impact analysis',
            'Real-time dashboard for one line'
          ]
        },
        {
          phase: 'Phase 2',
          duration: '3-6 Months',
          title: 'Factory-Wide Deployment',
          description: 'Based on pilot results, gradually expand to all production lines',
          activities: [
            'IoT sensor expansion to all production lines',
            'Integration with existing MES/ERP systems',
            'Unified Namespace construction',
            '3D factory visualization implementation',
            'Manager-level analytics training'
          ],
          deliverables: [
            'Real-time visualization of entire factory',
            'Complete system integration',
            'ISA-95 compliant data model'
          ]
        },
        {
          phase: 'Phase 3',
          duration: '6-12 Months',
          title: 'Advanced Simulation & Optimization',
          description: 'Leverage accumulated data for predictive analytics and production optimization',
          activities: [
            'Add physics simulation capabilities (CFD, FEA)',
            'Machine learning-based equipment failure prediction',
            'Production planning optimization algorithms',
            'Digital twin model sophistication',
            'Supply chain integration preparation'
          ],
          deliverables: [
            'Predictive maintenance system operational',
            'Production optimization recommendations',
            'Complete digital twin environment'
          ]
        }
      ],
      support: {
        heading: 'Solunai Implementation Support',
        items: [
          {
            title: 'Dedicated Project Manager',
            description: 'Manufacturing industry expert accompanies you from implementation to operational stability'
          },
          {
            title: 'On-Site Technical Support',
            description: 'Weekly shop floor visits during initial phase, monthly visits after go-live'
          },
          {
            title: 'Phased Deployment Options',
            description: 'Decision point at each phase - proceed to next phase only after confirming results'
          }
        ]
      },
      note: '* Implementation timeline varies based on factory size and existing equipment. Free shop floor assessment provides optimal deployment plan.'
    }
  };

  const t = content[lang];

  return (
    <section className="implementation-framework">
      <div className="implementation-framework-container">
        <h2 className="implementation-framework-heading">{t.heading}</h2>
        <p className="implementation-framework-subheading">{t.subheading}</p>

        <div className="phases-timeline">
          {t.phases.map((phase, index) => (
            <div key={index} className="phase-card">
              <div className="phase-header">
                <div className="phase-number">{phase.phase}</div>
                <div className="phase-duration">{phase.duration}</div>
              </div>
              <h3 className="phase-title">{phase.title}</h3>
              <p className="phase-description">{phase.description}</p>

              <div className="phase-section">
                <h4 className="phase-section-title">
                  {lang === 'ja' ? '主な活動' : 'Key Activities'}
                </h4>
                <ul className="phase-list">
                  {phase.activities.map((activity, i) => (
                    <li key={i}>{activity}</li>
                  ))}
                </ul>
              </div>

              <div className="phase-section">
                <h4 className="phase-section-title">
                  {lang === 'ja' ? '成果物' : 'Deliverables'}
                </h4>
                <ul className="phase-list">
                  {phase.deliverables.map((deliverable, i) => (
                    <li key={i}>{deliverable}</li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>

        <div className="support-section">
          <h3 className="support-heading">{t.support.heading}</h3>
          <div className="support-grid">
            {t.support.items.map((item, index) => (
              <div key={index} className="support-item">
                <h4 className="support-item-title">{item.title}</h4>
                <p className="support-item-description">{item.description}</p>
              </div>
            ))}
          </div>
        </div>

        <p className="implementation-note">{t.note}</p>
      </div>
    </section>
  );
};

export default ImplementationFramework;
