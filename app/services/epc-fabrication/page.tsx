import React from 'react';
import Header from '@/components/Header';
import EPCFabricationHero from '@/components/EPCFabricationHero';
import EPCFabricationServices from '@/components/EPCFabricationServices';
import EPCFabricationBenefits from '@/components/EPCFabricationBenefits';
import EPCFabricationCTA from '@/components/EPCFabricationCTA';

export const metadata = {
  title: 'EPC & 製作サービス | Solunai',
  description: 'エンジニアリングから試運転まで完全なターンキープラント・ソリューション。60年以上の専門知識、予定通り配信、品質保証、24/7サポート。',
  keywords: 'EPCサービス, プラント設計, 設備製作, ターンキーソリューション, 製造業建設, 産業自動化',
};

export default function EPCFabricationPageJA() {
  return (
    <main>
      <Header lang="ja" />
      <EPCFabricationHero lang="ja" />
      <EPCFabricationServices lang="ja" />
      <EPCFabricationBenefits lang="ja" />
      <EPCFabricationCTA lang="ja" />
    </main>
  );
}
