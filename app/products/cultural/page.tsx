'use client';

import React from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import Link from 'next/link';
import '@/components/KodaProduct.css';

export default function CulturalPage() {
  const features = [
    {
      title: '日本の職場文化を学ぶ',
      description: '敬語の使い方、報連相、会議の進め方など、日本の職場で大切にされていることを、分かりやすく学べます。'
    },
    {
      title: '場面に応じた対応を練習',
      description: '「こんなとき、どう言えばいい？」実際の職場で起こりそうな場面を想定して、対応を練習できます。'
    },
    {
      title: '日本人スタッフの理解も深める',
      description: '外国人材を受け入れる日本人スタッフ向けのコンテンツも。お互いの理解を深め、働きやすい職場づくりに。'
    },
    {
      title: '自分のペースで学習',
      description: '忙しい業務の合間でも、少しずつ学び続けられます。分からないことはAIに何度でも質問できます。'
    },
    {
      title: '成長の可視化',
      description: '学習の進捗や理解度が目に見えてわかる。「できるようになった」という実感が、次の学習につながります。'
    },
    {
      title: '職場に合わせたカスタマイズ',
      description: '業界や職種によって、大切にすべきことは異なります。貴社の職場環境に合わせた内容をご提供します。'
    }
  ];

  const useCases = [
    { title: '外国人材の受け入れ企業', description: '新しく入社される方の職場適応をサポート' },
    { title: '技能実習生受け入れ機関', description: '日本での生活・仕事への理解を深める' },
    { title: '多国籍チームを持つ企業', description: '文化の違いを乗り越え、協力して働く' },
    { title: 'グローバル展開企業', description: '海外拠点との円滑なコミュニケーション' }
  ];

  return (
    <main>
      <Header lang="ja" />

      {/* Hero Section */}
      <section
        className="koda-hero"
        style={{
          backgroundImage: 'linear-gradient(rgba(30, 58, 95, 0.85), rgba(21, 45, 74, 0.9)), url(/images/products/hero-cultural.jpg)',
          backgroundSize: 'cover',
          backgroundPosition: 'center'
        }}
      >
        <div className="koda-hero-container">
          <span className="koda-badge">KODA CULTURAL</span>
          <h1>「一緒に働く」を、<br />もっとスムーズに。</h1>
          <p className="koda-hero-subtitle">異文化理解・職場適応支援</p>
          <p className="koda-hero-description">
            文化の違いから生まれる「すれ違い」を減らしたい。<br />
            KODA Culturalは、日本で働く外国人材と、<br />
            受け入れる日本企業の両方をサポートします。
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
              <h3>「何が分からないか分からない」</h3>
              <p>日本の職場には、言葉にされない「当たり前」がたくさん。どこから学べばいいか分からない。</p>
            </div>
            <div className="koda-problem-card">
              <h3>「同じことを何度も説明」</h3>
              <p>外国人スタッフへの説明に時間がかかる。忙しい中で、丁寧に教える余裕がない。</p>
            </div>
            <div className="koda-problem-card">
              <h3>「せっかく採用しても...」</h3>
              <p>文化の違いから誤解が生まれ、離職につながってしまう。もったいないと感じている。</p>
            </div>
          </div>
        </div>
      </section>

      {/* Features */}
      <section className="koda-features">
        <div className="koda-features-container">
          <h2 className="koda-section-title">KODA Culturalができること</h2>
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
          <h2 className="koda-section-title">こんな場面でご活用いただいています</h2>
          <div className="koda-benefits-grid">
            {useCases.map((useCase, idx) => (
              <div key={idx} className="koda-benefit-card">
                <p className="koda-benefit-label" style={{fontWeight: '600', marginBottom: '8px', color: '#1e3a5f'}}>{useCase.title}</p>
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
              KODA Culturalは、ご利用人数や必要なコンテンツに合わせて、<br />
              柔軟にプランをご提案いたします。<br /><br />
              外国人材の受け入れに関するお悩みをお聞かせください。<br />
              デモンストレーションも可能です。
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
