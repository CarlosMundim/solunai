'use client';

import React from 'react';
import Image from 'next/image';
import './TeamGrid.css';

interface TeamMember {
  name: string;
  nameJapanese?: string;
  title: string;
  titleJapanese?: string;
  bio: string;
  bioJapanese?: string;
  image: string;
  linkedin?: string;
}

interface TeamGridProps {
  lang: 'ja' | 'en';
}

const TeamGrid: React.FC<TeamGridProps> = ({ lang }) => {
  const teamMembers: TeamMember[] = [
    {
      name: 'Carlos Magno Freitas Mundim',
      title: 'Chief Technology Officer',
      titleJapanese: '最高技術責任者（CTO）',
      bio: '30+ years manufacturing engineering experience. Led Continental transformation (US$7M → $365M). Expert in digital twin, AI/ML, and industrial automation.',
      bioJapanese: '製造エンジニアリング30年以上の経験。Continental変革を主導（700万ドル→3億6500万ドル）。デジタルツイン、AI/ML、産業オートメーションの専門家。',
      image: '/images/team/carlos-mundim.jpg',
      linkedin: 'https://www.linkedin.com/in/carlosmundim/'
    },
    {
      name: 'Tomoo Hara',
      nameJapanese: '原 知夫',
      title: 'Managing Director',
      titleJapanese: 'マネージングディレクター',
      bio: '25+ years Japanese manufacturing industry experience. ¥12B+ strategic exits portfolio. Deep network across 200+ Japanese SME manufacturers.',
      bioJapanese: '日本製造業界25年以上の経験。120億円以上の戦略的エグジット・ポートフォリオ。200社以上の日本中小製造業との深いネットワーク。',
      image: '/images/team/tomoo-hara.jpg',
      linkedin: undefined
    },
    {
      name: 'Jeanette van Niekerk',
      title: 'Operations Director',
      titleJapanese: 'オペレーションディレクター',
      bio: 'Project management and client success operations. Quality assurance, training programs, and international operations coordination.',
      bioJapanese: 'プロジェクト管理とクライアント成功オペレーション。品質保証、トレーニングプログラム、国際オペレーション調整。',
      image: '/images/team/jeanette-van-niekerk.jpg',
      linkedin: undefined
    }
  ];

  const content = {
    ja: {
      sectionTitle: 'チーム',
      sectionSubtitle: '製造業のエキスパートが集結',
      viewProfile: 'LinkedIn',
    },
    en: {
      sectionTitle: 'Our Team',
      sectionSubtitle: 'Manufacturing industry experts united',
      viewProfile: 'LinkedIn',
    }
  };

  const text = content[lang];

  return (
    <section className="team-grid-section">
      <div className="team-grid-container">
        <div className="team-grid-header">
          <h2 className="team-grid-title">{text.sectionTitle}</h2>
          <p className="team-grid-subtitle">{text.sectionSubtitle}</p>
        </div>

        <div className="team-grid">
          {teamMembers.map((member, index) => (
            <div key={index} className="team-card">
              <div className="team-card-image-wrapper">
                <Image
                  src={member.image}
                  alt={member.name}
                  width={200}
                  height={200}
                  className="team-card-image"
                />
              </div>

              <div className="team-card-content">
                <h3 className="team-card-name">
                  {member.name}
                  {member.nameJapanese && lang === 'ja' && (
                    <span className="team-card-name-japanese"> ({member.nameJapanese})</span>
                  )}
                </h3>

                <p className="team-card-title">
                  {lang === 'ja' && member.titleJapanese ? member.titleJapanese : member.title}
                </p>

                <p className="team-card-bio">
                  {lang === 'ja' && member.bioJapanese ? member.bioJapanese : member.bio}
                </p>

                {member.linkedin && (
                  <a
                    href={member.linkedin}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="team-card-linkedin"
                  >
                    <svg
                      width="20"
                      height="20"
                      viewBox="0 0 24 24"
                      fill="currentColor"
                    >
                      <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/>
                    </svg>
                    {text.viewProfile}
                  </a>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TeamGrid;
