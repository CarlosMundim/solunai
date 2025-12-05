'use client';

import React from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import AboutHero from '@/components/about/AboutHero';

export default function AboutPageJA() {
  return (
    <main className="min-h-screen bg-neutral-50">
      <Header lang="ja" />

      {/* Hero Section */}
      <AboutHero lang="ja" />

      {/* Mission Section */}
      <section className="bg-white py-16 md:py-20">
        <div className="mx-auto max-w-4xl px-6 md:px-8">
          <div className="mb-8 flex items-center gap-3">
            <div className="h-1 w-12 rounded-full bg-sky-600" />
            <span className="text-sm font-semibold uppercase tracking-wider text-sky-700">
              Our Mission
            </span>
          </div>
          <h2 className="text-2xl font-bold text-neutral-900 md:text-3xl" style={{ lineHeight: '1.4' }}>
            日本の現場を静かに支えること
          </h2>
          <div className="mt-6 space-y-4 text-base leading-relaxed text-neutral-700 md:text-lg" style={{ lineHeight: '1.8' }}>
            <p>
              日本には、独自の仕事文化や伝え方があります。
              「空気を読む」「相手に合わせる」「言葉を選ぶ」——こうした感覚を理解しないAIは、
              現場で使われません。
            </p>
            <p>
              ソルナイは、誤解を減らし、仕事の進め方やコミュニケーションスタイルを尊重しながら、
              無理のない形でAIを日常業務に溶け込ませることを目指しています。
            </p>
          </div>
        </div>
      </section>

      {/* KODA Platform Section */}
      <section className="bg-neutral-50 py-16 md:py-20">
        <div className="mx-auto max-w-4xl px-6 md:px-8">
          <div className="mb-8 flex items-center gap-3">
            <div className="h-1 w-12 rounded-full bg-sky-600" />
            <span className="text-sm font-semibold uppercase tracking-wider text-sky-700">
              Platform
            </span>
          </div>
          <h2 className="text-2xl font-bold text-neutral-900 md:text-3xl" style={{ lineHeight: '1.4' }}>
            KODAプラットフォーム
          </h2>
          <div className="mt-6 space-y-4 text-base leading-relaxed text-neutral-700 md:text-lg" style={{ lineHeight: '1.8' }}>
            <p>
              ソルナイの中心となるAI基盤がKODA（コーダ）です。
              日本語の文脈、日本の職場文化、日常業務の進め方を丁寧に理解するよう調整した
              「静かなAI」として設計されています。
            </p>
            <p>
              医療教育、製造業、研修・教育、文書業務、外国人材との協働など、
              複数の現場で利用されています。
            </p>
          </div>
          <a
            href="/koda"
            className="mt-8 inline-flex items-center gap-2 rounded-lg border-2 border-sky-600 bg-sky-600 px-6 py-3 text-sm font-semibold text-white transition-all hover:bg-sky-700 hover:border-sky-700"
          >
            KODAについて詳しく見る
            <svg className="h-4 w-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </a>
        </div>
      </section>

      {/* Values Section */}
      <section className="bg-white py-16 md:py-20">
        <div className="mx-auto max-w-5xl px-6 md:px-8">
          <div className="mb-8 flex items-center gap-3">
            <div className="h-1 w-12 rounded-full bg-sky-600" />
            <span className="text-sm font-semibold uppercase tracking-wider text-sky-700">
              Our Values
            </span>
          </div>
          <h2 className="text-2xl font-bold text-neutral-900 md:text-3xl" style={{ lineHeight: '1.4' }}>
            私たちが大切にしていること
          </h2>
          <div className="mt-10 grid gap-6 md:grid-cols-3 md:gap-8">
            <div className="rounded-2xl border border-neutral-200 bg-neutral-50 p-6 transition-all hover:border-sky-200 hover:shadow-md md:p-8">
              <div className="mb-4 inline-flex h-12 w-12 items-center justify-center rounded-xl bg-sky-100 text-sky-600">
                <svg className="h-6 w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
                </svg>
              </div>
              <h3 className="mb-3 text-lg font-semibold text-neutral-900" style={{ lineHeight: '1.5' }}>
                現場への敬意
              </h3>
              <p className="text-sm leading-relaxed text-neutral-600 md:text-base" style={{ lineHeight: '1.7' }}>
                現場には、その職場ならではの「やり方」があります。
                AIがそれを壊すのではなく、そっと支える存在であることを大切にしています。
              </p>
            </div>
            <div className="rounded-2xl border border-neutral-200 bg-neutral-50 p-6 transition-all hover:border-sky-200 hover:shadow-md md:p-8">
              <div className="mb-4 inline-flex h-12 w-12 items-center justify-center rounded-xl bg-sky-100 text-sky-600">
                <svg className="h-6 w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" />
                </svg>
              </div>
              <h3 className="mb-3 text-lg font-semibold text-neutral-900" style={{ lineHeight: '1.5' }}>
                無理のない導入
              </h3>
              <p className="text-sm leading-relaxed text-neutral-600 md:text-base" style={{ lineHeight: '1.7' }}>
                一度に大きく変えるのではなく、まずは1つの業務から、小さく始めることを推奨しています。
              </p>
            </div>
            <div className="rounded-2xl border border-neutral-200 bg-neutral-50 p-6 transition-all hover:border-sky-200 hover:shadow-md md:p-8">
              <div className="mb-4 inline-flex h-12 w-12 items-center justify-center rounded-xl bg-sky-100 text-sky-600">
                <svg className="h-6 w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M18.364 5.636l-3.536 3.536m0 5.656l3.536 3.536M9.172 9.172L5.636 5.636m3.536 9.192l-3.536 3.536M21 12a9 9 0 11-18 0 9 9 0 0118 0zm-5 0a4 4 0 11-8 0 4 4 0 018 0z" />
                </svg>
              </div>
              <h3 className="mb-3 text-lg font-semibold text-neutral-900" style={{ lineHeight: '1.5' }}>
                安心できるサポート
              </h3>
              <p className="text-sm leading-relaxed text-neutral-600 md:text-base" style={{ lineHeight: '1.7' }}>
                AIに詳しくない企業様でも安心して相談できるよう、専門用語を極力使わず、
                丁寧にご説明します。
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Partnerships Section */}
      <section className="bg-neutral-50 py-16 md:py-20">
        <div className="mx-auto max-w-4xl px-6 md:px-8">
          <div className="mb-8 flex items-center gap-3">
            <div className="h-1 w-12 rounded-full bg-sky-600" />
            <span className="text-sm font-semibold uppercase tracking-wider text-sky-700">
              Partnerships
            </span>
          </div>
          <h2 className="text-2xl font-bold text-neutral-900 md:text-3xl" style={{ lineHeight: '1.4' }}>
            パートナーシップ
          </h2>
          <div className="mt-8 space-y-6">
            <div className="rounded-xl border border-neutral-200 bg-white p-6 md:p-8">
              <h3 className="mb-2 text-lg font-semibold text-neutral-900">
                WorldEmp（オランダ）
              </h3>
              <p className="text-base leading-relaxed text-neutral-700" style={{ lineHeight: '1.7' }}>
                製造業・エンジニアリング領域で20年以上の実績を持つ技術パートナー。
                AI導入に必要な専門人材を迅速に確保できます。
              </p>
            </div>
            <div className="rounded-xl border border-neutral-200 bg-white p-6 md:p-8">
              <h3 className="mb-2 text-lg font-semibold text-neutral-900">
                国内外の教育・医療機関
              </h3>
              <p className="text-base leading-relaxed text-neutral-700" style={{ lineHeight: '1.7' }}>
                医療コミュニケーションAI「KODA MedComm」は、医療教育現場との共同研究から
                生まれたプロジェクトです。
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Leadership Section */}
      <section className="bg-white py-16 md:py-20">
        <div className="mx-auto max-w-4xl px-6 md:px-8">
          <div className="mb-8 flex items-center gap-3">
            <div className="h-1 w-12 rounded-full bg-sky-600" />
            <span className="text-sm font-semibold uppercase tracking-wider text-sky-700">
              Leadership
            </span>
          </div>
          <h2 className="text-2xl font-bold text-neutral-900 md:text-3xl" style={{ lineHeight: '1.4' }}>
            代表メッセージ
          </h2>
          <div className="mt-8 rounded-2xl border border-neutral-200 bg-neutral-50 p-8 md:p-10">
            <blockquote className="mb-6 text-xl font-medium italic text-neutral-800 md:text-2xl" style={{ lineHeight: '1.5' }}>
              「誰もが安心して使えるAIを、日本からつくりたい。」
            </blockquote>
            <div className="space-y-4 text-base leading-relaxed text-neutral-700" style={{ lineHeight: '1.8' }}>
              <p>
                AIは人を置き換えるものではなく、忙しさや不安を少し減らすための道具だと私たちは考えています。
                ソルナイは派手さよりも、丁寧さと実直さを大切にする会社です。
                日本の働き方を少しでも良くするために、静かに、確実に、支えていきます。
              </p>
            </div>
            <div className="mt-8 flex items-center gap-4 border-t border-neutral-200 pt-6">
              <div>
                <p className="text-lg font-semibold text-neutral-900">カルロス・ムンジン</p>
                <p className="text-sm text-neutral-600">Founder & Chief</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Company Info Section */}
      <section className="bg-neutral-50 py-16 md:py-20">
        <div className="mx-auto max-w-4xl px-6 md:px-8">
          <div className="mb-8 flex items-center gap-3">
            <div className="h-1 w-12 rounded-full bg-sky-600" />
            <span className="text-sm font-semibold uppercase tracking-wider text-sky-700">
              Company
            </span>
          </div>
          <h2 className="text-2xl font-bold text-neutral-900 md:text-3xl" style={{ lineHeight: '1.4' }}>
            会社概要
          </h2>
          <div className="mt-8 overflow-hidden rounded-xl border border-neutral-200 bg-white">
            <table className="w-full text-left">
              <tbody>
                <tr className="border-b border-neutral-100">
                  <th className="w-40 bg-neutral-50 px-6 py-4 text-sm font-semibold text-neutral-700 md:w-48">
                    会社名
                  </th>
                  <td className="px-6 py-4 text-sm text-neutral-800 md:text-base">
                    ソルナイ株式会社（Solunai Co., Ltd.）
                  </td>
                </tr>
                <tr className="border-b border-neutral-100">
                  <th className="bg-neutral-50 px-6 py-4 text-sm font-semibold text-neutral-700">
                    所在地
                  </th>
                  <td className="px-6 py-4 text-sm text-neutral-800 md:text-base">
                    神奈川県横浜市
                  </td>
                </tr>
                <tr className="border-b border-neutral-100">
                  <th className="bg-neutral-50 px-6 py-4 text-sm font-semibold text-neutral-700">
                    代表者
                  </th>
                  <td className="px-6 py-4 text-sm text-neutral-800 md:text-base">
                    <div>
                      <p className="font-medium">カルロス・ムンジン（Founder & Chief）</p>
                      <p className="mt-1 text-neutral-600">古谷 智雄（CEO）</p>
                    </div>
                  </td>
                </tr>
                <tr className="border-b border-neutral-100">
                  <th className="bg-neutral-50 px-6 py-4 text-sm font-semibold text-neutral-700">
                    事業内容
                  </th>
                  <td className="px-6 py-4 text-sm text-neutral-800 md:text-base">
                    AIソリューション開発、KODAプラットフォーム、教育・医療AI、製造業支援
                  </td>
                </tr>
                <tr className="border-b border-neutral-100">
                  <th className="bg-neutral-50 px-6 py-4 text-sm font-semibold text-neutral-700">
                    パートナー
                  </th>
                  <td className="px-6 py-4 text-sm text-neutral-800 md:text-base">
                    WorldEmp B.V.（オランダ）、教育機関、医療機関
                  </td>
                </tr>
                <tr>
                  <th className="bg-neutral-50 px-6 py-4 text-sm font-semibold text-neutral-700">
                    ウェブサイト
                  </th>
                  <td className="px-6 py-4 text-sm text-neutral-800 md:text-base">
                    <a
                      href="https://www.solunai.co.jp/"
                      className="text-sky-700 underline hover:text-sky-800"
                    >
                      https://www.solunai.co.jp/
                    </a>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* Contact CTA Section */}
      <section className="bg-gradient-to-br from-sky-700 to-sky-900 py-16 md:py-20">
        <div className="mx-auto max-w-3xl px-6 text-center md:px-8">
          <h2 className="text-2xl font-bold text-white md:text-3xl" style={{ lineHeight: '1.4' }}>
            お問い合わせ
          </h2>
          <p className="mt-4 text-base leading-relaxed text-sky-100 md:text-lg" style={{ lineHeight: '1.7' }}>
            AI導入、PoC、ご相談など、まずはお気軽にお問い合わせください。
          </p>
          <a
            href="/contact"
            className="mt-8 inline-flex items-center gap-2 rounded-lg bg-white px-8 py-4 text-base font-semibold text-sky-700 transition-all hover:bg-sky-50 hover:shadow-lg"
          >
            お問い合わせフォームへ
            <svg className="h-5 w-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>
          </a>
        </div>
      </section>

      <Footer lang="ja" />
    </main>
  );
}
