'use client';

import React from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import Link from 'next/link';

export default function KodaProductsPage() {
  const products = [
    {
      id: 'medcomm',
      name: 'KODA MedComm',
      tagline: 'AI-Powered Medical Communication Training',
      description: 'Train medical students and healthcare professionals in patient communication with AI virtual patients. 24/7 availability, consistent quality, detailed analytics.',
      features: [
        'Virtual patients for communication practice',
        'Expert digital twins for guidance',
        'Automated assessment engine',
        'Culturally-appropriate Japanese scenarios'
      ],
      price: 'From ¥300,000/year',
      icon: '🏥',
      highlight: true,
      href: '/products/medcomm'
    },
    {
      id: 'docintel',
      name: 'KODA DocIntel',
      tagline: 'Intelligent Document Processing',
      description: 'AI system that reads, understands, and acts on Japanese business documents. OCR with deep comprehension, data extraction, and workflow automation.',
      features: [
        'Japanese document OCR + understanding',
        'Structured data extraction',
        'Workflow automation',
        'Classification and routing'
      ],
      price: 'From ¥50,000/month',
      icon: '📄',
      highlight: false,
      href: '/products/docintel'
    },
    {
      id: 'assist',
      name: 'KODA Assist',
      tagline: 'Custom AI Workers',
      description: 'Purpose-built AI assistants for specific business functions. Secretary bots, analyst bots, customer service bots - all optimized for Japanese business context.',
      features: [
        'Secretary: Transcription, scheduling, notes',
        'Analyst: Document analysis, reporting',
        'Customer Service: Japanese-aware support',
        'Custom: Built for your needs'
      ],
      price: 'From ¥100,000/month',
      icon: '🤖',
      highlight: false,
      href: '/products/assist'
    }
  ];

  return (
    <main className="min-h-screen bg-white">
      <Header lang="ja" />

      {/* Hero Section */}
      <section className="pt-32 pb-16 bg-gradient-to-b from-slate-900 to-slate-800">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <div className="inline-block px-4 py-2 bg-blue-600/20 rounded-full text-blue-400 text-sm font-medium mb-6">
            KODA PRODUCT LINE
          </div>
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">
            KODA製品ライン
          </h1>
          <p className="text-xl text-slate-300 leading-relaxed">
            日本市場向けに最適化されたAIソリューション。
            医療教育から文書処理まで、企業のDXを加速します。
          </p>
        </div>
      </section>

      {/* Why KODA */}
      <section className="py-16 bg-slate-50">
        <div className="max-w-6xl mx-auto px-6">
          <h2 className="text-2xl font-bold text-slate-900 text-center mb-12">
            なぜKODAか
          </h2>
          <div className="grid md:grid-cols-4 gap-6">
            <div className="text-center p-6 bg-white rounded-xl shadow-sm">
              <div className="text-3xl mb-4">🇯🇵</div>
              <h3 className="font-bold text-slate-900 mb-2">日本ファースト</h3>
              <p className="text-slate-600 text-sm">日本語、日本の文化、日本のビジネス慣習のために設計</p>
            </div>
            <div className="text-center p-6 bg-white rounded-xl shadow-sm">
              <div className="text-3xl mb-4">🎓</div>
              <h3 className="font-bold text-slate-900 mb-2">学術的信頼性</h3>
              <p className="text-slate-600 text-sm">世界的専門家との連携による品質保証</p>
            </div>
            <div className="text-center p-6 bg-white rounded-xl shadow-sm">
              <div className="text-3xl mb-4">💰</div>
              <h3 className="font-bold text-slate-900 mb-2">SME価格</h3>
              <p className="text-slate-600 text-sm">エンタープライズ品質を中小企業価格で</p>
            </div>
            <div className="text-center p-6 bg-white rounded-xl shadow-sm">
              <div className="text-3xl mb-4">🔧</div>
              <h3 className="font-bold text-slate-900 mb-2">カスタマイズ可能</h3>
              <p className="text-slate-600 text-sm">お客様のニーズに合わせた柔軟な対応</p>
            </div>
          </div>
        </div>
      </section>

      {/* Products Grid */}
      <section className="py-16">
        <div className="max-w-6xl mx-auto px-6">
          <div className="grid gap-8">
            {products.map((product) => (
              <div
                key={product.id}
                className={`p-8 rounded-2xl border-2 transition-all hover:shadow-lg ${
                  product.highlight
                    ? 'border-blue-500 bg-blue-50/50'
                    : 'border-slate-200 bg-white'
                }`}
              >
                <div className="flex flex-col md:flex-row gap-8">
                  <div className="flex-shrink-0">
                    <div className={`w-20 h-20 rounded-2xl flex items-center justify-center text-4xl ${
                      product.highlight ? 'bg-blue-600 text-white' : 'bg-slate-100'
                    }`}>
                      {product.icon}
                    </div>
                    {product.highlight && (
                      <div className="mt-3 text-center">
                        <span className="px-3 py-1 bg-blue-600 text-white text-xs font-bold rounded-full">
                          FLAGSHIP
                        </span>
                      </div>
                    )}
                  </div>

                  <div className="flex-grow">
                    <h3 className="text-2xl font-bold text-slate-900 mb-1">{product.name}</h3>
                    <p className="text-blue-600 font-medium mb-4">{product.tagline}</p>
                    <p className="text-slate-600 mb-6">{product.description}</p>

                    <div className="grid md:grid-cols-2 gap-3 mb-6">
                      {product.features.map((feature, idx) => (
                        <div key={idx} className="flex items-center gap-2 text-slate-700">
                          <span className="w-2 h-2 bg-blue-600 rounded-full flex-shrink-0"></span>
                          <span className="text-sm">{feature}</span>
                        </div>
                      ))}
                    </div>

                    <div className="flex flex-wrap items-center gap-4">
                      <span className="text-lg font-bold text-slate-900">{product.price}</span>
                      <Link
                        href={product.href}
                        className={`px-6 py-3 rounded-lg font-semibold transition-colors ${
                          product.highlight
                            ? 'bg-blue-600 text-white hover:bg-blue-700'
                            : 'bg-slate-900 text-white hover:bg-slate-800'
                        }`}
                      >
                        詳細を見る
                      </Link>
                      <Link
                        href="/contact"
                        className="px-6 py-3 rounded-lg font-semibold border-2 border-slate-300 text-slate-700 hover:border-slate-400 transition-colors"
                      >
                        お問い合わせ
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Target Customers */}
      <section className="py-16 bg-slate-50">
        <div className="max-w-6xl mx-auto px-6">
          <h2 className="text-2xl font-bold text-slate-900 text-center mb-12">
            対象顧客
          </h2>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-white p-8 rounded-xl shadow-sm">
              <h3 className="text-xl font-bold text-slate-900 mb-4">医療教育機関</h3>
              <ul className="space-y-3 text-slate-600">
                <li className="flex items-start gap-2">
                  <span className="text-blue-600 mt-1">•</span>
                  <span>医学部（全国82校）</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-blue-600 mt-1">•</span>
                  <span>教育病院</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-blue-600 mt-1">•</span>
                  <span>看護学校</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-blue-600 mt-1">•</span>
                  <span>医療団体</span>
                </li>
              </ul>
            </div>
            <div className="bg-white p-8 rounded-xl shadow-sm">
              <h3 className="text-xl font-bold text-slate-900 mb-4">医療機関</h3>
              <ul className="space-y-3 text-slate-600">
                <li className="flex items-start gap-2">
                  <span className="text-blue-600 mt-1">•</span>
                  <span>病院</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-blue-600 mt-1">•</span>
                  <span>クリニック</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-blue-600 mt-1">•</span>
                  <span>介護施設</span>
                </li>
              </ul>
            </div>
            <div className="bg-white p-8 rounded-xl shadow-sm">
              <h3 className="text-xl font-bold text-slate-900 mb-4">中小企業</h3>
              <ul className="space-y-3 text-slate-600">
                <li className="flex items-start gap-2">
                  <span className="text-blue-600 mt-1">•</span>
                  <span>コンサルティング会社</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-blue-600 mt-1">•</span>
                  <span>法律事務所</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-blue-600 mt-1">•</span>
                  <span>会計事務所</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-blue-600 mt-1">•</span>
                  <span>製造業</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 bg-slate-900">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <h2 className="text-2xl font-bold text-white mb-4">
            お問い合わせ
          </h2>
          <p className="text-slate-300 mb-8">
            KODAプロダクトについてご質問がございましたら、お気軽にお問い合わせください。
            無料相談も承っております。
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Link
              href="/contact"
              className="inline-block px-8 py-4 bg-blue-600 text-white font-semibold rounded-lg hover:bg-blue-700 transition-colors"
            >
              お問い合わせ
            </Link>
            <Link
              href="/demo"
              className="inline-block px-8 py-4 bg-white/10 text-white font-semibold rounded-lg hover:bg-white/20 transition-colors"
            >
              デモを試す
            </Link>
          </div>
        </div>
      </section>

      <Footer lang="ja" />
    </main>
  );
}
