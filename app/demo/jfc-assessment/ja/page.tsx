import React from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import JFCAssessmentHero from '@/components/demo/JFCAssessmentHero';
import ScenarioAssessment from '@/components/demo/ScenarioAssessment';

export const metadata = {
  title: 'JFC - 日本適合係数評価 | Solunai',
  description: 'Solunai日本適合係数（JFC）を体験 - 日本の職場文化適合性のための14シナリオ状況判断評価。',
};

export default function JFCAssessmentPageJA() {
  return (
    <>
      <Header lang="ja" />
      <main>
        <JFCAssessmentHero lang="ja" />
        <ScenarioAssessment lang="ja" />
      </main>
      <Footer lang="ja" />
    </>
  );
}
