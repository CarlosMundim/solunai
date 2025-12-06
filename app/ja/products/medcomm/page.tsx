'use client';

import React from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import Link from 'next/link';

export default function MedCommPageJA() {
  const features = [
    {
      title: 'バーチャル患者',
      description: 'AIが多様な患者プロフィールを再現。年齢、性格、症状、文化的背景を設定し、リアルな対話練習が可能です。'
    },
    {
      title: 'エキスパート・デジタルツイン',
      description: 'ベテラン医師の指導スタイルをAIで再現。学習者にリアルタイムでフィードバックとガイダンスを提供します。'
    },
    {
      title: '自動評価エンジン',
      description: 'コミュニケーションスキルを多角的に評価。共感力、説明の明瞭さ、質問技法、非言語コミュニケーションを分析します。'
    },
    {
      title: '日本の医療文化対応',
      description: '敬語、間合い、家族との関係性など、日本の医療現場特有のコミュニケーション要素を組み込んだシナリオです。'
    },
    {
      title: '24時間365日利用可能',
      description: '学習者は都合の良い時間にいつでも練習可能。繁忙期も待ち時間なしで学習を継続できます。'
    },
    {
      title: '学習分析ダッシュボード',
      description: '個人・グループの進捗を可視化。弱点の特定と改善推奨を自動生成します。'
    }
  ];

  const scenarios = [
    '初診時の問診',
    '悪い知らせの伝え方',
    '治療方針の説明',
    '家族への病状説明',
    '高齢患者との対話',
    'インフォームドコンセント',
    'クレーム対応',
    '多文化背景患者との対話'
  ];

  return (
    <main className="min-h-screen bg-neutral-50">
      <Header lang="ja" />

      {/* Hero Section */}
      <section className="bg-white">
        <div className="mx-auto max-w-5xl px-6 py-16 md:px-8 md:py-20">
          <p className="text-xs font-semibold uppercase tracking-[0.2em] text-sky-700">
            KODA MEDCOMM
          </p>
          <h1 className="mt-4 text-2xl font-bold text-neutral-900 md:text-3xl lg:text-4xl" style={{ lineHeight: '1.4' }}>
            AI医療コミュニケーション教育
          </h1>
          <p className="mt-6 max-w-3xl text-base leading-relaxed text-neutral-700 md:text-lg" style={{ lineHeight: '1.8' }}>
            AIバーチャル患者との対話練習で、医療コミュニケーションスキルを効率的に向上。
            いつでも・どこでも・何度でも練習可能で、一貫した品質と詳細なパフォーマンス分析を提供します。
          </p>
          <div className="mt-8 flex flex-col gap-4 sm:flex-row">
            <Link
              href="/ja/contact"
              className="inline-flex items-center justify-center rounded-lg bg-sky-600 px-6 py-3 text-sm font-semibold text-white shadow-sm transition-colors hover:bg-sky-700"
            >
              資料請求
            </Link>
            <Link
              href="/ja/contact"
              className="inline-flex items-center justify-center rounded-lg border border-neutral-300 bg-white px-6 py-3 text-sm font-semibold text-neutral-700 transition-colors hover:bg-neutral-50"
            >
              デモを見る
            </Link>
          </div>
        </div>
      </section>

      {/* Value Bar */}
      <section className="border-y border-neutral-200 bg-neutral-100">
        <div className="mx-auto grid max-w-5xl grid-cols-2 gap-4 px-6 py-8 md:grid-cols-4 md:px-8">
          {[
            { label: '従来SP比コスト', value: '1/10' },
            { label: '利用可能時間', value: '24時間' },
            { label: '対応シナリオ', value: '100以上' },
            { label: 'フィードバック', value: '即時' },
          ].map((item) => (
            <div key={item.label} className="rounded-2xl border border-neutral-200 bg-white px-4 py-4 shadow-sm transition-all hover:border-sky-200 hover:shadow-md">
              <p className="text-xs text-neutral-500">{item.label}</p>
              <p className="mt-1 text-lg font-semibold text-neutral-900">{item.value}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Challenge Section */}
      <section className="bg-white py-16 md:py-20">
        <div className="mx-auto max-w-5xl px-6 md:px-8">
          <div className="mb-8 flex items-center gap-3">
            <div className="h-1 w-12 rounded-full bg-sky-600" />
            <span className="text-sm font-semibold uppercase tracking-wider text-sky-700">
              課題
            </span>
          </div>
          <h2 className="text-2xl font-bold text-neutral-900 md:text-3xl" style={{ lineHeight: '1.4' }}>
            医療コミュニケーション教育の課題
          </h2>
          <div className="mt-8 grid gap-6 md:grid-cols-3">
            <div className="rounded-2xl border border-neutral-200 bg-neutral-50 p-6 transition-all hover:border-sky-200 hover:shadow-md">
              <h4 className="font-semibold text-neutral-900" style={{ lineHeight: '1.5' }}>高コスト</h4>
              <p className="mt-2 text-sm text-neutral-600" style={{ lineHeight: '1.8' }}>
                標準模擬患者(SP)の1セッションあたり5万円以上。予算制約で十分な練習機会を提供できません。
              </p>
            </div>
            <div className="rounded-2xl border border-neutral-200 bg-neutral-50 p-6 transition-all hover:border-sky-200 hover:shadow-md">
              <h4 className="font-semibold text-neutral-900" style={{ lineHeight: '1.5' }}>一貫性の欠如</h4>
              <p className="mt-2 text-sm text-neutral-600" style={{ lineHeight: '1.8' }}>
                人間のSPは疲労や気分でパフォーマンスにばらつき。評価基準も主観的になりがちです。
              </p>
            </div>
            <div className="rounded-2xl border border-neutral-200 bg-neutral-50 p-6 transition-all hover:border-sky-200 hover:shadow-md">
              <h4 className="font-semibold text-neutral-900" style={{ lineHeight: '1.5' }}>スケーラビリティ</h4>
              <p className="mt-2 text-sm text-neutral-600" style={{ lineHeight: '1.8' }}>
                SP人材は希少。増加する学生数に対応できず、練習機会が不足しています。
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="bg-neutral-50 py-16 md:py-20">
        <div className="mx-auto max-w-5xl px-6 md:px-8">
          <div className="mb-8 flex items-center gap-3">
            <div className="h-1 w-12 rounded-full bg-sky-600" />
            <span className="text-sm font-semibold uppercase tracking-wider text-sky-700">
              機能
            </span>
          </div>
          <h2 className="text-2xl font-bold text-neutral-900 md:text-3xl" style={{ lineHeight: '1.4' }}>
            プラットフォームの機能
          </h2>
          <div className="mt-8 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {features.map((feature) => (
              <div key={feature.title} className="rounded-2xl border border-neutral-200 bg-white p-6 shadow-sm transition-all hover:border-sky-200 hover:shadow-md">
                <h4 className="font-semibold text-neutral-900" style={{ lineHeight: '1.5' }}>{feature.title}</h4>
                <p className="mt-2 text-sm text-neutral-600" style={{ lineHeight: '1.8' }}>{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Scenarios Section */}
      <section className="bg-white py-16 md:py-20">
        <div className="mx-auto max-w-5xl px-6 md:px-8">
          <div className="mb-8 flex items-center gap-3">
            <div className="h-1 w-12 rounded-full bg-sky-600" />
            <span className="text-sm font-semibold uppercase tracking-wider text-sky-700">
              シナリオ
            </span>
          </div>
          <h2 className="text-2xl font-bold text-neutral-900 md:text-3xl" style={{ lineHeight: '1.4' }}>
            対応シナリオ（例）
          </h2>
          <div className="mt-8 flex flex-wrap gap-3">
            {scenarios.map((scenario) => (
              <span
                key={scenario}
                className="rounded-full bg-neutral-100 px-4 py-2 text-sm text-neutral-700"
              >
                {scenario}
              </span>
            ))}
          </div>
          <p className="mt-6 text-sm text-neutral-500">
            カスタムシナリオの追加も可能です
          </p>
        </div>
      </section>

      {/* Academic Partnership */}
      <section className="bg-gradient-to-br from-slate-800 to-slate-900 py-16 md:py-20">
        <div className="mx-auto max-w-4xl px-6 md:px-8">
          <div className="mb-8 flex items-center gap-3">
            <div className="h-1 w-12 rounded-full bg-sky-400" />
            <span className="text-sm font-semibold uppercase tracking-wider text-sky-300">
              学術パートナーシップ
            </span>
          </div>
          <div className="rounded-2xl bg-slate-700/50 p-8">
            <p className="text-lg text-slate-200 italic" style={{ lineHeight: '1.8' }}>
              「KODA MedCommは、医療コミュニケーション教育に革新をもたらす可能性を秘めています。
              AIと人間の強みを組み合わせたこのアプローチは、次世代の医療者育成に大きく貢献するでしょう。」
            </p>
            <div className="mt-6">
              <p className="font-semibold text-white">Professor Jeanette Littlemore</p>
              <p className="text-sm text-slate-400">バーミンガム大学</p>
              <p className="text-sm text-slate-400">医療コミュニケーション・メタファー研究の世界的権威</p>
            </div>
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <section className="bg-neutral-50 py-16 md:py-20">
        <div className="mx-auto max-w-5xl px-6 md:px-8">
          <div className="mb-8 flex items-center gap-3">
            <div className="h-1 w-12 rounded-full bg-sky-600" />
            <span className="text-sm font-semibold uppercase tracking-wider text-sky-700">
              料金
            </span>
          </div>
          <h2 className="text-2xl font-bold text-neutral-900 md:text-3xl" style={{ lineHeight: '1.4' }}>
            ライセンスオプション
          </h2>
          <div className="mt-8 grid gap-6 md:grid-cols-2">
            <div className="rounded-2xl border border-neutral-200 bg-white p-6 shadow-sm transition-all hover:border-sky-200 hover:shadow-md">
              <h3 className="text-lg font-semibold text-neutral-900">スタンダード</h3>
              <p className="mt-4 text-2xl font-bold text-neutral-900">お問い合わせください</p>
              <ul className="mt-6 space-y-3 text-sm text-neutral-600">
                <li className="flex items-start gap-2">
                  <span className="mt-1.5 h-1 w-1 flex-shrink-0 rounded-full bg-sky-600" />
                  50ユーザーまで
                </li>
                <li className="flex items-start gap-2">
                  <span className="mt-1.5 h-1 w-1 flex-shrink-0 rounded-full bg-sky-600" />
                  基本シナリオセット
                </li>
                <li className="flex items-start gap-2">
                  <span className="mt-1.5 h-1 w-1 flex-shrink-0 rounded-full bg-sky-600" />
                  学習分析ダッシュボード
                </li>
                <li className="flex items-start gap-2">
                  <span className="mt-1.5 h-1 w-1 flex-shrink-0 rounded-full bg-sky-600" />
                  メールサポート
                </li>
              </ul>
              <Link
                href="/ja/contact"
                className="mt-6 inline-flex w-full items-center justify-center rounded-lg border border-sky-600 px-6 py-3 text-sm font-semibold text-sky-700 transition-colors hover:bg-sky-50"
              >
                お問い合わせ
              </Link>
            </div>
            <div className="rounded-2xl border-2 border-sky-600 bg-white p-6 shadow-sm">
              <h3 className="text-lg font-semibold text-neutral-900">エンタープライズ</h3>
              <p className="mt-4 text-2xl font-bold text-neutral-900">カスタム価格</p>
              <ul className="mt-6 space-y-3 text-sm text-neutral-600">
                <li className="flex items-start gap-2">
                  <span className="mt-1.5 h-1 w-1 flex-shrink-0 rounded-full bg-sky-600" />
                  無制限ユーザー
                </li>
                <li className="flex items-start gap-2">
                  <span className="mt-1.5 h-1 w-1 flex-shrink-0 rounded-full bg-sky-600" />
                  カスタムシナリオ作成
                </li>
                <li className="flex items-start gap-2">
                  <span className="mt-1.5 h-1 w-1 flex-shrink-0 rounded-full bg-sky-600" />
                  エキスパート・デジタルツイン
                </li>
                <li className="flex items-start gap-2">
                  <span className="mt-1.5 h-1 w-1 flex-shrink-0 rounded-full bg-sky-600" />
                  API連携
                </li>
                <li className="flex items-start gap-2">
                  <span className="mt-1.5 h-1 w-1 flex-shrink-0 rounded-full bg-sky-600" />
                  優先サポート
                </li>
              </ul>
              <Link
                href="/ja/contact"
                className="mt-6 inline-flex w-full items-center justify-center rounded-lg bg-sky-600 px-6 py-3 text-sm font-semibold text-white transition-colors hover:bg-sky-700"
              >
                お問い合わせ
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-gradient-to-br from-sky-700 to-sky-900 py-16 md:py-20">
        <div className="mx-auto max-w-3xl px-6 text-center md:px-8">
          <h2 className="text-2xl font-bold text-white md:text-3xl" style={{ lineHeight: '1.4' }}>
            医療コミュニケーション教育を変革しませんか
          </h2>
          <p className="mt-4 text-base leading-relaxed text-sky-100 md:text-lg" style={{ lineHeight: '1.8' }}>
            デモンストレーションや詳細資料をご希望の方は、お気軽にお問い合わせください。
          </p>
          <div className="mt-8 flex flex-col items-center gap-4 sm:flex-row sm:justify-center">
            <Link
              href="/ja/contact"
              className="inline-flex items-center gap-2 rounded-lg bg-white px-8 py-4 text-base font-semibold text-sky-700 transition-all hover:bg-sky-50 hover:shadow-lg"
            >
              お問い合わせ
              <svg className="h-5 w-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </Link>
            <Link
              href="/ja/products"
              className="inline-flex items-center gap-2 rounded-lg border-2 border-white/30 px-8 py-4 text-base font-semibold text-white transition-all hover:bg-white/10"
            >
              他の製品を見る
            </Link>
          </div>
        </div>
      </section>

      <Footer lang="ja" />
    </main>
  );
}
