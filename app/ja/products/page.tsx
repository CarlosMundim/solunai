'use client';

import React from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import Link from 'next/link';

export default function KodaProductsPageJA() {
  const applications = [
    {
      id: 'medcomm',
      name: 'KODA MedComm',
      tagline: '医療コミュニケーション教育',
      description: 'AIバーチャル患者を活用し、医学生や医療従事者のコミュニケーション能力を育成します。24時間いつでも練習可能で、詳細な分析レポートを提供します。',
      features: [
        'バーチャル患者との対話練習',
        '専門家デジタルツインによる指導',
        '自動評価システム',
        '日本の医療現場に即したシナリオ'
      ],
      href: '/ja/products/medcomm'
    },
    {
      id: 'docintel',
      name: 'KODA DocIntel',
      tagline: 'インテリジェント文書処理',
      description: '日本語ビジネス文書を読み取り、理解し、処理するAIシステム。OCRによる認識から、データ抽出、ワークフロー自動化までを一貫してサポートします。',
      features: [
        '日本語文書のOCRと意味理解',
        '構造化データの自動抽出',
        '業務ワークフローの自動化',
        '文書の分類と振り分け'
      ],
      href: '/ja/products/docintel'
    },
    {
      id: 'assist',
      name: 'KODA Assist',
      tagline: 'カスタムAIワーカー',
      description: '特定の業務機能に特化したAIアシスタント。秘書業務、分析業務、顧客対応など、日本のビジネス慣習を理解したAIワーカーを構築します。',
      features: [
        '秘書：議事録作成、スケジュール管理',
        'アナリスト：文書分析、レポート作成',
        'カスタマーサポート：日本語対応',
        'カスタム：お客様のニーズに合わせた開発'
      ],
      href: '/ja/products/assist'
    },
    {
      id: 'cultural',
      name: 'KODA Cultural',
      tagline: '異文化インテリジェンス',
      description: 'グローバルビジネスのための文化的知性を提供。日本のビジネスマナー、コミュニケーションスタイル、文化的ニュアンスを理解し、円滑な国際協業を支援します。',
      features: [
        '日本のビジネスマナー研修',
        '異文化コミュニケーション指導',
        'リアルタイムの文化的コンテキスト提供',
        'グローバルチーム協働ツール'
      ],
      href: '/ja/products/cultural'
    },
    {
      id: 'training',
      name: 'KODA Training',
      tagline: 'AI強化型企業研修',
      description: 'AIを活用したアダプティブラーニングで企業研修を変革。個人に最適化されたスキル開発、能力追跡、パフォーマンス分析を提供します。',
      features: [
        '適応型学習パス',
        'AIチューターとメンター',
        'スキルギャップ分析',
        'コンプライアンス研修の自動化'
      ],
      href: '/ja/products/training'
    },
    {
      id: 'instructry',
      name: 'KODA Instructry',
      tagline: '産業知識マネジメント',
      description: '製造業・産業分野における熟練者の知識を取得し、次世代へ継承。2025年問題（大量退職）に対応し、数十年の経験知を組織の資産として保存します。',
      features: [
        '熟練者の暗黙知の可視化',
        '視覚的作業指示書の自動生成',
        'トラブルシューティングAI',
        '技術継承の加速'
      ],
      href: '/ja/products/instructry'
    }
  ];

  const sceCapabilities = [
    {
      title: 'セマンティック理解',
      description: '日本語と英語における意味、文脈、ニュアンスの深い理解'
    },
    {
      title: '文化的インテリジェンス',
      description: '日本のビジネス文化、マナー、コミュニケーション規範への対応'
    },
    {
      title: 'マルチモーダル処理',
      description: 'テキスト、音声、画像、文書を統合的に処理'
    },
    {
      title: 'エンタープライズセキュリティ',
      description: '国内データ保管、エンドツーエンド暗号化、ISMS準拠対応'
    }
  ];

  return (
    <main className="min-h-screen bg-neutral-50">
      <Header lang="ja" />

      {/* Hero Section */}
      <section className="bg-white">
        <div className="mx-auto max-w-5xl px-6 py-16 md:px-8 md:py-20">
          <p className="text-xs font-semibold uppercase tracking-[0.2em] text-sky-700">
            KODA製品ライン
          </p>
          <h1 className="mt-4 text-2xl font-bold text-neutral-900 md:text-3xl lg:text-4xl" style={{ lineHeight: '1.4' }}>
            日本企業のためのAIソリューション
          </h1>
          <p className="mt-6 max-w-3xl text-base leading-relaxed text-neutral-700 md:text-lg" style={{ lineHeight: '1.8' }}>
            KODAは、日本市場向けに最適化されたAI製品群です。
            医療教育から文書処理、企業研修、技術継承まで、日本語と日本のビジネス文化を深く理解したソリューションで企業のDXを支援します。
          </p>
          <ul className="mt-6 space-y-2 text-sm text-neutral-600 md:text-base">
            <li className="flex items-start gap-2">
              <span className="mt-1 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-sky-600" />
              日本語・日本文化に特化した設計
            </li>
            <li className="flex items-start gap-2">
              <span className="mt-1 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-sky-600" />
              中小企業でも導入可能な価格設計
            </li>
            <li className="flex items-start gap-2">
              <span className="mt-1 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-sky-600" />
              学術研究に基づいた信頼性の高いAI
            </li>
          </ul>
        </div>
      </section>

      {/* Value Bar */}
      <section className="border-y border-neutral-200 bg-neutral-100">
        <div className="mx-auto grid max-w-5xl grid-cols-2 gap-4 px-6 py-8 md:grid-cols-4 md:px-8">
          {[
            { label: '対応言語', value: '日本語・英語' },
            { label: '製品ライン', value: '6製品' },
            { label: 'データ保管', value: '国内対応' },
            { label: '学術連携', value: '海外大学' },
          ].map((item) => (
            <div key={item.label} className="rounded-2xl border border-neutral-200 bg-white px-4 py-4 shadow-sm transition-all hover:border-sky-200 hover:shadow-md">
              <p className="text-xs text-neutral-500">{item.label}</p>
              <p className="mt-1 text-lg font-semibold text-neutral-900">{item.value}</p>
            </div>
          ))}
        </div>
      </section>

      {/* SCE Engine Section */}
      <section className="bg-gradient-to-br from-slate-800 to-slate-900 py-16 md:py-20">
        <div className="mx-auto max-w-5xl px-6 md:px-8">
          <div className="mb-8 flex items-center gap-3">
            <div className="h-1 w-12 rounded-full bg-sky-400" />
            <span className="text-sm font-semibold uppercase tracking-wider text-sky-300">
              コアテクノロジー
            </span>
          </div>
          <h2 className="text-2xl font-bold text-white md:text-3xl" style={{ lineHeight: '1.4' }}>
            KODA SCE Engine
          </h2>
          <p className="mt-2 text-sky-200">Semantic Computing Engine</p>
          <p className="mt-6 max-w-3xl text-base leading-relaxed text-slate-300 md:text-lg" style={{ lineHeight: '1.8' }}>
            すべてのKODA製品の基盤となる独自のセマンティックコンピューティングエンジン。
            深い言語理解、文化的文脈の認識、インテリジェントな自動化を、KODAエコシステム全体に提供します。
          </p>
          <div className="mt-10 grid gap-6 md:grid-cols-2 lg:grid-cols-4">
            {sceCapabilities.map((cap) => (
              <div key={cap.title} className="rounded-2xl bg-slate-700/50 p-6 transition-all hover:bg-slate-700/70">
                <h4 className="font-semibold text-white" style={{ lineHeight: '1.5' }}>{cap.title}</h4>
                <p className="mt-2 text-sm leading-relaxed text-slate-300" style={{ lineHeight: '1.7' }}>{cap.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why KODA Section */}
      <section className="bg-white py-16 md:py-20">
        <div className="mx-auto max-w-5xl px-6 md:px-8">
          <div className="mb-8 flex items-center gap-3">
            <div className="h-1 w-12 rounded-full bg-sky-600" />
            <span className="text-sm font-semibold uppercase tracking-wider text-sky-700">
              KODAの特長
            </span>
          </div>
          <h2 className="text-2xl font-bold text-neutral-900 md:text-3xl" style={{ lineHeight: '1.4' }}>
            なぜKODAを選ぶのか
          </h2>
          <div className="mt-8 grid gap-6 md:grid-cols-2 lg:grid-cols-4">
            {[
              { title: '日本ファースト', desc: '日本語・文化・慣習のために設計されたAI' },
              { title: '学術的信頼性', desc: '世界的専門家との連携による科学的基盤' },
              { title: 'SME価格', desc: '中小企業でも導入可能な価格設計' },
              { title: 'カスタマイズ', desc: 'お客様のニーズに合わせた柔軟対応' },
            ].map((item) => (
              <div key={item.title} className="rounded-2xl border border-neutral-200 bg-neutral-50 p-6 transition-all hover:border-sky-200 hover:shadow-md">
                <h4 className="font-semibold text-neutral-900" style={{ lineHeight: '1.5' }}>{item.title}</h4>
                <p className="mt-2 text-sm text-neutral-600" style={{ lineHeight: '1.8' }}>{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Applications Grid */}
      <section className="bg-neutral-50 py-16 md:py-20">
        <div className="mx-auto max-w-6xl px-6 md:px-8">
          <div className="mb-8 flex items-center gap-3">
            <div className="h-1 w-12 rounded-full bg-sky-600" />
            <span className="text-sm font-semibold uppercase tracking-wider text-sky-700">
              製品ラインナップ
            </span>
          </div>
          <h2 className="text-2xl font-bold text-neutral-900 md:text-3xl" style={{ lineHeight: '1.4' }}>
            KODA Applications
          </h2>
          <p className="mt-4 max-w-2xl text-base text-neutral-600" style={{ lineHeight: '1.8' }}>
            業務課題に応じた6つのAIソリューション。それぞれが独立して導入可能で、必要に応じて組み合わせることもできます。
          </p>
          <div className="mt-10 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {applications.map((product) => (
              <div
                key={product.id}
                className="flex flex-col rounded-2xl border border-neutral-200 bg-white p-6 shadow-sm transition-all hover:border-sky-200 hover:shadow-md md:p-8"
              >
                <h3 className="text-lg font-semibold text-neutral-900" style={{ lineHeight: '1.5' }}>
                  {product.name}
                </h3>
                <p className="mt-1 text-sm font-medium text-sky-700">{product.tagline}</p>
                <p className="mt-3 flex-grow text-sm text-neutral-600" style={{ lineHeight: '1.8' }}>
                  {product.description}
                </p>
                <div className="mt-4 space-y-1.5">
                  {product.features.slice(0, 3).map((feature, idx) => (
                    <div key={idx} className="flex items-start gap-2 text-sm text-neutral-500">
                      <span className="mt-1.5 h-1 w-1 flex-shrink-0 rounded-full bg-sky-600" />
                      {feature}
                    </div>
                  ))}
                </div>
                <div className="mt-6 border-t border-neutral-100 pt-4">
                  <Link
                    href={product.href}
                    className="inline-flex items-center text-sm font-medium text-sky-700 hover:text-sky-800"
                  >
                    詳細を見る
                    <svg className="ml-1 h-4 w-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                    </svg>
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Target Customers */}
      <section className="bg-white py-16 md:py-20">
        <div className="mx-auto max-w-5xl px-6 md:px-8">
          <div className="mb-8 flex items-center gap-3">
            <div className="h-1 w-12 rounded-full bg-sky-600" />
            <span className="text-sm font-semibold uppercase tracking-wider text-sky-700">
              対象顧客
            </span>
          </div>
          <h2 className="text-2xl font-bold text-neutral-900 md:text-3xl" style={{ lineHeight: '1.4' }}>
            KODAをご活用いただける組織
          </h2>
          <div className="mt-8 grid gap-6 md:grid-cols-3">
            <div className="rounded-2xl border-l-4 border-sky-600 bg-neutral-50 p-6">
              <h4 className="font-semibold text-neutral-900" style={{ lineHeight: '1.5' }}>医療教育機関</h4>
              <ul className="mt-3 space-y-2 text-sm text-neutral-600">
                <li className="flex items-start gap-2">
                  <span className="mt-1.5 h-1 w-1 flex-shrink-0 rounded-full bg-sky-600" />
                  医学部（全国82校）
                </li>
                <li className="flex items-start gap-2">
                  <span className="mt-1.5 h-1 w-1 flex-shrink-0 rounded-full bg-sky-600" />
                  教育病院
                </li>
                <li className="flex items-start gap-2">
                  <span className="mt-1.5 h-1 w-1 flex-shrink-0 rounded-full bg-sky-600" />
                  看護学校
                </li>
              </ul>
            </div>
            <div className="rounded-2xl border-l-4 border-emerald-600 bg-neutral-50 p-6">
              <h4 className="font-semibold text-neutral-900" style={{ lineHeight: '1.5' }}>医療機関</h4>
              <ul className="mt-3 space-y-2 text-sm text-neutral-600">
                <li className="flex items-start gap-2">
                  <span className="mt-1.5 h-1 w-1 flex-shrink-0 rounded-full bg-emerald-600" />
                  病院
                </li>
                <li className="flex items-start gap-2">
                  <span className="mt-1.5 h-1 w-1 flex-shrink-0 rounded-full bg-emerald-600" />
                  クリニック
                </li>
                <li className="flex items-start gap-2">
                  <span className="mt-1.5 h-1 w-1 flex-shrink-0 rounded-full bg-emerald-600" />
                  介護施設
                </li>
              </ul>
            </div>
            <div className="rounded-2xl border-l-4 border-violet-600 bg-neutral-50 p-6">
              <h4 className="font-semibold text-neutral-900" style={{ lineHeight: '1.5' }}>中小企業</h4>
              <ul className="mt-3 space-y-2 text-sm text-neutral-600">
                <li className="flex items-start gap-2">
                  <span className="mt-1.5 h-1 w-1 flex-shrink-0 rounded-full bg-violet-600" />
                  コンサルティング会社
                </li>
                <li className="flex items-start gap-2">
                  <span className="mt-1.5 h-1 w-1 flex-shrink-0 rounded-full bg-violet-600" />
                  士業事務所
                </li>
                <li className="flex items-start gap-2">
                  <span className="mt-1.5 h-1 w-1 flex-shrink-0 rounded-full bg-violet-600" />
                  製造業
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-gradient-to-br from-sky-700 to-sky-900 py-16 md:py-20">
        <div className="mx-auto max-w-3xl px-6 text-center md:px-8">
          <h2 className="text-2xl font-bold text-white md:text-3xl" style={{ lineHeight: '1.4' }}>
            KODAで業務を変革しませんか
          </h2>
          <p className="mt-4 text-base leading-relaxed text-sky-100 md:text-lg" style={{ lineHeight: '1.8' }}>
            まずは無料相談から。お客様の課題をお聞かせください。最適なソリューションをご提案いたします。
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
              href="/ja/contact"
              className="inline-flex items-center gap-2 rounded-lg border-2 border-white/30 px-8 py-4 text-base font-semibold text-white transition-all hover:bg-white/10"
            >
              デモを依頼する
            </Link>
          </div>
        </div>
      </section>

      <Footer lang="ja" />
    </main>
  );
}
