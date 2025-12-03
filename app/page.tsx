'use client';

import Header from '@/components/Header';
import HeroVideo from '@/components/HeroVideo';
import TrustIndicatorsBar from '@/components/TrustIndicatorsBar';
import ProblemSolution from '@/components/ProblemSolution';
import SolutionsGrid from '@/components/SolutionsGrid';
import TechnologyPartners from '@/components/TechnologyPartners';
import ContactCTA from '@/components/ContactCTA';
import Footer from '@/components/Footer';

// 8-Section Homepage Structure (Japanese B2B Enterprise Standard)
// 1. Header (navigation)
// 2. Hero (value proposition)
// 3. Trust Indicators Bar (信頼の証)
// 4. Problem + Solution (consolidated)
// 5. Solutions Grid (5 solutions)
// 6. Technology & Partnerships
// 7. Contact CTA (資料請求 + お問い合わせ)
// 8. Footer

export default function Home() {
  return (
    <main className="min-h-screen">
      <Header lang="ja" />
      <HeroVideo lang="ja" />
      <TrustIndicatorsBar lang="ja" />
      <ProblemSolution lang="ja" />
      <SolutionsGrid lang="ja" />
      <TechnologyPartners lang="ja" />
      <ContactCTA lang="ja" />
      <Footer lang="ja" />
    </main>
  );
}
