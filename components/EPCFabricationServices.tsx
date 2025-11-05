'use client';

import React from 'react';
import './EPCFabricationServices.css';

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
          icon: '📐',
          title: 'エンジニアリング',
          description: 'プラント設計、プロセス最適化、自動化システム',
          capabilities: ['プラントレイアウト設計', 'プロセスフロー最適化', 'CAD/CAM設計', '自動化システム設計', '安全性・コンプライアンス']
        },
        {
          icon: '🛒',
          title: '調達',
          description: '設備調達、サプライヤー管理、品質保証',
          capabilities: ['設備選定', 'ベンダー管理', 'コスト最適化', '品質検証', 'ロジスティクス調整']
        },
        {
          icon: '🏗️',
          title: '建設',
          description: 'プロジェクト管理、設置、試運転',
          capabilities: ['プロジェクト管理', '設備設置', 'システム統合', '試運転', '性能検証']
        },
        {
          icon: '⚙️',
          title: '製作',
          description: 'カスタム設備製作、機械加工、組立',
          capabilities: ['精密機械加工', 'カスタム製作', '品質管理', '組立・テスト', 'メンテナンス']
        },
        {
          icon: '🔧',
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
          icon: '📐',
          title: 'Engineering',
          description: 'Plant design, process optimization, automation systems',
          capabilities: ['Plant layout design', 'Process flow optimization', 'CAD/CAM design', 'Automation system design', 'Safety & compliance']
        },
        {
          icon: '🛒',
          title: 'Procurement',
          description: 'Equipment sourcing, supplier management, quality assurance',
          capabilities: ['Equipment selection', 'Vendor management', 'Cost optimization', 'Quality verification', 'Logistics coordination']
        },
        {
          icon: '🏗️',
          title: 'Construction',
          description: 'Project management, installation, commissioning',
          capabilities: ['Project management', 'Equipment installation', 'System integration', 'Commissioning', 'Performance validation']
        },
        {
          icon: '⚙️',
          title: 'Fabrication',
          description: 'Custom equipment fabrication, machining, assembly',
          capabilities: ['Precision machining', 'Custom fabrication', 'Quality control', 'Assembly & testing', 'Maintenance']
        },
        {
          icon: '🔧',
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
          {currentContent.services.map((service, index) => (
            <div key={index} className="service-card">
              <div className="service-icon">{service.icon}</div>
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
          ))}
        </div>
      </div>
    </section>
  );
};

export default EPCFabricationServices;
