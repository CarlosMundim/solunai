'use client';

import React from 'react';
import './CVROI.css';

interface CVROIProps {
  lang: 'ja' | 'en';
}

const CVROI: React.FC<CVROIProps> = ({ lang }) => {
  const content = {
    ja: {
      heading: 'AI品質検査システムの投資対効果',
      subheading: '6～12ヶ月で投資回収、年間200%以上のROIを実現',
      intro: '中小製造業向けに設計されたSolunaiのAI検査システムは、明確な投資回収計画と持続的なコスト削減を実現します。',
      investment: {
        heading: '初期投資の内訳',
        description: '標準的な1ライン導入（月産10,000個規模）の場合',
        breakdown: [
          {
            category: 'ハードウェア（カメラ・GPU・PC）',
            amount: '¥800万～¥1,200万',
            description: '産業用カメラ2-4台、GPU搭載エッジPC、照明システム'
          },
          {
            category: 'AIソフトウェアライセンス',
            amount: '¥200万～¥400万',
            description: 'Solunai AI検査プラットフォーム年間ライセンス'
          },
          {
            category: '導入・AIトレーニング',
            amount: '¥300万～¥500万',
            description: '現地設置、AI学習データ作成、検査員トレーニング（3ヶ月）'
          },
          {
            category: '合計初期投資',
            amount: '¥1,300万～¥2,100万',
            description: '補助金適用前（ものづくり補助金で最大2/3補助＝実質¥430万～）',
            highlight: true
          }
        ]
      },
      benefits: {
        heading: '年間コスト削減効果',
        description: '導入1年目から実現する具体的な効果',
        categories: [
          {
            title: '検査人件費削減',
            savings: '¥900万～¥1,500万/年',
            details: [
              '検査員3名 → 1名に削減（2名分削減）',
              '年間人件費：¥450万/名 × 2名 = ¥900万',
              '夜勤・休日手当削減で最大¥1,500万'
            ],
            percentage: '60～70%削減'
          },
          {
            title: '不良品流出防止',
            savings: '¥600万～¥2,000万/年',
            details: [
              '不良品流出によるリコール・クレーム対応費用削減',
              '目視検査の見逃し率3～5% → AI検査0.1%未満',
              '重大クレーム1件あたり平均¥200万～¥500万'
            ],
            percentage: '不良流出75%削減'
          },
          {
            title: '生産性向上',
            savings: '¥400万～¥800万/年',
            details: [
              '検査時間短縮：30秒/個 → 0.3秒/個（100倍高速化）',
              '全数検査により工程内不良の早期発見',
              'ライン停止時間30～50%削減'
            ],
            percentage: '生産性30～50%向上'
          },
          {
            title: 'スクラップ・手直し削減',
            savings: '¥300万～¥600万/年',
            details: [
              '工程内不良の即座検出により後工程への影響防止',
              '不良品の手直し工数削減',
              '材料廃棄ロス削減'
            ],
            percentage: 'スクラップ40%削減'
          }
        ]
      },
      roi: {
        heading: 'ROI計算（投資回収計画）',
        subtitle: '中規模製造ライン（月産10,000個）での試算例',
        calculation: {
          initialInvestment: '初期投資（補助金適用後）',
          initialAmount: '¥650万',
          initialNote: '（定価¥1,950万 − ものづくり補助金2/3 = ¥650万）',
          annualBenefits: '年間コスト削減合計',
          annualAmount: '¥2,200万～¥4,900万',
          paybackPeriod: '投資回収期間',
          paybackTime: '6～12ヶ月',
          roi1year: '1年目ROI',
          roi1yearValue: '238～653%',
          roi3year: '3年間累計ROI',
          roi3yearValue: '918～2,162%',
          irr: '内部収益率（IRR）',
          irrValue: '180～320%'
        }
      },
      comparison: {
        heading: 'FBM Hudson社との比較',
        description: 'Solunaiは中小企業向けに最適化された価格設定',
        table: [
          {
            metric: '初期投資',
            fbm: '€2.5M～€3.8M（¥3.8億～¥5.8億）',
            solunai: '¥1,300万～¥2,100万',
            advantage: '約20分の1のコスト'
          },
          {
            metric: '対象企業',
            fbm: '大手グローバル製造業',
            solunai: '中小製造業・地方工場',
            advantage: '中小企業向け設計'
          },
          {
            metric: '投資回収期間',
            fbm: '4～7ヶ月',
            solunai: '6～12ヶ月',
            advantage: '補助金活用で短縮'
          },
          {
            metric: 'IRR',
            fbm: '178～295%',
            solunai: '180～320%',
            advantage: '同等以上の収益性'
          }
        ]
      },
      cta: {
        heading: '無料ROIシミュレーション実施中',
        description: 'お客様の製造ラインに合わせた投資回収計画を無料作成',
        features: [
          '現場調査・ヒアリング（無料）',
          '投資額・削減効果の詳細試算',
          '補助金申請サポート',
          '導入スケジュール提案'
        ]
      }
    },
    en: {
      heading: 'AI Quality Inspection System ROI',
      subheading: '6-12 Month Payback, 200%+ Annual ROI',
      intro: 'Solunai\'s AI inspection system designed for SME manufacturers delivers clear investment recovery and sustained cost savings.',
      investment: {
        heading: 'Initial Investment Breakdown',
        description: 'Standard 1-line deployment (10,000 units/month scale)',
        breakdown: [
          {
            category: 'Hardware (Cameras, GPU, PC)',
            amount: '¥8M - ¥12M',
            description: '2-4 industrial cameras, GPU-equipped edge PC, lighting system'
          },
          {
            category: 'AI Software License',
            amount: '¥2M - ¥4M',
            description: 'Solunai AI Inspection Platform annual license'
          },
          {
            category: 'Implementation & AI Training',
            amount: '¥3M - ¥5M',
            description: 'On-site installation, AI training data creation, inspector training (3 months)'
          },
          {
            category: 'Total Initial Investment',
            amount: '¥13M - ¥21M',
            description: 'Before subsidies (Manufacturing subsidy 2/3 = effective ¥4.3M~)',
            highlight: true
          }
        ]
      },
      benefits: {
        heading: 'Annual Cost Savings',
        description: 'Concrete benefits realized from Year 1',
        categories: [
          {
            title: 'Inspection Labor Cost Reduction',
            savings: '¥9M - ¥15M/year',
            details: [
              '3 inspectors → 1 inspector (2 positions eliminated)',
              'Annual labor cost: ¥4.5M/person × 2 = ¥9M',
              'Up to ¥15M with night shift/holiday premium savings'
            ],
            percentage: '60-70% reduction'
          },
          {
            title: 'Defect Prevention',
            savings: '¥6M - ¥20M/year',
            details: [
              'Eliminated recall and customer complaint costs',
              'Visual inspection miss rate 3-5% → AI <0.1%',
              'Average major complaint cost ¥2M-¥5M per incident'
            ],
            percentage: '75% defect reduction'
          },
          {
            title: 'Productivity Improvement',
            savings: '¥4M - ¥8M/year',
            details: [
              'Inspection time: 30sec/unit → 0.3sec/unit (100x faster)',
              '100% inspection enables early in-process defect detection',
              'Line downtime reduced 30-50%'
            ],
            percentage: '30-50% productivity gain'
          },
          {
            title: 'Scrap & Rework Reduction',
            savings: '¥3M - ¥6M/year',
            details: [
              'Instant in-process defect detection prevents downstream impact',
              'Reduced rework labor',
              'Material waste reduction'
            ],
            percentage: '40% scrap reduction'
          }
        ]
      },
      roi: {
        heading: 'ROI Calculation (Investment Recovery Plan)',
        subtitle: 'Mid-size production line (10,000 units/month) estimate',
        calculation: {
          initialInvestment: 'Initial Investment (After Subsidy)',
          initialAmount: '¥6.5M',
          initialNote: '(List ¥19.5M − Manufacturing Subsidy 2/3 = ¥6.5M)',
          annualBenefits: 'Total Annual Cost Savings',
          annualAmount: '¥22M - ¥49M',
          paybackPeriod: 'Payback Period',
          paybackTime: '6-12 months',
          roi1year: 'Year 1 ROI',
          roi1yearValue: '238-653%',
          roi3year: '3-Year Cumulative ROI',
          roi3yearValue: '918-2,162%',
          irr: 'Internal Rate of Return (IRR)',
          irrValue: '180-320%'
        }
      },
      comparison: {
        heading: 'Comparison with FBM Hudson',
        description: 'Solunai optimized pricing for SME manufacturers',
        table: [
          {
            metric: 'Initial Investment',
            fbm: '€2.5M-€3.8M (¥380M-¥580M)',
            solunai: '¥13M-¥21M',
            advantage: '~1/20th the cost'
          },
          {
            metric: 'Target Customer',
            fbm: 'Large global manufacturers',
            solunai: 'SME & regional factories',
            advantage: 'SME-focused design'
          },
          {
            metric: 'Payback Period',
            fbm: '4-7 months',
            solunai: '6-12 months',
            advantage: 'Faster with subsidies'
          },
          {
            metric: 'IRR',
            fbm: '178-295%',
            solunai: '180-320%',
            advantage: 'Equal/higher returns'
          }
        ]
      },
      cta: {
        heading: 'Free ROI Simulation Available',
        description: 'Custom investment recovery plan tailored to your production line',
        features: [
          'On-site survey & consultation (free)',
          'Detailed investment & savings calculation',
          'Subsidy application support',
          'Implementation schedule proposal'
        ]
      }
    }
  };

  const t = content[lang];

  return (
    <section className="cv-roi">
      <div className="cv-roi-container">
        <h2 className="cv-roi-heading">{t.heading}</h2>
        <p className="cv-roi-subheading">{t.subheading}</p>
        <p className="cv-roi-intro">{t.intro}</p>

        {/* Investment Breakdown */}
        <div className="investment-section">
          <h3 className="section-heading">{t.investment.heading}</h3>
          <p className="section-description">{t.investment.description}</p>
          <div className="investment-breakdown">
            {t.investment.breakdown.map((item, index) => (
              <div key={index} className={`investment-item ${item.highlight ? 'highlight' : ''}`}>
                <div className="investment-category">{item.category}</div>
                <div className="investment-amount">{item.amount}</div>
                <div className="investment-description">{item.description}</div>
              </div>
            ))}
          </div>
        </div>

        {/* Annual Benefits */}
        <div className="benefits-section">
          <h3 className="section-heading">{t.benefits.heading}</h3>
          <p className="section-description">{t.benefits.description}</p>
          <div className="benefits-grid">
            {t.benefits.categories.map((category, index) => (
              <div key={index} className="benefit-card">
                <div className="benefit-header">
                  <h4 className="benefit-title">{category.title}</h4>
                  <div className="benefit-savings">{category.savings}</div>
                </div>
                <ul className="benefit-details">
                  {category.details.map((detail, idx) => (
                    <li key={idx}>{detail}</li>
                  ))}
                </ul>
                <div className="benefit-percentage">{category.percentage}</div>
              </div>
            ))}
          </div>
        </div>

        {/* ROI Calculation */}
        <div className="roi-calculation-section">
          <h3 className="section-heading">{t.roi.heading}</h3>
          <p className="section-subtitle">{t.roi.subtitle}</p>
          <div className="roi-calculation-box">
            <div className="roi-row">
              <div className="roi-label">{t.roi.calculation.initialInvestment}</div>
              <div className="roi-value highlight">{t.roi.calculation.initialAmount}</div>
            </div>
            <div className="roi-note">{t.roi.calculation.initialNote}</div>

            <div className="roi-divider"></div>

            <div className="roi-row">
              <div className="roi-label">{t.roi.calculation.annualBenefits}</div>
              <div className="roi-value success">{t.roi.calculation.annualAmount}</div>
            </div>

            <div className="roi-divider"></div>

            <div className="roi-metrics-grid">
              <div className="roi-metric">
                <div className="metric-label">{t.roi.calculation.paybackPeriod}</div>
                <div className="metric-value">{t.roi.calculation.paybackTime}</div>
              </div>
              <div className="roi-metric">
                <div className="metric-label">{t.roi.calculation.roi1year}</div>
                <div className="metric-value">{t.roi.calculation.roi1yearValue}</div>
              </div>
              <div className="roi-metric">
                <div className="metric-label">{t.roi.calculation.roi3year}</div>
                <div className="metric-value">{t.roi.calculation.roi3yearValue}</div>
              </div>
              <div className="roi-metric">
                <div className="metric-label">{t.roi.calculation.irr}</div>
                <div className="metric-value">{t.roi.calculation.irrValue}</div>
              </div>
            </div>
          </div>
        </div>

        {/* Comparison with FBM */}
        <div className="comparison-section">
          <h3 className="section-heading">{t.comparison.heading}</h3>
          <p className="section-description">{t.comparison.description}</p>
          <div className="comparison-table">
            <div className="table-header">
              <div className="table-cell">{lang === 'ja' ? '項目' : 'Metric'}</div>
              <div className="table-cell">FBM Hudson</div>
              <div className="table-cell">Solunai</div>
              <div className="table-cell">{lang === 'ja' ? 'Solunaiの優位性' : 'Solunai Advantage'}</div>
            </div>
            {t.comparison.table.map((row, index) => (
              <div key={index} className="table-row">
                <div className="table-cell metric">{row.metric}</div>
                <div className="table-cell">{row.fbm}</div>
                <div className="table-cell highlight">{row.solunai}</div>
                <div className="table-cell advantage">{row.advantage}</div>
              </div>
            ))}
          </div>
        </div>

        {/* CTA Section */}
        <div className="roi-cta-section">
          <h3 className="cta-heading">{t.cta.heading}</h3>
          <p className="cta-description">{t.cta.description}</p>
          <ul className="cta-features">
            {t.cta.features.map((feature, index) => (
              <li key={index}>{feature}</li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
};

export default CVROI;
