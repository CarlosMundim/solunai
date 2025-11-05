import React from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import GlobalEngineeringHero from '@/components/solutions/global-engineering/GlobalEngineeringHero';
import GEWhatIsGE from '@/components/solutions/global-engineering/GEWhatIsGE';
import GEKeyCapabilities from '@/components/solutions/global-engineering/GEKeyCapabilities';
import DigitalTwinCTA from '@/components/solutions/digital-twin/DigitalTwinCTA';

export const metadata = {
  title: 'グローバルエンジニアリング - 世界中の優秀な技術者と | Solunai',
  description: '日本の製造業向けグローバル人材活用プラットフォーム。機械・電気・ソフトウェアエンジニアを2-6週間で確保。50-70%のコスト削減、24時間開発体制、日本品質基準の徹底。製造業特化の専門知識で、貴社の開発を加速します。',
};

export default function GlobalEngineeringPage() {
  return (
    <>
      <Header lang="ja" />
      <main>
        <GlobalEngineeringHero lang="ja" />
        <GEWhatIsGE lang="ja" />
        <GEKeyCapabilities lang="ja" />
        <DigitalTwinCTA lang="ja" />
      </main>
      <Footer lang="ja" />
    </>
  );
}
