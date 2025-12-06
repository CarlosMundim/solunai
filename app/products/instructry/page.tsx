'use client';

import React from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import Link from 'next/link';
import '@/components/KodaProduct.css';

export default function InstructryPage() {
  const features = [
    {
      title: 'ベテランの技を記録',
      description: '言葉にしにくい「コツ」や「勘所」を、動画や音声から整理・記録します。退職前に、大切な知識を残せます。'
    },
    {
      title: '分かりやすい手順書に',
      description: '記録した知識から、写真付きの作業手順書を作成。新人でも分かりやすい形で、技術を伝えられます。'
    },
    {
      title: 'トラブル対応の知恵袋',
      description: '「この症状のとき、どうする？」過去の対応事例から、解決のヒントを素早く見つけられます。'
    },
    {
      title: '若手への技術伝承',
      description: 'ベテランが現場にいなくても、蓄積された知識にアクセスできる。技術の継承を、確実に進められます。'
    },
    {
      title: '必要なときに必要な情報を',
      description: '「あの部品が外れないとき」のような自然な言葉で検索。現場で困ったとき、すぐに答えが見つかります。'
    },
    {
      title: '現場で使いやすく',
      description: 'タブレットやスマホで、現場から直接アクセス。手が汚れていても、音声で操作できます。'
    }
  ];

  const industries = [
    { title: '製造業', description: '設備保全・組立・加工技術' },
    { title: '建設業', description: '施工技術・安全管理' },
    { title: 'インフラ', description: '点検・メンテナンス' },
    { title: '医療・福祉', description: '機器操作・介護技術' }
  ];

  return (
    <main>
      <Header lang="ja" />

      {/* Hero Section */}
      <section
        className="koda-hero"
        style={{
          backgroundImage: 'linear-gradient(rgba(0, 0, 0, 0.55), rgba(0, 0, 0, 0.45)), url(/images/products/hero-instructry.jpg)',
          backgroundSize: 'cover',
          backgroundPosition: 'center'
        }}
      >
        <div className="koda-hero-container">
          <span className="koda-badge">KODA INSTRUCTRY</span>
          <h1>「退職前に技術を残したい」<br />その願いに応えます。</h1>
          <p className="koda-hero-subtitle">製造業・技術継承支援</p>
          <p className="koda-hero-description">
            長年培ってきた技術やノウハウ。<br />
            ベテランの退職とともに失われてしまう前に、<br />
            KODA Instructryが、次世代への継承をお手伝いします。
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
              <h3>「あの人しか知らない」</h3>
              <p>ベテランの頭の中にある知識。マニュアルには書かれていない。その人がいなくなったら、どうしよう。</p>
            </div>
            <div className="koda-problem-card">
              <h3>「教える時間がない」</h3>
              <p>日々の業務で手一杯。若手に丁寧に教える余裕がない。でも、このままでは技術が途絶えてしまう。</p>
            </div>
            <div className="koda-problem-card">
              <h3>「言葉にしにくい」</h3>
              <p>「体で覚えた」技術をどう伝えればいい？長年の経験から身についた「勘」は、説明が難しい。</p>
            </div>
          </div>
        </div>
      </section>

      {/* Features */}
      <section className="koda-features">
        <div className="koda-features-container">
          <h2 className="koda-section-title">KODA Instructryができること</h2>
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

      {/* Industries */}
      <section className="koda-benefits">
        <div className="koda-benefits-container">
          <h2 className="koda-section-title">こんな業界でご活用いただいています</h2>
          <div className="koda-benefits-grid">
            {industries.map((industry, idx) => (
              <div key={idx} className="koda-benefit-card">
                <p className="koda-benefit-label" style={{fontWeight: '600', marginBottom: '8px', color: '#1e3a5f'}}>{industry.title}</p>
                <p style={{fontSize: '13px', color: '#525252'}}>{industry.description}</p>
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
              KODA Instructryは、記録する技術の範囲や規模に合わせて、<br />
              柔軟にプランをご提案いたします。<br /><br />
              技術継承に関するお悩みをお聞かせください。<br />
              まずは一部の工程から試すこともできます。
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
