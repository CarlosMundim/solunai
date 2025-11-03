'use client';

import React from 'react';
import './WhatIsDigitalTwin.css';

interface WhatIsDigitalTwinProps {
  lang: 'ja' | 'en';
}

const WhatIsDigitalTwin: React.FC<WhatIsDigitalTwinProps> = ({ lang }) => {
  const content = {
    ja: {
      heading: 'デジタルツインとは？',
      subheading: '製造業のデジタル変革を支える基盤技術',
      intro: 'デジタルツインは、工場や生産ラインの「デジタル上の双子」です。リアルタイムでデータを収集し、仮想空間で工場の状態を完全に再現することで、問題の早期発見、シミュレーション、最適化を可能にします。',
      sections: [
        {
          title: 'リアルタイム可視化',
          description: '工場全体の稼働状況、設備の状態、生産進捗を3Dで可視化。現場に行かなくても、スマートフォンやPCから工場の状態をリアルタイムで把握できます。'
        },
        {
          title: '予測と最適化',
          description: 'デジタルツイン上で「もしもシミュレーション」を実行。設備変更、レイアウト変更、生産計画の変更を試す前に、デジタル空間で効果を検証できます。'
        },
        {
          title: 'データ統合',
          description: 'PLC、SCADA、MES、ERPなど、バラバラなシステムのデータを一元管理。全社員が同じデータを見ることで、意思決定のスピードが向上します。'
        },
        {
          title: '品質向上',
          description: '設備の異常やパラメータの逸脱を即座に検知。過去のデータから品質問題の原因を特定し、再発防止策を立案できます。'
        }
      ],
      traditionalVsDigital: {
        title: '従来の製造管理とデジタルツインの違い',
        traditional: {
          title: '従来の方法',
          points: [
            '現場を巡回して目視確認',
            '紙の日報と手入力データ',
            'システムごとに別々の画面',
            '問題が起きてから対応',
            '設備変更は実機で試行錯誤'
          ]
        },
        digital: {
          title: 'デジタルツイン',
          points: [
            'リアルタイム3D可視化',
            '自動データ収集と分析',
            '統一ダッシュボード',
            '異常予測と事前対応',
            'デジタルシミュレーション'
          ]
        }
      },
      realWorldExample: {
        title: '具体例：ある中小製造業の1日',
        morning: {
          time: '朝8:00',
          before: '工場長が各ラインを巡回。紙の日報を確認し、昨日の不良品を集計。30分かかる。',
          after: 'スマートフォンで全ラインの稼働状況を確認。異常があればアラート通知。5分で完了。'
        },
        afternoon: {
          time: '午後2:00',
          before: '設備が突然停止。原因調査に1時間。過去の類似事例を紙の記録から探す。',
          after: 'デジタルツインが異常を30分前に予測。事前に部品を準備し、5分で交換完了。'
        },
        planning: {
          time: '翌週の生産計画',
          before: 'Excelで手作業計算。各工程の負荷バランスは経験と勘。計画作成に2日。',
          after: 'AIが最適な生産順序を提案。設備稼働率、納期、在庫を考慮した計画を30分で作成。'
        }
      }
    },
    en: {
      heading: 'What is Digital Twin?',
      subheading: 'Foundation technology powering manufacturing digital transformation',
      intro: 'A digital twin is a "digital replica" of your factory or production line. By collecting real-time data and recreating factory status in virtual space, it enables early problem detection, simulation, and optimization.',
      sections: [
        {
          title: 'Real-Time Visualization',
          description: 'See factory-wide operations, equipment status, and production progress in 3D. Monitor factory conditions in real-time from anywhere via smartphone or PC without visiting the shop floor.'
        },
        {
          title: 'Prediction & Optimization',
          description: 'Run "what-if simulations" on your digital twin. Test equipment changes, layout modifications, and production schedule adjustments in digital space before implementation.'
        },
        {
          title: 'Data Integration',
          description: 'Unify disparate system data from PLC, SCADA, MES, ERP. All employees see the same data, accelerating decision-making across the organization.'
        },
        {
          title: 'Quality Improvement',
          description: 'Instantly detect equipment abnormalities and parameter deviations. Identify root causes of quality issues from historical data and establish preventive measures.'
        }
      ],
      traditionalVsDigital: {
        title: 'Traditional Manufacturing Management vs. Digital Twin',
        traditional: {
          title: 'Traditional Method',
          points: [
            'Manual shop floor walkthroughs',
            'Paper reports and manual data entry',
            'Separate screens per system',
            'Reactive problem-solving',
            'Trial-and-error equipment changes'
          ]
        },
        digital: {
          title: 'Digital Twin',
          points: [
            'Real-time 3D visualization',
            'Automated data collection & analysis',
            'Unified dashboard',
            'Predictive anomaly detection',
            'Digital simulation'
          ]
        }
      },
      realWorldExample: {
        title: 'Real Example: A Day at an SME Manufacturer',
        morning: {
          time: '8:00 AM',
          before: 'Factory manager walks each line, reviews paper reports, tallies yesterday\'s defects. Takes 30 minutes.',
          after: 'Check all lines on smartphone. Alerts notify of any abnormalities. Done in 5 minutes.'
        },
        afternoon: {
          time: '2:00 PM',
          before: 'Equipment suddenly stops. 1 hour investigating cause. Search paper records for similar past incidents.',
          after: 'Digital twin predicts abnormality 30 minutes early. Parts prepared in advance, replacement completed in 5 minutes.'
        },
        planning: {
          time: 'Next Week Production Plan',
          before: 'Manual Excel calculations. Process load balancing by experience and intuition. Takes 2 days to create plan.',
          after: 'AI proposes optimal production sequence considering equipment utilization, deadlines, inventory. Plan ready in 30 minutes.'
        }
      }
    }
  };

  const t = content[lang];

  return (
    <section className="what-is-digital-twin">
      <div className="what-is-digital-twin-container">
        <h2 className="what-is-digital-twin-heading">{t.heading}</h2>
        <p className="what-is-digital-twin-subheading">{t.subheading}</p>
        <p className="what-is-digital-twin-intro">{t.intro}</p>

        <div className="digital-twin-features">
          {t.sections.map((section, index) => (
            <div key={index} className="feature-card">
              <h3 className="feature-title">{section.title}</h3>
              <p className="feature-description">{section.description}</p>
            </div>
          ))}
        </div>

        <div className="traditional-vs-digital">
          <h3 className="comparison-heading">{t.traditionalVsDigital.title}</h3>
          <div className="comparison-grid">
            <div className="comparison-column traditional">
              <h4 className="comparison-column-title">{t.traditionalVsDigital.traditional.title}</h4>
              <ul className="comparison-list">
                {t.traditionalVsDigital.traditional.points.map((point, index) => (
                  <li key={index}>{point}</li>
                ))}
              </ul>
            </div>
            <div className="comparison-arrow">→</div>
            <div className="comparison-column digital">
              <h4 className="comparison-column-title">{t.traditionalVsDigital.digital.title}</h4>
              <ul className="comparison-list">
                {t.traditionalVsDigital.digital.points.map((point, index) => (
                  <li key={index}>{point}</li>
                ))}
              </ul>
            </div>
          </div>
        </div>

        <div className="real-world-example">
          <h3 className="example-heading">{t.realWorldExample.title}</h3>
          <div className="example-scenarios">
            <div className="scenario">
              <div className="scenario-time">{t.realWorldExample.morning.time}</div>
              <div className="scenario-comparison">
                <div className="before">
                  <span className="label">{lang === 'ja' ? '従来' : 'Before'}</span>
                  <p>{t.realWorldExample.morning.before}</p>
                </div>
                <div className="after">
                  <span className="label">{lang === 'ja' ? 'DT導入後' : 'After'}</span>
                  <p>{t.realWorldExample.morning.after}</p>
                </div>
              </div>
            </div>

            <div className="scenario">
              <div className="scenario-time">{t.realWorldExample.afternoon.time}</div>
              <div className="scenario-comparison">
                <div className="before">
                  <span className="label">{lang === 'ja' ? '従来' : 'Before'}</span>
                  <p>{t.realWorldExample.afternoon.before}</p>
                </div>
                <div className="after">
                  <span className="label">{lang === 'ja' ? 'DT導入後' : 'After'}</span>
                  <p>{t.realWorldExample.afternoon.after}</p>
                </div>
              </div>
            </div>

            <div className="scenario">
              <div className="scenario-time">{t.realWorldExample.planning.time}</div>
              <div className="scenario-comparison">
                <div className="before">
                  <span className="label">{lang === 'ja' ? '従来' : 'Before'}</span>
                  <p>{t.realWorldExample.planning.before}</p>
                </div>
                <div className="after">
                  <span className="label">{lang === 'ja' ? 'DT導入後' : 'After'}</span>
                  <p>{t.realWorldExample.planning.after}</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhatIsDigitalTwin;
