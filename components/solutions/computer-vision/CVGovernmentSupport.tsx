'use client';

import React from 'react';
import './CVGovernmentSupport.css';

interface CVGovernmentSupportProps {
  lang: 'ja' | 'en';
}

const CVGovernmentSupport: React.FC<CVGovernmentSupportProps> = ({ lang }) => {
  const content = {
    ja: {
      heading: '日本政府のAI・IoT推進政策に完全準拠',
      subheading: '経済産業省（METI）が推進するスマート製造・AI活用の実現を支援',
      badges: [
        {
          title: 'AI・IoT導入推進',
          organization: '経済産業省（METI）',
          description: '第四次産業革命における日本の製造業AI活用戦略に完全対応。コンピュータビジョンAIは製造DXの中核技術'
        },
        {
          title: 'ISA-95国際標準準拠',
          organization: 'ANSI/ISA',
          description: '製造業向け国際標準データモデルISA-95に準拠。ベンダーロックインを防ぎ、将来的な拡張性を保証'
        },
        {
          title: 'OPC UA 対応',
          organization: 'OPC Foundation',
          description: '産業用IoT通信の国際標準プロトコルに対応。あらゆるメーカーの産業機器・カメラと接続可能'
        },
        {
          title: 'サイバーセキュリティ対策',
          organization: 'IPA/NIST',
          description: 'IPA（情報処理推進機構）およびNISTのセキュリティガイドラインに準拠した設計'
        }
      ],
      subsidies: {
        heading: '利用可能な政府補助金制度',
        description: 'SolunaiのAI品質検査ソリューションは、以下の政府補助金・助成金の対象となり得ます',
        programs: [
          {
            name: 'ものづくり・商業・サービス生産性向上促進補助金',
            description: '中小企業の生産性向上を目的としたAI・IoT設備投資補助。AI検査システムは「革新的サービス」枠での申請が可能',
            coverage: '補助率: 1/2 ～ 2/3（最大1,000万円）',
            eligibility: '中小企業・小規模事業者'
          },
          {
            name: 'IT導入補助金（デジタル化基盤導入類型）',
            description: '中小企業のAI・IoTツール導入支援。AI品質検査システム・画像解析ツールとして申請対象',
            coverage: '補助率: 3/4以内（下限なし～350万円）',
            eligibility: '中小企業・小規模事業者'
          },
          {
            name: '事業再構築補助金',
            description: '新分野展開、業態転換等の事業再構築に伴うAI・自動化投資を支援',
            coverage: '補助率: 1/2 ～ 2/3（最大8,000万円）',
            eligibility: '中小企業等'
          },
          {
            name: '先端設備等導入計画（固定資産税減免）',
            description: 'AI検査設備・カメラシステムの固定資産税を3年間ゼロ～1/2に軽減',
            coverage: '固定資産税: 3年間 0～1/2に軽減',
            eligibility: '中小企業（市区町村の認定必要）'
          }
        ],
        note: '※ 補助金の採択は各制度の審査基準に基づきます。Solunaiは申請書類作成の技術支援を提供可能です。'
      },
      aiStrategy: {
        heading: '経済産業省 AI戦略との整合性',
        points: [
          '製造業におけるAI活用の具体的実装例',
          '中小企業でも導入可能な価格帯でのAI提供',
          '既存設備を活用した段階的DX推進',
          '国際標準プロトコル採用による相互運用性',
          'データ主権を守るオンプレミス対応可能'
        ]
      }
    },
    en: {
      heading: 'Full Compliance with Japanese Government AI & IoT Policies',
      subheading: 'Supporting METI\'s Smart Manufacturing and AI Utilization Initiatives',
      badges: [
        {
          title: 'AI & IoT Promotion Aligned',
          organization: 'METI (Ministry of Economy, Trade and Industry)',
          description: 'Fully aligned with Japan\'s manufacturing AI utilization strategy in the Fourth Industrial Revolution. Computer Vision AI is core DX technology'
        },
        {
          title: 'ISA-95 International Standard',
          organization: 'ANSI/ISA',
          description: 'Compliant with ISA-95 international standard data model for manufacturing. Prevents vendor lock-in and ensures future scalability'
        },
        {
          title: 'OPC UA Compatible',
          organization: 'OPC Foundation',
          description: 'Supports OPC UA, the international standard protocol for industrial IoT communication. Connect with cameras and equipment from any manufacturer'
        },
        {
          title: 'Cybersecurity Standards',
          organization: 'IPA/NIST',
          description: 'Designed in compliance with IPA (Information-technology Promotion Agency) and NIST security guidelines'
        }
      ],
      subsidies: {
        heading: 'Eligible Government Subsidy Programs',
        description: 'Solunai\'s AI Quality Inspection solution may qualify for the following Japanese government subsidies and grants',
        programs: [
          {
            name: 'Manufacturing/Service Productivity Improvement Subsidy',
            description: 'AI & IoT equipment investment subsidy for SME productivity improvement. AI inspection systems qualify under "Innovative Service" category',
            coverage: 'Subsidy Rate: 1/2 to 2/3 (Max ¥10M)',
            eligibility: 'SMEs and small businesses'
          },
          {
            name: 'IT Adoption Subsidy (Digital Infrastructure)',
            description: 'AI & IoT tool adoption support for SMEs. Qualifies as AI quality inspection system and image analysis tool',
            coverage: 'Subsidy Rate: Up to 3/4 (¥0-3.5M)',
            eligibility: 'SMEs and small businesses'
          },
          {
            name: 'Business Restructuring Subsidy',
            description: 'Supports AI and automation investment accompanying business restructuring, new market entry, or business model transformation',
            coverage: 'Subsidy Rate: 1/2 to 2/3 (Max ¥80M)',
            eligibility: 'SMEs and others'
          },
          {
            name: 'Advanced Equipment Introduction Plan (Property Tax Reduction)',
            description: 'Reduces property tax on AI inspection equipment and camera systems to zero or 1/2 for 3 years',
            coverage: 'Property Tax: 0 to 1/2 for 3 years',
            eligibility: 'SMEs (municipal certification required)'
          }
        ],
        note: '* Subsidy approval is subject to each program\'s evaluation criteria. Solunai can provide technical support for application documentation.'
      },
      aiStrategy: {
        heading: 'Alignment with METI AI Strategy',
        points: [
          'Concrete AI implementation example in manufacturing',
          'AI provision at price points accessible to SMEs',
          'Phased DX promotion leveraging existing equipment',
          'Interoperability through international standard protocols',
          'On-premise capable to protect data sovereignty'
        ]
      }
    }
  };

  const t = content[lang];

  return (
    <section className="cv-government-support">
      <div className="cv-government-support-container">
        <h2 className="cv-government-support-heading">{t.heading}</h2>
        <p className="cv-government-support-subheading">{t.subheading}</p>

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

        <div className="ai-strategy-section">
          <h3 className="ai-strategy-heading">{t.aiStrategy.heading}</h3>
          <ul className="ai-strategy-list">
            {t.aiStrategy.points.map((point, index) => (
              <li key={index}>{point}</li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
};

export default CVGovernmentSupport;
