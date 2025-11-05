'use client';

import Header from '@/components/Header';
import TeamHero from '@/components/team/TeamHero';
import CoFounderProfile from '@/components/team/CoFounderProfile';
import CompanyPhilosophy from '@/components/team/CompanyPhilosophy';
import Values from '@/components/team/Values';
import TeamCTA from '@/components/team/TeamCTA';
import Footer from '@/components/Footer';

export default function TeamPageJA() {
  return (
    <main className="min-h-screen">
      <Header lang="ja" />
      <TeamHero lang="ja" />

      {/* チームメンバープロフィール */}
      <section className="team-profiles">
        <CoFounderProfile
          lang="ja"
          name="Carlos Magno Freitas Mundim"
          title="最高技術責任者（CTO）"
          role="cto"
          image="/images/team/carlos-mundim.jpg"
        />
        <CoFounderProfile
          lang="ja"
          name="Tomoo Hara"
          nameJapanese="原 知夫"
          title="マネージングディレクター"
          role="md"
          image="/images/team/tomoo-hara.jpg"
        />
        <CoFounderProfile
          lang="ja"
          name="Jeanette van Niekerk"
          title="オペレーションディレクター"
          role="coo"
          image="/images/team/jeanette-van-niekerk.jpg"
        />
      </section>

      <CompanyPhilosophy lang="ja" />
      <Values lang="ja" />
      <TeamCTA lang="ja" />
      <Footer lang="ja" />
    </main>
  );
}
