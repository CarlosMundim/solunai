import React from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import ProductExplanation from '@/components/ProductExplanation';

export const metadata = {
  title: 'Cultural Assessment Engine | Solunai',
  description: 'Solunai cultural compatibility assessment engine for foreign workers in Japanese companies. 14 workplace scenarios measuring harmony, hierarchy, communication, team integration, and retention likelihood.',
};

export default function ProductPage() {
  return (
    <>
      <Header lang="en" />
      <main>
        <ProductExplanation lang="en" />
      </main>
      <Footer lang="en" />
    </>
  );
}
