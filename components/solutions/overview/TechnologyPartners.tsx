'use client';

import React from 'react';
import './TechnologyPartners.css';

interface TechnologyPartnersProps {
  lang: 'ja' | 'en';
}

const TechnologyPartners: React.FC<TechnologyPartnersProps> = ({ lang }) => {
  const content = {
    ja: {
      heading: '認定・準拠',
      subheading: '製造業の品質基準を満たすソリューション',
      partners: [
        {
          id: 'meti',
          name: 'METI Connected Industries 準拠',
          icon: '🏭',
          features: [
            'Industry 4.0 aligned',
            '日本の製造業標準',
            '政府認定フレームワーク'
          ]
        },
        {
          id: 'jis',
          name: 'JIS規格対応',
          icon: '⚙️',
          features: [
            'JIS Z 溶接規格',
            'JIS A 建設規格',
            'JIS B/C 製造規格'
          ]
        },
        {
          id: 'iso',
          name: 'ISO 27001 / SOC 2',
          icon: '🔒',
          features: [
            '情報セキュリティ認証済',
            'エンタープライズグレードのデータ保護',
            '監査対応ドキュメント完備'
          ]
        },
        {
          id: 'it-support',
          name: 'IT導入支援事業者',
          icon: '✓',
          features: [
            '登録支援事業者',
            '中小企業向けソリューション',
            '実績のある導入トラック'
          ]
        }
      ]
    },
    en: {
      heading: 'Certifications & Compliance',
      subheading: 'Solutions meeting manufacturing quality standards',
      partners: [
        {
          id: 'meti',
          name: 'METI Connected Industries Compliant',
          icon: '🏭',
          features: [
            'Industry 4.0 aligned',
            'Japanese manufacturing standards',
            'Government-recognized framework'
          ]
        },
        {
          id: 'jis',
          name: 'JIS Standards Compliant',
          icon: '⚙️',
          features: [
            'JIS Z welding standards',
            'JIS A construction standards',
            'JIS B/C manufacturing standards'
          ]
        },
        {
          id: 'iso',
          name: 'ISO 27001 / SOC 2',
          icon: '🔒',
          features: [
            'Information security certified',
            'Enterprise-grade data protection',
            'Audit-ready documentation'
          ]
        },
        {
          id: 'it-support',
          name: 'IT Support Provider',
          icon: '✓',
          features: [
            'Registered support provider',
            'SME-focused solutions',
            'Proven implementation track record'
          ]
        }
      ]
    }
  };

  const t = content[lang];

  return (
    <section className="technology-partners">
      <div className="technology-partners-container">
        <h2 className="technology-partners-heading">{t.heading}</h2>
        <p className="technology-partners-subheading">{t.subheading}</p>

        <div className="technology-partners-grid">
          {t.partners.map((partner) => (
            <div key={partner.id} className="partner-card">
              <div className="partner-logo">
                <span className="partner-icon">{partner.icon}</span>
              </div>
              <h3 className="partner-name">{partner.name}</h3>
              <ul className="partner-features">
                {partner.features.map((feature, index) => (
                  <li key={index}>{feature}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TechnologyPartners;
