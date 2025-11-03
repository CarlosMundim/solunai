'use client';

import React from 'react';
import Link from 'next/link';
import './SolutionsStack.css';

interface SolutionsStackProps {
  lang: 'ja' | 'en';
}

const SolutionsStack: React.FC<SolutionsStackProps> = ({ lang }) => {
  const content = {
    ja: {
      heading: 'Solunaiの5つの',
      headingHighlight: '製造DXソリューション',
      description: 'Solunaiは、包括的なAIスタックを数週間で製造現場に導入します。すべてのプロセスに統一されたデータ基盤を提供し、工場データを接続、構造化、分析するAIエージェントを活用します。',
      solutions: [
        {
          id: 'digital-twin',
          icon: '🔷',
          title: 'デジタルツイン',
          description: '工場のすべてのデータソース（IT、OT、クラウド、エッジ）からデータをキャプチャし、リアルタイムで動的に更新される統合された名前空間に統一します。製造現場の完全なデジタルレプリカを構築。',
          link: '/solutions/digital-twin'
        },
        {
          id: 'computer-vision',
          icon: '👁️',
          title: 'コンピュータビジョン品質管理',
          description: '製造工程全体からサイロ化された非構造化データを、クリーンでモデル化された標準フォーマットに継続的に変換。この統一されたデータ基盤により、インサイト、自動化、エンタープライズ全体のスケーラビリティを実現するAI対応の情報が提供されます。',
          link: '/solutions/computer-vision'
        },
        {
          id: 'predictive-maintenance',
          icon: '🔧',
          title: '予知保全',
          description: '稼働時間、スループット、品質、エネルギー、材料使用量、スケジューリングなど、工場パフォーマンスのあらゆる側面を最適化。AI駆動のインサイト、根本原因分析、エンジニアおよび企業運営のためのベンチマーキングを提供します。',
          link: '/solutions/predictive-maintenance'
        },
        {
          id: 'production-optimization',
          icon: '⚙️',
          title: '生産最適化',
          description: 'AIをオペレーターの業務フローに組み込み、読みやすいグラフィックスとアクション可能なアラートでリアルタイムの意思決定をガイド。複雑な工場データを、生産現場で即座に実行可能なインサイトに変換します。',
          link: '/solutions/production-optimization'
        },
        {
          id: 'global-engineering',
          icon: '🌐',
          title: 'グローバルエンジニアリング',
          description: '単一のプロンプトからAI駆動のアプリケーションを作成。製造とデータサイエンスの両方を理解するエージェントを活用し、ビジネスに合わせたカスタムソリューションを迅速に構築できます。',
          link: '/solutions/global-engineering'
        }
      ],
      learnMore: '詳しく見る'
    },
    en: {
      heading: 'The five solutions of the',
      headingHighlight: 'Solunai Manufacturing DX Stack',
      description: 'Solunai brings the complete AI stack to the factory floor in weeks, with one unified data foundation for every process, and agents that connect, structure, and analyze all plant data.',
      solutions: [
        {
          id: 'digital-twin',
          icon: '🔷',
          title: 'Digital Twin',
          description: 'Capture every data point — IT, OT, cloud, edge — and unify them into a real-time, dynamically updating namespace. Build a complete digital replica of your manufacturing operations.',
          link: '/en/solutions/digital-twin'
        },
        {
          id: 'computer-vision',
          icon: '👁️',
          title: 'Computer Vision QC',
          description: 'Continuously convert siloed, unstructured data from across your manufacturing operations into clean, modeled, and standardized formats. This unified data foundation makes your information AI-ready—unlocking insights, automation, and scalability across the enterprise.',
          link: '/en/solutions/computer-vision'
        },
        {
          id: 'predictive-maintenance',
          icon: '🔧',
          title: 'Predictive Maintenance',
          description: 'Optimize every aspect of plant performance — uptime, throughput, quality, energy, materials usage, scheduling, and more — with AI-powered insights, root cause analysis, and benchmarking for engineers and corporate operations.',
          link: '/en/solutions/predictive-maintenance'
        },
        {
          id: 'production-optimization',
          icon: '⚙️',
          title: 'Production Optimization',
          description: 'Put AI in the loop with operators — guiding real-time decisions with easy to read graphics and actionable alerts. Transform complex factory data into immediately actionable insights on the production floor.',
          link: '/en/solutions/production-optimization'
        },
        {
          id: 'global-engineering',
          icon: '🌐',
          title: 'Global Engineering',
          description: 'Create AI-powered applications from a single prompt. Enlist agents that speak both manufacturing and data science to rapidly build custom solutions tailored to your business needs.',
          link: '/en/solutions/global-engineering'
        }
      ],
      learnMore: 'Learn More'
    }
  };

  const t = content[lang];

  return (
    <section className="solutions-stack">
      <div className="solutions-stack-container">
        <div className="solutions-stack-left">
          <h2 className="solutions-stack-heading">
            {t.heading}
            <br />
            <span className="solutions-stack-heading-highlight">{t.headingHighlight}</span>
          </h2>
          <p className="solutions-stack-description">{t.description}</p>
        </div>

        <div className="solutions-stack-right">
          {t.solutions.map((solution) => (
            <div key={solution.id} className="solution-card">
              <h3 className="solution-card-title">{solution.title}</h3>
              <p className="solution-card-description">{solution.description}</p>
              <Link href={solution.link} className="solution-card-button">
                {t.learnMore}
              </Link>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SolutionsStack;
