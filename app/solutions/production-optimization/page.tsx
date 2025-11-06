import React from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import ProductionOptimizationHero from '@/components/solutions/production-optimization/ProductionOptimizationHero';
import POKeyCapabilities from '@/components/solutions/production-optimization/POKeyCapabilities';
import POWhatIsPO from '@/components/solutions/production-optimization/POWhatIsPO';
import PartnershipLogos from '@/components/solutions/digital-twin/PartnershipLogos';
import ProductionOptimizationCTA from '@/components/solutions/production-optimization/ProductionOptimizationCTA';

export const metadata = {
  title: 'AI生産最適化 - Solunai',
  description: 'データ駆動型でスループット向上、無駄削減、リソース最適配分を実現。OEEを改善し、エネルギーコストを10-20%削減。中小製造業向けAI生産最適化ソリューション。',
};

export default function ProductionOptimizationPage() {
  return (
    <>
      <Header lang="ja" />
      <main>
        <ProductionOptimizationHero lang="ja" />
        <POKeyCapabilities lang="ja" />
        <POWhatIsPO lang="ja" />
        <PartnershipLogos lang="ja" />
        <ProductionOptimizationCTA lang="ja" />
      </main>
      <Footer lang="ja" />
    </>
  );
}
