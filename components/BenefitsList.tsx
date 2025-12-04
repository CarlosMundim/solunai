'use client';

import React from 'react';
import './BenefitsList.css';

interface BenefitsListProps {
  lang: 'ja' | 'en';
}

const BenefitsList: React.FC<BenefitsListProps> = ({ lang }) => {
  const content = {
    ja: {
      sectionTitle: 'Solunaiを使うと、こう変わる',
      benefits: [
        {
          title: '「辞める前に気づける」',
          description: '日報や会議メモから、社員のストレスサインを早めにキャッチ'
        },
        {
          title: '「引き継ぎが楽になる」',
          description: 'ベテランの知恵を、いつでも参照できる形で保存'
        },
        {
          title: '「同じ質問に何度も答えなくていい」',
          description: '社内ボットが、よくある質問に自動で回答'
        },
        {
          title: '「現場の声が、ちゃんと届く」',
          description: '日報の内容を要約し、経営層がすぐ把握できる形に'
        },
        {
          title: '「ITに詳しくなくても使える」',
          description: '専門知識は不要。既存のPCで、少しずつ始められる'
        },
        {
          title: '「大きな投資なしで試せる」',
          description: '無料相談から、小さくスタート可能'
        }
      ]
    },
    en: {
      sectionTitle: 'How Solunai Changes Your Workplace',
      benefits: [
        {
          title: '"Notice before they quit"',
          description: 'Catch early stress signals from daily reports and meeting notes'
        },
        {
          title: '"Handovers become easier"',
          description: 'Store veteran knowledge in a format anyone can access anytime'
        },
        {
          title: '"Stop answering the same questions"',
          description: 'Internal bot automatically handles common inquiries'
        },
        {
          title: '"Real voices reach leadership"',
          description: 'Summarize report content so executives can grasp it quickly'
        },
        {
          title: '"Use it without IT expertise"',
          description: 'No special knowledge needed. Start gradually with existing PCs'
        },
        {
          title: '"Try it without big investment"',
          description: 'Start small from a free consultation'
        }
      ]
    }
  };

  const currentContent = content[lang];

  return (
    <section className="benefits-list-section" aria-label={lang === 'ja' ? '導入効果' : 'Benefits'}>
      <div className="benefits-list-container">
        <h2 className="benefits-list-title">{currentContent.sectionTitle}</h2>
        <div className="benefits-grid">
          {currentContent.benefits.map((benefit, index) => (
            <div key={index} className="benefit-item">
              <div className="benefit-number">{String(index + 1).padStart(2, '0')}</div>
              <div className="benefit-content">
                <h3 className="benefit-title">{benefit.title}</h3>
                <p className="benefit-description">{benefit.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default BenefitsList;
