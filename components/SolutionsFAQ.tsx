'use client';

import React, { useState } from 'react';
import './SolutionsFAQ.css';

interface SolutionsFAQProps {
  lang: 'ja' | 'en';
}

const SolutionsFAQ: React.FC<SolutionsFAQProps> = ({ lang }) => {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const content = {
    ja: {
      title: 'よくある質問',
      subtitle: 'ソリューション導入に関する疑問にお答えします',
      faqs: [
        {
          question: '最小企業規模は？どのような企業が最適ですか？',
          answer: '従業員50-500名の中小規模製造業が最適です。受注生産型、設備集約型、精密製造など、製造プロセスの自動化・最適化が効果的な企業に最適です。年間売上¥1B以上の企業で最も高いROIが得られます。'
        },
        {
          question: '既存のERPシステムと統合できますか？',
          answer: 'はい、ほとんどの主要ERPシステムと統合可能です。SAP、Oracle、Microsoft Dynamics、国産ERP（勘定奉行、弥生会計など）に対応しています。API連携またはデータベース直接接続により、既存システムとシームレスに統合します。'
        },
        {
          question: 'エンジニアリングサポートはどのように提供されますか？',
          answer: 'WorldEmp経由で現場エンジニアを2-6週間で配備可能です。日本語対応可能なエンジニアを含め、機械工学、電気工学、ソフトウェアエンジニアなど、プロジェクトに必要な専門人材を迅速に提供します。'
        },
        {
          question: 'データセキュリティとプライバシーはどのように保護されますか？',
          answer: 'エンタープライズグレードのセキュリティを提供します。ISO 27001認証、SOC 2準拠、GDPR準拠のクラウド基盤（Microsoft Azure）を使用。データは日本国内データセンターに保存可能で、暗号化、アクセス制御、定期的なセキュリティ監査を実施しています。'
        },
        {
          question: '支払い条件はどのようになりますか？',
          answer: 'フェーズゲート方式のマイルストーン払いを採用しています。初期設計完了時30%、プラットフォーム導入完了時30%、稼働開始時30%、引継ぎ完了時10%という形で、成果に応じた段階的な支払いが可能です。リース・割賦払いも対応可能です。'
        },
        {
          question: 'ROIはどのくらいで達成できますか？',
          answer: 'ソリューションにより異なりますが、3-12ヶ月で投資回収が開始します。AI見積自動化は4-6ヶ月、予知保全とコンピュータビジョンQCは6-12ヶ月、AI生産計画は9-12ヶ月が標準的な投資回収期間です。'
        }
      ]
    },
    en: {
      title: 'Frequently Asked Questions',
      subtitle: 'Answers to common questions about our solutions',
      faqs: [
        {
          question: 'What is the minimum company size? What type of company is ideal?',
          answer: 'Companies with 50-500 employees are ideal. Make-to-order, equipment-intensive, and precision manufacturing companies where automation and optimization are most effective see the best results. Companies with annual revenue above ¥1B achieve the highest ROI.'
        },
        {
          question: 'Can you integrate with our existing ERP system?',
          answer: 'Yes, we integrate with most major ERP systems including SAP, Oracle, Microsoft Dynamics, and Japanese ERPs (Kaikei Bugyou, Yayoi, etc.). We use API integration or direct database connections for seamless integration with your existing systems.'
        },
        {
          question: 'How is engineering support provided?',
          answer: 'We deploy on-site engineers through WorldEmp within 2-6 weeks. This includes Japanese-speaking engineers with expertise in mechanical, electrical, and software engineering, providing the specialized talent your project needs.'
        },
        {
          question: 'How is data security and privacy protected?',
          answer: 'We provide enterprise-grade security: ISO 27001 certified, SOC 2 compliant, GDPR compliant cloud infrastructure (Microsoft Azure). Data can be stored in Japanese data centers with encryption, access controls, and regular security audits.'
        },
        {
          question: 'What are the payment terms?',
          answer: 'We use phase-gate milestone payments: 30% upon design completion, 30% upon platform deployment, 30% upon go-live, and 10% upon handoff completion. This ensures payments are tied to delivered results. Leasing and installment payment options are also available.'
        },
        {
          question: 'How quickly can we achieve ROI?',
          answer: 'Varies by solution, but payback begins within 3-12 months. AI Quotation Automation: 4-6 months, Predictive Maintenance and Computer Vision QC: 6-12 months, AI Production Scheduling: 9-12 months are typical payback periods.'
        }
      ]
    }
  };

  const currentContent = content[lang];

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="solutions-faq-section">
      <div className="faq-container">
        <div className="faq-header">
          <h2>{currentContent.title}</h2>
          <p>{currentContent.subtitle}</p>
        </div>

        <div className="faq-list">
          {currentContent.faqs.map((faq, index) => (
            <div
              key={index}
              className={`faq-item ${openIndex === index ? 'open' : ''}`}
            >
              <button
                className="faq-question"
                onClick={() => toggleFAQ(index)}
              >
                <span>{faq.question}</span>
                <span className="faq-icon">{openIndex === index ? '−' : '+'}</span>
              </button>
              <div className="faq-answer">
                <p>{faq.answer}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SolutionsFAQ;
