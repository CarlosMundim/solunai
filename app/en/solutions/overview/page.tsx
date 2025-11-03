import React from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import OverviewHero from '@/components/solutions/overview/OverviewHero';
import SolutionsStack from '@/components/solutions/overview/SolutionsStack';
import TechnologyFeatures from '@/components/solutions/overview/TechnologyFeatures';
import TechnologyPartners from '@/components/solutions/overview/TechnologyPartners';
import FinalCTA from '@/components/solutions/overview/FinalCTA';

export const metadata = {
  title: 'Solutions Overview - Solunai',
  description: 'The five Solunai Manufacturing DX solutions. Digital Twin, Computer Vision, Predictive Maintenance, Production Optimization, Global Engineering.',
};

export default function SolutionsOverviewPage() {
  return (
    <>
      <Header lang="en" />
      <main>
        <OverviewHero lang="en" />
        <SolutionsStack lang="en" />
        <TechnologyFeatures lang="en" />
        <TechnologyPartners lang="en" />
        <FinalCTA lang="en" />
      </main>
      <Footer lang="en" />
    </>
  );
}
