'use client';

import React from 'react';
import './Dimensions47Preview.css';

interface Dimensions47PreviewProps {
  lang: 'ja' | 'en';
}

const Dimensions47Preview: React.FC<Dimensions47PreviewProps> = ({ lang }) => {
  const content = {
    ja: {
      title: '47次元 文化適合性評価',
      subtitle: 'Solunaiの独自技術で文化的マッチングを保証',
      description: '日本企業で成功するために必要な47の文化的要素を評価。技術スキルだけでなく、チームとの相性を科学的に分析します。',
      categories: [
        {
          name: 'ワークスタイル',
          dimensions: ['時間意識', '品質志向', '権威尊重', 'プロセス遵守', '残業許容度']
        },
        {
          name: 'コミュニケーション',
          dimensions: ['間接表現', '沈黙の解釈', '階層的言語', 'フィードバック受容', '対立回避']
        },
        {
          name: 'チーム統合',
          dimensions: ['長期コミット', 'チーム調和', '細部への注意', '継続改善', '社交性']
        }
      ],
      cta: '詳細を見る'
    },
    en: {
      title: '47 Dimensions Cultural Assessment',
      subtitle: 'Solunai\'s proprietary technology guarantees cultural matching',
      description: 'We evaluate 47 cultural factors essential for success in Japanese companies. Beyond technical skills, we scientifically analyze team compatibility.',
      categories: [
        {
          name: 'Work Style',
          dimensions: ['Punctuality', 'Quality Focus', 'Authority Respect', 'Process Adherence', 'Overtime Acceptance']
        },
        {
          name: 'Communication',
          dimensions: ['Indirect Expression', 'Silence Interpretation', 'Hierarchical Language', 'Feedback Reception', 'Conflict Avoidance']
        },
        {
          name: 'Team Integration',
          dimensions: ['Long-term Commitment', 'Team Harmony', 'Attention to Detail', 'Continuous Improvement', 'Sociability']
        }
      ],
      cta: 'Learn More'
    }
  };

  const t = content[lang];

  return (
    <section className="dimensions-preview-section">
      <div className="dimensions-preview-container">
        <div className="dimensions-header">
          <h2 className="dimensions-title">{t.title}</h2>
          <p className="dimensions-subtitle">{t.subtitle}</p>
          <p className="dimensions-description">{t.description}</p>
        </div>

        <div className="dimensions-categories-grid">
          {t.categories.map((category, idx) => (
            <div key={idx} className="dimension-category-card">
              <h3 className="category-name">{category.name}</h3>
              <ul className="dimensions-list">
                {category.dimensions.map((dim, dimIdx) => (
                  <li key={dimIdx} className="dimension-item">
                    <span className="dimension-bullet">+</span>
                    {dim}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="dimensions-footer">
          <p className="dimensions-note">
            {lang === 'ja'
              ? '+ 32の追加次元で包括的な文化適合性を評価'
              : '+ 32 additional dimensions for comprehensive cultural compatibility'}
          </p>
        </div>
      </div>
    </section>
  );
};

export default Dimensions47Preview;
