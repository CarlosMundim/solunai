'use client';

import React from 'react';
import Image from 'next/image';
import './FBMCaseStudy.css';

interface FBMCaseStudyProps {
  lang: 'ja' | 'en';
}

const FBMCaseStudy: React.FC<FBMCaseStudyProps> = ({ lang }) => {
  const content = {
    ja: {
      badge: '実績紹介',
      heading: 'FBM Hudson Italiana での実績',
      subheading: '84年の歴史を持つイタリアの熱交換器メーカーのデジタル変革を支援',
      clientInfo: {
        name: 'FBM Hudson Italiana',
        industry: '産業用熱交換器製造',
        location: 'イタリア・ベルガモ',
        founded: '1941年設立（84年の実績）',
        markets: 'Oil & Gas / LNG / 石油化学プラント'
      },
      challenge: {
        title: '課題',
        problems: [
          '複雑な熱工学計算に14〜21日かかる見積作成プロセス',
          'ベテラン技術者への知識集中とノウハウのブラックボックス化',
          '顧客ごとのカスタム設計による設計工数の増大',
          'アジア競合との価格競争に対する競争力強化の必要性'
        ]
      },
      solution: {
        title: 'Solunaiのソリューション',
        approach: [
          'AI搭載の熱工学自動見積システムを開発',
          '空冷式熱交換器の構成最適化を自動化',
          '熱負荷計算・材料選定・コスト見積を統合',
          'PhD レベルの熱工学知識をシステムに組み込み'
        ]
      },
      results: {
        title: '成果',
        metrics: [
          {
            value: '14-21日 → 48-72時間',
            label: '見積作成期間を大幅短縮'
          },
          {
            value: '15-25%',
            label: '生産コスト削減（予測）'
          },
          {
            value: '200%',
            label: '技術スループット向上'
          },
          {
            value: '2025年10月',
            label: '契約締結・プロジェクト開始'
          }
        ]
      },
      technology: {
        title: '実装技術',
        stack: [
          'デジタルツイン製品次元：見積システムとしての統合',
          'オントロジーベース情報モデリング（学術研究フレームワーク準拠）',
          'AI による設計バリデーションと最適化',
          'カスタマイゼーション最適化エンジン'
        ]
      },
      significance: {
        title: 'プロジェクトの意義',
        points: [
          '**実在する国際顧客**：政府融資申請における実績証明',
          '**PhD レベルの技術実装**：高度な熱工学自動化の実証',
          '**輸出実績**：イタリア市場での契約獲得',
          '**即時収益化**：契約締結により収益開始',
          '**技術検証完了**：中小製造業へ展開可能な技術基盤の確立'
        ]
      }
    },
    en: {
      badge: 'Case Study',
      heading: 'FBM Hudson Italiana Success Story',
      subheading: 'Supporting digital transformation for an 84-year heritage Italian heat exchanger manufacturer',
      clientInfo: {
        name: 'FBM Hudson Italiana',
        industry: 'Industrial Heat Exchanger Manufacturing',
        location: 'Bergamo, Italy',
        founded: 'Established 1941 (84 years of excellence)',
        markets: 'Oil & Gas / LNG / Petrochemical Plants'
      },
      challenge: {
        title: 'Challenge',
        problems: [
          'Quote creation process requiring 14-21 days for complex thermal engineering calculations',
          'Knowledge concentration in senior engineers and black-box expertise',
          'Increased engineering hours due to custom design for each customer',
          'Need for competitive advantage against Asian price competitors'
        ]
      },
      solution: {
        title: 'Solunai Solution',
        approach: [
          'Developed AI-powered thermal engineering quotation system',
          'Automated air-cooled heat exchanger configuration optimization',
          'Integrated thermal load calculations, material selection, and cost estimation',
          'Embedded PhD-level thermal engineering knowledge into the system'
        ]
      },
      results: {
        title: 'Results',
        metrics: [
          {
            value: '14-21 days → 48-72 hours',
            label: 'Quote creation time dramatically reduced'
          },
          {
            value: '15-25%',
            label: 'Production cost reduction (projected)'
          },
          {
            value: '200%',
            label: 'Engineering throughput improvement'
          },
          {
            value: 'October 2025',
            label: 'Contract signed, project launched'
          }
        ]
      },
      technology: {
        title: 'Implementation Technology',
        stack: [
          'Digital Twin Product Dimension: Integration as quotation system',
          'Ontology-based information modeling (academic research framework compliant)',
          'AI-powered design validation and optimization',
          'Customization optimization engine'
        ]
      },
    }
  };

  const t = content[lang];

  return (
    <section className="fbm-case-study">
      <div className="fbm-case-study-container">
        <div className="fbm-badge">{t.badge}</div>
        <h2 className="fbm-heading">{t.heading}</h2>
        <p className="fbm-subheading">{t.subheading}</p>

        <div className="fbm-client-card">
          <div className="client-logo-wrapper">
            <Image
              src="/logos/fbm_logo.jpg"
              alt="FBM Hudson Italiana"
              width={500}
              height={200}
              className="client-logo"
              style={{ objectFit: 'contain' }}
            />
          </div>
          <h3 className="client-name">{t.clientInfo.name}</h3>
          <div className="client-details">
            <div className="client-detail">
              <strong>{lang === 'ja' ? '業種' : 'Industry'}:</strong> {t.clientInfo.industry}
            </div>
            <div className="client-detail">
              <strong>{lang === 'ja' ? '所在地' : 'Location'}:</strong> {t.clientInfo.location}
            </div>
            <div className="client-detail">
              <strong>{lang === 'ja' ? '創業' : 'Founded'}:</strong> {t.clientInfo.founded}
            </div>
            <div className="client-detail">
              <strong>{lang === 'ja' ? '主要市場' : 'Markets'}:</strong> {t.clientInfo.markets}
            </div>
          </div>
        </div>

        <div className="fbm-content-grid">
          <div className="fbm-section challenge-section">
            <h3 className="fbm-section-title">{t.challenge.title}</h3>
            <ul className="fbm-list">
              {t.challenge.problems.map((problem, index) => (
                <li key={index}>{problem}</li>
              ))}
            </ul>
          </div>

          <div className="fbm-section solution-section">
            <h3 className="fbm-section-title">{t.solution.title}</h3>
            <ul className="fbm-list">
              {t.solution.approach.map((item, index) => (
                <li key={index}>{item}</li>
              ))}
            </ul>
          </div>
        </div>

        <div className="fbm-results">
          <h3 className="fbm-results-title">{t.results.title}</h3>
          <div className="results-metrics">
            {t.results.metrics.map((metric, index) => (
              <div key={index} className="metric-card">
                <div className="metric-value">{metric.value}</div>
                <div className="metric-label">{metric.label}</div>
              </div>
            ))}
          </div>
        </div>

        <div className="fbm-technology">
          <h3 className="fbm-technology-title">{t.technology.title}</h3>
          <div className="technology-stack">
            {t.technology.stack.map((tech, index) => (
              <div key={index} className="tech-item">
                <span className="tech-bullet">▸</span>
                {tech}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default FBMCaseStudy;
