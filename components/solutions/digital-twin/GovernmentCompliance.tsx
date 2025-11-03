'use client';

import React from 'react';
import './GovernmentCompliance.css';

interface GovernmentComplianceProps {
  lang: 'ja' | 'en';
}

const GovernmentCompliance: React.FC<GovernmentComplianceProps> = ({ lang }) => {
  const content = {
    ja: {
      heading: '日本政府のデジタル化推進政策に完全準拠',
      subheading: '経済産業省（METI）が推進するスマート製造・Connected Industriesの実現を支援',
      badges: [
        {
          title: 'Connected Industries対応',
          organization: '経済産業省（METI）',
          description: '第四次産業革命における日本の製造業DX戦略「Connected Industries」のコンセプトに完全対応'
        },
        {
          title: 'ISA-95国際標準準拠',
          organization: 'ANSI/ISA',
          description: '製造業向け国際標準データモデルISA-95に準拠。ベンダーロックインを防ぎ、将来的な拡張性を保証'
        },
        {
          title: 'OPC UA 対応',
          organization: 'OPC Foundation',
          description: '産業用IoT通信の国際標準プロトコルに対応。あらゆるメーカーの産業機器と接続可能'
        },
        {
          title: 'サイバーセキュリティ対策',
          organization: 'IPA/NIST',
          description: 'IPA（情報処理推進機構）およびNISTのセキュリティガイドラインに準拠した設計'
        }
      ],
      subsidies: {
        heading: '利用可能な政府補助金制度',
        description: 'Solunaiのデジタルツインソリューションは、以下の政府補助金・助成金の対象となり得ます',
        programs: [
          {
            name: 'ものづくり・商業・サービス生産性向上促進補助金',
            description: '中小企業の生産性向上を目的とした設備投資補助。デジタルツイン導入は「革新的サービス」枠での申請が可能',
            coverage: '補助率: 1/2 ～ 2/3',
            eligibility: '中小企業・小規模事業者'
          },
          {
            name: 'IT導入補助金（デジタル化基盤導入類型）',
            description: '中小企業のITツール導入支援。生産管理システム・IoT連携ツールとして申請対象',
            coverage: '補助率: 3/4以内（下限なし～350万円）',
            eligibility: '中小企業・小規模事業者'
          },
          {
            name: '事業再構築補助金',
            description: '新分野展開、業態転換等の事業再構築に伴うDX投資を支援',
            coverage: '補助率: 1/2 ～ 2/3',
            eligibility: '中小企業等'
          }
        ],
        note: '※ 補助金の採択は各制度の審査基準に基づきます。Solunaiは申請書類作成の技術支援を提供可能です。'
      }
    },
    en: {
      heading: 'Full Compliance with Japanese Government Digitalization Policies',
      subheading: 'Supporting METI\'s Smart Manufacturing and Connected Industries initiatives',
      badges: [
        {
          title: 'Connected Industries Aligned',
          organization: 'METI (Ministry of Economy, Trade and Industry)',
          description: 'Fully aligned with Japan\'s Connected Industries strategy for manufacturing DX in the Fourth Industrial Revolution'
        },
        {
          title: 'ISA-95 International Standard',
          organization: 'ANSI/ISA',
          description: 'Compliant with ISA-95 international standard data model for manufacturing. Prevents vendor lock-in and ensures future scalability'
        },
        {
          title: 'OPC UA Compatible',
          organization: 'OPC Foundation',
          description: 'Supports OPC UA, the international standard protocol for industrial IoT communication. Connect with equipment from any manufacturer'
        },
        {
          title: 'Cybersecurity Standards',
          organization: 'IPA/NIST',
          description: 'Designed in compliance with IPA (Information-technology Promotion Agency) and NIST security guidelines'
        }
      ],
      subsidies: {
        heading: 'Eligible Government Subsidy Programs',
        description: 'Solunai\'s Digital Twin solution may qualify for the following Japanese government subsidies and grants',
        programs: [
          {
            name: 'Manufacturing/Service Productivity Improvement Subsidy',
            description: 'Capital investment subsidy for SME productivity improvement. Digital Twin adoption qualifies under "Innovative Service" category',
            coverage: 'Subsidy Rate: 1/2 to 2/3',
            eligibility: 'SMEs and small businesses'
          },
          {
            name: 'IT Adoption Subsidy (Digital Infrastructure)',
            description: 'IT tool adoption support for SMEs. Qualifies as production management system and IoT integration tool',
            coverage: 'Subsidy Rate: Up to 3/4 (¥0-3.5M)',
            eligibility: 'SMEs and small businesses'
          },
          {
            name: 'Business Restructuring Subsidy',
            description: 'Supports DX investment accompanying business restructuring, new market entry, or business model transformation',
            coverage: 'Subsidy Rate: 1/2 to 2/3',
            eligibility: 'SMEs and others'
          }
        ],
        note: '* Subsidy approval is subject to each program\'s evaluation criteria. Solunai can provide technical support for application documentation.'
      }
    }
  };

  const t = content[lang];

  return (
    <section className="government-compliance">
      <div className="government-compliance-container">
        <h2 className="government-compliance-heading">{t.heading}</h2>
        <p className="government-compliance-subheading">{t.subheading}</p>

        <div className="compliance-badges-grid">
          {t.badges.map((badge, index) => (
            <div key={index} className="compliance-badge">
              <div className="badge-icon">✓</div>
              <h3 className="badge-title">{badge.title}</h3>
              <div className="badge-organization">{badge.organization}</div>
              <p className="badge-description">{badge.description}</p>
            </div>
          ))}
        </div>

        <div className="subsidies-section">
          <h3 className="subsidies-heading">{t.subsidies.heading}</h3>
          <p className="subsidies-description">{t.subsidies.description}</p>

          <div className="subsidies-grid">
            {t.subsidies.programs.map((program, index) => (
              <div key={index} className="subsidy-card">
                <h4 className="subsidy-name">{program.name}</h4>
                <p className="subsidy-description">{program.description}</p>
                <div className="subsidy-details">
                  <div className="subsidy-coverage">{program.coverage}</div>
                  <div className="subsidy-eligibility">{program.eligibility}</div>
                </div>
              </div>
            ))}
          </div>

          <p className="subsidies-note">{t.subsidies.note}</p>
        </div>
      </div>
    </section>
  );
};

export default GovernmentCompliance;
