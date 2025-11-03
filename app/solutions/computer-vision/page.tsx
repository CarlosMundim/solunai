import React from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import DigitalTwinHero from '@/components/solutions/digital-twin/DigitalTwinHero';
import KeyCapabilities from '@/components/solutions/digital-twin/KeyCapabilities';
import DigitalTwinCTA from '@/components/solutions/digital-twin/DigitalTwinCTA';

export const metadata = {
  title: 'コンピュータビジョン品質管理 - Solunai',
  description: '製造工程全体からサイロ化された非構造化データを、クリーンでモデル化された標準フォーマットに継続的に変換。AIによる自動検査で品質を向上。',
};

export default function ComputerVisionPage() {
  return (
    <>
      <Header lang="ja" />
      <main>
        <section className="digital-twin-hero">
          <div className="digital-twin-hero-container">
            <div className="digital-twin-hero-badge">コンピュータビジョン品質管理</div>
            <h1 className="digital-twin-hero-heading">
              AIによる自動検査で<br />
              <span className="digital-twin-hero-heading-highlight">品質を革新</span>
            </h1>
            <p className="digital-twin-hero-description">
              コンピュータビジョンとディープラーニングを活用し、製造工程における品質検査を自動化。人間の目では見逃しやすい微細な欠陥も高精度で検出し、リアルタイムでフィードバックを提供します。
            </p>
          </div>
        </section>
        <DigitalTwinCTA lang="ja" />
      </main>
      <Footer lang="ja" />
    </>
  );
}
