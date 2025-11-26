'use client';

import Header from '@/components/Header';
import HeroVideo from '@/components/HeroVideo';
import TrustIndicatorsBar from '@/components/TrustIndicatorsBar';
import ProblemSolution from '@/components/ProblemSolution';
import SolutionsGrid from '@/components/SolutionsGrid';
import AIFirstModel from '@/components/AIFirstModel';
import ClientSuccess from '@/components/ClientSuccess';
import TechnologyPartners from '@/components/TechnologyPartners';
import ContactCTA from '@/components/ContactCTA';
import Footer from '@/components/Footer';

// 9-Section Homepage Structure (Japanese B2B Norms + International Best Practices)
// 1. Header (navigation)
// 2. Hero (value proposition)
// 3. Trust Indicators Bar (信頼の証 - years, experience, certifications)
// 4. Problem + Solution (consolidated)
// 5. Solutions Grid (4 products)
// 6. Why Solunai / Differentiators (AIFirstModel)
// 7. Case Studies / Client Success (導入事例)
// 8. Certifications (認定・準拠)
// 9. Contact CTA (資料請求 + お問い合わせ)

export default function Home() {
  return (
    <main className="min-h-screen">
      <Header lang="ja" />
      <HeroVideo lang="ja" />
      <TrustIndicatorsBar lang="ja" />
      <ProblemSolution lang="ja" />
      <SolutionsGrid lang="ja" />
      <AIFirstModel lang="ja" />
      <ClientSuccess lang="ja" />
      <TechnologyPartners lang="ja" />
      <ContactCTA lang="ja" />
      <Footer lang="ja" />
    </main>
  );
}
