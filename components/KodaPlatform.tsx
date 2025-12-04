'use client';

import React from 'react';
import Link from 'next/link';
import './KodaPlatform.css';

interface KodaPlatformProps {
  lang: 'ja' | 'en';
}

const KodaPlatform: React.FC<KodaPlatformProps> = ({ lang }) => {
  const content = {
    ja: {
      badge: 'KODA PLATFORM',
      title: 'KODA：日本企業のためのAIエンジン',
      subtitle: '一つのエンジン、無限の可能性',
      description: '日本語・日本文化・日本のビジネス慣習を深く理解するAIエンジン「KODA SCE」を核に、様々な業務課題を解決するアプリケーションを展開しています。',
      engine: {
        name: 'KODA SCE Engine',
        tagline: 'Semantic Computing Engine',
        description: '全てのKODA製品を支える頭脳。日本語の微妙なニュアンス、敬語の使い分け、業界特有の専門用語まで理解します。',
        capabilities: [
          { icon: '🧠', title: '意味理解', desc: '文脈を読み取る深い理解力' },
          { icon: '🎌', title: '文化知性', desc: '日本のビジネス文化に精通' },
          { icon: '🔄', title: 'マルチモーダル', desc: 'テキスト・音声・画像を統合処理' },
          { icon: '🔐', title: 'セキュリティ', desc: '国内データセンター・暗号化' }
        ]
      },
      applications: [
        { id: 'medcomm', name: 'MedComm', desc: '医療コミュニケーション教育', icon: '🏥', highlight: true },
        { id: 'docintel', name: 'DocIntel', desc: '文書処理・理解', icon: '📄', highlight: false },
        { id: 'assist', name: 'Assist', desc: 'カスタムAIアシスタント', icon: '🤖', highlight: false },
        { id: 'cultural', name: 'Cultural', desc: '異文化コミュニケーション', icon: '🌏', highlight: false },
        { id: 'training', name: 'Training', desc: '企業研修・人材育成', icon: '🎓', highlight: false },
        { id: 'instructry', name: 'Instructry', desc: '技能継承・ナレッジ管理', icon: '🏭', highlight: false }
      ],
      cta: '製品一覧を見る',
      ctaSecondary: '無料相談'
    },
    en: {
      badge: 'KODA PLATFORM',
      title: 'KODA: AI Engine for Japanese Business',
      subtitle: 'One Engine, Infinite Possibilities',
      description: 'Built on the KODA SCE engine that deeply understands Japanese language, culture, and business practices, we offer a suite of applications solving diverse business challenges.',
      engine: {
        name: 'KODA SCE Engine',
        tagline: 'Semantic Computing Engine',
        description: 'The brain powering all KODA products. Understands subtle Japanese nuances, honorific usage, and industry-specific terminology.',
        capabilities: [
          { icon: '🧠', title: 'Semantic Understanding', desc: 'Deep contextual comprehension' },
          { icon: '🎌', title: 'Cultural Intelligence', desc: 'Japanese business culture aware' },
          { icon: '🔄', title: 'Multi-Modal', desc: 'Text, voice, image processing' },
          { icon: '🔐', title: 'Enterprise Security', desc: 'Japan data residency, encrypted' }
        ]
      },
      applications: [
        { id: 'medcomm', name: 'MedComm', desc: 'Medical Communication Training', icon: '🏥', highlight: true },
        { id: 'docintel', name: 'DocIntel', desc: 'Document Processing', icon: '📄', highlight: false },
        { id: 'assist', name: 'Assist', desc: 'Custom AI Assistants', icon: '🤖', highlight: false },
        { id: 'cultural', name: 'Cultural', desc: 'Cross-Cultural Intelligence', icon: '🌏', highlight: false },
        { id: 'training', name: 'Training', desc: 'Corporate Learning', icon: '🎓', highlight: false },
        { id: 'instructry', name: 'Instructry', desc: 'Industrial Knowledge', icon: '🏭', highlight: false }
      ],
      cta: 'View All Products',
      ctaSecondary: 'Free Consultation'
    }
  };

  const c = content[lang];

  return (
    <section className="koda-platform-section">
      <div className="koda-platform-container">
        {/* Header */}
        <div className="koda-platform-header">
          <span className="koda-platform-badge">{c.badge}</span>
          <h2 className="koda-platform-title">{c.title}</h2>
          <p className="koda-platform-subtitle">{c.subtitle}</p>
          <p className="koda-platform-description">{c.description}</p>
        </div>

        {/* Engine Core */}
        <div className="koda-engine-core">
          <div className="koda-engine-visual">
            <div className="koda-engine-brain">
              <span className="brain-icon">🧠</span>
              <div className="koda-engine-info">
                <h3>{c.engine.name}</h3>
                <p className="engine-tagline">{c.engine.tagline}</p>
              </div>
            </div>
            <p className="koda-engine-description">{c.engine.description}</p>

            {/* Capabilities */}
            <div className="koda-engine-capabilities">
              {c.engine.capabilities.map((cap, idx) => (
                <div key={idx} className="koda-capability">
                  <span className="capability-icon">{cap.icon}</span>
                  <div className="capability-text">
                    <strong>{cap.title}</strong>
                    <span>{cap.desc}</span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Connection Lines Visual */}
        <div className="koda-connection">
          <div className="connection-line"></div>
          <span className="connection-label">{lang === 'ja' ? 'アプリケーション' : 'Applications'}</span>
          <div className="connection-line"></div>
        </div>

        {/* Applications Grid */}
        <div className="koda-applications-grid">
          {c.applications.map((app) => (
            <Link
              key={app.id}
              href={`/products/${app.id}`}
              className={`koda-app-card ${app.highlight ? 'flagship' : ''}`}
            >
              <span className="app-icon">{app.icon}</span>
              <div className="app-info">
                <h4>KODA {app.name}</h4>
                <p>{app.desc}</p>
              </div>
              {app.highlight && <span className="flagship-badge">FLAGSHIP</span>}
            </Link>
          ))}
        </div>

        {/* CTA */}
        <div className="koda-platform-cta">
          <Link href="/products" className="koda-cta-primary">{c.cta}</Link>
          <Link href="/contact" className="koda-cta-secondary">{c.ctaSecondary}</Link>
        </div>
      </div>
    </section>
  );
};

export default KodaPlatform;
