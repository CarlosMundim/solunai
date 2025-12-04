'use client';

import React from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import Link from 'next/link';

export default function MedCommPage() {
  const features = [
    {
      icon: '🎭',
      title: 'バーチャル患者',
      description: 'AIが多様な患者プロフィールを再現。年齢、性格、症状、文化的背景を設定し、リアルな対話練習が可能。'
    },
    {
      icon: '👨‍🏫',
      title: 'エキスパート・デジタルツイン',
      description: 'ベテラン医師の指導スタイルをAIで再現。学習者にリアルタイムでフィードバックとガイダンスを提供。'
    },
    {
      icon: '📊',
      title: '自動評価エンジン',
      description: 'コミュニケーションスキルを多角的に評価。共感力、説明の明瞭さ、質問技法、非言語コミュニケーションを分析。'
    },
    {
      icon: '🇯🇵',
      title: '日本の医療文化対応',
      description: '敬語、間合い、家族との関係性など、日本の医療現場特有のコミュニケーション要素を組み込んだシナリオ。'
    },
    {
      icon: '⏰',
      title: '24時間365日利用可能',
      description: '学習者は都合の良い時間にいつでも練習可能。繁忙期も待ち時間なしで学習を継続。'
    },
    {
      icon: '📈',
      title: '学習分析ダッシュボード',
      description: '個人・グループの進捗を可視化。弱点の特定と改善推奨を自動生成。'
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

  const benefits = [
    { metric: '1/10', label: '従来の標準模擬患者費用との比較' },
    { metric: '24/7', label: '利用可能時間' },
    { metric: '100+', label: '対応シナリオ数' },
    { metric: '即時', label: 'フィードバック提供' }
  ];

  return (
    <main className="min-h-screen bg-white">
      <Header lang="ja" />

      {/* Hero Section */}
      <section className="pt-32 pb-16 bg-gradient-to-b from-blue-900 to-blue-800">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <div className="inline-block px-4 py-2 bg-blue-600/30 rounded-full text-blue-300 text-sm font-medium mb-6">
            KODA FLAGSHIP PRODUCT
          </div>
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">
            KODA MedComm
          </h1>
          <p className="text-xl text-blue-200 leading-relaxed mb-4">
            AI-Powered Medical Communication Training
          </p>
          <p className="text-lg text-blue-100 leading-relaxed mb-8">
            AI仮想患者との対話練習で、医療コミュニケーションスキルを効率的に向上。
            従来の10分の1のコストで、いつでも・どこでも・何度でも練習可能。
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Link
              href="/contact"
              className="inline-block px-8 py-4 bg-white text-blue-900 font-semibold rounded-lg hover:bg-blue-50 transition-colors"
            >
              資料請求
            </Link>
            <Link
              href="/demo"
              className="inline-block px-8 py-4 bg-blue-700 text-white font-semibold rounded-lg hover:bg-blue-600 transition-colors"
            >
              デモを見る
            </Link>
          </div>
        </div>
      </section>

      {/* Problem Statement */}
      <section className="py-16 bg-slate-50">
        <div className="max-w-4xl mx-auto px-6">
          <h2 className="text-2xl font-bold text-slate-900 text-center mb-8">
            医療教育の課題
          </h2>
          <div className="grid md:grid-cols-3 gap-6">
            <div className="bg-white p-6 rounded-xl shadow-sm border-l-4 border-red-500">
              <h3 className="font-bold text-slate-900 mb-2">高コスト</h3>
              <p className="text-slate-600 text-sm">
                標準模擬患者(SP)の1セッションあたり¥50,000以上。予算制約で十分な練習機会を提供できない。
              </p>
            </div>
            <div className="bg-white p-6 rounded-xl shadow-sm border-l-4 border-orange-500">
              <h3 className="font-bold text-slate-900 mb-2">一貫性の欠如</h3>
              <p className="text-slate-600 text-sm">
                人間のSPは疲労や気分でパフォーマンスにばらつき。評価基準も主観的になりがち。
              </p>
            </div>
            <div className="bg-white p-6 rounded-xl shadow-sm border-l-4 border-yellow-500">
              <h3 className="font-bold text-slate-900 mb-2">スケーラビリティ</h3>
              <p className="text-slate-600 text-sm">
                SP人材は希少。増加する学生数に対応できず、練習機会が不足。
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Benefits */}
      <section className="py-16">
        <div className="max-w-6xl mx-auto px-6">
          <h2 className="text-2xl font-bold text-slate-900 text-center mb-12">
            KODA MedCommの優位性
          </h2>
          <div className="grid md:grid-cols-4 gap-6">
            {benefits.map((benefit, idx) => (
              <div key={idx} className="text-center p-6 bg-blue-50 rounded-xl">
                <div className="text-4xl font-bold text-blue-600 mb-2">{benefit.metric}</div>
                <p className="text-slate-600">{benefit.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Features */}
      <section className="py-16 bg-slate-50">
        <div className="max-w-6xl mx-auto px-6">
          <h2 className="text-2xl font-bold text-slate-900 text-center mb-12">
            機能
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {features.map((feature, idx) => (
              <div key={idx} className="bg-white p-6 rounded-xl shadow-sm">
                <div className="text-3xl mb-4">{feature.icon}</div>
                <h3 className="font-bold text-slate-900 mb-2">{feature.title}</h3>
                <p className="text-slate-600 text-sm">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Scenarios */}
      <section className="py-16">
        <div className="max-w-4xl mx-auto px-6">
          <h2 className="text-2xl font-bold text-slate-900 text-center mb-8">
            対応シナリオ（例）
          </h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {scenarios.map((scenario, idx) => (
              <div
                key={idx}
                className="p-4 bg-blue-50 rounded-lg text-center text-slate-700 text-sm font-medium"
              >
                {scenario}
              </div>
            ))}
          </div>
          <p className="text-center text-slate-500 mt-6">
            ※ カスタムシナリオの追加も可能です
          </p>
        </div>
      </section>

      {/* Academic Partnership */}
      <section className="py-16 bg-blue-900 text-white">
        <div className="max-w-4xl mx-auto px-6">
          <h2 className="text-2xl font-bold text-center mb-8">
            学術パートナーシップ
          </h2>
          <div className="bg-blue-800/50 p-8 rounded-xl">
            <blockquote className="text-lg text-blue-100 italic mb-4">
              "KODA MedCommは、医療コミュニケーション教育に革新をもたらす可能性を秘めています。
              AIと人間の強みを組み合わせたこのアプローチは、次世代の医療者育成に大きく貢献するでしょう。"
            </blockquote>
            <p className="text-blue-200">
              — Professor Jeanette Littlemore, University of Birmingham
              <br />
              <span className="text-sm">医療コミュニケーション・メタファー研究の世界的権威</span>
            </p>
          </div>
        </div>
      </section>

      {/* Pricing */}
      <section className="py-16">
        <div className="max-w-4xl mx-auto px-6">
          <h2 className="text-2xl font-bold text-slate-900 text-center mb-12">
            料金
          </h2>
          <div className="grid md:grid-cols-2 gap-8">
            <div className="p-8 rounded-xl border-2 border-slate-200">
              <h3 className="text-xl font-bold text-slate-900 mb-2">スタンダード</h3>
              <p className="text-3xl font-bold text-blue-600 mb-4">
                ¥300,000<span className="text-lg text-slate-500">/年</span>
              </p>
              <ul className="space-y-3 text-slate-600 mb-6">
                <li className="flex items-center gap-2">
                  <span className="text-green-500">✓</span> 50ユーザーまで
                </li>
                <li className="flex items-center gap-2">
                  <span className="text-green-500">✓</span> 基本シナリオセット
                </li>
                <li className="flex items-center gap-2">
                  <span className="text-green-500">✓</span> 学習分析ダッシュボード
                </li>
                <li className="flex items-center gap-2">
                  <span className="text-green-500">✓</span> メールサポート
                </li>
              </ul>
              <Link
                href="/contact"
                className="block text-center py-3 border-2 border-blue-600 text-blue-600 rounded-lg font-semibold hover:bg-blue-50 transition-colors"
              >
                お問い合わせ
              </Link>
            </div>
            <div className="p-8 rounded-xl border-2 border-blue-500 bg-blue-50/50">
              <div className="text-sm font-bold text-blue-600 mb-2">RECOMMENDED</div>
              <h3 className="text-xl font-bold text-slate-900 mb-2">エンタープライズ</h3>
              <p className="text-3xl font-bold text-blue-600 mb-4">
                ¥500,000<span className="text-lg text-slate-500">/年〜</span>
              </p>
              <ul className="space-y-3 text-slate-600 mb-6">
                <li className="flex items-center gap-2">
                  <span className="text-green-500">✓</span> 無制限ユーザー
                </li>
                <li className="flex items-center gap-2">
                  <span className="text-green-500">✓</span> カスタムシナリオ作成
                </li>
                <li className="flex items-center gap-2">
                  <span className="text-green-500">✓</span> エキスパート・デジタルツイン
                </li>
                <li className="flex items-center gap-2">
                  <span className="text-green-500">✓</span> API連携
                </li>
                <li className="flex items-center gap-2">
                  <span className="text-green-500">✓</span> 優先サポート
                </li>
              </ul>
              <Link
                href="/contact"
                className="block text-center py-3 bg-blue-600 text-white rounded-lg font-semibold hover:bg-blue-700 transition-colors"
              >
                お問い合わせ
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 bg-slate-900">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <h2 className="text-2xl font-bold text-white mb-4">
            医療コミュニケーション教育を変革しませんか？
          </h2>
          <p className="text-slate-300 mb-8">
            デモンストレーションや詳細資料をご希望の方は、お気軽にお問い合わせください。
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Link
              href="/contact"
              className="inline-block px-8 py-4 bg-blue-600 text-white font-semibold rounded-lg hover:bg-blue-700 transition-colors"
            >
              お問い合わせ
            </Link>
            <Link
              href="/products"
              className="inline-block px-8 py-4 bg-white/10 text-white font-semibold rounded-lg hover:bg-white/20 transition-colors"
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
