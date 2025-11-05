'use client';

import React from 'react';
import './POKeyCapabilities.css';

interface POKeyCapabilitiesProps {
  lang: 'ja' | 'en';
}

const POKeyCapabilities: React.FC<POKeyCapabilitiesProps> = ({ lang }) => {
  const content = {
    ja: {
      heading: '中小製造業のためのAI生産最適化',
      subheading: 'データ駆動型で生産性を最大化し、リソースの無駄を削減',
      capabilities: [
        {
          id: 'throughput',
          title: 'スループット向上',
          description: 'AIが生産ライン全体のボトルネックを特定し、設備稼働率を最大化。リアルタイムでワークフロー調整を提案し、生産量を10-30%向上させます。'
        },
        {
          id: 'waste-reduction',
          title: '無駄の削減',
          description: '材料、エネルギー、時間の無駄をAIが可視化。過剰在庫、待ち時間、過剰加工を検出し、リーン生産の実現をサポートします。'
        },
        {
          id: 'resource-allocation',
          title: 'リソース最適配分',
          description: '人員配置、機械稼働、材料調達のバランスを最適化。需要予測と連動し、必要な時に必要なリソースを適切に配分します。'
        },
        {
          id: 'oee-improvement',
          title: 'OEE（設備総合効率）改善',
          description: '稼働率、性能、品質の3要素をリアルタイム監視。ダウンタイム削減、速度低下原因の特定、不良品削減により、OEEを継続的に向上させます。'
        },
        {
          id: 'predictive-maintenance',
          title: '予知保全',
          description: '設備の異常兆候を事前検知し、計画的な保守を実施。突発的な故障による生産停止を最小化し、設備寿命を延長します。'
        },
        {
          id: 'energy-optimization',
          title: 'エネルギー最適化',
          description: '電力、ガス、圧縮空気の使用パターンを分析し、ピークカット、デマンド管理、無駄な稼働時間の削減を実現。エネルギーコストを10-20%削減します。'
        }
      ]
    },
    en: {
      heading: 'AI Production Optimization for SME Manufacturers',
      subheading: 'Maximize productivity and minimize resource waste through data-driven intelligence',
      capabilities: [
        {
          id: 'throughput',
          title: 'Increase Throughput',
          description: 'AI identifies production line bottlenecks and maximizes equipment utilization. Real-time workflow adjustment recommendations increase production output by 10-30%.'
        },
        {
          id: 'waste-reduction',
          title: 'Reduce Waste',
          description: 'AI visualizes waste in materials, energy, and time. Detects excess inventory, waiting time, and over-processing to support lean manufacturing implementation.'
        },
        {
          id: 'resource-allocation',
          title: 'Optimize Resource Allocation',
          description: 'Balance staffing, machine operation, and material procurement. Integrates with demand forecasting to allocate the right resources at the right time.'
        },
        {
          id: 'oee-improvement',
          title: 'OEE (Overall Equipment Effectiveness) Improvement',
          description: 'Real-time monitoring of availability, performance, and quality. Continuously improve OEE through downtime reduction, speed loss identification, and defect elimination.'
        },
        {
          id: 'predictive-maintenance',
          title: 'Predictive Maintenance',
          description: 'Early detection of equipment anomalies enables planned maintenance. Minimize unexpected production stoppages and extend equipment lifespan.'
        },
        {
          id: 'energy-optimization',
          title: 'Energy Optimization',
          description: 'Analyze electricity, gas, and compressed air usage patterns. Achieve peak cutting, demand management, and idle time reduction. Cut energy costs by 10-20%.'
        }
      ]
    }
  };

  const t = content[lang];

  return (
    <section className="po-key-capabilities">
      <div className="po-key-capabilities-container">
        <h2 className="po-key-capabilities-heading">{t.heading}</h2>
        <p className="po-key-capabilities-subheading">{t.subheading}</p>

        <div className="po-key-capabilities-grid">
          {t.capabilities.map((capability) => (
            <div key={capability.id} className="po-capability-card">
              <h3 className="po-capability-title">{capability.title}</h3>
              <p className="po-capability-description">{capability.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default POKeyCapabilities;
