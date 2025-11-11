'use client';

import Header from '@/components/Header';
import AboutHero from '@/components/about/AboutHero';
import MissionVision from '@/components/about/MissionVision';
import CoreValues from '@/components/about/CoreValues';
import Timeline from '@/components/team/Timeline';
import GlobalPresence from '@/components/about/GlobalPresence';
import WhyTrust from '@/components/about/WhyTrust';
import AboutCTA from '@/components/about/AboutCTA';
import Footer from '@/components/Footer';

export default function AboutPage() {
  return (
    <main className="min-h-screen">
      <Header lang="en" />
      <AboutHero lang="en" />
      <MissionVision lang="en" />
      <CoreValues lang="en" />
      <Timeline lang="en" />
      <GlobalPresence lang="en" />
      <WhyTrust lang="en" />
      <AboutCTA lang="en" />
      <Footer lang="en" />
    </main>
  );
}
