'use client';

import React from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';

const engineerRoles = [
  {
    title: '機械学習エンジニア',
    description: '品質予測、設備保全、生産計画のための予測モデルを、お客様の工場データを活用して設計・構築します。',
  },
  {
    title: 'コンピュータビジョン専門家',
    description: '外観検査や画像認識システムを開発し、目視検査の支援または自動化を実現します。',
  },
  {
    title: 'オートメーションエンジニア',
    description: 'AIロジックと実際の設備（PLC、ロボット、センサー）を接続し、改善効果を現場で実感できる形にします。',
  },
  {
    title: 'データサイエンティスト',
    description: '設備、システム、センサーからのデータを統合し、ダッシュボード、KPIモニタリング、改善シナリオへと展開します。',
  },
  {
    title: '製造プロセスエンジニア',
    description: '現場の監督者やオペレーターと共に工場フロアに立ち、プロセス調整、スタッフ教育、新しいワークフローの定着を支援します。',
  },
];

const implementationPhases = [
  {
    phase: '1',
    title: 'アセスメント・設計',
    duration: '1〜2ヶ月',
    description: '工場訪問、システム・データ調査、経営層および現場チームとの協議を行います。',
    deliverable: '明確なロードマップとROI試算',
  },
  {
    phase: '2',
    title: 'プラットフォーム・データ構築',
    duration: '3〜6ヶ月',
    description: 'AIプラットフォームの導入、データ接続（IoT、ERP、既存システム）、初期モデル作成。WorldEmpエンジニアがオンサイトまたはリモートでサポート可能です。',
    deliverable: '実データに接続された動作パイロット',
  },
  {
    phase: '3',
    title: '最適化・展開拡大',
    duration: '7〜9ヶ月',
    description: 'モデルチューニング、パフォーマンス改善、より多くのライン・製品・プロセスへの展開を進めます。',
    deliverable: '合意された精度とサイクルタイム改善を達成した安定運用',
  },
  {
    phase: '4',
    title: '教育・引き継ぎ',
    duration: '10〜12ヶ月',
    description: 'オペレーター・監督者への教育、ドキュメント作成、SOP整備、次のステップの共同レビューを行います。',
    deliverable: 'システム運用のための内部能力構築（継続サポートはオプション）',
  },
];

const faqItems = [
  {
    question: '導入にはどのくらいの期間がかかりますか？',
    answer: 'ほとんどの導入は、初期アセスメントから安定運用まで12ヶ月のサイクルで進みます。正確なスケジュールは、お客様のプロセスの複雑さとプロジェクトの範囲によって異なります。',
  },
  {
    question: 'エンジニアは日本国内で現場作業ができますか？',
    answer: 'はい。WorldEmpを通じて、重要なフェーズにおけるオンサイトサポートを手配できます。多くのタスクは定期的なコミュニケーションを取りながらリモートでも対応可能です。',
  },
  {
    question: '既にAIやデータシステムを持っている場合は？',
    answer: 'お客様の既存インフラに合わせてアプローチを設計します。目標は、お持ちのシステムを不必要に置き換えるのではなく、補完することです。',
  },
  {
    question: '最小プロジェクト規模はありますか？',
    answer: '投資に見合った価値が期待できるプロジェクトを対象としています。短い初回相談で、私たちのアプローチがお客様に適しているかどうかを判断できます。',
  },
];

