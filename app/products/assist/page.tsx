'use client';

import React from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import Link from 'next/link';

export default function AssistPage() {
  const assistants = [
    {
      id: 'secretary',
      name: 'セクレタリー Bot',
      description: '会議の文字起こし、議事録作成、スケジュール調整、リマインダー管理をAIが担当。',
      features: [
        'リアルタイム文字起こし',
        '自動議事録作成',
        'アクションアイテム抽出',
        'カレンダー連携'
      ],
      icon: '📋'
    },
    {
      id: 'analyst',
      name: 'アナリスト Bot',
      description: '文書分析、データ集計、レポート作成をAIが支援。定型レポートの自動生成も可能。',
      features: [
        '文書要約・分析',
        'データ集計・可視化',
        '定型レポート自動生成',
        'トレンド分析'
      ],
      icon: '📊'
    },
    {
      id: 'support',
      name: 'カスタマーサポート Bot',
      description: '日本語の敬語・ビジネス文化を理解したカスタマーサポート。24時間対応で顧客満足度向上。',
      features: [
        '日本語ビジネス敬語対応',
        'FAQ自動応答',
        'エスカレーション判断',
        '対応履歴管理'
      ],
      icon: '💬'
    },
    {
      id: 'hr',
      name: '人事アシスタント Bot',
      description: '採用、オンボーディング、社内問い合わせ対応を効率化。',
      features: [
        '採用候補者スクリーニング',
        'オンボーディング自動化',
        '社内FAQ対応',
        '勤怠・休暇管理支援'
      ],
      icon: '👥'
    }
  ];

  const customCapabilities = [
    '業界固有の知識ベース構築',
    '既存システムとのAPI連携',
    '社内用語・フローの学習',
    'セキュリティ要件への対応',
    'オンプレミス展開オプション',
    '継続的な改善・チューニング'
  ];

  return (
    <main className="min-h-screen bg-white">
      <Header lang="ja" />

      {/* Hero Section */}
      <section className="pt-32 pb-16 bg-gradient-to-b from-slate-900 to-slate-800">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <div className="inline-block px-4 py-2 bg-slate-700 rounded-full text-slate-300 text-sm font-medium mb-6">
            KODA PRODUCT
          </div>
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">
            KODA Assist
          </h1>
          <p className="text-xl text-slate-300 leading-relaxed mb-4">
            Custom AI Workers
          </p>
          <p className="text-lg text-slate-400 leading-relaxed mb-8">
            日本のビジネス文化を理解した、目的特化型AIアシスタント。
            定型業務を自動化し、人材を本質的な業務に集中させます。
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Link
              href="/contact"
              className="inline-block px-8 py-4 bg-blue-600 text-white font-semibold rounded-lg hover:bg-blue-700 transition-colors"
            >
              相談する
            </Link>
            <Link
              href="/demo"
              className="inline-block px-8 py-4 bg-white/10 text-white font-semibold rounded-lg hover:bg-white/20 transition-colors"
            >
              デモを見る
            </Link>
          </div>
        </div>
      </section>

      {/* Why Custom AI */}
      <section className="py-16 bg-slate-50">
        <div className="max-w-4xl mx-auto px-6">
          <h2 className="text-2xl font-bold text-slate-900 text-center mb-8">
            なぜ専用AIアシスタントが必要か
          </h2>
          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-white p-6 rounded-xl shadow-sm">
              <h3 className="font-bold text-slate-400 mb-4 line-through">汎用AIツールの限界</h3>
              <ul className="space-y-3 text-slate-500">
                <li className="flex items-start gap-2">
                  <span className="text-red-400 mt-1">✗</span>
                  <span>日本語ビジネス文化を理解していない</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-red-400 mt-1">✗</span>
                  <span>社内システムと連携できない</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-red-400 mt-1">✗</span>
                  <span>業界・自社固有の知識がない</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-red-400 mt-1">✗</span>
                  <span>機密データを外部に送信してしまう</span>
                </li>
              </ul>
            </div>
            <div className="bg-white p-6 rounded-xl shadow-sm border-2 border-blue-200">
              <h3 className="font-bold text-blue-600 mb-4">KODA Assistの強み</h3>
              <ul className="space-y-3 text-slate-700">
                <li className="flex items-start gap-2">
                  <span className="text-green-500 mt-1">✓</span>
                  <span>日本語敬語・ビジネスマナー完全対応</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-green-500 mt-1">✓</span>
                  <span>既存システムとシームレス連携</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-green-500 mt-1">✓</span>
                  <span>自社データで学習・カスタマイズ</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-green-500 mt-1">✓</span>
                  <span>日本国内でデータ処理、オンプレ可</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Assistant Types */}
      <section className="py-16">
        <div className="max-w-6xl mx-auto px-6">
          <h2 className="text-2xl font-bold text-slate-900 text-center mb-12">
            標準アシスタント
          </h2>
          <div className="grid md:grid-cols-2 gap-8">
            {assistants.map((assistant) => (
              <div key={assistant.id} className="p-8 rounded-xl border border-slate-200 hover:border-blue-300 hover:shadow-lg transition-all">
                <div className="flex items-start gap-4 mb-4">
                  <div className="text-4xl">{assistant.icon}</div>
                  <div>
                    <h3 className="text-xl font-bold text-slate-900">{assistant.name}</h3>
                    <p className="text-slate-600 mt-1">{assistant.description}</p>
                  </div>
                </div>
                <ul className="grid grid-cols-2 gap-2 mt-6">
                  {assistant.features.map((feature, idx) => (
                    <li key={idx} className="flex items-center gap-2 text-slate-700 text-sm">
                      <span className="w-1.5 h-1.5 bg-blue-600 rounded-full flex-shrink-0"></span>
                      {feature}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Custom Development */}
      <section className="py-16 bg-blue-900 text-white">
        <div className="max-w-4xl mx-auto px-6">
          <h2 className="text-2xl font-bold text-center mb-8">
            カスタム開発
          </h2>
          <p className="text-center text-blue-200 mb-12">
            標準アシスタントで対応できないニーズにも、カスタム開発で対応します。
          </p>
          <div className="grid md:grid-cols-2 gap-4">
            {customCapabilities.map((capability, idx) => (
              <div key={idx} className="flex items-center gap-3 bg-blue-800/50 p-4 rounded-lg">
                <span className="text-blue-400">→</span>
                <span>{capability}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Integration */}
      <section className="py-16">
        <div className="max-w-4xl mx-auto px-6">
          <h2 className="text-2xl font-bold text-slate-900 text-center mb-12">
            連携可能なシステム
          </h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {['Slack', 'Microsoft Teams', 'LINE WORKS', 'Chatwork', 'Salesforce', 'kintone', 'Google Workspace', 'Office 365'].map((system, idx) => (
              <div key={idx} className="p-4 bg-slate-50 rounded-lg text-center text-slate-700 font-medium">
                {system}
              </div>
            ))}
          </div>
          <p className="text-center text-slate-500 mt-6 text-sm">
            その他のシステムもAPI経由で連携可能です
          </p>
        </div>
      </section>

      {/* Pricing */}
      <section className="py-16 bg-slate-50">
        <div className="max-w-4xl mx-auto px-6">
          <h2 className="text-2xl font-bold text-slate-900 text-center mb-12">
            料金
          </h2>
          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-white p-8 rounded-xl shadow-sm">
              <h3 className="text-xl font-bold text-slate-900 mb-2">標準アシスタント</h3>
              <p className="text-3xl font-bold text-blue-600 mb-4">
                ¥100,000<span className="text-lg text-slate-500">/月〜</span>
              </p>
              <ul className="space-y-3 text-slate-600 mb-6">
                <li className="flex items-center gap-2">
                  <span className="text-green-500">✓</span> 選択したBotタイプ1種
                </li>
                <li className="flex items-center gap-2">
                  <span className="text-green-500">✓</span> 基本カスタマイズ
                </li>
                <li className="flex items-center gap-2">
                  <span className="text-green-500">✓</span> 主要システム連携
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
            <div className="bg-white p-8 rounded-xl shadow-sm border-2 border-blue-500">
              <h3 className="text-xl font-bold text-slate-900 mb-2">カスタム開発</h3>
              <p className="text-3xl font-bold text-blue-600 mb-4">
                ¥300,000<span className="text-lg text-slate-500">/月〜</span>
              </p>
              <ul className="space-y-3 text-slate-600 mb-6">
                <li className="flex items-center gap-2">
                  <span className="text-green-500">✓</span> 完全カスタム設計
                </li>
                <li className="flex items-center gap-2">
                  <span className="text-green-500">✓</span> 自社データ学習
                </li>
                <li className="flex items-center gap-2">
                  <span className="text-green-500">✓</span> 任意システム連携
                </li>
                <li className="flex items-center gap-2">
                  <span className="text-green-500">✓</span> オンプレミス対応可
                </li>
                <li className="flex items-center gap-2">
                  <span className="text-green-500">✓</span> 専任担当者
                </li>
              </ul>
              <Link
                href="/contact"
                className="block text-center py-3 bg-blue-600 text-white rounded-lg font-semibold hover:bg-blue-700 transition-colors"
              >
                相談する
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 bg-slate-900">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <h2 className="text-2xl font-bold text-white mb-4">
            あなたの業務に最適なAIアシスタントを
          </h2>
          <p className="text-slate-300 mb-8">
            まずはお気軽にご相談ください。最適なソリューションをご提案します。
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Link
              href="/contact"
              className="inline-block px-8 py-4 bg-blue-600 text-white font-semibold rounded-lg hover:bg-blue-700 transition-colors"
            >
              無料相談
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
