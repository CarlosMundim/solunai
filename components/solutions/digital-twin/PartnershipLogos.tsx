'use client';

import React from 'react';
import { Factory, Cog, Cloud, Radio, Check, Link } from 'lucide-react';
import './PartnershipLogos.css';

const capabilityIcons = {
  digitaltwin: Factory,
  physics: Cog,
  cloud: Cloud,
  iot: Radio,
  isa95: Check,
  opcua: Link,
};

interface PartnershipLogosProps {
  lang: 'ja' | 'en';
}

const PartnershipLogos: React.FC<PartnershipLogosProps> = ({ lang }) => {
  const content = {
    ja: {
      heading: 'エンタープライズグレードの技術基盤',
      subheading: '国際標準に準拠した信頼性の高いプラットフォーム',
      capabilities: [
        {
          name: 'デジタルツイン可視化',
          category: '3Dシミュレーション',
          description: 'リアルタイム3Dレンダリングとフォトリアリスティック工場可視化技術',
          iconKey: 'digitaltwin'
        },
        {
          name: '物理シミュレーション',
          category: 'CFD/FEA解析',
          description: '熱流体解析、構造解析などの高度なマルチフィジックスシミュレーション',
          iconKey: 'physics'
        },
        {
          name: 'クラウドインフラ',
          category: 'エンタープライズグレード',
          description: '99.9%稼働率、ISO 27001/SOC 2準拠のセキュアな基盤',
          iconKey: 'cloud'
        },
        {
          name: 'IoTプラットフォーム',
          category: 'リアルタイムデータ',
          description: '産業用IoTデータ収集・分析基盤との互換性',
          iconKey: 'iot'
        },
        {
          name: 'ISA-95 準拠',
          category: '国際標準規格',
          description: '製造業向け国際標準データモデルに完全準拠',
          iconKey: 'isa95'
        },
        {
          name: 'OPC UA 対応',
          category: '産業通信プロトコル',
          description: 'あらゆる産業機器との接続を保証する標準プロトコル',
          iconKey: 'opcua'
        }
      ],
      note: '※ Solunaiは業界標準技術を活用した独立系インテグレーターです。'
    },
    en: {
      heading: 'Enterprise-Grade Technology Foundation',
      subheading: 'Reliable platform compliant with international standards',
      capabilities: [
        {
          name: 'Digital Twin Visualization',
          category: '3D Simulation',
          description: 'Real-time 3D rendering and photorealistic factory visualization technology',
          iconKey: 'digitaltwin'
        },
        {
          name: 'Physics Simulation',
          category: 'CFD/FEA Analysis',
          description: 'Advanced multi-physics simulation including thermal and structural analysis',
          iconKey: 'physics'
        },
        {
          name: 'Cloud Infrastructure',
          category: 'Enterprise-Grade',
          description: '99.9% uptime, ISO 27001/SOC 2 compliant secure foundation',
          iconKey: 'cloud'
        },
        {
          name: 'IoT Platform',
          category: 'Real-time Data',
          description: 'Compatibility with industrial IoT data collection and analysis',
          iconKey: 'iot'
        },
        {
          name: 'ISA-95 Compliant',
          category: 'International Standard',
          description: 'Full compliance with manufacturing industry standard data model',
          iconKey: 'isa95'
        },
        {
          name: 'OPC UA Compatible',
          category: 'Industrial Communication',
          description: 'Standard protocol ensuring connectivity with all industrial equipment',
          iconKey: 'opcua'
        }
      ],
      note: '* Solunai is an independent systems integrator utilizing industry-standard technologies.'
    }
  };

  const t = content[lang];

  return (
    <section className="partnership-logos">
      <div className="partnership-logos-container">
        <h2 className="partnership-logos-heading">{t.heading}</h2>
        <p className="partnership-logos-subheading">{t.subheading}</p>

        <div className="partnership-logos-grid">
          {t.capabilities.map((capability, index) => {
            const IconComponent = capabilityIcons[capability.iconKey as keyof typeof capabilityIcons];
            return (
            <div key={index} className="partner-card">
              <div className="partner-logo-wrapper">
                <span className="capability-icon">
                  <IconComponent size={32} strokeWidth={1.5} />
                </span>
              </div>
              <div className="partner-category">{capability.category}</div>
              <h3 className="partner-name">{capability.name}</h3>
              <p className="partner-description">{capability.description}</p>
            </div>
          );
          })}
        </div>

        <p className="partnership-logos-note">{t.note}</p>
      </div>
    </section>
  );
};

export default PartnershipLogos;
