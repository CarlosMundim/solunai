'use client';

import React, { useState } from 'react';
import Header from '@/components/Header';
import SolutionsHero from '@/components/SolutionsHero';
import SolutionCard, { SolutionData } from '@/components/SolutionCard';
import SolutionDetail, { DetailedSolution } from '@/components/SolutionDetail';
import PricingTable from '@/components/PricingTable';
import ROICalculator from '@/components/ROICalculator';
import TechPartners from '@/components/TechPartners';
import ImplementationProcess from '@/components/ImplementationProcess';
import SolutionsFAQ from '@/components/SolutionsFAQ';
import SolutionsCTA from '@/components/SolutionsCTA';

export default function SolutionsPage() {
  const [selectedSolution, setSelectedSolution] = useState<string | null>(null);

  const solutions: SolutionData[] = [
    {
      id: 'quotation',
      icon: '📝',
      name: 'AI見積自動化',
      targetIndustry: 'HVAC・カスタム製造',
      keyProblem: '手動見積は10-15分/件、エラー率15-20%で営業効率を阻害',
      benefits: [
        '見積時間90%削減（10分→1分）',
        '精度95%向上（エラーほぼゼロ）',
        '処理量3倍増加',
        '利益率15%改善'
      ],
      pricingRange: '実装：¥800K-1.5M / 年間：¥300K',
      roi: 'ROI：4-6ヶ月',
      status: '✓ FBM実績',
      statusBadge: 'deployed',
      accentColor: '#0066cc'
    },
    {
      id: 'predictive',
      icon: '🔧',
      name: '予知保全',
      targetIndustry: '設備集約型製造',
      keyProblem: '計画外ダウンタイムで年間¥2-5M損失、設備稼働率65%',
      benefits: [
        '計画外ダウンタイム40%削減',
        '72時間前に故障予測',
        '設備稼働率65%→95%',
        '年間¥2-5M削減'
      ],
      pricingRange: '実装：¥1.2M-2.5M / 年間：¥500K',
      roi: 'ROI：6-12ヶ月',
      status: 'フェーズ2',
      statusBadge: 'in-progress',
      accentColor: '#28a745'
    },
    {
      id: 'vision',
      icon: '👁️',
      name: 'コンピュータビジョンQC',
      targetIndustry: '精密・量産製造',
      keyProblem: '手動検査はサンプリング10%のみ、不良検出率67%',
      benefits: [
        '不良検出率67%→95%',
        '検査速度27倍向上',
        '不良品率8-12%→2%未満',
        '100%検査カバレッジ'
      ],
      pricingRange: '実装：¥1.5M-3M / 年間：¥600K',
      roi: 'ROI：6-9ヶ月',
      status: 'フェーズ2',
      statusBadge: 'in-progress',
      accentColor: '#ffc107'
    },
    {
      id: 'scheduling',
      icon: '🤖',
      name: 'AI生産計画',
      targetIndustry: '多品種製造',
      keyProblem: '固定スケジュールで設備稼働率60-70%、手動計画に数時間',
      benefits: [
        'スループット15-25%向上',
        '設備稼働率65%→95%',
        '計画最適化を分単位で実現',
        '変更への柔軟な対応'
      ],
      pricingRange: '実装：¥2M-4M / 年間：¥800K',
      roi: 'ROI：9-12ヶ月',
      status: 'ロードマップ',
      statusBadge: 'roadmap',
      accentColor: '#dc3545'
    }
  ];

  const detailedSolutions: { [key: string]: DetailedSolution } = {
    quotation: {
      id: 'quotation',
      name: 'AIによる見積自動化',
      targetIndustries: [
        '✓ HVAC・空調設備製造',
        '✓ カスタム機械・装置製造',
        '✓ オーダーメイド製造業',
        '✓ 受注生産型企業'
      ],
      problemsSolved: [
        '❌ 手動計算：エンジニアが10-15分/見積',
        '❌ 高エラー率：15-20%の価格設定ミス',
        '❌ スケール不可：営業チームを効率的に拡大できない',
        '❌ 機会損失：遅い応答時間で競合に負ける'
      ],
      solutionFeatures: [
        '✓ NLP技術によるデータシート自動抽出',
        '✓ HTRI熱計算の完全自動化（HVAC向け）',
        '✓ カスタムMLモデルによる価格最適化',
        '✓ BOM自動生成とコスト見積',
        '✓ 多言語対応（日本語・英語・イタリア語など）',
        '✓ ERP統合（既存システムと連携）'
      ],
      techStack: [
        '• Claude AI / GPT-4（自然言語処理）',
        '• HTRI統合（熱計算エンジン）',
        '• Python/TensorFlow（機械学習）',
        '• React + Node.js',
        '• Azure Cloud',
        '• お客様のERP連携'
      ],
      results: [
        { metric: '時間削減', value: '90%' },
        { metric: '精度向上', value: '95%' },
        { metric: '処理能力', value: '3倍' },
        { metric: '利益率改善', value: '15%' }
      ],
      investment: {
        implementation: '¥800,000 - ¥1,500,000',
        annualLicense: '¥300,000',
        support: '¥60,000/年',
        payback: '4-6ヶ月',
        annualSavings: '¥5M-¥10M（中規模製造業）'
      },
      caseStudy: {
        client: '✓ FBM Hudson Italiana（イタリア・UAE）',
        contract: '契約規模：€2.5M-€3.8M',
        results: '成果：見積時間10分→1分、納期14-21日→48-72時間'
      },
      useCases: [
        '• カスタムHVAC製造：熱計算自動化',
        '• 機械装置製造：複雑なBOM自動生成',
        '• 受注生産：多品種少量見積の効率化'
      ],
      accentColor: '#0066cc'
    },
    predictive: {
      id: 'predictive',
      name: '予知保全',
      targetIndustries: [
        '✓ 自動車部品製造',
        '✓ 電子機器組立',
        '✓ 機械加工',
        '✓ 設備集約型製造全般'
      ],
      problemsSolved: [
        '❌ 計画外ダウンタイムで年間¥2-5M損失',
        '❌ 事後対応型保全（故障してから修理）',
        '❌ 12-15%の計画外ダウンタイム',
        '❌ 設備故障を予測できない'
      ],
      solutionFeatures: [
        '✓ LSTM神経ネットワークで故障予測',
        '✓ IoTセンサー統合（振動、温度、電力）',
        '✓ 72時間前警告システム',
        '✓ Azure IoT Hubでリアルタイム監視',
        '✓ 設備履歴で訓練したカスタムMLモデル'
      ],
      techStack: [
        '• LSTM神経ネットワーク',
        '• Azure IoT Hub',
        '• Python/TensorFlow',
        '• 振動・温度・電力センサー',
        '• リアルタイムダッシュボード',
        '• 予兆検知アルゴリズム'
      ],
      results: [
        { metric: 'ダウンタイム削減', value: '40%' },
        { metric: '事前警告', value: '72時間' },
        { metric: '設備稼働率', value: '65→95%' },
        { metric: '年間削減額', value: '¥2-5M' }
      ],
      investment: {
        implementation: '¥1,200,000 - ¥2,500,000',
        annualLicense: '¥500,000',
        support: '¥100,000/年',
        payback: '6-12ヶ月',
        annualSavings: '¥2M-¥5M（設備集約型工場）'
      },
      caseStudy: {
        client: 'FBM Hudson フェーズ2（計画中）',
        contract: '2025年第2四半期展開予定',
        results: '目標：ダウンタイム40%削減、設備稼働率30%向上'
      },
      useCases: [
        '• 自動車部品：CNC機械の予防保全',
        '• 電子機器：組立ラインの最適化',
        '• 機械加工：工具寿命予測と自動交換'
      ],
      accentColor: '#28a745'
    },
    vision: {
      id: 'vision',
      name: 'コンピュータビジョン品質管理',
      targetIndustries: [
        '✓ 自動車部品製造',
        '✓ 電子機器組立',
        '✓ 精密機械加工',
        '✓ 大量生産製造'
      ],
      problemsSolved: [
        '❌ 手動検査がボトルネック',
        '❌ サンプリング検査（5-10%のみ）',
        '❌ 不良検出率67%（33%見逃し）',
        '❌ 不良品率8-12%（高コスト）'
      ],
      solutionFeatures: [
        '✓ 検査ステーションに高解像度カメラ',
        '✓ コンピュータビジョンAI（PyTorchモデル）',
        '✓ 数千サンプルで訓練した不良検出',
        '✓ リアルタイムオペレーター警告',
        '✓ 100%検査カバレッジ'
      ],
      techStack: [
        '• PyTorch（画像認識モデル）',
        '• 高解像度産業用カメラ',
        '• Edge AI処理（低遅延）',
        '• 不良分類システム',
        '• リアルタイムアラート',
        '• 品質データ分析'
      ],
      results: [
        { metric: '不良検出率', value: '67→95%' },
        { metric: '検査速度', value: '27倍' },
        { metric: '不良品率', value: '8→2%' },
        { metric: '検査カバレッジ', value: '100%' }
      ],
      investment: {
        implementation: '¥1,500,000 - ¥3,000,000',
        annualLicense: '¥600,000',
        support: '¥120,000/年',
        payback: '6-9ヶ月',
        annualSavings: '¥10M-¥20M（不良削減・人件費削減）'
      },
      caseStudy: {
        client: 'FBM Hudson フェーズ2（導入中）',
        contract: '2025年第3四半期本格稼働',
        results: '目標：不良品率28%削減、検査コスト50%削減'
      },
      useCases: [
        '• 自動車部品：表面欠陥検査（傷、変色）',
        '• 電子機器：はんだ接合品質検査',
        '• 精密加工：寸法精度の自動測定'
      ],
      accentColor: '#ffc107'
    },
    scheduling: {
      id: 'scheduling',
      name: 'AI生産スケジューリング',
      targetIndustries: [
        '✓ ジョブショップ製造',
        '✓ カスタム製作',
        '✓ 多品種少量生産',
        '✓ 複雑な製造フロー'
      ],
      problemsSolved: [
        '❌ 固定スケジュール（非効率）',
        '❌ 設備稼働率60-70%（30-40%アイドル）',
        '❌ 緊急注文や遅延に対応できない',
        '❌ 手動スケジューリングに数時間/数日'
      ],
      solutionFeatures: [
        '✓ スウォームロボティクス協調（ROS）',
        '✓ 強化学習による最適化',
        '✓ リアルタイム条件に基づく動的タスク割当',
        '✓ 既存CNC機械・ロボットと統合',
        '✓ 自律衝突回避'
      ],
      techStack: [
        '• ROS（Robot Operating System）',
        '• 強化学習（Q-learning）',
        '• リアルタイム最適化エンジン',
        '• CNC統合インターフェース',
        '• 生産シミュレーター',
        '• スケジュール可視化ダッシュボード'
      ],
      results: [
        { metric: 'スループット向上', value: '15-25%' },
        { metric: '設備稼働率', value: '65→95%' },
        { metric: '最適化時間', value: '分単位' },
        { metric: '柔軟性', value: '高' }
      ],
      investment: {
        implementation: '¥2,000,000 - ¥4,000,000',
        annualLicense: '¥800,000',
        support: '¥160,000/年',
        payback: '9-12ヶ月',
        annualSavings: '¥15M-¥30M（スループット向上）'
      },
      caseStudy: {
        client: 'ロードマップ2026（次期開発フェーズ）',
        contract: '2026年第1四半期開発開始予定',
        results: 'パイロットプログラム：中規模製造業2-3社'
      },
      useCases: [
        '• ジョブショップ：複数注文の最適順序',
        '• カスタム製作：リソース配分最適化',
        '• 多品種生産：段取り時間最小化'
      ],
      accentColor: '#dc3545'
    }
  };

  const handleLearnMore = (id: string) => {
    setSelectedSolution(id);
  };

  const handleCloseDetail = () => {
    setSelectedSolution(null);
  };

  return (
    <main className="min-h-screen bg-white">
      <Header lang="ja" />
      <SolutionsHero lang="ja" />

      {/* Solutions Grid */}
      <section style={{ padding: '80px 24px', background: 'white' }}>
        <div style={{ maxWidth: '1200px', margin: '0 auto' }}>
          <div
            style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
              gap: '32px'
            }}
          >
            {solutions.map((solution) => (
              <SolutionCard
                key={solution.id}
                solution={solution}
                onLearnMore={handleLearnMore}
                lang="ja"
              />
            ))}
          </div>
        </div>
      </section>

      <PricingTable lang="ja" />
      <ROICalculator lang="ja" />
      <TechPartners lang="ja" />
      <ImplementationProcess lang="ja" />
      <SolutionsFAQ lang="ja" />
      <SolutionsCTA lang="ja" />

      {/* Solution Detail Modal */}
      {selectedSolution && detailedSolutions[selectedSolution] && (
        <SolutionDetail
          solution={detailedSolutions[selectedSolution]}
          onClose={handleCloseDetail}
          lang="ja"
        />
      )}
    </main>
  );
}
