'use client';

import React from 'react';
import './TeamHero.css';

interface TeamHeroProps {
  lang: 'ja' | 'en';
}

const TeamHero: React.FC<TeamHeroProps> = ({ lang }) => {
  const content = {
    ja: {
      title: 'Solunaiを支える専門家',
      subtitle: '製造業とAIの深い専門知識',
    },
    en: {
      title: 'Meet the Experts Behind Solunai',
      subtitle: 'Deep expertise in manufacturing and AI',
    },
  };

  const text = content[lang];

  return (
    <section className="team-hero">
      <div className="team-hero-container">
        <div className="team-hero-content">
          <h1 className="team-hero-title">{text.title}</h1>
          <h2 className="team-hero-subtitle">{text.subtitle}</h2>
        </div>
      </div>
    </section>
  );
};

export default TeamHero;
