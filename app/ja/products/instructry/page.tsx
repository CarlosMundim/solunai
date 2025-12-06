'use client';

import React from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import Link from 'next/link';

export default function InstructryPageJA() {
  const features = [
    {
      title: '熟練者の暗黙知取得',
      description: '構造化インタビュー、作業観察分析、文書化を通じて、ベテラン作業者の暗黙知を抽出・保存します。'
    },
    {
      title: '視覚的作業指示書',
      description: '複雑な手順について、画像、注釈、動画クリップを含むAI生成のステップバイステップガイド。'
    },
    {
      title: 'トラブルシューティングAI',
      description: '熟練者の知識でトレーニングされたAIアシスタントが、作業者のリアルタイムでの問題診断と解決を支援します。'
    },
    {
      title: '技術継承の加速',
      description: '能力開発を追跡し、最も効果的な知識移転方法を特定します。'
    }
  ];

  const challenges = [
    {
      title: '2025年問題',
      description: '日本は熟練労働者の大量退職に直面。数十年の専門知識が永遠に失われるリスクがあります。'
    },
    {
      title: '暗黙知',
      description: '熟練者の知識の多くは文書化されていません。長年かけて学んだ直感、判断、コツです。'
    },
    {
      title: '研修ギャップ',
      description: '従来の徒弟制度には数年かかります。組織にはそれを待つ時間がありません。'
    }
  ];

  const industries = [
    '製造業',
    '建設業',
    '保守・メンテナンス',
    '品質管理',
    'プロセス産業',
    '熟練工業'
  ];

  return (
    <main className="min-h-screen bg-neutral-50">
      <Header lang="ja" />

      {/* Hero Section */}
      <section className="bg-white">
        <div className="mx-auto max-w-5xl px-6 py-16 md:px-8 md:py-20">
          <p className="text-xs font-semibold uppercase tracking-[0.2em] text-sky-700">
            KODA INSTRUCTRY
          </p>
          <h1 className="mt-4 text-2xl font-bold text-neutral-900 md:text-3xl lg:text-4xl" style={{ lineHeight: '1.4' }}>
            産業知識マネジメント
          </h1>
          <p className="mt-6 max-w-3xl text-base leading-relaxed text-neutral-700 md:text-lg" style={{ lineHeight: '1.8' }}>
            製造業・産業分野における熟練者の知識を取得し、次世代へ継承。
            退職前に数十年の経験知を保存し、技術継承を加速します。
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
            なぜ今、知識保存が重要なのか
          </h2>
          <div className="mt-8 grid gap-6 md:grid-cols-3">
            {challenges.map((challenge) => (
              <div key={challenge.title} className="rounded-2xl border border-neutral-200 bg-neutral-50 p-6 transition-all hover:border-sky-200 hover:shadow-md">
                <h4 className="font-semibold text-neutral-900" style={{ lineHeight: '1.5' }}>{challenge.title}</h4>
                <p className="mt-2 text-sm text-neutral-600" style={{ lineHeight: '1.8' }}>{challenge.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="bg-neutral-50 py-16 md:py-20">
        <div className="mx-auto max-w-5xl px-6 md:px-8">
          <div className="mb-8 flex items-center gap-3">
            <div className="h-1 w-12 rounded-full bg-sky-600" />
            <span className="text-sm font-semibold uppercase tracking-wider text-sky-700">
              ソリューション
            </span>
          </div>
          <h2 className="text-2xl font-bold text-neutral-900 md:text-3xl" style={{ lineHeight: '1.4' }}>
            KODA Instructryの機能
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

      {/* Industries */}
      <section className="bg-white py-16 md:py-20">
        <div className="mx-auto max-w-5xl px-6 md:px-8">
          <div className="mb-8 flex items-center gap-3">
            <div className="h-1 w-12 rounded-full bg-sky-600" />
            <span className="text-sm font-semibold uppercase tracking-wider text-sky-700">
              対象業界
            </span>
          </div>
          <h2 className="text-2xl font-bold text-neutral-900 md:text-3xl" style={{ lineHeight: '1.4' }}>
            適用分野
          </h2>
          <div className="mt-8 flex flex-wrap gap-3">
            {industries.map((industry) => (
              <span
                key={industry}
                className="rounded-full bg-neutral-100 px-4 py-2 text-sm text-neutral-700"
              >
                {industry}
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-gradient-to-br from-sky-700 to-sky-900 py-16 md:py-20">
        <div className="mx-auto max-w-3xl px-6 text-center md:px-8">
          <h2 className="text-2xl font-bold text-white md:text-3xl" style={{ lineHeight: '1.4' }}>
            組織の専門知識を保存しませんか
          </h2>
          <p className="mt-4 text-base leading-relaxed text-sky-100 md:text-lg" style={{ lineHeight: '1.8' }}>
            数十年の知識が退職とともに失われる前に。今すぐ重要な専門知識の取得と継承を始めましょう。
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
