'use client';

import React from 'react';
import './Certifications.css';

interface CertificationsProps {
  lang: 'ja' | 'en';
}

const Certifications: React.FC<CertificationsProps> = ({ lang }) => {
  const content = {
    ja: {
      title: '認証とコンプライアンス',
      subtitle: 'Certifications & Compliance - Enterprise Trust & Security',
      intro: 'エンタープライズグレードのセキュリティと業界標準への準拠',

      sections: [
        {
          title: 'データセキュリティ・プライバシー',
          badge: '取得済',
          certifications: [
            {
              name: 'ISO 27001:2022',
              description: '情報セキュリティマネジメントシステム',
              status: 'certified',
              details: '国際標準の情報セキュリティ管理'
            },
            {
              name: 'SOC 2 Type II',
              description: 'クラウドセキュリティ認証',
              status: 'certified',
              details: 'サービス組織の内部統制保証'
            },
            {
              name: 'GDPR準拠',
              description: '欧州データ保護規則',
              status: 'certified',
              details: '欧州顧客向けデータ保護'
            },
            {
              name: 'APPI準拠',
              description: '個人情報保護法（日本）',
              status: 'certified',
              details: '日本のプライバシー法令遵守'
            }
          ]
        },
        {
          title: '製造業標準',
          badge: '取得予定',
          certifications: [
            {
              name: 'ISO 9001',
              description: '品質マネジメントシステム',
              status: 'planned',
              target: '2026年Q1',
              details: '品質管理国際標準'
            },
            {
              name: 'ISO 14001',
              description: '環境マネジメントシステム',
              status: 'planned',
              target: '2026年Q2',
              details: '環境管理国際標準'
            },
            {
              name: 'Industry 4.0 Ready',
              description: 'スマートファクトリー対応',
              status: 'certified',
              details: '第四次産業革命技術統合'
            }
          ]
        },
        {
          title: 'ビジネス認証',
          badge: '取得済',
          certifications: [
            {
              name: 'METI登録',
              description: '経済産業省登録',
              status: 'certified',
              details: '日本政府認定事業者'
            },
            {
              name: '賠償責任保険',
              description: 'Professional Liability Insurance',
              status: 'certified',
              details: '¥100,000,000補償'
            }
          ]
        },
        {
          title: '財務・法務',
          badge: '取得済',
          certifications: [
            {
              name: '法人税コンプライアンス',
              description: '日本税法遵守',
              status: 'certified',
              details: '適切な税務申告・納税'
            },
            {
              name: '商業登記',
              description: '株式会社登記',
              status: 'certified',
              details: '法務局登記完了'
            }
          ]
        }
      ],

      legend: {
        certified: '取得済',
        planned: '取得予定'
      }
    },

    en: {
      title: 'Certifications & Compliance',
      subtitle: 'Enterprise Trust & Security',
      intro: 'Enterprise-grade security and industry standards compliance',

      sections: [
        {
          title: 'Data Security & Privacy',
          badge: 'Certified',
          certifications: [
            {
              name: 'ISO 27001:2022',
              description: 'Information Security Management System',
              status: 'certified',
              details: 'International information security standard'
            },
            {
              name: 'SOC 2 Type II',
              description: 'Cloud Security Certification',
              status: 'certified',
              details: 'Service organization internal controls'
            },
            {
              name: 'GDPR Compliant',
              description: 'European Data Protection Regulation',
              status: 'certified',
              details: 'Data protection for European customers'
            },
            {
              name: 'APPI Compliant',
              description: 'Act on Protection of Personal Information (Japan)',
              status: 'certified',
              details: 'Japanese privacy law compliance'
            }
          ]
        },
        {
          title: 'Manufacturing Standards',
          badge: 'In Progress',
          certifications: [
            {
              name: 'ISO 9001',
              description: 'Quality Management System',
              status: 'planned',
              target: 'Q1 2026',
              details: 'International quality management standard'
            },
            {
              name: 'ISO 14001',
              description: 'Environmental Management System',
              status: 'planned',
              target: 'Q2 2026',
              details: 'International environmental standard'
            },
            {
              name: 'Industry 4.0 Ready',
              description: 'Smart Factory Compliance',
              status: 'certified',
              details: 'Fourth industrial revolution technology'
            }
          ]
        },
        {
          title: 'Business Certifications',
          badge: 'Certified',
          certifications: [
            {
              name: 'METI Registered',
              description: 'Ministry of Economy, Trade and Industry',
              status: 'certified',
              details: 'Japanese government certified business'
            },
            {
              name: 'Professional Liability Insurance',
              description: 'Business Liability Coverage',
              status: 'certified',
              details: '¥100,000,000 coverage'
            }
          ]
        },
        {
          title: 'Financial & Legal',
          badge: 'Certified',
          certifications: [
            {
              name: 'Corporate Tax Compliance',
              description: 'Japan Tax Law',
              status: 'certified',
              details: 'Proper tax filing and payment'
            },
            {
              name: 'Commercial Registration',
              description: 'Kabushiki Kaisha Registration',
              status: 'certified',
              details: 'Legal Affairs Bureau registration'
            }
          ]
        }
      ],

      legend: {
        certified: 'Certified',
        planned: 'Planned'
      }
    }
  };

  const current = content[lang];

  return (
    <section className="certifications-section">
      <div className="certifications-container">
        <div className="certifications-header">
          <h2>{current.title}</h2>
          <p className="subtitle">{current.subtitle}</p>
          <p className="intro">{current.intro}</p>
        </div>

        <div className="certifications-grid">
          {current.sections.map((section, index) => (
            <div key={index} className="certification-block">
              <div className="block-header">
                <h3>{section.title}</h3>
                <span className={`section-badge ${section.badge === current.legend.certified || section.badge === 'Certified' ? 'certified' : 'planned'}`}>
                  {section.badge}
                </span>
              </div>

              <div className="certifications-list">
                {section.certifications.map((cert, certIndex) => (
                  <div key={certIndex} className={`certification-item ${cert.status}`}>
                    <div className="cert-icon">
                      {cert.status === 'certified' ? '✓' : '⏳'}
                    </div>
                    <div className="cert-content">
                      <div className="cert-header-row">
                        <h4>{cert.name}</h4>
                        {cert.target && (
                          <span className="cert-target">{cert.target}</span>
                        )}
                      </div>
                      <p className="cert-description">{cert.description}</p>
                      <p className="cert-details">{cert.details}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

        <div className="legend">
          <div className="legend-item">
            <span className="legend-icon certified">✓</span>
            <span>{current.legend.certified}</span>
          </div>
          <div className="legend-item">
            <span className="legend-icon planned">⏳</span>
            <span>{current.legend.planned}</span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Certifications;
