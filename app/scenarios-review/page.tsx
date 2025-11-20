import React from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import ScenariosReview from '@/components/ScenariosReview';

export const metadata = {
  title: 'JFC Scenarios Review - For Chachie | Solunai',
  description: 'Complete 14 scenarios with scoring matrix for Chachie review. Tiger sharing knowledge for collaborative improvement.',
};

export default function ScenariosReviewPage() {
  return (
    <>
      <Header lang="en" />
      <main>
        <ScenariosReview />
      </main>
      <Footer lang="en" />
    </>
  );
}
