'use client';

import React from 'react';
import Link from 'next/link';
import './ServicesServicesCTA.css';

interface ServicesServicesCTAProps {
  lang: 'ja' | 'en';
}

const ServicesServicesCTA: React.FC<ServicesServicesCTAProps> = ({ lang }) => {
  const content = {
    ja: {
      title: '製造業の課題、無料で診断します',
      subtitle: '30分の無料診断で、御社工場のAI活用可能性をお伝えします',
      primaryButton: '無料診断を予約',
      secondaryButton: 'お問い合わせ',
      primaryLink: '/contact',
      secondaryLink: '/contact'
    },
    en: {
      title: 'Free Manufacturing Assessment',
      subtitle: 'In 30 minutes, we\'ll identify AI opportunities for your factory',
      primaryButton: 'Schedule Free Assessment',
      secondaryButton: 'Contact Us',
      primaryLink: '/en/contact',
      secondaryLink: '/en/contact'
    }
  };

  const currentContent = content[lang];

  return (
    <section className="services-services-cta">
      <div className="cta-container">
        <div className="cta-content">
          <h2 className="cta-title">{currentContent.title}</h2>
          <p className="cta-subtitle">{currentContent.subtitle}</p>

          <div className="cta-buttons">
            <Link href={currentContent.primaryLink} className="cta-button primary">
              {currentContent.primaryButton}
            </Link>
            <Link href={currentContent.secondaryLink} className="cta-button secondary">
              {currentContent.secondaryButton}
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ServicesServicesCTA;