export default function ServicesPageJA() {
  return (
    <main className="min-h-screen bg-neutral-50">
      <Header lang="ja" />

      {/* Hero Section */}
      <section className="bg-white">
        <div className="mx-auto max-w-5xl px-6 py-16 md:py-20">
          <p className="text-xs font-semibold uppercase tracking-[0.2em] text-sky-700">
            AI + グローバルエンジニア
          </p>
          <h1 className="mt-4 text-2xl font-bold text-neutral-900 md:text-3xl lg:text-4xl" style={{ lineHeight: '1.5' }}>
            製造業改善のためのAI＋グローバルエンジニア
          </h1>
          <p className="mt-6 max-w-3xl text-base leading-relaxed text-neutral-700 md:text-lg" style={{ lineHeight: '2' }}>
            Solunaiは、工場向けAIプラットフォームとWorldEmpの経験豊富なエンジニアを組み合わせています。
            品質、生産性、技術伝承の改善を、明確な成果とともに、段階的にサポートします。
          </p>
          <ul className="mt-6 space-y-2 text-sm text-neutral-600 md:text-base">
            <li className="flex items-start gap-2">
              <span className="mt-1 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-sky-600" />
              アセスメントから現場導入までのエンドツーエンドサポート
            </li>
            <li className="flex items-start gap-2">
              <span className="mt-1 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-sky-600" />
              ソフトウェアだけでなく、AI＋エンジニアリングチーム
            </li>
            <li className="flex items-start gap-2">
              <span className="mt-1 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-sky-600" />
              AI/ML専門人材を自社採用できない中小企業向けに設計
            </li>
          </ul>
        </div>
      </section>

      {/* Value Bar */}
      <section className="border-y border-neutral-200 bg-neutral-100">
        <div className="mx-auto grid max-w-5xl grid-cols-2 gap-4 px-6 py-8 md:grid-cols-4">
          {[
            { label: '想定コスト削減', value: '30〜60%' },
            { label: 'エンジニア配置', value: '2〜6週間' },
            { label: '導入期間', value: '約12ヶ月' },
            { label: '提供プロジェクト価値', value: '€250万以上' },
          ].map((item) => (
            <div key={item.label} className="rounded-xl bg-white px-4 py-4 shadow-sm">
              <p className="text-xs text-neutral-500">{item.label}</p>
              <p className="mt-1 text-lg font-semibold text-neutral-900">{item.value}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Challenge Section */}
      <section className="bg-white py-16 md:py-20">
        <div className="mx-auto max-w-4xl px-6">
          <div className="mb-6 flex items-center gap-3">
            <div className="h-1 w-12 rounded-full bg-sky-600" />
            <span className="text-sm font-semibold uppercase tracking-wider text-sky-700">
              課題
            </span>
          </div>
          <h2 className="text-xl font-bold text-neutral-900 md:text-2xl" style={{ lineHeight: '1.5' }}>
            なぜ今「AI＋エンジニア」が必要なのか
          </h2>
          <div className="mt-6 space-y-4 text-base leading-relaxed text-neutral-700" style={{ lineHeight: '2' }}>
            <p>
              多くの日本の製造業者は、AIやデータが業務改善に役立つことを理解していますが、
              3つの実務的な問題に直面しています：
            </p>
            <ul className="ml-4 space-y-2">
              <li className="flex items-start gap-3">
                <span className="mt-2 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-neutral-400" />
                AI/ML専門人材の採用が非常に困難、特に東京以外では深刻
              </li>
              <li className="flex items-start gap-3">
                <span className="mt-2 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-neutral-400" />
                既存の労働力は高齢化しており、工場職への若手エンジニア確保が困難
              </li>
              <li className="flex items-start gap-3">
                <span className="mt-2 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-neutral-400" />
                ツールを購入しても、現場と適切に接続できる人材がいないことが多い
              </li>
            </ul>
            <p>
              結果として、AIプロジェクトは「パイロット」段階にとどまり、
              工場現場での日常運用には至りません。Solunaiは、このギャップを埋めるために設立されました。
            </p>
          </div>
        </div>
      </section>

      {/* Approach Section */}
      <section className="bg-neutral-50 py-16 md:py-20">
        <div className="mx-auto max-w-4xl px-6">
          <div className="mb-6 flex items-center gap-3">
            <div className="h-1 w-12 rounded-full bg-sky-600" />
            <span className="text-sm font-semibold uppercase tracking-wider text-sky-700">
              アプローチ
            </span>
          </div>
          <h2 className="text-xl font-bold text-neutral-900 md:text-2xl" style={{ lineHeight: '1.5' }}>
            Solunaiのアプローチ：AIプラットフォーム＋エンジニアリングチーム
          </h2>
          <div className="mt-6 space-y-4 text-base leading-relaxed text-neutral-700" style={{ lineHeight: '2' }}>
            <p>Solunaiは以下の両方を提供します：</p>
            <ul className="ml-4 space-y-2">
              <li className="flex items-start gap-3">
                <span className="mt-2 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-sky-600" />
                製造業向け実用AIプラットフォーム（デジタルツイン、コンピュータビジョン、データ分析）
              </li>
              <li className="flex items-start gap-3">
                <span className="mt-2 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-sky-600" />
                パートナーWorldEmpを通じた専門エンジニアへのアクセス（オンサイトまたはリモートで貴社チームと協働）
              </li>
            </ul>
            <p>
              お客様に社内AI部門の構築を求める代わりに、設計、導入、安定化まで
              お客様のエンジニアと共に遂行できる即戦力チームをご提供します。
            </p>
            <p className="text-neutral-600 italic">
              私たちの目標は短期的な「プロジェクト」ではなく、工場の働き方を長期的に改善することです。
            </p>
          </div>
        </div>
      </section>

      {/* Engineer Roles Section */}
      <section className="bg-white py-16 md:py-20">
        <div className="mx-auto max-w-5xl px-6">
          <div className="mb-6 flex items-center gap-3">
            <div className="h-1 w-12 rounded-full bg-sky-600" />
            <span className="text-sm font-semibold uppercase tracking-wider text-sky-700">
              エンジニアリング職種
            </span>
          </div>
          <h2 className="text-xl font-bold text-neutral-900 md:text-2xl" style={{ lineHeight: '1.5' }}>
            Solunaiを通じてアクセスできるエンジニアリング職種
          </h2>
          <p className="mt-4 max-w-3xl text-base text-neutral-700" style={{ lineHeight: '1.8' }}>
            WorldEmpを通じて、5つの主要カテゴリーのエンジニアを提供できます。
            全員が製造業での経験を持ち、SolunaiのAIプラットフォームと緊密に連携して業務を行います。
          </p>
          <div className="mt-8 grid gap-5 md:grid-cols-2">
            {engineerRoles.map((role) => (
              <div
                key={role.title}
                className="rounded-2xl border border-neutral-200 bg-neutral-50 p-6 transition-all hover:border-sky-200 hover:shadow-md"
              >
                <h3 className="text-base font-semibold text-neutral-900" style={{ lineHeight: '1.5' }}>{role.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-neutral-600" style={{ lineHeight: '1.8' }}>
                  {role.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Implementation Process Section */}
      <section className="bg-neutral-50 py-16 md:py-20">
        <div className="mx-auto max-w-5xl px-6">
          <div className="mb-6 flex items-center gap-3">
            <div className="h-1 w-12 rounded-full bg-sky-600" />
            <span className="text-sm font-semibold uppercase tracking-wider text-sky-700">
              導入プロセス
            </span>
          </div>
          <h2 className="text-xl font-bold text-neutral-900 md:text-2xl" style={{ lineHeight: '1.5' }}>
            4つのフェーズでの導入（約12ヶ月）
          </h2>
          <p className="mt-4 max-w-3xl text-base text-neutral-700" style={{ lineHeight: '1.8' }}>
            構造化されたプロセスに従い、貴社チームが常に次のステップを把握できるようにします。
          </p>
          <div className="mt-8 space-y-6">
            {implementationPhases.map((phase) => (
              <div
                key={phase.phase}
                className="rounded-2xl border border-neutral-200 bg-white p-6 md:p-8"
              >
                <div className="flex items-start gap-4">
                  <div className="flex h-10 w-10 flex-shrink-0 items-center justify-center rounded-full bg-sky-100 text-sky-700 font-bold">
                    {phase.phase}
                  </div>
                  <div className="flex-1">
                    <div className="flex flex-wrap items-center gap-3">
                      <h3 className="text-base font-semibold text-neutral-900">{phase.title}</h3>
                      <span className="rounded-full bg-neutral-100 px-3 py-1 text-xs text-neutral-600">
                        {phase.duration}
                      </span>
                    </div>
                    <p className="mt-2 text-sm leading-relaxed text-neutral-600" style={{ lineHeight: '1.8' }}>
                      {phase.description}
                    </p>
                    <p className="mt-3 text-sm text-sky-700">
                      <span className="font-medium">成果物：</span> {phase.deliverable}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Cost Comparison Section */}
      <section className="bg-white py-16 md:py-20">
        <div className="mx-auto max-w-4xl px-6">
          <div className="mb-6 flex items-center gap-3">
            <div className="h-1 w-12 rounded-full bg-sky-600" />
            <span className="text-sm font-semibold uppercase tracking-wider text-sky-700">
              コストとリスク
            </span>
          </div>
          <h2 className="text-xl font-bold text-neutral-900 md:text-2xl" style={{ lineHeight: '1.5' }}>
            従来の採用と比較したコストとリスク
          </h2>
          <div className="mt-6 space-y-4 text-base leading-relaxed text-neutral-700" style={{ lineHeight: '2' }}>
            <p>
              社内AI/MLチームの構築には、通常4〜6ヶ月の採用期間と、
              5名のエンジニアで年間約6,000万円以上（給与のみ）、
              さらに教育と管理のオーバーヘッドが必要です。
            </p>
            <p>Solunai + WorldEmpでは：</p>
            <ul className="ml-4 space-y-2">
              <li className="flex items-start gap-3">
                <span className="mt-2 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-sky-600" />
                採用リスクと遅延を回避
              </li>
              <li className="flex items-start gap-3">
                <span className="mt-2 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-sky-600" />
                プロジェクトフェーズに応じてエンジニア関与度を増減可能
              </li>
              <li className="flex items-start gap-3">
                <span className="mt-2 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-sky-600" />
                人数だけでなく、完全なソリューション（プラットフォーム＋エンジニア）に対して支払い
              </li>
            </ul>
            <p>
              多くの場合、同等の能力を社内構築する場合と比較して、
              総コストが30〜60%低くなります。
            </p>
          </div>
        </div>
      </section>

      {/* WorldEmp Partnership Section */}
      <section className="bg-neutral-50 py-16 md:py-20">
        <div className="mx-auto max-w-4xl px-6">
          <div className="mb-6 flex items-center gap-3">
            <div className="h-1 w-12 rounded-full bg-sky-600" />
            <span className="text-sm font-semibold uppercase tracking-wider text-sky-700">
              パートナーシップ
            </span>
          </div>
          <h2 className="text-xl font-bold text-neutral-900 md:text-2xl" style={{ lineHeight: '1.5' }}>
            WorldEmp：欧州のエンジニアリングパートナー
          </h2>
          <div className="mt-6 flex flex-col gap-6 md:flex-row md:items-start">
            <div className="flex-shrink-0">
              <img
                src="/images/logos/WorldEmpLogo.png"
                alt="WorldEmp Logo"
                className="h-16 w-auto object-contain"
              />
            </div>
            <div className="space-y-4 text-base leading-relaxed text-neutral-700" style={{ lineHeight: '2' }}>
              <p>
                WorldEmp B.V.は、オランダに拠点を置き、欧州およびその他の地域の製造企業に
                20年以上にわたりエンジニアを提供してきた企業です。
                高度な教育を受けたエンジニア専門人材と、リモート/ハイブリッドワークモデルを専門としています。
              </p>
              <p>
                このパートナーシップを通じて、Solunaiは日本のお客様の期待に沿った形で
                —コミュニケーション、継続性、品質において—WorldEmpエンジニアをご紹介できます。
              </p>
              <p className="text-neutral-600 italic">
                すべてのエンジニアは明確な契約のもとで業務を行い、
                プロジェクト全体を通じてWorldEmpとSolunai両社からサポートを受けます。
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Case Study Section */}
      <section className="bg-white py-16 md:py-20">
        <div className="mx-auto max-w-4xl px-6">
          <div className="mb-6 flex items-center gap-3">
            <div className="h-1 w-12 rounded-full bg-sky-600" />
            <span className="text-sm font-semibold uppercase tracking-wider text-sky-700">
              事例紹介
            </span>
          </div>
          <h2 className="text-xl font-bold text-neutral-900 md:text-2xl" style={{ lineHeight: '1.5' }}>
            事例：FBM Hudsonとのデジタル変革プロジェクト
          </h2>
          <div className="mt-6 rounded-2xl border border-neutral-200 bg-neutral-50 p-6 md:p-8">
            <div className="flex flex-col gap-6 md:flex-row md:items-start">
              <div className="flex-shrink-0">
                <img
                  src="/images/logos/fbm_logo.jpg"
                  alt="FBM Hudson Logo"
                  className="h-16 w-auto object-contain rounded-lg"
                />
              </div>
              <div>
                <p className="text-base leading-relaxed text-neutral-700" style={{ lineHeight: '2' }}>
                  イタリアのメーカーFBM Hudsonとの最近のプロジェクトでは、
                  フルデジタルツイン導入、AIによる品質管理、エンジニアリングワークフローの最適化をカバーしています。
                  フェーズ1が完了し、大幅な時間短縮と精度向上を既に達成。現在フェーズ2が進行中です。
                </p>
                <a
                  href="/ja/case-studies"
                  className="mt-4 inline-flex items-center gap-2 text-sm font-semibold text-sky-700 hover:text-sky-800"
                >
                  事例詳細を見る
                  <svg className="h-4 w-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="bg-neutral-50 py-16 md:py-20">
        <div className="mx-auto max-w-4xl px-6">
          <div className="mb-6 flex items-center gap-3">
            <div className="h-1 w-12 rounded-full bg-sky-600" />
            <span className="text-sm font-semibold uppercase tracking-wider text-sky-700">
              よくあるご質問
            </span>
          </div>
          <h2 className="text-xl font-bold text-neutral-900 md:text-2xl" style={{ lineHeight: '1.5' }}>
            よくあるご質問
          </h2>
          <div className="mt-8 space-y-4">
            {faqItems.map((item) => (
              <div
                key={item.question}
                className="rounded-2xl border border-neutral-200 bg-white p-6"
              >
                <h3 className="text-base font-semibold text-neutral-900" style={{ lineHeight: '1.5' }}>{item.question}</h3>
                <p className="mt-2 text-sm leading-relaxed text-neutral-600" style={{ lineHeight: '1.8' }}>
                  {item.answer}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-gradient-to-br from-sky-700 to-sky-900 py-16 md:py-20">
        <div className="mx-auto max-w-3xl px-6 text-center">
          <h2 className="text-2xl font-bold text-white md:text-3xl" style={{ lineHeight: '1.5' }}>
            まずはご相談から
          </h2>
          <p className="mt-4 text-base leading-relaxed text-sky-100 md:text-lg" style={{ lineHeight: '1.8' }}>
            貴社工場で何が実現可能かをご理解いただくために、
            まず短時間のリモート相談から始め、必要に応じて現場訪問も承ります。
          </p>
          <div className="mt-8 flex flex-col items-center gap-4 sm:flex-row sm:justify-center">
            <a
              href="/ja/contact"
              className="inline-flex items-center gap-2 rounded-lg bg-white px-8 py-4 text-base font-semibold text-sky-700 transition-all hover:bg-sky-50 hover:shadow-lg"
            >
              ご相談の予約
              <svg className="h-5 w-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </a>
            <a
              href="/ja/contact"
              className="inline-flex items-center gap-2 rounded-lg border-2 border-white/30 px-8 py-4 text-base font-semibold text-white transition-all hover:bg-white/10"
            >
              お問い合わせ
            </a>
          </div>
        </div>
      </section>

      <Footer lang="ja" />
    </main>
  );
}
