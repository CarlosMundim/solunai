'use client';

import React from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import Link from 'next/link';
import '@/components/KodaProduct.css';

export default function TrainingPage() {
  const features = [
    {
      icon: '🎯',
      title: 'アダプティブ・ラーニング',
      description: '学習者一人ひとりの理解度・進捗に合わせて、AIが最適な学習コンテンツと難易度を自動調整。'
    },
    {
      icon: '🤖',
      title: 'AIチューター',
      description: '24時間対応のAIチューターが質問に回答し、理解を深めるためのヒントを提供。'
    },
    {
      icon: '📊',
      title: 'スキルギャップ分析',
      description: '現在のスキルレベルと目標のギャップを可視化。効率的な学習計画を自動生成。'
    },
    {
      icon: '✅',
      title: 'コンプライアンス研修',
      description: '法改正に対応した最新のコンプライアンス研修を自動更新。受講状況も一元管理。'
    },
    {
      icon: '🏆',
      title: 'ゲーミフィケーション',
      description: 'バッジ、ランキング、チャレンジなどで学習意欲を維持。継続率を大幅向上。'
    },
    {
      icon: '📈',
      title: '効果測定',
      description: '研修効果をデータで可視化。ROI分析、スキル向上度、行動変容の追跡が可能。'
    }
  ];

  const modules = [
    'ビジネススキル',
    'リーダーシップ',
    'コンプライアンス',
    'IT・デジタル',
    '語学研修',
    'マネジメント',
    '営業スキル',
    'カスタム研修'
  ];

  return (
    <main>
      <Header lang="ja" />

      {/* Hero Section */}
      <section className="koda-hero">
        <div className="koda-hero-container">
          <span className="koda-badge">KODA PRODUCT</span>
          <h1>KODA Training</h1>
          <p className="koda-hero-subtitle">AI-Enhanced Corporate Learning</p>
          <p className="koda-hero-description">
            AIが一人ひとりに最適化された学習体験を提供。
            企業研修の効果を最大化し、人材育成を加速します。
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
          <h2 className="koda-section-title">企業研修の課題を解決</h2>
          <div className="koda-problems-grid">
            <div className="koda-problem-card" style={{borderColor: '#dc2626'}}>
              <h3 style={{color: '#dc2626'}}>画一的な研修</h3>
              <p>同じ内容を全員に提供。理解度に差があっても進度は同じ。効果測定が困難。</p>
            </div>
            <div className="koda-problem-card" style={{borderColor: '#ea580c'}}>
              <h3 style={{color: '#ea580c'}}>低い継続率</h3>
              <p>eラーニングの完了率は平均30%以下。忙しい業務の合間に学習時間を確保できない。</p>
            </div>
            <div className="koda-problem-card" style={{borderColor: '#059669'}}>
              <h3 style={{color: '#059669'}}>KODA Training</h3>
              <p>AIが個人に最適化。短時間で効果的に学習。ゲーミフィケーションで継続率80%以上。</p>
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

      {/* Learning Modules */}
      <section className="koda-scenarios">
        <div className="koda-scenarios-container">
          <h2 className="koda-section-title">学習モジュール</h2>
          <div className="koda-scenarios-grid">
            {modules.map((module, idx) => (
              <div key={idx} className="koda-scenario-tag">{module}</div>
            ))}
          </div>
          <p className="koda-scenarios-note">※ 企業独自のカスタム研修も作成可能です</p>
        </div>
      </section>

      {/* Pricing */}
      <section className="koda-pricing">
        <div className="koda-pricing-container">
          <h2 className="koda-section-title">料金</h2>
          <div className="koda-pricing-grid">
            <div className="koda-price-card">
              <h3>スタンダード</h3>
              <p className="koda-price-amount">¥150,000<span>/月</span></p>
              <ul className="koda-price-features">
                <li>100ユーザーまで</li>
                <li>標準研修モジュール</li>
                <li>進捗レポート</li>
                <li>メールサポート</li>
              </ul>
              <Link href="/contact" className="koda-price-btn koda-price-btn-outline">お問い合わせ</Link>
            </div>
            <div className="koda-price-card recommended">
              <span className="koda-price-badge">RECOMMENDED</span>
              <h3>エンタープライズ</h3>
              <p className="koda-price-amount">¥400,000<span>/月〜</span></p>
              <ul className="koda-price-features">
                <li>無制限ユーザー</li>
                <li>カスタム研修作成</li>
                <li>LMS連携</li>
                <li>効果分析レポート</li>
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
          <h2>企業研修をAIでアップグレードしませんか？</h2>
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
