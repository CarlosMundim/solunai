'use client';

import React from 'react';
import './CVImplementationFramework.css';

interface CVImplementationFrameworkProps {
  lang: 'ja' | 'en';
}

const CVImplementationFramework: React.FC<CVImplementationFrameworkProps> = ({ lang }) => {
  const content = {
    ja: {
      heading: '段階的導入フレームワーク',
      subheading: 'リスクを最小化しながら、確実にAI検査システムを定着させる3ステップ導入計画',
      intro: '中小製造業でもスムーズに導入できるよう、段階的なアプローチを採用。最小限の初期投資で効果を実証し、納得してから全社展開できます。',
      phases: [
        {
          phase: 'Phase 1',
          duration: '1～3ヶ月',
          title: 'パイロット導入（効果実証）',
          goal: '1ラインでの実証試験により、ROI・精度・運用可能性を検証',
          activities: [
            {
              category: '現地調査・要件定義',
              tasks: [
                '製造ライン視察、検査工程の詳細分析',
                '検査対象品の画像サンプル収集（100-500枚）',
                '成功基準の設定（目標精度・処理時間）'
              ]
            },
            {
              category: 'ハードウェア設置',
              tasks: [
                '産業用カメラ2台設置（試験ライン）',
                'GPU搭載エッジPC配備',
                '照明・撮影環境の最適化'
              ]
            },
            {
              category: 'AI学習・調整',
              tasks: [
                'ディープラーニングモデルの転移学習',
                '検査精度チューニング（目標99%以上）',
                '誤検出の低減調整'
              ]
            },
            {
              category: '検証・評価',
              tasks: [
                '2週間の並行運転（目視検査と同時実施）',
                'ROI試算レポート作成',
                'フェーズ2進行判断会議'
              ]
            }
          ],
          deliverables: [
            'パイロット検証レポート',
            'ROI実績データ',
            'Phase 2 詳細計画書'
          ],
          investment: '¥300万～¥500万',
          decision: '効果実証後、Phase 2へ進むかを判断'
        },
        {
          phase: 'Phase 2',
          duration: '3～6ヶ月',
          title: '工場全体への拡大展開',
          goal: '複数ラインへのシステム展開、MES/ERPとの統合、全員トレーニング',
          activities: [
            {
              category: 'システム拡張',
              tasks: [
                '全製造ラインへのカメラ・PC増設',
                'ネットワークインフラ整備',
                'データサーバー構築（オンプレミス/クラウド選択）'
              ]
            },
            {
              category: 'システム統合',
              tasks: [
                'MES（製造実行システム）連携',
                'ERP（基幹システム）とのデータ連携',
                '生産管理システムとの自動連動'
              ]
            },
            {
              category: '人材育成',
              tasks: [
                '現場検査員向けAIシステム操作トレーニング',
                '管理者向けデータ分析講習',
                'メンテナンス担当者の技術研修'
              ]
            },
            {
              category: '運用体制構築',
              tasks: [
                '日次チェックリスト作成',
                '異常時対応マニュアル整備',
                '定期メンテナンス計画策定'
              ]
            }
          ],
          deliverables: [
            '全ライン稼働システム',
            'MES/ERP統合完了',
            '運用マニュアル一式'
          ],
          investment: '¥800万～¥1,500万',
          decision: '全社展開完了、Phase 3 最適化フェーズへ'
        },
        {
          phase: 'Phase 3',
          duration: '6～12ヶ月',
          title: '高度化・継続改善',
          goal: 'AIモデル再学習、予測品質分析、工程改善への活用',
          activities: [
            {
              category: 'AI精度向上',
              tasks: [
                '蓄積データによるAIモデル再学習',
                '新製品への学習データ追加',
                '季節変動・材料変更への対応調整'
              ]
            },
            {
              category: '高度分析機能',
              tasks: [
                '予測品質分析（どの工程で不良が起きやすいか）',
                '材料ロット別品質傾向の可視化',
                'AI予測による予防保全'
              ]
            },
            {
              category: '工程改善活動',
              tasks: [
                '不良発生パターンの根本原因分析',
                '作業手順の標準化・最適化',
                'サプライヤーへの品質フィードバック'
              ]
            },
            {
              category: '他工程への展開',
              tasks: [
                '組立工程へのAI検査拡大',
                '出荷前最終検査の自動化',
                '入荷部品検査への応用'
              ]
            }
          ],
          deliverables: [
            '再学習済みAIモデル',
            '品質分析ダッシュボード',
            '継続改善レポート（月次）'
          ],
          investment: '年間保守費 ¥200万～¥400万',
          decision: '継続的改善サイクルの確立'
        }
      ],
      support: {
        heading: '導入後サポート体制',
        description: 'Solunaiは導入して終わりではなく、継続的な成功をサポート',
        items: [
          {
            title: 'テクニカルサポート',
            description: '電話・メール・リモート接続による技術サポート（平日9:00-18:00、緊急時24時間対応）'
          },
          {
            title: '定期訪問メンテナンス',
            description: '年4回の現地訪問による点検・調整・トレーニング'
          },
          {
            title: 'AIモデル再学習',
            description: '新製品追加時のAI学習データ作成支援（年2回まで無料）'
          },
          {
            title: 'システムアップデート',
            description: '最新AI技術・セキュリティパッチの自動配信'
          },
          {
            title: 'ユーザーコミュニティ',
            description: '導入企業同士の情報交換会・ベストプラクティス共有（四半期に1回）'
          }
        ]
      },
      timeline: {
        heading: '標準導入スケジュール（例：月産10,000個ライン）',
        description: '契約から本格稼働までの標準スケジュール',
        milestones: [
          { month: '1ヶ月目', event: '契約・キックオフ、現地調査' },
          { month: '2ヶ月目', event: 'ハードウェア設置、AI学習開始' },
          { month: '3ヶ月目', event: 'パイロット稼働、並行運転' },
          { month: '4ヶ月目', event: 'Phase 1 評価、Phase 2 承認' },
          { month: '5-6ヶ月目', event: '全ラインへの展開工事' },
          { month: '7-8ヶ月目', event: 'MES/ERP統合、トレーニング' },
          { month: '9ヶ月目', event: '全社本稼働開始' },
          { month: '12ヶ月目', event: 'Phase 3 高度化フェーズ開始' }
        ]
      }
    },
    en: {
      heading: 'Phased Implementation Framework',
      subheading: '3-step deployment plan to reliably establish AI inspection system while minimizing risk',
      intro: 'Designed for smooth SME adoption with a phased approach. Demonstrate effectiveness with minimal initial investment, then expand company-wide with confidence.',
      phases: [
        {
          phase: 'Phase 1',
          duration: '1-3 months',
          title: 'Pilot Deployment (Proof of Concept)',
          goal: 'Validate ROI, accuracy, and operational viability through single-line pilot',
          activities: [
            {
              category: 'Site Survey & Requirements',
              tasks: [
                'Production line inspection, detailed process analysis',
                'Image sample collection (100-500 images)',
                'Success criteria definition (target accuracy, processing time)'
              ]
            },
            {
              category: 'Hardware Installation',
              tasks: [
                'Install 2 industrial cameras (pilot line)',
                'Deploy GPU-equipped edge PC',
                'Optimize lighting & imaging environment'
              ]
            },
            {
              category: 'AI Training & Tuning',
              tasks: [
                'Deep learning model transfer learning',
                'Inspection accuracy tuning (target 99%+)',
                'False positive reduction tuning'
              ]
            },
            {
              category: 'Validation & Evaluation',
              tasks: [
                '2-week parallel operation (with manual inspection)',
                'ROI calculation report',
                'Phase 2 go/no-go decision meeting'
              ]
            }
          ],
          deliverables: [
            'Pilot validation report',
            'ROI performance data',
            'Phase 2 detailed plan'
          ],
          investment: '¥3M - ¥5M',
          decision: 'Decide Phase 2 proceed after effectiveness validation'
        },
        {
          phase: 'Phase 2',
          duration: '3-6 months',
          title: 'Factory-Wide Rollout',
          goal: 'Multi-line system deployment, MES/ERP integration, comprehensive training',
          activities: [
            {
              category: 'System Expansion',
              tasks: [
                'Camera & PC installation across all production lines',
                'Network infrastructure setup',
                'Data server deployment (on-premise/cloud selection)'
              ]
            },
            {
              category: 'System Integration',
              tasks: [
                'MES (Manufacturing Execution System) integration',
                'ERP (Enterprise Resource Planning) data linkage',
                'Production management system automation'
              ]
            },
            {
              category: 'Staff Training',
              tasks: [
                'AI system operation training for inspectors',
                'Data analysis training for managers',
                'Technical training for maintenance staff'
              ]
            },
            {
              category: 'Operations Framework',
              tasks: [
                'Daily checklist creation',
                'Incident response manual',
                'Periodic maintenance schedule'
              ]
            }
          ],
          deliverables: [
            'All-line operational system',
            'MES/ERP integration complete',
            'Operations manual set'
          ],
          investment: '¥8M - ¥15M',
          decision: 'Factory-wide deployment complete, proceed to Phase 3 optimization'
        },
        {
          phase: 'Phase 3',
          duration: '6-12 months',
          title: 'Advanced Analytics & Continuous Improvement',
          goal: 'AI model retraining, predictive quality analysis, process improvement applications',
          activities: [
            {
              category: 'AI Accuracy Enhancement',
              tasks: [
                'AI model retraining with accumulated data',
                'Training data addition for new products',
                'Seasonal variation & material change adjustments'
              ]
            },
            {
              category: 'Advanced Analytics',
              tasks: [
                'Predictive quality analysis (which processes cause defects)',
                'Material lot quality trend visualization',
                'AI-predicted preventive maintenance'
              ]
            },
            {
              category: 'Process Improvement',
              tasks: [
                'Root cause analysis of defect patterns',
                'Work procedure standardization & optimization',
                'Supplier quality feedback'
              ]
            },
            {
              category: 'Cross-Process Expansion',
              tasks: [
                'AI inspection expansion to assembly processes',
                'Pre-shipment final inspection automation',
                'Incoming parts inspection applications'
              ]
            }
          ],
          deliverables: [
            'Retrained AI models',
            'Quality analytics dashboard',
            'Continuous improvement reports (monthly)'
          ],
          investment: 'Annual maintenance ¥2M - ¥4M',
          decision: 'Establish continuous improvement cycle'
        }
      ],
      support: {
        heading: 'Post-Implementation Support',
        description: 'Solunai doesn\'t end with deployment - we support your ongoing success',
        items: [
          {
            title: 'Technical Support',
            description: 'Phone, email, remote support (weekdays 9am-6pm, 24h emergency response)'
          },
          {
            title: 'Periodic On-Site Maintenance',
            description: 'Quarterly on-site visits for inspection, tuning, and training'
          },
          {
            title: 'AI Model Retraining',
            description: 'AI training data creation support for new products (2x/year free)'
          },
          {
            title: 'System Updates',
            description: 'Automatic distribution of latest AI tech & security patches'
          },
          {
            title: 'User Community',
            description: 'Customer networking events & best practice sharing (quarterly)'
          }
        ]
      },
      timeline: {
        heading: 'Standard Implementation Timeline (Example: 10,000 units/month line)',
        description: 'Standard schedule from contract to full operation',
        milestones: [
          { month: 'Month 1', event: 'Contract, kickoff, site survey' },
          { month: 'Month 2', event: 'Hardware installation, AI training start' },
          { month: 'Month 3', event: 'Pilot operation, parallel run' },
          { month: 'Month 4', event: 'Phase 1 evaluation, Phase 2 approval' },
          { month: 'Month 5-6', event: 'All-line rollout construction' },
          { month: 'Month 7-8', event: 'MES/ERP integration, training' },
          { month: 'Month 9', event: 'Full company-wide operation start' },
          { month: 'Month 12', event: 'Phase 3 advanced analytics start' }
        ]
      }
    }
  };

  const t = content[lang];

  return (
    <section className="cv-implementation-framework">
      <div className="cv-implementation-framework-container">
        <h2 className="cv-implementation-framework-heading">{t.heading}</h2>
        <p className="cv-implementation-framework-subheading">{t.subheading}</p>
        <p className="cv-implementation-framework-intro">{t.intro}</p>

        {/* Phases */}
        <div className="phases-container">
          {t.phases.map((phase, phaseIndex) => (
            <div key={phaseIndex} className="phase-card">
              <div className="phase-header">
                <div className="phase-badge">{phase.phase}</div>
                <div className="phase-duration">{phase.duration}</div>
              </div>
              <h3 className="phase-title">{phase.title}</h3>
              <p className="phase-goal">{phase.goal}</p>

              <div className="activities-section">
                {phase.activities.map((activity, actIndex) => (
                  <div key={actIndex} className="activity-group">
                    <h4 className="activity-category">{activity.category}</h4>
                    <ul className="activity-tasks">
                      {activity.tasks.map((task, taskIndex) => (
                        <li key={taskIndex}>{task}</li>
                      ))}
                    </ul>
                  </div>
                ))}
              </div>

              <div className="phase-footer">
                <div className="deliverables">
                  <h5 className="deliverables-heading">{lang === 'ja' ? '成果物' : 'Deliverables'}</h5>
                  <ul>
                    {phase.deliverables.map((deliverable, delIndex) => (
                      <li key={delIndex}>{deliverable}</li>
                    ))}
                  </ul>
                </div>
                <div className="phase-investment">
                  <span className="investment-label">{lang === 'ja' ? '投資額' : 'Investment'}</span>
                  <span className="investment-amount">{phase.investment}</span>
                </div>
                <div className="phase-decision">{phase.decision}</div>
              </div>
            </div>
          ))}
        </div>

        {/* Support Section */}
        <div className="support-section">
          <h3 className="section-heading">{t.support.heading}</h3>
          <p className="section-description">{t.support.description}</p>
          <div className="support-grid">
            {t.support.items.map((item, index) => (
              <div key={index} className="support-card">
                <div className="support-icon">✓</div>
                <h4 className="support-title">{item.title}</h4>
                <p className="support-description">{item.description}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Timeline Section */}
        <div className="timeline-section">
          <h3 className="section-heading">{t.timeline.heading}</h3>
          <p className="section-description">{t.timeline.description}</p>
          <div className="timeline-container">
            {t.timeline.milestones.map((milestone, index) => (
              <div key={index} className="timeline-item">
                <div className="timeline-month">{milestone.month}</div>
                <div className="timeline-event">{milestone.event}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default CVImplementationFramework;
