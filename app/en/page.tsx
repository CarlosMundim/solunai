'use client';

import Header from '@/components/Header';
import Hero from '@/components/Hero';
import ValueProposition from '@/components/ValueProposition';
import ProblemSolution from '@/components/ProblemSolution';
import ScrollingSection from '@/components/ScrollingSection';
import FBMHighlight from '@/components/FBMHighlight';

export default function EnglishHome() {
  return (
    <main className="min-h-screen">
      <Header lang="en" />
      <Hero lang="en" />
      <ValueProposition lang="en" />
      <ProblemSolution lang="en" />
      <ScrollingSection lang="en" />
      <FBMHighlight lang="en" />
    </main>
  );
}
