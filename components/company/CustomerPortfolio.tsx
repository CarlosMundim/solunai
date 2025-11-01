'use client';

import React from 'react';
import './CustomerPortfolio.css';

interface CustomerPortfolioProps {
  lang: 'ja' | 'en';
}

const CustomerPortfolio: React.FC<CustomerPortfolioProps> = ({ lang }) => {
  const content = {
    ja: {
      title: '顧客ポートフォリオ',
      subtitle: 'Customer Portfolio - Proven Track Record & Strong Pipeline',

      currentCustomers: {
        title: '現在の顧客',
        customers: [
          {
            name: 'FBM Hudson Italiana',
            location: 'イタリア/UAE',
            industry: 'HVAC製造',
            contract: '€2.5M - €3.8M デジタル変革',
            status: '進行中 - フェーズ2展開中',
            achievements: [
              'デジタルツイン統合完了',
              'リアルタイム監視システム稼働',
              'WorldEmpエンジニア配備成功',
              'フェーズ2：スケール展開中'
            ]
          }
        ]
      },

      pipeline: {
        title: '販売パイプライン',
        target: '20-50社の日本のSME製造業（2026年Q2目標）',
        industries: [
          {
            name: 'HVAC機器製造',
            description: '空調・熱管理システム',
            targetCompanies: '5-10社'
          },
          {
            name: '自動車部品製造',
            description: '精密部品・組立',
            targetCompanies: '5-10社'
          },
          {
            name: '電子部品製造',
            description: '半導体・電子機器',
            targetCompanies: '5-10社'
          },
          {
            name: '精密機械製造',
            description: '工作機械・産業機器',
            targetCompanies: '5-10社'
          }
        ]
      },

      targetProfile: {
        title: 'ターゲット顧客プロファイル',
        criteria: [
          {
            category: '企業規模',
            value: '従業員50-500名',
            description: '中規模製造業'
          },
          {
            category: '年間売上',
            value: '¥500M - ¥10B',
            description: '安定的な収益基盤'
          },
          {
            category: '製造タイプ',
            value: '受注生産・精密製造',
            description: 'カスタマイズ製品'
          },
          {
            category: '課題',
            value: '人材不足・品質管理・技能継承',
            description: 'デジタル化ニーズ高'
          },
          {
            category: 'IT準備度',
            value: 'IoT対応または導入意欲',
            description: 'テクノロジー受容性'
          }
        ]
      }
    },

    en: {
      title: 'Customer Portfolio',
      subtitle: 'Proven Track Record & Strong Pipeline',

      currentCustomers: {
        title: 'Current Customers',
        customers: [
          {
            name: 'FBM Hudson Italiana',
            location: 'Italy/UAE',
            industry: 'HVAC Manufacturing',
            contract: '€2.5M - €3.8M Digital Transformation',
            status: 'Ongoing - Phase 2 Deploying',
            achievements: [
              'Digital Twin integration complete',
              'Real-time monitoring system operational',
              'WorldEmp engineer deployment successful',
              'Phase 2: Scaling deployment'
            ]
          }
        ]
      },

      pipeline: {
        title: 'Sales Pipeline',
        target: '20-50 Japanese SME manufacturers (Target Q2 2026)',
        industries: [
          {
            name: 'HVAC Equipment Manufacturing',
            description: 'Air conditioning & thermal management',
            targetCompanies: '5-10 companies'
          },
          {
            name: 'Automotive Parts Manufacturing',
            description: 'Precision parts & assembly',
            targetCompanies: '5-10 companies'
          },
          {
            name: 'Electronics Manufacturing',
            description: 'Semiconductors & electronic devices',
            targetCompanies: '5-10 companies'
          },
          {
            name: 'Precision Machinery Manufacturing',
            description: 'Machine tools & industrial equipment',
            targetCompanies: '5-10 companies'
          }
        ]
      },

      targetProfile: {
        title: 'Target Customer Profile',
        criteria: [
          {
            category: 'Company Size',
            value: '50-500 employees',
            description: 'Mid-size manufacturers'
          },
          {
            category: 'Annual Revenue',
            value: '¥500M - ¥10B',
            description: 'Stable revenue base'
          },
          {
            category: 'Manufacturing Type',
            value: 'Make-to-order, Precision',
            description: 'Customized products'
          },
          {
            category: 'Pain Points',
            value: 'Talent shortage, Quality control, Skill transfer',
            description: 'High digitalization needs'
          },
          {
            category: 'Tech Readiness',
            value: 'IoT-ready or willing',
            description: 'Technology acceptance'
          }
        ]
      }
    }
  };

  const current = content[lang];

  return (
    <section className="customer-portfolio-section">
      <div className="portfolio-container">
        <div className="portfolio-header">
          <h2>{current.title}</h2>
          <p className="subtitle">{current.subtitle}</p>
        </div>

        {/* Current Customers */}
        <div className="portfolio-block">
          <h3 className="block-title">{current.currentCustomers.title}</h3>
          <div className="customers-grid">
            {current.currentCustomers.customers.map((customer, index) => (
              <div key={index} className="customer-card featured">
                <div className="customer-header">
                  <div>
                    <h4>{customer.name}</h4>
                    <p className="customer-location">{customer.location}</p>
                  </div>
                  <div className="customer-industry">{customer.industry}</div>
                </div>

                <div className="customer-contract">
                  <div className="contract-label">{lang === 'ja' ? '契約:' : 'Contract:'}</div>
                  <div className="contract-value">{customer.contract}</div>
                </div>

                <div className="customer-status">
                  <span className="status-badge active">{customer.status}</span>
                </div>

                <div className="customer-achievements">
                  <h5>{lang === 'ja' ? '主要実績:' : 'Key Achievements:'}</h5>
                  <ul>
                    {customer.achievements.map((achievement, achievementIndex) => (
                      <li key={achievementIndex}>{achievement}</li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Pipeline */}
        <div className="portfolio-block pipeline-block">
          <h3 className="block-title">{current.pipeline.title}</h3>
          <p className="pipeline-target">{current.pipeline.target}</p>

          <div className="industries-grid">
            {current.pipeline.industries.map((industry, index) => (
              <div key={index} className="industry-card">
                <h4>{industry.name}</h4>
                <p className="industry-description">{industry.description}</p>
                <div className="industry-target">{industry.targetCompanies}</div>
              </div>
            ))}
          </div>
        </div>

        {/* Target Profile */}
        <div className="portfolio-block profile-block">
          <h3 className="block-title">{current.targetProfile.title}</h3>

          <div className="criteria-grid">
            {current.targetProfile.criteria.map((criterion, index) => (
              <div key={index} className="criterion-card">
                <div className="criterion-category">{criterion.category}</div>
                <div className="criterion-value">{criterion.value}</div>
                <div className="criterion-description">{criterion.description}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default CustomerPortfolio;
