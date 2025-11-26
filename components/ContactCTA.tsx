'use client';

import React from 'react';
import './ContactCTA.css';

interface ContactCTAProps {
  lang: 'ja' | 'en';
}

const ContactCTA: React.FC<ContactCTAProps> = ({ lang }) => {
  const content = {
    ja: {
      headline: '製造業の課題、一緒に解決しませんか？',
      subheadline: "Let's solve your manufacturing challenges together",
      description: '無料相談・資料請求は完全無料。お気軽にお問い合わせください。',
      primaryCTA: '資料をダウンロード',
      secondaryCTA: '無料診断を予約',
      contactInfo: {
        phone: 'お電話でのお問い合わせ',
        phoneNumber: '03-XXXX-XXXX',
        email: 'info@solunai.com',
        hours: '受付時間：平日 9:00-18:00'
      },
      benefits: [
        '導入事例・ROI分析',
        '技術資料・ホワイトペーパー',
        '専門家による課題診断',
        '即日対応・オンライン可'
      ]
    },
    en: {
      headline: "Let's solve your manufacturing challenges together",
      subheadline: '製造業の課題、一緒に解決しませんか？',
      description: 'Free consultation and materials available. No obligation, no pressure.',
      primaryCTA: 'Download Materials',
      secondaryCTA: 'Schedule Free Assessment',
      contactInfo: {
        phone: 'Phone Inquiries',
        phoneNumber: '+81-3-XXXX-XXXX',
        email: 'info@solunai.com',
        hours: 'Business Hours: Weekdays 9:00-18:00 JST'
      },
      benefits: [
        'Case Studies & ROI Analysis',
        'Technical Documentation',
        'Expert Consultation',
        'Same-day Response Available'
      ]
    }
  };

  const t = content[lang];

  return (
    <section className="contact-cta-section" aria-label={lang === 'ja' ? 'お問い合わせ' : 'Contact'}>
      <div className="contact-cta-container">
        {/* Main Content */}
        <div className="contact-cta-content">
          <div className="contact-cta-header">
            <h2 className="contact-cta-headline">{t.headline}</h2>
            <p className="contact-cta-subheadline">{t.subheadline}</p>
            <p className="contact-cta-description">{t.description}</p>
          </div>

          {/* Dual CTA Buttons */}
          <div className="contact-cta-buttons">
            <button className="contact-cta-primary-btn">
              <svg className="btn-icon" width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M17 7L10 2L3 7V17C3 17.5304 3.21071 18.0391 3.58579 18.4142C3.96086 18.7893 4.46957 19 5 19H15C15.5304 19 16.0391 18.7893 16.4142 18.4142C16.7893 18.0391 17 17.5304 17 17V7Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                <path d="M7 19V10H13V19" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
              {t.primaryCTA}
            </button>
            <button className="contact-cta-secondary-btn">
              <svg className="btn-icon" width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                <rect x="3" y="4" width="14" height="14" rx="2" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                <path d="M3 8H17" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                <path d="M7 1V4" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                <path d="M13 1V4" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
              {t.secondaryCTA}
            </button>
          </div>

          {/* Benefits Grid */}
          <div className="contact-cta-benefits">
            {t.benefits.map((benefit, index) => (
              <div key={index} className="contact-cta-benefit">
                <svg className="benefit-check" width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <circle cx="8" cy="8" r="7" fill="currentColor" fillOpacity="0.1" stroke="currentColor" strokeWidth="1.5"/>
                  <path d="M5 8L7 10L11 6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
                <span>{benefit}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Contact Information */}
        <div className="contact-cta-info">
          <div className="contact-info-item">
            <div className="contact-info-label">{t.contactInfo.phone}</div>
            <div className="contact-info-value contact-phone">{t.contactInfo.phoneNumber}</div>
          </div>
          <div className="contact-info-item">
            <div className="contact-info-label">Email</div>
            <div className="contact-info-value contact-email">{t.contactInfo.email}</div>
          </div>
          <div className="contact-info-hours">{t.contactInfo.hours}</div>
        </div>
      </div>
    </section>
  );
};

export default ContactCTA;
