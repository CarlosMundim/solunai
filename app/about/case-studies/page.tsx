'use client';

import Header from '@/components/Header';
import CaseStudiesHero from '@/components/about/CaseStudiesHero';
import FeaturedCaseStudy from '@/components/about/FeaturedCaseStudy';
import OtherCaseStudies from '@/components/about/OtherCaseStudies';
import BecomeACaseStudy from '@/components/about/BecomeACaseStudy';
import Footer from '@/components/Footer';

export default function CaseStudiesPageJA() {
  return (
    <main className="min-h-screen">
      <Header lang="ja" />
      <CaseStudiesHero lang="ja" />
      <FeaturedCaseStudy lang="ja" />
      <OtherCaseStudies lang="ja" />
      <BecomeACaseStudy lang="ja" />
      <Footer lang="ja" />
    </main>
  );
}
