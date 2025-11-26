'use client';

import React from 'react';
import './ClientSuccess.css';

interface ClientSuccessProps {
  lang: 'ja' | 'en';
}

const ClientSuccess: React.FC<ClientSuccessProps> = ({ lang }) => {
  const content = {
    ja: {
      badge: 'ケーススタディ',
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
      partnership: 'WorldEmp（オランダ・インド・日本）のグローバルエンジニアと連携し、スムーズな実装を実現'
    },
    en: {
      badge: 'Case Study',
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
      partnership: 'Smooth implementation achieved through collaboration with WorldEmp global engineers (Netherlands, India, Japan)'
    }
  };

  const currentContent = content[lang];

  return (
    <section className="client-success-section" aria-label={lang === 'ja' ? 'クライアント成功事例' : 'Client Success'}>
      <div className="client-success-container">
        <div className="success-badge">{currentContent.badge}</div>

        <div className="fbm-logo-container">
          <img
            src="/images/partners/fbm_logo.jpg"
            alt="FBM Hudson Italiana Logo"
            className="fbm-logo"
          />
        </div>

        <h2 className="success-title">{currentContent.title}</h2>
        <p className="success-subtitle">{currentContent.subtitle}</p>

        <div className="success-content-grid">
          {/* Challenge */}
          <div className="success-block">
            <h3 className="success-block-label">{currentContent.challenge.label}</h3>
            <p className="success-block-text">{currentContent.challenge.text}</p>
          </div>

          {/* Solution */}
          <div className="success-block">
            <h3 className="success-block-label">{currentContent.solution.label}</h3>
            <p className="success-block-text">{currentContent.solution.text}</p>
          </div>
        </div>

        {/* Results */}
        <div className="success-results">
          <h3 className="success-results-label">{currentContent.results.label}</h3>
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
        <div className="success-partnership">
          <p>{currentContent.partnership}</p>
        </div>
      </div>
    </section>
  );
};

export default ClientSuccess;
