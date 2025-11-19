import React from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import GlobalEngineeringHero from '@/components/GlobalEngineeringHero';
import WorldEmpPartnership from '@/components/WorldEmpPartnership';
import GlobalEngineeringTalentPool from '@/components/GlobalEngineeringTalentPool';
import GlobalEngineeringProcess from '@/components/GlobalEngineeringProcess';
import Dimensions47Preview from '@/components/Dimensions47Preview';
import GlobalEngineeringBenefits from '@/components/GlobalEngineeringBenefits';
import GlobalEngineeringCTA from '@/components/GlobalEngineeringCTA';

export const metadata = {
  title: 'Global Engineering Deployment | Solunai',
  description: 'WorldEmp partnership delivers world-class engineers globally in 2-6 weeks. Deploy talent in Japan, Europe, Americas, and worldwide. 52x faster than traditional hiring, 30-40% cost reduction, cultural matching guaranteed.',
  keywords: 'global engineering, talent deployment, WorldEmp, engineering outsourcing, manufacturing talent, international hiring, worldwide engineers, dispatch engineers',
};

export default function GlobalEngineeringPageEN() {
  return (
    <>
      <Header lang="en" />
      <main>
        <GlobalEngineeringHero lang="en" />
        <WorldEmpPartnership lang="en" />
        <GlobalEngineeringTalentPool lang="en" />
        <GlobalEngineeringProcess lang="en" />
        <Dimensions47Preview lang="en" />
        <GlobalEngineeringBenefits lang="en" />
        <GlobalEngineeringCTA lang="en" />
      </main>
      <Footer lang="en" />
    </>
  );
}
