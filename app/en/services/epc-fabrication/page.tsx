import React from 'react';
import Header from '@/components/Header';
import EPCFabricationHero from '@/components/EPCFabricationHero';
import EPCFabricationServices from '@/components/EPCFabricationServices';
import EPCFabricationBenefits from '@/components/EPCFabricationBenefits';
import EPCFabricationCTA from '@/components/EPCFabricationCTA';

export const metadata = {
  title: 'EPC & Fabrication Services | Solunai',
  description: 'Complete turnkey plant solutions from engineering to commissioning. 60+ years expertise, on-time delivery, quality guaranteed with 24/7 support.',
  keywords: 'EPC services, plant engineering, equipment fabrication, turnkey solutions, manufacturing construction, industrial automation',
};

export default function EPCFabricationPageEN() {
  return (
    <main>
      <Header lang="en" />
      <EPCFabricationHero lang="en" />
      <EPCFabricationServices lang="en" />
      <EPCFabricationBenefits lang="en" />
      <EPCFabricationCTA lang="en" />
    </main>
  );
}
