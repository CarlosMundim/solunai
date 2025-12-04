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
      tagline: 'AI-Powered Medical Communication Training',
      description: 'Train medical students and healthcare professionals in patient communication with AI virtual patients. 24/7 availability, consistent quality, detailed analytics.',
      features: [
        'Virtual patients for communication practice',
        'Expert digital twins for guidance',
        'Automated assessment engine',
        'Culturally-appropriate Japanese scenarios'
      ],
      price: 'From ¥300,000/year',
      icon: '🏥',
      highlight: true,
      href: '/products/medcomm'
    },
    {
      id: 'docintel',
      name: 'KODA DocIntel',
      tagline: 'Intelligent Document Processing',
      description: 'AI system that reads, understands, and acts on Japanese business documents. OCR with deep comprehension, data extraction, and workflow automation.',
      features: [
        'Japanese document OCR + understanding',
        'Structured data extraction',
        'Workflow automation',
        'Classification and routing'
      ],
      price: 'From ¥50,000/month',
      icon: '📄',
      highlight: false,
      href: '/products/docintel'
    },
    {
      id: 'assist',
      name: 'KODA Assist',
      tagline: 'Custom AI Workers',
      description: 'Purpose-built AI assistants for specific business functions. Secretary bots, analyst bots, customer service bots - all optimized for Japanese business context.',
      features: [
        'Secretary: Transcription, scheduling, notes',
        'Analyst: Document analysis, reporting',
        'Customer Service: Japanese-aware support',
        'Custom: Built for your needs'
      ],
      price: 'From ¥100,000/month',
      icon: '🤖',
      highlight: false,
      href: '/products/assist'
    },
    {
      id: 'cultural',
      name: 'KODA Cultural',
      tagline: 'Cross-Cultural Intelligence Platform',
      description: 'AI-powered cultural intelligence for global business. Navigate Japanese business etiquette, communication styles, and cultural nuances with confidence.',
      features: [
        'Japanese business etiquette training',
        'Cross-cultural communication coaching',
        'Real-time cultural context insights',
        'Global team collaboration tools'
      ],
      price: 'From ¥80,000/month',
      icon: '🌏',
      highlight: false,
      href: '/products/cultural'
    },
    {
      id: 'training',
      name: 'KODA Training',
      tagline: 'AI-Enhanced Corporate Learning',
      description: 'Transform corporate training with AI-powered adaptive learning. Personalized skill development, competency tracking, and performance analytics.',
      features: [
        'Adaptive learning paths',
        'AI tutors and mentors',
        'Skill gap analysis',
        'Compliance training automation'
      ],
      price: 'From ¥150,000/month',
      icon: '🎓',
      highlight: false,
      href: '/products/training'
    },
    {
      id: 'instructry',
      name: 'KODA Instructry',
      tagline: 'Industrial Knowledge Management',
      description: 'Capture and transfer expert knowledge in manufacturing and industrial settings. Preserve decades of expertise before retirement.',
      features: [
        'Expert knowledge capture',
        'Visual work instruction generation',
        'Troubleshooting AI assistants',
        'Skills transfer acceleration'
      ],
      price: 'From ¥200,000/month',
      icon: '🏭',
      highlight: false,
      href: '/products/instructry'
    }
  ];

  // KODA SCE Engine - Core AI Platform
  const sceEngine = {
    name: 'KODA SCE Engine',
    tagline: 'Semantic Computing Engine',
    description: 'The brain behind all KODA products. Our proprietary Semantic Computing Engine powers deep language understanding, cultural context awareness, and intelligent automation across the entire KODA ecosystem.',
    capabilities: [
      {
        title: 'Semantic Understanding',
        description: 'Deep comprehension of meaning, context, and nuance in Japanese and English',
        icon: '🧠'
      },
      {
        title: 'Cultural Intelligence',
        description: 'Built-in awareness of Japanese business culture, etiquette, and communication norms',
        icon: '🎌'
      },
      {
        title: 'Multi-Modal Processing',
        description: 'Text, voice, image, and document processing in unified framework',
        icon: '🔄'
      },
      {
        title: 'Enterprise Security',
        description: 'Japan data residency, end-to-end encryption, ISMS compliance ready',
        icon: '🔐'
      }
    ]
  };

  return (
    <main>
      <Header lang="ja" />

      {/* Hero Section */}
      <section className="koda-hero">
        <div className="koda-hero-container">
          <span className="koda-badge">KODA PRODUCT LINE</span>
          <h1>KODA製品ライン</h1>
          <p className="koda-hero-subtitle">AI Solutions for Japanese Enterprise</p>
          <p className="koda-hero-description">
            日本市場向けに最適化されたAIソリューション。
            医療教育から文書処理、企業研修まで、企業のDXを加速します。
          </p>
        </div>
      </section>

      {/* SCE Engine - The Brain */}
      <section className="koda-partnership">
        <div className="koda-partnership-container">
          <div style={{display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '16px', marginBottom: '16px'}}>
            <span style={{fontSize: '48px'}}>🧠</span>
            <h2 style={{margin: 0}}>{sceEngine.name}</h2>
          </div>
          <p className="koda-hero-subtitle" style={{marginBottom: '16px'}}>{sceEngine.tagline}</p>
          <p style={{color: '#c8d9e8', maxWidth: '800px', margin: '0 auto 40px', lineHeight: '1.7'}}>
            {sceEngine.description}
          </p>
          <div style={{display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: '24px', maxWidth: '1000px', margin: '0 auto'}}>
            {sceEngine.capabilities.map((cap, idx) => (
              <div key={idx} style={{background: 'rgba(255,255,255,0.1)', padding: '24px', borderRadius: '12px', textAlign: 'center'}}>
                <div style={{fontSize: '32px', marginBottom: '12px'}}>{cap.icon}</div>
                <h4 style={{color: '#fff', marginBottom: '8px', fontSize: '16px'}}>{cap.title}</h4>
                <p style={{color: '#94b8d8', fontSize: '13px', lineHeight: '1.5'}}>{cap.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why KODA */}
      <section className="koda-benefits">
        <div className="koda-benefits-container">
          <h2 className="koda-section-title">なぜKODAか</h2>
          <div className="koda-benefits-grid">
            <div className="koda-benefit-card">
              <div className="koda-benefit-metric" style={{fontSize: '32px'}}>🇯🇵</div>
              <p className="koda-benefit-label">日本ファースト<br/><span style={{fontSize: '12px', color: '#737373'}}>日本語・文化・慣習のために設計</span></p>
            </div>
            <div className="koda-benefit-card">
              <div className="koda-benefit-metric" style={{fontSize: '32px'}}>🎓</div>
              <p className="koda-benefit-label">学術的信頼性<br/><span style={{fontSize: '12px', color: '#737373'}}>世界的専門家との連携</span></p>
            </div>
            <div className="koda-benefit-card">
              <div className="koda-benefit-metric" style={{fontSize: '32px'}}>💰</div>
              <p className="koda-benefit-label">SME価格<br/><span style={{fontSize: '12px', color: '#737373'}}>中小企業でも導入可能</span></p>
            </div>
            <div className="koda-benefit-card">
              <div className="koda-benefit-metric" style={{fontSize: '32px'}}>🔧</div>
              <p className="koda-benefit-label">カスタマイズ可能<br/><span style={{fontSize: '12px', color: '#737373'}}>ニーズに合わせた柔軟対応</span></p>
            </div>
          </div>
        </div>
      </section>

      {/* Applications Grid */}
      <section className="koda-features">
        <div className="koda-features-container" style={{maxWidth: '1200px'}}>
          <h2 className="koda-section-title">KODA Applications</h2>
          <div className="koda-features-grid" style={{gridTemplateColumns: 'repeat(3, 1fr)'}}>
            {applications.map((product) => (
              <div
                key={product.id}
                className="koda-feature-card"
                style={{
                  border: product.highlight ? '2px solid #1e3a5f' : '1px solid #e5e5e5',
                  background: product.highlight ? '#f0f6fc' : '#fff',
                  position: 'relative'
                }}
              >
                {product.highlight && (
                  <span style={{
                    position: 'absolute',
                    top: '-12px',
                    left: '50%',
                    transform: 'translateX(-50%)',
                    background: '#1e3a5f',
                    color: '#fff',
                    padding: '4px 12px',
                    borderRadius: '12px',
                    fontSize: '11px',
                    fontWeight: 'bold'
                  }}>FLAGSHIP</span>
                )}
                <div className="koda-feature-icon">{product.icon}</div>
                <h3>{product.name}</h3>
                <p style={{color: '#1e3a5f', fontWeight: '500', marginBottom: '12px', fontSize: '14px'}}>{product.tagline}</p>
                <p style={{fontSize: '13px', marginBottom: '16px'}}>{product.description}</p>
                <div style={{marginBottom: '16px'}}>
                  {product.features.slice(0, 3).map((feature, idx) => (
                    <div key={idx} style={{display: 'flex', alignItems: 'center', gap: '8px', fontSize: '12px', color: '#525252', marginBottom: '4px'}}>
                      <span style={{width: '4px', height: '4px', background: '#1e3a5f', borderRadius: '50%'}}></span>
                      {feature}
                    </div>
                  ))}
                </div>
                <div style={{borderTop: '1px solid #e5e5e5', paddingTop: '16px', marginTop: 'auto'}}>
                  <p style={{fontWeight: 'bold', color: '#1e3a5f', marginBottom: '12px'}}>{product.price}</p>
                  <Link href={product.href} className="koda-price-btn koda-price-btn-solid" style={{display: 'block', textAlign: 'center'}}>
                    詳細を見る
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
          <h2 className="koda-section-title">対象顧客</h2>
          <div className="koda-problems-grid">
            <div className="koda-problem-card" style={{borderColor: '#1e3a5f'}}>
              <h3 style={{color: '#1e3a5f'}}>医療教育機関</h3>
              <ul style={{listStyle: 'none', padding: 0, margin: 0}}>
                <li style={{display: 'flex', alignItems: 'center', gap: '8px', marginBottom: '8px'}}>
                  <span style={{color: '#1e3a5f'}}>•</span> 医学部（全国82校）
                </li>
                <li style={{display: 'flex', alignItems: 'center', gap: '8px', marginBottom: '8px'}}>
                  <span style={{color: '#1e3a5f'}}>•</span> 教育病院
                </li>
                <li style={{display: 'flex', alignItems: 'center', gap: '8px', marginBottom: '8px'}}>
                  <span style={{color: '#1e3a5f'}}>•</span> 看護学校
                </li>
                <li style={{display: 'flex', alignItems: 'center', gap: '8px'}}>
                  <span style={{color: '#1e3a5f'}}>•</span> 医療団体
                </li>
              </ul>
            </div>
            <div className="koda-problem-card" style={{borderColor: '#059669'}}>
              <h3 style={{color: '#059669'}}>医療機関</h3>
              <ul style={{listStyle: 'none', padding: 0, margin: 0}}>
                <li style={{display: 'flex', alignItems: 'center', gap: '8px', marginBottom: '8px'}}>
                  <span style={{color: '#059669'}}>•</span> 病院
                </li>
                <li style={{display: 'flex', alignItems: 'center', gap: '8px', marginBottom: '8px'}}>
                  <span style={{color: '#059669'}}>•</span> クリニック
                </li>
                <li style={{display: 'flex', alignItems: 'center', gap: '8px'}}>
                  <span style={{color: '#059669'}}>•</span> 介護施設
                </li>
              </ul>
            </div>
            <div className="koda-problem-card" style={{borderColor: '#7c3aed'}}>
              <h3 style={{color: '#7c3aed'}}>中小企業</h3>
              <ul style={{listStyle: 'none', padding: 0, margin: 0}}>
                <li style={{display: 'flex', alignItems: 'center', gap: '8px', marginBottom: '8px'}}>
                  <span style={{color: '#7c3aed'}}>•</span> コンサルティング会社
                </li>
                <li style={{display: 'flex', alignItems: 'center', gap: '8px', marginBottom: '8px'}}>
                  <span style={{color: '#7c3aed'}}>•</span> 法律事務所
                </li>
                <li style={{display: 'flex', alignItems: 'center', gap: '8px', marginBottom: '8px'}}>
                  <span style={{color: '#7c3aed'}}>•</span> 会計事務所
                </li>
                <li style={{display: 'flex', alignItems: 'center', gap: '8px'}}>
                  <span style={{color: '#7c3aed'}}>•</span> 製造業
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="koda-cta">
        <div className="koda-cta-container">
          <h2>KODAで業務を変革しませんか？</h2>
          <p>無料相談・デモのお申し込みはこちらから</p>
          <div className="koda-cta-buttons">
            <Link href="/contact" className="koda-cta-btn-primary">お問い合わせ</Link>
            <Link href="/contact" className="koda-cta-btn-secondary">デモを試す</Link>
          </div>
        </div>
      </section>

      <Footer lang="ja" />
    </main>
  );
}
