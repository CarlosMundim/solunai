'use client';

import React from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import Link from 'next/link';
import '@/components/KodaProduct.css';

export default function MedCommPage() {
  const features = [
    {
      title: 'バーチャル患者',
      description: 'さまざまな背景を持つ患者さんとの対話を、何度でも練習できます。失敗しても大丈夫。安心して学べる環境です。'
    },
    {
      title: 'ベテラン医師の知恵を継承',
      description: '経験豊富な指導医の教え方をAIが学習。「あの先生に教わりたかった」を、いつでも実現します。'
    },
    {
      title: '振り返りのサポート',
      description: '練習後に、どこが良かったか、どこを伸ばせるかを一緒に確認。自分では気づきにくい点も見つかります。'
    },
    {
      title: '日本の医療現場に合わせて',
      description: '敬語の使い方、ご家族への説明、高齢患者さんとの接し方など、日本ならではの場面を想定しています。'
    },
    {
      title: 'いつでも、どこでも',
      description: '夜勤明けでも、休日でも、自分のペースで練習できます。「忙しくて練習時間が取れない」という悩みに応えます。'
    },
    {
      title: '成長の見える化',
      description: '練習を重ねるごとに、自分の成長が目に見えてわかる。モチベーションを保ちながら学び続けられます。'
    }
  ];

  const scenarios = [
    '初診時の問診',
    '悪い知らせの伝え方',
    '治療方針の相談',
    'ご家族への説明',
    '高齢患者さんとの対話',
    'インフォームドコンセント',
    'ご意見・ご要望への対応',
    '文化的背景の異なる患者さん'
  ];

  return (
    <main className="koda-theme-medical">
      <Header lang="ja" />

      {/* Hero Section */}
      <section
        className="koda-hero koda-theme-medical"
        style={{
          backgroundImage: 'linear-gradient(rgba(0, 119, 182, 0.85), rgba(0, 90, 140, 0.9)), url(/images/products/hero-medcomm.jpg)',
          backgroundSize: 'cover',
          backgroundPosition: 'center'
        }}
      >
        <div className="koda-hero-container">
          <span className="koda-badge">KODA MEDCOMM</span>
          <h1>医療コミュニケーションを、<br />もっと安心して学べる場所へ。</h1>
          <p className="koda-hero-subtitle">AI仮想患者との対話練習システム</p>
          <p className="koda-hero-description">
            患者さんとの対話は、教科書だけでは身につきません。<br />
            でも、実際の患者さんで練習するのは難しい。<br />
            KODA MedCommは、何度でも安心して練習できる環境を提供します。
          </p>
          <div className="koda-hero-buttons">
            <Link href="/contact" className="koda-btn-primary">詳しい資料を見る</Link>
            <Link href="/contact" className="koda-btn-secondary">デモをリクエスト</Link>
          </div>
        </div>
      </section>

      {/* Problem Statement - Human-centered */}
      <section className="koda-problems">
        <div className="koda-problems-container">
          <h2 className="koda-section-title">医療教育の現場で聞こえる声</h2>
          <div className="koda-problems-grid">
            <div className="koda-problem-card">
              <h3>「練習の機会が少ない」</h3>
              <p>模擬患者さんとの練習は限られた回数だけ。もっと練習したいけれど、機会がない。</p>
            </div>
            <div className="koda-problem-card">
              <h3>「失敗が怖い」</h3>
              <p>実際の患者さんの前では緊張してしまう。安心して失敗できる場所で練習したい。</p>
            </div>
            <div className="koda-problem-card">
              <h3>「フィードバックがほしい」</h3>
              <p>自分のコミュニケーションの何が良くて、何を改善すべきか、客観的に知りたい。</p>
            </div>
          </div>
        </div>
      </section>

      {/* Solution Approach - Japanese style */}
      <section className="koda-benefits">
        <div className="koda-benefits-container">
          <h2 className="koda-section-title">KODA MedCommができること</h2>
          <div className="koda-benefits-grid">
            <div className="koda-benefit-card">
              <div className="koda-benefit-metric">
                <svg width="48" height="48" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <circle cx="24" cy="24" r="20" stroke="#0077b6" strokeWidth="2" fill="none"/>
                  <path d="M24 14v10l7 7" stroke="#0077b6" strokeWidth="2" strokeLinecap="round"/>
                </svg>
              </div>
              <p className="koda-benefit-label">いつでも練習可能</p>
            </div>
            <div className="koda-benefit-card">
              <div className="koda-benefit-metric">
                <svg width="48" height="48" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M24 8c-8.8 0-16 7.2-16 16s7.2 16 16 16 16-7.2 16-16-7.2-16-16-16z" stroke="#0077b6" strokeWidth="2" fill="none"/>
                  <path d="M18 24l4 4 8-8" stroke="#0077b6" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </div>
              <p className="koda-benefit-label">安心して失敗できる</p>
            </div>
            <div className="koda-benefit-card">
              <div className="koda-benefit-metric">
                <svg width="48" height="48" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M12 36V20l12-8 12 8v16" stroke="#0077b6" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round"/>
                  <path d="M20 36v-8h8v8" stroke="#0077b6" strokeWidth="2" fill="none"/>
                </svg>
              </div>
              <p className="koda-benefit-label">日本の医療文化に対応</p>
            </div>
            <div className="koda-benefit-card">
              <div className="koda-benefit-metric">
                <svg width="48" height="48" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M24 12v24M12 24h24" stroke="#0077b6" strokeWidth="2" strokeLinecap="round"/>
                  <circle cx="24" cy="24" r="16" stroke="#0077b6" strokeWidth="2" fill="none"/>
                </svg>
              </div>
              <p className="koda-benefit-label">すぐにフィードバック</p>
            </div>
          </div>
        </div>
      </section>

      {/* Features */}
      <section className="koda-features">
        <div className="koda-features-container">
          <h2 className="koda-section-title">特徴</h2>
          <div className="koda-features-grid">
            {features.map((feature, idx) => (
              <div key={idx} className="koda-feature-card">
                <h3>{feature.title}</h3>
                <p>{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Scenarios */}
      <section className="koda-scenarios">
        <div className="koda-scenarios-container">
          <h2 className="koda-section-title">練習できるシナリオ（例）</h2>
          <div className="koda-scenarios-grid">
            {scenarios.map((scenario, idx) => (
              <div key={idx} className="koda-scenario-tag">{scenario}</div>
            ))}
          </div>
          <p className="koda-scenarios-note">※ 貴学・貴院のニーズに合わせたカスタムシナリオも作成可能です</p>
        </div>
      </section>

      {/* Academic Partnership */}
      <section className="koda-partnership">
        <div className="koda-partnership-container">
          <h2>学術パートナーシップ</h2>
          <div className="koda-quote-box">
            <p className="koda-quote-text">
              「KODA MedCommは、医療コミュニケーション教育に新しい可能性を開きます。
              AIと人間、それぞれの強みを活かしたこのアプローチは、
              次世代の医療者育成に貢献できると期待しています。」
            </p>
            <p className="koda-quote-author">
              Professor Jeanette Littlemore
            </p>
            <p className="koda-quote-author-title">
              University of Birmingham｜医療コミュニケーション・メタファー研究
            </p>
          </div>
        </div>
      </section>

      {/* Contact Section - No prices */}
      <section className="koda-pricing">
        <div className="koda-pricing-container">
          <h2 className="koda-section-title">導入をご検討の方へ</h2>
          <div style={{ maxWidth: '600px', margin: '0 auto', textAlign: 'center' }}>
            <p style={{ fontSize: '16px', lineHeight: '1.9', color: '#525252', marginBottom: '32px' }}>
              KODA MedCommは、医学部・看護学部・病院研修など、<br />
              さまざまな教育現場でご活用いただけます。<br /><br />
              貴学・貴院の状況やニーズをお聞かせください。<br />
              最適なプランをご提案いたします。
            </p>
            <Link
              href="/contact"
              className="koda-btn-primary"
              style={{ display: 'inline-block', background: '#0077b6', color: 'white', padding: '18px 48px', borderRadius: '8px', textDecoration: 'none', fontSize: '16px', fontWeight: '600' }}
            >
              お問い合わせ・資料請求
            </Link>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="koda-cta">
        <div className="koda-cta-container">
          <h2>まずは、お話を聞かせてください</h2>
          <p>デモンストレーションや詳しい資料のご要望など、お気軽にご連絡ください。</p>
          <div className="koda-cta-buttons">
            <Link href="/contact" className="koda-cta-btn-primary">お問い合わせ</Link>
            <Link href="/products" className="koda-cta-btn-secondary">他の製品を見る</Link>
          </div>
        </div>
      </section>

      <Footer lang="ja" />
    </main>
  );
}
