'use client';

import React from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';

export default function CompanyPageJA() {
  const companyInfo = {
    name: 'ソルナイ合同会社',
    nameEn: 'Solunai Systems G.K.',
    established: '2024年',
    capital: '非公開',
    ceo: '代表社員',
    employees: '非公開',
    business: [
      'AIソリューションの企画・開発・導入支援',
      'セマンティック・コンピューティング技術の研究開発',
      'カルチュラル・インテリジェンスサービスの提供',
      '企業向けAIエージェントプラットフォームの提供',
      '人材教育・ナレッジマネジメント支援'
    ],
    headquarters: {
      name: '本社',
      address: '〒222-0033 神奈川県横浜市港北区新横浜2-5-14',
      building: 'WISE NEXT 新横浜 4F',
      phone: '045-285-9480',
      email: 'info@solunai.co.jp'
    },
    tokyo: {
      name: '東京支社',
      address: '〒104-0061 東京都中央区銀座1-22-11',
      building: '銀座大竹ビジデンス 2F'
    }
  };

  const milestones = [
    { year: '2024', event: 'ソルナイ合同会社設立' },
    { year: '2024', event: 'AI業務支援サービスの提供開始' },
    { year: '2025', event: '東京支社開設' }
  ];

  return (
    <main className="min-h-screen bg-white">
      <Header lang="ja" />

      {/* Hero Section */}
      <section className="pt-32 pb-16 bg-gradient-to-b from-slate-50 to-white">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <h1 className="text-4xl md:text-5xl font-bold text-slate-900 mb-4">
            会社情報
          </h1>
          <p className="text-xl text-slate-600">
            Solunai Systems について
          </p>
        </div>
      </section>

      {/* Company Overview */}
      <section className="py-16">
        <div className="max-w-4xl mx-auto px-6">
          <h2 className="text-2xl font-bold text-slate-900 mb-8">会社概要</h2>
          <div className="bg-slate-50 rounded-xl overflow-hidden">
            <table className="w-full">
              <tbody>
                <tr className="border-b border-slate-200">
                  <th className="px-6 py-4 text-left text-slate-600 font-medium bg-slate-100 w-1/3">会社名</th>
                  <td className="px-6 py-4 text-slate-900">
                    {companyInfo.name}<br />
                    <span className="text-sm text-slate-500">{companyInfo.nameEn}</span>
                  </td>
                </tr>
                <tr className="border-b border-slate-200">
                  <th className="px-6 py-4 text-left text-slate-600 font-medium bg-slate-100">設立</th>
                  <td className="px-6 py-4 text-slate-900">{companyInfo.established}</td>
                </tr>
                <tr className="border-b border-slate-200">
                  <th className="px-6 py-4 text-left text-slate-600 font-medium bg-slate-100">事業内容</th>
                  <td className="px-6 py-4 text-slate-900">
                    <ul className="list-disc list-inside space-y-1">
                      {companyInfo.business.map((item, index) => (
                        <li key={index}>{item}</li>
                      ))}
                    </ul>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* Offices */}
      <section className="py-16 bg-slate-50">
        <div className="max-w-4xl mx-auto px-6">
          <h2 className="text-2xl font-bold text-slate-900 mb-8">オフィス</h2>
          <div className="grid md:grid-cols-2 gap-6">
            {/* Headquarters */}
            <div className="bg-white p-6 rounded-xl shadow-sm">
              <h3 className="text-lg font-bold text-slate-900 mb-4 flex items-center gap-2">
                <svg className="w-5 h-5 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
                </svg>
                {companyInfo.headquarters.name}
              </h3>
              <div className="space-y-2 text-slate-600">
                <p>{companyInfo.headquarters.address}</p>
                <p>{companyInfo.headquarters.building}</p>
                <p className="pt-2">
                  <span className="font-medium">TEL:</span> {companyInfo.headquarters.phone}
                </p>
                <p>
                  <span className="font-medium">Email:</span> {companyInfo.headquarters.email}
                </p>
              </div>
            </div>

            {/* Tokyo Office */}
            <div className="bg-white p-6 rounded-xl shadow-sm">
              <h3 className="text-lg font-bold text-slate-900 mb-4 flex items-center gap-2">
                <svg className="w-5 h-5 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
                </svg>
                {companyInfo.tokyo.name}
              </h3>
              <div className="space-y-2 text-slate-600">
                <p>{companyInfo.tokyo.address}</p>
                <p>{companyInfo.tokyo.building}</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* History */}
      <section className="py-16">
        <div className="max-w-4xl mx-auto px-6">
          <h2 className="text-2xl font-bold text-slate-900 mb-8">沿革</h2>
          <div className="relative">
            <div className="absolute left-4 top-0 bottom-0 w-0.5 bg-slate-200"></div>
            <div className="space-y-6">
              {milestones.map((milestone, index) => (
                <div key={index} className="flex gap-6 relative">
                  <div className="w-8 h-8 bg-blue-600 rounded-full flex items-center justify-center flex-shrink-0 z-10">
                    <div className="w-3 h-3 bg-white rounded-full"></div>
                  </div>
                  <div className="pb-6">
                    <p className="text-sm text-blue-600 font-medium">{milestone.year}</p>
                    <p className="text-slate-900">{milestone.event}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Mission */}
      <section className="py-16 bg-slate-900">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <h2 className="text-2xl font-bold text-white mb-6">ミッション</h2>
          <p className="text-xl text-slate-300 leading-relaxed">
            人を見る、仕事が変わる。<br />
            AIと人が協働する未来を、一緒につくりましょう。
          </p>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <h2 className="text-2xl font-bold text-slate-900 mb-4">
            お問い合わせ
          </h2>
          <p className="text-slate-600 mb-8">
            サービスについてのご質問、導入のご相談など、お気軽にお問い合わせください。
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
