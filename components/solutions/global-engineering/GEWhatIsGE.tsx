'use client';

import React from 'react';
import './GEWhatIsGE.css';

interface GEWhatIsGEProps {
  lang: 'ja' | 'en';
}

const GEWhatIsGE: React.FC<GEWhatIsGEProps> = ({ lang }) => {
  const content = {
    ja: {
      heading: 'グローバルエンジニアリングとは？',
      subheading: '日本の製造業に特化した、世界人材活用プラットフォーム',
      intro: 'グローバルエンジニアリングは、世界中の優秀なエンジニアを貴社の開発チームに統合するサービスです。単なる外注ではなく、日本の品質基準を理解し、製造業の現場課題を解決できる技術者を、最短2週間でチームに参画させます。',
      sections: [
        {
          title: '即戦力人材の迅速な確保',
          description: '機械設計、電気設計、組込みソフト、BIMモデリング、プロセスエンジニアリングなど、専門分野ごとに厳選された技術者。日本採用の30-50%のコストで、同等以上のスキルを持つ人材にアクセスできます。'
        },
        {
          title: '文化的な橋渡し',
          description: 'Solunaiが日本企業と海外エンジニアの間に入り、コミュニケーション、品質基準、作業プロセスを調整。言語の壁や文化の違いを乗り越え、スムーズな協業を実現します。'
        },
        {
          title: '柔軟な契約形態',
          description: 'プロジェクトベース、月額定額、時間契約など、貴社のニーズに合わせた契約形態を選択可能。繁忙期の一時増員から、恒常的な開発体制の構築まで対応します。'
        },
        {
          title: '包括的なサポート',
          description: '採用、スクリーニング、HR管理、パフォーマンス評価、スキルアップ研修まで、すべてワンストップで提供。貴社は技術的な指示に集中でき、人事管理の負担はありません。'
        }
      ],
      traditionalVsGlobal: {
        title: '従来の開発体制とグローバルエンジニアリングの違い',
        traditional: {
          title: '従来の方法',
          points: [
            '日本国内で高額な採用コスト',
            '専門人材の確保に数ヶ月',
            '正社員雇用のリスクと固定費',
            '繁忙期の人手不足',
            '開発は日本の営業時間のみ'
          ]
        },
        global: {
          title: 'グローバルエンジニアリング',
          points: [
            '50-70%のコスト削減',
            '2-6週間で即戦力を確保',
            '柔軟な増減が可能',
            'プロジェクトに応じた最適配置',
            '24時間体制の継続的開発'
          ]
        }
      },
      realWorldExample: {
        title: '具体例：ある精密機器メーカーの事例',
        designPhase: {
          time: '設計フェーズ',
          before: '日本人設計者3名で新製品開発。CAD作業、強度解析、図面作成に6ヶ月。残業続きで他案件が停滞。',
          after: '日本チーム2名+海外CADエンジニア2名+解析専門家1名の体制。日本が仕様決定、海外がモデリングと解析を並行実施。開発期間を3ヶ月に短縮。'
        },
        prototyping: {
          time: '試作・検証フェーズ',
          before: '設計変更の度に図面修正に1週間。試作部品の発注と検証で更に2週間。改善サイクルが遅い。',
          after: '夕方に設計変更を指示すると、翌朝には修正図面が完成。即日試作手配し、検証サイクルを3倍高速化。'
        },
        production: {
          time: '量産立ち上げ',
          before: '工程設計と治具設計に専任者が必要だが、社内に適任者がいない。外注SIに依頼すると高額。',
          after: '製造業経験豊富な海外プロセスエンジニアを3ヶ月間活用。工程FMEA、治具設計、作業手順書作成を低コストで完遂。'
        }
      }
    },
    en: {
      heading: 'What is Global Engineering?',
      subheading: 'World talent platform specialized for Japanese manufacturing',
      intro: 'Global Engineering integrates talented engineers worldwide into your development teams. Not mere outsourcing, but technical professionals who understand Japanese quality standards and solve manufacturing challenges — onboarded to your team in as fast as 2 weeks.',
      sections: [
        {
          title: 'Rapid Access to Skilled Talent',
          description: 'Carefully selected engineers by specialty — mechanical design, electrical design, embedded software, BIM modeling, process engineering. Access equivalent or superior skills at 30-50% of Japanese hiring costs.'
        },
        {
          title: 'Cultural Bridge',
          description: 'Solunai mediates between Japanese companies and offshore engineers, aligning communication, quality standards, and work processes. Overcome language barriers and cultural differences for seamless collaboration.'
        },
        {
          title: 'Flexible Contract Models',
          description: 'Choose contract types matching your needs — project-based, monthly retainer, or hourly. From temporary staff augmentation during peak periods to building permanent development capacity.'
        },
        {
          title: 'Comprehensive Support',
          description: 'One-stop service covering recruitment, screening, HR management, performance reviews, and upskilling. Your team focuses on technical direction while we handle personnel administration.'
        }
      ],
      traditionalVsGlobal: {
        title: 'Traditional Development vs. Global Engineering',
        traditional: {
          title: 'Traditional Method',
          points: [
            'High recruitment costs in Japan',
            'Months to secure specialists',
            'Permanent employment risks and fixed costs',
            'Staffing shortages during peaks',
            'Development limited to Japanese business hours'
          ]
        },
        global: {
          title: 'Global Engineering',
          points: [
            '50-70% cost reduction',
            'Skilled resources in 2-6 weeks',
            'Flexible scaling up/down',
            'Optimal allocation per project',
            '24/7 continuous development'
          ]
        }
      },
      realWorldExample: {
        title: 'Case Study: Precision Equipment Manufacturer',
        designPhase: {
          time: 'Design Phase',
          before: '3 Japanese designers developing new product. CAD work, structural analysis, drawings took 6 months. Constant overtime, other projects stalled.',
          after: '2 Japanese team + 2 offshore CAD engineers + 1 analysis specialist. Japan defines specs while offshore handles modeling and analysis in parallel. Development compressed to 3 months.'
        },
        prototyping: {
          time: 'Prototyping & Validation',
          before: 'Every design change requires 1 week for drawing updates. Prototype ordering and verification adds 2 more weeks. Improvement cycles too slow.',
          after: 'Request design changes in evening, revised drawings ready next morning. Same-day prototype ordering, validation cycle 3x faster.'
        },
        production: {
          time: 'Mass Production Ramp',
          before: 'Process and fixture design needs dedicated expert, but no suitable staff internally. Outsourcing to SI vendors is expensive.',
          after: 'Engage experienced offshore process engineer for 3 months. Process FMEA, fixture design, work instruction documentation completed at low cost.'
        }
      }
    }
  };

  const t = content[lang];

  return (
    <section className="ge-what-is">
      <div className="ge-what-is-container">
        <h2 className="ge-what-is-heading">{t.heading}</h2>
        <p className="ge-what-is-subheading">{t.subheading}</p>
        <p className="ge-what-is-intro">{t.intro}</p>

        <div className="ge-features">
          {t.sections.map((section, index) => (
            <div key={index} className="ge-feature-card">
              <h3 className="ge-feature-title">{section.title}</h3>
              <p className="ge-feature-description">{section.description}</p>
            </div>
          ))}
        </div>

        <div className="ge-traditional-vs-global">
          <h3 className="ge-comparison-heading">{t.traditionalVsGlobal.title}</h3>
          <div className="ge-comparison-grid">
            <div className="ge-comparison-column ge-traditional">
              <h4 className="ge-comparison-column-title">{t.traditionalVsGlobal.traditional.title}</h4>
              <ul className="ge-comparison-list">
                {t.traditionalVsGlobal.traditional.points.map((point, index) => (
                  <li key={index}>{point}</li>
                ))}
              </ul>
            </div>
            <div className="ge-comparison-arrow">→</div>
            <div className="ge-comparison-column ge-global">
              <h4 className="ge-comparison-column-title">{t.traditionalVsGlobal.global.title}</h4>
              <ul className="ge-comparison-list">
                {t.traditionalVsGlobal.global.points.map((point, index) => (
                  <li key={index}>{point}</li>
                ))}
              </ul>
            </div>
          </div>
        </div>

        <div className="ge-real-world-example">
          <h3 className="ge-example-heading">{t.realWorldExample.title}</h3>
          <div className="ge-example-scenarios">
            <div className="ge-scenario">
              <div className="ge-scenario-time">{t.realWorldExample.designPhase.time}</div>
              <div className="ge-scenario-comparison">
                <div className="ge-before">
                  <span className="ge-label">{lang === 'ja' ? '従来' : 'Before'}</span>
                  <p>{t.realWorldExample.designPhase.before}</p>
                </div>
                <div className="ge-after">
                  <span className="ge-label">{lang === 'ja' ? 'GE導入後' : 'After'}</span>
                  <p>{t.realWorldExample.designPhase.after}</p>
                </div>
              </div>
            </div>

            <div className="ge-scenario">
              <div className="ge-scenario-time">{t.realWorldExample.prototyping.time}</div>
              <div className="ge-scenario-comparison">
                <div className="ge-before">
                  <span className="ge-label">{lang === 'ja' ? '従来' : 'Before'}</span>
                  <p>{t.realWorldExample.prototyping.before}</p>
                </div>
                <div className="ge-after">
                  <span className="ge-label">{lang === 'ja' ? 'GE導入後' : 'After'}</span>
                  <p>{t.realWorldExample.prototyping.after}</p>
                </div>
              </div>
            </div>

            <div className="ge-scenario">
              <div className="ge-scenario-time">{t.realWorldExample.production.time}</div>
              <div className="ge-scenario-comparison">
                <div className="ge-before">
                  <span className="ge-label">{lang === 'ja' ? '従来' : 'Before'}</span>
                  <p>{t.realWorldExample.production.before}</p>
                </div>
                <div className="ge-after">
                  <span className="ge-label">{lang === 'ja' ? 'GE導入後' : 'After'}</span>
                  <p>{t.realWorldExample.production.after}</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default GEWhatIsGE;
