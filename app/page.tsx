'use client';

import Header from '@/components/Header';
import Hero from '@/components/Hero';
import ValueProposition from '@/components/ValueProposition';
import ProblemSolution from '@/components/ProblemSolution';
import ScrollingSection from '@/components/ScrollingSection';
import FBMHighlight from '@/components/FBMHighlight';

export default function Home() {
  return (
    <main className="min-h-screen">
      <Header lang="ja" />
      <Hero lang="ja" />
      <ValueProposition lang="ja" />
      <ProblemSolution lang="ja" />
      <ScrollingSection lang="ja" />
      <FBMHighlight lang="ja" />
    </main>
  );
}
