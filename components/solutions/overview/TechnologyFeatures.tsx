'use client';

import React from 'react';
import './TechnologyFeatures.css';

interface TechnologyFeaturesProps {
  lang: 'ja' | 'en';
}

const TechnologyFeatures: React.FC<TechnologyFeaturesProps> = ({ lang }) => {
  const content = {
    ja: {
      heading: '業界をリードする技術',
      features: [
        {
          title: 'オールインワン産業AI',
          description: '生データからスマートな意思決定まで、フルスタックを構築済み。複数のツールをつなぎ合わせる必要はありません。すべてがここに揃っています。'
        },
        {
          title: 'リアルタイム運用対応',
          description: 'ストリーミングアーキテクチャが、すべてのインサイトとアプリをライブデータで駆動。リアルタイムの意思決定と優れた成果を実現します。'
        },
        {
          title: 'スタック全体で機能するAI',
          description: 'システム接続からオペレーター支援まで、エージェントがあらゆるレベルで作業を自動化・加速します。'
        },
        {
          title: '統合データ基盤',
          description: '混乱したサイロ化されたデータを、生産プロセス全体でクリーンで一貫性のあるスキーマに変換。スケーラブルで信頼性の高いAIのための一貫した構造化データ基盤。'
        },
        {
          title: 'エンタープライズ規模のスケール',
          description: 'テンプレート化されたパイプライン、統合データ管理ツール、自動アプリケーション更新により、スケーリングが容易に。'
        },
        {
          title: 'セキュリティ&コンプライアンス',
          description: 'ISO 27001、SOC 2準拠のエンタープライズグレードセキュリティ。日本の製造業基準に対応したデータ保護とプライバシー管理を標準装備。'
        }
      ]
    },
    en: {
      heading: 'Industry-Leading Technology',
      features: [
        {
          title: 'All-in-One Industrial AI',
          description: 'We\'ve built the full stack — from raw data to smart decisions — so you don\'t have to stitch together a bunch of tools. It\'s all here, ready to go.'
        },
        {
          title: 'Built for Real-Time Operations',
          description: 'Streaming architecture powers every insight and app with live data. That means real-time decisions and better outcomes.'
        },
        {
          title: 'AI That Works Across the Stack',
          description: 'From connecting systems to guiding operators, agents automate and accelerate work at every level.'
        },
        {
          title: 'Unified Data Foundation',
          description: 'Turn messy, siloed data into clean, consistent schemas across your production processes. Consistently structured data foundation for scalable and reliable AI.'
        },
        {
          title: 'Enterprise-Wide Scale',
          description: 'Templated pipelines, integrated data management tools, and automated application updates make scaling effortless.'
        },
        {
          title: 'Security & Compliance',
          description: 'Enterprise-grade security with ISO 27001 and SOC 2 compliance. Data protection and privacy management aligned with Japanese manufacturing standards, built-in by default.'
        }
      ]
    }
  };

  const t = content[lang];

  return (
    <section className="technology-features">
      <div className="technology-features-container">
        <h2 className="technology-features-heading">{t.heading}</h2>

        <div className="technology-features-grid">
          {t.features.map((feature, index) => (
            <div key={index} className="technology-feature-card">
              <h3 className="technology-feature-title">{feature.title}</h3>
              <p className="technology-feature-description">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TechnologyFeatures;
