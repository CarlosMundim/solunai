import React from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import DigitalTwinCTA from '@/components/solutions/digital-twin/DigitalTwinCTA';

export const metadata = {
  title: '生産最適化 - Solunai',
  description: 'AIをオペレーターの業務フローに組み込み、読みやすいグラフィックスとアクション可能なアラートでリアルタイムの意思決定をガイド。',
};

export default function ProductionOptimizationPage() {
  return (
    <>
      <Header lang="ja" />
      <main>
        <section className="digital-twin-hero">
          <div className="digital-twin-hero-container">
            <div className="digital-twin-hero-badge">生産最適化</div>
            <h1 className="digital-twin-hero-heading">
              リアルタイムデータで<br />
              <span className="digital-twin-hero-heading-highlight">生産性を最大化</span>
            </h1>
            <p className="digital-twin-hero-description">
              AIがオペレーターの意思決定をリアルタイムでサポート。複雑な工場データを読みやすいダッシュボードに変換し、実行可能なアラートを提供します。生産効率の向上とコスト削減を同時に実現します。
            </p>
          </div>
        </section>
        <DigitalTwinCTA lang="ja" />
      </main>
      <Footer lang="ja" />
    </>
  );
}
