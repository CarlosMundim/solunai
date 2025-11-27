'use client';

import React from 'react';
import Link from 'next/link';
import { FileText, MessageSquare, Mail } from 'lucide-react';
import './CompanyCTA.css';

interface CompanyCTAProps {
  lang: 'ja' | 'en';
}

const ctaIcons = {
  download: FileText,
  consult: MessageSquare,
  contact: Mail,
};

const CompanyCTA: React.FC<CompanyCTAProps> = ({ lang }) => {
  const content = {
    ja: {
      title: 'お問い合わせ・ご相談',
      subtitle: 'デジタルツイン導入に関するご相談や詳細な会社情報について、お気軽にお問い合わせください',

      actions: [
        {
          title: '資料請求',
          description: '会社概要・サービス資料をダウンロード',
          buttonText: '資料をダウンロード',
          buttonLink: '#download',
          iconKey: 'download',
          type: 'secondary'
        },
        {
          title: '無料相談',
          description: 'デジタルツイン導入のご相談を承ります',
          buttonText: '相談を申し込む',
          buttonLink: '#contact',
          iconKey: 'consult',
          type: 'primary'
        },
        {
          title: 'お問い合わせ',
          description: '製品・サービスに関するご質問',
          buttonText: 'お問い合わせフォーム',
          buttonLink: '#contact',
          iconKey: 'contact',
          type: 'secondary'
        }
      ],

      trust: {
        title: '信頼の実績',
        items: [
          {
            value: '国際実績',
            label: '契約実績'
          },
          {
            value: 'ISO 27001',
            label: 'セキュリティ認証'
          },
          {
            value: '20+ years',
            label: 'WorldEmp実績'
          },
          {
            value: '高効率',
            label: '運営モデル'
          }
        ]
      }
    },

    en: {
      title: 'Contact & Consultation',
      subtitle: 'Reach out for digital twin implementation consultation or detailed company information',

      actions: [
        {
          title: 'Download Materials',
          description: 'Company profile & service brochures',
          buttonText: 'Download Materials',
          buttonLink: '#download',
          iconKey: 'download',
          type: 'secondary'
        },
        {
          title: 'Free Consultation',
          description: 'Discuss digital twin implementation',
          buttonText: 'Request Consultation',
          buttonLink: '#contact',
          iconKey: 'consult',
          type: 'primary'
        },
        {
          title: 'Contact Us',
          description: 'Questions about our products & services',
          buttonText: 'Contact Form',
          buttonLink: '#contact',
          iconKey: 'contact',
          type: 'secondary'
        }
      ],

      trust: {
        title: 'Proven Track Record',
        items: [
          {
            value: 'Global',
            label: 'Contract Track Record'
          },
          {
            value: 'ISO 27001',
            label: 'Security Certified'
          },
          {
            value: '20+ years',
            label: 'WorldEmp History'
          },
          {
            value: 'High Efficiency',
            label: 'Operating Model'
          }
        ]
      }
    }
  };

  const current = content[lang];

  return (
    <section className="company-cta-section">
      <div className="cta-container">
        <div className="cta-header">
          <h2>{current.title}</h2>
          <p className="subtitle">{current.subtitle}</p>
        </div>

        <div className="cta-actions">
          {current.actions.map((action, index) => {
            const IconComponent = ctaIcons[action.iconKey as keyof typeof ctaIcons];
            return (
              <div key={index} className={`cta-card ${action.type}`}>
                <div className="cta-icon">
                  <IconComponent size={32} strokeWidth={1.5} />
                </div>
                <h3>{action.title}</h3>
                <p>{action.description}</p>
                <a href={action.buttonLink} className={`cta-button ${action.type}`}>
                  {action.buttonText}
                </a>
              </div>
            );
          })}
        </div>

        <div className="trust-section">
          <h3>{current.trust.title}</h3>
          <div className="trust-grid">
            {current.trust.items.map((item, index) => (
              <div key={index} className="trust-item">
                <div className="trust-value">{item.value}</div>
                <div className="trust-label">{item.label}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default CompanyCTA;
