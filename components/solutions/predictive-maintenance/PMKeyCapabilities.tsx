'use client';

import React from 'react';
import './PMKeyCapabilities.css';

interface PMKeyCapabilitiesProps {
  lang: 'ja' | 'en';
}

const PMKeyCapabilities: React.FC<PMKeyCapabilitiesProps> = ({ lang }) => {
  const content = {
    ja: {
      heading: '中小製造業のためのAI予知保全',
      subheading: '機械学習で設備故障を予測し、突発的なダウンタイムとコストを削減',
      capabilities: [
        {
          id: 'real-time-monitoring',
          title: 'リアルタイム設備監視',
          description: 'センサーデータ（振動、温度、圧力、電流など）をリアルタイムで収集・分析。機械の状態を24時間365日監視し、わずかな異常も見逃しません。'
        },
        {
          id: 'failure-prediction',
          title: '故障予測アルゴリズム',
          description: '機械学習により、過去の故障データから故障パターンを学習。設備の劣化傾向を分析し、故障発生の2週間〜1ヶ月前に予測アラートを発信します。'
        },
        {
          id: 'maintenance-optimization',
          title: '保全スケジュール最適化',
          description: '定期保全から状態基準保全へ。設備の実際の状態に基づいて、最適なメンテナンスタイミングを提案。過剰保全を削減し、部品コストを最大30%削減。'
        },
        {
          id: 'multi-equipment',
          title: '複数設備の一括管理',
          description: '工作機械、射出成形機、プレス機、ロボットなど、異なる設備を一つのダッシュボードで管理。設備ごとの健全性スコアを可視化し、優先順位を明確化。'
        },
        {
          id: 'root-cause-analysis',
          title: '故障原因の自動分析',
          description: '故障発生時、AIが過去データと比較し、考えられる原因を自動で特定。MTTR（平均修復時間）を短縮し、再発防止策の立案を支援します。'
        },
        {
          id: 'cost-reduction',
          title: '保全コスト削減',
          description: '計画外ダウンタイムを最大80%削減。緊急修理費用、生産ロス、納期遅延ペナルティを削減し、年間保全コストを平均40%削減します。'
        }
      ]
    },
    en: {
      heading: 'AI Predictive Maintenance for SME Manufacturers',
      subheading: 'Use machine learning to predict equipment failures, reducing unexpected downtime and costs',
      capabilities: [
        {
          id: 'real-time-monitoring',
          title: 'Real-Time Equipment Monitoring',
          description: 'Collect and analyze sensor data (vibration, temperature, pressure, current, etc.) in real-time. Monitor machine conditions 24/7/365, detecting even the slightest anomalies.'
        },
        {
          id: 'failure-prediction',
          title: 'Failure Prediction Algorithms',
          description: 'Machine learning learns failure patterns from historical fault data. Analyze equipment degradation trends and issue prediction alerts 2 weeks to 1 month before failure occurs.'
        },
        {
          id: 'maintenance-optimization',
          title: 'Maintenance Schedule Optimization',
          description: 'Shift from preventive to condition-based maintenance. Recommend optimal maintenance timing based on actual equipment condition. Reduce over-maintenance and cut parts costs by up to 30%.'
        },
        {
          id: 'multi-equipment',
          title: 'Centralized Multi-Equipment Management',
          description: 'Manage diverse equipment — machine tools, injection molding machines, presses, robots — from one dashboard. Visualize health scores per equipment and clarify priorities.'
        },
        {
          id: 'root-cause-analysis',
          title: 'Automated Root Cause Analysis',
          description: 'When failures occur, AI compares historical data to automatically identify probable causes. Reduce MTTR (Mean Time To Repair) and support recurrence prevention planning.'
        },
        {
          id: 'cost-reduction',
          title: 'Maintenance Cost Reduction',
          description: 'Reduce unplanned downtime by up to 80%. Cut emergency repair costs, production losses, and delivery delay penalties, reducing annual maintenance costs by an average of 40%.'
        }
      ]
    }
  };

  const t = content[lang];

  return (
    <section className="pm-key-capabilities">
      <div className="pm-key-capabilities-container">
        <h2 className="pm-key-capabilities-heading">{t.heading}</h2>
        <p className="pm-key-capabilities-subheading">{t.subheading}</p>

        <div className="pm-key-capabilities-grid">
          {t.capabilities.map((capability) => (
            <div key={capability.id} className="pm-capability-card">
              <h3 className="pm-capability-title">{capability.title}</h3>
              <p className="pm-capability-description">{capability.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default PMKeyCapabilities;
