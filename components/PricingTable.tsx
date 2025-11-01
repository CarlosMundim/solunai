'use client';

import React from 'react';
import './PricingTable.css';

interface PricingTableProps {
  lang: 'ja' | 'en';
}

const PricingTable: React.FC<PricingTableProps> = ({ lang }) => {
  const content = {
    ja: {
      title: '価格比較表',
      subtitle: '全ソリューションの価格と投資回収期間',
      headers: ['ソリューション', '対象業界', '実装費用', '年間費用', '投資回収', '導入状況'],
      solutions: [
        {
          name: 'AI見積自動化',
          industry: 'HVAC, カスタム製造',
          implementation: '¥800K-1.5M',
          annual: '¥300K',
          payback: '4-6ヶ月',
          status: '✓ FBM実績',
          statusClass: 'deployed'
        },
        {
          name: '予知保全',
          industry: '設備集約型製造',
          implementation: '¥1.2M-2.5M',
          annual: '¥500K',
          payback: '6-12ヶ月',
          status: 'フェーズ2',
          statusClass: 'in-progress'
        },
        {
          name: '画像検査AI',
          industry: '精密・量産製造',
          implementation: '¥1.5M-3M',
          annual: '¥600K',
          payback: '6-9ヶ月',
          status: 'フェーズ2',
          statusClass: 'in-progress'
        },
        {
          name: 'AI生産計画',
          industry: '多品種製造',
          implementation: '¥2M-4M',
          annual: '¥800K',
          payback: '9-12ヶ月',
          status: 'ロードマップ',
          statusClass: 'roadmap'
        }
      ]
    },
    en: {
      title: 'Pricing Comparison',
      subtitle: 'All Solutions Pricing and Payback Periods',
      headers: ['Solution', 'Target Industry', 'Implementation', 'Annual Cost', 'Payback', 'Status'],
      solutions: [
        {
          name: 'AI Quotation Automation',
          industry: 'HVAC, Custom Manufacturing',
          implementation: '¥800K-1.5M',
          annual: '¥300K',
          payback: '4-6 months',
          status: '✓ FBM Deployed',
          statusClass: 'deployed'
        },
        {
          name: 'Predictive Maintenance',
          industry: 'Equipment-Intensive Manufacturing',
          implementation: '¥1.2M-2.5M',
          annual: '¥500K',
          payback: '6-12 months',
          status: 'Phase 2',
          statusClass: 'in-progress'
        },
        {
          name: 'Computer Vision QC',
          industry: 'Precision & High-Volume',
          implementation: '¥1.5M-3M',
          annual: '¥600K',
          payback: '6-9 months',
          status: 'Phase 2',
          statusClass: 'in-progress'
        },
        {
          name: 'AI Production Scheduling',
          industry: 'Multi-Product Manufacturing',
          implementation: '¥2M-4M',
          annual: '¥800K',
          payback: '9-12 months',
          status: 'Roadmap',
          statusClass: 'roadmap'
        }
      ]
    }
  };

  const currentContent = content[lang];

  return (
    <section className="pricing-table-section">
      <div className="pricing-container">
        <div className="pricing-header">
          <h2>{currentContent.title}</h2>
          <p>{currentContent.subtitle}</p>
        </div>

        <div className="table-wrapper">
          <table className="pricing-table">
            <thead>
              <tr>
                {currentContent.headers.map((header, index) => (
                  <th key={index}>{header}</th>
                ))}
              </tr>
            </thead>
            <tbody>
              {currentContent.solutions.map((solution, index) => (
                <tr key={index}>
                  <td className="solution-name">{solution.name}</td>
                  <td>{solution.industry}</td>
                  <td className="price-cell">{solution.implementation}</td>
                  <td className="price-cell">{solution.annual}</td>
                  <td className="payback-cell">{solution.payback}</td>
                  <td>
                    <span className={`status-badge ${solution.statusClass}`}>
                      {solution.status}
                    </span>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        {/* Mobile Cards View */}
        <div className="pricing-cards">
          {currentContent.solutions.map((solution, index) => (
            <div key={index} className="pricing-card">
              <h3>{solution.name}</h3>
              <div className="card-row">
                <span className="label">{currentContent.headers[1]}:</span>
                <span className="value">{solution.industry}</span>
              </div>
              <div className="card-row">
                <span className="label">{currentContent.headers[2]}:</span>
                <span className="value price">{solution.implementation}</span>
              </div>
              <div className="card-row">
                <span className="label">{currentContent.headers[3]}:</span>
                <span className="value price">{solution.annual}</span>
              </div>
              <div className="card-row">
                <span className="label">{currentContent.headers[4]}:</span>
                <span className="value payback">{solution.payback}</span>
              </div>
              <div className="card-row">
                <span className="label">{currentContent.headers[5]}:</span>
                <span className={`status-badge ${solution.statusClass}`}>
                  {solution.status}
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default PricingTable;
