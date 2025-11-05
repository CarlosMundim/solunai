import React from 'react';
import Header from '@/components/Header';
import AIImplementationHero from '@/components/AIImplementationHero';
import AIImplementationProcess from '@/components/AIImplementationProcess';
import AIImplementationTech from '@/components/AIImplementationTech';
import AIImplementationBenefits from '@/components/AIImplementationBenefits';
import AIImplementationCTA from '@/components/AIImplementationCTA';

export const metadata = {
  title: 'AI Implementation Services | Solunai',
  description: 'Complete AI implementation from assessment to production. 5-phase proven process, 2-4 week sprints, ROI-guaranteed delivery with 24/7 support.',
  keywords: 'AI implementation, machine learning deployment, computer vision, predictive maintenance, manufacturing AI',
};

export default function AIImplementationPageEN() {
  return (
    <main>
      <Header lang="en" />
      <AIImplementationHero lang="en" />
      <AIImplementationProcess lang="en" />
      <AIImplementationTech lang="en" />
      <AIImplementationBenefits lang="en" />
      <AIImplementationCTA lang="en" />
    </main>
  );
}
