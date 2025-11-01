'use client';

import React from 'react';
import './ScrollingSection.css';

interface ScrollingSectionProps {
  lang: 'ja' | 'en';
}

const ScrollingSection: React.FC<ScrollingSectionProps> = ({ lang }) => {
  const solutions = {
    ja: [
      {
        id: 1,
        image: '/images/Hero_Car_01.jpg',
        title: 'コンピュータビジョン品質管理',
        description: 'AIを活用した検査で欠陥検出率95%以上を実現'
      },
      {
        id: 2,
        image: '/images/Hero_Car_02B.jpg',
        title: 'AI生産スケジューリング',
        description: '生産効率を最大40%向上、納期遵守率99%達成'
      },
      {
        id: 3,
        image: '/images/Hero_Car_03.jpg',
        title: '自動車製造変革',
        description: 'デジタルツインとAIで完全自動化を実現'
      },
      {
        id: 4,
        image: '/images/Hero_Car_04.jpg',
        title: '予知保全システム',
        description: '機器故障を90%削減、ダウンタイム最小化'
      }
    ],
    en: [
      {
        id: 1,
        image: '/images/Hero_Car_01.jpg',
        title: 'Computer Vision Quality Control',
        description: 'AI-powered inspection achieving 95%+ defect detection rates'
      },
      {
        id: 2,
        image: '/images/Hero_Car_02B.jpg',
        title: 'AI Production Scheduling',
        description: 'Up to 40% efficiency gains, 99% on-time delivery'
      },
      {
        id: 3,
        image: '/images/Hero_Car_03.jpg',
        title: 'Automotive Manufacturing Transformation',
        description: 'Full automation with digital twins and AI systems'
      },
      {
        id: 4,
        image: '/images/Hero_Car_04.jpg',
        title: 'Predictive Maintenance',
        description: '90% reduction in equipment failures, minimize downtime'
      }
    ]
  };

  const currentSolutions = solutions[lang];

  return (
    <section id="solutions-preview" className="scrolling-section">
      <div className="scrolling-container">
        {currentSolutions.map((solution, index) => (
          <div
            key={solution.id}
            className="solution-card"
            style={{ animationDelay: `${index * 0.15}s` }}
          >
            <div className="solution-image-wrapper">
              <img
                src={solution.image}
                alt={solution.title}
                className="solution-image"
              />
              <div className="solution-overlay"></div>
            </div>
            <div className="solution-content">
              <h3 className="solution-title">{solution.title}</h3>
              <p className="solution-description">{solution.description}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default ScrollingSection;
