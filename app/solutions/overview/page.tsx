import React from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import OverviewHero from '@/components/solutions/overview/OverviewHero';
import SolutionsStack from '@/components/solutions/overview/SolutionsStack';
import TechnologyFeatures from '@/components/solutions/overview/TechnologyFeatures';
import TechnologyPartners from '@/components/solutions/overview/TechnologyPartners';
import FinalCTA from '@/components/solutions/overview/FinalCTA';

export const metadata = {
  title: 'ソリューション概要 - Solunai',
  description: 'Solunaiの5つの製造DXソリューション。デジタルツイン、コンピュータビジョン、予知保全、生産最適化、グローバルエンジニアリング。',
};

export default function SolutionsOverviewPage() {
  return (
    <>
      <Header lang="ja" />
      <main>
        <OverviewHero lang="ja" />
        <SolutionsStack lang="ja" />
        <TechnologyFeatures lang="ja" />
        <TechnologyPartners lang="ja" />
        <FinalCTA lang="ja" />
      </main>
      <Footer lang="ja" />
    </>
  );
}
