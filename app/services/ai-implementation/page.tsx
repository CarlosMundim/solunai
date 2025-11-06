import React from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import AIImplementationHero from '@/components/AIImplementationHero';
import AIImplementationProcess from '@/components/AIImplementationProcess';
import AIImplementationTech from '@/components/AIImplementationTech';
import AIImplementationBenefits from '@/components/AIImplementationBenefits';
import AIImplementationCTA from '@/components/AIImplementationCTA';

export const metadata = {
  title: 'AI実装サービス | Solunai',
  description: 'アセスメントから本番稼働まで完全なAI実装。5段階の実証済みプロセス、2-4週間スプリント、ROI保証付き配信、24/7サポート。',
  keywords: 'AI実装, 機械学習導入, Computer Vision, 予測保全, 製造業AI',
};

export default function AIImplementationPageJA() {
  return (
    <>
      <Header lang="ja" />
      <main>
        <AIImplementationHero lang="ja" />
        <AIImplementationProcess lang="ja" />
        <AIImplementationTech lang="ja" />
        <AIImplementationBenefits lang="ja" />
        <AIImplementationCTA lang="ja" />
      </main>
      <Footer lang="ja" />
    </>
  );
}
