'use client';

import Header from '@/components/Header';
import CaseStudyHero from '@/components/CaseStudyHero';
import CompanyProfile from '@/components/CompanyProfile';
import ChallengeSection from '@/components/ChallengeSection';
import SolutionSection from '@/components/SolutionSection';
import ResultsMetrics from '@/components/ResultsMetrics';
import ROIChart from '@/components/ROIChart';
import Testimonial from '@/components/Testimonial';
import TechnologyStack from '@/components/TechnologyStack';
import FutureCases from '@/components/FutureCases';
import CaseStudyCTA from '@/components/CaseStudyCTA';

export default function CaseStudiesPage() {
  return (
    <main className="min-h-screen">
      <Header lang="ja" />
      <CaseStudyHero lang="ja" />
      <CompanyProfile lang="ja" />
      <ChallengeSection lang="ja" />
      <SolutionSection lang="ja" />
      <ResultsMetrics lang="ja" />
      <ROIChart lang="ja" />
      <Testimonial lang="ja" />
      <TechnologyStack lang="ja" />
      <FutureCases lang="ja" />
      <CaseStudyCTA lang="ja" />
    </main>
  );
}
