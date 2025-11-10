'use client';

import Header from '@/components/Header';
import TeamHero from '@/components/team/TeamHero';
import TeamGrid from '@/components/team/TeamGrid';
import CompanyPhilosophy from '@/components/team/CompanyPhilosophy';
import Values from '@/components/team/Values';
import TeamCTA from '@/components/team/TeamCTA';
import Footer from '@/components/Footer';

export default function TeamPage() {
  return (
    <main className="min-h-screen">
      <Header lang="en" />
      <TeamHero lang="en" />
      <TeamGrid lang="en" />
      <CompanyPhilosophy lang="en" />
      <Values lang="en" />
      <TeamCTA lang="en" />
      <Footer lang="en" />
    </main>
  );
}
