'use client';

import React from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import Link from 'next/link';
import '@/components/KodaProduct.css';

export default function DocIntelPage() {
  const features = [
    {
      icon: '👁️',
      title: 'OCR + 文書理解',
      description: '日本語文書を高精度で読み取り、単なるテキスト抽出ではなく文脈を理解。手書き、旧字体、複雑なレイアウトにも対応。'
    },
    {
      icon: '📊',
      title: 'データ抽出',
      description: '請求書、契約書、申請書などから構造化データを自動抽出。フォーマットが異なっても柔軟に対応。'
    },
    {
      icon: '🔄',
      title: 'ワークフロー自動化',
      description: '文書の分類、ルーティング、承認フローを自動化。既存システムとのAPI連携も可能。'
    },
    {
      icon: '🔍',
      title: 'セマンティック検索',
      description: 'キーワードマッチングではなく意味理解に基づく検索。「昨年の契約更新に関する書類」のような自然言語クエリに対応。'
    },
    {
      icon: '🔒',
      title: 'セキュリティ',
      description: '日本国内データレジデンシー、エンドツーエンド暗号化、アクセスログ、ISMS対応可能。'
    },
    {
      icon: '🇯🇵',
      title: '日本語最適化',
      description: '日本語特有の文書形式（縦書き、元号表記、印鑑など）を正確に処理。'
    }
  ];

  const useCases = [
    { title: '経理・財務', description: '請求書処理の自動化' },
    { title: '法務・契約', description: '契約書管理の効率化' },
    { title: '人事・総務', description: '申請書類の処理' },
    { title: '製造・品質', description: '技術文書管理' }
  ];

  return (
    <main>
      <Header lang="ja" />

      {/* Hero Section */}
      <section className="koda-hero">
        <div className="koda-hero-container">
          <span className="koda-badge">KODA PRODUCT</span>
          <h1>KODA DocIntel</h1>
          <p className="koda-hero-subtitle">Intelligent Document Processing</p>
          <p className="koda-hero-description">
            日本語ビジネス文書をAIが読み取り、理解し、処理を自動化。
            手作業のデータ入力から解放され、本質的な業務に集中。
          </p>
          <div className="koda-hero-buttons">
            <Link href="/contact" className="koda-btn-primary">資料請求</Link>
            <Link href="/contact" className="koda-btn-secondary">デモを見る</Link>
          </div>
        </div>
      </section>

      {/* Problem/Solution Comparison */}
      <section className="koda-problems">
        <div className="koda-problems-container">
          <h2 className="koda-section-title">紙とPDFに埋もれていませんか？</h2>
          <div className="koda-problems-grid" style={{gridTemplateColumns: 'repeat(2, 1fr)'}}>
            <div className="koda-problem-card" style={{borderColor: '#dc2626'}}>
              <h3 style={{color: '#dc2626'}}>現状の課題</h3>
              <p>手作業でのデータ入力に膨大な時間。入力ミスによる後工程での手戻り。過去の文書が見つからない。フォーマットがバラバラで統合できない。</p>
            </div>
            <div className="koda-problem-card" style={{borderColor: '#059669'}}>
              <h3 style={{color: '#059669'}}>DocIntel導入後</h3>
              <p>文書処理時間を80%削減。ヒューマンエラーをほぼゼロに。必要な情報を数秒で検索。構造化データとして統合活用。</p>
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
              <h3>スターター</h3>
              <p className="koda-price-amount">¥50,000<span>/月</span></p>
              <ul className="koda-price-features">
                <li>500文書/月</li>
                <li>基本OCR</li>
                <li>3テンプレート</li>
              </ul>
              <Link href="/contact" className="koda-price-btn koda-price-btn-outline">お問い合わせ</Link>
            </div>
            <div className="koda-price-card recommended">
              <span className="koda-price-badge">POPULAR</span>
              <h3>ビジネス</h3>
              <p className="koda-price-amount">¥100,000<span>/月</span></p>
              <ul className="koda-price-features">
                <li>2,000文書/月</li>
                <li>高精度OCR</li>
                <li>無制限テンプレート</li>
                <li>API連携</li>
              </ul>
              <Link href="/contact" className="koda-price-btn koda-price-btn-solid">お問い合わせ</Link>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="koda-cta">
        <div className="koda-cta-container">
          <h2>文書処理を自動化しませんか？</h2>
          <p>お客様の文書サンプルで無料デモを実施します。</p>
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
