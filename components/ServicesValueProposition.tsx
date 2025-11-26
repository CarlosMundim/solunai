'use client';

import React from 'react';
import { Users, Search, Clock, Coins } from 'lucide-react';
import './ServicesValueProposition.css';

interface ServicesValuePropositionProps {
  lang: 'ja' | 'en';
}

const challengeIcons = {
  workforce: Users,
  talent: Search,
  hiring: Clock,
  cost: Coins
};

const ServicesValueProposition: React.FC<ServicesValuePropositionProps> = ({ lang }) => {
  const content = {
    ja: {
      title: '"AI + エンジニア" = 完全な変革',
      subtitle: 'なぜこれが重要なのか',
      mainMessage: '日本の中小企業は、AIやML専門家を採用できません。Solunaiは、テクノロジーと人材の両方を提供します。',
      challenges: [
        {
          iconKey: 'workforce',
          title: '高齢化する労働力',
          description: '28%が60歳以上',
          impact: '若者は工場勤務を敬遠（3K：きつい、汚い、危険）'
        },
        {
          iconKey: 'talent',
          title: 'AI/ML人材不足',
          description: '地域で採用不可能',
          impact: '東京でも限定的な人材プール'
        },
        {
          iconKey: 'hiring',
          title: '従来の採用は遅い',
          description: '4-6ヶ月のサイクル',
          impact: 'その間に競合他社が先行'
        },
        {
          iconKey: 'cost',
          title: '高額な人件費',
          description: '年間¥10M-¥15M/人',
          impact: '5人で年間¥60Mのコスト'
        }
      ],
      solution: {
        title: 'Solunaiのソリューション',
        subtitle: '構築できないAI技術 + 採用できないエンジニア',
        benefits: [
          {
            title: '即座のアクセス',
            description: '2-6週間でワールドクラスのエンジニアを配備',
            metric: '52倍速い'
          },
          {
            title: '専門スキル',
            description: 'ML、Computer Vision、自動化、データサイエンス',
            metric: '5つの専門カテゴリー'
          },
          {
            title: '柔軟性',
            description: 'プロジェクトベースの契約、必要に応じて拡張・縮小',
            metric: '固定費なし'
          },
          {
            title: 'コスト削減',
            description: '従来の正社員採用と比較して30-40%削減',
            metric: '年間¥35M-¥45M節約'
          }
        ]
      }
    },
    en: {
      title: '"AI + Engineers" = Complete Transformation',
      subtitle: 'Why This Matters',
      mainMessage: 'Japanese SMEs cannot hire AI/ML specialists. Solunai provides both the technology AND the talent.',
      challenges: [
        {
          iconKey: 'workforce',
          title: 'Aging Workforce',
          description: '28% over 60 years old',
          impact: 'Youth avoiding factory jobs (3K: Kitanai, Kitsui, Kiken)'
        },
        {
          iconKey: 'talent',
          title: 'AI/ML Talent Shortage',
          description: 'Cannot hire locally',
          impact: 'Limited talent pool even in Tokyo'
        },
        {
          iconKey: 'hiring',
          title: 'Slow Traditional Hiring',
          description: '4-6 month cycle',
          impact: 'Competitors move ahead during delay'
        },
        {
          iconKey: 'cost',
          title: 'Expensive Salaries',
          description: '¥10M-¥15M per year/engineer',
          impact: '5 engineers = ¥60M annually'
        }
      ],
      solution: {
        title: 'Solunai Solution',
        subtitle: 'AI technology you cannot build + Engineers you cannot hire',
        benefits: [
          {
            title: 'Immediate Access',
            description: 'World-class engineers deployed in 2-6 weeks',
            metric: '52x Faster'
          },
          {
            title: 'Specialized Skills',
            description: 'ML, Computer Vision, Automation, Data Science',
            metric: '5 Specialty Categories'
          },
          {
            title: 'Flexibility',
            description: 'Project-based contracts, scale up/down as needed',
            metric: 'Zero Fixed Costs'
          },
          {
            title: 'Cost Reduction',
            description: '30-40% lower than traditional permanent hiring',
            metric: '¥35M-¥45M Saved/Year'
          }
        ]
      }
    }
  };

  const currentContent = content[lang];

  return (
    <section className="services-value-proposition">
      <div className="vp-container">
        <div className="vp-header">
          <h2 className="vp-title">{currentContent.title}</h2>
          <p className="vp-subtitle">{currentContent.subtitle}</p>
          <p className="vp-main-message">{currentContent.mainMessage}</p>
        </div>

        <div className="challenges-section">
          <div className="challenges-grid">
            {currentContent.challenges.map((challenge, index) => {
              const IconComponent = challengeIcons[challenge.iconKey as keyof typeof challengeIcons];
              return (
                <div key={index} className="challenge-card">
                  <div className="challenge-icon">
                    <IconComponent size={32} strokeWidth={1.5} />
                  </div>
                  <h3 className="challenge-title">{challenge.title}</h3>
                  <p className="challenge-description">{challenge.description}</p>
                  <p className="challenge-impact">{challenge.impact}</p>
                </div>
              );
            })}
          </div>
        </div>

        <div className="solution-section">
          <div className="solution-header">
            <h3 className="solution-title">{currentContent.solution.title}</h3>
            <p className="solution-subtitle">{currentContent.solution.subtitle}</p>
          </div>

          <div className="benefits-grid">
            {currentContent.solution.benefits.map((benefit, index) => (
              <div key={index} className="benefit-card">
                <div className="benefit-metric">{benefit.metric}</div>
                <h4 className="benefit-title">{benefit.title}</h4>
                <p className="benefit-description">{benefit.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ServicesValueProposition;
