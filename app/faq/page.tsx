'use client';

import React, { useState } from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';

interface FAQItem {
  question: string;
  answer: string;
  category: string;
}

export default function FAQPageJA() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);
  const [activeCategory, setActiveCategory] = useState<string>('all');

  const categories = [
    { id: 'all', label: 'すべて' },
    { id: 'service', label: 'サービスについて' },
    { id: 'price', label: '料金・契約' },
    { id: 'support', label: 'サポート' },
    { id: 'technical', label: '技術的なこと' }
  ];

  const faqs: FAQItem[] = [
    {
      category: 'service',
      question: 'Solunaiのサービスはどのような企業に適していますか？',
      answer: '中小企業から大企業まで、業種を問わず幅広い企業様にご利用いただけます。特に、人材の知見の継承、業務効率化、現場の声の可視化といった課題をお持ちの企業様に最適です。'
    },
    {
      category: 'service',
      question: '導入までにどのくらいの期間がかかりますか？',
      answer: 'お客様の規模や要件によって異なりますが、通常は初回相談から2〜4週間程度で基本的な導入が可能です。まずは無料相談で詳細をお聞かせください。'
    },
    {
      category: 'service',
      question: 'どのような業種に対応していますか？',
      answer: '製造業、サービス業、IT業界、医療・福祉など、幅広い業種に対応しています。業界特有の課題に合わせたカスタマイズも可能です。'
    },
    {
      category: 'price',
      question: '料金体系を教えてください。',
      answer: 'お客様の規模や利用内容によって最適なプランをご提案しています。まずは無料相談にて、お客様の課題とニーズをお聞かせください。'
    },
    {
      category: 'price',
      question: '初期費用はかかりますか？',
      answer: 'プランによって異なります。小さく始めて効果を確認しながら拡大できるプランもご用意していますので、お気軽にご相談ください。'
    },
    {
      category: 'price',
      question: '契約期間の縛りはありますか？',
      answer: '基本的には月額契約となっており、柔軟に対応可能です。年間契約の場合は割引もございます。'
    },
    {
      category: 'support',
      question: 'サポート体制はどうなっていますか？',
      answer: '専任の担当者がつき、導入から運用まで一貫してサポートいたします。平日9:00-18:00での電話・メールサポートに加え、定期的なフォローアップミーティングも実施しています。'
    },
    {
      category: 'support',
      question: '社員向けのトレーニングはありますか？',
      answer: 'はい、導入時にオンラインまたは対面でのトレーニングセッションを提供しています。また、操作マニュアルや動画チュートリアルもご用意しています。'
    },
    {
      category: 'technical',
      question: '既存システムとの連携は可能ですか？',
      answer: '多くの主要なビジネスツールやシステムとの連携が可能です。API連携やデータインポート機能を通じて、既存のワークフローを維持しながら導入できます。'
    },
    {
      category: 'technical',
      question: 'データのセキュリティは大丈夫ですか？',
      answer: 'はい、お客様のデータは暗号化され、厳重に管理されています。ISO27001に準拠したセキュリティ体制を整えており、定期的な監査も実施しています。'
    },
    {
      category: 'technical',
      question: 'ITに詳しくなくても使えますか？',
      answer: 'はい、専門知識がなくても直感的に操作できる設計になっています。導入時のサポートや充実したヘルプ機能で、安心してご利用いただけます。'
    }
  ];

  const filteredFaqs = activeCategory === 'all'
    ? faqs
    : faqs.filter(faq => faq.category === activeCategory);

  return (
    <main className="min-h-screen bg-white">
      <Header lang="ja" />

      {/* Hero Section */}
      <section className="pt-32 pb-16 bg-gradient-to-b from-slate-50 to-white">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <h1 className="text-4xl md:text-5xl font-bold text-slate-900 mb-4">
            よくあるご質問
          </h1>
          <p className="text-xl text-slate-600">
            お客様からよくいただくご質問をまとめました
          </p>
        </div>
      </section>

      {/* Category Filter */}
      <section className="py-8 border-b">
        <div className="max-w-4xl mx-auto px-6">
          <div className="flex flex-wrap gap-2 justify-center">
            {categories.map(category => (
              <button
                key={category.id}
                onClick={() => setActiveCategory(category.id)}
                className={`px-4 py-2 rounded-full text-sm font-medium transition-colors ${
                  activeCategory === category.id
                    ? 'bg-blue-600 text-white'
                    : 'bg-slate-100 text-slate-700 hover:bg-slate-200'
                }`}
              >
                {category.label}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ List */}
      <section className="py-16">
        <div className="max-w-4xl mx-auto px-6">
          <div className="space-y-4">
            {filteredFaqs.map((faq, index) => (
              <div
                key={index}
                className="border border-slate-200 rounded-lg overflow-hidden"
              >
                <button
                  onClick={() => setOpenIndex(openIndex === index ? null : index)}
                  className="w-full px-6 py-4 text-left flex justify-between items-center hover:bg-slate-50 transition-colors"
                >
                  <span className="font-medium text-slate-900 pr-4">{faq.question}</span>
                  <svg
                    className={`w-5 h-5 text-slate-500 transition-transform ${
                      openIndex === index ? 'rotate-180' : ''
                    }`}
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                  </svg>
                </button>
                {openIndex === index && (
                  <div className="px-6 pb-4 text-slate-600 leading-relaxed">
                    {faq.answer}
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-slate-900">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <h2 className="text-2xl font-bold text-white mb-4">
            ご質問が見つかりませんでしたか？
          </h2>
          <p className="text-slate-300 mb-8">
            お気軽にお問い合わせください。担当者が丁寧にお答えします。
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
