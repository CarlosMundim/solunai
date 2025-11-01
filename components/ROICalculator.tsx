'use client';

import React from 'react';
import './ROICalculator.css';

interface ROICalculatorProps {
  lang: 'ja' | 'en';
}

const ROICalculator: React.FC<ROICalculatorProps> = ({ lang }) => {
  const content = {
    ja: {
      title: 'ROI計算例',
      subtitle: 'あなたの企業の投資対効果を試算',
      exampleTitle: '例：従業員100名の自動車部品製造業',
      currentState: '現状の課題',
      currentIssues: [
        '品質検査：手動、従業員5名',
        '検査時間：製品あたり10分',
        '不良品率：8%（年間¥15M損失）',
        '検査カバレッジ：サンプリング10%のみ'
      ],
      solutionTitle: 'Solunaiソリューション：コンピュータビジョンQC',
      costs: [
        { label: '実装費用', value: '¥2,500,000' },
        { label: '年間ライセンス', value: '¥600,000' },
        { label: '初年度総コスト', value: '¥3,100,000' }
      ],
      savingsTitle: '削減効果',
      savings: [
        { label: '検査人員', value: '5名 → 2名（¥9M人件費削減）' },
        { label: '不良品率', value: '8% → 1.5%（¥11M損失削減）' },
        { label: '検査カバレッジ', value: '10% → 100%' },
        { label: '年間総効果', value: '¥20M', highlight: true }
      ],
      roiTitle: 'ROI',
      roiMetrics: [
        { label: '投資', value: '¥3.1M' },
        { label: '年間効果', value: '¥20M', highlight: true },
        { label: '投資回収', value: '1.86ヶ月', highlight: true },
        { label: 'IRR', value: '645%', highlight: true }
      ],
      cta: 'カスタム ROI試算を依頼'
    },
    en: {
      title: 'ROI Calculation Example',
      subtitle: 'Estimate Your Investment Return',
      exampleTitle: 'Example: 100-Employee Auto Parts Manufacturer',
      currentState: 'Current Challenges',
      currentIssues: [
        'Quality Inspection: Manual, 5 employees',
        'Inspection Time: 10 minutes per product',
        'Defect Rate: 8% (¥15M annual loss)',
        'Inspection Coverage: 10% sampling only'
      ],
      solutionTitle: 'Solunai Solution: Computer Vision QC',
      costs: [
        { label: 'Implementation Cost', value: '¥2,500,000' },
        { label: 'Annual License', value: '¥600,000' },
        { label: 'First Year Total', value: '¥3,100,000' }
      ],
      savingsTitle: 'Cost Savings',
      savings: [
        { label: 'Inspection Staff', value: '5 → 2 staff (¥9M savings)' },
        { label: 'Defect Rate', value: '8% → 1.5% (¥11M loss reduction)' },
        { label: 'Inspection Coverage', value: '10% → 100%' },
        { label: 'Total Annual Impact', value: '¥20M', highlight: true }
      ],
      roiTitle: 'ROI',
      roiMetrics: [
        { label: 'Investment', value: '¥3.1M' },
        { label: 'Annual Impact', value: '¥20M', highlight: true },
        { label: 'Payback Period', value: '1.86 months', highlight: true },
        { label: 'IRR', value: '645%', highlight: true }
      ],
      cta: 'Request Custom ROI Analysis'
    }
  };

  const currentContent = content[lang];

  return (
    <section className="roi-calculator-section">
      <div className="roi-container">
        <div className="roi-header">
          <h2>{currentContent.title}</h2>
          <p>{currentContent.subtitle}</p>
        </div>

        <div className="roi-example">
          <h3 className="example-title">{currentContent.exampleTitle}</h3>

          {/* Current State */}
          <div className="roi-card current-state">
            <h4>{currentContent.currentState}</h4>
            <ul>
              {currentContent.currentIssues.map((issue, index) => (
                <li key={index}>{issue}</li>
              ))}
            </ul>
          </div>

          {/* Solution */}
          <div className="roi-card solution-card">
            <h4>{currentContent.solutionTitle}</h4>
            <div className="costs-grid">
              {currentContent.costs.map((cost, index) => (
                <div key={index} className="cost-item">
                  <span className="cost-label">{cost.label}:</span>
                  <span className="cost-value">{cost.value}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Savings */}
          <div className="roi-card savings-card">
            <h4>{currentContent.savingsTitle}</h4>
            <div className="savings-grid">
              {currentContent.savings.map((saving, index) => (
                <div
                  key={index}
                  className={`saving-item ${saving.highlight ? 'highlight' : ''}`}
                >
                  <span className="saving-label">{saving.label}:</span>
                  <span className="saving-value">{saving.value}</span>
                </div>
              ))}
            </div>
          </div>

          {/* ROI Metrics */}
          <div className="roi-card roi-metrics-card">
            <h4>{currentContent.roiTitle}</h4>
            <div className="roi-metrics-grid">
              {currentContent.roiMetrics.map((metric, index) => (
                <div
                  key={index}
                  className={`roi-metric ${metric.highlight ? 'highlight' : ''}`}
                >
                  <span className="metric-label">{metric.label}</span>
                  <span className="metric-value">{metric.value}</span>
                </div>
              ))}
            </div>
          </div>
        </div>

        <div className="roi-cta">
          <button className="roi-cta-btn">{currentContent.cta}</button>
        </div>
      </div>
    </section>
  );
};

export default ROICalculator;
