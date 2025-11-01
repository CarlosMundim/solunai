'use client';

import React from 'react';
import './ServicesTransformationProcess.css';

interface ServicesTransformationProcessProps {
  lang: 'ja' | 'en';
}

const ServicesTransformationProcess: React.FC<ServicesTransformationProcessProps> = ({ lang }) => {
  const content = {
    ja: {
      title: 'エンドツーエンド実装プロセス',
      subtitle: '12ヶ月で製造業を完全に変革',
      phases: [
        {
          phase: 'フェーズ1',
          duration: '1-2ヶ月',
          title: '評価 & 設計',
          icon: '🔍',
          activities: [
            '工場監査',
            '技術準備評価',
            'ソリューション設計',
            'ROIモデリング',
            'ロードマップ作成'
          ],
          deliverables: [
            '詳細な実装計画',
            '投資収益分析',
            'リスク評価'
          ]
        },
        {
          phase: 'フェーズ2',
          duration: '3-6ヶ月',
          title: 'プラットフォーム導入',
          icon: '🚀',
          activities: [
            'AIプラットフォーム設置',
            'IoTセンサー導入（必要に応じて）',
            'ERP統合',
            'WorldEmpエンジニアの現場配置'
          ],
          deliverables: [
            '稼働中のAIプラットフォーム',
            '統合システム',
            '専門エンジニアチーム'
          ]
        },
        {
          phase: 'フェーズ3',
          duration: '7-9ヶ月',
          title: 'トレーニング & 最適化',
          icon: '⚙️',
          activities: [
            'クライアントデータでのモデルトレーニング',
            'システムキャリブレーション',
            'パフォーマンスチューニング',
            '精度検証'
          ],
          deliverables: [
            '最適化されたAIモデル',
            '95%以上の精度',
            'パフォーマンスレポート'
          ]
        },
        {
          phase: 'フェーズ4',
          duration: '10-12ヶ月',
          title: '従業員トレーニング',
          icon: '👥',
          activities: [
            'オペレータートレーニング',
            'チームアップスキリング',
            'ドキュメント & SOP作成',
            '段階的な引き継ぎ'
          ],
          deliverables: [
            'トレーニングされたスタッフ',
            '完全なドキュメント',
            '運用準備完了'
          ]
        },
        {
          phase: 'フェーズ5',
          duration: '12ヶ月以降',
          title: '継続的サポート',
          icon: '🛡️',
          activities: [
            '24/7監視',
            '四半期ごとの再トレーニング',
            '機能強化',
            'エンジニアサポート（必要時）'
          ],
          deliverables: [
            '継続的な最適化',
            '定期的なアップデート',
            '長期的な成功'
          ]
        }
      ]
    },
    en: {
      title: 'End-to-End Implementation Process',
      subtitle: 'Complete Transformation in 12 Months',
      phases: [
        {
          phase: 'Phase 1',
          duration: '1-2 months',
          title: 'Assessment & Design',
          icon: '🔍',
          activities: [
            'Factory audit',
            'Technology readiness assessment',
            'Solution design',
            'ROI modeling',
            'Roadmap creation'
          ],
          deliverables: [
            'Detailed implementation plan',
            'ROI analysis',
            'Risk assessment'
          ]
        },
        {
          phase: 'Phase 2',
          duration: '3-6 months',
          title: 'Platform Deployment',
          icon: '🚀',
          activities: [
            'AI platform installation',
            'IoT sensors deployment (if needed)',
            'ERP integration',
            'WorldEmp engineers on-site'
          ],
          deliverables: [
            'Operational AI platform',
            'Integrated systems',
            'Expert engineering team'
          ]
        },
        {
          phase: 'Phase 3',
          duration: '7-9 months',
          title: 'Training & Optimization',
          icon: '⚙️',
          activities: [
            'Model training with client data',
            'System calibration',
            'Performance tuning',
            'Accuracy validation'
          ],
          deliverables: [
            'Optimized AI models',
            '95%+ accuracy achieved',
            'Performance reports'
          ]
        },
        {
          phase: 'Phase 4',
          duration: '10-12 months',
          title: 'Employee Training',
          icon: '👥',
          activities: [
            'Operator training',
            'Team upskilling',
            'Documentation & SOPs',
            'Gradual handover'
          ],
          deliverables: [
            'Trained staff',
            'Complete documentation',
            'Operational readiness'
          ]
        },
        {
          phase: 'Phase 5',
          duration: '12+ months',
          title: 'Ongoing Support',
          icon: '🛡️',
          activities: [
            '24/7 monitoring',
            'Quarterly retraining',
            'Feature enhancements',
            'Engineer support (as needed)'
          ],
          deliverables: [
            'Continuous optimization',
            'Regular updates',
            'Long-term success'
          ]
        }
      ]
    }
  };

  const currentContent = content[lang];

  return (
    <section className="services-transformation-process">
      <div className="process-container">
        <div className="process-header">
          <h2 className="process-title">{currentContent.title}</h2>
          <p className="process-subtitle">{currentContent.subtitle}</p>
        </div>

        <div className="timeline">
          {currentContent.phases.map((phase, index) => (
            <div key={index} className="phase-card">
              <div className="phase-number">
                <div className="phase-icon">{phase.icon}</div>
                <div className="phase-label">{phase.phase}</div>
              </div>

              <div className="phase-content">
                <div className="phase-header-section">
                  <h3 className="phase-title">{phase.title}</h3>
                  <div className="phase-duration">{phase.duration}</div>
                </div>

                <div className="phase-details">
                  <div className="detail-column">
                    <h4 className="detail-heading">{lang === 'ja' ? '活動' : 'Activities'}</h4>
                    <ul className="detail-list">
                      {phase.activities.map((activity, idx) => (
                        <li key={idx} className="detail-item">
                          <span className="detail-bullet">•</span>
                          <span>{activity}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div className="detail-column">
                    <h4 className="detail-heading">{lang === 'ja' ? '成果物' : 'Deliverables'}</h4>
                    <ul className="detail-list">
                      {phase.deliverables.map((deliverable, idx) => (
                        <li key={idx} className="detail-item deliverable">
                          <span className="detail-check">✓</span>
                          <span>{deliverable}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>

              {index < currentContent.phases.length - 1 && (
                <div className="phase-connector"></div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesTransformationProcess;
