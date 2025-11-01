'use client';

import Header from '@/components/Header';
import HeroVideo from '@/components/HeroVideo';
import ProblemStatement from '@/components/ProblemStatement';
import ValueProposition from '@/components/ValueProposition';
import StatementBanner from '@/components/StatementBanner';
import StackedCards from '@/components/StackedCards';
import ClientSuccess from '@/components/ClientSuccess';
import TechnologyPartners from '@/components/TechnologyPartners';
import PrimaryCTA from '@/components/PrimaryCTA';

export default function Home() {
  return (
    <main className="min-h-screen">
      <Header lang="ja" />
      <HeroVideo lang="ja" />
      <ProblemStatement lang="ja" />
      <ValueProposition lang="ja" />
      <StatementBanner lang="ja" />
      <StackedCards lang="ja" />
      <ClientSuccess lang="ja" />
      <TechnologyPartners lang="ja" />
      <PrimaryCTA lang="ja" />
    </main>
  );
}
