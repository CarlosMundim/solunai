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
          link: '#contact',
          primary: true,
        },
        {
          title: 'チームに連絡する',
          description: '直接お問い合わせ',
          link: '#contact',
          primary: false,
        },
        {
          title: '詳細な企業資料をダウンロード',
          description: 'PDF資料（日本語）',
          link: '/downloads/solunai-company-profile-ja.pdf',
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
          link: '#contact',
          primary: true,
        },
        {
          title: 'Contact Our Team',
          description: 'Direct inquiry',
          link: '#contact',
          primary: false,
        },
        {
          title: 'Download Company Profile',
          description: 'PDF brochure (English)',
          link: '/downloads/solunai-company-profile-en.pdf',
          primary: false,
        },
      ],
    },
  };

  const text = content[lang];

  return (
    <section className="team-cta">
      <div className="team-cta-container">
        <div className="team-cta-header">
          <h2 className="team-cta-title">{text.title}</h2>
          <p className="team-cta-subtitle">{text.subtitle}</p>
        </div>

        <div className="team-cta-grid">
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

        {/* Trust Badges */}
        <div className="trust-badges">
          <div className="badge">
            <span className="badge-icon">🏆</span>
            <span className="badge-text">
              {lang === 'ja' ? '52倍成長実績' : '52× Growth Achievement'}
            </span>
          </div>
          <div className="badge">
            <span className="badge-icon">💰</span>
            <span className="badge-text">
              {lang === 'ja' ? '¥120億円以上のエグジット' : '¥12B+ Exit Portfolio'}
            </span>
          </div>
          <div className="badge">
            <span className="badge-icon">⏱️</span>
            <span className="badge-text">
              {lang === 'ja' ? '60年以上の統合経験' : '60+ Years Combined Experience'}
            </span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TeamCTA;
