import React from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import DigitalTwinCTA from '@/components/solutions/digital-twin/DigitalTwinCTA';

export const metadata = {
  title: '予知保全 - Solunai',
  description: '稼働時間、スループット、品質、エネルギー、材料使用量、スケジューリングなど、工場パフォーマンスのあらゆる側面を最適化。AI駆動のインサイトで設備故障を予測。',
};

export default function PredictiveMaintenancePage() {
  return (
    <>
      <Header lang="ja" />
      <main>
        <section className="digital-twin-hero">
          <div className="digital-twin-hero-container">
            <div className="digital-twin-hero-badge">予知保全</div>
            <h1 className="digital-twin-hero-heading">
              AIで設備故障を予測し<br />
              <span className="digital-twin-hero-heading-highlight">ダウンタイムを削減</span>
            </h1>
            <p className="digital-twin-hero-description">
              機械学習アルゴリズムにより、設備の状態をリアルタイムで監視し、故障の兆候を早期に検知します。予測保全により、計画外のダウンタイムを最大80%削減し、保全コストを大幅に低減します。
            </p>
          </div>
        </section>
        <DigitalTwinCTA lang="ja" />
      </main>
      <Footer lang="ja" />
    </>
  );
}
