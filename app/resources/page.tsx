'use client';

import React from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';

interface Resource {
  id: string;
  type: 'seminar' | 'whitepaper' | 'video';
  title: string;
  description: string;
  date?: string;
  duration?: string;
}

export default function ResourcesPageJA() {
  const seminars: Resource[] = [
    {
      id: 'seminar-1',
      type: 'seminar',
      title: '【無料ウェビナー】中小企業のためのAI活用入門',
      description: 'AIをビジネスに活用する第一歩を、具体的な事例とともにご紹介します。',
      date: '毎月第2水曜日 14:00-15:00',
      duration: '60分'
    },
    {
      id: 'seminar-2',
      type: 'seminar',
      title: '現場の知恵を活かすナレッジマネジメント実践講座',
      description: 'ベテラン社員の暗黙知を組織の資産に変える方法を解説します。',
      date: '毎月第4木曜日 15:00-16:30',
      duration: '90分'
    },
    {
      id: 'seminar-3',
      type: 'seminar',
      title: '経営者向け：AIで実現する働き方改革',
      description: '経営視点からAI導入のROIと成功のポイントをお伝えします。',
      date: '隔月開催（要予約）',
      duration: '60分'
    }
  ];

  const whitepapers: Resource[] = [
    {
      id: 'wp-1',
      type: 'whitepaper',
      title: '中小企業のためのAI導入ガイドブック',
      description: 'AI導入を検討中の経営者・管理職向け。導入ステップ、コスト目安、成功事例をまとめた完全ガイド。'
    },
    {
      id: 'wp-2',
      type: 'whitepaper',
      title: 'ナレッジ継承の課題と解決策',
      description: '2025年問題に備える。ベテラン社員の知見を次世代に引き継ぐための実践的アプローチ。'
    },
    {
      id: 'wp-3',
      type: 'whitepaper',
      title: '日報・会議メモのAI活用術',
      description: '眠っている社内データから価値を引き出す。現場の声を経営に活かす具体的な方法論。'
    }
  ];

  return (
    <main className="min-h-screen bg-white">
      <Header lang="ja" />

      {/* Hero Section */}
      <section className="pt-32 pb-16 bg-gradient-to-b from-slate-50 to-white">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <h1 className="text-4xl md:text-5xl font-bold text-slate-900 mb-4">
            セミナー・資料
          </h1>
          <p className="text-xl text-slate-600">
            AI活用に役立つセミナーとお役立ち資料をご用意しています
          </p>
        </div>
      </section>

      {/* Seminars Section */}
      <section className="py-16">
        <div className="max-w-5xl mx-auto px-6">
          <h2 className="text-2xl font-bold text-slate-900 mb-8">開催予定のセミナー</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {seminars.map(seminar => (
              <div key={seminar.id} className="bg-white border border-slate-200 rounded-xl p-6 hover:shadow-lg transition-shadow">
                <div className="flex items-center gap-2 mb-3">
                  <span className="px-2 py-1 bg-blue-100 text-blue-700 text-xs font-medium rounded">
                    セミナー
                  </span>
                  {seminar.duration && (
                    <span className="text-xs text-slate-500">{seminar.duration}</span>
                  )}
                </div>
                <h3 className="text-lg font-bold text-slate-900 mb-2">{seminar.title}</h3>
                <p className="text-slate-600 text-sm mb-4">{seminar.description}</p>
                {seminar.date && (
                  <p className="text-sm text-slate-500 mb-4">
                    <svg className="w-4 h-4 inline mr-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                    </svg>
                    {seminar.date}
                  </p>
                )}
                <a
                  href="/contact"
                  className="inline-block w-full text-center px-4 py-2 bg-blue-600 text-white text-sm font-medium rounded-lg hover:bg-blue-700 transition-colors"
                >
                  申し込む
                </a>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Whitepapers Section */}
      <section className="py-16 bg-slate-50">
        <div className="max-w-5xl mx-auto px-6">
          <h2 className="text-2xl font-bold text-slate-900 mb-8">お役立ち資料</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {whitepapers.map(wp => (
              <div key={wp.id} className="bg-white border border-slate-200 rounded-xl p-6 hover:shadow-lg transition-shadow">
                <div className="w-12 h-12 bg-slate-100 rounded-lg flex items-center justify-center mb-4">
                  <svg className="w-6 h-6 text-slate-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                  </svg>
                </div>
                <h3 className="text-lg font-bold text-slate-900 mb-2">{wp.title}</h3>
                <p className="text-slate-600 text-sm mb-4">{wp.description}</p>
                <a
                  href="/contact"
                  className="inline-block w-full text-center px-4 py-2 border border-blue-600 text-blue-600 text-sm font-medium rounded-lg hover:bg-blue-50 transition-colors"
                >
                  無料ダウンロード
                </a>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Newsletter Section */}
      <section className="py-16">
        <div className="max-w-2xl mx-auto px-6 text-center">
          <h2 className="text-2xl font-bold text-slate-900 mb-4">
            最新情報をお届けします
          </h2>
          <p className="text-slate-600 mb-8">
            セミナー情報や新しい資料の公開をメールでお知らせします。
          </p>
          <div className="flex gap-4 max-w-md mx-auto">
            <input
              type="email"
              placeholder="メールアドレス"
              className="flex-1 px-4 py-3 border border-slate-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
            <button className="px-6 py-3 bg-blue-600 text-white font-medium rounded-lg hover:bg-blue-700 transition-colors">
              登録
            </button>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 bg-slate-900">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <h2 className="text-2xl font-bold text-white mb-4">
            個別のご相談も承ります
          </h2>
          <p className="text-slate-300 mb-8">
            貴社の課題に合わせた具体的なご提案をいたします。
          </p>
          <a
            href="/contact"
            className="inline-block px-8 py-4 bg-blue-600 text-white font-semibold rounded-lg hover:bg-blue-700 transition-colors"
          >
            無料相談を予約
          </a>
        </div>
      </section>

      <Footer lang="ja" />
    </main>
  );
}
