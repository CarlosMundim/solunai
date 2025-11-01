'use client';

import React, { useState } from 'react';
import './ServicesServicesFAQ.css';

interface ServicesServicesFAQProps {
  lang: 'ja' | 'en';
}

const ServicesServicesFAQ: React.FC<ServicesServicesFAQProps> = ({ lang }) => {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const content = {
    ja: {
      title: 'よくある質問',
      subtitle: 'AI + エンジニアサービスについて',
      faqs: [
        {
          question: 'エンジニアはどのくらい早く配置できますか？',
          answer: '2-6週間で配置可能です。これは従来の採用（4-6ヶ月）と比較して52倍速いです。WorldEmpのグローバルネットワークにより、最適な専門家を迅速に選定し配置します。'
        },
        {
          question: 'エンジニアがうまくいかなかった場合はどうなりますか？',
          answer: '柔軟な契約体制により、1週間以内に交代を保証します。WorldEmpは厳格な品質管理を行っており、すべてのエンジニアは事前にスクリーニングされています。満足いただけない場合は、追加費用なしで交代します。'
        },
        {
          question: 'コストはどのくらいですか？',
          answer: '従来の日本の正社員採用と比較して30-40%低いコストです。5人のエンジニアの場合、従来は年間¥60M（給与のみ）かかりますが、Solunai + WorldEmpでは年間¥25M-¥35Mで完全なソリューションが提供されます。'
        },
        {
          question: 'エンジニアはどの言語を話しますか？',
          answer: 'すべてのエンジニアは英語が堪能です。日本語対応のエンジニアも利用可能で、技術分野での専門用語に精通しています。必要に応じて通訳サポートも提供します。'
        },
        {
          question: 'エンジニアを正社員として採用できますか？',
          answer: 'はい、プロジェクト完了後に正社員として採用するオプションがあります。エンジニアとの相性を確認してから長期雇用を決定できるため、採用リスクが大幅に軽減されます。'
        },
        {
          question: 'どのような専門分野のエンジニアが利用できますか？',
          answer: '5つの主要カテゴリー：機械学習エンジニア、コンピュータビジョン専門家、自動化エンジニア、データサイエンティスト、製造プロセスエンジニア。各カテゴリーに経験豊富な専門家が複数名います。'
        },
        {
          question: '最小契約期間はありますか？',
          answer: 'プロジェクトベースの柔軟な契約です。通常、初期実装は3-6ヶ月ですが、その後は必要に応じてスケールアップ・ダウンが可能です。固定期間の縛りはありません。'
        },
        {
          question: 'エンジニアは現場に常駐しますか、それともリモートですか？',
          answer: 'プロジェクトのニーズに応じて両方可能です。初期実装フェーズでは現場常駐を推奨し、その後はハイブリッドまたはリモートサポートに移行します。'
        }
      ]
    },
    en: {
      title: 'Frequently Asked Questions',
      subtitle: 'About AI + Engineering Services',
      faqs: [
        {
          question: 'How quickly can engineers be deployed?',
          answer: '2-6 weeks deployment time. This is 52x faster than traditional hiring (4-6 months). WorldEmp\'s global network allows rapid identification and placement of optimal specialists.'
        },
        {
          question: 'What if engineers don\'t work out?',
          answer: 'Flexible contracts with 1-week replacement guarantee. WorldEmp maintains strict quality control and all engineers are pre-screened. If you\'re not satisfied, we replace them at no additional cost.'
        },
        {
          question: 'How much does it cost?',
          answer: '30-40% lower than traditional Japanese permanent hiring. For 5 engineers, traditional costs ¥60M/year (salaries only), while Solunai + WorldEmp provides complete solution for ¥25M-¥35M annually.'
        },
        {
          question: 'What languages do engineers speak?',
          answer: 'All engineers are fluent in English. Japanese-speaking engineers are available and familiar with technical terminology. Translation support provided as needed.'
        },
        {
          question: 'Can we hire engineers permanently?',
          answer: 'Yes, conversion option available after project completion. This allows you to verify compatibility before long-term commitment, significantly reducing hiring risk.'
        },
        {
          question: 'What specialties are available?',
          answer: '5 main categories: Machine Learning Engineers, Computer Vision Specialists, Automation Engineers, Data Scientists, and Manufacturing Process Engineers. Multiple experienced specialists in each category.'
        },
        {
          question: 'Is there a minimum contract period?',
          answer: 'Flexible project-based contracts. Typical initial implementation is 3-6 months, with scale-up/down options afterward. No fixed-term commitments required.'
        },
        {
          question: 'Are engineers on-site or remote?',
          answer: 'Both options available based on project needs. On-site presence recommended for initial implementation, transitioning to hybrid or remote support afterward.'
        }
      ]
    }
  };

  const currentContent = content[lang];

  return (
    <section className="services-services-faq">
      <div className="faq-container">
        <div className="faq-header">
          <h2 className="faq-title">{currentContent.title}</h2>
          <p className="faq-subtitle">{currentContent.subtitle}</p>
        </div>

        <div className="faq-list">
          {currentContent.faqs.map((faq, index) => (
            <div key={index} className={`faq-item ${openIndex === index ? 'open' : ''}`}>
              <button
                className="faq-question"
                onClick={() => setOpenIndex(openIndex === index ? null : index)}
              >
                <span>{faq.question}</span>
                <svg
                  className="faq-icon"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M19 9l-7 7-7-7"
                  />
                </svg>
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

export default ServicesServicesFAQ;
