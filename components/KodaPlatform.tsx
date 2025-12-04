'use client';

import React from 'react';
import Link from 'next/link';
import './KodaPlatform.css';

interface KodaPlatformProps {
  lang: 'ja' | 'en';
}

// Line-style SVG icons (Japanese B2B standard)
const Icons = {
  brain: (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
      <path d="M12 2a5 5 0 0 1 5 5c0 1.5-.5 2.5-1 3.5"/>
      <path d="M17 7a3 3 0 0 1 3 3c0 2-1.5 3-3 4"/>
      <path d="M12 2a5 5 0 0 0-5 5c0 1.5.5 2.5 1 3.5"/>
      <path d="M7 7a3 3 0 0 0-3 3c0 2 1.5 3 3 4"/>
      <path d="M12 22v-8"/>
      <path d="M9 14h6"/>
      <path d="M7 14c-1 2-1 4 0 6"/>
      <path d="M17 14c1 2 1 4 0 6"/>
    </svg>
  ),
  culture: (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
      <circle cx="12" cy="12" r="10"/>
      <path d="M12 2v20"/>
      <path d="M2 12h20"/>
      <path d="M4.93 4.93l14.14 14.14"/>
      <path d="M19.07 4.93L4.93 19.07"/>
    </svg>
  ),
  sync: (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
      <path d="M21 2v6h-6"/>
      <path d="M3 22v-6h6"/>
      <path d="M21 8A9 9 0 0 0 6 6l-3 3"/>
      <path d="M3 16a9 9 0 0 0 15 2l3-3"/>
    </svg>
  ),
  lock: (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
      <rect x="3" y="11" width="18" height="11" rx="2" ry="2"/>
      <path d="M7 11V7a5 5 0 0 1 10 0v4"/>
      <circle cx="12" cy="16" r="1"/>
    </svg>
  ),
  medical: (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
      <path d="M3 3h18v18H3z"/>
      <path d="M12 8v8"/>
      <path d="M8 12h8"/>
    </svg>
  ),
  document: (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
      <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"/>
      <polyline points="14 2 14 8 20 8"/>
      <line x1="16" y1="13" x2="8" y2="13"/>
      <line x1="16" y1="17" x2="8" y2="17"/>
      <line x1="10" y1="9" x2="8" y2="9"/>
    </svg>
  ),
  assistant: (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
      <rect x="3" y="4" width="18" height="12" rx="2"/>
      <path d="M8 20h8"/>
      <path d="M12 16v4"/>
      <circle cx="9" cy="10" r="1"/>
      <circle cx="15" cy="10" r="1"/>
    </svg>
  ),
  globe: (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
      <circle cx="12" cy="12" r="10"/>
      <path d="M2 12h20"/>
      <path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z"/>
    </svg>
  ),
  graduation: (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
      <path d="M22 10l-10-5L2 10l10 5 10-5z"/>
      <path d="M6 12v5c0 2 2.5 3 6 3s6-1 6-3v-5"/>
      <path d="M22 10v6"/>
    </svg>
  ),
  factory: (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
      <path d="M2 20h20"/>
      <path d="M5 20V8l4 4V8l4 4V4h6v16"/>
      <path d="M15 8h2"/>
      <path d="M15 12h2"/>
      <path d="M15 16h2"/>
    </svg>
  )
};

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
          { icon: 'brain', title: '意味理解', desc: '文脈を読み取る深い理解力' },
          { icon: 'culture', title: '文化知性', desc: '日本のビジネス文化に精通' },
          { icon: 'sync', title: 'マルチモーダル', desc: 'テキスト・音声・画像を統合処理' },
          { icon: 'lock', title: 'セキュリティ', desc: '国内データセンター・暗号化' }
        ]
      },
      applications: [
        { id: 'medcomm', name: 'MedComm', desc: '医療コミュニケーション教育', icon: 'medical', highlight: true },
        { id: 'docintel', name: 'DocIntel', desc: '文書処理・理解', icon: 'document', highlight: false },
        { id: 'assist', name: 'Assist', desc: 'カスタムAIアシスタント', icon: 'assistant', highlight: false },
        { id: 'cultural', name: 'Cultural', desc: '異文化コミュニケーション', icon: 'globe', highlight: false },
        { id: 'training', name: 'Training', desc: '企業研修・人材育成', icon: 'graduation', highlight: false },
        { id: 'instructry', name: 'Instructry', desc: '技能継承・ナレッジ管理', icon: 'factory', highlight: false }
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
          { icon: 'brain', title: 'Semantic Understanding', desc: 'Deep contextual comprehension' },
          { icon: 'culture', title: 'Cultural Intelligence', desc: 'Japanese business culture aware' },
          { icon: 'sync', title: 'Multi-Modal', desc: 'Text, voice, image processing' },
          { icon: 'lock', title: 'Enterprise Security', desc: 'Japan data residency, encrypted' }
        ]
      },
      applications: [
        { id: 'medcomm', name: 'MedComm', desc: 'Medical Communication Training', icon: 'medical', highlight: true },
        { id: 'docintel', name: 'DocIntel', desc: 'Document Processing', icon: 'document', highlight: false },
        { id: 'assist', name: 'Assist', desc: 'Custom AI Assistants', icon: 'assistant', highlight: false },
        { id: 'cultural', name: 'Cultural', desc: 'Cross-Cultural Intelligence', icon: 'globe', highlight: false },
        { id: 'training', name: 'Training', desc: 'Corporate Learning', icon: 'graduation', highlight: false },
        { id: 'instructry', name: 'Instructry', desc: 'Industrial Knowledge', icon: 'factory', highlight: false }
      ],
      cta: 'View All Products',
      ctaSecondary: 'Free Consultation'
    }
  };

  const c = content[lang];

  const getIcon = (iconName: string) => {
    return Icons[iconName as keyof typeof Icons] || Icons.brain;
  };

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
              <span className="brain-icon">{Icons.brain}</span>
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
                  <span className="capability-icon">{getIcon(cap.icon)}</span>
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
              <span className="app-icon">{getIcon(app.icon)}</span>
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
