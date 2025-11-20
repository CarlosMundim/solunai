import React from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import ProductExplanation from '@/components/ProductExplanation';

export const metadata = {
  title: '文化適合性評価エンジン | Solunai',
  description: '日本企業で働く外国人労働者向けのSolunai文化適合性評価エンジン。14の職場シナリオで調和、階層、コミュニケーション、チーム統合、定着可能性を測定。',
};

export default function ProductPageJA() {
  return (
    <>
      <Header lang="ja" />
      <main>
        <ProductExplanation lang="ja" />
      </main>
      <Footer lang="ja" />
    </>
  );
}
