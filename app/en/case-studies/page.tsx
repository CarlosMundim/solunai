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

export default function EnglishCaseStudiesPage() {
  return (
    <main className="min-h-screen">
      <Header lang="en" />
      <CaseStudyHero lang="en" />
      <CompanyProfile lang="en" />
      <ChallengeSection lang="en" />
      <SolutionSection lang="en" />
      <ResultsMetrics lang="en" />
      <ROIChart lang="en" />
      <Testimonial lang="en" />
      <TechnologyStack lang="en" />
      <FutureCases lang="en" />
      <CaseStudyCTA lang="en" />
    </main>
  );
}
