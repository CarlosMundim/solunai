import React from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import SCEHero from '@/components/technology/SCEHero';
import SCEResearchBanner from '@/components/technology/SCEResearchBanner';
import SCEArchitecture from '@/components/technology/SCEArchitecture';
import SCEProducts from '@/components/technology/SCEProducts';
import SCECTA from '@/components/technology/SCECTA';

export const metadata = {
  title: 'Solunai Continuity Engine (SCE) - Continuity AI Technology | Solunai',
  description: 'Traditional AI resets every session. SCE is a continuity architecture with long-term memory, failure tracking, and role-based behavioral stability. The new standard for manufacturing AI.',
};

export default function TechnologyPage() {
  return (
    <>
      <Header lang="en" />
      <main>
        <SCEHero lang="en" />
        <SCEResearchBanner lang="en" />
        <SCEArchitecture lang="en" />
        <SCEProducts lang="en" />
        <SCECTA lang="en" />
      </main>
      <Footer lang="en" />
    </>
  );
}
