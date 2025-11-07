'use client';

import React from 'react';
import './GlobalEngineeringTalentPool.css';

interface GlobalEngineeringTalentPoolProps {
  lang: 'ja' | 'en';
}

const GlobalEngineeringTalentPool: React.FC<GlobalEngineeringTalentPoolProps> = ({ lang }) => {
  const content = {
    ja: {
      title: '専門スキルカテゴリー',
      subtitle: 'WorldEmpグローバル人材プール',
      intro: 'WorldEmpパートナーシップを通じて、日本の中小企業が地域で採用できない高度なスキルへの即座のアクセスを提供します。',
      categories: [
        {
          title: 'AI & 機械学習',
          skills: ['TensorFlow/PyTorch', 'Computer Vision', '自然言語処理', '深層学習', 'MLOps'],
          availability: '2-4週間'
        },
        {
          title: '製造業エンジニアリング',
          skills: ['工程最適化', 'Lean/Six Sigma', '品質管理', '自動化設計', 'IoT統合'],
          availability: '2-3週間'
        },
        {
          title: 'ソフトウェア開発',
          skills: ['Python/Java/C++', 'フルスタック開発', 'クラウドアーキテクチャ', 'DevOps', 'API統合'],
          availability: '2-4週間'
        },
        {
          title: 'データサイエンス',
          skills: ['データ分析', '予測モデリング', 'BI & 可視化', '統計分析', 'ビッグデータ'],
          availability: '2-4週間'
        },
        {
          title: 'EPC & 製作',
          skills: ['プロジェクト管理', 'CAD/CAM', '調達', '品質保証', '建設監督'],
          availability: '3-6週間'
        },
        {
          title: 'サイバーセキュリティ & ITインフラ',
          skills: ['ネットワークセキュリティ', 'クラウドセキュリティ', 'ペネトレーションテスト', 'セキュリティ基準', 'インフラ管理'],
          availability: '3-5週間'
        }
      ],
      comparison: {
        title: '従来の採用 vs WorldEmp配備',
        traditional: {
          label: '従来の採用',
          items: [
            { metric: '4-6ヶ月', description: '採用サイクル' },
            { metric: '¥10-15M', description: '年間コスト/人' },
            { metric: '限定的', description: '地域の人材プール' },
            { metric: '高い', description: '離職リスク' }
          ]
        },
        worldemp: {
          label: 'WorldEmp配備',
          items: [
            { metric: '2-6週間', description: '配備時間' },
            { metric: '¥6-9M', description: '年間コスト/人' },
            { metric: 'グローバル', description: '世界中の人材' },
            { metric: '柔軟', description: 'プロジェクトベース' }
          ]
        }
      }
    },
    en: {
      title: 'Specialized Skill Categories',
      subtitle: 'WorldEmp Global Talent Pool',
      intro: 'Through our WorldEmp partnership, we provide immediate access to advanced skills that Japanese SMEs cannot hire locally.',
      categories: [
        {
          title: 'AI & Machine Learning',
          skills: ['TensorFlow/PyTorch', 'Computer Vision', 'Natural Language Processing', 'Deep Learning', 'MLOps'],
          availability: '2-4 weeks'
        },
        {
          title: 'Manufacturing Engineering',
          skills: ['Process Optimization', 'Lean/Six Sigma', 'Quality Control', 'Automation Design', 'IoT Integration'],
          availability: '2-3 weeks'
        },
        {
          title: 'Software Development',
          skills: ['Python/Java/C++', 'Full-Stack Development', 'Cloud Architecture', 'DevOps', 'API Integration'],
          availability: '2-4 weeks'
        },
        {
          title: 'Data Science',
          skills: ['Data Analytics', 'Predictive Modeling', 'BI & Visualization', 'Statistical Analysis', 'Big Data'],
          availability: '2-4 weeks'
        },
        {
          title: 'EPC & Fabrication',
          skills: ['Project Management', 'CAD/CAM', 'Procurement', 'Quality Assurance', 'Construction Supervision'],
          availability: '3-6 weeks'
        },
        {
          title: 'Cybersecurity & IT Infrastructure',
          skills: ['Network Security', 'Cloud Security', 'Penetration Testing', 'Security Compliance', 'Infrastructure Management'],
          availability: '3-5 weeks'
        }
      ],
      comparison: {
        title: 'Traditional Hiring vs WorldEmp Deployment',
        traditional: {
          label: 'Traditional Hiring',
          items: [
            { metric: '4-6 Months', description: 'Hiring cycle' },
            { metric: '¥10-15M', description: 'Annual cost/engineer' },
            { metric: 'Limited', description: 'Local talent pool' },
            { metric: 'High', description: 'Turnover risk' }
          ]
        },
        worldemp: {
          label: 'WorldEmp Deployment',
          items: [
            { metric: '2-6 Weeks', description: 'Deployment time' },
            { metric: '¥6-9M', description: 'Annual cost/engineer' },
            { metric: 'Global', description: 'Worldwide talent' },
            { metric: 'Flexible', description: 'Project-based' }
          ]
        }
      }
    }
  };

  const currentContent = content[lang];

  return (
    <section className="global-engineering-talent-pool">
      <div className="talent-container">
        <div className="talent-header">
          <h2 className="talent-title">{currentContent.title}</h2>
          <p className="talent-subtitle">{currentContent.subtitle}</p>
          <p className="talent-intro">{currentContent.intro}</p>
        </div>

        <div className="categories-grid">
          {currentContent.categories.map((category, index) => (
            <div key={index} className="category-card">
              <h3 className="category-title">{category.title}</h3>
              <ul className="skills-list">
                {category.skills.map((skill, idx) => (
                  <li key={idx} className="skill-item">{skill}</li>
                ))}
              </ul>
              <div className="availability-badge">{category.availability}</div>
            </div>
          ))}
        </div>
        <div className="comparison-section">
          <h3 className="comparison-title">{currentContent.comparison.title}</h3>
          <div className="comparison-grid">
            <div className="comparison-card traditional">
              <h4 className="comparison-label">{currentContent.comparison.traditional.label}</h4>
              <div className="comparison-items">
                {currentContent.comparison.traditional.items.map((item, index) => (
                  <div key={index} className="comparison-item">
                    <div className="item-metric">{item.metric}</div>
                    <div className="item-description">{item.description}</div>
                  </div>
                ))}
              </div>
            </div>
            <div className="comparison-card worldemp">
              <h4 className="comparison-label">{currentContent.comparison.worldemp.label}</h4>
              <div className="comparison-items">
                {currentContent.comparison.worldemp.items.map((item, index) => (
                  <div key={index} className="comparison-item">
                    <div className="item-metric">{item.metric}</div>
                    <div className="item-description">{item.description}</div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default GlobalEngineeringTalentPool;
