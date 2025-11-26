'use client';

import React from 'react';
import './ClientSuccess.css';

interface ClientSuccessProps {
  lang: 'ja' | 'en';
}

const ClientSuccess: React.FC<ClientSuccessProps> = ({ lang }) => {
  const content = {
    ja: {
      sectionTitle: '導入事例',
      sectionSubtitle: 'Case Studies',
      badge: 'ケーススタディ',
      industry: '製造業・産業機器',
      title: 'FBM Hudson Italiana',
      subtitle: 'イタリア大手エアクーラー製造企業',
      challenge: {
        label: '課題',
        text: '複雑なエアクーラー製造における見積プロセスの効率化と、カスタム設計の最適化が必要でした。'
      },
      solution: {
        label: 'ソリューション',
        text: 'デジタルツイン技術を活用し、見積システムと3D設計プロセスを完全統合しました。'
      },
      results: {
        label: '成果',
        items: [
          {
            metric: '90%',
            description: '見積作成時間の短縮'
          },
          {
            metric: '95%',
            description: '設計精度の向上'
          },
          {
            metric: '2-4週',
            description: 'パイロット実装期間'
          }
        ]
      },
      partnership: 'WorldEmp（オランダ・インド・日本）のグローバルエンジニアと連携し、スムーズな実装を実現',
      trustedBy: '信頼をいただいているお客様',
      viewAllCta: 'すべての事例を見る'
    },
    en: {
      sectionTitle: 'Case Studies',
      sectionSubtitle: '導入事例',
      badge: 'Case Study',
      industry: 'Manufacturing / Industrial',
      title: 'FBM Hudson Italiana',
      subtitle: 'Leading Italian Air Cooler Manufacturer',
      challenge: {
        label: 'Challenge',
        text: 'Needed to streamline quotation process and optimize custom designs for complex air cooler manufacturing.'
      },
      solution: {
        label: 'Solution',
        text: 'Fully integrated quotation system with 3D design process using Digital Twin technology.'
      },
      results: {
        label: 'Results',
        items: [
          {
            metric: '90%',
            description: 'Reduction in quotation time'
          },
          {
            metric: '95%',
            description: 'Improvement in design accuracy'
          },
          {
            metric: '2-4 weeks',
            description: 'Pilot implementation period'
          }
        ]
      },
      partnership: 'Smooth implementation achieved through collaboration with WorldEmp global engineers (Netherlands, India, Japan)',
      trustedBy: 'Trusted By',
      viewAllCta: 'View All Case Studies'
    }
  };

  const currentContent = content[lang];

  return (
    <section className="client-success-section" aria-label={lang === 'ja' ? 'クライアント成功事例' : 'Client Success'}>
      <div className="client-success-container">
        {/* Section Title */}
        <div className="section-header">
          <h2 className="section-title">{currentContent.sectionTitle}</h2>
          <p className="section-subtitle">{currentContent.sectionSubtitle}</p>
        </div>

        {/* Featured Case Study Card */}
        <div className="case-study-card">
          <div className="case-study-badge">{currentContent.badge}</div>

          <div className="fbm-logo-container">
            <img
              src="/images/partners/fbm_logo.jpg"
              alt="FBM Hudson Italiana Logo"
              className="fbm-logo"
            />
          </div>

          <div className="case-study-header">
            <h3 className="case-study-title">{currentContent.title}</h3>
            <p className="case-study-industry">{currentContent.industry}</p>
            <p className="case-study-subtitle">{currentContent.subtitle}</p>
          </div>

          <div className="case-study-content-grid">
            {/* Challenge */}
            <div className="case-study-block">
              <h4 className="case-study-block-label">{currentContent.challenge.label}</h4>
              <p className="case-study-block-text">{currentContent.challenge.text}</p>
            </div>

            {/* Solution */}
            <div className="case-study-block">
              <h4 className="case-study-block-label">{currentContent.solution.label}</h4>
              <p className="case-study-block-text">{currentContent.solution.text}</p>
            </div>
          </div>

          {/* Results */}
          <div className="case-study-results">
            <h4 className="case-study-results-label">{currentContent.results.label}</h4>
            <div className="results-metrics-grid">
              {currentContent.results.items.map((item, index) => (
                <div key={index} className="result-metric-card">
                  <div className="metric-value">{item.metric}</div>
                  <div className="metric-description">{item.description}</div>
                </div>
              ))}
            </div>
          </div>

          {/* Partnership */}
          <div className="case-study-partnership">
            <p>{currentContent.partnership}</p>
          </div>
        </div>

        {/* Customer Logos Section */}
        <div className="customer-logos-section">
          <h3 className="customer-logos-title">{currentContent.trustedBy}</h3>
          <div className="customer-logos-grid">
            <div className="customer-logo-item">
              <img
                src="/images/partners/fbm_logo.jpg"
                alt="FBM Hudson Italiana"
                className="customer-logo"
              />
            </div>
            {/* Placeholder for future logos */}
            <div className="customer-logo-placeholder"></div>
            <div className="customer-logo-placeholder"></div>
            <div className="customer-logo-placeholder"></div>
          </div>
        </div>

        {/* View All CTA */}
        <div className="case-studies-cta">
          <a href="/case-studies" className="cta-button">
            {currentContent.viewAllCta}
            <span className="cta-arrow">→</span>
          </a>
        </div>
      </div>
    </section>
  );
};

export default ClientSuccess;
