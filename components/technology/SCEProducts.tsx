'use client';

import React from 'react';
import './SCEProducts.css';

interface SCEProductsProps {
  lang: 'ja' | 'en';
}

const SCEProducts: React.FC<SCEProductsProps> = ({ lang }) => {
  const content = {
    ja: {
      title: 'SCE搭載ソリューション',
      subtitle: '当社の全ソリューションはSCEアーキテクチャで強化されています',
      products: [
        {
          name: 'デジタルツイン',
          description: '継続的な学習と長期記憶を備えた工場シミュレーション。セッション間でパラメータと最適化結果を保持。',
          link: '/solutions/digital-twin',
          icon: '🏭'
        },
        {
          name: 'コンピュータビジョン',
          description: '失敗パターンを記憶し、時間とともに精度を向上。同じエラーを繰り返さない品質検査AI。',
          link: '/solutions/computer-vision',
          icon: '👁️'
        },
        {
          name: '予知保全',
          description: '機器履歴の完全な継続性。過去の故障、修理、パターンを記憶し、予測精度を向上。',
          link: '/solutions/predictive-maintenance',
          icon: '🔧'
        },
        {
          name: '生産最適化',
          description: '長期的な生産データの継続性。季節変動、過去の最適化試行、成功パターンを活用。',
          link: '/solutions/production-optimization',
          icon: '📈'
        }
      ],
      differentiator: {
        title: '従来のAIとの違い',
        traditional: [
          'セッションごとにリセット',
          '同じミスを繰り返す',
          '学習結果が消失',
          'コンテキストなし'
        ],
        sce: [
          '長期記憶を維持',
          '失敗から学習',
          '継続的に改善',
          '完全なコンテキスト'
        ]
      }
    },
    en: {
      title: 'Solutions Powered by SCE',
      subtitle: 'All our solutions are enhanced with SCE architecture',
      products: [
        {
          name: 'Digital Twin',
          description: 'Factory simulation with continuous learning and long-term memory. Retains parameters and optimization results across sessions.',
          link: '/solutions/digital-twin',
          icon: '🏭'
        },
        {
          name: 'Computer Vision',
          description: 'Remembers failure patterns and improves accuracy over time. Quality inspection AI that never repeats the same errors.',
          link: '/solutions/computer-vision',
          icon: '👁️'
        },
        {
          name: 'Predictive Maintenance',
          description: 'Complete continuity of equipment history. Remembers past failures, repairs, and patterns to improve prediction accuracy.',
          link: '/solutions/predictive-maintenance',
          icon: '🔧'
        },
        {
          name: 'Production Optimization',
          description: 'Long-term production data continuity. Leverages seasonal variations, past optimization attempts, and success patterns.',
          link: '/solutions/production-optimization',
          icon: '📈'
        }
      ],
      differentiator: {
        title: 'How SCE Differs from Traditional AI',
        traditional: [
          'Resets every session',
          'Repeats same mistakes',
          'Learning results lost',
          'No context'
        ],
        sce: [
          'Maintains long-term memory',
          'Learns from failures',
          'Continuously improves',
          'Full context'
        ]
      }
    }
  };

  const currentContent = content[lang];

  return (
    <section className="sce-products-section">
      <div className="sce-products-container">
        <div className="sce-products-header">
          <h2 className="sce-products-title">{currentContent.title}</h2>
          <p className="sce-products-subtitle">{currentContent.subtitle}</p>
        </div>

        <div className="sce-products-grid">
          {currentContent.products.map((product, index) => (
            <a key={index} href={product.link} className="sce-product-card">
              <div className="product-icon">{product.icon}</div>
              <h3 className="product-name">{product.name}</h3>
              <p className="product-description">{product.description}</p>
              <span className="product-link">
                {lang === 'ja' ? '詳細を見る →' : 'Learn more →'}
              </span>
            </a>
          ))}
        </div>

        <div className="sce-differentiator">
          <h3 className="differentiator-title">{currentContent.differentiator.title}</h3>
          <div className="differentiator-comparison">
            <div className="comparison-column traditional">
              <h4>{lang === 'ja' ? '従来のAI' : 'Traditional AI'}</h4>
              <ul>
                {currentContent.differentiator.traditional.map((item, idx) => (
                  <li key={idx}>
                    <span className="x-icon">✕</span>
                    {item}
                  </li>
                ))}
              </ul>
            </div>
            <div className="comparison-column sce">
              <h4>SCE</h4>
              <ul>
                {currentContent.differentiator.sce.map((item, idx) => (
                  <li key={idx}>
                    <span className="check-icon">✓</span>
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SCEProducts;
