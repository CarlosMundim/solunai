'use client';

import React from 'react';
import './AIImplementationProcess.css';

interface AIImplementationProcessProps {
  lang: 'ja' | 'en';
}

const AIImplementationProcess: React.FC<AIImplementationProcessProps> = ({ lang }) => {
  const content = {
    ja: {
      title: '5段階の実装プロセス',
      subtitle: 'アセスメントから本番稼働まで',
      phases: [
        {
          number: '01',
          title: 'アセスメント',
          duration: '1週間',
          description: '現在の運用、データインフラ、ビジネス目標の詳細な評価',
          deliverables: [
            '技術的実現可能性レポート',
            'データ品質監査',
            'ROI予測（3年間）',
            'リスク評価'
          ]
        },
        {
          number: '02',
          title: '設計',
          duration: '1-2週間',
          description: 'カスタマイズされたAIソリューション設計と技術仕様',
          deliverables: [
            'システムアーキテクチャ設計',
            'MLモデル仕様',
            '統合計画',
            'プロジェクトロードマップ'
          ]
        },
        {
          number: '03',
          title: '開発',
          duration: '4-8週間',
          description: 'AIモデルの構築、トレーニング、検証',
          deliverables: [
            'トレーニング済みMLモデル',
            'カスタムダッシュボード',
            'API統合',
            '品質保証テスト'
          ]
        },
        {
          number: '04',
          title: '配備',
          duration: '1-2週間',
          description: '本番環境への展開とシステム統合',
          deliverables: [
            '本番環境インストール',
            'システム統合',
            'パフォーマンス最適化',
            'セキュリティ監査'
          ]
        },
        {
          number: '05',
          title: 'サポート',
          duration: '継続中',
          description: '継続的なモニタリング、最適化、メンテナンス',
          deliverables: [
            '24/7技術サポート',
            'パフォーマンスモニタリング',
            'モデル再トレーニング',
            '継続的改善'
          ]
        }
      ]
    },
    en: {
      title: '5-Phase Implementation Process',
      subtitle: 'From Assessment to Production',
      phases: [
        {
          number: '01',
          title: 'Assessment',
          duration: '1 Week',
          description: 'Detailed evaluation of current operations, data infrastructure, and business goals',
          deliverables: [
            'Technical Feasibility Report',
            'Data Quality Audit',
            'ROI Projection (3-year)',
            'Risk Assessment'
          ]
        },
        {
          number: '02',
          title: 'Design',
          duration: '1-2 Weeks',
          description: 'Customized AI solution design and technical specifications',
          deliverables: [
            'System Architecture Design',
            'ML Model Specifications',
            'Integration Plan',
            'Project Roadmap'
          ]
        },
        {
          number: '03',
          title: 'Development',
          duration: '4-8 Weeks',
          description: 'Building, training, and validating AI models',
          deliverables: [
            'Trained ML Models',
            'Custom Dashboards',
            'API Integration',
            'Quality Assurance Testing'
          ]
        },
        {
          number: '04',
          title: 'Deployment',
          duration: '1-2 Weeks',
          description: 'Production environment rollout and system integration',
          deliverables: [
            'Production Installation',
            'System Integration',
            'Performance Optimization',
            'Security Audit'
          ]
        },
        {
          number: '05',
          title: 'Support',
          duration: 'Ongoing',
          description: 'Continuous monitoring, optimization, and maintenance',
          deliverables: [
            '24/7 Technical Support',
            'Performance Monitoring',
            'Model Retraining',
            'Continuous Improvement'
          ]
        }
      ]
    }
  };

  const currentContent = content[lang];

  return (
    <section className="ai-implementation-process">
      <div className="process-container">
        <div className="process-header">
          <h2 className="process-title">{currentContent.title}</h2>
          <p className="process-subtitle">{currentContent.subtitle}</p>
        </div>

        <div className="phases-timeline">
          {currentContent.phases.map((phase, index) => (
            <div key={index} className="phase-card">
              <div className="phase-number">{phase.number}</div>
              <div className="phase-content">
                <div className="phase-header">
                  <h3 className="phase-title">{phase.title}</h3>
                  <span className="phase-duration">{phase.duration}</span>
                </div>
                <p className="phase-description">{phase.description}</p>
                <div className="phase-deliverables">
                  <h4 className="deliverables-title">
                    {lang === 'ja' ? '成果物:' : 'Deliverables:'}
                  </h4>
                  <ul className="deliverables-list">
                    {phase.deliverables.map((deliverable, idx) => (
                      <li key={idx} className="deliverable-item">
                        <svg className="deliverable-icon" viewBox="0 0 20 20" fill="currentColor">
                          <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                        </svg>
                        <span>{deliverable}</span>
                      </li>
                    ))}
                  </ul>
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

export default AIImplementationProcess;
