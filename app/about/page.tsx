'use client';

import Header from '@/components/Header';
import AboutHero from '@/components/about/AboutHero';
import MissionVision from '@/components/about/MissionVision';
import CoreValues from '@/components/about/CoreValues';
import TeamGrid from '@/components/team/TeamGrid';
import Timeline from '@/components/team/Timeline';
import GlobalPresence from '@/components/about/GlobalPresence';
import WhyTrust from '@/components/about/WhyTrust';
import AboutCTA from '@/components/about/AboutCTA';
import Footer from '@/components/Footer';

export default function AboutPageJA() {
  return (
    <main className="min-h-screen">
      <Header lang="ja" />
      <AboutHero lang="ja" />
      <MissionVision lang="ja" />
      <CoreValues lang="ja" />
      <TeamGrid lang="ja" />
      <Timeline lang="ja" />
      <GlobalPresence lang="ja" />
      <WhyTrust lang="ja" />
      <AboutCTA lang="ja" />
      <Footer lang="ja" />
    </main>
  );
}
