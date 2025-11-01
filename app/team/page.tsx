'use client';

import Header from '@/components/Header';
import TeamHero from '@/components/team/TeamHero';
import CoFounderProfile from '@/components/team/CoFounderProfile';
import CompanyPhilosophy from '@/components/team/CompanyPhilosophy';
import Values from '@/components/team/Values';
import Timeline from '@/components/team/Timeline';
import WhyTrustUs from '@/components/team/WhyTrustUs';
import TeamCTA from '@/components/team/TeamCTA';
import './team.css';

export default function TeamPage() {
  return (
    <main className="min-h-screen">
      <Header lang="ja" />
      <TeamHero lang="ja" />

      {/* Co-Founder Profiles */}
      <section className="team-profiles">
        <CoFounderProfile
          lang="ja"
          name="Carlos Magno Freitas Mundim"
          title="共同創業者 兼 最高技術責任者（CTO）"
          role="cto"
          image="/images/team/carlos-mundim.jpg"
        />
        <CoFounderProfile
          lang="ja"
          name="古屋 知夫"
          nameRomaji="Tomoo Furuya"
          title="共同創業者 兼 最高経営責任者（CEO）"
          role="ceo"
          image="/images/team/tomoo-furuya.jpg"
        />
      </section>

      <CompanyPhilosophy lang="ja" />
      <Values lang="ja" />
      <Timeline lang="ja" />
      <WhyTrustUs lang="ja" />
      <TeamCTA lang="ja" />
    </main>
  );
}
