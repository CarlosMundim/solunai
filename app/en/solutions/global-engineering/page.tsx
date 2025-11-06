import React from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import GlobalEngineeringHero from '@/components/solutions/global-engineering/GlobalEngineeringHero';
import GEWhatIsGE from '@/components/solutions/global-engineering/GEWhatIsGE';
import GEKeyCapabilities from '@/components/solutions/global-engineering/GEKeyCapabilities';
import GlobalEngineeringCTA from '@/components/solutions/global-engineering/GlobalEngineeringCTA';

export const metadata = {
  title: 'Global Engineering - Access World-Class Talent | Solunai',
  description: 'Global talent platform for Japanese manufacturing. Secure mechanical, electrical, and software engineers in 2-6 weeks. 50-70% cost reduction, 24/7 development cycles, Japanese quality standards. Manufacturing-focused expertise to accelerate your development.',
};

export default function GlobalEngineeringPage() {
  return (
    <>
      <Header lang="en" />
      <main>
        <GlobalEngineeringHero lang="en" />
        <GEWhatIsGE lang="en" />
        <GEKeyCapabilities lang="en" />
        <GlobalEngineeringCTA lang="en" />
      </main>
      <Footer lang="en" />
    </>
  );
}
