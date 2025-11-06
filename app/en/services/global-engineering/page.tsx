import React from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import GlobalEngineeringHero from '@/components/GlobalEngineeringHero';
import GlobalEngineeringTalentPool from '@/components/GlobalEngineeringTalentPool';
import GlobalEngineeringProcess from '@/components/GlobalEngineeringProcess';
import GlobalEngineeringBenefits from '@/components/GlobalEngineeringBenefits';
import GlobalEngineeringCTA from '@/components/GlobalEngineeringCTA';

export const metadata = {
  title: 'Global Engineering Deployment | Solunai',
  description: 'WorldEmp partnership delivers world-class engineers in 2-6 weeks. 52x faster than traditional hiring, 30-40% cost reduction, cultural matching guaranteed.',
  keywords: 'global engineering, talent deployment, WorldEmp, engineering outsourcing, manufacturing talent, international hiring',
};

export default function GlobalEngineeringPageEN() {
  return (
    <>
      <Header lang="en" />
      <main>
        <GlobalEngineeringHero lang="en" />
        <GlobalEngineeringTalentPool lang="en" />
        <GlobalEngineeringProcess lang="en" />
        <GlobalEngineeringBenefits lang="en" />
        <GlobalEngineeringCTA lang="en" />
      </main>
      <Footer lang="en" />
    </>
  );
}
