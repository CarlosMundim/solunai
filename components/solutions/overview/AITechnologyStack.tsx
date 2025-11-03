'use client';

import React from 'react';
import './AITechnologyStack.css';

interface AITechnologyStackProps {
  lang: 'ja' | 'en';
}

const AITechnologyStack: React.FC<AITechnologyStackProps> = ({ lang }) => {
  const content = {
    ja: {
      heading: '業界をリードするAI技術',
      cards: [
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
        }
      ]
    },
    en: {
      heading: 'Industry-Leading AI Technology',
      cards: [
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
        }
      ]
    }
  };

  const t = content[lang];

  return (
    <section className="ai-technology-stack">
      <div className="ai-technology-stack-container">
        <h2 className="ai-technology-stack-heading">{t.heading}</h2>

        <div className="ai-technology-stack-scroll-container">
          <div className="ai-technology-stack-cards">
            {t.cards.map((card, index) => (
              <div key={index} className="ai-tech-card">
                <h3 className="ai-tech-card-title">{card.title}</h3>
                <p className="ai-tech-card-description">{card.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default AITechnologyStack;
