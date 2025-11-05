'use client';

import React from 'react';
import Link from 'next/link';
import './BecomeACaseStudy.css';

interface BecomeACaseStudyProps {
  lang: 'ja' | 'en';
}

const BecomeACaseStudy: React.FC<BecomeACaseStudyProps> = ({ lang }) => {
  const content = {
    ja: {
      title: '次の成功事例になりませんか',
      subtitle: 'AI駆動の製造業変革で、測定可能な結果を達成しましょう',
      benefits: [
        '無料コンサルテーション',
        'カスタマイズされたAIソリューション',
        '政府支援プログラムへのアクセス',
        '実証済みのROI（4-7ヶ月で投資回収）',
      ],
      button: 'お問い合わせ',
      contactLink: '/contact',
    },
    en: {
      title: 'Become Our Next Success Story',
      subtitle: 'Achieve measurable results with AI-driven manufacturing transformation',
      benefits: [
        'Free consultation',
        'Customized AI solutions',
        'Access to government support programs',
        'Proven ROI (payback in 4-7 months)',
      ],
      button: 'Get Started',
      contactLink: '/en/contact',
    },
  };

  const text = content[lang];

  return (
    <section className="become-case-study">
      <div className="become-case-study-container">
        <div className="become-case-study-content">
          <h2 className="become-case-study-title">{text.title}</h2>
          <p className="become-case-study-subtitle">{text.subtitle}</p>

          <ul className="benefits-list">
            {text.benefits.map((benefit, index) => (
              <li key={index} className="benefit-item">
                <span className="benefit-icon">✓</span>
                <span className="benefit-text">{benefit}</span>
              </li>
            ))}
          </ul>

          <Link href={text.contactLink} className="become-case-study-button">
            {text.button}
          </Link>
        </div>
      </div>
    </section>
  );
};

export default BecomeACaseStudy;
