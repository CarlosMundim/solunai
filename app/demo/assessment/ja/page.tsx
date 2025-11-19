import React from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import AssessmentHeroJA from '@/components/demo/AssessmentHeroJA';
import AssessmentFormJA from '@/components/demo/AssessmentFormJA';

export const metadata = {
  title: '47次元文化適合性評価デモ | Solunai',
  description: 'Solunai継続エンジンを体験 - 日本の職場で成功するためのAI駆動文化適合性評価。',
};

export default function AssessmentDemoPageJA() {
  return (
    <>
      <Header lang="ja" />
      <main>
        <AssessmentHeroJA />
        <AssessmentFormJA />
      </main>
      <Footer lang="ja" />
    </>
  );
}
