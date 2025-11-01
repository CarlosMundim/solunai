'use client';

import React from 'react';
import './ROIChart.css';

interface ROIChartProps {
  lang: 'ja' | 'en';
}

const ROIChart: React.FC<ROIChartProps> = ({ lang }) => {
  const content = {
    ja: {
      heading: '投資対効果',
      subheading: '実証済みの財務的影響',
      investment: {
        label: '契約規模',
        value: '€2.5M - €3.8M',
        subtitle: '18ヶ月プロジェクト'
      },
      returns: {
        label: '年間効果',
        value: '€5.35M - €8.85M',
        subtitle: '定常状態'
      },
      roi: {
        label: 'ROI',
        value: '178-295% IRR',
        subtitle: '業界トップクラス'
      },
      payback: {
        label: '投資回収期間',
        value: '4-7ヶ月',
        subtitle: '驚異的なスピード'
      },
      nps: {
        label: '顧客満足度',
        value: 'NPS +72',
        subtitle: 'Net Promoter Score'
      },
      timeline: {
        title: '投資回収タイムライン',
        months: [
          { month: 0, label: '開始', investment: 100, returns: 0 },
          { month: 3, label: '3ヶ月', investment: 100, returns: 25 },
          { month: 6, label: '6ヶ月', investment: 100, returns: 75 },
          { month: 9, label: '9ヶ月', investment: 100, returns: 125 },
          { month: 12, label: '12ヶ月', investment: 100, returns: 180 },
          { month: 18, label: '18ヶ月', investment: 100, returns: 250 }
        ]
      }
    },
    en: {
      heading: 'ROI & Financial Impact',
      subheading: 'Proven Financial Results',
      investment: {
        label: 'Contract Size',
        value: '€2.5M - €3.8M',
        subtitle: '18-month project'
      },
      returns: {
        label: 'Annual Benefit',
        value: '€5.35M - €8.85M',
        subtitle: 'Steady state'
      },
      roi: {
        label: 'ROI',
        value: '178-295% IRR',
        subtitle: 'Industry-leading'
      },
      payback: {
        label: 'Payback Period',
        value: '4-7 months',
        subtitle: 'Exceptional speed'
      },
      nps: {
        label: 'Customer Satisfaction',
        value: 'NPS +72',
        subtitle: 'Net Promoter Score'
      },
      timeline: {
        title: 'Investment Recovery Timeline',
        months: [
          { month: 0, label: 'Start', investment: 100, returns: 0 },
          { month: 3, label: '3 mo', investment: 100, returns: 25 },
          { month: 6, label: '6 mo', investment: 100, returns: 75 },
          { month: 9, label: '9 mo', investment: 100, returns: 125 },
          { month: 12, label: '12 mo', investment: 100, returns: 180 },
          { month: 18, label: '18 mo', investment: 100, returns: 250 }
        ]
      }
    }
  };

  const currentContent = content[lang];

  return (
    <section className="roi-chart">
      <div className="roi-container">
        <h2 className="roi-heading">{currentContent.heading}</h2>
        <p className="roi-subheading">{currentContent.subheading}</p>

        <div className="roi-metrics-grid">
          <div className="roi-metric-card investment">
            <div className="roi-metric-label">{currentContent.investment.label}</div>
            <div className="roi-metric-value">{currentContent.investment.value}</div>
            <div className="roi-metric-subtitle">{currentContent.investment.subtitle}</div>
          </div>

          <div className="roi-metric-card returns">
            <div className="roi-metric-label">{currentContent.returns.label}</div>
            <div className="roi-metric-value">{currentContent.returns.value}</div>
            <div className="roi-metric-subtitle">{currentContent.returns.subtitle}</div>
          </div>

          <div className="roi-metric-card roi-highlight">
            <div className="roi-metric-label">{currentContent.roi.label}</div>
            <div className="roi-metric-value">{currentContent.roi.value}</div>
            <div className="roi-metric-subtitle">{currentContent.roi.subtitle}</div>
          </div>

          <div className="roi-metric-card payback">
            <div className="roi-metric-label">{currentContent.payback.label}</div>
            <div className="roi-metric-value">{currentContent.payback.value}</div>
            <div className="roi-metric-subtitle">{currentContent.payback.subtitle}</div>
          </div>

          <div className="roi-metric-card nps">
            <div className="roi-metric-label">{currentContent.nps.label}</div>
            <div className="roi-metric-value">{currentContent.nps.value}</div>
            <div className="roi-metric-subtitle">{currentContent.nps.subtitle}</div>
          </div>
        </div>

        <div className="roi-timeline">
          <h3 className="timeline-title">{currentContent.timeline.title}</h3>
          <div className="timeline-chart">
            {currentContent.timeline.months.map((point, index) => (
              <div key={index} className="timeline-point">
                <div className="timeline-bars">
                  <div
                    className="timeline-bar investment-bar"
                    style={{ height: `${point.investment}px` }}
                  ></div>
                  <div
                    className="timeline-bar returns-bar"
                    style={{ height: `${point.returns}px` }}
                  ></div>
                </div>
                <div className="timeline-label">{point.label}</div>
              </div>
            ))}
          </div>
          <div className="timeline-legend">
            <div className="legend-item">
              <span className="legend-color investment-color"></span>
              <span className="legend-text">{lang === 'ja' ? '投資' : 'Investment'}</span>
            </div>
            <div className="legend-item">
              <span className="legend-color returns-color"></span>
              <span className="legend-text">{lang === 'ja' ? 'リターン' : 'Returns'}</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ROIChart;
