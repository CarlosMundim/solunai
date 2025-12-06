'use client';

import React from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import Link from 'next/link';
import '@/components/KodaProduct.css';

export default function AssistPage() {
  const assistants = [
    {
      id: 'secretary',
      name: '会議サポート',
      description: '会議の文字起こし、議事録作成、アクションアイテムの抽出など、会議後の作業負担を軽減します。',
      features: [
        '会議の文字起こし',
        '議事録の自動作成',
        '決定事項の抽出',
        'スケジュール連携'
      ]
    },
    {
      id: 'analyst',
      name: '文書分析サポート',
      description: '文書の要約、データの集計、定型レポートの作成など、分析業務をサポートします。',
      features: [
        '文書の要約・分析',
        'データの集計',
        '定型レポート作成',
        '傾向の把握'
      ]
    },
    {
      id: 'support',
      name: '問い合わせ対応',
      description: '日本語の敬語やビジネスマナーを踏まえた、丁寧な問い合わせ対応をサポートします。',
      features: [
        'よくある質問への対応',
        '担当者への引き継ぎ判断',
        '対応履歴の管理',
        '24時間対応が可能'
      ]
    },
    {
      id: 'hr',
      name: '社内業務サポート',
      description: '社内からの問い合わせ対応、申請業務のサポートなど、バックオフィス業務を効率化します。',
      features: [
        '社内規程の問い合わせ対応',
        '申請手続きの案内',
        '新入社員サポート',
        '勤怠・休暇の問い合わせ'
      ]
    }
  ];

  const integrations = ['Slack', 'Microsoft Teams', 'LINE WORKS', 'Chatwork', 'Google Workspace', 'その他のシステム'];

  return (
    <main>
      <Header lang="ja" />

      {/* Hero Section */}
      <section
        className="koda-hero"
        style={{
          backgroundImage: 'linear-gradient(rgba(30, 58, 95, 0.85), rgba(21, 45, 74, 0.9)), url(/images/products/hero-assist.jpg)',
          backgroundSize: 'cover',
          backgroundPosition: 'center'
        }}
      >
        <div className="koda-hero-container">
          <span className="koda-badge">KODA ASSIST</span>
          <h1>「誰かに手伝ってほしい」<br />そんな業務を、AIがサポートします。</h1>
          <p className="koda-hero-subtitle">業務支援AIアシスタント</p>
          <p className="koda-hero-description">
            議事録作成、問い合わせ対応、文書の分析...<br />
            「自分でやるしかない」と思っていた業務を、AIがお手伝いします。<br />
            日本のビジネス文化を理解した、頼れるアシスタントです。
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
              <h3>「会議後の作業が大変」</h3>
              <p>会議の議事録作成に時間がかかる。聞き逃しがないか不安。アクションアイテムの整理も自分でやっている。</p>
            </div>
            <div className="koda-problem-card">
              <h3>「同じ質問に何度も対応」</h3>
              <p>社内外からの問い合わせ。同じような質問が繰り返される。本来の業務に集中する時間が取れない。</p>
            </div>
            <div className="koda-problem-card">
              <h3>「定型作業に時間を取られる」</h3>
              <p>レポート作成、データ集計、文書の整理。大切な作業だけど、もっと効率化できないだろうか。</p>
            </div>
          </div>
        </div>
      </section>

      {/* Assistant Types */}
      <section className="koda-features">
        <div className="koda-features-container">
          <h2 className="koda-section-title">KODA Assistができること</h2>
          <div className="koda-features-grid" style={{gridTemplateColumns: 'repeat(2, 1fr)'}}>
            {assistants.map((assistant) => (
              <div key={assistant.id} className="koda-feature-card">
                <h3 style={{marginBottom: '12px'}}>{assistant.name}</h3>
                <p style={{marginBottom: '16px', lineHeight: '1.7'}}>{assistant.description}</p>
                <ul style={{display: 'grid', gridTemplateColumns: 'repeat(2, 1fr)', gap: '8px', listStyle: 'none', padding: 0, margin: 0}}>
                  {assistant.features.map((feature, idx) => (
                    <li key={idx} style={{display: 'flex', alignItems: 'center', gap: '8px', fontSize: '13px', color: '#525252'}}>
                      <span style={{width: '4px', height: '4px', background: '#1e3a5f', borderRadius: '50%', flexShrink: 0}}></span>
                      {feature}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Custom Development */}
      <section className="koda-partnership">
        <div className="koda-partnership-container">
          <h2>ご要望に合わせたカスタマイズ</h2>
          <p style={{color: '#c8d9e8', marginBottom: '32px', lineHeight: '1.8'}}>
            標準機能でカバーできないご要望にも、柔軟にお応えします。<br />
            業界固有の知識、社内システムとの連携、セキュリティ要件など、<br />
            貴社の状況に合わせたカスタマイズが可能です。
          </p>
          <div style={{display: 'flex', flexWrap: 'wrap', gap: '16px', justifyContent: 'center', maxWidth: '700px', margin: '0 auto'}}>
            {['業務に合わせた調整', '既存システムとの連携', '社内用語の学習', 'セキュリティ対応', 'オンプレミス展開', '継続的な改善'].map((item, idx) => (
              <div key={idx} style={{background: 'rgba(255,255,255,0.1)', padding: '12px 20px', borderRadius: '8px', fontSize: '14px'}}>
                {item}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Integration */}
      <section className="koda-scenarios">
        <div className="koda-scenarios-container">
          <h2 className="koda-section-title">連携できるツール</h2>
          <div className="koda-scenarios-grid">
            {integrations.map((system, idx) => (
              <div key={idx} className="koda-scenario-tag">{system}</div>
            ))}
          </div>
          <p className="koda-scenarios-note">※ API連携により、その他のシステムとも接続可能です</p>
        </div>
      </section>

      {/* Contact Section - No prices */}
      <section className="koda-pricing">
        <div className="koda-pricing-container">
          <h2 className="koda-section-title">導入をご検討の方へ</h2>
          <div style={{ maxWidth: '600px', margin: '0 auto', textAlign: 'center' }}>
            <p style={{ fontSize: '16px', lineHeight: '1.9', color: '#525252', marginBottom: '32px' }}>
              KODA Assistは、サポートする業務の内容や規模に合わせて、<br />
              柔軟にプランをご提案いたします。<br /><br />
              まずは、自動化したい業務についてお聞かせください。<br />
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
