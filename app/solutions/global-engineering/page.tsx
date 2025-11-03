import React from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import DigitalTwinCTA from '@/components/solutions/digital-twin/DigitalTwinCTA';

export const metadata = {
  title: 'グローバルエンジニアリング - Solunai',
  description: '単一のプロンプトからAI駆動のアプリケーションを作成。製造とデータサイエンスの両方を理解するエージェントを活用し、ビジネスに合わせたカスタムソリューションを迅速に構築。',
};

export default function GlobalEngineeringPage() {
  return (
    <>
      <Header lang="ja" />
      <main>
        <section className="digital-twin-hero">
          <div className="digital-twin-hero-container">
            <div className="digital-twin-hero-badge">グローバルエンジニアリング</div>
            <h1 className="digital-twin-hero-heading">
              AIエージェントで<br />
              <span className="digital-twin-hero-heading-highlight">カスタムソリューションを迅速開発</span>
            </h1>
            <p className="digital-twin-hero-description">
              製造業とデータサイエンスの両方を理解するAIエージェントが、あなたのビジネスに最適なソリューションを提案・構築します。単一のプロンプトから、数週間でカスタムアプリケーションを開発可能です。
            </p>
          </div>
        </section>
        <DigitalTwinCTA lang="ja" />
      </main>
      <Footer lang="ja" />
    </>
  );
}
