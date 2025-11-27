'use client';

import React from 'react';
import { Wrench, Zap, DollarSign, Target } from 'lucide-react';
import './EPCFabricationBenefits.css';

const benefitIcons = {
  turnkey: Wrench,
  fast: Zap,
  cost: DollarSign,
  quality: Target,
};

interface EPCFabricationBenefitsProps {
  lang: 'ja' | 'en';
}

const EPCFabricationBenefits: React.FC<EPCFabricationBenefitsProps> = ({ lang }) => {
  const content = {
    ja: {
      title: '主な利点',
      subtitle: 'EPCサービスで達成できること',
      benefits: [
        {
          iconKey: 'turnkey',
          title: 'ターンキー配信',
          description: 'コンセプトから完成まで、プロジェクトのあらゆる側面を管理',
          metrics: ['単一責任窓口', '簡素化された管理', 'リスク削減']
        },
        {
          iconKey: 'fast',
          title: '迅速な実装',
          description: '効率的なプロジェクト管理と実証済みの方法論',
          metrics: ['加速されたタイムライン', '予測可能な配信', '最小限のダウンタイム']
        },
        {
          iconKey: 'cost',
          title: 'コスト最適化',
          description: '統合されたアプローチによる効率的なリソース活用',
          metrics: ['予算内配信', '価値エンジニアリング', '総所有コスト削減']
        },
        {
          iconKey: 'quality',
          title: '品質保証',
          description: '各段階での厳格な品質管理と検証',
          metrics: ['ISO認証プロセス', '性能保証', '長期信頼性']
        }
      ],
      caseStudy: {
        title: 'ケーススタディ: FBM Hudson 航空宇宙施設',
        company: 'FBM Hudson S.p.A.',
        industry: '航空宇宙製造',
        challenge: '複雑な航空宇宙部品の新しい生産ラインとAI統合',
        solution: '完全なEPCソリューション + AI品質管理システム',
        results: [
          { metric: '€2.5M+', label: 'プロジェクト価値' },
          { metric: '25%', label: '生産性向上' },
          { metric: '60%', label: '欠陥削減' },
          { metric: '予定通り', label: '配信' }
        ]
      }
    },
    en: {
      title: 'Key Benefits',
      subtitle: 'What You Achieve with EPC Services',
      benefits: [
        {
          iconKey: 'turnkey',
          title: 'Turnkey Delivery',
          description: 'Single point of accountability from concept to completion',
          metrics: ['Single point of contact', 'Simplified management', 'Reduced risk']
        },
        {
          iconKey: 'fast',
          title: 'Fast Implementation',
          description: 'Efficient project management with proven methodologies',
          metrics: ['Accelerated timeline', 'Predictable delivery', 'Minimal downtime']
        },
        {
          iconKey: 'cost',
          title: 'Cost Optimization',
          description: 'Efficient resource utilization through integrated approach',
          metrics: ['On-budget delivery', 'Value engineering', 'Reduced total cost of ownership']
        },
        {
          iconKey: 'quality',
          title: 'Quality Assurance',
          description: 'Rigorous quality control and validation at every stage',
          metrics: ['ISO-certified processes', 'Performance guarantees', 'Long-term reliability']
        }
      ],
      caseStudy: {
        title: 'Case Study: FBM Hudson Aerospace Facility',
        company: 'FBM Hudson S.p.A.',
        industry: 'Aerospace Manufacturing',
        challenge: 'New production line for complex aerospace parts with AI integration',
        solution: 'Complete EPC solution + AI quality control systems',
        results: [
          { metric: '€2.5M+', label: 'Project Value' },
          { metric: '25%', label: 'Productivity Increase' },
          { metric: '60%', label: 'Defect Reduction' },
          { metric: 'On-Time', label: 'Delivery' }
        ]
      }
    }
  };

  const currentContent = content[lang];

  return (
    <section className="epc-fabrication-benefits">
      <div className="benefits-container">
        <div className="benefits-header">
          <h2 className="benefits-title">{currentContent.title}</h2>
          <p className="benefits-subtitle">{currentContent.subtitle}</p>
        </div>

        <div className="benefits-grid">
          {currentContent.benefits.map((benefit, index) => {
            const IconComponent = benefitIcons[benefit.iconKey as keyof typeof benefitIcons];
            return (
            <div key={index} className="benefit-card">
              <div className="benefit-icon">
                <IconComponent size={32} strokeWidth={1.5} />
              </div>
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
          );
          })}
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

export default EPCFabricationBenefits;
