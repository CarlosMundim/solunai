'use client';

import React from 'react';
import './FinancialHighlights.css';

interface FinancialHighlightsProps {
  lang: 'ja' | 'en';
}

const FinancialHighlights: React.FC<FinancialHighlightsProps> = ({ lang }) => {
  const content = {
    ja: {
      title: '財務ハイライト',
      subtitle: 'Financial Highlights - Proven Revenue & Strong Pipeline',
      intro: '実績のある契約と強固なパイプラインにより、持続可能な成長を実現',

      currentContracts: {
        title: '現在の契約実績',
        items: [
          {
            client: 'FBM Hudson Italiana',
            location: 'イタリア/UAE',
            amount: '国際製造業パートナーシップ',
            amountJpy: '',
            period: '24ヶ月（2年間）',
            status: '2025年10月契約締結',
            description: '熱交換器製造のデジタルツイン変革プロジェクト'
          }
        ]
      },

      pipeline: {
        title: '販売パイプライン（2026年Q1-Q2）',
        target: '目標: 3-5社の日本のSME製造業パイロット導入',
        estimatedValue: '予想契約額: ¥120M - ¥200M',
        avgPerClient: '平均単価: ¥40M/社',
        industries: [
          '自動車部品製造',
          'HVAC機器製造',
          '電子部品製造',
          '精密機械製造'
        ]
      },

      marketOpportunity: {
        title: '市場機会',
        items: [
          {
            label: '日本のデジタルツイン市場',
            value: '¥37B',
            period: '2033年まで',
            growth: 'CAGR 25%'
          },
          {
            label: 'ターゲットセグメント',
            value: '350,000+',
            description: '日本のSME製造業'
          },
          {
            label: '対象市場（初年度-2年目）',
            value: '50-100社',
            description: '中規模製造業'
          },
          {
            label: '市場シェア目標（3年目）',
            value: '0.5%',
            revenue: '売上目標: ¥185M'
          }
        ]
      },

      revenueModel: {
        title: '収益モデル',
        streams: [
          {
            type: 'SaaSサブスクリプション',
            range: '¥300K - ¥1.5M',
            period: '年間/顧客'
          },
          {
            type: '導入費用',
            range: '¥800K - ¥4M',
            period: '初期費用'
          },
          {
            type: 'サポート・保守',
            range: 'ライセンス料の20%',
            period: '年間'
          },
          {
            type: '平均顧客LTV',
            range: '¥5M - ¥10M',
            period: '3年間'
          }
        ]
      },

      profitMargins: {
        title: '利益率',
        target: '目標: 50-60%（2年目以降）',
        enabler: 'WorldEmp変動費構造により実現',
        comparison: '業界平均: 30-40%',
        advantage: '当社優位性: +20-30ポイント'
      }
    },

    en: {
      title: 'Financial Highlights',
      subtitle: 'Proven Revenue & Strong Pipeline',
      intro: 'Sustainable growth driven by proven contracts and robust pipeline',

      currentContracts: {
        title: 'Current Contract Performance',
        items: [
          {
            client: 'FBM Hudson Italiana',
            location: 'Italy/UAE',
            amount: 'International manufacturing partnership',
            amountJpy: '',
            period: '24 months (2 years)',
            status: 'Contract signed October 2025',
            description: 'Digital Twin transformation for heat exchanger manufacturing'
          }
        ]
      },

      pipeline: {
        title: 'Sales Pipeline (Q1-Q2 2026)',
        target: 'Target: 3-5 Japanese SME manufacturer pilots',
        estimatedValue: 'Estimated Contract Value: ¥120M - ¥200M',
        avgPerClient: 'Average per Client: ¥40M',
        industries: [
          'Automotive Parts Manufacturing',
          'HVAC Equipment Manufacturing',
          'Electronics Manufacturing',
          'Precision Machinery Manufacturing'
        ]
      },

      marketOpportunity: {
        title: 'Market Opportunity',
        items: [
          {
            label: 'Japan Digital Twin Market',
            value: '¥37B',
            period: 'by 2033',
            growth: 'CAGR 25%'
          },
          {
            label: 'Target Segment',
            value: '350,000+',
            description: 'Japanese SME manufacturers'
          },
          {
            label: 'Addressable Market (Year 1-2)',
            value: '50-100',
            description: 'mid-size manufacturers'
          },
          {
            label: 'Market Share Target (Year 3)',
            value: '0.5%',
            revenue: 'Revenue Target: ¥185M'
          }
        ]
      },

      revenueModel: {
        title: 'Revenue Model',
        streams: [
          {
            type: 'SaaS Subscriptions',
            range: '¥300K - ¥1.5M',
            period: 'per year/customer'
          },
          {
            type: 'Implementation Fees',
            range: '¥800K - ¥4M',
            period: 'one-time'
          },
          {
            type: 'Support & Maintenance',
            range: '20% of license fee',
            period: 'annual'
          },
          {
            type: 'Average Customer LTV',
            range: '¥5M - ¥10M',
            period: 'over 3 years'
          }
        ]
      },

      profitMargins: {
        title: 'Profit Margins',
        target: 'Target: 50-60% (Year 2+)',
        enabler: 'Enabled by WorldEmp variable cost structure',
        comparison: 'Industry Average: 30-40%',
        advantage: 'Our Advantage: +20-30 points'
      }
    }
  };

  const current = content[lang];

  return (
    <section className="financial-highlights-section">
      <div className="financial-container">
        <div className="financial-header">
          <h2>{current.title}</h2>
          <p className="subtitle">{current.subtitle}</p>
          <p className="intro">{current.intro}</p>
        </div>

        {/* Current Contracts */}
        <div className="financial-block contracts-block">
          <h3 className="block-title">{current.currentContracts.title}</h3>
          {current.currentContracts.items.map((contract, index) => (
            <div key={index} className="contract-card">
              <div className="contract-header">
                <div>
                  <h4>{contract.client}</h4>
                  <p className="contract-location">{contract.location}</p>
                </div>
                <div className="contract-amount">
                  <div className="amount-primary">{contract.amount}</div>
                  <div className="amount-secondary">{contract.amountJpy}</div>
                </div>
              </div>
              <div className="contract-details">
                <div className="detail-item">
                  <span className="detail-label">{lang === 'ja' ? '期間:' : 'Period:'}</span>
                  <span className="detail-value">{contract.period}</span>
                </div>
                <div className="detail-item">
                  <span className="detail-label">{lang === 'ja' ? 'ステータス:' : 'Status:'}</span>
                  <span className="detail-value status-active">{contract.status}</span>
                </div>
              </div>
              <p className="contract-description">{contract.description}</p>
            </div>
          ))}
        </div>

        {/* Pipeline */}
        <div className="financial-block pipeline-block">
          <h3 className="block-title">{current.pipeline.title}</h3>
          <div className="pipeline-summary">
            <div className="pipeline-stat">
              <div className="stat-value">3-5</div>
              <div className="stat-label">{current.pipeline.target}</div>
            </div>
            <div className="pipeline-stat">
              <div className="stat-value">¥120M - ¥200M</div>
              <div className="stat-label">{current.pipeline.estimatedValue}</div>
            </div>
            <div className="pipeline-stat">
              <div className="stat-value">¥40M</div>
              <div className="stat-label">{current.pipeline.avgPerClient}</div>
            </div>
          </div>
          <div className="pipeline-industries">
            <h4>{lang === 'ja' ? '対象業界:' : 'Target Industries:'}</h4>
            <ul>
              {current.pipeline.industries.map((industry, index) => (
                <li key={index}>{industry}</li>
              ))}
            </ul>
          </div>
        </div>

        {/* Market Opportunity */}
        <div className="financial-block market-block">
          <h3 className="block-title">{current.marketOpportunity.title}</h3>
          <div className="market-grid">
            {current.marketOpportunity.items.map((item, index) => (
              <div key={index} className="market-card">
                <div className="market-value">{item.value}</div>
                <div className="market-label">{item.label}</div>
                {item.period && <div className="market-period">{item.period}</div>}
                {item.growth && <div className="market-growth">{item.growth}</div>}
                {item.description && <div className="market-description">{item.description}</div>}
                {item.revenue && <div className="market-revenue">{item.revenue}</div>}
              </div>
            ))}
          </div>
        </div>

        {/* Revenue Model */}
        <div className="financial-block revenue-block">
          <h3 className="block-title">{current.revenueModel.title}</h3>
          <div className="revenue-streams">
            {current.revenueModel.streams.map((stream, index) => (
              <div key={index} className="revenue-stream">
                <div className="stream-type">{stream.type}</div>
                <div className="stream-details">
                  <span className="stream-range">{stream.range}</span>
                  <span className="stream-period">{stream.period}</span>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Profit Margins */}
        <div className="financial-block profit-block">
          <h3 className="block-title">{current.profitMargins.title}</h3>
          <div className="profit-content">
            <div className="profit-target">{current.profitMargins.target}</div>
            <div className="profit-enabler">{current.profitMargins.enabler}</div>
            <div className="profit-comparison">
              <div className="comparison-item">
                <span className="comparison-label">{current.profitMargins.comparison}</span>
              </div>
              <div className="comparison-item advantage">
                <span className="comparison-label">{current.profitMargins.advantage}</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FinancialHighlights;
