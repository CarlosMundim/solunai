'use client';

import React from 'react';
import Image from 'next/image';
import './PartnershipLogos.css';

interface PartnershipLogosProps {
  lang: 'ja' | 'en';
}

const PartnershipLogos: React.FC<PartnershipLogosProps> = ({ lang }) => {
  const content = {
    ja: {
      heading: '業界トップ企業との技術パートナーシップ',
      subheading: '世界標準の技術を、日本の中小製造業に最適化して提供',
      partners: [
        {
          name: 'NVIDIA Omniverse',
          category: '3D可視化・シミュレーション',
          description: 'リアルタイム3Dレンダリングとフォトリアリスティック工場可視化技術',
          logo: '/logos/Nvidia_logo.svg.png',
          logoWidth: 220
        },
        {
          name: 'Siemens',
          category: 'PLM・デジタルツイン基盤',
          description: '産業用デジタルツインプラットフォームとの統合連携',
          logo: '/logos/Siemens_AG_logo.svg.png',
          logoWidth: 220
        },
        {
          name: 'Ansys',
          category: '物理シミュレーション',
          description: 'CFD、FEA、熱流体解析などの高度なシミュレーション技術',
          logo: '/logos/Ansys_logo_(2019).svg.png',
          logoWidth: 220
        },
        {
          name: 'PTC ThingWorx',
          category: 'IoTプラットフォーム',
          description: '産業用IoTデータ収集・分析基盤との互換性',
          logo: '/logos/Thingworx.png',
          logoWidth: 220
        },
        {
          name: 'ISA-95 準拠',
          category: '国際標準規格',
          description: '製造業向け国際標準データモデルに完全準拠',
          logo: '/logos/ISA_95.jpg',
          logoWidth: 220
        },
        {
          name: 'OPC UA 対応',
          category: '産業通信プロトコル',
          description: 'あらゆる産業機器との接続を保証する標準プロトコル',
          logo: '/logos/OPC_UA_foundation.png',
          logoWidth: 220
        }
      ],
      note: '※ Solunaiは上記テクノロジーとの統合実装を提供する独立系インテグレーターです。各社の認定パートナーシッププログラムへの参加を推進中です。'
    },
    en: {
      heading: 'Technology Partnerships with Industry Leaders',
      subheading: 'World-class technology optimized for Japanese SME manufacturers',
      partners: [
        {
          name: 'NVIDIA Omniverse',
          category: '3D Visualization & Simulation',
          description: 'Real-time 3D rendering and photorealistic factory visualization technology',
          logo: '/logos/Nvidia_logo.svg.png',
          logoWidth: 220
        },
        {
          name: 'Siemens',
          category: 'PLM & Digital Twin Platform',
          description: 'Integration with industrial digital twin platform ecosystem',
          logo: '/logos/Siemens_AG_logo.svg.png',
          logoWidth: 220
        },
        {
          name: 'Ansys',
          category: 'Physics Simulation',
          description: 'Advanced simulation including CFD, FEA, and thermal analysis',
          logo: '/logos/Ansys_logo_(2019).svg.png',
          logoWidth: 220
        },
        {
          name: 'PTC ThingWorx',
          category: 'IoT Platform',
          description: 'Compatibility with industrial IoT data collection and analysis',
          logo: '/logos/Thingworx.png',
          logoWidth: 220
        },
        {
          name: 'ISA-95 Compliant',
          category: 'International Standard',
          description: 'Full compliance with manufacturing industry standard data model',
          logo: '/logos/ISA_95.jpg',
          logoWidth: 220
        },
        {
          name: 'OPC UA Compatible',
          category: 'Industrial Communication',
          description: 'Standard protocol ensuring connectivity with all industrial equipment',
          logo: '/logos/OPC_UA_foundation.png',
          logoWidth: 220
        }
      ],
      note: '* Solunai is an independent systems integrator providing integration with the above technologies. We are actively pursuing formal partnership programs with each vendor.'
    }
  };

  const t = content[lang];

  return (
    <section className="partnership-logos">
      <div className="partnership-logos-container">
        <h2 className="partnership-logos-heading">{t.heading}</h2>
        <p className="partnership-logos-subheading">{t.subheading}</p>

        <div className="partnership-logos-grid">
          {t.partners.map((partner, index) => (
            <div key={index} className="partner-card">
              <div className="partner-logo-wrapper">
                <Image
                  src={partner.logo}
                  alt={partner.name}
                  width={partner.logoWidth || 200}
                  height={80}
                  className="partner-logo"
                  style={{ objectFit: 'contain' }}
                />
              </div>
              <div className="partner-category">{partner.category}</div>
              <p className="partner-description">{partner.description}</p>
            </div>
          ))}
        </div>

        <p className="partnership-logos-note">{t.note}</p>
      </div>
    </section>
  );
};

export default PartnershipLogos;
