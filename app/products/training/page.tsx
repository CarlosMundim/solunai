'use client';

import React from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import Link from 'next/link';
import '@/components/KodaProduct.css';

export default function TrainingPage() {
  const features = [
    {
      title: '一人ひとりに合わせた学習',
      description: '同じ研修でも、理解度や進み具合は人それぞれ。AIが一人ひとりのペースに合わせて、最適な学習内容を提供します。'
    },
    {
      title: 'いつでも質問できるAIチューター',
      description: '「ここが分からない」と思ったとき、すぐに質問できる相手がいます。時間や場所を選ばず、理解を深められます。'
    },
    {
      title: '現状とゴールの「見える化」',
      description: '今のスキルレベルと目標のギャップが一目で分かる。何を学べばいいか迷わず、効率的に成長できます。'
    },
    {
      title: 'コンプライアンス研修の効率化',
      description: '法改正に対応した最新の内容を、自動的に更新。受講状況の管理も、手間なく行えます。'
    },
    {
      title: '学び続けられる仕組み',
      description: '忙しい業務の中でも、学習を続けられる工夫があります。達成感を感じながら、モチベーションを保てます。'
    },
    {
      title: '効果が見える研修に',
      description: '研修の効果をデータで把握。「研修をやって終わり」ではなく、成果につながる人材育成を支援します。'
    }
  ];

  const modules = [
    'ビジネススキル',
    'リーダーシップ',
    'コンプライアンス',
    'IT・デジタルスキル',
    'コミュニケーション',
    'マネジメント',
    '営業・接客',
    '業務に合わせたカスタム研修'
  ];

  return (
    <main>
      <Header lang="ja" />

      {/* Hero Section */}
      <section
        className="koda-hero"
        style={{
          backgroundImage: 'linear-gradient(rgba(30, 58, 95, 0.85), rgba(21, 45, 74, 0.9)), url(/images/products/hero-training.png)',
          backgroundSize: 'cover',
          backgroundPosition: 'center'
        }}
      >
        <div className="koda-hero-container">
          <span className="koda-badge">KODA TRAINING</span>
          <h1>「研修を受けて終わり」から、<br />「現場で活きる学び」へ。</h1>
          <p className="koda-hero-subtitle">企業研修・人材育成支援</p>
          <p className="koda-hero-description">
            せっかくの研修が、現場で活かされていますか。<br />
            KODA Trainingは、一人ひとりに合わせた学習体験で、<br />
            確実に身につく人材育成を支援します。
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
              <h3>「全員同じ内容でいいのか」</h3>
              <p>経験や理解度が違うのに、同じ研修を受けさせている。効率的ではないと感じている。</p>
            </div>
            <div className="koda-problem-card">
              <h3>「忙しくて学習が進まない」</h3>
              <p>eラーニングを導入しても、なかなか完了しない。業務優先で、学習が後回しに。</p>
            </div>
            <div className="koda-problem-card">
              <h3>「効果が見えにくい」</h3>
              <p>研修にコストをかけているが、本当に効果があるのか分からない。成果を可視化したい。</p>
            </div>
          </div>
        </div>
      </section>

      {/* Features */}
      <section className="koda-features">
        <div className="koda-features-container">
          <h2 className="koda-section-title">KODA Trainingができること</h2>
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

      {/* Learning Modules */}
      <section className="koda-scenarios">
        <div className="koda-scenarios-container">
          <h2 className="koda-section-title">学習コンテンツ（例）</h2>
          <div className="koda-scenarios-grid">
            {modules.map((module, idx) => (
              <div key={idx} className="koda-scenario-tag">{module}</div>
            ))}
          </div>
          <p className="koda-scenarios-note">※ 貴社の業務に合わせたオリジナル研修も作成可能です</p>
        </div>
      </section>

      {/* Contact Section - No prices */}
      <section className="koda-pricing">
        <div className="koda-pricing-container">
          <h2 className="koda-section-title">導入をご検討の方へ</h2>
          <div style={{ maxWidth: '600px', margin: '0 auto', textAlign: 'center' }}>
            <p style={{ fontSize: '16px', lineHeight: '1.9', color: '#525252', marginBottom: '32px' }}>
              KODA Trainingは、利用人数や必要なコンテンツに合わせて、<br />
              柔軟にプランをご提案いたします。<br /><br />
              現在の研修の課題や、目指したい人材像をお聞かせください。<br />
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
