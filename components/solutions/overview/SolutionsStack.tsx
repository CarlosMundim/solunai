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
      heading: '製造業の現場課題を',
      headingHighlight: 'AIで解決',
      description: '具体的な成果を出すAIソリューション。品質向上、コスト削減、人材不足の課題に対応し、実績に基づく結果をお届けします。',
      solutions: [
        {
          id: 'quality-inspection',
          title: 'AI品質検査システム',
          description: 'コンピュータビジョンによる自動検査。95%以上の不良品検出率、検査時間を27倍高速化、品質管理部門の人件費を30%削減。',
          link: '/solutions/quality-inspection'
        },
        {
          id: 'predictive-maintenance',
          title: '予知保全ソリューション',
          description: '設備故障を48〜72時間前に予測。計画外停止を40%削減、保守コストを20〜30%削減。',
          link: '/solutions/predictive-maintenance'
        },
        {
          id: 'production-optimization',
          title: '生産最適化AI',
          description: 'エネルギーコストを20〜30%削減。スループット最大化、ボトルネック特定により生産効率を向上。',
          link: '/solutions/production-optimization'
        },
        {
          id: 'global-engineering',
          title: 'グローバルエンジニアリング',
          description: '国内採用コストの30〜50%で、2〜6週間で配置可能。CAD、シミュレーション、工程設計の専門エンジニアを提供。',
          link: '/solutions/global-engineering'
        }
      ],
      learnMore: '詳しく見る'
    },
    en: {
      heading: 'Solving Manufacturing Challenges',
      headingHighlight: 'with AI',
      description: 'Concrete AI solutions that deliver measurable results. Address quality, cost, and labor shortage challenges with proven outcomes.',
      solutions: [
        {
          id: 'quality-inspection',
          title: 'AI Quality Inspection System',
          description: 'Automated visual inspection using computer vision. 95%+ defect detection rate, inspection 27x faster, 30% labor cost reduction in QC department.',
          link: '/en/solutions/quality-inspection'
        },
        {
          id: 'predictive-maintenance',
          title: 'Predictive Maintenance Solution',
          description: 'Predict equipment failures 48-72 hours in advance. 40% reduction in unplanned downtime, 20-30% lower maintenance costs.',
          link: '/en/solutions/predictive-maintenance'
        },
        {
          id: 'production-optimization',
          title: 'Production Optimization AI',
          description: '20-30% energy cost reduction. Maximize throughput and identify bottlenecks to improve production efficiency.',
          link: '/en/solutions/production-optimization'
        },
        {
          id: 'global-engineering',
          title: 'Global Engineering',
          description: '30-50% cost vs Japan domestic hiring, 2-6 week deployment. CAD, simulation, and process engineering specialists.',
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
                height: 'auto',
                minHeight: '50vh',
                paddingTop: '5vh',
                paddingBottom: '5vh'
              }}
            >
              <div className="solution-card">
                <div className="solution-card-content">
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
