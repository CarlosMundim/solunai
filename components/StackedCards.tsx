'use client';

import React, { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import './StackedCards.css';

interface StackedCardsProps {
  lang: 'ja' | 'en';
}

interface CardData {
  title: string;
  subtitle: string;
  description: string;
  features: string[];
  image: string;
}

const StackedCards: React.FC<StackedCardsProps> = ({ lang }) => {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ['start start', 'end end']
  });

  const content = {
    ja: {
      sectionTitle: 'AIによる製造業変革プロセス',
      cards: [
        {
          title: 'Design',
          subtitle: 'デジタルツイン設計',
          description: 'NVIDIA Omniverseと連携し、生産ラインの完全なデジタルレプリカを構築。シミュレーションで最適化を事前検証します。',
          features: [
            'リアルタイム3Dシミュレーション',
            '物理ベースレンダリング',
            '複数シナリオ検証',
            'ROI予測分析'
          ],
          image: '/images/cards/design.jpg'
        },
        {
          title: 'Connect',
          subtitle: 'データ接続・統合',
          description: 'あらゆる製造機器とシステムからデータを収集。既存のレガシーシステムも含め、統一されたデータ基盤を構築します。',
          features: [
            'IoTセンサー統合',
            'PLC・SCADA接続',
            'ERPシステム連携',
            'リアルタイムデータパイプライン'
          ],
          image: '/images/cards/connect.jpg'
        },
        {
          title: 'Analyze',
          subtitle: 'AI分析・洞察',
          description: 'コンピュータビジョンと機械学習で品質管理を自動化。予知保全により、ダウンタイムを最小化します。',
          features: [
            'コンピュータビジョン検査',
            '異常検知AI',
            '予知保全モデル',
            '根本原因分析'
          ],
          image: '/images/cards/analyze.jpg'
        },
        {
          title: 'Optimize',
          subtitle: '生産最適化',
          description: 'AIが生産プロセスを継続的に最適化。エネルギー消費、材料使用、生産速度をバランスさせます。',
          features: [
            'リアルタイム生産調整',
            'エネルギー効率化',
            '材料ロス削減',
            '品質-速度最適化'
          ],
          image: '/images/cards/optimize.jpg'
        },
        {
          title: 'Deploy',
          subtitle: '段階的展開',
          description: 'パイロットプロジェクトから始め、段階的にスケール。WorldEmpのグローバルエンジニアがサポートします。',
          features: [
            'パイロット実装（2-4週間）',
            '段階的スケール',
            '24時間サポート',
            '継続的改善'
          ],
          image: '/images/cards/deploy.jpg'
        }
      ]
    },
    en: {
      sectionTitle: 'AI-Driven Manufacturing Transformation Process',
      cards: [
        {
          title: 'Design',
          subtitle: 'Digital Twin Design',
          description: 'Build complete digital replicas of production lines with NVIDIA Omniverse. Pre-validate optimizations through simulation.',
          features: [
            'Real-time 3D Simulation',
            'Physics-based Rendering',
            'Multi-scenario Validation',
            'ROI Prediction Analysis'
          ],
          image: '/images/cards/design.jpg'
        },
        {
          title: 'Connect',
          subtitle: 'Data Connection & Integration',
          description: 'Collect data from all manufacturing equipment and systems. Build unified data foundation including legacy systems.',
          features: [
            'IoT Sensor Integration',
            'PLC & SCADA Connection',
            'ERP System Integration',
            'Real-time Data Pipeline'
          ],
          image: '/images/cards/connect.jpg'
        },
        {
          title: 'Analyze',
          subtitle: 'AI Analysis & Insights',
          description: 'Automate quality control with computer vision and machine learning. Minimize downtime through predictive maintenance.',
          features: [
            'Computer Vision Inspection',
            'Anomaly Detection AI',
            'Predictive Maintenance Models',
            'Root Cause Analysis'
          ],
          image: '/images/cards/analyze.jpg'
        },
        {
          title: 'Optimize',
          subtitle: 'Production Optimization',
          description: 'AI continuously optimizes production processes. Balance energy consumption, material usage, and production speed.',
          features: [
            'Real-time Production Adjustment',
            'Energy Efficiency',
            'Material Waste Reduction',
            'Quality-Speed Optimization'
          ],
          image: '/images/cards/optimize.jpg'
        },
        {
          title: 'Deploy',
          subtitle: 'Phased Deployment',
          description: 'Start with pilot projects and scale gradually. Global engineers from WorldEmp provide support.',
          features: [
            'Pilot Implementation (2-4 weeks)',
            'Gradual Scaling',
            '24/7 Support',
            'Continuous Improvement'
          ],
          image: '/images/cards/deploy.jpg'
        }
      ]
    }
  };

  const currentContent = content[lang];

  return (
    <section className="stacked-cards-section" ref={containerRef}>
      <div className="stacked-cards-header">
        <h2 className="stacked-cards-title">{currentContent.sectionTitle}</h2>
      </div>

      <div className="stacked-cards-container">
        {currentContent.cards.map((card, index) => {
          const totalCards = currentContent.cards.length;
          const cardProgress = useTransform(
            scrollYProgress,
            [index / totalCards, (index + 1) / totalCards],
            [0, 1]
          );

          const scale = useTransform(cardProgress, [0, 1], [1, 0.95]);
          const opacity = useTransform(cardProgress, [0, 0.5, 1], [1, 1, 0.3]);
          const y = useTransform(cardProgress, [0, 1], ['0%', '-5%']);

          return (
            <motion.div
              key={index}
              className="stacked-card-wrapper"
              style={{
                scale,
                opacity,
                y,
                position: 'sticky',
                top: 0,
                height: '100vh'
              }}
            >
              <div className="stacked-card">
                <div className="card-content-area">
                  <div className="card-badge">{card.title}</div>
                  <h3 className="card-heading">{card.subtitle}</h3>
                  <p className="card-description">{card.description}</p>
                  <ul className="card-features-list">
                    {card.features.map((feature, idx) => (
                      <li key={idx} className="card-feature-item">
                        <span className="feature-bullet">•</span>
                        <span>{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>
                <div className="card-visual-area">
                  <div className="card-image-placeholder">
                    {/* Placeholder for card images */}
                    <div className="placeholder-content">
                      <span className="placeholder-icon">{card.title}</span>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          );
        })}
      </div>
    </section>
  );
};

export default StackedCards;
