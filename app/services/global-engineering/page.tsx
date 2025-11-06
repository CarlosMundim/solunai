import React from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import GlobalEngineeringHero from '@/components/GlobalEngineeringHero';
import GlobalEngineeringTalentPool from '@/components/GlobalEngineeringTalentPool';
import GlobalEngineeringProcess from '@/components/GlobalEngineeringProcess';
import GlobalEngineeringBenefits from '@/components/GlobalEngineeringBenefits';
import GlobalEngineeringCTA from '@/components/GlobalEngineeringCTA';

export const metadata = {
  title: 'グローバルエンジニアリング配備 | Solunai',
  description: 'WorldEmpパートナーシップで2-6週間で世界クラスのエンジニアを配備。従来の採用より52倍速く、30-40%のコスト削減、文化的マッチング保証。',
  keywords: 'グローバルエンジニアリング, 人材配備, WorldEmp, エンジニアリングアウトソーシング, 製造業人材, 国際採用',
};

export default function GlobalEngineeringPageJA() {
  return (
    <>
      <Header lang="ja" />
      <main>
        <GlobalEngineeringHero lang="ja" />
        <GlobalEngineeringTalentPool lang="ja" />
        <GlobalEngineeringProcess lang="ja" />
        <GlobalEngineeringBenefits lang="ja" />
        <GlobalEngineeringCTA lang="ja" />
      </main>
      <Footer lang="ja" />
    </>
  );
}
