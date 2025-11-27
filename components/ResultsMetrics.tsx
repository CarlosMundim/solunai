'use client';

import React from 'react';
import { Clock, Rocket, CheckCircle, Recycle, BarChart3, Lightbulb } from 'lucide-react';
import './ResultsMetrics.css';

const metricIcons = {
  time: Clock,
  turnaround: Rocket,
  defect: CheckCircle,
  scrap: Recycle,
  utilization: BarChart3,
  capacity: Lightbulb,
};

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
          iconKey: 'time',
          label: '見積時間',
          before: '10分',
          after: '1分未満',
          improvement: '90%削減'
        },
        {
          iconKey: 'turnaround',
          label: '納期',
          before: '14-21日',
          after: '48-72時間',
          improvement: '85%短縮'
        },
        {
          iconKey: 'defect',
          label: '欠陥検出',
          before: '67%',
          after: '95%',
          improvement: '42%改善'
        },
        {
          iconKey: 'scrap',
          label: 'スクラップ率',
          before: '8-12%',
          after: '<2%',
          improvement: '75%削減'
        },
        {
          iconKey: 'utilization',
          label: '設備稼働率',
          before: '65%',
          after: '95%',
          improvement: '46%向上'
        },
        {
          iconKey: 'capacity',
          label: 'エンジニアリング容量',
          before: '基準値',
          after: '3倍',
          improvement: '比例した採用なし'
        }
      ]
    },
    en: {
      heading: 'Results Achieved',
      subheading: 'Measurable Transformation Outcomes',
      metrics: [
        {
          iconKey: 'time',
          label: 'Quote Time',
          before: '10 min',
          after: '<1 min',
          improvement: '90% reduction'
        },
        {
          iconKey: 'turnaround',
          label: 'Turnaround',
          before: '14-21 days',
          after: '48-72 hours',
          improvement: '85% faster'
        },
        {
          iconKey: 'defect',
          label: 'Defect Detection',
          before: '67%',
          after: '95%',
          improvement: '42% improvement'
        },
        {
          iconKey: 'scrap',
          label: 'Scrap Rate',
          before: '8-12%',
          after: '<2%',
          improvement: '75% reduction'
        },
        {
          iconKey: 'utilization',
          label: 'Equipment Utilization',
          before: '65%',
          after: '95%',
          improvement: '46% increase'
        },
        {
          iconKey: 'capacity',
          label: 'Engineering Capacity',
          before: 'Baseline',
          after: '3×',
          improvement: 'Without proportional hiring'
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
          {currentContent.metrics.map((metric, index) => {
            const IconComponent = metricIcons[metric.iconKey as keyof typeof metricIcons];
            return (
            <div
              key={index}
              className="metric-card-large"
            >
              <div className="metric-icon-large">
                <IconComponent size={32} strokeWidth={1.5} />
              </div>
              <div className="metric-label-large">{metric.label}</div>

              <div className="metric-comparison">
                <div className="metric-before">
                  <div className="metric-comparison-label">{lang === 'ja' ? '導入前' : 'Before'}</div>
                  <span className="metric-value-large">{metric.before}</span>
                </div>
                <div className="metric-arrow">→</div>
                <div className="metric-after">
                  <div className="metric-comparison-label">{lang === 'ja' ? '導入後' : 'After'}</div>
                  <span className="metric-value-large highlight">{metric.after}</span>
                </div>
              </div>

              <div className="metric-improvement">{metric.improvement}</div>
            </div>
          );
          })}
        </div>
      </div>
    </section>
  );
};

export default ResultsMetrics;
