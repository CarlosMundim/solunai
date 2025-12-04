'use client';

import Header from '@/components/Header';
import HeroVideo from '@/components/HeroVideo';
import TrustIndicatorsBar from '@/components/TrustIndicatorsBar';
import ProblemSolution from '@/components/ProblemSolution';
import SolutionsGrid from '@/components/SolutionsGrid';
import KodaSceSection from '@/components/KodaSceSection';
import TechnologyPartners from '@/components/TechnologyPartners';
import ContactCTA from '@/components/ContactCTA';
import Footer from '@/components/Footer';

// 8-Section Homepage Structure (Japanese B2B Enterprise Standard)
// 1. Header (navigation)
// 2. Hero (value proposition)
// 3. Trust Indicators Bar (trust signals)
// 4. Problem + Solution (consolidated)
// 5. Solutions Grid (5 solutions)
// 6. Technology & Partnerships
// 7. Contact CTA (Download Materials + Schedule Assessment)
// 8. Footer

export default function EnglishHome() {
  return (
    <main className="min-h-screen">
      <Header lang="en" />
      <HeroVideo lang="en" />
      <TrustIndicatorsBar lang="en" />
      <ProblemSolution lang="en" />
      <SolutionsGrid lang="en" />
      <KodaSceSection />
      <TechnologyPartners lang="en" />
      <ContactCTA lang="en" />
      <Footer lang="en" />
    </main>
  );
}
