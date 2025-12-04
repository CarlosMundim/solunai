'use client';

import React from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import Link from 'next/link';
import '@/components/KodaProduct.css';

export default function CulturalPage() {
  const features = [
    {
      icon: '🌏',
      title: '異文化コミュニケーション',
      description: '日本のビジネス文化、マナー、コミュニケーションスタイルをAIが解説。リアルタイムで文化的コンテキストを提供。'
    },
    {
      icon: '🤝',
      title: 'ビジネスエチケット',
      description: '名刺交換、敬語、会議作法など、日本のビジネスシーンで必要なエチケットをインタラクティブに学習。'
    },
    {
      icon: '💬',
      title: 'コミュニケーションコーチ',
      description: 'メール、プレゼン、交渉などの場面で適切な表現をAIがアドバイス。ニュアンスの違いも丁寧に解説。'
    },
    {
      icon: '📊',
      title: '文化適応度診断',
      description: '自分の文化的傾向を診断し、日本ビジネス環境への適応度を測定。改善ポイントを具体的に提示。'
    },
    {
      icon: '🎯',
      title: 'シナリオ練習',
      description: '商談、接待、クレーム対応など、実際のビジネスシナリオでロールプレイ練習が可能。'
    },
    {
      icon: '📈',
      title: '進捗トラッキング',
      description: '学習進捗と文化的コンピテンシーの成長を可視化。チーム全体の状況も把握可能。'
    }
  ];

  const useCases = [
    { title: '外資系企業', description: '日本市場参入時の文化トレーニング' },
    { title: 'グローバル人材', description: '海外駐在員の日本赴任準備' },
    { title: '多国籍チーム', description: '日本人との協働を円滑化' },
    { title: '採用・HR', description: '外国人社員のオンボーディング' }
  ];

  return (
    <main>
      <Header lang="ja" />

      {/* Hero Section */}
      <section className="koda-hero">
        <div className="koda-hero-container">
          <span className="koda-badge">KODA PRODUCT</span>
          <h1>KODA Cultural</h1>
          <p className="koda-hero-subtitle">Cross-Cultural Intelligence Platform</p>
          <p className="koda-hero-description">
            日本のビジネス文化をAIで学ぶ。異文化コミュニケーションの壁を越え、
            グローバルビジネスの成功を加速します。
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
          <h2 className="koda-section-title">文化の壁を越える</h2>
          <div className="koda-problems-grid" style={{gridTemplateColumns: 'repeat(2, 1fr)'}}>
            <div className="koda-problem-card" style={{borderColor: '#dc2626'}}>
              <h3 style={{color: '#dc2626'}}>よくある課題</h3>
              <p>日本のビジネス慣習が分からない。敬語の使い方が難しい。暗黙のルールが読めない。会議で意見を言うタイミングが掴めない。</p>
            </div>
            <div className="koda-problem-card" style={{borderColor: '#059669'}}>
              <h3 style={{color: '#059669'}}>KODA Culturalで解決</h3>
              <p>AIが文化的コンテキストを即座に解説。適切な表現とタイミングをアドバイス。ロールプレイで実践力を養成。</p>
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

      {/* Use Cases */}
      <section className="koda-benefits">
        <div className="koda-benefits-container">
          <h2 className="koda-section-title">活用シーン</h2>
          <div className="koda-benefits-grid">
            {useCases.map((useCase, idx) => (
              <div key={idx} className="koda-benefit-card">
                <div className="koda-benefit-metric" style={{fontSize: '24px'}}>{useCase.title}</div>
                <p className="koda-benefit-label">{useCase.description}</p>
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
              <h3>チーム</h3>
              <p className="koda-price-amount">¥80,000<span>/月</span></p>
              <ul className="koda-price-features">
                <li>20ユーザーまで</li>
                <li>基本学習モジュール</li>
                <li>文化診断ツール</li>
                <li>メールサポート</li>
              </ul>
              <Link href="/contact" className="koda-price-btn koda-price-btn-outline">お問い合わせ</Link>
            </div>
            <div className="koda-price-card recommended">
              <span className="koda-price-badge">RECOMMENDED</span>
              <h3>エンタープライズ</h3>
              <p className="koda-price-amount">¥200,000<span>/月〜</span></p>
              <ul className="koda-price-features">
                <li>無制限ユーザー</li>
                <li>カスタムシナリオ</li>
                <li>進捗レポート</li>
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
          <h2>グローバルチームの文化的能力を高めませんか？</h2>
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
