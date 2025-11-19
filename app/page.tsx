'use client';

import Header from '@/components/Header';
import HeroVideo from '@/components/HeroVideo';
import ProblemStatement from '@/components/ProblemStatement';
import ValueProposition from '@/components/ValueProposition';
import AIFirstModel from '@/components/AIFirstModel';
import StatementBanner from '@/components/StatementBanner';
import StackedCards from '@/components/StackedCards';
import SolutionsHeadline from '@/components/SolutionsHeadline';
import ClientSuccess from '@/components/ClientSuccess';
import TechnologyPartners from '@/components/TechnologyPartners';
import SCESection from '@/components/SCESection';
import PrimaryCTA from '@/components/PrimaryCTA';
import Footer from '@/components/Footer';

export default function Home() {
  return (
    <main className="min-h-screen">
      <Header lang="ja" />
      <HeroVideo lang="ja" />
      <ProblemStatement lang="ja" />
      <ValueProposition lang="ja" />
      <AIFirstModel lang="ja" />
      <StatementBanner lang="ja" />
      <StackedCards lang="ja" />
      <SolutionsHeadline lang="ja" />
      <ClientSuccess lang="ja" />
      <TechnologyPartners lang="ja" />
      <SCESection lang="ja" />
      <PrimaryCTA lang="ja" />
      <Footer lang="ja" />
    </main>
  );
}
