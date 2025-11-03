'use client';

import React from 'react';
import './CompanyHero.css';

interface CompanyHeroProps {
  lang: 'ja' | 'en';
}

const CompanyHero: React.FC<CompanyHeroProps> = ({ lang }) => {
  const content = {
    ja: {
      title: '会社情報',
      titleEn: 'Company Information',
      subtitle: 'Transforming Japanese Manufacturing with Proven Technology and Global Partnerships',
      subtitleJa: '実証済みの技術とグローバルパートナーシップで日本の製造業を変革',
      description: 'Solunaiは、デジタルツイン技術と世界クラスのエンジニアリングサービスを通じて、日本の製造業のデジタル変革を加速します。'
    },
    en: {
      title: 'Company Information',
      titleJa: '会社情報',
      subtitle: 'Transforming Japanese Manufacturing with Proven Technology and Global Partnerships',
      description: 'Solunai accelerates digital transformation for Japanese manufacturing through digital twin technology and world-class engineering services.'
    }
  };

  return (
    <section className="company-hero">
      <div className="company-hero-container">
        <div className="hero-content">
          <div className="hero-titles">
            {lang === 'ja' ? (
              <>
                <h1 className="hero-title-main">{content.ja.title}</h1>
                <p className="hero-title-en">{content.ja.titleEn}</p>
              </>
            ) : (
              <>
                <h1 className="hero-title-main">{content.en.title}</h1>
                <p className="hero-title-ja">{content.en.titleJa}</p>
              </>
            )}
          </div>

          <p className="hero-subtitle">{content[lang].subtitle}</p>
          {lang === 'ja' && <p className="hero-subtitle-ja">{content.ja.subtitleJa}</p>}

          <p className="hero-description">{content[lang].description}</p>
        </div>
      </div>
    </section>
  );
};

export default CompanyHero;
