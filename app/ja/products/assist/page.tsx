'use client';

import React from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import Link from 'next/link';

export default function AssistPageJA() {
  const assistants = [
    {
      title: '秘書ボット',
      description: '会議の議事録作成、スケジュール管理、メモ整理、フォローアップリマインダー。事務作業を効率的に処理します。',
      features: ['会議議事録作成', 'スケジュール調整', 'メモの要約', 'タスクリマインダー']
    },
    {
      title: 'アナリストボット',
      description: '文書分析、データ抽出、レポート作成。非構造化情報を実用的なインサイトに変換します。',
      features: ['文書分析', 'データ抽出', 'レポート作成', 'トレンド分析']
    },
    {
      title: 'サポートボット',
      description: '日本語と日本の文化を理解したカスタマーサービス。適切な敬語で問い合わせに対応します。',
      features: ['日本語対応', 'FAQ処理', 'チケットルーティング', 'エスカレーション管理']
    },
    {
      title: 'HRボット',
      description: '従業員オンボーディング、規則の問い合わせ、休暇管理。プライバシーを守りながらHR業務を効率化します。',
      features: ['オンボーディング支援', '規則Q&A', '休暇申請処理', '書類収集']
    }
  ];

  const integrations = [
    'Slack', 'Microsoft Teams', 'LINE WORKS', 'Chatwork', 'Google Workspace', 'Microsoft 365'
  ];

  return (
    <main className="min-h-screen bg-neutral-50">
      <Header lang="ja" />

      {/* Hero Section */}
      <section className="bg-white">
        <div className="mx-auto max-w-5xl px-6 py-16 md:px-8 md:py-20">
          <p className="text-xs font-semibold uppercase tracking-[0.2em] text-sky-700">
            KODA ASSIST
          </p>
          <h1 className="mt-4 text-2xl font-bold text-neutral-900 md:text-3xl lg:text-4xl" style={{ lineHeight: '1.4' }}>
            カスタムAIワーカー
          </h1>
          <p className="mt-6 max-w-3xl text-base leading-relaxed text-neutral-700 md:text-lg" style={{ lineHeight: '1.8' }}>
            特定の業務機能に特化したAIアシスタント。秘書業務、分析業務、顧客対応など、
            日本のビジネス慣習を理解したAIワーカーを構築します。
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

      {/* Assistants Grid */}
      <section className="bg-neutral-50 py-16 md:py-20">
        <div className="mx-auto max-w-5xl px-6 md:px-8">
          <div className="mb-8 flex items-center gap-3">
            <div className="h-1 w-12 rounded-full bg-sky-600" />
            <span className="text-sm font-semibold uppercase tracking-wider text-sky-700">
              AIアシスタント
            </span>
          </div>
          <h2 className="text-2xl font-bold text-neutral-900 md:text-3xl" style={{ lineHeight: '1.4' }}>
            利用可能なアシスタントタイプ
          </h2>
          <div className="mt-8 grid gap-6 md:grid-cols-2">
            {assistants.map((assistant) => (
              <div key={assistant.title} className="rounded-2xl border border-neutral-200 bg-white p-6 shadow-sm transition-all hover:border-sky-200 hover:shadow-md md:p-8">
                <h3 className="text-lg font-semibold text-neutral-900" style={{ lineHeight: '1.5' }}>{assistant.title}</h3>
                <p className="mt-2 text-sm text-neutral-600" style={{ lineHeight: '1.8' }}>{assistant.description}</p>
                <div className="mt-4 space-y-1.5">
                  {assistant.features.map((feature, idx) => (
                    <div key={idx} className="flex items-start gap-2 text-sm text-neutral-500">
                      <span className="mt-1.5 h-1 w-1 flex-shrink-0 rounded-full bg-sky-600" />
                      {feature}
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Integrations */}
      <section className="bg-white py-16 md:py-20">
        <div className="mx-auto max-w-5xl px-6 md:px-8">
          <div className="mb-8 flex items-center gap-3">
            <div className="h-1 w-12 rounded-full bg-sky-600" />
            <span className="text-sm font-semibold uppercase tracking-wider text-sky-700">
              連携
            </span>
          </div>
          <h2 className="text-2xl font-bold text-neutral-900 md:text-3xl" style={{ lineHeight: '1.4' }}>
            既存ツールとの連携
          </h2>
          <div className="mt-8 flex flex-wrap gap-3">
            {integrations.map((integration) => (
              <span
                key={integration}
                className="rounded-full bg-neutral-100 px-4 py-2 text-sm text-neutral-700"
              >
                {integration}
              </span>
            ))}
          </div>
          <p className="mt-6 text-sm text-neutral-500">
            エンタープライズのお客様向けにカスタム連携も可能です
          </p>
        </div>
      </section>

      {/* How It Works */}
      <section className="bg-neutral-50 py-16 md:py-20">
        <div className="mx-auto max-w-5xl px-6 md:px-8">
          <div className="mb-8 flex items-center gap-3">
            <div className="h-1 w-12 rounded-full bg-sky-600" />
            <span className="text-sm font-semibold uppercase tracking-wider text-sky-700">
              プロセス
            </span>
          </div>
          <h2 className="text-2xl font-bold text-neutral-900 md:text-3xl" style={{ lineHeight: '1.4' }}>
            アシスタント構築の流れ
          </h2>
          <div className="mt-8 grid gap-6 md:grid-cols-3">
            <div className="rounded-2xl border border-neutral-200 bg-white p-6 shadow-sm transition-all hover:border-sky-200 hover:shadow-md">
              <div className="flex h-8 w-8 items-center justify-center rounded-full bg-sky-100 text-sm font-semibold text-sky-700">1</div>
              <h4 className="mt-4 font-semibold text-neutral-900" style={{ lineHeight: '1.5' }}>要件分析</h4>
              <p className="mt-2 text-sm text-neutral-600" style={{ lineHeight: '1.8' }}>
                お客様の業務プロセスを理解し、AIアシスタンスが最も価値を発揮する領域を特定します。
              </p>
            </div>
            <div className="rounded-2xl border border-neutral-200 bg-white p-6 shadow-sm transition-all hover:border-sky-200 hover:shadow-md">
              <div className="flex h-8 w-8 items-center justify-center rounded-full bg-sky-100 text-sm font-semibold text-sky-700">2</div>
              <h4 className="mt-4 font-semibold text-neutral-900" style={{ lineHeight: '1.5' }}>カスタム開発</h4>
              <p className="mt-2 text-sm text-neutral-600" style={{ lineHeight: '1.8' }}>
                お客様のデータ、用語、業務ルールでアシスタントを構築・トレーニングします。
              </p>
            </div>
            <div className="rounded-2xl border border-neutral-200 bg-white p-6 shadow-sm transition-all hover:border-sky-200 hover:shadow-md">
              <div className="flex h-8 w-8 items-center justify-center rounded-full bg-sky-100 text-sm font-semibold text-sky-700">3</div>
              <h4 className="mt-4 font-semibold text-neutral-900" style={{ lineHeight: '1.5' }}>導入・最適化</h4>
              <p className="mt-2 text-sm text-neutral-600" style={{ lineHeight: '1.8' }}>
                システム連携後、利用状況に基づいて継続的に改善します。
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-gradient-to-br from-sky-700 to-sky-900 py-16 md:py-20">
        <div className="mx-auto max-w-3xl px-6 text-center md:px-8">
          <h2 className="text-2xl font-bold text-white md:text-3xl" style={{ lineHeight: '1.4' }}>
            カスタムAIワーカーを構築しませんか
          </h2>
          <p className="mt-4 text-base leading-relaxed text-sky-100 md:text-lg" style={{ lineHeight: '1.8' }}>
            ワークフローについてお聞かせください。ニーズに合ったAIアシスタントを設計します。
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
