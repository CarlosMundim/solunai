'use client';

import React from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';

export default function AboutPageJA() {
  const content = {
    title: '企業概要',
    subtitle: 'About Solunai Systems',

    whoWeAre: {
      title: '企業概要',
      text: 'ソルナイ株式会社は、日本を拠点とする応用AIエンジニアリング企業です。高度なエージェント技術、セマンティック・コンピューティング、倫理性の高いAI基盤を設計・運用し、精度・信頼性・長期安定性を求める組織を支援します。事業領域は、カルチュラル・インテリジェンス、ワークフォース分析、エージェント技術、産業向けオーケストレーション基盤など多岐にわたり、既存の企業システムに無理なく統合できる設計を徹底しています。'
    },

    philosophy: {
      title: '理念',
      text: 'AIは人を置き換えるものではなく、人の能力を高める存在であるべきです。ソルナイは、推論能力・安全性・文化理解を統合したシステムを開発し、国境や言語、専門領域を超えた協働を実現します。',
      principles: [
        { title: '明確性', description: '予測可能で監査可能なシステム設計' },
        { title: '倫理性', description: '透明性・ガバナンス・責任ある運用' },
        { title: '人間調和', description: '文化的・社会的背景を尊重した技術構築' }
      ]
    },

    business: {
      title: '事業内容',
      items: [
        { title: 'セマンティック・コンピューティング・エンジン', description: 'エージェンティック・インテリジェンスと連続推論を支える基盤技術' },
        { title: 'カルチュラル・インテリジェンス', description: '国際人材支援、文化適応分析、ワークフォース・モビリティ' },
        { title: 'エンタープライズ向けAIエージェント', description: '業務自動化、ナレッジ管理、顧客対応エージェント' },
        { title: '産業・エンジニアリングAI', description: 'デジタルツイン、ワークフロー自動化、分析基盤' }
      ]
    },

    approach: {
      title: '提供価値',
      text: 'ソルナイは、お客様の業務課題、業界標準、組織文化を深く理解し、長期にわたり運用可能なアーキテクチャへと落とし込みます。',
      methods: [
        '課題の本質分析',
        '決定論的デザイン',
        '継続的な評価',
        '段階的な統合'
      ]
    },

    vision: {
      title: 'ビジョン',
      text: '明確に思考し、責任を持って行動し、人間の力を強化するAIを実現すること。ソルナイの技術は、グローバル協働、安全な自動化、文化を越えた理解を支えるために存在しています。'
    },

    cta: {
      title: 'お問い合わせ',
      text: 'ソルナイのサービスについてご質問がございましたら、お気軽にお問い合わせください。',
      button: 'お問い合わせ'
    }
  };

  return (
    <main className="min-h-screen bg-white">
      <Header lang="ja" />

      {/* Hero Section */}
      <section className="pt-32 pb-16 bg-gradient-to-b from-slate-50 to-white">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <h1 className="text-4xl md:text-5xl font-bold text-slate-900 mb-4">
            {content.title}
          </h1>
          <p className="text-xl text-slate-600">{content.subtitle}</p>
        </div>
      </section>

      {/* Who We Are */}
      <section className="py-16">
        <div className="max-w-4xl mx-auto px-6">
          <h2 className="text-2xl font-bold text-slate-900 mb-6">{content.whoWeAre.title}</h2>
          <p className="text-lg text-slate-700 leading-relaxed">{content.whoWeAre.text}</p>
        </div>
      </section>

      {/* Philosophy */}
      <section className="py-16 bg-slate-50">
        <div className="max-w-4xl mx-auto px-6">
          <h2 className="text-2xl font-bold text-slate-900 mb-6">{content.philosophy.title}</h2>
          <p className="text-lg text-slate-700 leading-relaxed mb-8">{content.philosophy.text}</p>
          <div className="grid md:grid-cols-3 gap-6">
            {content.philosophy.principles.map((principle, index) => (
              <div key={index} className="bg-white p-6 rounded-xl shadow-sm">
                <h3 className="text-lg font-bold text-slate-900 mb-2">{principle.title}</h3>
                <p className="text-slate-600">{principle.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Business Areas */}
      <section className="py-16">
        <div className="max-w-4xl mx-auto px-6">
          <h2 className="text-2xl font-bold text-slate-900 mb-8">{content.business.title}</h2>
          <div className="space-y-6">
            {content.business.items.map((item, index) => (
              <div key={index} className="border-l-4 border-blue-600 pl-6 py-2">
                <h3 className="text-lg font-bold text-slate-900 mb-1">{item.title}</h3>
                <p className="text-slate-600">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Approach */}
      <section className="py-16 bg-slate-50">
        <div className="max-w-4xl mx-auto px-6">
          <h2 className="text-2xl font-bold text-slate-900 mb-6">{content.approach.title}</h2>
          <p className="text-lg text-slate-700 leading-relaxed mb-8">{content.approach.text}</p>
          <ul className="grid md:grid-cols-2 gap-4">
            {content.approach.methods.map((method, index) => (
              <li key={index} className="flex items-center gap-3 text-slate-700">
                <span className="w-2 h-2 bg-blue-600 rounded-full"></span>
                {method}
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* Vision */}
      <section className="py-16">
        <div className="max-w-4xl mx-auto px-6">
          <h2 className="text-2xl font-bold text-slate-900 mb-6">{content.vision.title}</h2>
          <p className="text-lg text-slate-700 leading-relaxed">{content.vision.text}</p>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 bg-slate-900">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <h2 className="text-2xl font-bold text-white mb-4">{content.cta.title}</h2>
          <p className="text-slate-300 mb-8">{content.cta.text}</p>
          <a
            href="/contact"
            className="inline-block px-8 py-4 bg-blue-600 text-white font-semibold rounded-lg hover:bg-blue-700 transition-colors"
          >
            {content.cta.button}
          </a>
        </div>
      </section>

      <Footer lang="ja" />
    </main>
  );
}
