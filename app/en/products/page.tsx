'use client';

import React from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import Link from 'next/link';

export default function KodaProductsPageEN() {
  const applications = [
    {
      id: 'medcomm',
      name: 'KODA MedComm',
      tagline: 'Medical Communication Training',
      description: 'Train medical students and healthcare professionals in patient communication using AI virtual patients. Available 24/7 with detailed performance analytics and feedback.',
      features: [
        'Virtual patient dialogue practice',
        'Expert digital twin guidance',
        'Automated assessment system',
        'Japanese healthcare context scenarios'
      ],
      href: '/en/products/medcomm'
    },
    {
      id: 'docintel',
      name: 'KODA DocIntel',
      tagline: 'Intelligent Document Processing',
      description: 'AI system that reads, understands, and processes Japanese business documents. From OCR recognition to data extraction and workflow automation in one integrated solution.',
      features: [
        'Japanese document OCR and comprehension',
        'Structured data extraction',
        'Business workflow automation',
        'Document classification and routing'
      ],
      href: '/en/products/docintel'
    },
    {
      id: 'assist',
      name: 'KODA Assist',
      tagline: 'Custom AI Workers',
      description: 'Purpose-built AI assistants for specific business functions. Secretary tasks, analysis work, customer support - all designed with Japanese business practices in mind.',
      features: [
        'Secretary: Meeting notes, scheduling',
        'Analyst: Document analysis, reporting',
        'Customer Support: Japanese-aware service',
        'Custom: Built for your specific needs'
      ],
      href: '/en/products/assist'
    },
    {
      id: 'cultural',
      name: 'KODA Cultural',
      tagline: 'Cross-Cultural Intelligence',
      description: 'AI-powered cultural intelligence for global business. Navigate Japanese business etiquette, communication styles, and cultural nuances with confidence.',
      features: [
        'Japanese business etiquette training',
        'Cross-cultural communication coaching',
        'Real-time cultural context insights',
        'Global team collaboration tools'
      ],
      href: '/en/products/cultural'
    },
    {
      id: 'training',
      name: 'KODA Training',
      tagline: 'AI-Enhanced Corporate Learning',
      description: 'Transform corporate training with AI-powered adaptive learning. Personalized skill development, competency tracking, and performance analytics for your organization.',
      features: [
        'Adaptive learning paths',
        'AI tutors and mentors',
        'Skill gap analysis',
        'Compliance training automation'
      ],
      href: '/en/products/training'
    },
    {
      id: 'instructry',
      name: 'KODA Instructry',
      tagline: 'Industrial Knowledge Management',
      description: 'Capture and transfer expert knowledge in manufacturing and industrial settings. Preserve decades of expertise before retirement and accelerate skills transfer.',
      features: [
        'Expert tacit knowledge capture',
        'Visual work instruction generation',
        'Troubleshooting AI assistants',
        'Skills transfer acceleration'
      ],
      href: '/en/products/instructry'
    }
  ];

  const sceCapabilities = [
    {
      title: 'Semantic Understanding',
      description: 'Deep comprehension of meaning, context, and nuance in Japanese and English'
    },
    {
      title: 'Cultural Intelligence',
      description: 'Built-in awareness of Japanese business culture, etiquette, and norms'
    },
    {
      title: 'Multi-Modal Processing',
      description: 'Text, voice, image, and document processing in unified framework'
    },
    {
      title: 'Enterprise Security',
      description: 'Japan data residency, end-to-end encryption, ISMS compliance ready'
    }
  ];

  return (
    <main className="min-h-screen bg-neutral-50">
      <Header lang="en" />

      {/* Hero Section */}
      <section className="bg-white">
        <div className="mx-auto max-w-5xl px-6 py-16 md:px-8 md:py-20">
          <p className="text-xs font-semibold uppercase tracking-[0.2em] text-sky-700">
            KODA PRODUCT LINE
          </p>
          <h1 className="mt-4 text-2xl font-bold text-neutral-900 md:text-3xl lg:text-4xl" style={{ lineHeight: '1.4' }}>
            AI Solutions for Japanese Enterprise
          </h1>
          <p className="mt-6 max-w-3xl text-base leading-relaxed text-neutral-700 md:text-lg" style={{ lineHeight: '1.8' }}>
            KODA is a suite of AI products optimized for the Japanese market.
            From medical education to document processing, corporate training, and knowledge transfer - solutions that deeply understand Japanese language and business culture.
          </p>
          <ul className="mt-6 space-y-2 text-sm text-neutral-600 md:text-base">
            <li className="flex items-start gap-2">
              <span className="mt-1 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-sky-600" />
              Designed specifically for Japanese language and culture
            </li>
            <li className="flex items-start gap-2">
              <span className="mt-1 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-sky-600" />
              Pricing accessible to small and medium enterprises
            </li>
            <li className="flex items-start gap-2">
              <span className="mt-1 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-sky-600" />
              Academically validated, research-backed AI
            </li>
          </ul>
        </div>
      </section>

      {/* Value Bar */}
      <section className="border-y border-neutral-200 bg-neutral-100">
        <div className="mx-auto grid max-w-5xl grid-cols-2 gap-4 px-6 py-8 md:grid-cols-4 md:px-8">
          {[
            { label: 'Languages', value: 'Japanese & English' },
            { label: 'Product Line', value: '6 Products' },
            { label: 'Data Storage', value: 'Japan-Based' },
            { label: 'Academic Partners', value: 'Global Universities' },
          ].map((item) => (
            <div key={item.label} className="rounded-2xl border border-neutral-200 bg-white px-4 py-4 shadow-sm transition-all hover:border-sky-200 hover:shadow-md">
              <p className="text-xs text-neutral-500">{item.label}</p>
              <p className="mt-1 text-lg font-semibold text-neutral-900">{item.value}</p>
            </div>
          ))}
        </div>
      </section>

      {/* SCE Engine Section */}
      <section className="bg-gradient-to-br from-slate-800 to-slate-900 py-16 md:py-20">
        <div className="mx-auto max-w-5xl px-6 md:px-8">
          <div className="mb-8 flex items-center gap-3">
            <div className="h-1 w-12 rounded-full bg-sky-400" />
            <span className="text-sm font-semibold uppercase tracking-wider text-sky-300">
              CORE TECHNOLOGY
            </span>
          </div>
          <h2 className="text-2xl font-bold text-white md:text-3xl" style={{ lineHeight: '1.4' }}>
            KODA SCE Engine
          </h2>
          <p className="mt-2 text-sky-200">Semantic Computing Engine</p>
          <p className="mt-6 max-w-3xl text-base leading-relaxed text-slate-300 md:text-lg" style={{ lineHeight: '1.8' }}>
            The foundation of all KODA products. Our proprietary Semantic Computing Engine powers deep language understanding, cultural context awareness, and intelligent automation across the entire KODA ecosystem.
          </p>
          <div className="mt-10 grid gap-6 md:grid-cols-2 lg:grid-cols-4">
            {sceCapabilities.map((cap) => (
              <div key={cap.title} className="rounded-2xl bg-slate-700/50 p-6 transition-all hover:bg-slate-700/70">
                <h4 className="font-semibold text-white" style={{ lineHeight: '1.5' }}>{cap.title}</h4>
                <p className="mt-2 text-sm leading-relaxed text-slate-300" style={{ lineHeight: '1.7' }}>{cap.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why KODA Section */}
      <section className="bg-white py-16 md:py-20">
        <div className="mx-auto max-w-5xl px-6 md:px-8">
          <div className="mb-8 flex items-center gap-3">
            <div className="h-1 w-12 rounded-full bg-sky-600" />
            <span className="text-sm font-semibold uppercase tracking-wider text-sky-700">
              WHY KODA
            </span>
          </div>
          <h2 className="text-2xl font-bold text-neutral-900 md:text-3xl" style={{ lineHeight: '1.4' }}>
            Why Choose KODA
          </h2>
          <div className="mt-8 grid gap-6 md:grid-cols-2 lg:grid-cols-4">
            {[
              { title: 'Japan First', desc: 'AI designed for Japanese language, culture, and business practices' },
              { title: 'Academic Credibility', desc: 'Research partnerships with global universities and experts' },
              { title: 'SME Pricing', desc: 'Accessible pricing for small and medium enterprises' },
              { title: 'Customizable', desc: 'Flexible solutions adapted to your specific needs' },
            ].map((item) => (
              <div key={item.title} className="rounded-2xl border border-neutral-200 bg-neutral-50 p-6 transition-all hover:border-sky-200 hover:shadow-md">
                <h4 className="font-semibold text-neutral-900" style={{ lineHeight: '1.5' }}>{item.title}</h4>
                <p className="mt-2 text-sm text-neutral-600" style={{ lineHeight: '1.8' }}>{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Applications Grid */}
      <section className="bg-neutral-50 py-16 md:py-20">
        <div className="mx-auto max-w-6xl px-6 md:px-8">
          <div className="mb-8 flex items-center gap-3">
            <div className="h-1 w-12 rounded-full bg-sky-600" />
            <span className="text-sm font-semibold uppercase tracking-wider text-sky-700">
              PRODUCT LINEUP
            </span>
          </div>
          <h2 className="text-2xl font-bold text-neutral-900 md:text-3xl" style={{ lineHeight: '1.4' }}>
            KODA Applications
          </h2>
          <p className="mt-4 max-w-2xl text-base text-neutral-600" style={{ lineHeight: '1.8' }}>
            Six AI solutions for different business challenges. Each can be deployed independently or combined as needed.
          </p>
          <div className="mt-10 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {applications.map((product) => (
              <div
                key={product.id}
                className="flex flex-col rounded-2xl border border-neutral-200 bg-white p-6 shadow-sm transition-all hover:border-sky-200 hover:shadow-md md:p-8"
              >
                <h3 className="text-lg font-semibold text-neutral-900" style={{ lineHeight: '1.5' }}>
                  {product.name}
                </h3>
                <p className="mt-1 text-sm font-medium text-sky-700">{product.tagline}</p>
                <p className="mt-3 flex-grow text-sm text-neutral-600" style={{ lineHeight: '1.8' }}>
                  {product.description}
                </p>
                <div className="mt-4 space-y-1.5">
                  {product.features.slice(0, 3).map((feature, idx) => (
                    <div key={idx} className="flex items-start gap-2 text-sm text-neutral-500">
                      <span className="mt-1.5 h-1 w-1 flex-shrink-0 rounded-full bg-sky-600" />
                      {feature}
                    </div>
                  ))}
                </div>
                <div className="mt-6 border-t border-neutral-100 pt-4">
                  <Link
                    href={product.href}
                    className="inline-flex items-center text-sm font-medium text-sky-700 hover:text-sky-800"
                  >
                    Learn more
                    <svg className="ml-1 h-4 w-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                    </svg>
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Target Customers */}
      <section className="bg-white py-16 md:py-20">
        <div className="mx-auto max-w-5xl px-6 md:px-8">
          <div className="mb-8 flex items-center gap-3">
            <div className="h-1 w-12 rounded-full bg-sky-600" />
            <span className="text-sm font-semibold uppercase tracking-wider text-sky-700">
              TARGET CUSTOMERS
            </span>
          </div>
          <h2 className="text-2xl font-bold text-neutral-900 md:text-3xl" style={{ lineHeight: '1.4' }}>
            Organizations Using KODA
          </h2>
          <div className="mt-8 grid gap-6 md:grid-cols-3">
            <div className="rounded-2xl border-l-4 border-sky-600 bg-neutral-50 p-6">
              <h4 className="font-semibold text-neutral-900" style={{ lineHeight: '1.5' }}>Medical Education</h4>
              <ul className="mt-3 space-y-2 text-sm text-neutral-600">
                <li className="flex items-start gap-2">
                  <span className="mt-1.5 h-1 w-1 flex-shrink-0 rounded-full bg-sky-600" />
                  Medical Schools (82 in Japan)
                </li>
                <li className="flex items-start gap-2">
                  <span className="mt-1.5 h-1 w-1 flex-shrink-0 rounded-full bg-sky-600" />
                  Teaching Hospitals
                </li>
                <li className="flex items-start gap-2">
                  <span className="mt-1.5 h-1 w-1 flex-shrink-0 rounded-full bg-sky-600" />
                  Nursing Schools
                </li>
              </ul>
            </div>
            <div className="rounded-2xl border-l-4 border-emerald-600 bg-neutral-50 p-6">
              <h4 className="font-semibold text-neutral-900" style={{ lineHeight: '1.5' }}>Healthcare Providers</h4>
              <ul className="mt-3 space-y-2 text-sm text-neutral-600">
                <li className="flex items-start gap-2">
                  <span className="mt-1.5 h-1 w-1 flex-shrink-0 rounded-full bg-emerald-600" />
                  Hospitals
                </li>
                <li className="flex items-start gap-2">
                  <span className="mt-1.5 h-1 w-1 flex-shrink-0 rounded-full bg-emerald-600" />
                  Clinics
                </li>
                <li className="flex items-start gap-2">
                  <span className="mt-1.5 h-1 w-1 flex-shrink-0 rounded-full bg-emerald-600" />
                  Care Facilities
                </li>
              </ul>
            </div>
            <div className="rounded-2xl border-l-4 border-violet-600 bg-neutral-50 p-6">
              <h4 className="font-semibold text-neutral-900" style={{ lineHeight: '1.5' }}>SMEs</h4>
              <ul className="mt-3 space-y-2 text-sm text-neutral-600">
                <li className="flex items-start gap-2">
                  <span className="mt-1.5 h-1 w-1 flex-shrink-0 rounded-full bg-violet-600" />
                  Consulting Firms
                </li>
                <li className="flex items-start gap-2">
                  <span className="mt-1.5 h-1 w-1 flex-shrink-0 rounded-full bg-violet-600" />
                  Professional Services
                </li>
                <li className="flex items-start gap-2">
                  <span className="mt-1.5 h-1 w-1 flex-shrink-0 rounded-full bg-violet-600" />
                  Manufacturing
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-gradient-to-br from-sky-700 to-sky-900 py-16 md:py-20">
        <div className="mx-auto max-w-3xl px-6 text-center md:px-8">
          <h2 className="text-2xl font-bold text-white md:text-3xl" style={{ lineHeight: '1.4' }}>
            Transform Your Business with KODA
          </h2>
          <p className="mt-4 text-base leading-relaxed text-sky-100 md:text-lg" style={{ lineHeight: '1.8' }}>
            Start with a free consultation. Tell us about your challenges and we will recommend the right solution for your organization.
          </p>
          <div className="mt-8 flex flex-col items-center gap-4 sm:flex-row sm:justify-center">
            <Link
              href="/en/contact"
              className="inline-flex items-center gap-2 rounded-lg bg-white px-8 py-4 text-base font-semibold text-sky-700 transition-all hover:bg-sky-50 hover:shadow-lg"
            >
              Contact Us
              <svg className="h-5 w-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </Link>
            <Link
              href="/en/contact"
              className="inline-flex items-center gap-2 rounded-lg border-2 border-white/30 px-8 py-4 text-base font-semibold text-white transition-all hover:bg-white/10"
            >
              Request a Demo
            </Link>
          </div>
        </div>
      </section>

      <Footer lang="en" />
    </main>
  );
}
