'use client';

import React from 'react';
import './PMWhatIsPM.css';

interface PMWhatIsPMProps {
  lang: 'ja' | 'en';
}

const PMWhatIsPM: React.FC<PMWhatIsPMProps> = ({ lang }) => {
  const content = {
    ja: {
      heading: 'AI予知保全とは？',
      subheading: '設備故障を事前に予測し、計画的なメンテナンスを実現',
      intro: 'AI予知保全は、センサーとAI技術を活用し、設備の故障を事前に予測します。従来の定期保全や事後保全から脱却し、設備の実際の状態に基づいた最適なタイミングでメンテナンスを実施。ダウンタイムを最小化し、保全コストを大幅に削減します。',
      sections: [
        {
          title: '故障の2週間〜1ヶ月前に予測',
          description: 'AIが振動、温度、圧力などのセンサーデータをリアルタイム分析。微細な変化から設備の劣化傾向を検知し、故障が発生する前にアラートを発信します。'
        },
        {
          title: '計画外ダウンタイム80%削減',
          description: '突発的な設備故障による生産停止を防止。部品や技術者を事前に手配でき、短時間での修理完了が可能。ダウンタイムコストを劇的に削減します。'
        },
        {
          title: '保全コスト年間40%削減',
          description: '過剰な定期保全を削減し、必要な時だけメンテナンス。部品交換の回数を減らし、緊急修理費用をなくすことで、年間保全コストを大幅に削減。'
        },
        {
          title: '設備寿命の延長',
          description: '設備の状態を常に最適に保つことで、無理な運転や劣化の放置を防止。設備の寿命を平均20〜30%延長し、設備投資を最小化します。'
        }
      ],
      traditionalVsPM: {
        title: '従来の保全方法とAI予知保全の違い',
        traditional: {
          title: '従来の保全方法',
          points: [
            '定期保全：必要性に関わらず定期的に部品交換',
            '事後保全：故障してから修理対応',
            '計画外ダウンタイムによる生産損失',
            '緊急修理による高額な費用',
            '部品の過剰在庫または欠品',
            '設備の状態が見えない（ブラックボックス）'
          ]
        },
        pm: {
          title: 'AI予知保全',
          points: [
            '状態基準保全：設備の実際の状態で判断',
            '故障前に計画的メンテナンス',
            '計画的保全でダウンタイム最小化',
            '事前手配で修理コスト削減',
            '必要な部品を必要な時だけ準備',
            '設備状態の完全可視化（透明性）'
          ]
        }
      },
      realWorldExample: {
        title: '具体例：プラスチック成形メーカーの1週間',
        monday: {
          time: '月曜朝　AIアラート受信',
          before: '射出成形機No.3が突然停止。原因不明で技術者を待つ間、3時間生産停止。代替機もなく、納期遅延が確定。',
          after: 'AIが「成形機No.3の油圧ポンプに異常、2週間以内に故障リスク」とアラート。すぐに部品発注し、次の休日にメンテナンス予約。'
        },
        wednesday: {
          time: '水曜昼　定期点検日',
          before: '全6台の成形機を一斉点検。問題なくても分解・清掃。丸一日生産停止、人件費20万円、部品交換費15万円。',
          after: 'AIダッシュボードで全設備の健全性確認。異常のある1台のみ点検。2時間で完了、コスト5万円。他の5台は通常稼働。'
        },
        friday: {
          time: '金曜夕方　急な不具合',
          before: '成形機No.5の音が「いつもと違う」と作業員が報告。しかし判断基準がなく、そのまま稼働継続。土曜日に故障し、週末緊急対応で100万円。',
          after: 'AIが振動データから「ベアリング劣化の兆候」を検知。作業負荷を軽減し、月曜に部品交換予定。週末の緊急対応を回避、コスト10万円で対応。'
        }
      }
    },
    en: {
      heading: 'What is AI Predictive Maintenance?',
      subheading: 'Predict equipment failures in advance and enable planned maintenance',
      intro: 'AI Predictive Maintenance uses sensors and AI technology to predict equipment failures before they occur. Move beyond traditional preventive or reactive maintenance to implement optimal maintenance timing based on actual equipment condition. Minimize downtime and significantly reduce maintenance costs.',
      sections: [
        {
          title: 'Predict Failures 2 Weeks to 1 Month in Advance',
          description: 'AI analyzes sensor data from vibration, temperature, pressure, etc. in real-time. Detect equipment degradation trends from subtle changes and issue alerts before failures occur.'
        },
        {
          title: 'Reduce Unplanned Downtime by 80%',
          description: 'Prevent production stoppages from sudden equipment failures. Pre-arrange parts and technicians for quick repairs. Dramatically reduce downtime costs.'
        },
        {
          title: 'Cut Annual Maintenance Costs by 40%',
          description: 'Reduce excessive preventive maintenance and maintain only when needed. Decrease part replacement frequency and eliminate emergency repair costs, significantly cutting annual maintenance expenses.'
        },
        {
          title: 'Extend Equipment Lifespan',
          description: 'Keep equipment in optimal condition at all times, preventing overuse and neglected degradation. Extend equipment lifespan by 20-30% on average, minimizing capital investment.'
        }
      ],
      traditionalVsPM: {
        title: 'Traditional Maintenance vs. AI Predictive Maintenance',
        traditional: {
          title: 'Traditional Maintenance',
          points: [
            'Preventive: Regular part replacement regardless of need',
            'Reactive: Repair after failure occurs',
            'Production losses from unplanned downtime',
            'High costs from emergency repairs',
            'Excess inventory or stock-outs',
            'Equipment condition invisible (black box)'
          ]
        },
        pm: {
          title: 'AI Predictive Maintenance',
          points: [
            'Condition-based: Judge by actual equipment state',
            'Planned maintenance before failures',
            'Minimize downtime through planning',
            'Reduce repair costs via pre-arrangement',
            'Prepare necessary parts only when needed',
            'Complete equipment visibility (transparency)'
          ]
        }
      },
      realWorldExample: {
        title: 'Real Example: One Week at a Plastic Molding Manufacturer',
        monday: {
          time: 'Monday Morning - AI Alert Received',
          before: 'Injection molding machine No.3 suddenly stops. Cause unknown, 3-hour production halt while waiting for technician. No backup machine, delivery delay confirmed.',
          after: 'AI alerts: "Hydraulic pump abnormality in Machine No.3, failure risk within 2 weeks." Immediately order parts and schedule maintenance for next weekend.'
        },
        wednesday: {
          time: 'Wednesday Noon - Scheduled Inspection Day',
          before: 'Simultaneous inspection of all 6 molding machines. Disassemble and clean even without issues. Full-day production halt, 200,000 yen labor, 150,000 yen parts.',
          after: 'Check all equipment health via AI dashboard. Inspect only 1 abnormal machine. Completed in 2 hours, 50,000 yen cost. Other 5 machines continue normal operation.'
        },
        friday: {
          time: 'Friday Evening - Sudden Malfunction',
          before: 'Worker reports Machine No.5 sounds "different than usual." No judgment criteria, continue operation. Failure on Saturday, emergency weekend response costs 1 million yen.',
          after: 'AI detects "bearing degradation signs" from vibration data. Reduce workload, schedule part replacement Monday. Avoid weekend emergency, handle for 100,000 yen.'
        }
      }
    }
  };

  const t = content[lang];

  return (
    <section className="pm-what-is-pm">
      <div className="pm-what-is-pm-container">
        <h2 className="pm-what-is-pm-heading">{t.heading}</h2>
        <p className="pm-what-is-pm-subheading">{t.subheading}</p>
        <p className="pm-what-is-pm-intro">{t.intro}</p>

        <div className="pm-features">
          {t.sections.map((section, index) => (
            <div key={index} className="pm-feature-card">
              <h3 className="pm-feature-title">{section.title}</h3>
              <p className="pm-feature-description">{section.description}</p>
            </div>
          ))}
        </div>

        <div className="traditional-vs-pm">
          <h3 className="comparison-heading">{t.traditionalVsPM.title}</h3>
          <div className="comparison-grid">
            <div className="comparison-column traditional">
              <h4 className="comparison-column-title">{t.traditionalVsPM.traditional.title}</h4>
              <ul className="comparison-list">
                {t.traditionalVsPM.traditional.points.map((point, index) => (
                  <li key={index}>{point}</li>
                ))}
              </ul>
            </div>
            <div className="comparison-arrow">→</div>
            <div className="comparison-column pm">
              <h4 className="comparison-column-title">{t.traditionalVsPM.pm.title}</h4>
              <ul className="comparison-list">
                {t.traditionalVsPM.pm.points.map((point, index) => (
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
              <div className="scenario-time">{t.realWorldExample.monday.time}</div>
              <div className="scenario-comparison">
                <div className="before">
                  <span className="label">{lang === 'ja' ? '従来' : 'Before'}</span>
                  <p>{t.realWorldExample.monday.before}</p>
                </div>
                <div className="after">
                  <span className="label">{lang === 'ja' ? 'AI導入後' : 'After AI'}</span>
                  <p>{t.realWorldExample.monday.after}</p>
                </div>
              </div>
            </div>

            <div className="scenario">
              <div className="scenario-time">{t.realWorldExample.wednesday.time}</div>
              <div className="scenario-comparison">
                <div className="before">
                  <span className="label">{lang === 'ja' ? '従来' : 'Before'}</span>
                  <p>{t.realWorldExample.wednesday.before}</p>
                </div>
                <div className="after">
                  <span className="label">{lang === 'ja' ? 'AI導入後' : 'After AI'}</span>
                  <p>{t.realWorldExample.wednesday.after}</p>
                </div>
              </div>
            </div>

            <div className="scenario">
              <div className="scenario-time">{t.realWorldExample.friday.time}</div>
              <div className="scenario-comparison">
                <div className="before">
                  <span className="label">{lang === 'ja' ? '従来' : 'Before'}</span>
                  <p>{t.realWorldExample.friday.before}</p>
                </div>
                <div className="after">
                  <span className="label">{lang === 'ja' ? 'AI導入後' : 'After AI'}</span>
                  <p>{t.realWorldExample.friday.after}</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PMWhatIsPM;
