'use client';

import React from 'react';
import './POWhatIsPO.css';

interface POWhatIsPOProps {
  lang: 'ja' | 'en';
}

const POWhatIsPO: React.FC<POWhatIsPOProps> = ({ lang }) => {
  const content = {
    ja: {
      heading: 'AI生産最適化とは？',
      subheading: 'データで生産ラインのパフォーマンスを最大化',
      intro: 'AI生産最適化は、リアルタイムデータと機械学習を活用し、製造プロセス全体を継続的に改善します。ボトルネックの特定、リソースの最適配分、エネルギー効率の向上により、生産性と収益性を同時に実現します。',
      sections: [
        {
          title: '生産スループット10-30%向上',
          description: 'AIが24時間365日、生産ラインを監視し、リアルタイムでボトルネックを特定。設備稼働率、ライン編成、作業順序を最適化し、同じ設備で生産量を大幅に増加させます。'
        },
        {
          title: '無駄とコストの削減',
          description: '過剰在庫、待ち時間、エネルギーロス、材料無駄を可視化。ムリ・ムダ・ムラを排除し、リーン生産を実現。製造原価を10-20%削減します。'
        },
        {
          title: 'OEE（設備総合効率）の向上',
          description: '稼働率・性能・品質の3要素をリアルタイム計測。予知保全でダウンタイム削減、速度ロス解消、不良率低減により、OEEを60%から85%以上へ改善します。'
        },
        {
          title: 'リソースの最適配分',
          description: '需要予測と連動し、人員・設備・材料を適切に配分。繁忙期の生産能力不足、閑散期の過剰稼働を防ぎ、資源の有効活用を実現します。'
        }
      ],
      traditionalVsAI: {
        title: '従来の生産管理とAI生産最適化の違い',
        traditional: {
          title: '従来の生産管理',
          points: [
            '月次・週次の集計データで振り返り',
            '勘と経験による改善判断',
            'ボトルネック特定に時間がかかる',
            '設備稼働率が可視化されていない',
            '突発的な設備故障で生産停止',
            'エネルギー使用量の詳細が不明'
          ]
        },
        ai: {
          title: 'AI生産最適化',
          points: [
            'リアルタイムデータで即座に対応',
            'データ駆動型の客観的改善提案',
            'ボトルネックを自動検出・可視化',
            '全設備の稼働率を常時監視',
            '予知保全で計画的メンテナンス',
            '工程別エネルギー消費を最適化'
          ]
        }
      },
      realWorldExample: {
        title: '具体例：金属加工工場の1日',
        morning: {
          time: '朝8:00　生産開始',
          before: '昨日と同じ段取りで生産開始。どの機械がどのくらい稼働しているか把握が難しい。',
          after: 'AIが最適な生産順序と設備配分を提案。優先度の高い製品から効率よく生産開始。リアルタイムで全設備の稼働率を可視化。'
        },
        afternoon: {
          time: '午後2:00　生産遅延発生',
          before: 'ラインが止まっているが、原因特定に30分。どの工程がボトルネックか分からず、現場で混乱。',
          after: 'AIがボトルネック工程を即座に特定し、アラート通知。代替ルートや作業順序変更を自動提案。5分で生産再開。'
        },
        planning: {
          time: '夕方5:00　設備異常検知',
          before: '機械が突然停止。修理に2日かかり、納期遅延と売上損失が発生。',
          after: 'AIが振動・温度データから異常を2週間前に検知。計画的に週末メンテナンスを実施。生産停止ゼロ。'
        }
      }
    },
    en: {
      heading: 'What is AI Production Optimization?',
      subheading: 'Maximize production line performance through data intelligence',
      intro: 'AI Production Optimization leverages real-time data and machine learning to continuously improve manufacturing processes. Achieve productivity and profitability simultaneously through bottleneck identification, optimal resource allocation, and energy efficiency improvements.',
      sections: [
        {
          title: '10-30% Production Throughput Increase',
          description: 'AI monitors production lines 24/7, identifying bottlenecks in real-time. Optimize equipment utilization, line configuration, and work sequence to dramatically increase output with the same equipment.'
        },
        {
          title: 'Waste and Cost Reduction',
          description: 'Visualize excess inventory, waiting time, energy loss, and material waste. Eliminate muri-muda-mura to achieve lean production. Reduce manufacturing costs by 10-20%.'
        },
        {
          title: 'OEE (Overall Equipment Effectiveness) Improvement',
          description: 'Real-time measurement of availability, performance, and quality. Improve OEE from 60% to 85%+ through predictive maintenance reducing downtime, eliminating speed losses, and lowering defect rates.'
        },
        {
          title: 'Optimal Resource Allocation',
          description: 'Integrate with demand forecasting to properly allocate personnel, equipment, and materials. Prevent capacity shortages during peak periods and excess operation during slow periods, achieving effective resource utilization.'
        }
      ],
      traditionalVsAI: {
        title: 'Traditional Production Management vs. AI Production Optimization',
        traditional: {
          title: 'Traditional Production Management',
          points: [
            'Monthly/weekly aggregated data reviews',
            'Improvement decisions based on intuition',
            'Time-consuming bottleneck identification',
            'Equipment utilization not visualized',
            'Production stoppages from unexpected breakdowns',
            'Energy consumption details unknown'
          ]
        },
        ai: {
          title: 'AI Production Optimization',
          points: [
            'Real-time data for immediate response',
            'Data-driven objective improvement recommendations',
            'Automatic bottleneck detection & visualization',
            'Constant monitoring of all equipment utilization',
            'Predictive maintenance for planned repairs',
            'Process-level energy consumption optimization'
          ]
        }
      },
      realWorldExample: {
        title: 'Real Example: A Day at a Metal Fabrication Factory',
        morning: {
          time: '8:00 AM - Production Starts',
          before: 'Begin production with same setup as yesterday. Difficult to grasp which machines are operating and utilization levels.',
          after: 'AI recommends optimal production sequence and equipment allocation. Efficiently start with highest priority products. Real-time visualization of all equipment utilization.'
        },
        afternoon: {
          time: '2:00 PM - Production Delay Occurs',
          before: 'Line stopped, but takes 30 minutes to identify cause. Confusion on shop floor — which process is the bottleneck?',
          after: 'AI instantly identifies bottleneck process with alert notification. Automatically suggests alternative routes and work sequence changes. Production resumes in 5 minutes.'
        },
        planning: {
          time: '5:00 PM - Equipment Anomaly Detected',
          before: 'Machine suddenly stops. 2-day repair causes delivery delays and lost revenue.',
          after: 'AI detects anomaly from vibration/temperature data 2 weeks early. Planned weekend maintenance performed. Zero production stoppages.'
        }
      }
    }
  };

  const t = content[lang];

  return (
    <section className="po-what-is-po">
      <div className="po-what-is-po-container">
        <h2 className="po-what-is-po-heading">{t.heading}</h2>
        <p className="po-what-is-po-subheading">{t.subheading}</p>
        <p className="po-what-is-po-intro">{t.intro}</p>

        <div className="po-features">
          {t.sections.map((section, index) => (
            <div key={index} className="po-feature-card">
              <h3 className="po-feature-title">{section.title}</h3>
              <p className="po-feature-description">{section.description}</p>
            </div>
          ))}
        </div>

        <div className="traditional-vs-ai">
          <h3 className="comparison-heading">{t.traditionalVsAI.title}</h3>
          <div className="comparison-grid">
            <div className="comparison-column traditional">
              <h4 className="comparison-column-title">{t.traditionalVsAI.traditional.title}</h4>
              <ul className="comparison-list">
                {t.traditionalVsAI.traditional.points.map((point, index) => (
                  <li key={index}>{point}</li>
                ))}
              </ul>
            </div>
            <div className="comparison-arrow">→</div>
            <div className="comparison-column ai">
              <h4 className="comparison-column-title">{t.traditionalVsAI.ai.title}</h4>
              <ul className="comparison-list">
                {t.traditionalVsAI.ai.points.map((point, index) => (
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
                  <span className="label">{lang === 'ja' ? 'AI導入後' : 'After AI'}</span>
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
                  <span className="label">{lang === 'ja' ? 'AI導入後' : 'After AI'}</span>
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
                  <span className="label">{lang === 'ja' ? 'AI導入後' : 'After AI'}</span>
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

export default POWhatIsPO;
