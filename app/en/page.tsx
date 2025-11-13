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
import PrimaryCTA from '@/components/PrimaryCTA';
import Footer from '@/components/Footer';

export default function EnglishHome() {
  return (
    <main className="min-h-screen">
      <Header lang="en" />
      <HeroVideo lang="en" />
      <ProblemStatement lang="en" />
      <ValueProposition lang="en" />
      <AIFirstModel lang="en" />
      <StatementBanner lang="en" />
      <StackedCards lang="en" />
      <SolutionsHeadline lang="en" />
      <ClientSuccess lang="en" />
      <TechnologyPartners lang="en" />
      <PrimaryCTA lang="en" />
      <Footer lang="en" />
    </main>
  );
}
