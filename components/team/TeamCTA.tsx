'use client';

import React from 'react';
import Link from 'next/link';
import './TeamCTA.css';

interface TeamCTAProps {
  lang: 'ja' | 'en';
}

const TeamCTA: React.FC<TeamCTAProps> = ({ lang }) => {
  const content = {
    ja: {
      title: '一緒に日本の製造業の未来を創りましょう',
      subtitle: '私たちのチームがあなたの変革をサポートします',
      ctas: [
        {
          title: '無料相談を予約',
          description: '60分製造業診断',
          link: '/contact',
          primary: true,
        },
        {
          title: 'ケーススタディを見る',
          description: '実績事例',
          link: '/about/case-studies',
          primary: false,
        },
      ],
    },
    en: {
      title: 'Let\'s Build the Future of Japanese Manufacturing Together',
      subtitle: 'Our team is ready to support your transformation',
      ctas: [
        {
          title: 'Book Free Consultation',
          description: '60-minute manufacturing assessment',
          link: '/en/contact',
          primary: true,
        },
        {
          title: 'View Case Studies',
          description: 'See our work',
          link: '/en/about/case-studies',
          primary: false,
        },
      ],
    },
  };

  const text = content[lang];

  return (
    <section className="team-cta">
      <div className="team-cta-container">
        <div className="team-cta-two-column">
          {/* Left Column: Text */}
          <div className="team-cta-text-column">
            <h2 className="team-cta-title">{text.title}</h2>
            <p className="team-cta-subtitle">{text.subtitle}</p>
          </div>

          {/* Right Column: Buttons */}
          <div className="team-cta-buttons-column">
            {text.ctas.map((cta, idx) => (
              <Link
                key={idx}
                href={cta.link}
                className={`team-cta-card ${cta.primary ? 'primary' : ''}`}
              >
                <div className="cta-content">
                  <h3 className="cta-title">{cta.title}</h3>
                  <p className="cta-description">{cta.description}</p>
                </div>
                <div className="cta-arrow">→</div>
              </Link>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default TeamCTA;
