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
// 3. Trust Indicators Bar (trust signals - years, experience, certifications)
// 4. Problem + Solution (consolidated)
// 5. Solutions Grid (4 products)
// 6. Why Solunai / Differentiators (AIFirstModel)
// 7. Case Studies / Client Success
// 8. Certifications
// 9. Contact CTA (Download Materials + Schedule Assessment)

export default function EnglishHome() {
  return (
    <main className="min-h-screen">
      <Header lang="en" />
      <HeroVideo lang="en" />
      <TrustIndicatorsBar lang="en" />
      <ProblemSolution lang="en" />
      <SolutionsGrid lang="en" />
      <AIFirstModel lang="en" />
      <ClientSuccess lang="en" />
      <TechnologyPartners lang="en" />
      <ContactCTA lang="en" />
      <Footer lang="en" />
    </main>
  );
}
