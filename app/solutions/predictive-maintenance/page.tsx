import React from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import PredictiveMaintenanceHero from '@/components/solutions/predictive-maintenance/PredictiveMaintenanceHero';
import PMKeyCapabilities from '@/components/solutions/predictive-maintenance/PMKeyCapabilities';
import PMWhatIsPM from '@/components/solutions/predictive-maintenance/PMWhatIsPM';
import PartnershipLogos from '@/components/solutions/digital-twin/PartnershipLogos';
import PredictiveMaintenanceCTA from '@/components/solutions/predictive-maintenance/PredictiveMaintenanceCTA';

export const metadata = {
  title: '予知保全 - Solunai',
  description: 'AI予知保全で設備故障を事前に予測。計画外ダウンタイムを最大80%削減し、保全コストを年間40%削減。センサーとAIで設備の健全性を24時間監視。',
  keywords: '予知保全, AI, 機械学習, 設備保全, ダウンタイム削減, コスト削減, 製造業DX',
};

export default function PredictiveMaintenancePage() {
  return (
    <>
      <Header lang="ja" />
      <main>
        <PredictiveMaintenanceHero lang="ja" />
        <PMKeyCapabilities lang="ja" />
        <PMWhatIsPM lang="ja" />
        <PartnershipLogos lang="ja" />
        <PredictiveMaintenanceCTA lang="ja" />
      </main>
      <Footer lang="ja" />
    </>
  );
}
