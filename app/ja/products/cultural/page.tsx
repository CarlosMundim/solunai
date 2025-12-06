'use client';

import React from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import Link from 'next/link';

export default function CulturalPageJA() {
  const features = [
    {
      title: '日本のビジネスマナー',
      description: 'お辞儀、名刺交換、席順、フォーマルな挨拶など、日本のビジネスシーンでのニュアンスを学びます。'
    },
    {
      title: 'コミュニケーション指導',
      description: 'ハイコンテクストコミュニケーション、行間を読む、敬語の適切な使い方、間接的な表現スタイルを理解します。'
    },
    {
      title: '文化的コンテキスト',
      description: '会議、交渉、プレゼンテーション、社交の場での文化的適切性に関するリアルタイムガイダンス。'
    },
    {
      title: 'チーム協働ツール',
      description: 'ニュアンスと文化的コンテキストを保持するAI翻訳で、グローバルチームの文化的ギャップを埋めます。'
    }
  ];

  const scenarios = [
    '日本のクライアントとの初対面',
    'ビジネス会食のマナー',
    '贈答の習慣',
    'メールコミュニケーション',
    '交渉戦略',
    'ネットワーキングイベント',
    'お詫びと紛争解決',
    '長期的な信頼構築'
  ];

  return (
    <main className="min-h-screen bg-neutral-50">
      <Header lang="ja" />

      {/* Hero Section */}
      <section className="bg-white">
        <div className="mx-auto max-w-5xl px-6 py-16 md:px-8 md:py-20">
          <p className="text-xs font-semibold uppercase tracking-[0.2em] text-sky-700">
            KODA CULTURAL
          </p>
          <h1 className="mt-4 text-2xl font-bold text-neutral-900 md:text-3xl lg:text-4xl" style={{ lineHeight: '1.4' }}>
            異文化インテリジェンスプラットフォーム
          </h1>
          <p className="mt-6 max-w-3xl text-base leading-relaxed text-neutral-700 md:text-lg" style={{ lineHeight: '1.8' }}>
            日本のビジネス文化を自信を持ってナビゲート。マナー、コミュニケーションスタイル、
            文化的ニュアンスに関するAIによるトレーニングとリアルタイムガイダンスを提供します。
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
          <div className="mt-8 grid gap-6 md:grid-cols-2">
            {features.map((feature) => (
              <div key={feature.title} className="rounded-2xl border border-neutral-200 bg-white p-6 shadow-sm transition-all hover:border-sky-200 hover:shadow-md md:p-8">
                <h3 className="text-lg font-semibold text-neutral-900" style={{ lineHeight: '1.5' }}>{feature.title}</h3>
                <p className="mt-2 text-sm text-neutral-600" style={{ lineHeight: '1.8' }}>{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Learning Scenarios */}
      <section className="bg-white py-16 md:py-20">
        <div className="mx-auto max-w-5xl px-6 md:px-8">
          <div className="mb-8 flex items-center gap-3">
            <div className="h-1 w-12 rounded-full bg-sky-600" />
            <span className="text-sm font-semibold uppercase tracking-wider text-sky-700">
              学習シナリオ
            </span>
          </div>
          <h2 className="text-2xl font-bold text-neutral-900 md:text-3xl" style={{ lineHeight: '1.4' }}>
            カバーする実践的シーン
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
        </div>
      </section>

      {/* Who Benefits */}
      <section className="bg-neutral-50 py-16 md:py-20">
        <div className="mx-auto max-w-5xl px-6 md:px-8">
          <div className="mb-8 flex items-center gap-3">
            <div className="h-1 w-12 rounded-full bg-sky-600" />
            <span className="text-sm font-semibold uppercase tracking-wider text-sky-700">
              対象ユーザー
            </span>
          </div>
          <h2 className="text-2xl font-bold text-neutral-900 md:text-3xl" style={{ lineHeight: '1.4' }}>
            こんな方におすすめ
          </h2>
          <div className="mt-8 grid gap-6 md:grid-cols-3">
            <div className="rounded-2xl border-l-4 border-sky-600 bg-white p-6 transition-all hover:shadow-md">
              <h4 className="font-semibold text-neutral-900" style={{ lineHeight: '1.5' }}>グローバル企業</h4>
              <p className="mt-2 text-sm text-neutral-600" style={{ lineHeight: '1.8' }}>
                日本のパートナー、クライアント、子会社と協働するチームで文化的流暢さが必要な方。
              </p>
            </div>
            <div className="rounded-2xl border-l-4 border-emerald-600 bg-white p-6 transition-all hover:shadow-md">
              <h4 className="font-semibold text-neutral-900" style={{ lineHeight: '1.5' }}>新任エグゼクティブ</h4>
              <p className="mt-2 text-sm text-neutral-600" style={{ lineHeight: '1.8' }}>
                日本関連の役職に就任し、迅速に文化的能力を構築する必要があるリーダー。
              </p>
            </div>
            <div className="rounded-2xl border-l-4 border-violet-600 bg-white p-6 transition-all hover:shadow-md">
              <h4 className="font-semibold text-neutral-900" style={{ lineHeight: '1.5' }}>駐在員・赴任者</h4>
              <p className="mt-2 text-sm text-neutral-600" style={{ lineHeight: '1.8' }}>
                日本に赴任する、または日本チームをリモート管理するプロフェッショナル。
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-gradient-to-br from-sky-700 to-sky-900 py-16 md:py-20">
        <div className="mx-auto max-w-3xl px-6 text-center md:px-8">
          <h2 className="text-2xl font-bold text-white md:text-3xl" style={{ lineHeight: '1.4' }}>
            文化的流暢さを構築しませんか
          </h2>
          <p className="mt-4 text-base leading-relaxed text-sky-100 md:text-lg" style={{ lineHeight: '1.8' }}>
            日本ビジネスで成功するために必要な文化的インテリジェンスをチームに提供します。
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
