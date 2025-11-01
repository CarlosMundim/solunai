'use client';

import React from 'react';
import './Partnerships.css';

interface PartnershipsProps {
  lang: 'ja' | 'en';
}

const Partnerships: React.FC<PartnershipsProps> = ({ lang }) => {
  const content = {
    ja: {
      title: '戦略的パートナーシップ',
      subtitle: 'Strategic Partnerships - Global Network & Proven Capabilities',
      intro: '世界クラスのパートナーとの提携により、スケーラブルなソリューションを提供',

      international: {
        title: '国際パートナー',
        partners: [
          {
            name: 'WorldEmp B.V.',
            location: 'オランダ',
            type: 'グローバルエンジニアリング人材プロバイダー',
            established: '2004年設立（20年以上の実績）',
            capabilities: [
              '世界クラスのエンジニアリング人材',
              '配備期間: 2-6週間（従来比4-6ヶ月→75%短縮）',
              'コスト優位性: 30-40%低コスト',
              '変動費モデル: 固定費リスク軽減'
            ],
            status: '優先ベンダー契約',
            impact: 'FBM Hudsonプロジェクトで実証済み'
          }
        ]
      },

      technology: {
        title: 'テクノロジーパートナー',
        partners: [
          {
            name: 'NVIDIA',
            product: 'Omniverse',
            capabilities: [
              'フォトリアルなデジタルツイン可視化',
              'リアルタイム物理シミュレーション',
              'GPUアクセラレーション計算',
              'マルチユーザーコラボレーション'
            ],
            icon: '🎮'
          },
          {
            name: 'ANSYS',
            product: 'Twin Builder',
            capabilities: [
              'CFD熱解析・FEA構造解析',
              '高精度な性能予測',
              'マルチフィジックスシミュレーション',
              '産業用途実証済み'
            ],
            icon: '⚙️'
          },
          {
            name: 'Microsoft',
            product: 'Azure',
            capabilities: [
              'エンタープライズグレードクラウド基盤',
              '99.9%稼働率保証',
              'ISO 27001 / SOC 2準拠',
              'グローバルデータセンター'
            ],
            icon: '☁️'
          },
          {
            name: 'Anthropic',
            product: 'Claude AI',
            capabilities: [
              '最先端の自然言語処理',
              'マルチモーダルAI能力',
              '安全性と信頼性重視',
              '製造業知識統合'
            ],
            icon: '🤖'
          }
        ]
      },

      industry: {
        title: '業界団体・協会',
        associations: [
          {
            name: '日本製造業協会',
            description: '製造業デジタル化推進',
            status: '会員'
          },
          {
            name: '神奈川県産業振興協会',
            description: '地域産業支援',
            status: '会員'
          }
        ]
      }
    },

    en: {
      title: 'Strategic Partnerships',
      subtitle: 'Global Network & Proven Capabilities',
      intro: 'World-class partnerships enabling scalable solutions',

      international: {
        title: 'International Partners',
        partners: [
          {
            name: 'WorldEmp B.V.',
            location: 'Netherlands',
            type: 'Global Engineering Talent Provider',
            established: 'Established 2004 (20+ years track record)',
            capabilities: [
              'World-class engineering talent',
              'Deployment: 2-6 weeks (vs. 4-6 months traditional)',
              'Cost advantage: 30-40% lower',
              'Variable cost model: minimizes fixed cost risk'
            ],
            status: 'Preferred Vendor Partnership',
            impact: 'Proven in FBM Hudson project'
          }
        ]
      },

      technology: {
        title: 'Technology Partners',
        partners: [
          {
            name: 'NVIDIA',
            product: 'Omniverse',
            capabilities: [
              'Photorealistic digital twin visualization',
              'Real-time physics simulation',
              'GPU-accelerated computing',
              'Multi-user collaboration'
            ],
            icon: '🎮'
          },
          {
            name: 'ANSYS',
            product: 'Twin Builder',
            capabilities: [
              'CFD thermal & FEA structural analysis',
              'High-precision performance prediction',
              'Multi-physics simulation',
              'Industrial-proven applications'
            ],
            icon: '⚙️'
          },
          {
            name: 'Microsoft',
            product: 'Azure',
            capabilities: [
              'Enterprise-grade cloud infrastructure',
              '99.9% uptime SLA',
              'ISO 27001 / SOC 2 compliant',
              'Global data centers'
            ],
            icon: '☁️'
          },
          {
            name: 'Anthropic',
            product: 'Claude AI',
            capabilities: [
              'State-of-the-art natural language processing',
              'Multimodal AI capabilities',
              'Safety and reliability focused',
              'Manufacturing knowledge integration'
            ],
            icon: '🤖'
          }
        ]
      },

      industry: {
        title: 'Industry Associations',
        associations: [
          {
            name: 'Japan Manufacturing Association',
            description: 'Manufacturing digitalization promotion',
            status: 'Member'
          },
          {
            name: 'Kanagawa Industrial Promotion Association',
            description: 'Regional industry support',
            status: 'Member'
          }
        ]
      }
    }
  };

  const current = content[lang];

  return (
    <section className="partnerships-section">
      <div className="partnerships-container">
        <div className="partnerships-header">
          <h2>{current.title}</h2>
          <p className="subtitle">{current.subtitle}</p>
          <p className="intro">{current.intro}</p>
        </div>

        {/* International Partners */}
        <div className="partnership-block featured">
          <h3 className="block-title">{current.international.title}</h3>
          {current.international.partners.map((partner, index) => (
            <div key={index} className="partner-card-detailed">
              <div className="partner-header-detailed">
                <div>
                  <h4>{partner.name}</h4>
                  <p className="partner-location">{partner.location}</p>
                  <p className="partner-type">{partner.type}</p>
                </div>
                <div className="partner-status-badge">{partner.status}</div>
              </div>

              <div className="partner-established">{partner.established}</div>

              <div className="partner-capabilities">
                <h5>{lang === 'ja' ? '主要能力:' : 'Key Capabilities:'}</h5>
                <ul>
                  {partner.capabilities.map((capability, capIndex) => (
                    <li key={capIndex}>{capability}</li>
                  ))}
                </ul>
              </div>

              <div className="partner-impact">
                <span className="impact-icon">✓</span>
                <span>{partner.impact}</span>
              </div>
            </div>
          ))}
        </div>

        {/* Technology Partners */}
        <div className="partnership-block">
          <h3 className="block-title">{current.technology.title}</h3>
          <div className="tech-partners-grid">
            {current.technology.partners.map((partner, index) => (
              <div key={index} className="tech-partner-card">
                <div className="tech-partner-icon">{partner.icon}</div>
                <h4>{partner.name}</h4>
                <p className="tech-partner-product">{partner.product}</p>
                <ul className="tech-capabilities">
                  {partner.capabilities.map((capability, capIndex) => (
                    <li key={capIndex}>{capability}</li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>

        {/* Industry Associations */}
        <div className="partnership-block">
          <h3 className="block-title">{current.industry.title}</h3>
          <div className="associations-grid">
            {current.industry.associations.map((association, index) => (
              <div key={index} className="association-card">
                <div className="association-header">
                  <h4>{association.name}</h4>
                  <span className="association-status">{association.status}</span>
                </div>
                <p className="association-description">{association.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Partnerships;
