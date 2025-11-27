'use client';

import React from 'react';
import Image from 'next/image';
import { Clock, ShieldCheck, Calendar, DollarSign } from 'lucide-react';
import './FeaturedCaseStudy.css';

interface FeaturedCaseStudyProps {
  lang: 'ja' | 'en';
}

const metricIcons = {
  downtime: Clock,
  defect: ShieldCheck,
  period: Calendar,
  value: DollarSign,
};

const FeaturedCaseStudy: React.FC<FeaturedCaseStudyProps> = ({ lang }) => {
  const content = {
    ja: {
      badge: 'フィーチャーケーススタディ',
      client: 'FBM Hudson Co., Ltd.',
      industry: '製造業',
      location: '日本',
      projectValue: '契約価値: ¥84M / 36ヶ月',
      challenge: {
        title: '課題',
        description: '計画外のダウンタイムと品質問題により、生産効率が低下していました。',
      },
      solution: {
        title: 'ソリューション',
        description: '予知保全とデジタルツイン技術を実装。リアルタイムの機器監視と予測分析を実現しました。',
      },
      results: {
        title: '結果',
        metrics: [
          { label: 'ダウンタイム削減', value: '55%', iconKey: 'downtime' },
          { label: '不良品削減', value: '40%', iconKey: 'defect' },
          { label: '契約期間', value: '36ヶ月', iconKey: 'period' },
          { label: '契約価値', value: '¥84M', iconKey: 'value' },
        ],
      },
      technologies: {
        title: '使用技術',
        items: ['予知保全AI', 'デジタルツイン', 'IoTセンサー統合', 'リアルタイム分析'],
      },
    },
    en: {
      badge: 'Featured Case Study',
      client: 'FBM Hudson Co., Ltd.',
      industry: 'Manufacturing',
      location: 'Japan',
      projectValue: 'Contract Value: ¥84M / 36 months',
      challenge: {
        title: 'The Challenge',
        description: 'Unplanned downtime and quality issues were reducing production efficiency.',
      },
      solution: {
        title: 'Our Solution',
        description: 'Implemented Predictive Maintenance and Digital Twin technology. Enabled real-time equipment monitoring and predictive analytics.',
      },
      results: {
        title: 'Results Achieved',
        metrics: [
          { label: 'Downtime Reduction', value: '55%', iconKey: 'downtime' },
          { label: 'Defect Reduction', value: '40%', iconKey: 'defect' },
          { label: 'Contract Period', value: '36 months', iconKey: 'period' },
          { label: 'Contract Value', value: '¥84M', iconKey: 'value' },
        ],
      },
      technologies: {
        title: 'Technologies Used',
        items: ['Predictive Maintenance AI', 'Digital Twin', 'IoT Sensor Integration', 'Real-time Analytics'],
      },
    },
  };

  const text = content[lang];

  return (
    <section className="featured-case-study">
      <div className="featured-case-study-container">
        <div className="case-study-badge">{text.badge}</div>

        <div className="case-study-header">
          <div className="case-study-image">
            <Image
              src="/images/case-studies/fbm-hudson.jpg"
              alt={text.client}
              width={600}
              height={400}
              className="case-image"
            />
          </div>

          <div className="case-study-info">
            <h2 className="client-name">{text.client}</h2>
            <p className="industry">{text.industry}</p>
            <p className="location">{text.location}</p>
            <p className="project-value">{text.projectValue}</p>
          </div>
        </div>

        <div className="case-study-content">
          <div className="content-section">
            <h3 className="section-title">{text.challenge.title}</h3>
            <p className="section-text">{text.challenge.description}</p>
          </div>

          <div className="content-section">
            <h3 className="section-title">{text.solution.title}</h3>
            <p className="section-text">{text.solution.description}</p>
          </div>

          <div className="content-section results">
            <h3 className="section-title">{text.results.title}</h3>
            <div className="results-grid">
              {text.results.metrics.map((metric, index) => {
                const IconComponent = metricIcons[metric.iconKey as keyof typeof metricIcons];
                return (
                  <div key={index} className="result-card">
                    <div className="result-icon">
                      <IconComponent size={24} strokeWidth={1.5} />
                    </div>
                    <div className="result-value">{metric.value}</div>
                    <div className="result-label">{metric.label}</div>
                  </div>
                );
              })}
            </div>
          </div>

          <div className="content-section">
            <h3 className="section-title">{text.technologies.title}</h3>
            <div className="technologies-list">
              {text.technologies.items.map((tech, index) => (
                <div key={index} className="tech-tag">
                  {tech}
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FeaturedCaseStudy;
