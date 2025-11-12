'use client';

import React, { useRef } from 'react';
import Link from 'next/link';
import { motion, useScroll, useTransform } from 'framer-motion';
import './SolutionsStack.css';

interface SolutionsStackProps {
  lang: 'ja' | 'en';
}

const SolutionsStack: React.FC<SolutionsStackProps> = ({ lang }) => {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ['start start', 'end end']
  });

  const content = {
    ja: {
      heading: 'Solunaiの5つのAIソリューションで',
      headingHighlight: '製造業を変革',
      description: '先進的なAI技術で製造プロセス全体を最適化。デジタルツイン、コンピュータビジョン、予知保全、生産最適化、グローバルエンジニアリングで、日本の製造業の未来を創造します。',
      solutions: [
        {
          id: 'digital-twin',
          icon: '🔷',
          title: 'デジタルツイン技術',
          description: '製造現場のリアルタイム仮想レプリカを構築。すべての設備、プロセス、データを統合したデジタル空間で、シミュレーション、分析、最適化を実現します。',
          link: '/solutions/digital-twin'
        },
        {
          id: 'computer-vision',
          icon: '👁️',
          title: 'コンピュータビジョン品質管理',
          description: 'AI搭載の視覚検査システムで、不良品を自動検出。人の目では見逃しがちな微細な欠陥も高精度で識別し、品質向上とコスト削減を同時に実現します。',
          link: '/solutions/computer-vision'
        },
        {
          id: 'predictive-maintenance',
          icon: '🔧',
          title: '予知保全',
          description: '設備故障を事前に予測して防止。センサーデータとAI分析により、最適なタイミングでメンテナンスを実施し、ダウンタイムを最小化します。',
          link: '/solutions/predictive-maintenance'
        },
        {
          id: 'production-optimization',
          icon: '⚙️',
          title: '生産最適化',
          description: 'スループットを最大化し、ムダを最小化。AI分析により生産ラインのボトルネックを特定し、工程改善の具体的な施策を提案します。',
          link: '/solutions/production-optimization'
        },
        {
          id: 'global-engineering',
          icon: '🌐',
          title: 'グローバルエンジニアリング',
          description: '47-Dimensionsプラットフォームで国際的なエンジニア人材を活用。日本の製造業と世界の技術者をつなぎ、イノベーションを加速します。',
          link: '/solutions/global-engineering'
        }
      ],
      learnMore: '詳しく見る'
    },
    en: {
      heading: 'Transform Manufacturing with',
      headingHighlight: '5 AI-Powered Solutions',
      description: 'Comprehensive AI technology solutions optimizing every aspect of your manufacturing operations. From digital twins to global engineering, we empower Japanese manufacturers to lead the future.',
      solutions: [
        {
          id: 'digital-twin',
          icon: '🔷',
          title: 'Digital Twin Technology',
          description: 'Real-time virtual replica of manufacturing operations. Integrate all equipment, processes, and data in a unified digital space for simulation, analysis, and optimization.',
          link: '/en/solutions/digital-twin'
        },
        {
          id: 'computer-vision',
          icon: '👁️',
          title: 'Computer Vision Quality Control',
          description: 'AI-powered visual inspection and defect detection. Identify microscopic defects that human eyes might miss, achieving quality improvement and cost reduction simultaneously.',
          link: '/en/solutions/computer-vision'
        },
        {
          id: 'predictive-maintenance',
          icon: '🔧',
          title: 'Predictive Maintenance',
          description: 'Prevent equipment failures before they happen. Use sensor data and AI analysis to schedule maintenance at optimal times, minimizing downtime and maximizing productivity.',
          link: '/en/solutions/predictive-maintenance'
        },
        {
          id: 'production-optimization',
          icon: '⚙️',
          title: 'Production Optimization',
          description: 'Maximize throughput and minimize waste. AI analysis identifies production line bottlenecks and provides actionable recommendations for process improvement.',
          link: '/en/solutions/production-optimization'
        },
        {
          id: 'global-engineering',
          icon: '🌐',
          title: 'Global Engineering Platform',
          description: 'Access international engineering talent through our 47-Dimensions platform. Connect Japanese manufacturing with global technical expertise to accelerate innovation.',
          link: '/en/solutions/global-engineering'
        }
      ],
      learnMore: 'Learn More'
    }
  };

  const t = content[lang];

  return (
    <section className="solutions-stack" ref={containerRef}>
      <div className="solutions-stack-header">
        <h2 className="solutions-stack-heading">
          {t.heading}
          <br />
          <span className="solutions-stack-heading-highlight">{t.headingHighlight}</span>
        </h2>
        <p className="solutions-stack-description">{t.description}</p>
      </div>

      <div className="solutions-stack-cards">
        {t.solutions.map((solution, index) => {
          const totalCards = t.solutions.length;
          const cardProgress = useTransform(
            scrollYProgress,
            [index / totalCards, (index + 1) / totalCards],
            [0, 1]
          );

          const scale = useTransform(cardProgress, [0, 1], [1, 0.95]);
          const opacity = useTransform(cardProgress, [0, 0.5, 1], [1, 1, 1]);
          const y = useTransform(cardProgress, [0, 1], ['0%', '-5%']);

          return (
            <motion.div
              key={solution.id}
              className="solution-card-wrapper"
              style={{
                scale,
                opacity,
                y,
                position: 'sticky',
                top: 0,
                height: '100vh'
              }}
            >
              <div className="solution-card">
                <div className="solution-card-content">
                  <div className="solution-card-icon">{solution.icon}</div>
                  <h3 className="solution-card-title">{solution.title}</h3>
                  <p className="solution-card-description">{solution.description}</p>
                  <Link href={solution.link} className="solution-card-button">
                    {t.learnMore}
                  </Link>
                </div>
              </div>
            </motion.div>
          );
        })}
      </div>
    </section>
  );
};

export default SolutionsStack;
