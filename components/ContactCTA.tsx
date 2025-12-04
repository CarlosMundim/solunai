'use client';

import React from 'react';
import './ContactCTA.css';

interface ContactCTAProps {
  lang: 'ja' | 'en';
}

const ContactCTA: React.FC<ContactCTAProps> = ({ lang }) => {
  const content = {
    ja: {
      headline: 'まずは、話を聞いてみませんか？',
      subheadline: '無料相談・資料請求、お気軽にどうぞ',
      description: '「うちでも使えるの？」「まず何から始めればいい？」そんな疑問からで大丈夫です。',
      primaryCTA: '資料請求（無料）',
      secondaryCTA: 'オンライン相談を予約',
      contactInfo: {
        phone: 'お電話でのお問い合わせ',
        phoneNumber: '045-285-9480',
        email: 'info@solunai.co.jp',
        hours: '受付時間：平日 9:00-18:00'
      },
      benefits: [
        '無料相談・資料請求',
        '導入事例のご紹介',
        'オンライン対応可',
        '小さく始められる提案'
      ]
    },
    en: {
      headline: 'Why not start with a conversation?',
      subheadline: 'Free consultation and materials available',
      description: '"Can we even use this?" "Where do we start?" Questions like these are perfectly fine.',
      primaryCTA: 'Request Information (Free)',
      secondaryCTA: 'Book Online Consultation',
      contactInfo: {
        phone: 'Phone Inquiries',
        phoneNumber: '+81-45-285-9480',
        email: 'info@solunai.co.jp',
        hours: 'Business Hours: Weekdays 9:00-18:00 JST'
      },
      benefits: [
        'Free consultation & materials',
        'Case study introductions',
        'Online meetings available',
        'Proposals you can start small'
      ]
    }
  };

  const t = content[lang];

  return (
    <section className="contact-cta-section" aria-label={lang === 'ja' ? 'お問い合わせ' : 'Contact'}>
      <div className="contact-cta-container">
        {/* Consultation Image */}
        <div className="contact-cta-image-wrapper">
          <img
            src="/images/solunai-consultation.jpg"
            alt={lang === 'ja' ? 'フレンドリーなコンサルタント' : 'Friendly consultant'}
            className="contact-cta-image"
          />
        </div>

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
              <span className="btn-emoji">📄</span>
              {t.primaryCTA}
            </button>
            <button className="contact-cta-secondary-btn">
              <span className="btn-emoji">📅</span>
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
