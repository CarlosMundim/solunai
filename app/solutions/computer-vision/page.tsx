import React from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import ComputerVisionHero from '@/components/solutions/computer-vision/ComputerVisionHero';
import CVKeyCapabilities from '@/components/solutions/computer-vision/CVKeyCapabilities';
import CVWhatIsCV from '@/components/solutions/computer-vision/CVWhatIsCV';
import PartnershipLogos from '@/components/solutions/digital-twin/PartnershipLogos';
import DigitalTwinCTA from '@/components/solutions/digital-twin/DigitalTwinCTA';

export const metadata = {
  title: 'コンピュータビジョン品質管理 - Solunai',
  description: '製造工程全体からサイロ化された非構造化データを、クリーンでモデル化された標準フォーマットに継続的に変換。AIによる自動検査で品質を向上。',
};

export default function ComputerVisionPage() {
  return (
    <>
      <Header lang="ja" />
      <main>
        <ComputerVisionHero lang="ja" />
        <CVKeyCapabilities lang="ja" />
        <CVWhatIsCV lang="ja" />
        <PartnershipLogos lang="ja" />
        <DigitalTwinCTA lang="ja" />
      </main>
      <Footer lang="ja" />
    </>
  );
}
