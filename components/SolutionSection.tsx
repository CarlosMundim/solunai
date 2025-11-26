'use client';

import React from 'react';
import './SolutionSection.css';

interface SolutionSectionProps {
  lang: 'ja' | 'en';
}

const SolutionSection: React.FC<SolutionSectionProps> = ({ lang }) => {
  const content = {
    ja: {
      heading: 'Solunaiソリューション',
      phases: [
        {
          phase: 'フェーズ1',
          title: 'AI見積プラットフォーム',
          features: [
            'NLP技術によるデータシート自動抽出',
            'HTRI熱計算の完全自動化',
            'BOM自動生成とコスト見積',
            '多言語AI顧客対応（伊・英・アラビア・仏・独）',
            '3Dデジタルツイン可視化付き見積書'
          ],
          techStack: {
            title: '技術スタック',
            items: [
              'Claude 3.5 Sonnet / GPT-4（NLP）',
              'HTRI統合（熱計算エンジン）',
              'Python/TensorFlow（MLモデル）',
              'React + Node.js（フロントエンド・バックエンド）',
              'Azure Cloud（ホスティング）',
              'ERP統合'
            ]
          }
        },
        {
          phase: 'フェーズ2',
          title: 'デジタルツイン基盤',
          features: [
            'フォトリアルな3D可視化',
            '物理ベースシミュレーション（CFD/FEA）',
            'リアルタイムIoTデータ統合',
            'カスタムMLモデル（84年のFBM設計データで学習）'
          ],
          benefits: [
            '95%+精度 vs. 実機性能',
            '顧客信頼性（製造前に製品を確認・承認）',
            '物理プロトタイプ不要',
            '仮想環境で設計問題を発見'
          ]
        },
        {
          phase: 'フェーズ3',
          title: 'エージェント型AIシステム',
          intro: '複数の専門AIエージェントが協調して包括的ソリューションを提供：',
          agentGroups: [
            {
              category: 'エンジニアリングエージェント',
              agents: ['熱設計', '機械設計', '最適化', 'コンプライアンス', '実現可能性']
            },
            {
              category: '生産エージェント',
              agents: ['スケジューリング', '品質予測', 'リソース配分', '在庫管理']
            },
            {
              category: '品質エージェント',
              agents: ['ビジョン検査', 'NDT分析', 'ドキュメント生成', '根本原因分析']
            }
          ],
          workflow: {
            title: 'ワークフロー例',
            items: [
              '顧客問い合わせ処理：14-21日 → 24-48時間',
              'シニアエンジニアレビュー：80%そのまま承認、20%精緻化',
              '人間の監督下での完全自動化'
            ]
          }
        },
        {
          phase: 'フェーズ4',
          title: '自律製造統合',
          systems: [
            {
              name: 'コンピュータビジョン品質管理',
              details: [
                '溶接・組立ステーションに高解像度カメラ',
                '欠陥検出AIモデル（気孔、亀裂、不完全溶融）',
                '100%検査カバレッジ vs. 現行5-10%サンプリング',
                '欠陥検出：67% → 95%'
              ]
            },
            {
              name: 'スワームロボティクス協調',
              details: [
                'CNC機械 + 溶接ロボットにIoTセンサー統合',
                '動的タスク配分、衝突回避',
                '設備稼働率：65% → 95%'
              ]
            },
            {
              name: '予知保全',
              details: [
                '72時間前の故障予測MLモデル',
                '振動、温度、電力モニタリング',
                '予期せぬダウンタイム：12% → <3%'
              ]
            }
          ]
        }
      ]
    },
    en: {
      heading: 'Solunai Solution',
      phases: [
        {
          phase: 'Phase 1',
          title: 'AI-Powered Quotation Platform',
          features: [
            'Automated Datasheet Ingestion (PDF/Excel → structured data, NLP extraction)',
            'HTRI Thermal Calculations (automated, multi-objective optimization)',
            'BOM Generation (complete bill of materials from design, cost estimation)',
            'AI Client Follow-Up (multi-language: Italian, English, Arabic, French, German)',
            'Quotation Document Generation (multi-language, 3D digital twin visualization)'
          ],
          techStack: {
            title: 'Technology Stack',
            items: [
              'Claude 3.5 Sonnet / GPT-4 (NLP)',
              'HTRI Integration (thermal calculation engine)',
              'Python/TensorFlow (ML models)',
              'React + Node.js (frontend & backend)',
              'Azure Cloud (hosting)',
              'ERP Integration'
            ]
          }
        },
        {
          phase: 'Phase 2',
          title: 'Digital Twin Infrastructure',
          features: [
            'Photorealistic 3D visualization',
            'Physics-based simulation (CFD thermal, FEA structural)',
            'Real-time IoT sensor integration',
            'Custom ML models (performance prediction trained on 84 years of FBM designs)'
          ],
          benefits: [
            '95%+ accuracy vs. physical performance',
            'Client confidence (see and approve product before manufacturing)',
            'Eliminate physical prototyping iterations',
            'Catch design issues virtually'
          ]
        },
        {
          phase: 'Phase 3',
          title: 'Agentic Intelligence Systems',
          intro: 'Multiple specialized AI agents collaborate to provide comprehensive solutions:',
          agentGroups: [
            {
              category: 'Engineering Agents',
              agents: ['Thermal Design', 'Mechanical Design', 'Optimization', 'Compliance', 'Feasibility']
            },
            {
              category: 'Production Agents',
              agents: ['Scheduling', 'Quality Prediction', 'Resource Allocation', 'Inventory Management']
            },
            {
              category: 'Quality Agents',
              agents: ['Vision Inspection', 'NDT Analysis', 'Documentation Generation', 'Root Cause Analysis']
            }
          ],
          workflow: {
            title: 'Workflow Example',
            items: [
              'Client inquiry processing: 14-21 days → 24-48 hours',
              'Senior engineer review: 80% approved as-is, 20% refined',
              'Full automation with human oversight'
            ]
          }
        },
        {
          phase: 'Phase 4',
          title: 'Autonomous Manufacturing Integration',
          systems: [
            {
              name: 'Computer Vision QC',
              details: [
                'High-res cameras at welding/assembly stations',
                'AI models for defect detection (porosity, cracks, incomplete fusion)',
                '100% inspection coverage vs. current 5-10% sampling',
                'Defect detection: 67% → 95%'
              ]
            },
            {
              name: 'Swarm Robotics Coordination',
              details: [
                'CNC machines + welding robots retrofitted with IoT sensors',
                'Dynamic task allocation, collision avoidance',
                'Equipment utilization: 65% → 95%'
              ]
            },
            {
              name: 'Predictive Maintenance',
              details: [
                'ML models for 72-hour advance failure warning',
                'Vibration, temperature, power monitoring',
                'Unplanned downtime: 12% → <3%'
              ]
            }
          ]
        }
      ]
    }
  };

  const currentContent = content[lang];

  return (
    <section className="solution-section">
      <div className="solution-container">
        <h2 className="solution-heading">{currentContent.heading}</h2>

        <div className="phases-container">
          {currentContent.phases.map((phase, index) => (
            <div key={index} className="phase-card">
              <div className="phase-header">
                <span className="phase-badge">{phase.phase}</span>
                <h3 className="phase-title">{phase.title}</h3>
              </div>

              {phase.features && (
                <ul className="feature-list">
                  {phase.features.map((feature, fIndex) => (
                    <li key={fIndex}>{feature}</li>
                  ))}
                </ul>
              )}

              {phase.techStack && (
                <div className="tech-stack-box">
                  <h4 className="tech-stack-title">{phase.techStack.title}</h4>
                  <div className="tech-stack-grid">
                    {phase.techStack.items.map((item, tIndex) => (
                      <span key={tIndex} className="tech-badge">{item}</span>
                    ))}
                  </div>
                </div>
              )}

              {phase.benefits && (
                <div className="benefits-box">
                  <ul className="benefit-list">
                    {phase.benefits.map((benefit, bIndex) => (
                      <li key={bIndex}>{benefit}</li>
                    ))}
                  </ul>
                </div>
              )}

              {phase.intro && (
                <p className="phase-intro">{phase.intro}</p>
              )}

              {phase.agentGroups && (
                <div className="agent-groups">
                  {phase.agentGroups.map((group, gIndex) => (
                    <div key={gIndex} className="agent-group">
                      <h4 className="agent-category">{group.category}</h4>
                      <div className="agent-badges">
                        {group.agents.map((agent, aIndex) => (
                          <span key={aIndex} className="agent-badge">{agent}</span>
                        ))}
                      </div>
                    </div>
                  ))}
                </div>
              )}

              {phase.workflow && (
                <div className="workflow-box">
                  <h4 className="workflow-title">{phase.workflow.title}</h4>
                  <ul className="workflow-list">
                    {phase.workflow.items.map((item, wIndex) => (
                      <li key={wIndex}>{item}</li>
                    ))}
                  </ul>
                </div>
              )}

              {phase.systems && (
                <div className="systems-grid">
                  {phase.systems.map((system, sIndex) => (
                    <div key={sIndex} className="system-card">
                      <h4 className="system-name">{system.name}</h4>
                      <ul className="system-details">
                        {system.details.map((detail, dIndex) => (
                          <li key={dIndex}>{detail}</li>
                        ))}
                      </ul>
                    </div>
                  ))}
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SolutionSection;
