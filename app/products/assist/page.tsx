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
      name: 'セクレタリー Bot',
      description: '会議の文字起こし、議事録作成、スケジュール調整、リマインダー管理をAIが担当。',
      features: [
        'リアルタイム文字起こし',
        '自動議事録作成',
        'アクションアイテム抽出',
        'カレンダー連携'
      ],
      icon: '📋'
    },
    {
      id: 'analyst',
      name: 'アナリスト Bot',
      description: '文書分析、データ集計、レポート作成をAIが支援。定型レポートの自動生成も可能。',
      features: [
        '文書要約・分析',
        'データ集計・可視化',
        '定型レポート自動生成',
        'トレンド分析'
      ],
      icon: '📊'
    },
    {
      id: 'support',
      name: 'カスタマーサポート Bot',
      description: '日本語の敬語・ビジネス文化を理解したカスタマーサポート。24時間対応で顧客満足度向上。',
      features: [
        '日本語ビジネス敬語対応',
        'FAQ自動応答',
        'エスカレーション判断',
        '対応履歴管理'
      ],
      icon: '💬'
    },
    {
      id: 'hr',
      name: '人事アシスタント Bot',
      description: '採用、オンボーディング、社内問い合わせ対応を効率化。',
      features: [
        '採用候補者スクリーニング',
        'オンボーディング自動化',
        '社内FAQ対応',
        '勤怠・休暇管理支援'
      ],
      icon: '👥'
    }
  ];

  const customCapabilities = [
    '業界固有の知識ベース構築',
    '既存システムとのAPI連携',
    '社内用語・フローの学習',
    'セキュリティ要件への対応',
    'オンプレミス展開オプション',
    '継続的な改善・チューニング'
  ];

  const integrations = ['Slack', 'Microsoft Teams', 'LINE WORKS', 'Chatwork', 'Salesforce', 'kintone', 'Google Workspace', 'Office 365'];

  return (
    <main>
      <Header lang="ja" />

      {/* Hero Section */}
      <section className="koda-hero">
        <div className="koda-hero-container">
          <span className="koda-badge">KODA PRODUCT</span>
          <h1>KODA Assist</h1>
          <p className="koda-hero-subtitle">Custom AI Workers</p>
          <p className="koda-hero-description">
            日本のビジネス文化を理解した、目的特化型AIアシスタント。
            定型業務を自動化し、人材を本質的な業務に集中させます。
          </p>
          <div className="koda-hero-buttons">
            <Link href="/contact" className="koda-btn-primary">相談する</Link>
            <Link href="/contact" className="koda-btn-secondary">デモを見る</Link>
          </div>
        </div>
      </section>

      {/* Why Custom AI - Problem/Solution */}
      <section className="koda-problems">
        <div className="koda-problems-container">
          <h2 className="koda-section-title">なぜ専用AIアシスタントが必要か</h2>
          <div className="koda-problems-grid" style={{gridTemplateColumns: 'repeat(2, 1fr)'}}>
            <div className="koda-problem-card" style={{borderColor: '#dc2626'}}>
              <h3 style={{color: '#dc2626'}}>汎用AIツールの限界</h3>
              <ul style={{listStyle: 'none', padding: 0, margin: 0}}>
                <li style={{display: 'flex', alignItems: 'flex-start', gap: '8px', marginBottom: '8px'}}>
                  <span style={{color: '#dc2626'}}>✗</span>
                  <span>日本語ビジネス文化を理解していない</span>
                </li>
                <li style={{display: 'flex', alignItems: 'flex-start', gap: '8px', marginBottom: '8px'}}>
                  <span style={{color: '#dc2626'}}>✗</span>
                  <span>社内システムと連携できない</span>
                </li>
                <li style={{display: 'flex', alignItems: 'flex-start', gap: '8px', marginBottom: '8px'}}>
                  <span style={{color: '#dc2626'}}>✗</span>
                  <span>業界・自社固有の知識がない</span>
                </li>
                <li style={{display: 'flex', alignItems: 'flex-start', gap: '8px'}}>
                  <span style={{color: '#dc2626'}}>✗</span>
                  <span>機密データを外部に送信してしまう</span>
                </li>
              </ul>
            </div>
            <div className="koda-problem-card" style={{borderColor: '#059669'}}>
              <h3 style={{color: '#059669'}}>KODA Assistの強み</h3>
              <ul style={{listStyle: 'none', padding: 0, margin: 0}}>
                <li style={{display: 'flex', alignItems: 'flex-start', gap: '8px', marginBottom: '8px'}}>
                  <span style={{color: '#059669'}}>✓</span>
                  <span>日本語敬語・ビジネスマナー完全対応</span>
                </li>
                <li style={{display: 'flex', alignItems: 'flex-start', gap: '8px', marginBottom: '8px'}}>
                  <span style={{color: '#059669'}}>✓</span>
                  <span>既存システムとシームレス連携</span>
                </li>
                <li style={{display: 'flex', alignItems: 'flex-start', gap: '8px', marginBottom: '8px'}}>
                  <span style={{color: '#059669'}}>✓</span>
                  <span>自社データで学習・カスタマイズ</span>
                </li>
                <li style={{display: 'flex', alignItems: 'flex-start', gap: '8px'}}>
                  <span style={{color: '#059669'}}>✓</span>
                  <span>日本国内でデータ処理、オンプレ可</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Assistant Types */}
      <section className="koda-features">
        <div className="koda-features-container">
          <h2 className="koda-section-title">標準アシスタント</h2>
          <div className="koda-features-grid" style={{gridTemplateColumns: 'repeat(2, 1fr)'}}>
            {assistants.map((assistant) => (
              <div key={assistant.id} className="koda-feature-card">
                <div style={{display: 'flex', alignItems: 'flex-start', gap: '16px', marginBottom: '16px'}}>
                  <div className="koda-feature-icon" style={{marginBottom: 0}}>{assistant.icon}</div>
                  <div>
                    <h3 style={{marginBottom: '8px'}}>{assistant.name}</h3>
                    <p style={{margin: 0}}>{assistant.description}</p>
                  </div>
                </div>
                <ul style={{display: 'grid', gridTemplateColumns: 'repeat(2, 1fr)', gap: '8px', listStyle: 'none', padding: 0, margin: 0}}>
                  {assistant.features.map((feature, idx) => (
                    <li key={idx} style={{display: 'flex', alignItems: 'center', gap: '8px', fontSize: '13px', color: '#525252'}}>
                      <span style={{width: '6px', height: '6px', background: '#1e3a5f', borderRadius: '50%', flexShrink: 0}}></span>
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
          <h2>カスタム開発</h2>
          <p style={{color: '#94b8d8', marginBottom: '32px'}}>
            標準アシスタントで対応できないニーズにも、カスタム開発で対応します。
          </p>
          <div style={{display: 'grid', gridTemplateColumns: 'repeat(2, 1fr)', gap: '16px', maxWidth: '700px', margin: '0 auto'}}>
            {customCapabilities.map((capability, idx) => (
              <div key={idx} style={{display: 'flex', alignItems: 'center', gap: '12px', background: 'rgba(255,255,255,0.1)', padding: '16px', borderRadius: '12px'}}>
                <span style={{color: '#94b8d8'}}>→</span>
                <span>{capability}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Integration */}
      <section className="koda-scenarios">
        <div className="koda-scenarios-container">
          <h2 className="koda-section-title">連携可能なシステム</h2>
          <div className="koda-scenarios-grid">
            {integrations.map((system, idx) => (
              <div key={idx} className="koda-scenario-tag">{system}</div>
            ))}
          </div>
          <p className="koda-scenarios-note">その他のシステムもAPI経由で連携可能です</p>
        </div>
      </section>

      {/* Pricing */}
      <section className="koda-pricing">
        <div className="koda-pricing-container">
          <h2 className="koda-section-title">料金</h2>
          <div className="koda-pricing-grid">
            <div className="koda-price-card">
              <h3>標準アシスタント</h3>
              <p className="koda-price-amount">¥100,000<span>/月〜</span></p>
              <ul className="koda-price-features">
                <li>選択したBotタイプ1種</li>
                <li>基本カスタマイズ</li>
                <li>主要システム連携</li>
                <li>メールサポート</li>
              </ul>
              <Link href="/contact" className="koda-price-btn koda-price-btn-outline">お問い合わせ</Link>
            </div>
            <div className="koda-price-card recommended">
              <span className="koda-price-badge">RECOMMENDED</span>
              <h3>カスタム開発</h3>
              <p className="koda-price-amount">¥300,000<span>/月〜</span></p>
              <ul className="koda-price-features">
                <li>完全カスタム設計</li>
                <li>自社データ学習</li>
                <li>任意システム連携</li>
                <li>オンプレミス対応可</li>
                <li>専任担当者</li>
              </ul>
              <Link href="/contact" className="koda-price-btn koda-price-btn-solid">相談する</Link>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="koda-cta">
        <div className="koda-cta-container">
          <h2>あなたの業務に最適なAIアシスタントを</h2>
          <p>まずはお気軽にご相談ください。最適なソリューションをご提案します。</p>
          <div className="koda-cta-buttons">
            <Link href="/contact" className="koda-cta-btn-primary">無料相談</Link>
            <Link href="/products" className="koda-cta-btn-secondary">他の製品を見る</Link>
          </div>
        </div>
      </section>

      <Footer lang="ja" />
    </main>
  );
}
