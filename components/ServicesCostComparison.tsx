'use client';

import React from 'react';
import './ServicesCostComparison.css';

interface ServicesCostComparisonProps {
  lang: 'ja' | 'en';
}

const ServicesCostComparison: React.FC<ServicesCostComparisonProps> = ({ lang }) => {
  const content = {
    ja: {
      title: 'コスト比較：従来 vs Solunai',
      subtitle: 'なぜ企業が60%のコスト削減を達成しているのか',
      traditional: {
        title: '従来の採用（5人のエンジニア）',
        annualCost: '年間¥60M',
        items: [
          { label: '採用期間', value: '4-6ヶ月', negative: true },
          { label: 'トレーニング期間', value: '6-12ヶ月', negative: true },
          { label: 'リスク', value: '退職の可能性（知識喪失）', negative: true },
          { label: '柔軟性', value: 'なし（正社員）', negative: true },
          { label: '専門性', value: '限定的（ジェネラリスト）', negative: true }
        ],
        breakdown: [
          { item: '給与（5人 × ¥12M）', cost: '¥60M' },
          { item: '社会保険・福利厚生', cost: '¥10M' },
          { item: '採用コスト', cost: '¥5M' },
          { item: 'トレーニング', cost: '¥8M' },
          { item: '年間総コスト', cost: '¥83M', highlight: true }
        ]
      },
      solunai: {
        title: 'Solunai + WorldEmp',
        annualCost: '年間¥25M-¥35M',
        items: [
          { label: '実装期間（6ヶ月）', value: '¥15M-¥25M', positive: true },
          { label: '配備速度', value: '2-6週間', positive: true },
          { label: '生産性', value: '即座（専門家）', positive: true },
          { label: '柔軟性', value: '拡大・縮小可能', positive: true },
          { label: '専門性', value: '5カテゴリーの専門家', positive: true }
        ],
        breakdown: [
          { item: 'プラットフォーム導入（初年度）', cost: '¥15M-¥25M' },
          { item: '継続サポート（年間）', cost: '¥5M-¥10M' },
          { item: 'WorldEmpエンジニア（必要時）', cost: '¥10M-¥15M' },
          { item: '年間総コスト', cost: '¥30M-¥50M', highlight: true }
        ]
      },
      savings: {
        title: '年間節約額',
        amount: '¥35M-¥45M',
        percentage: '60%削減',
        benefits: [
          '即座の専門知識アクセス',
          '採用・トレーニングコストなし',
          '柔軟なスケーリング',
          'AI技術を含む'
        ]
      }
    },
    en: {
      title: 'Cost Comparison: Traditional vs Solunai',
      subtitle: 'Why Companies Achieve 60% Cost Reduction',
      traditional: {
        title: 'Traditional Hiring (5 Engineers)',
        annualCost: '¥60M/year',
        items: [
          { label: 'Recruitment', value: '4-6 months', negative: true },
          { label: 'Training', value: '6-12 months', negative: true },
          { label: 'Risk', value: 'May leave (knowledge loss)', negative: true },
          { label: 'Flexibility', value: 'None (permanent)', negative: true },
          { label: 'Expertise', value: 'Limited (generalists)', negative: true }
        ],
        breakdown: [
          { item: 'Salaries (5 × ¥12M)', cost: '¥60M' },
          { item: 'Benefits & Insurance', cost: '¥10M' },
          { item: 'Recruitment Costs', cost: '¥5M' },
          { item: 'Training', cost: '¥8M' },
          { item: 'Total Annual Cost', cost: '¥83M', highlight: true }
        ]
      },
      solunai: {
        title: 'Solunai + WorldEmp',
        annualCost: '¥25M-¥35M/year',
        items: [
          { label: 'Implementation (6 months)', value: '¥15M-¥25M', positive: true },
          { label: 'Deployment', value: '2-6 weeks', positive: true },
          { label: 'Productivity', value: 'Immediate (experts)', positive: true },
          { label: 'Flexibility', value: 'Scale up/down', positive: true },
          { label: 'Expertise', value: '5 specialty categories', positive: true }
        ],
        breakdown: [
          { item: 'Platform Deployment (Year 1)', cost: '¥15M-¥25M' },
          { item: 'Ongoing Support (Annual)', cost: '¥5M-¥10M' },
          { item: 'WorldEmp Engineers (As needed)', cost: '¥10M-¥15M' },
          { item: 'Total Annual Cost', cost: '¥30M-¥50M', highlight: true }
        ]
      },
      savings: {
        title: 'Annual Savings',
        amount: '¥35M-¥45M',
        percentage: '60% Reduction',
        benefits: [
          'Immediate expert access',
          'No recruitment/training costs',
          'Flexible scaling',
          'AI technology included'
        ]
      }
    }
  };

  const currentContent = content[lang];

  return (
    <section className="services-cost-comparison">
      <div className="cost-container">
        <div className="cost-header">
          <h2 className="cost-title">{currentContent.title}</h2>
          <p className="cost-subtitle">{currentContent.subtitle}</p>
        </div>

        <div className="comparison-grid">
          {/* Traditional Hiring */}
          <div className="comparison-column traditional">
            <div className="column-header traditional-header">
              <h3 className="column-title">{currentContent.traditional.title}</h3>
              <div className="annual-cost">{currentContent.traditional.annualCost}</div>
            </div>

            <div className="column-body">
              <div className="items-list">
                {currentContent.traditional.items.map((item, index) => (
                  <div key={index} className="item-row negative">
                    <div className="item-label">{item.label}</div>
                    <div className="item-value">{item.value}</div>
                  </div>
                ))}
              </div>

              <div className="cost-breakdown">
                <h4 className="breakdown-title">{lang === 'ja' ? '詳細内訳' : 'Cost Breakdown'}</h4>
                {currentContent.traditional.breakdown.map((item, index) => (
                  <div key={index} className={`breakdown-row ${item.highlight ? 'highlight' : ''}`}>
                    <span className="breakdown-item">{item.item}</span>
                    <span className="breakdown-cost">{item.cost}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Solunai Solution */}
          <div className="comparison-column solunai">
            <div className="column-header solunai-header">
              <h3 className="column-title">{currentContent.solunai.title}</h3>
              <div className="annual-cost">{currentContent.solunai.annualCost}</div>
            </div>

            <div className="column-body">
              <div className="items-list">
                {currentContent.solunai.items.map((item, index) => (
                  <div key={index} className="item-row positive">
                    <div className="item-label">{item.label}</div>
                    <div className="item-value">{item.value}</div>
                  </div>
                ))}
              </div>

              <div className="cost-breakdown">
                <h4 className="breakdown-title">{lang === 'ja' ? '詳細内訳' : 'Cost Breakdown'}</h4>
                {currentContent.solunai.breakdown.map((item, index) => (
                  <div key={index} className={`breakdown-row ${item.highlight ? 'highlight' : ''}`}>
                    <span className="breakdown-item">{item.item}</span>
                    <span className="breakdown-cost">{item.cost}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        <div className="savings-banner">
          <div className="savings-content">
            <div className="savings-main">
              <h3 className="savings-title">{currentContent.savings.title}</h3>
              <div className="savings-amount">{currentContent.savings.amount}</div>
              <div className="savings-percentage">{currentContent.savings.percentage}</div>
            </div>
            <div className="savings-benefits">
              {currentContent.savings.benefits.map((benefit, index) => (
                <div key={index} className="benefit-item">
                  <svg className="benefit-check" viewBox="0 0 20 20" fill="currentColor">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                  <span>{benefit}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ServicesCostComparison;
