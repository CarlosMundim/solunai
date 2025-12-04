'use client';

import React from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import Link from 'next/link';
import '@/components/KodaProduct.css';

export default function MedCommPage() {
  const features = [
    {
      icon: '🎭',
      title: 'バーチャル患者',
      description: 'AIが多様な患者プロフィールを再現。年齢、性格、症状、文化的背景を設定し、リアルな対話練習が可能。'
    },
    {
      icon: '👨‍🏫',
      title: 'エキスパート・デジタルツイン',
      description: 'ベテラン医師の指導スタイルをAIで再現。学習者にリアルタイムでフィードバックとガイダンスを提供。'
    },
    {
      icon: '📊',
      title: '自動評価エンジン',
      description: 'コミュニケーションスキルを多角的に評価。共感力、説明の明瞭さ、質問技法、非言語コミュニケーションを分析。'
    },
    {
      icon: '🇯🇵',
      title: '日本の医療文化対応',
      description: '敬語、間合い、家族との関係性など、日本の医療現場特有のコミュニケーション要素を組み込んだシナリオ。'
    },
    {
      icon: '⏰',
      title: '24時間365日利用可能',
      description: '学習者は都合の良い時間にいつでも練習可能。繁忙期も待ち時間なしで学習を継続。'
    },
    {
      icon: '📈',
      title: '学習分析ダッシュボード',
      description: '個人・グループの進捗を可視化。弱点の特定と改善推奨を自動生成。'
    }
  ];

  const scenarios = [
    '初診時の問診',
    '悪い知らせの伝え方',
    '治療方針の説明',
    '家族への病状説明',
    '高齢患者との対話',
    'インフォームドコンセント',
    'クレーム対応',
    '多文化背景患者との対話'
  ];

  const benefits = [
    { metric: '1/10', label: '従来の標準模擬患者費用との比較' },
    { metric: '24/7', label: '利用可能時間' },
    { metric: '100+', label: '対応シナリオ数' },
    { metric: '即時', label: 'フィードバック提供' }
  ];

  return (
    <main>
      <Header lang="ja" />

      {/* Hero Section */}
      <section className="koda-hero">
        <div className="koda-hero-container">
          <span className="koda-badge">KODA FLAGSHIP PRODUCT</span>
          <h1>KODA MedComm</h1>
          <p className="koda-hero-subtitle">AI-Powered Medical Communication Training</p>
          <p className="koda-hero-description">
            AI仮想患者との対話練習で、医療コミュニケーションスキルを効率的に向上。
            従来の10分の1のコストで、いつでも・どこでも・何度でも練習可能。
          </p>
          <div className="koda-hero-buttons">
            <Link href="/contact" className="koda-btn-primary">資料請求</Link>
            <Link href="/contact" className="koda-btn-secondary">デモを見る</Link>
          </div>
        </div>
      </section>

      {/* Problem Statement */}
      <section className="koda-problems">
        <div className="koda-problems-container">
          <h2 className="koda-section-title">医療教育の課題</h2>
          <div className="koda-problems-grid">
            <div className="koda-problem-card">
              <h3>高コスト</h3>
              <p>標準模擬患者(SP)の1セッションあたり¥50,000以上。予算制約で十分な練習機会を提供できない。</p>
            </div>
            <div className="koda-problem-card">
              <h3>一貫性の欠如</h3>
              <p>人間のSPは疲労や気分でパフォーマンスにばらつき。評価基準も主観的になりがち。</p>
            </div>
            <div className="koda-problem-card">
              <h3>スケーラビリティ</h3>
              <p>SP人材は希少。増加する学生数に対応できず、練習機会が不足。</p>
            </div>
          </div>
        </div>
      </section>

      {/* Benefits */}
      <section className="koda-benefits">
        <div className="koda-benefits-container">
          <h2 className="koda-section-title">KODA MedCommの優位性</h2>
          <div className="koda-benefits-grid">
            {benefits.map((benefit, idx) => (
              <div key={idx} className="koda-benefit-card">
                <div className="koda-benefit-metric">{benefit.metric}</div>
                <p className="koda-benefit-label">{benefit.label}</p>
              </div>
            ))}
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

      {/* Scenarios */}
      <section className="koda-scenarios">
        <div className="koda-scenarios-container">
          <h2 className="koda-section-title">対応シナリオ（例）</h2>
          <div className="koda-scenarios-grid">
            {scenarios.map((scenario, idx) => (
              <div key={idx} className="koda-scenario-tag">{scenario}</div>
            ))}
          </div>
          <p className="koda-scenarios-note">※ カスタムシナリオの追加も可能です</p>
        </div>
      </section>

      {/* Academic Partnership */}
      <section className="koda-partnership">
        <div className="koda-partnership-container">
          <h2>学術パートナーシップ</h2>
          <div className="koda-quote-box">
            <p className="koda-quote-text">
              "KODA MedCommは、医療コミュニケーション教育に革新をもたらす可能性を秘めています。
              AIと人間の強みを組み合わせたこのアプローチは、次世代の医療者育成に大きく貢献するでしょう。"
            </p>
            <p className="koda-quote-author">
              — Professor Jeanette Littlemore, University of Birmingham
            </p>
            <p className="koda-quote-author-title">
              医療コミュニケーション・メタファー研究の世界的権威
            </p>
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
              <p className="koda-price-amount">¥300,000<span>/年</span></p>
              <ul className="koda-price-features">
                <li>50ユーザーまで</li>
                <li>基本シナリオセット</li>
                <li>学習分析ダッシュボード</li>
                <li>メールサポート</li>
              </ul>
              <Link href="/contact" className="koda-price-btn koda-price-btn-outline">お問い合わせ</Link>
            </div>
            <div className="koda-price-card recommended">
              <span className="koda-price-badge">RECOMMENDED</span>
              <h3>エンタープライズ</h3>
              <p className="koda-price-amount">¥500,000<span>/年〜</span></p>
              <ul className="koda-price-features">
                <li>無制限ユーザー</li>
                <li>カスタムシナリオ作成</li>
                <li>エキスパート・デジタルツイン</li>
                <li>API連携</li>
                <li>優先サポート</li>
              </ul>
              <Link href="/contact" className="koda-price-btn koda-price-btn-solid">お問い合わせ</Link>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="koda-cta">
        <div className="koda-cta-container">
          <h2>医療コミュニケーション教育を変革しませんか？</h2>
          <p>デモンストレーションや詳細資料をご希望の方は、お気軽にお問い合わせください。</p>
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
