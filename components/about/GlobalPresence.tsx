'use client';

import React from 'react';
import './GlobalPresence.css';

interface GlobalPresenceProps {
  lang: 'ja' | 'en';
}

const GlobalPresence: React.FC<GlobalPresenceProps> = ({ lang }) => {
  const content = {
    ja: {
      title: 'グローバルプレゼンス',
      subtitle: '日本を拠点に、世界とつながる',
      locations: [
        {
          region: '日本本社',
          description: '横浜 & 東京',
          details: '製造業AI変革の中心拠点',
        },
        {
          region: 'ヨーロッパパートナーシップ',
          description: 'イタリア、ドイツ',
          details: 'FBM Hudson Italiana、先進技術パートナー',
        },
        {
          region: 'グローバルタレントネットワーク',
          description: 'インド、東南アジア',
          details: 'WorldEmpパートナーシップ - 2〜6週間で世界クラスのエンジニアを配備',
        },
      ],
    },
    en: {
      title: 'Global Presence',
      subtitle: 'Based in Japan, Connected to the World',
      locations: [
        {
          region: 'Japan Headquarters',
          description: 'Yokohama & Tokyo',
          details: 'Hub for Manufacturing AI transformation',
        },
        {
          region: 'Europe Partnerships',
          description: 'Italy, Germany',
          details: 'FBM Hudson Italiana, Advanced technology partners',
        },
        {
          region: 'Global Talent Network',
          description: 'India, Southeast Asia',
          details: 'WorldEmp partnership - World-class engineers in 2-6 weeks',
        },
      ],
    },
  };

  const text = content[lang];

  return (
    <section className="global-presence">
      <div className="global-presence-container">
        <div className="global-presence-header">
          <h2 className="global-presence-title">{text.title}</h2>
          <p className="global-presence-subtitle">{text.subtitle}</p>
        </div>

        <div className="locations-grid">
          {text.locations.map((location, index) => (
            <div key={index} className="location-card">
              <h3 className="location-region">{location.region}</h3>
              <p className="location-description">{location.description}</p>
              <p className="location-details">{location.details}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default GlobalPresence;
