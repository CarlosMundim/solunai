'use client';

import React from 'react';
import './ImplementationProcess.css';

interface ImplementationProcessProps {
  lang: 'ja' | 'en';
}

const ImplementationProcess: React.FC<ImplementationProcessProps> = ({ lang }) => {
  const content = {
    ja: {
      title: '導入プロセス（12ヶ月標準）',
      subtitle: '段階的なアプローチで確実な成果を実現',
      phases: [
        {
          number: '1',
          title: 'フェーズ1：評価・設計',
          duration: '1-2ヶ月',
          tasks: [
            '工場監査と現状分析',
            '技術準備評価',
            'ソリューション設計とROIモデリング',
            '実装ロードマップ'
          ],
          color: '#0066cc'
        },
        {
          number: '2',
          title: 'フェーズ2：プラットフォーム導入',
          duration: '3-6ヶ月',
          tasks: [
            'AIプラットフォーム設置（クラウド基盤）',
            'IoTセンサー設置（必要に応じて）',
            'ERP統合（データ接続）',
            'WorldEmpエンジニアを現場に配備'
          ],
          color: '#28a745'
        },
        {
          number: '3',
          title: 'フェーズ3：モデル訓練・最適化',
          duration: '7-9ヶ月',
          tasks: [
            'お客様のデータでAIモデル訓練',
            'コンピュータビジョンシステム校正',
            '予知保全ベースライン設定',
            'パフォーマンスチューニング'
          ],
          color: '#ffc107'
        },
        {
          number: '4',
          title: 'フェーズ4：従業員トレーニング・引継ぎ',
          duration: '10-12ヶ月',
          tasks: [
            'オペレータートレーニングプログラム',
            'エンジニアリングチームのスキルアップ',
            'ドキュメントとSOP作成',
            'お客様チームへの段階的引継ぎ'
          ],
          color: '#dc3545'
        },
        {
          number: '5',
          title: 'フェーズ5：継続サポート',
          duration: '12ヶ月以降',
          tasks: [
            '24/7プラットフォーム監視',
            '四半期ごとのモデル再訓練',
            '機能強化',
            'WorldEmpエンジニアサポート（必要に応じて）'
          ],
          color: '#6f42c1'
        }
      ],
      summary: {
        implementation: '平均実装期間：12ヶ月',
        payback: '投資回収開始：3-12ヶ月（ソリューションにより異なる）'
      }
    },
    en: {
      title: 'Implementation Process (12-Month Standard)',
      subtitle: 'Phased approach for reliable results',
      phases: [
        {
          number: '1',
          title: 'Phase 1: Assessment & Design',
          duration: '1-2 months',
          tasks: [
            'Factory audit and current state analysis',
            'Technical readiness assessment',
            'Solution design and ROI modeling',
            'Implementation roadmap'
          ],
          color: '#0066cc'
        },
        {
          number: '2',
          title: 'Phase 2: Platform Deployment',
          duration: '3-6 months',
          tasks: [
            'AI platform installation (cloud infrastructure)',
            'IoT sensor installation (as needed)',
            'ERP integration (data connectivity)',
            'WorldEmp engineer deployment on-site'
          ],
          color: '#28a745'
        },
        {
          number: '3',
          title: 'Phase 3: Model Training & Optimization',
          duration: '7-9 months',
          tasks: [
            'AI model training on customer data',
            'Computer vision system calibration',
            'Predictive maintenance baseline setup',
            'Performance tuning'
          ],
          color: '#ffc107'
        },
        {
          number: '4',
          title: 'Phase 4: Employee Training & Handoff',
          duration: '10-12 months',
          tasks: [
            'Operator training program',
            'Engineering team skill development',
            'Documentation and SOP creation',
            'Gradual handoff to customer team'
          ],
          color: '#dc3545'
        },
        {
          number: '5',
          title: 'Phase 5: Ongoing Support',
          duration: '12+ months',
          tasks: [
            '24/7 platform monitoring',
            'Quarterly model retraining',
            'Feature enhancements',
            'WorldEmp engineer support (as needed)'
          ],
          color: '#6f42c1'
        }
      ],
      summary: {
        implementation: 'Average implementation: 12 months',
        payback: 'Payback begins: 3-12 months (varies by solution)'
      }
    }
  };

  const currentContent = content[lang];

  return (
    <section className="implementation-process-section">
      <div className="process-container">
        <div className="process-header">
          <h2>{currentContent.title}</h2>
          <p>{currentContent.subtitle}</p>
        </div>

        <div className="phases-timeline">
          {currentContent.phases.map((phase, index) => (
            <div
              key={index}
              className="phase-card"
              style={{ '--phase-color': phase.color } as React.CSSProperties}
            >
              <div className="phase-number">
                <span>{phase.number}</span>
              </div>
              <div className="phase-content">
                <h3 className="phase-title">{phase.title}</h3>
                <p className="phase-duration">{phase.duration}</p>
                <ul className="phase-tasks">
                  {phase.tasks.map((task, taskIndex) => (
                    <li key={taskIndex}>{task}</li>
                  ))}
                </ul>
              </div>
              {index < currentContent.phases.length - 1 && (
                <div className="phase-connector"></div>
              )}
            </div>
          ))}
        </div>

        <div className="process-summary">
          <div className="summary-item">
            <span className="summary-icon">📅</span>
            <span className="summary-text">{currentContent.summary.implementation}</span>
          </div>
          <div className="summary-item">
            <span className="summary-icon">💰</span>
            <span className="summary-text">{currentContent.summary.payback}</span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ImplementationProcess;
