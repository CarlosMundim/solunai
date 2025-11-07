'use client';

import React from 'react';
import './GlobalEngineeringBenefits.css';

interface GlobalEngineeringBenefitsProps {
  lang: 'ja' | 'en';
}

const GlobalEngineeringBenefits: React.FC<GlobalEngineeringBenefitsProps> = ({ lang }) => {
  const content = {
    ja: {
      title: '主な利点',
      subtitle: 'グローバルエンジニアリング配備で達成できること',
      benefits: [
        {
          title: '迅速な配備',
          description: '2-6週間で世界クラスのエンジニアを配備、従来の採用より52倍速い',
          metrics: ['2-6週間配備', '52倍速い', '即座のスタート']
        },
        {
          title: 'コスト効率',
          description: '従来の正社員採用と比較して30-40%のコスト削減',
          metrics: ['30-40%削減', '年間¥35-45M節約', '固定費なし']
        },
        {
          title: 'グローバル人材',
          description: '地域で見つけられないスキルへのアクセス',
          metrics: ['世界中の人材', '5つの専門分野', '文化的マッチング']
        },
        {
          title: '柔軟性',
          description: 'プロジェクトベースの契約で必要に応じて拡張・縮小',
          metrics: ['柔軟な契約', '拡張可能', 'リスク削減']
        }
      ],
      caseStudy: {
        title: 'ケーススタディ: 47-Dimensions プラットフォーム',
        company: '47-Dimensions',
        industry: 'グローバル人材マッチング',
        challenge: '日本の中小企業に高度なエンジニアリングスキルへのアクセスを提供',
        solution: 'WorldEmpパートナーシップ + AIベースの人材マッチング',
        results: [
          { metric: '2-6週間', label: '平均配備時間' },
          { metric: '30-40%', label: 'コスト削減' },
          { metric: '52倍', label: '従来比スピード' },
          { metric: '95%', label: 'マッチング成功率' }
        ]
      }
    },
    en: {
      title: 'Key Benefits',
      subtitle: 'What You Achieve with Global Engineering Deployment',
      benefits: [
        {
          title: 'Rapid Deployment',
          description: 'World-class engineers deployed in 2-6 weeks, 52x faster than traditional hiring',
          metrics: ['2-6 week deployment', '52x faster', 'Immediate start']
        },
        {
          title: 'Cost Efficiency',
          description: '30-40% cost reduction compared to traditional permanent hiring',
          metrics: ['30-40% reduction', '¥35-45M saved/year', 'Zero fixed costs']
        },
        {
          title: 'Global Talent',
          description: 'Access to skills you cannot find locally',
          metrics: ['Worldwide talent', '5 specialty areas', 'Cultural matching']
        },
        {
          title: 'Flexibility',
          description: 'Project-based contracts, scale up or down as needed',
          metrics: ['Flexible contracts', 'Scalable', 'Reduced risk']
        }
      ],
      caseStudy: {
        title: 'Case Study: 47-Dimensions Platform',
        company: '47-Dimensions',
        industry: 'Global Talent Matching',
        challenge: 'Providing Japanese SMEs with access to advanced engineering skills',
        solution: 'WorldEmp Partnership + AI-based talent matching',
        results: [
          { metric: '2-6 Weeks', label: 'Average Deployment Time' },
          { metric: '30-40%', label: 'Cost Reduction' },
          { metric: '52x', label: 'Faster Than Traditional' },
          { metric: '95%', label: 'Matching Success Rate' }
        ]
      }
    }
  };

  const currentContent = content[lang];

  return (
    <section className="global-engineering-benefits">
      <div className="benefits-container">
        <div className="benefits-header">
          <h2 className="benefits-title">{currentContent.title}</h2>
          <p className="benefits-subtitle">{currentContent.subtitle}</p>
        </div>

        <div className="benefits-grid">
          {currentContent.benefits.map((benefit, index) => (
            <div key={index} className="benefit-card">
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

export default GlobalEngineeringBenefits;
