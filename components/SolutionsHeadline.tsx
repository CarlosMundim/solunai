'use client';

import React from 'react';
import './SolutionsHeadline.css';

interface SolutionsHeadlineProps {
  lang: 'ja' | 'en';
}

const SolutionsHeadline: React.FC<SolutionsHeadlineProps> = ({ lang }) => {
  const content = {
    ja: {
      badge: 'ソリューション',
      headline: '製造業の課題を解決する\n6つのAIソリューション',
      description: 'デジタルツインから予知保全まで、日本の製造業に特化した包括的なAI技術スイート'
    },
    en: {
      badge: 'Solutions',
      headline: '6 AI Solutions\nSolving Manufacturing Challenges',
      description: 'From digital twins to predictive maintenance, a comprehensive AI technology suite specialized for Japanese manufacturing'
    }
  };

  const currentContent = content[lang];

  return (
    <section className="solutions-headline-section" aria-label={lang === 'ja' ? 'ソリューション' : 'Solutions'}>
      <div className="solutions-headline-container">
        <span className="solutions-badge">{currentContent.badge}</span>
        <h2 className="solutions-headline-title">
          {currentContent.headline.split('\n').map((line, index) => (
            <React.Fragment key={index}>
              {line}
              {index < currentContent.headline.split('\n').length - 1 && <br />}
            </React.Fragment>
          ))}
        </h2>
        <p className="solutions-headline-description">{currentContent.description}</p>
      </div>
    </section>
  );
};

export default SolutionsHeadline;
