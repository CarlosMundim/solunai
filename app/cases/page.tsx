'use client';

import React from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import Image from 'next/image';

interface CaseStudy {
  id: string;
  title: string;
  company: string;
  industry: string;
  challenge: string;
  solution: string;
  results: string[];
  image: string;
}

export default function CasesPageJA() {
  const caseStudies: CaseStudy[] = [
    {
      id: 'manufacturing-a',
      title: 'ベテラン技術者の知見を次世代へ継承',
      company: '製造業A社',
      industry: '製造業',
      challenge: '熟練技術者の退職が相次ぎ、30年以上蓄積された暗黙知の喪失が懸念されていました。',
      solution: 'Solunaiのナレッジ継承AIを導入し、ベテラン社員の知見を体系化・可視化。新人育成プログラムと連携させました。',
      results: [
        '技術継承期間を50%短縮',
        '新人の独り立ちまでの期間を3ヶ月短縮',
        '品質トラブル件数が30%減少'
      ],
      image: '/images/case-manufacturing.jpg'
    },
    {
      id: 'service-b',
      title: '現場の声から経営改善のヒントを発見',
      company: 'サービス業B社',
      industry: 'サービス業',
      challenge: '全国50店舗からの日報が経営層に届かず、現場の問題発見が遅れていました。',
      solution: '日報・会議メモをAIで分析し、重要なシグナルを自動抽出。経営ダッシュボードで可視化しました。',
      results: [
        '問題の早期発見率が80%向上',
        '店舗間のベストプラクティス共有が活性化',
        '従業員満足度スコアが15ポイント改善'
      ],
      image: '/images/case-service.jpg'
    },
    {
      id: 'it-c',
      title: '社内問い合わせ対応の自動化で業務効率化',
      company: 'IT企業C社',
      industry: 'IT・テクノロジー',
      challenge: 'バックオフィス部門が同じ質問への回答に追われ、本来の業務に集中できませんでした。',
      solution: '社内FAQボットを構築し、よくある質問への自動回答を実現。複雑な問い合わせのみ担当者へエスカレーション。',
      results: [
        '問い合わせ対応時間を70%削減',
        'バックオフィス残業時間が月平均20時間減少',
        '従業員の自己解決率が60%向上'
      ],
      image: '/images/case-it.jpg'
    }
  ];

  return (
    <main className="min-h-screen bg-white">
      <Header lang="ja" />

      {/* Hero Section */}
      <section className="pt-32 pb-16 bg-gradient-to-b from-slate-50 to-white">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <h1 className="text-4xl md:text-5xl font-bold text-slate-900 mb-4">
            事例・インタビュー
          </h1>
          <p className="text-xl text-slate-600">
            Solunaiを導入いただいたお客様の成功事例をご紹介します
          </p>
        </div>
      </section>

      {/* Case Studies */}
      <section className="py-16">
        <div className="max-w-5xl mx-auto px-6">
          <div className="space-y-16">
            {caseStudies.map((caseStudy, index) => (
              <div
                key={caseStudy.id}
                className={`grid md:grid-cols-2 gap-8 items-center ${
                  index % 2 === 1 ? 'md:flex-row-reverse' : ''
                }`}
              >
                <div className={index % 2 === 1 ? 'md:order-2' : ''}>
                  <div className="bg-slate-100 rounded-2xl aspect-video flex items-center justify-center">
                    <div className="text-center text-slate-400">
                      <svg className="w-16 h-16 mx-auto mb-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
                      </svg>
                      <p className="text-sm">{caseStudy.industry}</p>
                    </div>
                  </div>
                </div>
                <div className={index % 2 === 1 ? 'md:order-1' : ''}>
                  <span className="inline-block px-3 py-1 bg-blue-100 text-blue-700 text-sm font-medium rounded-full mb-4">
                    {caseStudy.industry}
                  </span>
                  <h2 className="text-2xl font-bold text-slate-900 mb-2">
                    {caseStudy.title}
                  </h2>
                  <p className="text-slate-500 mb-4">{caseStudy.company}</p>

                  <div className="space-y-4 mb-6">
                    <div>
                      <h3 className="font-semibold text-slate-900 mb-1">課題</h3>
                      <p className="text-slate-600">{caseStudy.challenge}</p>
                    </div>
                    <div>
                      <h3 className="font-semibold text-slate-900 mb-1">ソリューション</h3>
                      <p className="text-slate-600">{caseStudy.solution}</p>
                    </div>
                    <div>
                      <h3 className="font-semibold text-slate-900 mb-2">成果</h3>
                      <ul className="space-y-1">
                        {caseStudy.results.map((result, idx) => (
                          <li key={idx} className="flex items-start gap-2 text-slate-600">
                            <svg className="w-5 h-5 text-green-500 flex-shrink-0 mt-0.5" fill="currentColor" viewBox="0 0 20 20">
                              <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                            </svg>
                            {result}
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonial */}
      <section className="py-16 bg-slate-50">
        <div className="max-w-4xl mx-auto px-6">
          <h2 className="text-2xl font-bold text-slate-900 mb-8 text-center">お客様の声</h2>
          <div className="grid md:grid-cols-2 gap-6">
            <div className="bg-white p-6 rounded-xl shadow-sm">
              <p className="text-slate-600 mb-4 italic">
                「導入前は半信半疑でしたが、実際に使ってみると現場からの評価が非常に高く、今では欠かせないツールになっています。」
              </p>
              <p className="text-sm text-slate-500">— 製造業 経営企画部長</p>
            </div>
            <div className="bg-white p-6 rounded-xl shadow-sm">
              <p className="text-slate-600 mb-4 italic">
                「ITに詳しくないスタッフでも簡単に使えるのが良いですね。導入サポートも手厚くて助かりました。」
              </p>
              <p className="text-sm text-slate-500">— サービス業 人事部マネージャー</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 bg-slate-900">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <h2 className="text-2xl font-bold text-white mb-4">
            貴社の課題もSolunaiで解決できるかもしれません
          </h2>
          <p className="text-slate-300 mb-8">
            まずは無料相談で、お話をお聞かせください。
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
