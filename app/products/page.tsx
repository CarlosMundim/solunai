'use client';

import React from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import Link from 'next/link';
import '@/components/KodaProduct.css';

export default function KodaProductsPage() {
  // KODA Applications - End-user products
  const applications = [
    {
      id: 'medcomm',
      name: 'KODA MedComm',
      tagline: '医療コミュニケーション教育支援',
      description: '患者さんとの対話を、何度でも安心して練習できる環境を提供します。医学教育の現場で「練習機会が少ない」という声に応えます。',
      features: [
        'AI仮想患者との対話練習',
        'ベテラン医師の知恵を継承',
        '振り返りのサポート',
        '日本の医療現場に最適化'
      ],
      highlight: true,
      href: '/products/medcomm'
    },
    {
      id: 'docintel',
      name: 'KODA DocIntel',
      tagline: '文書処理・情報抽出',
      description: '日本語ビジネス文書を読み、理解し、必要な情報を抽出します。手作業で行っていた文書処理の負担を軽減します。',
      features: [
        '日本語文書の理解と処理',
        '必要情報の自動抽出',
        'ワークフロー連携',
        '分類・振り分け支援'
      ],
      highlight: false,
      href: '/products/docintel'
    },
    {
      id: 'assist',
      name: 'KODA Assist',
      tagline: '業務支援AIアシスタント',
      description: '日常業務をサポートするAIアシスタント。議事録作成、スケジュール調整、問い合わせ対応など、担当者の負担を減らします。',
      features: [
        '会議の書き起こし・要約',
        'スケジュール調整支援',
        '問い合わせ対応サポート',
        '業務に合わせたカスタマイズ'
      ],
      highlight: false,
      href: '/products/assist'
    },
    {
      id: 'cultural',
      name: 'KODA Cultural',
      tagline: '異文化理解・適応支援',
      description: '日本で働く外国人材と、受け入れる日本企業の両方をサポート。文化の違いから生まれる「すれ違い」を減らします。',
      features: [
        '日本のビジネス文化の理解',
        'コミュニケーションの橋渡し',
        '職場適応のサポート',
        '相互理解の促進'
      ],
      highlight: false,
      href: '/products/cultural'
    },
    {
      id: 'training',
      name: 'KODA Training',
      tagline: '企業研修・人材育成',
      description: '一人ひとりに合わせた学習体験を提供します。「研修を受けても現場で活かせない」という課題に応えます。',
      features: [
        '個人に最適化された学習',
        'AIチューターによるサポート',
        'スキルの可視化',
        '実践的なシナリオ演習'
      ],
      highlight: false,
      href: '/products/training'
    },
    {
      id: 'instructry',
      name: 'KODA Instructry',
      tagline: '製造業・技術継承支援',
      description: 'ベテラン技術者の知識・経験を次世代に伝えます。「退職前に技術を残したい」という現場の願いに応えます。',
      features: [
        '技術知識の記録・整理',
        '作業手順書の自動生成',
        'トラブル対応の知恵袋',
        '若手への技術伝承'
      ],
      highlight: false,
      href: '/products/instructry'
    }
  ];

  return (
    <main>
      <Header lang="ja" />

      {/* Hero Section */}
      <section
        className="koda-hero"
        style={{
          backgroundImage: 'linear-gradient(rgba(30, 58, 95, 0.85), rgba(21, 45, 74, 0.9)), url(/images/products/hero-koda-products.jpg)',
          backgroundSize: 'cover',
          backgroundPosition: 'center'
        }}
      >
        <div className="koda-hero-container">
          <span className="koda-badge">KODA製品ライン</span>
          <h1>「こんなことができたら」を、<br />AIの力で実現します。</h1>
          <p className="koda-hero-description">
            日本の企業が抱える課題に、正面から向き合いました。<br />
            医療教育から文書処理、技術継承まで。<br />
            現場の声から生まれたAIソリューションです。
          </p>
        </div>
      </section>

      {/* SCE Engine - The Brain */}
      <section className="koda-partnership">
        <div className="koda-partnership-container">
          <h2>KODA SCE Engine</h2>
          <p className="koda-hero-subtitle" style={{marginBottom: '16px'}}>すべてのKODA製品を支える技術基盤</p>
          <p style={{color: '#c8d9e8', maxWidth: '800px', margin: '0 auto 40px', lineHeight: '1.9'}}>
            日本語の「意味」と「文脈」を深く理解するエンジンです。<br />
            単なる翻訳や置き換えではなく、言葉の背景にある文化や慣習まで踏まえて処理します。
          </p>
          <div style={{display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: '24px', maxWidth: '1000px', margin: '0 auto'}}>
            <div style={{background: 'rgba(255,255,255,0.1)', padding: '24px', borderRadius: '12px', textAlign: 'center'}}>
              <div style={{marginBottom: '12px'}}>
                <svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <circle cx="16" cy="16" r="12" stroke="#fff" strokeWidth="2" fill="none"/>
                  <path d="M16 8v8l6 3" stroke="#fff" strokeWidth="2" strokeLinecap="round"/>
                </svg>
              </div>
              <h4 style={{color: '#fff', marginBottom: '8px', fontSize: '16px'}}>意味理解</h4>
              <p style={{color: '#94b8d8', fontSize: '13px', lineHeight: '1.6'}}>文脈やニュアンスを含めた<br />深い理解</p>
            </div>
            <div style={{background: 'rgba(255,255,255,0.1)', padding: '24px', borderRadius: '12px', textAlign: 'center'}}>
              <div style={{marginBottom: '12px'}}>
                <svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M8 24l8-8 8 8M8 16l8-8 8 8" stroke="#fff" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </div>
              <h4 style={{color: '#fff', marginBottom: '8px', fontSize: '16px'}}>文化対応</h4>
              <p style={{color: '#94b8d8', fontSize: '13px', lineHeight: '1.6'}}>日本のビジネス文化に<br />根差した設計</p>
            </div>
            <div style={{background: 'rgba(255,255,255,0.1)', padding: '24px', borderRadius: '12px', textAlign: 'center'}}>
              <div style={{marginBottom: '12px'}}>
                <svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <rect x="6" y="6" width="8" height="8" rx="2" stroke="#fff" strokeWidth="2" fill="none"/>
                  <rect x="18" y="6" width="8" height="8" rx="2" stroke="#fff" strokeWidth="2" fill="none"/>
                  <rect x="6" y="18" width="8" height="8" rx="2" stroke="#fff" strokeWidth="2" fill="none"/>
                  <rect x="18" y="18" width="8" height="8" rx="2" stroke="#fff" strokeWidth="2" fill="none"/>
                </svg>
              </div>
              <h4 style={{color: '#fff', marginBottom: '8px', fontSize: '16px'}}>マルチモーダル</h4>
              <p style={{color: '#94b8d8', fontSize: '13px', lineHeight: '1.6'}}>文字・音声・画像を<br />統合処理</p>
            </div>
            <div style={{background: 'rgba(255,255,255,0.1)', padding: '24px', borderRadius: '12px', textAlign: 'center'}}>
              <div style={{marginBottom: '12px'}}>
                <svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <rect x="8" y="12" width="16" height="12" rx="2" stroke="#fff" strokeWidth="2" fill="none"/>
                  <path d="M12 12V10a4 4 0 018 0v2" stroke="#fff" strokeWidth="2"/>
                  <circle cx="16" cy="18" r="2" fill="#fff"/>
                </svg>
              </div>
              <h4 style={{color: '#fff', marginBottom: '8px', fontSize: '16px'}}>セキュリティ</h4>
              <p style={{color: '#94b8d8', fontSize: '13px', lineHeight: '1.6'}}>国内データセンター<br />での安全な運用</p>
            </div>
          </div>
        </div>
      </section>

      {/* Why KODA */}
      <section className="koda-benefits">
        <div className="koda-benefits-container">
          <h2 className="koda-section-title">Solunaiが選ばれる理由</h2>
          <div className="koda-benefits-grid">
            <div className="koda-benefit-card">
              <div className="koda-benefit-metric">
                <svg width="48" height="48" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <circle cx="24" cy="24" r="18" stroke="#1e3a5f" strokeWidth="2" fill="none"/>
                  <path d="M24 12v24M12 24h24" stroke="#1e3a5f" strokeWidth="2"/>
                </svg>
              </div>
              <p className="koda-benefit-label">日本のために設計<br/><span style={{fontSize: '12px', color: '#737373'}}>言葉・文化・慣習を深く理解</span></p>
            </div>
            <div className="koda-benefit-card">
              <div className="koda-benefit-metric">
                <svg width="48" height="48" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M24 8l4 8 8 1-6 5 2 8-8-4-8 4 2-8-6-5 8-1z" stroke="#1e3a5f" strokeWidth="2" fill="none"/>
                </svg>
              </div>
              <p className="koda-benefit-label">学術的な裏付け<br/><span style={{fontSize: '12px', color: '#737373'}}>専門家との共同研究</span></p>
            </div>
            <div className="koda-benefit-card">
              <div className="koda-benefit-metric">
                <svg width="48" height="48" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M12 36V20l12-8 12 8v16" stroke="#1e3a5f" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round"/>
                  <path d="M20 36v-8h8v8" stroke="#1e3a5f" strokeWidth="2" fill="none"/>
                </svg>
              </div>
              <p className="koda-benefit-label">中小企業にも<br/><span style={{fontSize: '12px', color: '#737373'}}>規模に合わせた導入が可能</span></p>
            </div>
            <div className="koda-benefit-card">
              <div className="koda-benefit-metric">
                <svg width="48" height="48" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <circle cx="24" cy="24" r="16" stroke="#1e3a5f" strokeWidth="2" fill="none"/>
                  <path d="M18 24l4 4 8-8" stroke="#1e3a5f" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </div>
              <p className="koda-benefit-label">柔軟な対応<br/><span style={{fontSize: '12px', color: '#737373'}}>ニーズに合わせたカスタマイズ</span></p>
            </div>
          </div>
        </div>
      </section>

      {/* Applications Grid */}
      <section className="koda-features">
        <div className="koda-features-container" style={{maxWidth: '1200px'}}>
          <h2 className="koda-section-title">製品ラインナップ</h2>
          <div className="koda-features-grid" style={{gridTemplateColumns: 'repeat(3, 1fr)'}}>
            {applications.map((product) => (
              <div
                key={product.id}
                className="koda-feature-card"
                style={{
                  border: product.highlight ? '2px solid #0077b6' : '1px solid #e5e5e5',
                  background: product.highlight ? '#f0f8ff' : '#fff',
                  position: 'relative'
                }}
              >
                {product.highlight && (
                  <span style={{
                    position: 'absolute',
                    top: '-12px',
                    left: '50%',
                    transform: 'translateX(-50%)',
                    background: '#0077b6',
                    color: '#fff',
                    padding: '4px 12px',
                    borderRadius: '12px',
                    fontSize: '11px',
                    fontWeight: 'bold'
                  }}>注目製品</span>
                )}
                <h3 style={{marginBottom: '8px'}}>{product.name}</h3>
                <p style={{color: '#0077b6', fontWeight: '500', marginBottom: '12px', fontSize: '14px'}}>{product.tagline}</p>
                <p style={{fontSize: '13px', marginBottom: '16px', lineHeight: '1.7', color: '#525252'}}>{product.description}</p>
                <div style={{marginBottom: '16px'}}>
                  {product.features.map((feature, idx) => (
                    <div key={idx} style={{display: 'flex', alignItems: 'center', gap: '8px', fontSize: '12px', color: '#525252', marginBottom: '6px'}}>
                      <span style={{width: '4px', height: '4px', background: '#0077b6', borderRadius: '50%', flexShrink: 0}}></span>
                      {feature}
                    </div>
                  ))}
                </div>
                <div style={{borderTop: '1px solid #e5e5e5', paddingTop: '16px', marginTop: 'auto'}}>
                  <Link href={product.href} className="koda-price-btn koda-price-btn-solid" style={{display: 'block', textAlign: 'center'}}>
                    詳しく見る
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Target Customers */}
      <section className="koda-problems">
        <div className="koda-problems-container" style={{maxWidth: '1200px'}}>
          <h2 className="koda-section-title">こんな方にご利用いただいています</h2>
          <div className="koda-problems-grid">
            <div className="koda-problem-card" style={{borderColor: '#0077b6'}}>
              <h3 style={{color: '#0077b6'}}>医療教育機関</h3>
              <p style={{fontSize: '14px', color: '#525252', lineHeight: '1.7'}}>
                医学部、看護学部、教育病院など、<br />
                医療コミュニケーション教育に<br />
                取り組まれている皆さま
              </p>
            </div>
            <div className="koda-problem-card" style={{borderColor: '#059669'}}>
              <h3 style={{color: '#059669'}}>医療機関</h3>
              <p style={{fontSize: '14px', color: '#525252', lineHeight: '1.7'}}>
                病院、クリニック、介護施設など、<br />
                スタッフ研修や業務効率化を<br />
                検討されている皆さま
              </p>
            </div>
            <div className="koda-problem-card" style={{borderColor: '#7c3aed'}}>
              <h3 style={{color: '#7c3aed'}}>企業・事業所</h3>
              <p style={{fontSize: '14px', color: '#525252', lineHeight: '1.7'}}>
                文書処理、人材育成、技術継承など、<br />
                業務課題の解決に<br />
                AIの活用をお考えの皆さま
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="koda-cta">
        <div className="koda-cta-container">
          <h2>まずは、お話を聞かせてください</h2>
          <p>貴社の課題やニーズをお聞かせいただければ、<br />最適な製品・プランをご提案いたします。</p>
          <div className="koda-cta-buttons">
            <Link href="/contact" className="koda-cta-btn-primary">お問い合わせ</Link>
            <Link href="/about" className="koda-cta-btn-secondary">Solunaiについて</Link>
          </div>
        </div>
      </section>

      <Footer lang="ja" />
    </main>
  );
}
