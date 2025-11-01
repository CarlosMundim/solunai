'use client';

import React from 'react';
import './ServicesWorldEmpPartnership.css';

interface ServicesWorldEmpPartnershipProps {
  lang: 'ja' | 'en';
}

const ServicesWorldEmpPartnership: React.FC<ServicesWorldEmpPartnershipProps> = ({ lang }) => {
  const content = {
    ja: {
      title: 'WorldEmp B.V. パートナーシップ',
      subtitle: 'グローバルエンジニアリングエクセレンス',
      about: {
        title: 'WorldEmp B.V.について',
        location: '本社: オランダ',
        founded: '設立: 2004年（20年以上）',
        business: '事業: グローバルリモートスタッフィングプラットフォーム',
        specialization: '専門分野: 高度教育を受けたエンジニアリング専門家'
      },
      services: {
        title: '提供サービス',
        items: [
          {
            icon: '🔍',
            title: '世界規模の採用・選考',
            description: 'グローバルネットワークから最適な人材を選定'
          },
          {
            icon: '🤝',
            title: 'HRサポート',
            description: 'パフォーマンス管理、評価、継続的サポート'
          },
          {
            icon: '📚',
            title: '専門能力開発',
            description: 'アップスキリング、トレーニング、継続的学習'
          },
          {
            icon: '💼',
            title: 'ワークスペースソリューション',
            description: 'ハイテクワークスペース、設備、インフラ'
          },
          {
            icon: '🌐',
            title: '24/7人材管理',
            description: 'タイムゾーン対応、継続的サポート'
          }
        ]
      },
      whyWorldemp: {
        title: 'なぜWorldEmpなのか',
        reasons: [
          {
            metric: '20年以上',
            label: '製造業セクター経験',
            description: '数百社のグローバル企業に人材を提供'
          },
          {
            metric: '2-6週間',
            label: '配置スピード',
            description: '従来の採用の52倍速い'
          },
          {
            metric: '¥0',
            label: 'クライアント配置手数料',
            description: 'Solunaiパートナーシップで追加コストなし'
          },
          {
            metric: 'グローバル',
            label: '人材ネットワーク',
            description: 'ヨーロッパ品質基準'
          }
        ]
      },
      partnership: {
        title: 'パートナーシップのメリット',
        benefits: [
          '即座の専門知識アクセス（2-6週間配備）',
          '採用リスクなし（WorldEmpが管理）',
          '柔軟なスケーリング（プロジェクトに応じて）',
          '品質保証（ヨーロッパ基準）',
          '継続的サポート（24/7）',
          'コスト効率（30-40%削減）'
        ]
      }
    },
    en: {
      title: 'WorldEmp B.V. Partnership',
      subtitle: 'Global Engineering Excellence',
      about: {
        title: 'About WorldEmp B.V.',
        location: 'Location: Netherlands',
        founded: 'Founded: 2004 (20+ years)',
        business: 'Business: Global remote staffing platform',
        specialization: 'Specialization: Highly-educated engineering professionals'
      },
      services: {
        title: 'Services Provided',
        items: [
          {
            icon: '🔍',
            title: 'Recruitment & Selection Worldwide',
            description: 'Sourcing optimal talent from global network'
          },
          {
            icon: '🤝',
            title: 'HR Support',
            description: 'Performance management, evaluation, ongoing support'
          },
          {
            icon: '📚',
            title: 'Professional Development',
            description: 'Upskilling, training, continuous learning'
          },
          {
            icon: '💼',
            title: 'Workspace Solutions',
            description: 'High-tech workspaces, equipment, infrastructure'
          },
          {
            icon: '🌐',
            title: '24/7 Talent Management',
            description: 'Timezone coverage, continuous support'
          }
        ]
      },
      whyWorldemp: {
        title: 'Why WorldEmp',
        reasons: [
          {
            metric: '20+ Years',
            label: 'Manufacturing Sector Experience',
            description: 'Staffed hundreds of global companies'
          },
          {
            metric: '2-6 Weeks',
            label: 'Placement Speed',
            description: '52x faster than traditional hiring'
          },
          {
            metric: '¥0',
            label: 'Client Placement Fees',
            description: 'No additional costs via Solunai partnership'
          },
          {
            metric: 'Global',
            label: 'Talent Network',
            description: 'European quality standards'
          }
        ]
      },
      partnership: {
        title: 'Partnership Benefits',
        benefits: [
          'Immediate expert access (2-6 week deployment)',
          'No recruitment risk (WorldEmp manages)',
          'Flexible scaling (project-based)',
          'Quality assurance (European standards)',
          'Ongoing support (24/7)',
          'Cost efficiency (30-40% reduction)'
        ]
      }
    }
  };

  const currentContent = content[lang];

  return (
    <section className="services-worldemp-partnership">
      <div className="worldemp-container">
        <div className="worldemp-header">
          <h2 className="worldemp-title">{currentContent.title}</h2>
          <p className="worldemp-subtitle">{currentContent.subtitle}</p>
        </div>

        <div className="about-section">
          <h3 className="section-title">{currentContent.about.title}</h3>
          <div className="about-grid">
            <div className="about-item">
              <span className="about-icon">📍</span>
              <span className="about-text">{currentContent.about.location}</span>
            </div>
            <div className="about-item">
              <span className="about-icon">📅</span>
              <span className="about-text">{currentContent.about.founded}</span>
            </div>
            <div className="about-item">
              <span className="about-icon">💼</span>
              <span className="about-text">{currentContent.about.business}</span>
            </div>
            <div className="about-item">
              <span className="about-icon">🎓</span>
              <span className="about-text">{currentContent.about.specialization}</span>
            </div>
          </div>
        </div>

        <div className="services-section">
          <h3 className="section-title">{currentContent.services.title}</h3>
          <div className="services-grid">
            {currentContent.services.items.map((service, index) => (
              <div key={index} className="service-card">
                <div className="service-icon">{service.icon}</div>
                <h4 className="service-title">{service.title}</h4>
                <p className="service-description">{service.description}</p>
              </div>
            ))}
          </div>
        </div>

        <div className="why-section">
          <h3 className="section-title">{currentContent.whyWorldemp.title}</h3>
          <div className="reasons-grid">
            {currentContent.whyWorldemp.reasons.map((reason, index) => (
              <div key={index} className="reason-card">
                <div className="reason-metric">{reason.metric}</div>
                <div className="reason-label">{reason.label}</div>
                <p className="reason-description">{reason.description}</p>
              </div>
            ))}
          </div>
        </div>

        <div className="partnership-section">
          <h3 className="section-title">{currentContent.partnership.title}</h3>
          <div className="benefits-list">
            {currentContent.partnership.benefits.map((benefit, index) => (
              <div key={index} className="benefit-row">
                <svg className="benefit-icon" viewBox="0 0 20 20" fill="currentColor">
                  <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                </svg>
                <span>{benefit}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ServicesWorldEmpPartnership;
