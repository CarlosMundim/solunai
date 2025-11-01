'use client';

import React from 'react';
import Image from 'next/image';
import './CompanyProfile.css';

interface CompanyProfileProps {
  lang: 'ja' | 'en';
}

const CompanyProfile: React.FC<CompanyProfileProps> = ({ lang }) => {
  const content = {
    ja: {
      badge: '84年の歴史',
      heading: 'FBM Hudson Italiana',
      tagline: 'グローバル熱設備メーカー',
      description: '1941年設立。イタリア・ベルガモを拠点に、カスタムエンジニアリング熱交換器の設計・製造において84年の実績を持つ世界的企業。UAE支社を通じて中東市場にもサービスを展開。',
      industry: {
        label: '業界',
        value: 'HVAC熱設備製造'
      },
      markets: {
        label: '市場',
        value: 'オイル&ガス、LNG、石油精製、石油化学、化学処理、発電、医薬品製造'
      },
      operations: {
        label: '拠点',
        value: 'イタリア（設計・製造）+ UAE（地域ハブ）'
      },
      certifications: {
        label: '認証',
        value: 'ASME, API, PED'
      },
      products: {
        label: '製品',
        items: [
          '空冷式熱交換器',
          'シェル＆チューブ式熱交換器',
          '廃熱ボイラー',
          '圧力容器'
        ]
      }
    },
    en: {
      badge: '84 Years of Heritage',
      heading: 'FBM Hudson Italiana',
      tagline: 'Global Thermal Equipment Manufacturer',
      description: 'Founded in 1941. World-class company with 84 years of experience in designing and manufacturing custom engineered heat exchangers, based in Bergamo, Italy. Serving Middle East markets through UAE subsidiary.',
      industry: {
        label: 'Industry',
        value: 'HVAC Thermal Equipment Manufacturing'
      },
      markets: {
        label: 'Markets',
        value: 'Oil & Gas, LNG, Refineries, Petrochemical, Chemical Processing, Power Generation, Pharmaceutical Manufacturing'
      },
      operations: {
        label: 'Operations',
        value: 'Italy (Design & Manufacturing) + UAE (Regional Hub)'
      },
      certifications: {
        label: 'Certifications',
        value: 'ASME, API, PED'
      },
      products: {
        label: 'Products',
        items: [
          'Air-cooled Heat Exchangers',
          'Shell & Tube Exchangers',
          'Waste Heat Boilers',
          'Pressure Vessels'
        ]
      }
    }
  };

  const currentContent = content[lang];

  return (
    <section className="company-profile">
      <div className="company-profile-container">
        <div className="company-profile-badge">
          {currentContent.badge}
        </div>

        <div className="company-profile-content">
          <div className="company-profile-header">
            <h2 className="company-profile-heading">{currentContent.heading}</h2>
            <p className="company-profile-tagline">{currentContent.tagline}</p>
            <p className="company-profile-description">{currentContent.description}</p>
          </div>

          <div className="company-profile-grid">
            <div className="profile-item">
              <div className="profile-label">{currentContent.industry.label}</div>
              <div className="profile-value">{currentContent.industry.value}</div>
            </div>

            <div className="profile-item">
              <div className="profile-label">{currentContent.markets.label}</div>
              <div className="profile-value">{currentContent.markets.value}</div>
            </div>

            <div className="profile-item">
              <div className="profile-label">{currentContent.operations.label}</div>
              <div className="profile-value">{currentContent.operations.value}</div>
            </div>

            <div className="profile-item">
              <div className="profile-label">{currentContent.certifications.label}</div>
              <div className="profile-value">{currentContent.certifications.value}</div>
            </div>

            <div className="profile-item profile-item-wide">
              <div className="profile-label">{currentContent.products.label}</div>
              <div className="profile-products">
                {currentContent.products.items.map((product, index) => (
                  <span key={index} className="product-badge">{product}</span>
                ))}
              </div>
            </div>
          </div>
        </div>

        <div className="company-profile-image">
          <Image
            src="/images/Hero_Car_01.jpg"
            alt="FBM Hudson Italiana Manufacturing"
            width={1200}
            height={800}
            className="profile-image"
          />
        </div>
      </div>
    </section>
  );
};

export default CompanyProfile;
