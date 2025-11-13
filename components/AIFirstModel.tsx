'use client';

import React from 'react';
import {
  Users,
  Cpu,
  Brain,
  Server,
  Layers,
  UserCheck,
  Briefcase,
  FileText,
  Database,
  Box,
  Code,
  FileCode,
  Shield,
  GitBranch
} from 'lucide-react';
import './AIFirstModel.css';

interface AIFirstModelProps {
  lang: 'ja' | 'en';
}

const AIFirstModel: React.FC<AIFirstModelProps> = ({ lang }) => {
  const content = {
    ja: {
      overtitle: 'AI優先革命',
      title: '従来型企業との違い',
      subtitle: '我々のコア哲学：「AIの力で人間労働を置き換える。人間は不可欠な場合のみ使用。」',

      comparison: {
        sectionTitle: 'ビジネスモデル比較',
        traditional: {
          label: '従来型ITサービス企業',
          metrics: [
            { label: 'チーム構成', value: '100人の従業員' },
            { label: '年間人件費', value: '高コスト構造' },
            { label: '利益率', value: '20%' },
            { label: '提供スピード', value: '4-6ヶ月' },
            { label: 'スケーラビリティ', value: '人材採用に依存' }
          ]
        },
        solunai: {
          label: 'Solunai AI優先モデル',
          metrics: [
            { label: 'チーム構成', value: '少数精鋭 + AIエージェント' },
            { label: '年間運営費', value: '大幅なコスト削減' },
            { label: '利益率', value: '高効率' },
            { label: '提供スピード', value: '2-6週間' },
            { label: 'スケーラビリティ', value: '即座に拡張可能' }
          ]
        }
      },

      benefits: {
        title: 'この構造により実現：',
        items: [
          {
            label: '顧客へ',
            value: '大幅なコスト削減',
            detail: '従来型モデルと比較して大幅な削減を実現'
          },
          {
            label: '当社',
            value: '高効率運営',
            detail: '業界標準を大幅に上回る効率を実現'
          },
          {
            label: '日本社会',
            value: '労働力不足解決',
            detail: '1,100万人の労働力不足問題に貢献'
          },
          {
            label: '提供スピード',
            value: '大幅な高速化',
            detail: '従来4-6ヶ月を2-6週間で実現'
          }
        ]
      },

      howItWorks: {
        title: '仕組み：人間とAIの協働',
        description: 'Solunaiは人間の戦略的思考とAIの処理能力を最適に組み合わせます',

        human: {
          title: '人間エキスパートチーム',
          subtitle: '戦略・監督・品質保証',
          roles: [
            {
              title: 'CTO（最高技術責任者）',
              responsibility: '技術戦略、アーキテクチャ決定、イノベーション推進'
            },
            {
              title: 'シニアAI/MLエンジニア（2名）',
              responsibility: 'AIモデル設計、機械学習パイプライン構築'
            },
            {
              title: 'DevOps/インフラエンジニア（2名）',
              responsibility: 'HPC管理、システム最適化、セキュリティ'
            },
            {
              title: 'テクニカルアーキテクト（2名）',
              responsibility: 'ソリューション設計、技術選定、統合アーキテクチャ'
            },
            {
              title: 'テクニカルアカウントマネージャー（2名）',
              responsibility: '顧客要件理解、プロジェクト管理、品質保証'
            },
            {
              title: '営業/ビジネス開発（2名）',
              responsibility: '新規顧客開拓、パートナーシップ構築'
            },
            {
              title: '管理アシスタント（1名）',
              responsibility: '経営管理、財務、総務'
            }
          ],
          summary: '人間は判断、戦略、創造性、顧客関係に集中'
        },

        ai: {
          title: 'AIエージェントチーム',
          subtitle: '実行・処理・最適化',
          categories: [
            {
              title: 'データ処理エージェント（10-20）',
              tasks: [
                'データ前処理・クリーニング',
                'データ変換・正規化',
                'データ品質チェック',
                'データパイプライン自動化'
              ]
            },
            {
              title: 'モデリング・シミュレーションエージェント（10-20）',
              tasks: [
                'デジタルツインモデル構築',
                '物理シミュレーション実行',
                'パラメータ最適化',
                'シナリオ分析'
              ]
            },
            {
              title: 'コード生成・テストエージェント（10-15）',
              tasks: [
                'ソースコード生成',
                '自動テスト実行',
                'バグ検出・修正提案',
                'コードレビュー補助'
              ]
            },
            {
              title: '文書作成・翻訳エージェント（5-10）',
              tasks: [
                '技術文書自動生成',
                '多言語翻訳（日英中）',
                'レポート作成',
                'ドキュメント管理'
              ]
            },
            {
              title: '品質保証・検証エージェント（5-10）',
              tasks: [
                '自動品質チェック',
                '統合テスト実行',
                'パフォーマンス監視',
                '異常検知'
              ]
            },
            {
              title: 'プロジェクト管理・調整エージェント（5-10）',
              tasks: [
                'タスク進捗追跡',
                'リソース最適配分',
                'スケジュール管理',
                'レポート生成'
              ]
            }
          ],
          summary: 'AIは反復作業、データ処理、24時間365日稼働を担当'
        }
      },

      infrastructure: {
        title: 'HPCインフラ = 生産ライン',
        description: '我々にとって、HPCインフラは開発ツールではなく、生産ラインです',
        details: [
          {
            title: '高性能計算環境',
            points: [
              'GPU/CPUクラスター（1,700万円初期投資）',
              '大規模並列処理能力',
              'AIワークロード専用最適化',
              'スケーラブルなアーキテクチャ'
            ]
          },
          {
            title: '24時間365日稼働',
            points: [
              'AIエージェントが常時稼働',
              '人間の勤務時間外も作業継続',
              '週168時間フル活用',
              'タイムゾーンの制約なし'
            ]
          },
          {
            title: 'コスト効率',
            points: [
              '100人雇用の代わりにHPC投資',
              '年間1億円以上のコスト削減',
              '電力効率最適化',
              '運用コスト最小化'
            ]
          }
        ]
      },

      economics: {
        title: '経済性：高効率モデルの仕組み',
        subtitle: '構造的な競争優位性',
        breakdown: [
          {
            category: '従来型企業のコスト構造',
            items: [
              { label: '人件費（100人 × 月60万円）', percent: 70, amount: '年間7,200万円' },
              { label: 'オフィス・諸経費', percent: 15, amount: '年間1,500万円' },
              { label: '営業・管理費', percent: 10, amount: '年間1,000万円' },
              { label: '利益', percent: 5, amount: '年間500万円', highlight: true }
            ],
            total: '売上1億円の場合'
          },
          {
            category: 'Solunai AI優先モデル',
            items: [
              { label: '人件費（少数精鋭チーム）', percent: 20, amount: '大幅削減' },
              { label: 'HPC運用費（償却含む）', percent: 8, amount: '年間800万円' },
              { label: 'オフィス・諸経費', percent: 5, amount: '年間500万円' },
              { label: '営業・管理費', percent: 7, amount: '年間700万円' },
              { label: '利益', percent: 60, amount: '年間6,000万円', highlight: true }
            ],
            total: '売上1億円の場合'
          }
        ],
        conclusion: '同じ売上でも大幅に高い利益を実現。この差額を顧客への価格競争力と株主価値に還元。'
      },

      caseStudy: {
        title: '実例：製造業デジタルツイン開発プロジェクト',
        subtitle: '24ヶ月プロジェクトの比較',

        traditional: {
          title: '従来型アプローチ',
          team: '10人のエンジニア × 24ヶ月',
          breakdown: [
            { item: '人件費', calculation: '10人 × 60万円/月 × 24ヶ月', cost: '1億4,400万円' },
            { item: '諸経費', calculation: '約15%', cost: '2,160万円' },
            { item: '総コスト', calculation: '', cost: '1億6,560万円', highlight: true }
          ],
          timeline: '24ヶ月（遅延リスク高）'
        },

        solunai: {
          title: 'Solunai AI優先アプローチ',
          team: '少数エキスパート + AIエージェント × 24ヶ月',
          breakdown: [
            { item: '人件費', calculation: '少数精鋭チーム', cost: '大幅削減' },
            { item: 'AI運用費', calculation: 'HPC + モデル使用料', cost: '効率的運用' },
            { item: '諸経費', calculation: '最小化', cost: '最適化' },
            { item: '総コスト', calculation: '', cost: '大幅なコスト削減', highlight: true }
          ],
          timeline: '18ヶ月（並列処理で短縮）',
          savings: '大幅なコスト削減を実現'
        },

        benefits: {
          title: 'プロジェクト成果',
          customer: [
            '大幅なコスト削減を実現',
            '6ヶ月の納期短縮',
            '24時間365日の開発体制',
            '高品質な成果物'
          ],
          solunai: [
            '高効率な運営モデル',
            '顧客満足度の向上',
            '競合他社との差別化',
            '持続可能な成長モデル'
          ]
        }
      },

      impact: {
        title: '社会的インパクト',
        subtitle: 'Solunaiモデルが日本に与える影響',
        areas: [
          {
            title: '中小企業のDX推進',
            description: '高額な従来型SIerでは手が届かなかった中小企業にも、AIソリューションを提供可能に',
            metric: '12兆円の損失回避に貢献'
          },
          {
            title: '労働力不足の解決',
            description: 'AIエージェントが反復作業を担当し、人間は高付加価値業務に集中。1,100万人の労働力不足問題に対応',
            metric: '2040年までの危機に対処'
          },
          {
            title: '人材の価値向上',
            description: '人間はAI監督・戦略決定・創造的業務に特化。スキルアップと高収入を実現',
            metric: '少数精鋭で高い生産性を実現'
          },
          {
            title: '持続可能な成長',
            description: '高利益率により研究開発に再投資。継続的なイノベーションとサービス向上',
            metric: '利益の30%をR&Dに投資'
          }
        ]
      },

      cta: {
        title: 'AI優先モデルを体験してください',
        description: '無料の製造現場アセスメントで、貴社にどれだけのコスト削減が可能か診断します',
        buttons: [
          { text: '無料相談を予約', type: 'primary', href: '#contact' },
          { text: 'ソリューションを見る', type: 'secondary', href: '/solutions' }
        ]
      }
    },

    en: {
      overtitle: 'AI-First Revolution',
      title: 'How We\'re Different',
      subtitle: 'Our core philosophy: "We replace human labor with AI. Humans are used only when essential and irreplaceable."',

      comparison: {
        sectionTitle: 'Business Model Comparison',
        traditional: {
          label: 'Traditional IT Services Company',
          metrics: [
            { label: 'Team Structure', value: '100 employees' },
            { label: 'Annual Labor Cost', value: 'High cost structure' },
            { label: 'Profit Margin', value: '20%' },
            { label: 'Delivery Speed', value: '4-6 months' },
            { label: 'Scalability', value: 'Dependent on hiring' }
          ]
        },
        solunai: {
          label: 'Solunai AI-First Model',
          metrics: [
            { label: 'Team Structure', value: 'Elite team + AI agents' },
            { label: 'Annual Operating Cost', value: 'Significant cost reduction' },
            { label: 'Profit Margin', value: 'High efficiency' },
            { label: 'Delivery Speed', value: '2-6 weeks' },
            { label: 'Scalability', value: 'Instantly scalable' }
          ]
        }
      },

      benefits: {
        title: 'This Structure Enables:',
        items: [
          {
            label: 'For Clients',
            value: 'Significant Cost Reduction',
            detail: 'Major savings vs traditional model'
          },
          {
            label: 'For Solunai',
            value: 'High-Efficiency Operations',
            detail: 'Significantly above industry standard'
          },
          {
            label: 'For Japan',
            value: 'Labor Shortage Solution',
            detail: 'Contributing to solving 11M worker gap'
          },
          {
            label: 'Delivery Speed',
            value: 'Dramatically Faster',
            detail: 'Traditional 4-6 months in 2-6 weeks'
          }
        ]
      },

      howItWorks: {
        title: 'How It Works: Human-AI Collaboration',
        description: 'Solunai optimally combines human strategic thinking with AI processing power',

        human: {
          title: 'Expert Human Team',
          subtitle: 'Strategy, Supervision, Quality Assurance',
          roles: [
            {
              title: 'CTO (Chief Technology Officer)',
              responsibility: 'Technology strategy, architecture decisions, innovation'
            },
            {
              title: 'Senior AI/ML Engineers (2)',
              responsibility: 'AI model design, machine learning pipelines'
            },
            {
              title: 'DevOps/Infrastructure Engineers (2)',
              responsibility: 'HPC management, system optimization, security'
            },
            {
              title: 'Technical Architects (2)',
              responsibility: 'Solution design, technology selection, integration'
            },
            {
              title: 'Technical Account Managers (2)',
              responsibility: 'Customer requirements, project management, QA'
            },
            {
              title: 'Sales/Business Development (2)',
              responsibility: 'New customer acquisition, partnerships'
            },
            {
              title: 'Administrative Assistant (1)',
              responsibility: 'Business admin, finance, general affairs'
            }
          ],
          summary: 'Humans focus on judgment, strategy, creativity, and relationships'
        },

        ai: {
          title: 'AI Agent Team',
          subtitle: 'Execution, Processing, Optimization',
          categories: [
            {
              title: 'Data Processing Agents (10-20)',
              tasks: [
                'Data preprocessing & cleaning',
                'Data transformation & normalization',
                'Data quality checks',
                'Pipeline automation'
              ]
            },
            {
              title: 'Modeling & Simulation Agents (10-20)',
              tasks: [
                'Digital twin model construction',
                'Physical simulation execution',
                'Parameter optimization',
                'Scenario analysis'
              ]
            },
            {
              title: 'Code Generation & Testing Agents (10-15)',
              tasks: [
                'Source code generation',
                'Automated testing',
                'Bug detection & fix suggestions',
                'Code review assistance'
              ]
            },
            {
              title: 'Documentation & Translation Agents (5-10)',
              tasks: [
                'Technical documentation generation',
                'Multi-language translation (JP/EN/CN)',
                'Report creation',
                'Document management'
              ]
            },
            {
              title: 'QA & Verification Agents (5-10)',
              tasks: [
                'Automated quality checks',
                'Integration testing',
                'Performance monitoring',
                'Anomaly detection'
              ]
            },
            {
              title: 'Project Management & Coordination Agents (5-10)',
              tasks: [
                'Task progress tracking',
                'Resource optimization',
                'Schedule management',
                'Report generation'
              ]
            }
          ],
          summary: 'AI handles repetitive work, data processing, 24/7 operations'
        }
      },

      infrastructure: {
        title: 'HPC Infrastructure = Production Line',
        description: 'For us, HPC infrastructure is not a development tool—it\'s our production line',
        details: [
          {
            title: 'High-Performance Computing',
            points: [
              'GPU/CPU clusters (¥17M initial investment)',
              'Massive parallel processing capability',
              'AI workload optimization',
              'Scalable architecture'
            ]
          },
          {
            title: '24/7 Operations',
            points: [
              'AI agents always running',
              'Work continues after human hours',
              'Full 168 hours/week utilization',
              'No timezone constraints'
            ]
          },
          {
            title: 'Cost Efficiency',
            points: [
              'HPC investment instead of 100 employees',
              '¥100M+ annual cost savings',
              'Power efficiency optimization',
              'Minimal operating costs'
            ]
          }
        ]
      },

      economics: {
        title: 'Economics: Why 80% Profit Margin Is Possible',
        subtitle: 'Structural Competitive Advantage',
        breakdown: [
          {
            category: 'Traditional Company Cost Structure',
            items: [
              { label: 'Labor (100 people × ¥600K/month)', percent: 70, amount: '¥72M/year' },
              { label: 'Office & overhead', percent: 15, amount: '¥15M/year' },
              { label: 'Sales & admin', percent: 10, amount: '¥10M/year' },
              { label: 'Profit', percent: 5, amount: '¥5M/year', highlight: true }
            ],
            total: 'Revenue ¥100M case'
          },
          {
            category: 'Solunai AI-First Model',
            items: [
              { label: 'Labor (12 people × ¥600K/month)', percent: 20, amount: '¥8.64M/year' },
              { label: 'HPC operations (incl. depreciation)', percent: 8, amount: '¥8M/year' },
              { label: 'Office & overhead', percent: 5, amount: '¥5M/year' },
              { label: 'Sales & admin', percent: 7, amount: '¥7M/year' },
              { label: 'Profit', percent: 60, amount: '¥60M/year', highlight: true }
            ],
            total: 'Revenue ¥100M case'
          }
        ],
        conclusion: 'Same revenue but 12× the profit. This differential goes to customer price competitiveness and shareholder value.'
      },

      caseStudy: {
        title: 'Case Study: Manufacturing Digital Twin Development',
        subtitle: '24-month project comparison',

        traditional: {
          title: 'Traditional Approach',
          team: '10 engineers × 24 months',
          breakdown: [
            { item: 'Labor cost', calculation: '10 × ¥600K/mo × 24', cost: '¥144M' },
            { item: 'Overhead', calculation: '~15%', cost: '¥21.6M' },
            { item: 'Total Cost', calculation: '', cost: '¥165.6M', highlight: true }
          ],
          timeline: '24 months (high delay risk)'
        },

        solunai: {
          title: 'Solunai AI-First Approach',
          team: '3 experts + 20 AI agents × 24 months',
          breakdown: [
            { item: 'Labor cost', calculation: '3 × ¥600K/mo × 24', cost: '¥43.2M' },
            { item: 'AI operations', calculation: 'HPC + model usage', cost: '¥24M' },
            { item: 'Overhead', calculation: '~10%', cost: '¥6.72M' },
            { item: 'Total Cost', calculation: '', cost: '¥73.92M', highlight: true }
          ],
          timeline: '18 months (shortened via parallelization)',
          savings: '¥91.68M savings (55% cost reduction)'
        },

        benefits: {
          title: 'Project Outcomes',
          customer: [
            '55% cost reduction achieved',
            '6 months faster delivery',
            '24/7 development capability',
            'High-quality deliverables'
          ],
          solunai: [
            '80% profit margin from revenue',
            'Improved customer satisfaction',
            'Competitive differentiation',
            'Sustainable growth model'
          ]
        }
      },

      impact: {
        title: 'Social Impact',
        subtitle: 'How Solunai Model Impacts Japan',
        areas: [
          {
            title: 'SME DX Acceleration',
            description: 'Making AI solutions accessible to SMEs who couldn\'t afford traditional expensive SIers',
            metric: 'Contributing to avoiding ¥12T losses'
          },
          {
            title: 'Labor Shortage Solution',
            description: 'AI agents handle repetitive work while humans focus on high-value tasks. Addressing 11M worker shortage',
            metric: 'Tackling 2040 crisis'
          },
          {
            title: 'Human Value Enhancement',
            description: 'Humans specialize in AI supervision, strategy, creative work. Upskilling and higher income',
            metric: '12 people create value of traditional 100'
          },
          {
            title: 'Sustainable Growth',
            description: 'High margins enable R&D reinvestment. Continuous innovation and service improvement',
            metric: '30% of profit to R&D'
          }
        ]
      },

      cta: {
        title: 'Experience the AI-First Model',
        description: 'Free shop floor assessment to diagnose how much cost reduction is possible for your company',
        buttons: [
          { text: 'Schedule Free Consultation', type: 'primary', href: '#contact' },
          { text: 'View Solutions', type: 'secondary', href: '/solutions' }
        ]
      }
    }
  };

  const currentContent = content[lang];

  return (
    <section className="ai-first-model-section" id="ai-first-model">
      <div className="ai-first-container">
        {/* Overtitle + Title + Subtitle */}
        <div className="ai-first-header">
          <p className="ai-first-overtitle">{currentContent.overtitle}</p>
          <h2 className="ai-first-title">{currentContent.title}</h2>
          <p className="ai-first-subtitle">{currentContent.subtitle}</p>
        </div>

        {/* Business Model Comparison */}
        <div className="comparison-section">
          <h3 className="section-title">{currentContent.comparison.sectionTitle}</h3>
          <div className="comparison-grid">
            {/* Traditional */}
            <div className="comparison-card traditional">
              <div className="comparison-header">
                <span className="comparison-badge">{lang === 'ja' ? '従来型' : 'Traditional'}</span>
                <h4>{currentContent.comparison.traditional.label}</h4>
              </div>
              <div className="comparison-metrics">
                {currentContent.comparison.traditional.metrics.map((metric, idx) => (
                  <div key={idx} className="metric-row">
                    <span className="metric-label">{metric.label}</span>
                    <span className="metric-value">{metric.value}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Solunai */}
            <div className="comparison-card solunai">
              <div className="comparison-header">
                <span className="comparison-badge highlight">Solunai</span>
                <h4>{currentContent.comparison.solunai.label}</h4>
              </div>
              <div className="comparison-metrics">
                {currentContent.comparison.solunai.metrics.map((metric, idx) => (
                  <div key={idx} className="metric-row highlight">
                    <span className="metric-label">{metric.label}</span>
                    <span className="metric-value">{metric.value}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Benefits Grid */}
        <div className="benefits-section">
          <h3 className="section-title">{currentContent.benefits.title}</h3>
          <div className="benefits-grid">
            {currentContent.benefits.items.map((benefit, idx) => (
              <div key={idx} className="benefit-card">
                <div className="benefit-label">{benefit.label}</div>
                <div className="benefit-value">{benefit.value}</div>
                <div className="benefit-detail">{benefit.detail}</div>
              </div>
            ))}
          </div>
        </div>

        {/* How It Works - Bento Grid */}
        <div className="how-it-works-section">
          <h3 className="section-title">{currentContent.howItWorks.title}</h3>
          <p className="section-description">{currentContent.howItWorks.description}</p>

          <div className="bento-grid">
            {/* Human Team Header - Large */}
            <div className="bento-card bento-header human-header">
              <Users className="bento-icon human-icon" size={40} strokeWidth={1.5} />
              <h4 className="bento-title">{currentContent.howItWorks.human.title}</h4>
              <p className="bento-subtitle">{currentContent.howItWorks.human.subtitle}</p>
            </div>

            {/* AI Team Header - Large */}
            <div className="bento-card bento-header ai-header">
              <Cpu className="bento-icon ai-icon" size={40} strokeWidth={1.5} />
              <h4 className="bento-title">{currentContent.howItWorks.ai.title}</h4>
              <p className="bento-subtitle">{currentContent.howItWorks.ai.subtitle}</p>
            </div>

            {/* Human Roles - Medium Cards */}
            <div className="bento-card bento-role human-role">
              <Brain className="role-icon human-icon" size={48} strokeWidth={1.5} />
              <div className="role-content">
                <div className="role-title">{currentContent.howItWorks.human.roles[0].title}</div>
                <div className="role-detail">{currentContent.howItWorks.human.roles[0].responsibility}</div>
              </div>
            </div>

            <div className="bento-card bento-role human-role">
              <Brain className="role-icon human-icon" size={48} strokeWidth={1.5} />
              <div className="role-content">
                <div className="role-title">{currentContent.howItWorks.human.roles[1].title}</div>
                <div className="role-detail">{currentContent.howItWorks.human.roles[1].responsibility}</div>
              </div>
            </div>

            <div className="bento-card bento-role human-role">
              <Server className="role-icon human-icon" size={48} strokeWidth={1.5} />
              <div className="role-content">
                <div className="role-title">{currentContent.howItWorks.human.roles[2].title}</div>
                <div className="role-detail">{currentContent.howItWorks.human.roles[2].responsibility}</div>
              </div>
            </div>

            <div className="bento-card bento-role human-role">
              <Layers className="role-icon human-icon" size={48} strokeWidth={1.5} />
              <div className="role-content">
                <div className="role-title">{currentContent.howItWorks.human.roles[3].title}</div>
                <div className="role-detail">{currentContent.howItWorks.human.roles[3].responsibility}</div>
              </div>
            </div>

            <div className="bento-card bento-role human-role">
              <UserCheck className="role-icon human-icon" size={48} strokeWidth={1.5} />
              <div className="role-content">
                <div className="role-title">{currentContent.howItWorks.human.roles[4].title}</div>
                <div className="role-detail">{currentContent.howItWorks.human.roles[4].responsibility}</div>
              </div>
            </div>

            <div className="bento-card bento-role human-role">
              <Briefcase className="role-icon human-icon" size={48} strokeWidth={1.5} />
              <div className="role-content">
                <div className="role-title">{currentContent.howItWorks.human.roles[5].title}</div>
                <div className="role-detail">{currentContent.howItWorks.human.roles[5].responsibility}</div>
              </div>
            </div>

            <div className="bento-card bento-role human-role">
              <FileText className="role-icon human-icon" size={48} strokeWidth={1.5} />
              <div className="role-content">
                <div className="role-title">{currentContent.howItWorks.human.roles[6].title}</div>
                <div className="role-detail">{currentContent.howItWorks.human.roles[6].responsibility}</div>
              </div>
            </div>

            {/* AI Agent Categories - Medium Cards */}
            <div className="bento-card bento-agent ai-agent">
              <Database className="role-icon ai-icon" size={48} strokeWidth={1.5} />
              <div className="role-content">
                <div className="role-title">{currentContent.howItWorks.ai.categories[0].title}</div>
                <ul className="agent-tasks">
                  {currentContent.howItWorks.ai.categories[0].tasks.slice(0, 2).map((task, idx) => (
                    <li key={idx}>{task}</li>
                  ))}
                </ul>
              </div>
            </div>

            <div className="bento-card bento-agent ai-agent">
              <Box className="role-icon ai-icon" size={48} strokeWidth={1.5} />
              <div className="role-content">
                <div className="role-title">{currentContent.howItWorks.ai.categories[1].title}</div>
                <ul className="agent-tasks">
                  {currentContent.howItWorks.ai.categories[1].tasks.slice(0, 2).map((task, idx) => (
                    <li key={idx}>{task}</li>
                  ))}
                </ul>
              </div>
            </div>

            <div className="bento-card bento-agent ai-agent">
              <Code className="role-icon ai-icon" size={48} strokeWidth={1.5} />
              <div className="role-content">
                <div className="role-title">{currentContent.howItWorks.ai.categories[2].title}</div>
                <ul className="agent-tasks">
                  {currentContent.howItWorks.ai.categories[2].tasks.slice(0, 2).map((task, idx) => (
                    <li key={idx}>{task}</li>
                  ))}
                </ul>
              </div>
            </div>

            <div className="bento-card bento-agent ai-agent">
              <FileCode className="role-icon ai-icon" size={48} strokeWidth={1.5} />
              <div className="role-content">
                <div className="role-title">{currentContent.howItWorks.ai.categories[3].title}</div>
                <ul className="agent-tasks">
                  {currentContent.howItWorks.ai.categories[3].tasks.slice(0, 2).map((task, idx) => (
                    <li key={idx}>{task}</li>
                  ))}
                </ul>
              </div>
            </div>

            <div className="bento-card bento-agent ai-agent">
              <Shield className="role-icon ai-icon" size={48} strokeWidth={1.5} />
              <div className="role-content">
                <div className="role-title">{currentContent.howItWorks.ai.categories[4].title}</div>
                <ul className="agent-tasks">
                  {currentContent.howItWorks.ai.categories[4].tasks.slice(0, 2).map((task, idx) => (
                    <li key={idx}>{task}</li>
                  ))}
                </ul>
              </div>
            </div>

            <div className="bento-card bento-agent ai-agent">
              <GitBranch className="role-icon ai-icon" size={48} strokeWidth={1.5} />
              <div className="role-content">
                <div className="role-title">{currentContent.howItWorks.ai.categories[5].title}</div>
                <ul className="agent-tasks">
                  {currentContent.howItWorks.ai.categories[5].tasks.slice(0, 2).map((task, idx) => (
                    <li key={idx}>{task}</li>
                  ))}
                </ul>
              </div>
            </div>

            {/* Summary Cards - Wide */}
            <div className="bento-card bento-summary human-summary">
              <p>{currentContent.howItWorks.human.summary}</p>
            </div>

            <div className="bento-card bento-summary ai-summary">
              <p>{currentContent.howItWorks.ai.summary}</p>
            </div>
          </div>
        </div>

        {/* Social Impact */}
        <div className="impact-section">
          <h3 className="section-title">{currentContent.impact.title}</h3>
          <p className="section-description">{currentContent.impact.subtitle}</p>
          <div className="impact-grid">
            {currentContent.impact.areas.map((area, idx) => (
              <div key={idx} className="impact-card">
                <h4 className="impact-title">{area.title}</h4>
                <p className="impact-description">{area.description}</p>
                <div className="impact-metric">{area.metric}</div>
              </div>
            ))}
          </div>
        </div>

        {/* CTA */}
        <div className="ai-first-cta">
          <h3 className="cta-title">{currentContent.cta.title}</h3>
          <p className="cta-description">{currentContent.cta.description}</p>
          <div className="cta-buttons">
            {currentContent.cta.buttons.map((button, idx) => (
              <a
                key={idx}
                href={button.href}
                className={`cta-button ${button.type}`}
              >
                {button.text}
              </a>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default AIFirstModel;
