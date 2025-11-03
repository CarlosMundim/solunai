import React from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import DigitalTwinHero from '@/components/solutions/digital-twin/DigitalTwinHero';
import ProblemSolution from '@/components/solutions/digital-twin/ProblemSolution';
import WhatIsDigitalTwin from '@/components/solutions/digital-twin/WhatIsDigitalTwin';
import KeyCapabilities from '@/components/solutions/digital-twin/KeyCapabilities';
import PartnershipLogos from '@/components/solutions/digital-twin/PartnershipLogos';
import FBMCaseStudy from '@/components/solutions/digital-twin/FBMCaseStudy';
import ImplementationFramework from '@/components/solutions/digital-twin/ImplementationFramework';
import DigitalTwinCTA from '@/components/solutions/digital-twin/DigitalTwinCTA';

export const metadata = {
  title: '中小製造業のためのデジタルツイン統合プラットフォーム - Solunai',
  description: 'Siemens、PTC、Dassaultなど大手ベンダーのデジタルツイン技術を、中小企業でも導入可能な価格で。既存設備をそのまま活用し、マルチベンダーシステムを統合。ISA-95標準準拠の統合スペシャリスト。FBM Hudson Italiana 実績。',
};

export default function DigitalTwinPage() {
  return (
    <>
      <Header lang="ja" />
      <main>
        <DigitalTwinHero lang="ja" />
        <ProblemSolution lang="ja" />
        <WhatIsDigitalTwin lang="ja" />
        <KeyCapabilities lang="ja" />
        <PartnershipLogos lang="ja" />
        <FBMCaseStudy lang="ja" />
        <ImplementationFramework lang="ja" />
        <DigitalTwinCTA lang="ja" />
      </main>
      <Footer lang="ja" />
    </>
  );
}
