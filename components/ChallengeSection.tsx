'use client';

import React from 'react';
import { BarChart3, Cog, Search, Calendar } from 'lucide-react';
import './ChallengeSection.css';

interface ChallengeSectionProps {
  lang: 'ja' | 'en';
}

const challengeIcons = {
  quotation: BarChart3,
  engineering: Cog,
  quality: Search,
  scheduling: Calendar,
};

const ChallengeSection: React.FC<ChallengeSectionProps> = ({ lang }) => {
  const content = {
    ja: {
      heading: '課題',
      intro: 'FBM Hudsonは84年の歴史を持つカスタムエンジニアリング企業として、複雑な熱交換器の設計・製造において以下の課題に直面していました：',
      challenges: [
        {
          title: '見積プロセス',
          iconKey: 'quotation',
          items: [
            '手動計算：エンジニアが10分以上/見積',
            '高いエラー率：15-20%の価格設定ミス',
            '遅い応答時間：競合に商機を失う',
            'スケール不可：営業チームが効率的に拡大できない'
          ]
        },
        {
          title: 'エンジニアリング',
          iconKey: 'engineering',
          items: [
            '長納期：14-21日の設計・見積提出時間',
            'ボトルネック：シニアエンジニアに集中',
            '知識の属人化：84年の設計知見が個人に依存',
            '容量制限：同時対応可能な案件数が限定'
          ]
        },
        {
          title: '品質管理',
          iconKey: 'quality',
          items: [
            'サンプリング検査：5-10%のみ検査',
            '欠陥検出率：67%（見逃し33%）',
            'スクラップ率：8-12%（高コスト）',
            '手動プロセス：時間と人手を消費'
          ]
        },
        {
          title: '生産スケジューリング',
          iconKey: 'scheduling',
          items: [
            '固定スケジュール：非効率',
            '設備稼働率：65%（35%が遊休）',
            '予期せぬダウンタイム：12%（高コスト）'
          ]
        }
      ]
    },
    en: {
      heading: 'The Challenge',
      intro: 'As an 84-year custom engineering company, FBM Hudson faced these challenges in designing and manufacturing complex heat exchangers:',
      challenges: [
        {
          title: 'Quotation Process',
          iconKey: 'quotation',
          items: [
            'Manual calculations: 10+ minutes per quote by engineers',
            'High error rate: 15-20% pricing mistakes',
            'Slow response time: Lost opportunities to competitors',
            'Cannot scale: Sales team cannot expand efficiently'
          ]
        },
        {
          title: 'Engineering',
          iconKey: 'engineering',
          items: [
            'Long turnaround: 14-21 days for design and quotation',
            'Bottleneck: Concentration on senior engineers',
            'Knowledge concentration: 84 years of design knowledge dependent on individuals',
            'Capacity limit: Limited number of simultaneous projects'
          ]
        },
        {
          title: 'Quality Control',
          iconKey: 'quality',
          items: [
            'Sampling inspection: Only 5-10% inspected',
            'Defect detection: 67% (33% missed)',
            'Scrap rate: 8-12% (high cost)',
            'Manual process: Time and labor intensive'
          ]
        },
        {
          title: 'Production Scheduling',
          iconKey: 'scheduling',
          items: [
            'Fixed schedules: Inefficient',
            'Equipment utilization: 65% (35% idle)',
            'Unplanned downtime: 12% (high cost)'
          ]
        }
      ]
    }
  };

  const currentContent = content[lang];

  return (
    <section className="challenge-section">
      <div className="challenge-container">
        <h2 className="challenge-heading">{currentContent.heading}</h2>
        <p className="challenge-intro">{currentContent.intro}</p>

        <div className="challenges-grid">
          {currentContent.challenges.map((challenge, index) => {
            const IconComponent = challengeIcons[challenge.iconKey as keyof typeof challengeIcons];
            return (
              <div key={index} className="challenge-card">
                <div className="challenge-icon">
                  <IconComponent size={32} strokeWidth={1.5} />
                </div>
                <h3 className="challenge-title">{challenge.title}</h3>
                <ul className="challenge-items">
                  {challenge.items.map((item, itemIndex) => (
                    <li key={itemIndex}>{item}</li>
                  ))}
                </ul>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default ChallengeSection;
