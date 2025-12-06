'use client';

import React from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import Link from 'next/link';

export default function TrainingPageJA() {
  const features = [
    {
      title: '適応型学習パス',
      description: 'AIが学習者の進捗を分析し、コンテンツの難易度、ペース、スタイルを調整して個人の学習成果を最適化します。'
    },
    {
      title: 'AIチューター・メンター',
      description: '学習スタイルを理解し、ターゲットを絞ったフィードバックと励ましを提供するAIからのパーソナライズされた指導。'
    },
    {
      title: 'スキルギャップ分析',
      description: '組織全体の能力ギャップを特定し、ターゲットを絞った研修介入を自動的に推奨します。'
    },
    {
      title: 'コンプライアンス自動化',
      description: '必須研修の追跡、資格管理、コンプライアンスレポートを自動化します。'
    },
    {
      title: '進捗分析',
      description: '個人とチームの進捗、エンゲージメント指標、学習成果を示す詳細なダッシュボード。'
    },
    {
      title: 'コンテンツ生成',
      description: '既存の文書やナレッジベースからAI支援で研修資料を作成します。'
    }
  ];

  const applications = [
    '新入社員オンボーディング',
    '営業研修',
    '技術スキル開発',
    'リーダーシッププログラム',
    'コンプライアンス研修',
    '製品知識'
  ];

  return (
    <main className="min-h-screen bg-neutral-50">
      <Header lang="ja" />

      {/* Hero Section */}
      <section className="bg-white">
        <div className="mx-auto max-w-5xl px-6 py-16 md:px-8 md:py-20">
          <p className="text-xs font-semibold uppercase tracking-[0.2em] text-sky-700">
            KODA TRAINING
          </p>
          <h1 className="mt-4 text-2xl font-bold text-neutral-900 md:text-3xl lg:text-4xl" style={{ lineHeight: '1.4' }}>
            AI強化型企業研修
          </h1>
          <p className="mt-6 max-w-3xl text-base leading-relaxed text-neutral-700 md:text-lg" style={{ lineHeight: '1.8' }}>
            AIを活用したアダプティブラーニングで企業研修を変革。
            個人に最適化されたスキル開発、能力追跡、パフォーマンス分析を提供します。
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

      {/* Applications */}
      <section className="bg-white py-16 md:py-20">
        <div className="mx-auto max-w-5xl px-6 md:px-8">
          <div className="mb-8 flex items-center gap-3">
            <div className="h-1 w-12 rounded-full bg-sky-600" />
            <span className="text-sm font-semibold uppercase tracking-wider text-sky-700">
              適用分野
            </span>
          </div>
          <h2 className="text-2xl font-bold text-neutral-900 md:text-3xl" style={{ lineHeight: '1.4' }}>
            研修領域
          </h2>
          <div className="mt-8 flex flex-wrap gap-3">
            {applications.map((app) => (
              <span
                key={app}
                className="rounded-full bg-neutral-100 px-4 py-2 text-sm text-neutral-700"
              >
                {app}
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits */}
      <section className="bg-neutral-50 py-16 md:py-20">
        <div className="mx-auto max-w-5xl px-6 md:px-8">
          <div className="mb-8 flex items-center gap-3">
            <div className="h-1 w-12 rounded-full bg-sky-600" />
            <span className="text-sm font-semibold uppercase tracking-wider text-sky-700">
              メリット
            </span>
          </div>
          <h2 className="text-2xl font-bold text-neutral-900 md:text-3xl" style={{ lineHeight: '1.4' }}>
            KODA Trainingが選ばれる理由
          </h2>
          <div className="mt-8 grid gap-6 md:grid-cols-3">
            <div className="rounded-2xl border border-neutral-200 bg-white p-6 shadow-sm transition-all hover:border-sky-200 hover:shadow-md">
              <h4 className="font-semibold text-neutral-900" style={{ lineHeight: '1.5' }}>オンボーディング高速化</h4>
              <p className="mt-2 text-sm text-neutral-600" style={{ lineHeight: '1.8' }}>
                パーソナライズされた学習ジャーニーで、新入社員の戦力化までの時間を短縮します。
              </p>
            </div>
            <div className="rounded-2xl border border-neutral-200 bg-white p-6 shadow-sm transition-all hover:border-sky-200 hover:shadow-md">
              <h4 className="font-semibold text-neutral-900" style={{ lineHeight: '1.5' }}>知識定着率向上</h4>
              <p className="mt-2 text-sm text-neutral-600" style={{ lineHeight: '1.8' }}>
                適応型のペーシングと魅力的なコンテンツで、知識の定着率が向上します。
              </p>
            </div>
            <div className="rounded-2xl border border-neutral-200 bg-white p-6 shadow-sm transition-all hover:border-sky-200 hover:shadow-md">
              <h4 className="font-semibold text-neutral-900" style={{ lineHeight: '1.5' }}>コスト削減</h4>
              <p className="mt-2 text-sm text-neutral-600" style={{ lineHeight: '1.8' }}>
                講師やコンテンツコストの比例増加なしに研修を拡大できます。
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-gradient-to-br from-sky-700 to-sky-900 py-16 md:py-20">
        <div className="mx-auto max-w-3xl px-6 text-center md:px-8">
          <h2 className="text-2xl font-bold text-white md:text-3xl" style={{ lineHeight: '1.4' }}>
            企業研修を近代化しませんか
          </h2>
          <p className="mt-4 text-base leading-relaxed text-sky-100 md:text-lg" style={{ lineHeight: '1.8' }}>
            AI駆動の学習が組織の研修効果をどう変革するかご覧ください。
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
