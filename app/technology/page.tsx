import React from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import SCEHero from '@/components/technology/SCEHero';
import SCEArchitecture from '@/components/technology/SCEArchitecture';
import SCEProducts from '@/components/technology/SCEProducts';
import SCECTA from '@/components/technology/SCECTA';

export const metadata = {
  title: 'Solunai Continuity Engine (SCE) - 継続性AIテクノロジー | Solunai',
  description: '従来のAIはセッションごとにリセット。SCEは長期記憶、失敗追跡、役割ベースの行動安定性を備えた継続性アーキテクチャ。製造業向けAIの新しい標準。',
};

export default function TechnologyPage() {
  return (
    <>
      <Header lang="ja" />
      <main>
        <SCEHero lang="ja" />
        <SCEArchitecture lang="ja" />
        <SCEProducts lang="ja" />
        <SCECTA lang="ja" />
      </main>
      <Footer lang="ja" />
    </>
  );
}
