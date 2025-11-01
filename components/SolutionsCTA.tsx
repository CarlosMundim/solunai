'use client';

import React from 'react';
import './SolutionsCTA.css';

interface SolutionsCTAProps {
  lang: 'ja' | 'en';
}

const SolutionsCTA: React.FC<SolutionsCTAProps> = ({ lang }) => {
  const content = {
    ja: {
      title: 'あなたの製造業に最適なソリューションを見つけましょう',
      subtitle: '無料相談（60分）で以下をご提供',
      benefits: [
        '✓ 製造業診断（課題特定）',
        '✓ カスタムROI試算',
        '✓ 技術準備評価',
        '✓ 予備的な実装ロードマップ',
        '✓ 概算見積'
      ],
      buttons: [
        { label: '無料相談を予約', primary: true },
        { label: '資料をダウンロード', primary: false },
        { label: 'デモ動画を視聴', primary: false }
      ],
      contact: {
        email: 'info@solunai.com',
        phone: '+81-3-XXXX-XXXX',
        office: '東京オフィス：〒XXX-XXXX 東京都千代田区...'
      }
    },
    en: {
      title: 'Find the Right Solution for Your Manufacturing Business',
      subtitle: 'Free 60-minute consultation includes',
      benefits: [
        '✓ Manufacturing diagnostics (problem identification)',
        '✓ Custom ROI analysis',
        '✓ Technical readiness assessment',
        '✓ Preliminary implementation roadmap',
        '✓ Budget estimate'
      ],
      buttons: [
        { label: 'Schedule Free Consultation', primary: true },
        { label: 'Download Brochure', primary: false },
        { label: 'Watch Demo Video', primary: false }
      ],
      contact: {
        email: 'info@solunai.com',
        phone: '+81-3-XXXX-XXXX',
        office: 'Tokyo Office: XXX-XXXX, Chiyoda-ku, Tokyo...'
      }
    }
  };

  const currentContent = content[lang];

  return (
    <section className="solutions-cta-section">
      <div className="cta-background">
        <div className="cta-overlay"></div>
      </div>

      <div className="cta-container">
        <div className="cta-content">
          <h2>{currentContent.title}</h2>
          <p className="cta-subtitle">{currentContent.subtitle}</p>

          <ul className="cta-benefits">
            {currentContent.benefits.map((benefit, index) => (
              <li key={index}>{benefit}</li>
            ))}
          </ul>

          <div className="cta-buttons">
            {currentContent.buttons.map((button, index) => (
              <button
                key={index}
                className={`cta-btn ${button.primary ? 'primary' : 'secondary'}`}
              >
                {button.label}
              </button>
            ))}
          </div>
        </div>

        <div className="cta-contact">
          <div className="contact-item">
            <span className="contact-icon">📧</span>
            <span>{currentContent.contact.email}</span>
          </div>
          <div className="contact-item">
            <span className="contact-icon">📞</span>
            <span>{currentContent.contact.phone}</span>
          </div>
          <div className="contact-item">
            <span className="contact-icon">🏢</span>
            <span>{currentContent.contact.office}</span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SolutionsCTA;
