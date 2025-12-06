'use client';

import React from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import Link from 'next/link';
import '@/components/KodaProduct.css';

export default function DocIntelPage() {
  const features = [
    {
      title: '文書の「意味」を理解',
      description: '単なる文字認識ではありません。日本語文書の文脈や構造を理解し、必要な情報を的確に抽出します。'
    },
    {
      title: '多様な文書形式に対応',
      description: '請求書、契約書、申請書、技術文書。フォーマットが異なっても、柔軟に対応します。'
    },
    {
      title: '業務フローとの連携',
      description: '文書の分類、振り分け、承認フローなど、既存の業務システムとつなげることができます。'
    },
    {
      title: '必要な情報をすぐに',
      description: '「昨年の契約更新に関する書類」のような自然な言葉で検索。膨大な文書の中から必要な情報を見つけます。'
    },
    {
      title: '安心のセキュリティ',
      description: '国内データセンターでの運用、アクセスログの管理など、企業の情報管理ポリシーに沿った運用が可能です。'
    },
    {
      title: '日本の文書形式に最適化',
      description: '縦書き、元号表記、印鑑など、日本語文書特有の形式を正確に処理します。'
    }
  ];

  const useCases = [
    { title: '経理・財務', description: '請求書や領収書の処理を効率化' },
    { title: '法務・契約', description: '契約書の管理・検索をスムーズに' },
    { title: '人事・総務', description: '各種申請書類の処理を省力化' },
    { title: '製造・品質', description: '技術文書・仕様書の活用促進' }
  ];

  return (
    <main>
      <Header lang="ja" />

      {/* Hero Section */}
      <section
        className="koda-hero"
        style={{
          backgroundImage: 'linear-gradient(rgba(0, 0, 0, 0.55), rgba(0, 0, 0, 0.45)), url(/images/products/hero-docintel.jpg)',
          backgroundSize: 'cover',
          backgroundPosition: 'center'
        }}
      >
        <div className="koda-hero-container">
          <span className="koda-badge">KODA DOCINTEL</span>
          <h1>文書処理の負担を、<br />軽くしたい。</h1>
          <p className="koda-hero-subtitle">日本語ビジネス文書の理解と処理</p>
          <p className="koda-hero-description">
            請求書や契約書、毎日届く文書の処理に追われていませんか。<br />
            KODA DocIntelは、日本語文書を「読み」「理解し」、<br />
            必要な情報を取り出すお手伝いをします。
          </p>
          <div className="koda-hero-buttons">
            <Link href="/contact" className="koda-btn-primary">詳しい資料を見る</Link>
            <Link href="/contact" className="koda-btn-secondary">デモをリクエスト</Link>
          </div>
        </div>
      </section>

      {/* Problem Statement */}
      <section className="koda-problems">
        <div className="koda-problems-container">
          <h2 className="koda-section-title">こんなお悩みはありませんか</h2>
          <div className="koda-problems-grid">
            <div className="koda-problem-card">
              <h3>「入力作業に時間がかかる」</h3>
              <p>紙やPDFの情報をシステムに手入力。単調だけど、ミスができない作業に時間を取られている。</p>
            </div>
            <div className="koda-problem-card">
              <h3>「あの書類、どこだっけ」</h3>
              <p>過去の契約書や申請書を探すのに、いつも時間がかかる。必要なときに必要な情報がすぐ出てこない。</p>
            </div>
            <div className="koda-problem-card">
              <h3>「フォーマットがバラバラ」</h3>
              <p>取引先ごとに書式が違う請求書。統一したルールで処理するのが難しい。</p>
            </div>
          </div>
        </div>
      </section>

      {/* Features */}
      <section className="koda-features">
        <div className="koda-features-container">
          <h2 className="koda-section-title">KODA DocIntelができること</h2>
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

      {/* Use Cases */}
      <section className="koda-benefits">
        <div className="koda-benefits-container">
          <h2 className="koda-section-title">活用シーン</h2>
          <div className="koda-benefits-grid">
            {useCases.map((useCase, idx) => (
              <div key={idx} className="koda-benefit-card">
                <div className="koda-benefit-metric">
                  <svg width="48" height="48" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <rect x="8" y="6" width="32" height="36" rx="4" stroke="#1e3a5f" strokeWidth="2" fill="none"/>
                    <path d="M16 18h16M16 26h12M16 34h8" stroke="#1e3a5f" strokeWidth="2" strokeLinecap="round"/>
                  </svg>
                </div>
                <p className="koda-benefit-label" style={{fontWeight: '600', marginBottom: '4px'}}>{useCase.title}</p>
                <p style={{fontSize: '13px', color: '#525252'}}>{useCase.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section - No prices */}
      <section className="koda-pricing">
        <div className="koda-pricing-container">
          <h2 className="koda-section-title">導入をご検討の方へ</h2>
          <div style={{ maxWidth: '600px', margin: '0 auto', textAlign: 'center' }}>
            <p style={{ fontSize: '16px', lineHeight: '1.9', color: '#525252', marginBottom: '32px' }}>
              KODA DocIntelは、処理する文書の種類や量に合わせて、<br />
              柔軟にプランをご提案いたします。<br /><br />
              まずは、貴社の文書処理の現状をお聞かせください。<br />
              サンプル文書でのデモンストレーションも可能です。
            </p>
            <Link
              href="/contact"
              className="koda-btn-primary"
              style={{ display: 'inline-block', background: '#1e3a5f', color: 'white', padding: '18px 48px', borderRadius: '8px', textDecoration: 'none', fontSize: '16px', fontWeight: '600' }}
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
