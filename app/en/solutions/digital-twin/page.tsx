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
  title: 'Digital Twin Integration Platform - Solunai',
  description: 'Multi-vendor Digital Twin integration platform for SME manufacturers. Leverage Siemens, PTC, Dassault technologies at affordable prices. ISA-95 compliant, proven with FBM Hudson Italiana.',
  keywords: 'Digital Twin, Manufacturing, IoT, Real-time Data, Factory Automation, NVIDIA Omniverse, ISA-95, Multi-vendor Integration',
};

export default function DigitalTwinPage() {
  return (
    <>
      <Header lang="en" />
      <main>
        <DigitalTwinHero lang="en" />
        <ProblemSolution lang="en" />
        <WhatIsDigitalTwin lang="en" />
        <KeyCapabilities lang="en" />
        <PartnershipLogos lang="en" />
        <FBMCaseStudy lang="en" />
        <ImplementationFramework lang="en" />
        <DigitalTwinCTA lang="en" />
      </main>
      <Footer lang="en" />
    </>
  );
}
