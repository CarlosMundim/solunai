'use client';

import React from 'react';
import './KeyCapabilities.css';

interface KeyCapabilitiesProps {
  lang: 'ja' | 'en';
}

const KeyCapabilities: React.FC<KeyCapabilitiesProps> = ({ lang }) => {
  const content = {
    ja: {
      heading: 'あらゆるベンダーを統合する専門技術',
      subheading: '既存設備を活かしながら、大手ベンダーの技術を導入',
      capabilities: [
        {
          id: 'multi-vendor',
          title: 'マルチベンダー統合',
          description: 'Siemens、Rockwell、三菱電機など、どのベンダーの設備でも統合可能。PLCやSCADAの入れ替えは不要。既存システムをそのまま活かしながら、データを一元管理できます。'
        },
        {
          id: 'enterprise-partnerships',
          title: '業界リーダーとの連携',
          description: 'NVIDIA Omniverse、Siemens、Ansysなど、大手ベンダーとのパートナーシップにより、最先端のデジタルツイン技術を中小企業にも手の届く価格で提供します。'
        },
        {
          id: 'accessible-visualization',
          title: '誰でも使える3D可視化',
          description: '専門知識がなくても操作できる直感的なインターフェース。工場の状態をリアルタイムで3D表示し、経営層から現場作業員まで、全員が同じ情報を共有できます。'
        },
        {
          id: 'proven-standards',
          title: 'ISA-95標準準拠',
          description: '国際標準ISA-95に基づくデータ構造により、将来的なシステム拡張も安心。ベンダーロックインを避け、長期的な投資を保護します。'
        },
        {
          id: 'actionable-insights',
          title: '実用的なデータ分析',
          description: '複雑な統計モデルではなく、製造現場で本当に役立つ分析を提供。設備稼働率、品質トレンド、生産性指標など、すぐに行動できる情報をわかりやすく表示します。'
        },
        {
          id: 'sme-support',
          title: '中小企業に最適化されたサポート',
          description: '日本国内での導入支援、トレーニング、保守をワンストップで提供。大手SIerのような高額なコンサル費用は不要。製造現場を熟知したエンジニアが伴走します。'
        }
      ]
    },
    en: {
      heading: 'Expert Multi-Vendor Integration',
      subheading: 'Enterprise technology accessible to mid-sized companies',
      capabilities: [
        {
          id: 'multi-vendor',
          title: 'Multi-Vendor Integration',
          description: 'Works with any vendor equipment — Siemens, Rockwell, Mitsubishi Electric, and more. No need to replace existing PLCs or SCADA systems. Keep your current infrastructure while unifying all data into one platform.'
        },
        {
          id: 'enterprise-partnerships',
          title: 'Industry-Leading Partnerships',
          description: 'Through partnerships with NVIDIA Omniverse, Siemens, and Ansys, we deliver cutting-edge digital twin technology at SME-accessible pricing. Enterprise capabilities without enterprise costs.'
        },
        {
          id: 'accessible-visualization',
          title: 'Intuitive 3D Visualization',
          description: 'No specialized training required. Simple, intuitive interface lets everyone — from executives to shop floor workers — view real-time factory status in 3D and share the same operational insights.'
        },
        {
          id: 'proven-standards',
          title: 'ISA-95 Standard Compliance',
          description: 'Built on international ISA-95 standards for future-proof system expansion. Avoid vendor lock-in and protect your long-term investment with open, industry-standard data architecture.'
        },
        {
          id: 'actionable-insights',
          title: 'Practical Data Analysis',
          description: 'No complex statistical models — just insights you can act on. Equipment utilization, quality trends, productivity metrics displayed clearly for immediate decision-making on the shop floor.'
        },
        {
          id: 'sme-support',
          title: 'SME-Optimized Support',
          description: 'Full implementation, training, and maintenance support in Japan. No expensive consulting fees like big SIs charge. Manufacturing engineers who understand your shop floor walk with you every step.'
        }
      ]
    }
  };

  const t = content[lang];

  return (
    <section className="key-capabilities">
      <div className="key-capabilities-container">
        <h2 className="key-capabilities-heading">{t.heading}</h2>
        <p className="key-capabilities-subheading">{t.subheading}</p>

        <div className="key-capabilities-grid">
          {t.capabilities.map((capability) => (
            <div key={capability.id} className="capability-card">
              <h3 className="capability-title">{capability.title}</h3>
              <p className="capability-description">{capability.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default KeyCapabilities;
