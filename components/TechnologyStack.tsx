'use client';

import React from 'react';
import './TechnologyStack.css';

interface TechnologyStackProps {
  lang: 'ja' | 'en';
}

const TechnologyStack: React.FC<TechnologyStackProps> = ({ lang }) => {
  const content = {
    ja: {
      heading: '技術スタック',
      subheading: 'エンタープライズグレードの信頼性実証済みテクノロジー',
      technologies: [
        { name: 'デジタルツイン', category: '3Dビジュアライゼーション' },
        { name: '物理シミュレーション', category: 'CFD/FEA解析' },
        { name: 'クラウドインフラ', category: 'エンタープライズグレード' },
        { name: 'AIエンジン', category: '自然言語処理' },
        { name: 'HTRI', category: '熱計算エンジン' },
        { name: 'Python/TensorFlow', category: '機械学習' },
        { name: 'React + Node.js', category: 'アプリケーション開発' },
        { name: 'IoTプラットフォーム', category: 'リアルタイムデータ統合' }
      ],
      footer: 'エンタープライズグレードのテクノロジースタックによる実証済みの信頼性'
    },
    en: {
      heading: 'Technology Stack',
      subheading: 'Enterprise-Grade Proven Technology for Reliability',
      technologies: [
        { name: 'Digital Twin', category: '3D Visualization' },
        { name: 'Physics Simulation', category: 'CFD/FEA Analysis' },
        { name: 'Cloud Infrastructure', category: 'Enterprise-Grade' },
        { name: 'AI Engine', category: 'Natural Language Processing' },
        { name: 'HTRI', category: 'Thermal Calculation Engine' },
        { name: 'Python/TensorFlow', category: 'Machine Learning' },
        { name: 'React + Node.js', category: 'Application Development' },
        { name: 'IoT Platform', category: 'Real-time Data Integration' }
      ],
      footer: 'Enterprise-grade technology stack for proven reliability'
    }
  };

  const currentContent = content[lang];

  return (
    <section className="technology-stack">
      <div className="technology-container">
        <h2 className="technology-heading">{currentContent.heading}</h2>
        <p className="technology-subheading">{currentContent.subheading}</p>

        <div className="technologies-grid">
          {currentContent.technologies.map((tech, index) => (
            <div key={index} className="tech-card">
              <div className="tech-name">{tech.name}</div>
              <div className="tech-category">{tech.category}</div>
            </div>
          ))}
        </div>

        <div className="technology-footer">
          {currentContent.footer}
        </div>
      </div>
    </section>
  );
};

export default TechnologyStack;
