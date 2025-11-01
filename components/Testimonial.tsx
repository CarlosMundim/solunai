'use client';

import React from 'react';
import './Testimonial.css';

interface TestimonialProps {
  lang: 'ja' | 'en';
}

const Testimonial: React.FC<TestimonialProps> = ({ lang }) => {
  const content = {
    ja: {
      heading: 'お客様の声',
      quote: 'Solunaiのデジタル変革ソリューションは、私たちのビジネスを根本から変えました。見積プロセスが10分から1分未満に短縮され、ほぼエラーゼロを実現。このテクノロジーは、顧客問い合わせへの対応において競争優位性を提供します。',
      author: '営業ディレクター',
      company: 'FBM Hudson Italiana',
      status: {
        label: 'プロジェクト状況',
        value: '進行中、フェーズ1完了、フェーズ2展開中'
      },
      expansion: {
        label: '拡大計画',
        value: '2026年に予知保全モジュールへ拡大予定'
      }
    },
    en: {
      heading: 'Client Testimonial',
      quote: 'Solunai\'s digital transformation solution has fundamentally changed our business. The quotation process has been reduced from 10 minutes to less than 1 minute, achieving near-zero errors. This technology provides us with a competitive advantage in responding to customer inquiries.',
      author: 'Sales Director',
      company: 'FBM Hudson Italiana',
      status: {
        label: 'Project Status',
        value: 'In progress, Phase 1 complete, Phase 2 deploying'
      },
      expansion: {
        label: 'Expansion Plan',
        value: 'Scaling to predictive maintenance modules in 2026'
      }
    }
  };

  const currentContent = content[lang];

  return (
    <section className="testimonial">
      <div className="testimonial-container">
        <h2 className="testimonial-heading">{currentContent.heading}</h2>

        <div className="testimonial-content">
          <div className="quote-mark">"</div>
          <blockquote className="testimonial-quote">
            {currentContent.quote}
          </blockquote>

          <div className="testimonial-attribution">
            <div className="author-info">
              <div className="author-name">{currentContent.author}</div>
              <div className="author-company">{currentContent.company}</div>
            </div>
          </div>

          <div className="project-info">
            <div className="info-item">
              <div className="info-label">{currentContent.status.label}</div>
              <div className="info-value">{currentContent.status.value}</div>
            </div>
            <div className="info-item">
              <div className="info-label">{currentContent.expansion.label}</div>
              <div className="info-value">{currentContent.expansion.value}</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonial;
