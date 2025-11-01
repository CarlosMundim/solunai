'use client';

import Header from '@/components/Header';
import Hero from '@/components/Hero';
import ScrollingSection from '@/components/ScrollingSection';

export default function EnglishHome() {
  return (
    <main className="min-h-screen">
      <Header lang="en" />
      <Hero lang="en" />
      <ScrollingSection lang="en" />
    </main>
  );
}
