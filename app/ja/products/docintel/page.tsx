'use client';

import React from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import Link from 'next/link';

export default function DocIntelPageJA() {
  const features = [
    {
      title: 'OCR + 文書理解',
      description: '日本語文書を高精度で読み取り、単なるテキスト抽出ではなく文脈を理解。手書き、旧字体、複雑なレイアウトにも対応します。'
    },
    {
      title: 'データ抽出',
      description: '請求書、契約書、申請書などから構造化データを自動抽出。フォーマットが異なっても柔軟に対応します。'
    },
    {
      title: 'ワークフロー自動化',
      description: '文書の分類、ルーティング、承認フローを自動化。既存システムとのAPI連携も可能です。'
    },
    {
      title: 'セマンティック検索',
      description: 'キーワードマッチングではなく意味理解に基づく検索。「昨年の契約更新に関する書類」のような自然言語クエリに対応します。'
    },
    {
      title: 'セキュリティ',
      description: '日本国内データレジデンシー、エンドツーエンド暗号化、アクセスログ、ISMS対応可能です。'
    },
    {
      title: '日本語最適化',
      description: '日本語特有の文書形式（縦書き、元号表記、印鑑など）を正確に処理します。'
    }
  ];

  const useCases = [
    { title: '経理・財務', description: '請求書処理の自動化' },
    { title: '法務・契約', description: '契約書管理の効率化' },
    { title: '人事・総務', description: '申請書類の処理' },
    { title: '製造・品質', description: '技術文書管理' }
  ];

  return (
    <main className="min-h-screen bg-neutral-50">
      <Header lang="ja" />

      {/* Hero Section */}
      <section className="bg-white">
        <div className="mx-auto max-w-5xl px-6 py-16 md:px-8 md:py-20">
          <p className="text-xs font-semibold uppercase tracking-[0.2em] text-sky-700">
            KODA DOCINTEL
          </p>
          <h1 className="mt-4 text-2xl font-bold text-neutral-900 md:text-3xl lg:text-4xl" style={{ lineHeight: '1.4' }}>
            インテリジェント文書処理
          </h1>
          <p className="mt-6 max-w-3xl text-base leading-relaxed text-neutral-700 md:text-lg" style={{ lineHeight: '1.8' }}>
            日本語ビジネス文書をAIが読み取り、理解し、処理を自動化。
            手作業のデータ入力から解放され、本質的な業務に集中できます。
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

      {/* Problem/Solution Section */}
      <section className="bg-white py-16 md:py-20">
        <div className="mx-auto max-w-5xl px-6 md:px-8">
          <div className="mb-8 flex items-center gap-3">
            <div className="h-1 w-12 rounded-full bg-sky-600" />
            <span className="text-sm font-semibold uppercase tracking-wider text-sky-700">
              課題
            </span>
          </div>
          <h2 className="text-2xl font-bold text-neutral-900 md:text-3xl" style={{ lineHeight: '1.4' }}>
            紙とPDFに埋もれていませんか
          </h2>
          <div className="mt-8 grid gap-6 md:grid-cols-2">
            <div className="rounded-2xl border-l-4 border-red-400 bg-neutral-50 p-6">
              <h4 className="font-semibold text-neutral-900" style={{ lineHeight: '1.5' }}>現状の課題</h4>
              <ul className="mt-3 space-y-2 text-sm text-neutral-600" style={{ lineHeight: '1.8' }}>
                <li className="flex items-start gap-2">
                  <span className="mt-1.5 h-1 w-1 flex-shrink-0 rounded-full bg-red-400" />
                  手作業でのデータ入力に膨大な時間
                </li>
                <li className="flex items-start gap-2">
                  <span className="mt-1.5 h-1 w-1 flex-shrink-0 rounded-full bg-red-400" />
                  入力ミスによる後工程での手戻り
                </li>
                <li className="flex items-start gap-2">
                  <span className="mt-1.5 h-1 w-1 flex-shrink-0 rounded-full bg-red-400" />
                  過去の文書が見つからない
                </li>
                <li className="flex items-start gap-2">
                  <span className="mt-1.5 h-1 w-1 flex-shrink-0 rounded-full bg-red-400" />
                  フォーマットがバラバラで統合できない
                </li>
              </ul>
            </div>
            <div className="rounded-2xl border-l-4 border-emerald-500 bg-neutral-50 p-6">
              <h4 className="font-semibold text-neutral-900" style={{ lineHeight: '1.5' }}>DocIntel導入後</h4>
              <ul className="mt-3 space-y-2 text-sm text-neutral-600" style={{ lineHeight: '1.8' }}>
                <li className="flex items-start gap-2">
                  <span className="mt-1.5 h-1 w-1 flex-shrink-0 rounded-full bg-emerald-500" />
                  文書処理時間を最大80%削減
                </li>
                <li className="flex items-start gap-2">
                  <span className="mt-1.5 h-1 w-1 flex-shrink-0 rounded-full bg-emerald-500" />
                  ヒューマンエラーをほぼゼロに
                </li>
                <li className="flex items-start gap-2">
                  <span className="mt-1.5 h-1 w-1 flex-shrink-0 rounded-full bg-emerald-500" />
                  必要な情報を数秒で検索
                </li>
                <li className="flex items-start gap-2">
                  <span className="mt-1.5 h-1 w-1 flex-shrink-0 rounded-full bg-emerald-500" />
                  構造化データとして統合活用
                </li>
              </ul>
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

      {/* Use Cases Section */}
      <section className="bg-white py-16 md:py-20">
        <div className="mx-auto max-w-5xl px-6 md:px-8">
          <div className="mb-8 flex items-center gap-3">
            <div className="h-1 w-12 rounded-full bg-sky-600" />
            <span className="text-sm font-semibold uppercase tracking-wider text-sky-700">
              活用シーン
            </span>
          </div>
          <h2 className="text-2xl font-bold text-neutral-900 md:text-3xl" style={{ lineHeight: '1.4' }}>
            適用分野
          </h2>
          <div className="mt-8 grid gap-6 md:grid-cols-2 lg:grid-cols-4">
            {useCases.map((useCase) => (
              <div key={useCase.title} className="rounded-2xl border border-neutral-200 bg-neutral-50 p-6 transition-all hover:border-sky-200 hover:shadow-md">
                <h4 className="font-semibold text-neutral-900" style={{ lineHeight: '1.5' }}>{useCase.title}</h4>
                <p className="mt-2 text-sm text-neutral-600">{useCase.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-gradient-to-br from-sky-700 to-sky-900 py-16 md:py-20">
        <div className="mx-auto max-w-3xl px-6 text-center md:px-8">
          <h2 className="text-2xl font-bold text-white md:text-3xl" style={{ lineHeight: '1.4' }}>
            文書処理を自動化しませんか
          </h2>
          <p className="mt-4 text-base leading-relaxed text-sky-100 md:text-lg" style={{ lineHeight: '1.8' }}>
            お客様の文書サンプルで無料デモを実施します。お気軽にお問い合わせください。
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
