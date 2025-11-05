'use client';

import React from 'react';
import './AIImplementationBenefits.css';

interface AIImplementationBenefitsProps {
  lang: 'ja' | 'en';
}

const AIImplementationBenefits: React.FC<AIImplementationBenefitsProps> = ({ lang }) => {
  const content = {
    ja: {
      title: '主な利点',
      subtitle: 'Solunai AI実装で達成できること',
      benefits: [
        {
          icon: '⚡',
          title: '迅速な配備',
          description: '2-4週間のスプリントで従来の開発サイクルより52倍速い',
          metrics: ['アセスメント: 1週間', '設計: 1-2週間', '開発: 4-8週間']
        },
        {
          icon: '💰',
          title: 'ROI保証',
          description: '測定可能な結果と明確な投資収益率',
          metrics: ['30-40%コスト削減', '生産性25%向上', '欠陥率60%削減']
        },
        {
          icon: '🔧',
          title: 'ターンキー配信',
          description: 'アセスメントからサポートまで完全なエンドツーエンドサービス',
          metrics: ['5段階プロセス', '完全な統合', '24/7サポート']
        },
        {
          icon: '📈',
          title: '拡張可能なソリューション',
          description: 'ビジネスと共に成長する将来性のあるAIシステム',
          metrics: ['モジュール式設計', 'クラウドベース', '継続的改善']
        }
      ],
      caseStudy: {
        title: 'ケーススタディ: FBM Hudson',
        company: 'FBM Hudson S.p.A.',
        industry: '航空宇宙製造',
        challenge: '複雑な部品の品質管理と生産最適化',
        solution: 'Computer Visionベースの欠陥検出 + 予測メンテナンス',
        results: [
          { metric: '€2.5M+', label: 'プロジェクト価値' },
          { metric: '60%', label: '欠陥検出改善' },
          { metric: '25%', label: '生産性向上' },
          { metric: '30%', label: 'ダウンタイム削減' }
        ]
      }
    },
    en: {
      title: 'Key Benefits',
      subtitle: 'What You Achieve with Solunai AI Implementation',
      benefits: [
        {
          icon: '⚡',
          title: 'Rapid Deployment',
          description: '2-4 week sprints, 52x faster than traditional development cycles',
          metrics: ['Assessment: 1 week', 'Design: 1-2 weeks', 'Development: 4-8 weeks']
        },
        {
          icon: '💰',
          title: 'ROI-Guaranteed',
          description: 'Measurable results with clear return on investment',
          metrics: ['30-40% cost reduction', '25% productivity gain', '60% defect reduction']
        },
        {
          icon: '🔧',
          title: 'Turnkey Delivery',
          description: 'Complete end-to-end service from assessment to support',
          metrics: ['5-phase process', 'Full integration', '24/7 support']
        },
        {
          icon: '📈',
          title: 'Scalable Solutions',
          description: 'Future-proof AI systems that grow with your business',
          metrics: ['Modular design', 'Cloud-based', 'Continuous improvement']
        }
      ],
      caseStudy: {
        title: 'Case Study: FBM Hudson',
        company: 'FBM Hudson S.p.A.',
        industry: 'Aerospace Manufacturing',
        challenge: 'Quality control and production optimization for complex parts',
        solution: 'Computer Vision-based defect detection + Predictive Maintenance',
        results: [
          { metric: '€2.5M+', label: 'Project Value' },
          { metric: '60%', label: 'Defect Detection Improvement' },
          { metric: '25%', label: 'Productivity Increase' },
          { metric: '30%', label: 'Downtime Reduction' }
        ]
      }
    }
  };

  const currentContent = content[lang];

  return (
    <section className="ai-implementation-benefits">
      <div className="benefits-container">
        <div className="benefits-header">
          <h2 className="benefits-title">{currentContent.title}</h2>
          <p className="benefits-subtitle">{currentContent.subtitle}</p>
        </div>

        <div className="benefits-grid">
          {currentContent.benefits.map((benefit, index) => (
            <div key={index} className="benefit-card">
              <div className="benefit-icon">{benefit.icon}</div>
              <h3 className="benefit-title">{benefit.title}</h3>
              <p className="benefit-description">{benefit.description}</p>
              <ul className="benefit-metrics">
                {benefit.metrics.map((metric, idx) => (
                  <li key={idx} className="metric-item">
                    <svg className="metric-icon" viewBox="0 0 20 20" fill="currentColor">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                    <span>{metric}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="case-study-section">
          <h3 className="case-study-title">{currentContent.caseStudy.title}</h3>
          <div className="case-study-card">
            <div className="case-study-header">
              <div>
                <h4 className="case-study-company">{currentContent.caseStudy.company}</h4>
                <p className="case-study-industry">{currentContent.caseStudy.industry}</p>
              </div>
            </div>
            <div className="case-study-content">
              <div className="case-study-item">
                <h5 className="item-label">{lang === 'ja' ? '課題:' : 'Challenge:'}</h5>
                <p className="item-text">{currentContent.caseStudy.challenge}</p>
              </div>
              <div className="case-study-item">
                <h5 className="item-label">{lang === 'ja' ? 'ソリューション:' : 'Solution:'}</h5>
                <p className="item-text">{currentContent.caseStudy.solution}</p>
              </div>
            </div>
            <div className="case-study-results">
              {currentContent.caseStudy.results.map((result, index) => (
                <div key={index} className="result-card">
                  <div className="result-metric">{result.metric}</div>
                  <div className="result-label">{result.label}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AIImplementationBenefits;
