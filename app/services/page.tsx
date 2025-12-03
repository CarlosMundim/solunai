'use client';

import React from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';

export default function ServicesPageJA() {
  const services = [
    {
      number: '01',
      title: 'AIエンジニアリング / システム開発',
      description: 'セマンティック・コンピューティングや連続推論を中心とした高度なAIシステムを設計・開発します。アーキテクチャ設計から実装、統合まで、一貫した支援を行います。',
      items: [
        'セマンティックエンジン',
        '自律エージェント設計',
        '推論パイプライン',
        'カルチュラル・インテリジェンス統合',
        'マルチモーダル理解'
      ]
    },
    {
      number: '02',
      title: 'エージェントプラットフォーム導入',
      description: '企業環境に最適化されたエージェントAIを設計・実装します。業務の自動化、ナレッジ管理、意思決定支援など、透明性と文化理解を備えた動作を実現します。',
      items: [
        'ワークフロー自動化',
        'ナレッジ/文書エージェント',
        '顧客・人材対応エージェント',
        '社内サポートエージェント'
      ]
    },
    {
      number: '03',
      title: 'カルチュラル・インテリジェンス / 人材ソリューション',
      description: '国際人材の採用・育成・定着を支援するカルチュラル・インテリジェンス技術を提供します。異文化コミュニケーション、職場適応、安全管理を科学的にサポートします。',
      items: [
        '文化適応度分析',
        'シナリオベース能力評価',
        '安全・コミュニケーション特性分析',
        'トレーニング提案'
      ]
    },
    {
      number: '04',
      title: 'エンタープライズ統合 / システムアーキテクチャ',
      description: '既存の企業システムとスムーズに統合できるAI基盤を設計します。国内外の企業向けアーキテクチャに精通し、運用を妨げずに導入可能です。',
      items: [
        'CRM / ERP / HRIS',
        'ID / アクセス管理',
        'データレイク・BI',
        'API / マイクロサービス',
        'ナレッジ基盤',
        '産業システム・デジタルツイン'
      ]
    },
    {
      number: '05',
      title: '産業・エンジニアリングAI',
      description: 'エンジニアリング企業向けに、設計支援、自動化、シミュレーションなどのAIソリューションを提供します。',
      items: [
        '設計支援・パラメータ最適化',
        'シミュレーション・モデリング',
        '技術文書エージェント',
        '安全・コンプライアンスワークフロー'
      ]
    },
    {
      number: '06',
      title: 'トレーニング / ガバナンス支援 / 運用サポート',
      description: '責任あるAI運用を支援する教育・ガバナンス・長期サポートを提供します。',
      items: [
        'ガバナンス・監査フレームワーク',
        'AIリテラシー研修',
        '導入ガイドライン',
        'データ・安全管理',
        '長期保守プラン'
      ]
    }
  ];

  return (
    <main className="min-h-screen bg-white">
      <Header lang="ja" />

      {/* Hero Section */}
      <section className="pt-32 pb-16 bg-gradient-to-b from-slate-900 to-slate-800">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">
            サービス
          </h1>
          <p className="text-xl text-slate-300 leading-relaxed">
            企業・自治体向けに、高い信頼性とガバナンスを備えたAIエンジニアリング、セマンティック基盤、エージェント技術を提供しています。
          </p>
        </div>
      </section>

      {/* Introduction */}
      <section className="py-16">
        <div className="max-w-4xl mx-auto px-6">
          <p className="text-lg text-slate-700 leading-relaxed">
            ソルナイ株式会社は、企業・自治体向けに、高い信頼性とガバナンスを備えたAIエンジニアリング、セマンティック基盤、エージェント技術を提供しています。技術力と文化理解を組み合わせ、安全かつ持続的に運用できるAIシステムの導入を支援します。
          </p>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-16 bg-slate-50">
        <div className="max-w-6xl mx-auto px-6">
          <div className="grid md:grid-cols-2 gap-8">
            {services.map((service, index) => (
              <div key={index} className="bg-white p-8 rounded-xl shadow-sm hover:shadow-md transition-shadow">
                <div className="flex items-start gap-4 mb-4">
                  <span className="text-4xl font-bold text-blue-600 opacity-50">{service.number}</span>
                  <h2 className="text-xl font-bold text-slate-900 pt-2">{service.title}</h2>
                </div>
                <p className="text-slate-600 mb-6 leading-relaxed">{service.description}</p>
                <ul className="space-y-2">
                  {service.items.map((item, itemIndex) => (
                    <li key={itemIndex} className="flex items-center gap-3 text-slate-700">
                      <span className="w-1.5 h-1.5 bg-blue-600 rounded-full flex-shrink-0"></span>
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Approach */}
      <section className="py-16">
        <div className="max-w-4xl mx-auto px-6">
          <h2 className="text-2xl font-bold text-slate-900 mb-6">当社のアプローチ</h2>
          <p className="text-lg text-slate-700 leading-relaxed mb-8">
            決定論的で、強いガバナンス下で動作するシステムを提供します。すべてのソリューションは、監査性、安定性、長期メンテナンス性を重視した開発手法で構築されています。
          </p>
          <div className="grid md:grid-cols-3 gap-6">
            <div className="text-center p-6 bg-slate-50 rounded-xl">
              <h3 className="font-bold text-slate-900 mb-2">決定論的デザイン</h3>
              <p className="text-slate-600 text-sm">予測可能で再現性のある動作</p>
            </div>
            <div className="text-center p-6 bg-slate-50 rounded-xl">
              <h3 className="font-bold text-slate-900 mb-2">監査可能性</h3>
              <p className="text-slate-600 text-sm">透明性のある意思決定プロセス</p>
            </div>
            <div className="text-center p-6 bg-slate-50 rounded-xl">
              <h3 className="font-bold text-slate-900 mb-2">長期運用性</h3>
              <p className="text-slate-600 text-sm">持続可能なシステム設計</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 bg-slate-900">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <h2 className="text-2xl font-bold text-white mb-4">お問い合わせ</h2>
          <p className="text-slate-300 mb-8">
            サービスについてご質問がございましたら、お気軽にお問い合わせください。
          </p>
          <a
            href="/contact"
            className="inline-block px-8 py-4 bg-blue-600 text-white font-semibold rounded-lg hover:bg-blue-700 transition-colors"
          >
            お問い合わせ
          </a>
        </div>
      </section>

      <Footer lang="ja" />
    </main>
  );
}
