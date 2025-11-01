'use client';

import React from 'react';
import './CorporateProfile.css';

interface CorporateProfileProps {
  lang: 'ja' | 'en';
}

const CorporateProfile: React.FC<CorporateProfileProps> = ({ lang }) => {
  const content = {
    ja: {
      title: '企業概要',
      subtitle: 'Corporate Profile',
      items: [
        {
          label: '会社名',
          value: 'Solunai株式会社',
          valueEn: 'Solunai Systems K.K.'
        },
        {
          label: '設立',
          value: '2024年'
        },
        {
          label: '法人形態',
          value: '株式会社（K.K.）',
          valueEn: 'Kabushiki Kaisha (K.K.)'
        },
        {
          label: '資本金',
          value: '¥10,000,000'
        },
        {
          label: '株主構成',
          value: 'Tomoo Furuya（50%）、Carlos Mundim（50%）'
        },
        {
          label: '本社所在地',
          value: '神奈川県',
          valueEn: 'Kanagawa, Japan'
        },
        {
          label: '事業内容',
          value: 'デジタルツイン技術開発・導入支援、製造業向けAIソリューション、エンジニアリングサービス、製造・EPC統合サービス',
          valueEn: 'Digital Twin Technology Development & Implementation, AI Solutions for Manufacturing, Engineering Services, Integrated Manufacturing & EPC Services'
        }
      ],
      note: '※企業情報は2025年1月時点のものです'
    },
    en: {
      title: 'Corporate Profile',
      subtitle: '企業概要',
      items: [
        {
          label: 'Company Name',
          value: 'Solunai Systems K.K.',
          valueEn: 'Solunai株式会社'
        },
        {
          label: 'Established',
          value: '2024'
        },
        {
          label: 'Legal Structure',
          value: 'Kabushiki Kaisha (K.K.)',
          valueEn: '株式会社'
        },
        {
          label: 'Capital',
          value: '¥10,000,000'
        },
        {
          label: 'Shareholders',
          value: 'Tomoo Furuya (50%), Carlos Mundim (50%)'
        },
        {
          label: 'Headquarters',
          value: 'Kanagawa, Japan',
          valueEn: '神奈川県'
        },
        {
          label: 'Business',
          value: 'Digital Twin Technology Development & Implementation, AI Solutions for Manufacturing, Engineering Services, Integrated Manufacturing & EPC Services',
          valueEn: 'デジタルツイン技術開発・導入支援、製造業向けAIソリューション、エンジニアリングサービス、製造・EPC統合サービス'
        }
      ],
      note: '* Information as of January 2025'
    }
  };

  const current = content[lang];

  return (
    <section className="corporate-profile-section">
      <div className="profile-container">
        <div className="profile-header">
          <h2>{current.title}</h2>
          <p className="subtitle">{current.subtitle}</p>
        </div>

        <div className="profile-grid">
          {current.items.map((item, index) => (
            <div key={index} className="profile-item">
              <div className="item-label">{item.label}</div>
              <div className="item-value">
                <div className="value-main">{item.value}</div>
                {item.valueEn && (
                  <div className="value-secondary">{item.valueEn}</div>
                )}
              </div>
            </div>
          ))}
        </div>

        <div className="profile-note">
          {current.note}
        </div>
      </div>
    </section>
  );
};

export default CorporateProfile;
