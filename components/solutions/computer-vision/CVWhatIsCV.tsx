'use client';

import React from 'react';
import './CVWhatIsCV.css';

interface CVWhatIsCVProps {
  lang: 'ja' | 'en';
}

const CVWhatIsCV: React.FC<CVWhatIsCVProps> = ({ lang }) => {
  const content = {
    ja: {
      heading: 'AI自動品質検査とは？',
      subheading: '人間の目を超える精度で製造品質を保証',
      intro: 'コンピュータビジョンAI検査は、カメラとディープラーニングを組み合わせ、人間の目では見逃しやすい微細な欠陥を自動検出します。24時間365日、一定の精度で品質を監視し、不良品の流出を防ぎます。',
      sections: [
        {
          title: '99%以上の検査精度',
          description: '0.1mm以下の微細な傷、わずかな色ムラ、組立ミスなど、熟練検査員でも見逃しやすい欠陥をAIが確実に検出。検査精度のバラつきがなくなります。'
        },
        {
          title: 'リアルタイム全数検査',
          description: '従来の抜き取り検査から全数検査へ。生産ラインのスピードに合わせて、全製品を検査しながら不良品を即座に発見。検査工程のボトルネック解消。'
        },
        {
          title: 'データ分析で品質向上',
          description: '検査結果をデータベース化し、不良発生パターンを分析。どの工程で、どのような条件で不良が発生するかを可視化し、根本原因の特定が可能。'
        },
        {
          title: '検査員の負担軽減',
          description: '単純繰り返し作業から解放され、検査員は複雑な判定や改善活動に集中。人手不足の解消と、従業員満足度の向上を実現。'
        }
      ],
      traditionalVsAI: {
        title: '従来の目視検査とAI自動検査の違い',
        traditional: {
          title: '従来の目視検査',
          points: [
            '検査員の疲労による見逃し',
            '判定基準が人によって異なる',
            '抜き取り検査（全数は不可能）',
            '検査スピードがライン速度の制約',
            '検査データの記録・分析が困難',
            '熟練検査員の高齢化と人材不足'
          ]
        },
        ai: {
          title: 'AI自動検査',
          points: [
            '24時間一定精度で検査',
            '判定基準が明確で一貫性あり',
            '全数検査が可能',
            '高速ラインにも対応',
            '全データ自動記録・分析',
            '検査ノウハウのシステム化'
          ]
        }
      },
      realWorldExample: {
        title: '具体例：自動車部品メーカーの1日',
        morning: {
          time: '朝8:00　検査工程開始',
          before: '検査員3名が目視で部品表面の傷をチェック。1個あたり30秒、集中力が必要。1時間で120個検査。',
          after: 'AIカメラが0.3秒で全面撮影・判定。検査員1名がNG品の最終確認のみ。1時間で12,000個検査可能。'
        },
        afternoon: {
          time: '午後2:00　不良品発見',
          before: '検査員が「いつもと違う」と感じるが、基準内か判断に迷う。ラインを止めるか悩み、上司に相談。',
          after: 'AIが0.05mmの寸法ずれを即座に検出。アラート通知で即座にライン停止。過去データから原因を5分で特定。'
        },
        planning: {
          time: '月末　品質報告会',
          before: '手書き日報を集計。不良率は分かるが、どの工程のどの条件で発生したか分析に3日かかる。',
          after: 'AIが自動で不良パターンを分類・分析。工程別・時間帯別・材料ロット別の不良率を自動レポート。30分で完了。'
        }
      }
    },
    en: {
      heading: 'What is AI Automated Quality Inspection?',
      subheading: 'Manufacturing quality assurance with precision beyond human vision',
      intro: 'Computer Vision AI Inspection combines cameras with deep learning to automatically detect micro-defects easily missed by human eyes. Monitor quality 24/7/365 with consistent accuracy, preventing defective products from reaching customers.',
      sections: [
        {
          title: '99%+ Inspection Accuracy',
          description: 'AI reliably detects defects difficult even for experienced inspectors: scratches under 0.1mm, subtle color variations, assembly errors. Eliminates inspection accuracy inconsistencies.'
        },
        {
          title: 'Real-Time 100% Inspection',
          description: 'Move from sampling to 100% inspection. Inspect every product at production line speed, instantly identifying defects. Eliminate inspection bottlenecks.'
        },
        {
          title: 'Quality Improvement Through Data Analysis',
          description: 'Database inspection results to analyze defect patterns. Visualize which processes and conditions generate defects, enabling root cause identification.'
        },
        {
          title: 'Reduced Inspector Burden',
          description: 'Free inspectors from repetitive tasks to focus on complex judgments and improvement activities. Address labor shortages while improving employee satisfaction.'
        }
      ],
      traditionalVsAI: {
        title: 'Traditional Visual Inspection vs. AI Automated Inspection',
        traditional: {
          title: 'Traditional Visual Inspection',
          points: [
            'Missed defects due to inspector fatigue',
            'Judgment criteria varies by person',
            'Sampling inspection (100% impossible)',
            'Inspection speed limits line speed',
            'Recording/analyzing data difficult',
            'Aging skilled inspectors, talent shortage'
          ]
        },
        ai: {
          title: 'AI Automated Inspection',
          points: [
            '24/7 consistent accuracy',
            'Clear, consistent judgment criteria',
            '100% inspection possible',
            'High-speed line compatible',
            'All data auto-recorded/analyzed',
            'Inspection know-how systematized'
          ]
        }
      },
      realWorldExample: {
        title: 'Real Example: A Day at an Auto Parts Manufacturer',
        morning: {
          time: '8:00 AM - Inspection Process Starts',
          before: '3 inspectors visually check part surfaces for scratches. 30 seconds per unit, requiring intense concentration. 120 units inspected per hour.',
          after: 'AI camera captures/judges entire surface in 0.3 seconds. 1 inspector performs final verification of NG items only. 12,000 units inspected per hour.'
        },
        afternoon: {
          time: '2:00 PM - Defect Discovered',
          before: 'Inspector feels "something different" but unsure if within tolerance. Hesitates to stop line, consults supervisor.',
          after: 'AI instantly detects 0.05mm dimensional deviation. Alert notification triggers immediate line stop. Root cause identified in 5 minutes using historical data.'
        },
        planning: {
          time: 'Month End - Quality Report Meeting',
          before: 'Manually compile handwritten reports. Defect rate known, but analyzing which process/conditions caused issues takes 3 days.',
          after: 'AI auto-classifies/analyzes defect patterns. Auto-generates defect rate reports by process, time period, material lot. Done in 30 minutes.'
        }
      }
    }
  };

  const t = content[lang];

  return (
    <section className="cv-what-is-cv">
      <div className="cv-what-is-cv-container">
        <h2 className="cv-what-is-cv-heading">{t.heading}</h2>
        <p className="cv-what-is-cv-subheading">{t.subheading}</p>
        <p className="cv-what-is-cv-intro">{t.intro}</p>

        <div className="cv-features">
          {t.sections.map((section, index) => (
            <div key={index} className="cv-feature-card">
              <h3 className="cv-feature-title">{section.title}</h3>
              <p className="cv-feature-description">{section.description}</p>
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

export default CVWhatIsCV;
