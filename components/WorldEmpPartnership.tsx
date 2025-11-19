'use client';

import React from 'react';
import './WorldEmpPartnership.css';

interface WorldEmpPartnershipProps {
  lang: 'ja' | 'en';
}

const WorldEmpPartnership: React.FC<WorldEmpPartnershipProps> = ({ lang }) => {
  const content = {
    ja: {
      title: 'パートナーシップ',
      subtitle: '最適な組み合わせ',
      solunai: {
        name: 'Solunai',
        role: 'フロントエンド',
        description: '日本市場への営業・クライアント管理と47次元文化評価プラットフォーム',
        capabilities: [
          '日本企業への直接営業',
          '47次元文化適合性評価',
          'SCE技術による継続的学習',
          'バイリンガルサポート'
        ]
      },
      worldemp: {
        name: 'WorldEmp',
        role: 'バックエンド',
        description: '20年以上のグローバル採用実績と世界中のオフィスネットワーク',
        capabilities: [
          '300+クライアント実績',
          '2-6週間での配備',
          'グローバル人材プール',
          'ビザ・リロケーション支援'
        ]
      },
      result: {
        title: '結果',
        description: '文化的マッチングが保証されたグローバル人材を迅速に配備'
      }
    },
    en: {
      title: 'The Partnership',
      subtitle: 'The Perfect Combination',
      solunai: {
        name: 'Solunai',
        role: 'Frontend',
        description: 'Sales & client management for Japan market + 47 Dimensions cultural assessment platform',
        capabilities: [
          'Direct sales to Japanese enterprises',
          '47 Dimensions cultural compatibility',
          'SCE technology for continuous learning',
          'Bilingual support'
        ]
      },
      worldemp: {
        name: 'WorldEmp',
        role: 'Backend',
        description: '20+ years global recruitment expertise with worldwide office network',
        capabilities: [
          '300+ client track record',
          '2-6 week deployment',
          'Global talent pool',
          'Visa & relocation support'
        ]
      },
      result: {
        title: 'The Result',
        description: 'Rapid deployment of global talent with guaranteed cultural fit'
      }
    }
  };

  const t = content[lang];

  return (
    <section className="worldemp-partnership-section">
      <div className="worldemp-partnership-container">
        <div className="partnership-header">
          <h2 className="partnership-title">{t.title}</h2>
          <p className="partnership-subtitle">{t.subtitle}</p>
        </div>

        <div className="partnership-grid">
          <div className="partner-card solunai">
            <div className="partner-header">
              <h3 className="partner-name">{t.solunai.name}</h3>
              <span className="partner-role">{t.solunai.role}</span>
            </div>
            <p className="partner-description">{t.solunai.description}</p>
            <ul className="partner-capabilities">
              {t.solunai.capabilities.map((cap, idx) => (
                <li key={idx}>
                  <span className="capability-bullet">•</span>
                  {cap}
                </li>
              ))}
            </ul>
          </div>

          <div className="partnership-connector">
            <div className="connector-plus">+</div>
          </div>

          <div className="partner-card worldemp">
            <div className="partner-header">
              <h3 className="partner-name">{t.worldemp.name}</h3>
              <span className="partner-role">{t.worldemp.role}</span>
            </div>
            <p className="partner-description">{t.worldemp.description}</p>
            <ul className="partner-capabilities">
              {t.worldemp.capabilities.map((cap, idx) => (
                <li key={idx}>
                  <span className="capability-bullet">•</span>
                  {cap}
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="partnership-result">
          <div className="result-arrow">=</div>
          <div className="result-content">
            <h4 className="result-title">{t.result.title}</h4>
            <p className="result-description">{t.result.description}</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WorldEmpPartnership;
