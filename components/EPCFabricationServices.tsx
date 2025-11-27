'use client';

import React from 'react';
import { Ruler, ShoppingCart, HardHat, Cog, Wrench } from 'lucide-react';
import './EPCFabricationServices.css';

const serviceIcons = {
  engineering: Ruler,
  procurement: ShoppingCart,
  construction: HardHat,
  fabrication: Cog,
  maintenance: Wrench,
};

interface EPCFabricationServicesProps {
  lang: 'ja' | 'en';
}

const EPCFabricationServices: React.FC<EPCFabricationServicesProps> = ({ lang }) => {
  const content = {
    ja: {
      title: 'EPCサービス範囲',
      subtitle: '完全なターンキー・プラント・ソリューション',
      intro: 'コンセプトから完成まで、製造施設のあらゆる側面を管理します。',
      services: [
        {
          iconKey: 'engineering',
          title: 'エンジニアリング',
          description: 'プラント設計、プロセス最適化、自動化システム',
          capabilities: ['プラントレイアウト設計', 'プロセスフロー最適化', 'CAD/CAM設計', '自動化システム設計', '安全性・コンプライアンス']
        },
        {
          iconKey: 'procurement',
          title: '調達',
          description: '設備調達、サプライヤー管理、品質保証',
          capabilities: ['設備選定', 'ベンダー管理', 'コスト最適化', '品質検証', 'ロジスティクス調整']
        },
        {
          iconKey: 'construction',
          title: '建設',
          description: 'プロジェクト管理、設置、試運転',
          capabilities: ['プロジェクト管理', '設備設置', 'システム統合', '試運転', '性能検証']
        },
        {
          iconKey: 'fabrication',
          title: '製作',
          description: 'カスタム設備製作、機械加工、組立',
          capabilities: ['精密機械加工', 'カスタム製作', '品質管理', '組立・テスト', 'メンテナンス']
        },
        {
          iconKey: 'maintenance',
          title: 'メンテナンス',
          description: 'ライフサイクルサポート、予防保守、アップグレード',
          capabilities: ['予防保守', '予測メンテナンス', 'スペア部品管理', 'パフォーマンス最適化', 'システムアップグレード']
        }
      ]
    },
    en: {
      title: 'EPC Service Scope',
      subtitle: 'Complete Turnkey Plant Solutions',
      intro: 'From concept to completion, we manage every aspect of your manufacturing facility.',
      services: [
        {
          iconKey: 'engineering',
          title: 'Engineering',
          description: 'Plant design, process optimization, automation systems',
          capabilities: ['Plant layout design', 'Process flow optimization', 'CAD/CAM design', 'Automation system design', 'Safety & compliance']
        },
        {
          iconKey: 'procurement',
          title: 'Procurement',
          description: 'Equipment sourcing, supplier management, quality assurance',
          capabilities: ['Equipment selection', 'Vendor management', 'Cost optimization', 'Quality verification', 'Logistics coordination']
        },
        {
          iconKey: 'construction',
          title: 'Construction',
          description: 'Project management, installation, commissioning',
          capabilities: ['Project management', 'Equipment installation', 'System integration', 'Commissioning', 'Performance validation']
        },
        {
          iconKey: 'fabrication',
          title: 'Fabrication',
          description: 'Custom equipment fabrication, machining, assembly',
          capabilities: ['Precision machining', 'Custom fabrication', 'Quality control', 'Assembly & testing', 'Maintenance']
        },
        {
          iconKey: 'maintenance',
          title: 'Maintenance',
          description: 'Lifecycle support, preventive maintenance, upgrades',
          capabilities: ['Preventive maintenance', 'Predictive maintenance', 'Spare parts management', 'Performance optimization', 'System upgrades']
        }
      ]
    }
  };

  const currentContent = content[lang];

  return (
    <section className="epc-fabrication-services">
      <div className="services-container">
        <div className="services-header">
          <h2 className="services-title">{currentContent.title}</h2>
          <p className="services-subtitle">{currentContent.subtitle}</p>
          <p className="services-intro">{currentContent.intro}</p>
        </div>

        <div className="services-grid">
          {currentContent.services.map((service, index) => {
            const IconComponent = serviceIcons[service.iconKey as keyof typeof serviceIcons];
            return (
            <div key={index} className="service-card">
              <div className="service-icon">
                <IconComponent size={32} strokeWidth={1.5} />
              </div>
              <h3 className="service-title">{service.title}</h3>
              <p className="service-description">{service.description}</p>
              <ul className="capabilities-list">
                {service.capabilities.map((capability, idx) => (
                  <li key={idx} className="capability-item">
                    <svg className="capability-icon" viewBox="0 0 20 20" fill="currentColor">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                    <span>{capability}</span>
                  </li>
                ))}
              </ul>
            </div>
          );
          })}
        </div>
      </div>
    </section>
  );
};

export default EPCFabricationServices;
