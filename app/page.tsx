'use client';

import Header from '@/components/Header';
import Hero from '@/components/Hero';
import ScrollingSection from '@/components/ScrollingSection';

export default function Home() {
  return (
    <main className="min-h-screen">
      <Header lang="ja" />
      <Hero lang="ja" />
      <ScrollingSection lang="ja" />
    </main>
  );
}
