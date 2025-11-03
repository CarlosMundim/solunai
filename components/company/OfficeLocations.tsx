'use client';

import React from 'react';
import './OfficeLocations.css';

interface OfficeLocationsProps {
  lang: 'ja' | 'en';
}

const OfficeLocations: React.FC<OfficeLocationsProps> = ({ lang }) => {
  const content = {
    ja: {
      title: 'オフィス所在地',
      subtitle: 'Office Locations',

      headquarters: {
        label: '本社',
        name: 'Solunai株式会社',
        address: '神奈川県',
        addressEn: 'Kanagawa, Japan',
        phone: 'お問い合わせフォームよりご連絡ください',
        email: 'info@solunai.co.jp'
      },

      businessHours: {
        title: '営業時間',
        hours: '月曜日 - 金曜日: 9:00 - 18:00 (JST)',
        note: '※土日祝日は休業'
      },

      contact: {
        title: 'お問い合わせ',
        methods: [
          {
            type: 'メール',
            value: 'info@solunai.co.jp',
            description: '通常1営業日以内に返信'
          },
          {
            type: 'お問い合わせフォーム',
            value: 'ウェブサイトからご利用可能',
            description: '詳細なご相談に対応'
          }
        ]
      }
    },

    en: {
      title: 'Office Locations',
      subtitle: 'オフィス所在地',

      headquarters: {
        label: 'Headquarters',
        name: 'Solunai Systems K.K.',
        address: 'Kanagawa, Japan',
        addressJa: '神奈川県',
        phone: 'Please contact via inquiry form',
        email: 'info@solunai.co.jp'
      },

      businessHours: {
        title: 'Business Hours',
        hours: 'Monday - Friday: 9:00 - 18:00 (JST)',
        note: '* Closed on weekends and national holidays'
      },

      contact: {
        title: 'Contact Us',
        methods: [
          {
            type: 'Email',
            value: 'info@solunai.co.jp',
            description: 'Response within 1 business day'
          },
          {
            type: 'Contact Form',
            value: 'Available on our website',
            description: 'For detailed inquiries'
          }
        ]
      }
    }
  };

  const current = content[lang];

  return (
    <section className="office-locations-section">
      <div className="locations-container">
        <div className="locations-header">
          <h2>{current.title}</h2>
          <p className="subtitle">{current.subtitle}</p>
        </div>

        <div className="locations-content">
          {/* Headquarters */}
          <div className="office-card headquarters-card">
            <div className="office-badge">{current.headquarters.label}</div>
            <h3>{current.headquarters.name}</h3>

            <div className="office-details">
              <div className="detail-row">
                <div className="detail-icon">📍</div>
                <div className="detail-content">
                  <div className="detail-label">{lang === 'ja' ? '住所:' : 'Address:'}</div>
                  <div className="detail-value">{current.headquarters.address}</div>
                  {lang === 'ja' && 'addressEn' in current.headquarters && current.headquarters.addressEn && (
                    <div className="detail-value-secondary">{current.headquarters.addressEn}</div>
                  )}
                  {lang === 'en' && 'addressJa' in current.headquarters && current.headquarters.addressJa && (
                    <div className="detail-value-secondary">{current.headquarters.addressJa}</div>
                  )}
                </div>
              </div>

              <div className="detail-row">
                <div className="detail-icon">📞</div>
                <div className="detail-content">
                  <div className="detail-label">{lang === 'ja' ? '電話:' : 'Phone:'}</div>
                  <div className="detail-value">{current.headquarters.phone}</div>
                </div>
              </div>

              <div className="detail-row">
                <div className="detail-icon">✉️</div>
                <div className="detail-content">
                  <div className="detail-label">{lang === 'ja' ? 'メール:' : 'Email:'}</div>
                  <div className="detail-value">
                    <a href={`mailto:${current.headquarters.email}`}>
                      {current.headquarters.email}
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Business Hours & Contact */}
          <div className="info-cards">
            <div className="info-card">
              <h4>{current.businessHours.title}</h4>
              <p className="info-primary">{current.businessHours.hours}</p>
              <p className="info-note">{current.businessHours.note}</p>
            </div>

            <div className="info-card contact-card">
              <h4>{current.contact.title}</h4>
              <div className="contact-methods">
                {current.contact.methods.map((method, index) => (
                  <div key={index} className="contact-method">
                    <div className="method-type">{method.type}</div>
                    <div className="method-value">{method.value}</div>
                    <div className="method-description">{method.description}</div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default OfficeLocations;
