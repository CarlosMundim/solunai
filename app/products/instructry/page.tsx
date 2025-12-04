'use client';

import React from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import Link from 'next/link';
import '@/components/KodaProduct.css';

export default function InstructryPage() {
  const features = [
    {
      icon: '🎥',
      title: '熟練者の技をキャプチャ',
      description: '動画・音声・画像から熟練者の作業手順とノウハウをAIが自動抽出。暗黙知を形式知に変換。'
    },
    {
      icon: '📋',
      title: '作業手順書自動生成',
      description: 'キャプチャした知識から、写真付きの分かりやすい作業手順書を自動生成。多言語対応も可能。'
    },
    {
      icon: '🔧',
      title: 'トラブルシューティングAI',
      description: '過去の故障事例と解決方法を学習したAIが、問題解決をステップバイステップでガイド。'
    },
    {
      icon: '👨‍🏫',
      title: 'スキルトランスファー',
      description: 'ベテランの退職前に知識を体系的に収集・保存。新人への技能伝承を加速。'
    },
    {
      icon: '🔍',
      title: 'ナレッジ検索',
      description: '「あの部品が外れないときどうする？」といった自然言語での検索に対応。必要な情報を即座に提供。'
    },
    {
      icon: '📱',
      title: '現場対応',
      description: 'タブレット・スマホで現場から直接アクセス。ARによる作業支援機能も搭載。'
    }
  ];

  const industries = [
    { title: '製造業', description: '設備保全・組立作業' },
    { title: '建設業', description: '施工技術・安全管理' },
    { title: 'インフラ', description: '点検・メンテナンス' },
    { title: '医療機器', description: '機器操作・保守' }
  ];

  return (
    <main>
      <Header lang="ja" />

      {/* Hero Section */}
      <section className="koda-hero">
        <div className="koda-hero-container">
          <span className="koda-badge">KODA PRODUCT</span>
          <h1>KODA Instructry</h1>
          <p className="koda-hero-subtitle">Industrial Knowledge Management</p>
          <p className="koda-hero-description">
            製造現場の熟練技術をAIで保存・継承。
            2025年問題で失われる貴重なノウハウを、次世代に確実につなぎます。
          </p>
          <div className="koda-hero-buttons">
            <Link href="/contact" className="koda-btn-primary">資料請求</Link>
            <Link href="/contact" className="koda-btn-secondary">デモを見る</Link>
          </div>
        </div>
      </section>

      {/* Problem/Solution */}
      <section className="koda-problems">
        <div className="koda-problems-container">
          <h2 className="koda-section-title">2025年問題に備える</h2>
          <div className="koda-problems-grid" style={{gridTemplateColumns: 'repeat(2, 1fr)'}}>
            <div className="koda-problem-card" style={{borderColor: '#dc2626'}}>
              <h3 style={{color: '#dc2626'}}>深刻な技術継承危機</h3>
              <p>団塊世代の大量退職。40年の経験とノウハウが失われる。マニュアル化されていない暗黙知。若手への伝承が間に合わない。</p>
            </div>
            <div className="koda-problem-card" style={{borderColor: '#059669'}}>
              <h3 style={{color: '#059669'}}>KODA Instructryで解決</h3>
              <p>熟練者の技をAIが記録・体系化。いつでも誰でもアクセス可能なナレッジベースを構築。技術継承のスピードを10倍に。</p>
            </div>
          </div>
        </div>
      </section>

      {/* Features */}
      <section className="koda-features">
        <div className="koda-features-container">
          <h2 className="koda-section-title">機能</h2>
          <div className="koda-features-grid">
            {features.map((feature, idx) => (
              <div key={idx} className="koda-feature-card">
                <div className="koda-feature-icon">{feature.icon}</div>
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
          <h2 className="koda-section-title">対象業界</h2>
          <div className="koda-benefits-grid">
            {industries.map((industry, idx) => (
              <div key={idx} className="koda-benefit-card">
                <div className="koda-benefit-metric" style={{fontSize: '24px'}}>{industry.title}</div>
                <p className="koda-benefit-label">{industry.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Pricing */}
      <section className="koda-pricing">
        <div className="koda-pricing-container">
          <h2 className="koda-section-title">料金</h2>
          <div className="koda-pricing-grid">
            <div className="koda-price-card">
              <h3>スタンダード</h3>
              <p className="koda-price-amount">¥200,000<span>/月</span></p>
              <ul className="koda-price-features">
                <li>ナレッジ登録100件</li>
                <li>作業手順書生成</li>
                <li>検索機能</li>
                <li>メールサポート</li>
              </ul>
              <Link href="/contact" className="koda-price-btn koda-price-btn-outline">お問い合わせ</Link>
            </div>
            <div className="koda-price-card recommended">
              <span className="koda-price-badge">RECOMMENDED</span>
              <h3>エンタープライズ</h3>
              <p className="koda-price-amount">¥500,000<span>/月〜</span></p>
              <ul className="koda-price-features">
                <li>無制限ナレッジ登録</li>
                <li>トラブルシューティングAI</li>
                <li>AR現場支援</li>
                <li>多言語対応</li>
                <li>専任サポート</li>
              </ul>
              <Link href="/contact" className="koda-price-btn koda-price-btn-solid">お問い合わせ</Link>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="koda-cta">
        <div className="koda-cta-container">
          <h2>貴重な技術を失う前に</h2>
          <p>熟練者が退職される前に、知識の保存を始めましょう。</p>
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
