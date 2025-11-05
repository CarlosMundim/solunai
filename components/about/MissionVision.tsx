'use client';

import React from 'react';
import './MissionVision.css';

interface MissionVisionProps {
  lang: 'ja' | 'en';
}

const MissionVision: React.FC<MissionVisionProps> = ({ lang }) => {
  const content = {
    ja: {
      sectionTitle: 'ミッション & ビジョン',
      mission: {
        title: 'ミッション',
        text: 'アクセスしやすいAIソリューションを通じて製造業に革命をもたらす',
      },
      vision: {
        title: 'ビジョン',
        text: '2030年までにすべての日本の製造業者をAI化',
      },
    },
    en: {
      sectionTitle: 'Mission & Vision',
      mission: {
        title: 'Our Mission',
        text: 'Revolutionize manufacturing through accessible AI solutions',
      },
      vision: {
        title: 'Our Vision',
        text: 'Every Japanese manufacturer AI-powered by 2030',
      },
    },
  };

  const text = content[lang];

  return (
    <section className="mission-vision">
      <div className="mission-vision-container">
        <h2 className="mission-vision-section-title">{text.sectionTitle}</h2>

        <div className="mission-vision-grid">
          <div className="mission-card">
            <div className="card-icon">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M12 2L2 7l10 5 10-5-10-5z"/>
                <path d="M2 17l10 5 10-5"/>
                <path d="M2 12l10 5 10-5"/>
              </svg>
            </div>
            <h3 className="card-title">{text.mission.title}</h3>
            <p className="card-text">{text.mission.text}</p>
          </div>

          <div className="vision-card">
            <div className="card-icon">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <circle cx="12" cy="12" r="10"/>
                <path d="M12 6v6l4 2"/>
              </svg>
            </div>
            <h3 className="card-title">{text.vision.title}</h3>
            <p className="card-text">{text.vision.text}</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default MissionVision;
