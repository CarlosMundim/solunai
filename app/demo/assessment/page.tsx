import React from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import AssessmentHero from '@/components/demo/AssessmentHero';
import AssessmentForm from '@/components/demo/AssessmentForm';
import AssessmentResults from '@/components/demo/AssessmentResults';

export const metadata = {
  title: '47 Dimensions Cultural Assessment Demo | Solunai',
  description: 'Experience the Solunai Continuity Engine - AI-powered cultural compatibility assessment for Japanese workplace success.',
};

export default function AssessmentDemoPage() {
  return (
    <>
      <Header lang="en" />
      <main>
        <AssessmentHero />
        <AssessmentForm />
        {/* AssessmentResults will show after form submission */}
      </main>
      <Footer lang="en" />
    </>
  );
}
