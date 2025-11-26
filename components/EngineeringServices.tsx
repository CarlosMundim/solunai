'use client';

import React, { useState } from 'react';
import { Bot, Eye, Cog, BarChart3, Factory } from 'lucide-react';
import './EngineeringServices.css';

interface EngineeringServicesProps {
  lang: 'ja' | 'en';
}

// Icon components for each category
const categoryIcons = {
  ml: Bot,
  cv: Eye,
  automation: Cog,
  data: BarChart3,
  manufacturing: Factory
};

const EngineeringServices: React.FC<EngineeringServicesProps> = ({ lang }) => {
  const [selectedCategory, setSelectedCategory] = useState(0);

  const content = {
    ja: {
      title: '世界クラスの人材に数週間でアクセス',
      subtitle: 'WorldEmpを通じた5つのエンジニアリングカテゴリー',
      challenge: {
        title: '日本の課題',
        points: [
          '高齢化する労働力（28%が60歳以上）',
          'AI/ML専門家が地域で不在',
          '4-6ヶ月の採用サイクル',
          '年間¥10M-¥15Mの給与',
          '柔軟なスケーリングが不可能'
        ]
      },
      solution: {
        title: 'Solunaiソリューション',
        points: [
          '2-6週間の配備（52倍速い！）',
          '専門スキルが利用可能',
          'プロジェクトベースの柔軟性',
          '30-40%のコスト削減',
          'グローバルな人材プール'
        ]
      },
      categories: [
        {
          title: '機械学習エンジニア',
          iconKey: 'ml',
          skills: ['TensorFlow', 'PyTorch', 'scikit-learn', 'カスタムAIモデル開発'],
          cost: '年間¥6M-¥8M',
          traditional: '正社員：¥12M+',
          useCases: [
            '予知保全システム',
            '品質予測モデル',
            '生産最適化AI',
            'リアルタイム異常検知'
          ],
          description: 'カスタムAIソリューションの構築、トレーニング、展開。製造業に特化した予測モデル。'
        },
        {
          title: 'コンピュータビジョン専門家',
          iconKey: 'cv',
          skills: ['OpenCV', 'YOLO', 'Detectron2', 'リアルタイム画像処理'],
          cost: '年間¥6M-¥9M',
          traditional: '正社員：¥12M-¥15M',
          useCases: [
            '欠陥検出システム',
            '寸法検査',
            '製品分類',
            'リアルタイム品質管理'
          ],
          description: '視覚ベースの品質管理と検査システム。95%以上の精度で人間の検査を上回る。'
        },
        {
          title: '自動化エンジニア',
          iconKey: 'automation',
          skills: ['ロボティクス', 'PLC', 'SCADA', '産業IoT'],
          cost: '年間¥5M-¥7M',
          traditional: '正社員：¥10M-¥12M',
          useCases: [
            '生産自動化',
            'スワームロボティクス',
            'プロセス制御システム',
            '工場フロア統合'
          ],
          description: 'ロボティクスと自動化システムの実装。既存設備とのシームレスな統合。'
        },
        {
          title: 'データサイエンティスト',
          iconKey: 'data',
          skills: ['Python', 'R', 'SQL', 'BI Dashboard', 'KPI追跡'],
          cost: '年間¥7M-¥10M',
          traditional: '正社員：¥12M-¥15M',
          useCases: [
            '生産最適化分析',
            'リアルタイムダッシュボード',
            'KPI追跡システム',
            '予測アナリティクス'
          ],
          description: '製造データを実用的な洞察に変換。リアルタイムのパフォーマンス可視化。'
        },
        {
          title: '製造プロセスエンジニア',
          iconKey: 'manufacturing',
          skills: ['Lean Manufacturing', 'Six Sigma', 'プロセス最適化', '品質システム'],
          cost: '年間¥5M-¥7M',
          traditional: '正社員：¥9M-¥12M',
          useCases: [
            'プロセス最適化',
            '品質管理システム',
            'Lean実装',
            '工場フロアトレーニング'
          ],
          description: '工場フロアでの実装とトレーニング。製造業での数十年の経験。'
        }
      ]
    },
    en: {
      title: 'Access World-Class Talent in Weeks',
      subtitle: '5 Engineering Categories via WorldEmp',
      challenge: {
        title: "Japan's Challenge",
        points: [
          'Aging workforce (28% over 60)',
          'AI/ML specialists unavailable locally',
          '4-6 month recruitment cycle',
          '¥10M-¥15M annual salaries',
          'Cannot scale flexibly'
        ]
      },
      solution: {
        title: 'Solunai Solution',
        points: [
          '2-6 weeks deployment (52x faster!)',
          'Specialized skills available',
          'Project-based flexibility',
          '30-40% cost reduction',
          'Global talent pool'
        ]
      },
      categories: [
        {
          title: 'Machine Learning Engineers',
          iconKey: 'ml',
          skills: ['TensorFlow', 'PyTorch', 'scikit-learn', 'Custom AI model development'],
          cost: '¥6M-¥8M/year',
          traditional: 'Permanent: ¥12M+',
          useCases: [
            'Predictive maintenance systems',
            'Quality prediction models',
            'Production optimization AI',
            'Real-time anomaly detection'
          ],
          description: 'Build, train, and deploy custom AI solutions. Specialized in manufacturing predictive models.'
        },
        {
          title: 'Computer Vision Specialists',
          iconKey: 'cv',
          skills: ['OpenCV', 'YOLO', 'Detectron2', 'Real-time image processing'],
          cost: '¥6M-¥9M/year',
          traditional: 'Permanent: ¥12M-¥15M',
          useCases: [
            'Defect detection systems',
            'Dimensional inspection',
            'Product classification',
            'Real-time quality control'
          ],
          description: 'Vision-based quality control and inspection systems. Outperform human inspection at 95%+ accuracy.'
        },
        {
          title: 'Automation Engineers',
          iconKey: 'automation',
          skills: ['Robotics', 'PLC', 'SCADA', 'Industrial IoT'],
          cost: '¥5M-¥7M/year',
          traditional: 'Permanent: ¥10M-¥12M',
          useCases: [
            'Production automation',
            'Swarm robotics',
            'Process control systems',
            'Factory floor integration'
          ],
          description: 'Implement robotics and automation systems. Direct integration with existing equipment.'
        },
        {
          title: 'Data Scientists',
          iconKey: 'data',
          skills: ['Python', 'R', 'SQL', 'BI Dashboards', 'KPI tracking'],
          cost: '¥7M-¥10M/year',
          traditional: 'Permanent: ¥12M-¥15M',
          useCases: [
            'Production optimization analytics',
            'Real-time dashboards',
            'KPI tracking systems',
            'Predictive analytics'
          ],
          description: 'Transform manufacturing data into actionable insights. Real-time performance visualization.'
        },
        {
          title: 'Manufacturing Process Engineers',
          iconKey: 'manufacturing',
          skills: ['Lean Manufacturing', 'Six Sigma', 'Process optimization', 'Quality systems'],
          cost: '¥5M-¥7M/year',
          traditional: 'Permanent: ¥9M-¥12M',
          useCases: [
            'Process optimization',
            'Quality management systems',
            'Lean implementation',
            'Factory floor training'
          ],
          description: 'Factory floor implementation and training. Decades of manufacturing experience.'
        }
      ]
    }
  };

  const currentContent = content[lang];

  return (
    <section className="engineering-services">
      <div className="es-container">
        <div className="es-header">
          <h2 className="es-title">{currentContent.title}</h2>
          <p className="es-subtitle">{currentContent.subtitle}</p>
        </div>

        <div className="challenge-solution-comparison">
          <div className="comparison-card challenge-card">
            <h3 className="comparison-title">{currentContent.challenge.title}</h3>
            <ul className="comparison-list">
              {currentContent.challenge.points.map((point, index) => (
                <li key={index} className="comparison-item negative">
                  <span className="item-icon">✗</span>
                  <span>{point}</span>
                </li>
              ))}
            </ul>
          </div>

          <div className="comparison-arrow">→</div>

          <div className="comparison-card solution-card">
            <h3 className="comparison-title">{currentContent.solution.title}</h3>
            <ul className="comparison-list">
              {currentContent.solution.points.map((point, index) => (
                <li key={index} className="comparison-item positive">
                  <span className="item-icon">✓</span>
                  <span>{point}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="categories-section">
          <div className="category-tabs">
            {currentContent.categories.map((category, index) => {
              const IconComponent = categoryIcons[category.iconKey as keyof typeof categoryIcons];
              return (
                <button
                  key={index}
                  className={`category-tab ${selectedCategory === index ? 'active' : ''}`}
                  onClick={() => setSelectedCategory(index)}
                >
                  <span className="tab-icon">
                    <IconComponent size={24} strokeWidth={1.5} />
                  </span>
                  <span className="tab-label">{category.title}</span>
                </button>
              );
            })}
          </div>

          <div className="category-content">
            {currentContent.categories.map((category, index) => {
              const IconComponent = categoryIcons[category.iconKey as keyof typeof categoryIcons];
              return (
              <div
                key={index}
                className={`category-detail ${selectedCategory === index ? 'active' : ''}`}
              >
                <div className="detail-header">
                  <div className="detail-icon">
                    <IconComponent size={48} strokeWidth={1.5} />
                  </div>
                  <div className="detail-title-group">
                    <h3 className="detail-title">{category.title}</h3>
                    <p className="detail-description">{category.description}</p>
                  </div>
                </div>

                <div className="detail-body">
                  <div className="detail-section">
                    <h4 className="section-heading">{lang === 'ja' ? '技術スキル' : 'Technical Skills'}</h4>
                    <div className="skills-list">
                      {category.skills.map((skill, idx) => (
                        <span key={idx} className="skill-badge">{skill}</span>
                      ))}
                    </div>
                  </div>

                  <div className="detail-section">
                    <h4 className="section-heading">{lang === 'ja' ? 'ユースケース' : 'Use Cases'}</h4>
                    <ul className="use-cases-list">
                      {category.useCases.map((useCase, idx) => (
                        <li key={idx} className="use-case-item">{useCase}</li>
                      ))}
                    </ul>
                  </div>

                  <div className="cost-comparison-inline">
                    <div className="cost-item solunai">
                      <div className="cost-label">Solunai + WorldEmp</div>
                      <div className="cost-value">{category.cost}</div>
                    </div>
                    <div className="vs-divider">vs</div>
                    <div className="cost-item traditional">
                      <div className="cost-label">{lang === 'ja' ? '従来の採用' : 'Traditional Hiring'}</div>
                      <div className="cost-value">{category.traditional}</div>
                    </div>
                  </div>
                </div>
              </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};

export default EngineeringServices;
