'use client';

import Header from '@/components/Header';
import TeamHero from '@/components/team/TeamHero';
import TeamGrid from '@/components/team/TeamGrid';
import CompanyPhilosophy from '@/components/team/CompanyPhilosophy';
import Values from '@/components/team/Values';
import TeamCTA from '@/components/team/TeamCTA';
import Footer from '@/components/Footer';

export default function TeamPageJA() {
  return (
    <main className="min-h-screen">
      <Header lang="ja" />
      <TeamHero lang="ja" />
      <TeamGrid lang="ja" />
      <CompanyPhilosophy lang="ja" />
      <Values lang="ja" />
      <TeamCTA lang="ja" />
      <Footer lang="ja" />
    </main>
  );
}
