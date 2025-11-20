import React from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import JFCAssessmentHero from '@/components/demo/JFCAssessmentHero';
import ScenarioAssessment from '@/components/demo/ScenarioAssessment';

export const metadata = {
  title: 'JFC - Japanese Fit Coefficient Assessment | Solunai',
  description: 'Experience the Solunai Japanese Fit Coefficient (JFC) - 14-scenario situational judgment assessment for Japanese workplace cultural compatibility.',
};

export default function JFCAssessmentPage() {
  return (
    <>
      <Header lang="en" />
      <main>
        <JFCAssessmentHero lang="en" />
        <ScenarioAssessment lang="en" />
      </main>
      <Footer lang="en" />
    </>
  );
}
