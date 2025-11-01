'use client';

import React from 'react';
import './ResultsMetrics.css';

interface ResultsMetricsProps {
  lang: 'ja' | 'en';
}

const ResultsMetrics: React.FC<ResultsMetricsProps> = ({ lang }) => {
  const content = {
    ja: {
      heading: '達成された成果',
      subheading: '測定可能な変革の実績',
      metrics: [
        {
          icon: '⏱️',
          label: '見積時間',
          before: '10分',
          after: '1分未満',
          improvement: '90%削減',
          color: '#FF5722'
        },
        {
          icon: '🚀',
          label: '納期',
          before: '14-21日',
          after: '48-72時間',
          improvement: '85%短縮',
          color: '#2196F3'
        },
        {
          icon: '✅',
          label: '欠陥検出',
          before: '67%',
          after: '95%',
          improvement: '42%改善',
          color: '#4CAF50'
        },
        {
          icon: '♻️',
          label: 'スクラップ率',
          before: '8-12%',
          after: '<2%',
          improvement: '75%削減',
          color: '#9C27B0'
        },
        {
          icon: '📊',
          label: '設備稼働率',
          before: '65%',
          after: '95%',
          improvement: '46%向上',
          color: '#FF9800'
        },
        {
          icon: '💡',
          label: 'エンジニアリング容量',
          before: '基準値',
          after: '3倍',
          improvement: '比例した採用なし',
          color: '#00BCD4'
        }
      ]
    },
    en: {
      heading: 'Results Achieved',
      subheading: 'Measurable Transformation Outcomes',
      metrics: [
        {
          icon: '⏱️',
          label: 'Quote Time',
          before: '10 min',
          after: '<1 min',
          improvement: '90% reduction',
          color: '#FF5722'
        },
        {
          icon: '🚀',
          label: 'Turnaround',
          before: '14-21 days',
          after: '48-72 hours',
          improvement: '85% faster',
          color: '#2196F3'
        },
        {
          icon: '✅',
          label: 'Defect Detection',
          before: '67%',
          after: '95%',
          improvement: '42% improvement',
          color: '#4CAF50'
        },
        {
          icon: '♻️',
          label: 'Scrap Rate',
          before: '8-12%',
          after: '<2%',
          improvement: '75% reduction',
          color: '#9C27B0'
        },
        {
          icon: '📊',
          label: 'Equipment Utilization',
          before: '65%',
          after: '95%',
          improvement: '46% increase',
          color: '#FF9800'
        },
        {
          icon: '💡',
          label: 'Engineering Capacity',
          before: 'Baseline',
          after: '3×',
          improvement: 'Without proportional hiring',
          color: '#00BCD4'
        }
      ]
    }
  };

  const currentContent = content[lang];

  return (
    <section className="results-metrics">
      <div className="results-container">
        <h2 className="results-heading">{currentContent.heading}</h2>
        <p className="results-subheading">{currentContent.subheading}</p>

        <div className="metrics-grid">
          {currentContent.metrics.map((metric, index) => (
            <div
              key={index}
              className="metric-card-large"
              style={{ '--metric-color': metric.color } as React.CSSProperties}
            >
              <div className="metric-icon-large">{metric.icon}</div>
              <div className="metric-label-large">{metric.label}</div>

              <div className="metric-comparison">
                <div className="metric-before">
                  <span className="metric-value-large">{metric.before}</span>
                </div>
                <div className="metric-arrow">→</div>
                <div className="metric-after">
                  <span className="metric-value-large highlight">{metric.after}</span>
                </div>
              </div>

              <div className="metric-improvement">{metric.improvement}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ResultsMetrics;
