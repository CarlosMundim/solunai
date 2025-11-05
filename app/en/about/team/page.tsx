'use client';

import Header from '@/components/Header';
import TeamHero from '@/components/team/TeamHero';
import CoFounderProfile from '@/components/team/CoFounderProfile';
import CompanyPhilosophy from '@/components/team/CompanyPhilosophy';
import Values from '@/components/team/Values';
import TeamCTA from '@/components/team/TeamCTA';
import Footer from '@/components/Footer';

export default function TeamPage() {
  return (
    <main className="min-h-screen">
      <Header lang="en" />
      <TeamHero lang="en" />

      {/* Team Member Profiles */}
      <section className="team-profiles">
        <CoFounderProfile
          lang="en"
          name="Carlos Magno Freitas Mundim"
          title="Chief Technology Officer (CTO)"
          role="cto"
          image="/images/team/carlos-mundim.jpg"
        />
        <CoFounderProfile
          lang="en"
          name="Tomoo Hara"
          nameJapanese="原 知夫"
          title="Managing Director"
          role="md"
          image="/images/team/tomoo-hara.jpg"
        />
        <CoFounderProfile
          lang="en"
          name="Jeanette van Niekerk"
          title="Operations Director"
          role="coo"
          image="/images/team/jeanette-van-niekerk.jpg"
        />
      </section>

      <CompanyPhilosophy lang="en" />
      <Values lang="en" />
      <TeamCTA lang="en" />
      <Footer lang="en" />
    </main>
  );
}
