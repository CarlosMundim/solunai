'use client';

import Header from '@/components/Header';
import TeamHero from '@/components/team/TeamHero';
import CoFounderProfile from '@/components/team/CoFounderProfile';
import CompanyPhilosophy from '@/components/team/CompanyPhilosophy';
import Values from '@/components/team/Values';
import Timeline from '@/components/team/Timeline';
import WhyTrustUs from '@/components/team/WhyTrustUs';
import TeamCTA from '@/components/team/TeamCTA';
import '../../team.css';

export default function TeamPageEN() {
  return (
    <main className="min-h-screen">
      <Header lang="en" />
      <TeamHero lang="en" />

      {/* Co-Founder Profiles */}
      <section className="team-profiles">
        <CoFounderProfile
          lang="en"
          name="Carlos Magno Freitas Mundim"
          title="Co-Founder & Chief Technology Officer (CTO)"
          role="cto"
          image="/images/team/carlos-mundim.jpg"
        />
        <CoFounderProfile
          lang="en"
          name="Tomoo Furuya"
          nameJapanese="古屋 知夫"
          title="Co-Founder & Chief Executive Officer (CEO)"
          role="ceo"
          image="/images/team/tomoo-furuya.jpg"
        />
      </section>

      <CompanyPhilosophy lang="en" />
      <Values lang="en" />
      <Timeline lang="en" />
      <WhyTrustUs lang="en" />
      <TeamCTA lang="en" />
    </main>
  );
}
