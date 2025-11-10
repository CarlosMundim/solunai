'use client';

import React from 'react';
import Image from 'next/image';
import './CoFounderProfile.css';

interface CoFounderProfileProps {
  lang: 'ja' | 'en';
  name: string;
  nameRomaji?: string;
  nameJapanese?: string;
  title: string;
  role: 'cto' | 'ceo' | 'coo' | 'md';
  image: string;
}

const CoFounderProfile: React.FC<CoFounderProfileProps> = ({
  lang,
  name,
  nameRomaji,
  nameJapanese,
  title,
  role,
  image,
}) => {
  // Carlos Mundim CTO Content
  const carlosContent = {
    ja: {
      header: '製造エンジニアリング：30年以上のグローバル経験',
      mainAchievements: '主な実績',
      achievements: [
        {
          company: 'Continental（南アフリカ）',
          position: 'オペレーション・ターンアラウンド・スペシャリスト',
          highlights: [
            {
              icon: '◆',
              text: '輸出事業の変革：大幅な成長を実現',
              emphasis: true,
            },
            {
              icon: '◆',
              text: '南アフリカ政府「Exporter of the Year」（2年連続受賞）',
              emphasis: true,
            },
            {
              icon: '•',
              text: 'ゼロから製造エクセレンスプログラムを構築',
            },
            {
              icon: '•',
              text: '品質システム導入（ISO 9001、シックスシグマ）',
            },
            {
              icon: '•',
              text: '苦境の事業を世界クラスの水準に変革',
            },
          ],
        },
        {
          company: 'KNM Process Equipment Inc.',
          position: 'ビジネスオペレーション統括',
          highlights: [
            { icon: '•', text: '装置製造のプロセス最適化' },
            { icon: '•', text: '国際市場拡大（中東、アジア）' },
            { icon: '•', text: 'EPC（設計・調達・建設）プロジェクト管理' },
          ],
        },
        {
          company: 'OUTSOURCING Group',
          position: 'グローバル戦略リーダー',
          highlights: [
            { icon: '•', text: '複数国での製造オペレーション' },
            { icon: '•', text: 'サプライチェーン最適化' },
            { icon: '•', text: 'コスト削減施策（大幅削減達成）' },
          ],
        },
        {
          company: 'My Terra s.A.',
          position: 'LNG・エネルギー部門ディレクター',
          highlights: [
            { icon: '•', text: '大規模産業プロジェクト（数億円規模）' },
            { icon: '•', text: 'LNG・エネルギーセクターの製造プロセス' },
          ],
        },
      ],
      education: {
        title: '学歴',
        items: [
          '電気工学修士（Master of Science）',
          '専門：産業オートメーション・制御システム',
        ],
      },
      expertise: {
        title: '専門知識',
        items: [
          '製造プロセスエンジニアリング（30年以上の実務経験）',
          '産業オートメーション・ロボティクス',
          '品質管理システム（ISO 9001、シックスシグマ・ブラックベルト）',
          '生産最適化手法（リーン製造、制約理論）',
          'デジタルツイン技術実装',
          '製造業向けAI/ML応用',
          'EPCプロジェクト管理',
          'ターンアラウンド・変革リーダーシップ',
        ],
      },
      international: {
        title: '国際経験',
        items: [
          '南アフリカ：Continental（大幅な成長達成）、My Terra',
          'マレーシア：KNM Process Equipment',
          'グローバル：OUTSOURCING Group',
          '日本：現在（Solunai Systems）',
        ],
      },
      languages: {
        title: '言語',
        text: 'ポルトガル語（母国語）、英語（流暢）、日本語（ビジネスレベル）',
      },
    },
    en: {
      header: 'Manufacturing Engineering: 30+ Years Global Experience',
      mainAchievements: 'Key Achievements',
      achievements: [
        {
          company: 'Continental (South Africa)',
          position: 'Operations Turnaround Specialist',
          highlights: [
            {
              icon: '◆',
              text: 'Transformed export operations: significant growth achieved',
              emphasis: true,
            },
            {
              icon: '◆',
              text: 'Government of South Africa "Exporter of the Year" (2 consecutive years)',
              emphasis: true,
            },
            {
              icon: '•',
              text: 'Built manufacturing excellence programs from ground up',
            },
            {
              icon: '•',
              text: 'Led quality systems implementation (ISO 9001, Six Sigma)',
            },
            {
              icon: '•',
              text: 'Turnaround specialist (took struggling operations to world-class)',
            },
          ],
        },
        {
          company: 'KNM Process Equipment Inc.',
          position: 'Head of Business Operations',
          highlights: [
            { icon: '•', text: 'Process optimization for equipment manufacturing' },
            { icon: '•', text: 'International market expansion (Middle East, Asia)' },
            { icon: '•', text: 'EPC (Engineering, Procurement, Construction) project management' },
          ],
        },
        {
          company: 'OUTSOURCING Group',
          position: 'Global Strategy Leader',
          highlights: [
            { icon: '•', text: 'Manufacturing operations across multiple countries' },
            { icon: '•', text: 'Supply chain optimization' },
            { icon: '•', text: 'Cost reduction initiatives (significant savings achieved)' },
          ],
        },
        {
          company: 'My Terra s.A.',
          position: 'Director of LNG and Energy',
          highlights: [
            { icon: '•', text: 'Large-scale industrial projects (multi-million dollar)' },
            { icon: '•', text: 'LNG and energy sector manufacturing processes' },
          ],
        },
      ],
      education: {
        title: 'Education',
        items: [
          'Master of Science in Electrical Engineering',
          'Specialization: Industrial Automation & Control Systems',
        ],
      },
      expertise: {
        title: 'Expertise',
        items: [
          'Manufacturing process engineering (30+ years hands-on)',
          'Industrial automation and robotics',
          'Quality management systems (ISO 9001, Six Sigma Black Belt)',
          'Production optimization methodologies (Lean Manufacturing, Theory of Constraints)',
          'Digital Twin technology implementation',
          'AI/ML for manufacturing applications',
          'EPC project management',
          'Turnaround and transformation leadership',
        ],
      },
      international: {
        title: 'International Experience',
        items: [
          'South Africa: Continental (significant growth achievement), My Terra',
          'Malaysia: KNM Process Equipment',
          'Global: OUTSOURCING Group operations',
          'Japan: Current (Solunai Systems)',
        ],
      },
      languages: {
        title: 'Languages',
        text: 'Portuguese (native), English (fluent), Japanese (business level)',
      },
    },
  };

  // Tomoo Furuya CEO Content
  const tomooContent = {
    ja: {
      header: '日本製造業：25年以上の経験',
      mainAchievements: '戦略的実績 - 実証済みのエグジット・ポートフォリオ',
      achievements: [
        {
          company: '長瀬産業株式会社',
          position: '戦略的ビジネス開発',
          highlights: [
            {
              icon: '◆',
              text: '戦略的エグジットで大幅なリターン創出',
              emphasis: true,
            },
            {
              icon: '•',
              text: '製造業セクターの変革イニシアチブ',
            },
            {
              icon: '•',
              text: '中小企業パートナーシップ開発・M&A',
            },
            {
              icon: '•',
              text: 'ポートフォリオ企業のオペレーショナル・エクセレンス',
            },
          ],
        },
        {
          company: '株式会社パルタック',
          position: '戦略アドバイザー',
          highlights: [
            {
              icon: '◆',
              text: '戦略的エグジット成功',
              emphasis: true,
            },
            {
              icon: '•',
              text: 'オペレーショナル・エクセレンス・プログラム',
            },
            {
              icon: '•',
              text: '流通・物流の最適化',
            },
          ],
        },
      ],
      combined: {
        title: '統合実績',
        items: [
          '実証済みのエグジット・ポートフォリオ（確かなビジネス手腕）',
          '200社以上の日本中小製造業との関係構築',
          'HVAC、自動車、電子機器セクターでの深いネットワーク',
          '製造DX推進における政府連絡窓口',
          '戦略的エグジット専門家（価値構築と実現の専門知識）',
        ],
      },
      education: {
        title: '学歴',
        items: ['経営学'],
      },
      expertise: {
        title: '専門知識',
        items: [
          '日本製造業（25年以上の深い知識）',
          '戦略的M&Aとエグジット',
          '中小製造業の変革',
          'ビジネス開発とパートナーシップ',
          '製造DX（デジタル変革）戦略',
          '政府関係（経済産業省、JFC、JETRO）',
          '財務モデリングとROI最適化',
        ],
      },
      network: {
        title: 'ネットワーク',
        items: [
          '200社以上の日本中小製造業（HVAC、自動車、電子機器）',
          '政府機関（経済産業省、日本政策金融公庫、JETRO）',
          '金融機関（地方銀行、ベンチャーキャピタル）',
          '業界団体',
        ],
      },
      languages: {
        title: '言語',
        text: '日本語（母国語）、英語（ビジネスレベル）',
      },
    },
    en: {
      header: 'Japanese Manufacturing Industry: 25+ Years',
      mainAchievements: 'Track Record - Proven Exit Portfolio',
      achievements: [
        {
          company: 'Nagase & Co., Ltd',
          position: 'Strategic Business Development',
          highlights: [
            {
              icon: '◆',
              text: 'Strategic exits generating significant returns',
              emphasis: true,
            },
            {
              icon: '•',
              text: 'Manufacturing sector transformation initiatives',
            },
            {
              icon: '•',
              text: 'SME partnership development and M&A',
            },
            {
              icon: '•',
              text: 'Portfolio company operational excellence',
            },
          ],
        },
        {
          company: 'Paltac Corporation',
          position: 'Strategic Advisory',
          highlights: [
            {
              icon: '◆',
              text: 'Successful strategic exit',
              emphasis: true,
            },
            {
              icon: '•',
              text: 'Operational excellence programs',
            },
            {
              icon: '•',
              text: 'Distribution and logistics optimization',
            },
          ],
        },
      ],
      combined: {
        title: 'Combined Achievements',
        items: [
          'Proven exit portfolio (demonstrates strong business acumen)',
          '200+ Japanese SME manufacturer relationships',
          'Deep network in HVAC, automotive, electronics sectors',
          'Government liaison for Manufacturing DX initiatives',
          'Strategic exits specialist (knows how to build value and realize returns)',
        ],
      },
      education: {
        title: 'Education',
        items: ['Business Administration'],
      },
      expertise: {
        title: 'Expertise',
        items: [
          'Japanese manufacturing industry (25+ years deep knowledge)',
          'Strategic M&A and exits',
          'SME manufacturing transformation',
          'Business development and partnerships',
          'Manufacturing DX (digital transformation) strategy',
          'Government relations (METI, JFC, JETRO)',
          'Financial modeling and ROI optimization',
        ],
      },
      network: {
        title: 'Network',
        items: [
          '200+ Japanese SME manufacturers (HVAC, automotive, electronics)',
          'Government agencies (METI, JFC, JETRO)',
          'Financial institutions (regional banks, venture capital)',
          'Industry associations',
        ],
      },
      languages: {
        title: 'Languages',
        text: 'Japanese (native), English (business level)',
      },
    },
  };

  // Tomoo Hara Managing Director Content
  const tomooMDContent = {
    ja: {
      header: '日本製造業界のベテラン',
      mainAchievements: '主な実績',
      achievements: [
        {
          company: 'クライアント関係管理',
          position: 'マネージングディレクター',
          highlights: [
            {
              icon: '•',
              text: '日本の製造業クライアントとの深い関係構築',
              emphasis: false,
            },
            {
              icon: '•',
              text: '戦略的ビジネス開発とパートナーシップ',
              emphasis: false,
            },
            {
              icon: '•',
              text: '日本のビジネス文化の深い理解',
              emphasis: false,
            },
          ],
        },
      ],
      expertise: {
        title: '専門知識',
        items: [
          'クライアント関係管理',
          '戦略的ビジネス開発',
          '日本製造業界の深い知識',
          '日本のビジネス文化',
        ],
      },
      languages: {
        title: '言語',
        text: '日本語（母国語）、英語（ビジネスレベル）',
      },
    },
    en: {
      header: 'Japanese Manufacturing Industry Veteran',
      mainAchievements: 'Key Achievements',
      achievements: [
        {
          company: 'Client Relationship Management',
          position: 'Managing Director',
          highlights: [
            {
              icon: '•',
              text: 'Deep relationships with Japanese manufacturing clients',
              emphasis: false,
            },
            {
              icon: '•',
              text: 'Strategic business development and partnerships',
              emphasis: false,
            },
            {
              icon: '•',
              text: 'Deep understanding of Japanese business culture',
              emphasis: false,
            },
          ],
        },
      ],
      expertise: {
        title: 'Expertise',
        items: [
          'Client relationship management',
          'Strategic business development',
          'Deep understanding of Japanese manufacturing industry',
          'Japanese business culture',
        ],
      },
      languages: {
        title: 'Languages',
        text: 'Japanese (native), English (business level)',
      },
    },
  };

  // Jeanette van Niekerk Operations Director Content
  const jeanetteContent = {
    ja: {
      header: 'プロジェクト管理とオペレーション',
      mainAchievements: '主な実績',
      achievements: [
        {
          company: 'プロジェクト管理と実装',
          position: 'オペレーションディレクター',
          highlights: [
            {
              icon: '•',
              text: 'プロジェクト管理と実装',
              emphasis: false,
            },
            {
              icon: '•',
              text: '品質保証とトレーニング',
              emphasis: false,
            },
            {
              icon: '•',
              text: 'クライアント成功管理',
              emphasis: false,
            },
            {
              icon: '•',
              text: '国際オペレーション調整',
              emphasis: false,
            },
          ],
        },
      ],
      expertise: {
        title: '専門知識',
        items: [
          'プロジェクト管理',
          '品質保証',
          'トレーニングと開発',
          'クライアント成功管理',
          '国際オペレーション',
        ],
      },
      languages: {
        title: '言語',
        text: '英語（母国語）、日本語（ビジネスレベル）',
      },
    },
    en: {
      header: 'Project Management and Operations',
      mainAchievements: 'Key Achievements',
      achievements: [
        {
          company: 'Project Management and Implementation',
          position: 'Operations Director',
          highlights: [
            {
              icon: '•',
              text: 'Project management and implementation',
              emphasis: false,
            },
            {
              icon: '•',
              text: 'Quality assurance and training',
              emphasis: false,
            },
            {
              icon: '•',
              text: 'Client success management',
              emphasis: false,
            },
            {
              icon: '•',
              text: 'International operations coordination',
              emphasis: false,
            },
          ],
        },
      ],
      expertise: {
        title: 'Expertise',
        items: [
          'Project management',
          'Quality assurance',
          'Training and development',
          'Client success management',
          'International operations',
        ],
      },
      languages: {
        title: 'Languages',
        text: 'English (native), Japanese (business level)',
      },
    },
  };

  const content = role === 'cto' ? carlosContent[lang] : role === 'md' ? tomooMDContent[lang] : role === 'coo' ? jeanetteContent[lang] : tomooContent[lang];

  return (
    <div className={`cofounder-profile ${role}`}>
      <div className="cofounder-container">
        {/* Header Section */}
        <div className="cofounder-header">
          <div className="cofounder-image-wrapper">
            <Image
              src={image}
              alt={name}
              width={300}
              height={300}
              className="cofounder-image"
            />
          </div>
          <div className="cofounder-title-section">
            <h2 className="cofounder-name">
              {name}
              {nameRomaji && <span className="name-romaji"> ({nameRomaji})</span>}
              {nameJapanese && <span className="name-japanese"> ({nameJapanese})</span>}
            </h2>
            <h3 className="cofounder-title">{title}</h3>
            <p className="cofounder-header-text">{content.header}</p>
          </div>
        </div>

        {/* Main Achievements */}
        <div className="achievements-section">
          <h3 className="section-title">{content.mainAchievements}</h3>

          {content.achievements.map((achievement, idx) => (
            <div key={idx} className="achievement-block">
              <div className="achievement-header">
                <h4 className="company-name">{achievement.company}</h4>
                <p className="position-title">{achievement.position}</p>
              </div>
              <ul className="highlights-list">
                {achievement.highlights.map((highlight, hIdx) => (
                  <li
                    key={hIdx}
                    className={`highlight-item ${highlight.emphasis ? 'emphasis' : ''}`}
                  >
                    <span className="highlight-icon">{highlight.icon}</span>
                    <span className="highlight-text">{highlight.text}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Combined Achievements (CEO only) */}
        {role === 'ceo' && 'combined' in content && (
          <div className="combined-section">
            <h3 className="section-title">{content.combined.title}</h3>
            <ul className="combined-list">
              {content.combined.items.map((item, idx) => (
                <li key={idx} className="combined-item">
                  <span className="bullet">•</span> {item}
                </li>
              ))}
            </ul>
          </div>
        )}

        {/* Education */}
        {'education' in content && (
          <div className="info-section">
            <h3 className="section-title">{content.education.title}</h3>
            <ul className="info-list">
              {content.education.items.map((item, idx) => (
                <li key={idx} className="info-item">
                  • {item}
                </li>
              ))}
            </ul>
          </div>
        )}

        {/* Expertise */}
        <div className="info-section">
          <h3 className="section-title">{content.expertise.title}</h3>
          <ul className="info-list expertise-grid">
            {content.expertise.items.map((item, idx) => (
              <li key={idx} className="info-item">
                • {item}
              </li>
            ))}
          </ul>
        </div>

        {/* International Experience (CTO) or Network (CEO) */}
        {role === 'cto' && 'international' in content && (
          <div className="info-section">
            <h3 className="section-title">{content.international.title}</h3>
            <ul className="info-list">
              {content.international.items.map((item, idx) => (
                <li key={idx} className="info-item">
                  • {item}
                </li>
              ))}
            </ul>
          </div>
        )}

        {role === 'ceo' && 'network' in content && (
          <div className="info-section">
            <h3 className="section-title">{content.network.title}</h3>
            <ul className="info-list">
              {content.network.items.map((item, idx) => (
                <li key={idx} className="info-item">
                  • {item}
                </li>
              ))}
            </ul>
          </div>
        )}

        {/* Languages */}
        <div className="info-section">
          <h3 className="section-title">{content.languages.title}</h3>
          <p className="languages-text">{content.languages.text}</p>
        </div>
      </div>
    </div>
  );
};

export default CoFounderProfile;
