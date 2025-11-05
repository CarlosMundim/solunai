'use client';

import Header from '@/components/Header';
import CaseStudiesHero from '@/components/about/CaseStudiesHero';
import FeaturedCaseStudy from '@/components/about/FeaturedCaseStudy';
import OtherCaseStudies from '@/components/about/OtherCaseStudies';
import BecomeACaseStudy from '@/components/about/BecomeACaseStudy';
import Footer from '@/components/Footer';

export default function CaseStudiesPage() {
  return (
    <main className="min-h-screen">
      <Header lang="en" />
      <CaseStudiesHero lang="en" />
      <FeaturedCaseStudy lang="en" />
      <OtherCaseStudies lang="en" />
      <BecomeACaseStudy lang="en" />
      <Footer lang="en" />
    </main>
  );
}
