'use client';

import Header from '@/components/Header';
import HeroVideo from '@/components/HeroVideo';
import TrustIndicatorsBar from '@/components/TrustIndicatorsBar';
import ProblemSolution from '@/components/ProblemSolution';
import SolutionsGrid from '@/components/SolutionsGrid';
import BenefitsList from '@/components/BenefitsList';
import ContactCTA from '@/components/ContactCTA';
import Footer from '@/components/Footer';

// 8-Section Homepage Structure (Salaryman/SME Language)
// 1. Header (navigation)
// 2. Hero (AIだけど、ちゃんと「人」を見る)
// 3. Trust Indicators Bar (4つの価値)
// 4. Problem + Solution (困りごと + Solunaiの考え方)
// 5. Solutions Grid (4つのサービス)
// 6. Benefits List (こう変わる)
// 7. Contact CTA (まずは、話を聞いてみませんか？)
// 8. Footer

export default function Home() {
  return (
    <main className="min-h-screen">
      <Header lang="ja" />
      <HeroVideo lang="ja" />
      <TrustIndicatorsBar lang="ja" />
      <ProblemSolution lang="ja" />
      <SolutionsGrid lang="ja" />
      <BenefitsList lang="ja" />
      <ContactCTA lang="ja" />
      <Footer lang="ja" />
    </main>
  );
}
