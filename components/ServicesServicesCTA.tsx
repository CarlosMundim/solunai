'use client';

import React from 'react';
import './ServicesServicesCTA.css';

interface ServicesServicesCTAProps {
  lang: 'ja' | 'en';
}

const ServicesServicesCTA: React.FC<ServicesServicesCTAProps> = ({ lang }) => {
  const content = {
    ja: {
      title: 'AI + エンジニアで製造業を変革しましょう',
      subtitle: '構築できないAI技術 + 採用できないエンジニア',
      benefits: [
        '2-6週間でワールドクラスのエンジニア配備',
        '30-40%のコスト削減（年間¥35M-¥45M節約）',
        'AI技術と人材の完全統合',
        '実証済みの実行力（€2.5M+ FBM Hudson）'
      ],
      actions: [
        {
          type: 'primary',
          text: '無料コンサルテーションを予約',
          description: 'AI + エンジニアがどのように課題を解決するか確認'
        },
        {
          type: 'secondary',
          text: 'サービス資料をダウンロード',
          description: '詳細な機能、価格、ROI情報'
        },
        {
          type: 'tertiary',
          text: 'カスタムROI分析を依頼',
          description: 'あなたの企業向けのコスト削減シミュレーション'
        }
      ],
      guarantee: '60日間の満足保証 | 返金可能'
    },
    en: {
      title: 'Transform Your Manufacturing with AI + Engineers',
      subtitle: 'AI technology you cannot build + Engineers you cannot hire',
      benefits: [
        'World-class engineers deployed in 2-6 weeks',
        '30-40% cost reduction (¥35M-¥45M saved annually)',
        'Complete integration of AI tech and talent',
        'Proven execution (€2.5M+ FBM Hudson)'
      ],
      actions: [
        {
          type: 'primary',
          text: 'Schedule Free Consultation',
          description: 'See how AI + Engineers solves your challenges'
        },
        {
          type: 'secondary',
          text: 'Download Services Brochure',
          description: 'Detailed features, pricing, and ROI info'
        },
        {
          type: 'tertiary',
          text: 'Request Custom ROI Analysis',
          description: 'Cost savings simulation for your company'
        }
      ],
      guarantee: '60-Day Satisfaction Guarantee | Money-Back Available'
    }
  };

  const currentContent = content[lang];

  return (
    <section className="services-services-cta">
      <div className="cta-container">
        <div className="cta-content">
          <h2 className="cta-title">{currentContent.title}</h2>
          <p className="cta-subtitle">{currentContent.subtitle}</p>

          <div className="cta-benefits">
            {currentContent.benefits.map((benefit, index) => (
              <div key={index} className="cta-benefit">
                <svg className="benefit-check-icon" viewBox="0 0 20 20" fill="currentColor">
                  <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                </svg>
                <span>{benefit}</span>
              </div>
            ))}
          </div>

          <div className="cta-actions">
            {currentContent.actions.map((action, index) => (
              <div key={index} className={`cta-action-card ${action.type}`}>
                <button className="cta-button">
                  {action.text}
                </button>
                <p className="cta-description">{action.description}</p>
              </div>
            ))}
          </div>

          <div className="cta-guarantee">
            <svg className="guarantee-icon" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
            </svg>
            <span>{currentContent.guarantee}</span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ServicesServicesCTA;
