'use client';

import React from 'react';
import './OtherCaseStudies.css';

interface OtherCaseStudiesProps {
  lang: 'ja' | 'en';
}

const OtherCaseStudies: React.FC<OtherCaseStudiesProps> = ({ lang }) => {
  const content = {
    ja: {
      title: 'その他の成功事例',
      caseStudies: [
        {
          client: 'Tredic SMR Co., Ltd.',
          industry: 'スマート製造',
          challenge: '生産の非効率性と高い保全コスト',
          solution: 'スマート製造AIプラットフォーム + 150 IoTセンサー',
          results: [
            'OEE改善: 25%',
            '保全コスト削減: 35%',
            '契約期間: 36ヶ月',
          ],
          value: '¥58M',
          icon: '◆',
        },
        {
          client: 'WorldEmp K.K.',
          industry: 'グローバルエンジニアリング人材マッチング',
          challenge: 'グローバルエンジニアリング人材不足',
          solution: '47-Dimensions AI人材マッチングプラットフォーム',
          results: [
            'ユーザー数: 2,000人',
            '人材マッチング高速化: 70%',
            '契約期間: 36ヶ月',
          ],
          value: '¥65M',
          icon: '◆',
        },
      ],
      readMore: '詳細を見る',
    },
    en: {
      title: 'Other Success Stories',
      caseStudies: [
        {
          client: 'Tredic SMR Co., Ltd.',
          industry: 'Smart Manufacturing',
          challenge: 'Production inefficiency and high maintenance costs',
          solution: 'Smart Manufacturing AI Platform + 150 IoT sensors',
          results: [
            '25% OEE improvement',
            '35% maintenance cost reduction',
            'Contract period: 36 months',
          ],
          value: '¥58M',
          icon: '◆',
        },
        {
          client: 'WorldEmp K.K.',
          industry: 'Global Engineering Talent Matching',
          challenge: 'Global engineering talent shortage',
          solution: '47-Dimensions AI Talent Matching Platform',
          results: [
            '2,000 users',
            '70% faster talent matching',
            'Contract period: 36 months',
          ],
          value: '¥65M',
          icon: '◆',
        },
      ],
      readMore: 'Read More',
    },
  };

  const text = content[lang];

  return (
    <section className="other-case-studies">
      <div className="other-case-studies-container">
        <h2 className="other-case-studies-title">{text.title}</h2>

        <div className="case-studies-grid">
          {text.caseStudies.map((caseStudy, index) => (
            <div key={index} className="case-study-card">
              <div className="case-study-icon">{caseStudy.icon}</div>

              <div className="case-study-header-info">
                <h3 className="case-study-client">{caseStudy.client}</h3>
                <p className="case-study-industry">{caseStudy.industry}</p>
                <p className="case-study-value">{caseStudy.value}</p>
              </div>

              <div className="case-study-details">
                <div className="detail-section">
                  <h4 className="detail-title">
                    {lang === 'ja' ? '課題' : 'Challenge'}
                  </h4>
                  <p className="detail-text">{caseStudy.challenge}</p>
                </div>

                <div className="detail-section">
                  <h4 className="detail-title">
                    {lang === 'ja' ? 'ソリューション' : 'Solution'}
                  </h4>
                  <p className="detail-text">{caseStudy.solution}</p>
                </div>

                <div className="detail-section">
                  <h4 className="detail-title">
                    {lang === 'ja' ? '結果' : 'Results'}
                  </h4>
                  <ul className="results-list">
                    {caseStudy.results.map((result, rIndex) => (
                      <li key={rIndex} className="result-item">
                        <span className="result-bullet">✓</span> {result}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default OtherCaseStudies;
