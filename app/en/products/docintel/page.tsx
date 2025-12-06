'use client';

import React from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import Link from 'next/link';

export default function DocIntelPageEN() {
  const features = [
    {
      title: 'OCR + Document Understanding',
      description: 'High-accuracy reading of Japanese documents with contextual understanding, not just text extraction. Handles handwriting, old character forms, and complex layouts.'
    },
    {
      title: 'Data Extraction',
      description: 'Automatically extract structured data from invoices, contracts, applications, and more. Flexible handling regardless of format differences.'
    },
    {
      title: 'Workflow Automation',
      description: 'Automate document classification, routing, and approval flows. API integration with existing systems available.'
    },
    {
      title: 'Semantic Search',
      description: 'Search based on meaning understanding, not keyword matching. Supports natural language queries like "documents about last year\'s contract renewal."'
    },
    {
      title: 'Security',
      description: 'Japan data residency, end-to-end encryption, access logging, ISMS compliance capable.'
    },
    {
      title: 'Japanese Optimization',
      description: 'Accurate processing of Japanese-specific document formats including vertical text, Japanese era dates, and seal stamps.'
    }
  ];

  const useCases = [
    { title: 'Accounting & Finance', description: 'Invoice processing automation' },
    { title: 'Legal & Contracts', description: 'Contract management efficiency' },
    { title: 'HR & Admin', description: 'Application document processing' },
    { title: 'Manufacturing & QC', description: 'Technical document management' }
  ];

  return (
    <main className="min-h-screen bg-neutral-50">
      <Header lang="en" />

      {/* Hero Section */}
      <section className="bg-white">
        <div className="mx-auto max-w-5xl px-6 py-16 md:px-8 md:py-20">
          <p className="text-xs font-semibold uppercase tracking-[0.2em] text-sky-700">
            KODA DOCINTEL
          </p>
          <h1 className="mt-4 text-2xl font-bold text-neutral-900 md:text-3xl lg:text-4xl" style={{ lineHeight: '1.4' }}>
            Intelligent Document Processing
          </h1>
          <p className="mt-6 max-w-3xl text-base leading-relaxed text-neutral-700 md:text-lg" style={{ lineHeight: '1.8' }}>
            AI reads, understands, and automates processing of Japanese business documents. Free your team from manual data entry and focus on essential work.
          </p>
          <div className="mt-8 flex flex-col gap-4 sm:flex-row">
            <Link
              href="/en/contact"
              className="inline-flex items-center justify-center rounded-lg bg-sky-600 px-6 py-3 text-sm font-semibold text-white shadow-sm transition-colors hover:bg-sky-700"
            >
              Request Information
            </Link>
            <Link
              href="/en/contact"
              className="inline-flex items-center justify-center rounded-lg border border-neutral-300 bg-white px-6 py-3 text-sm font-semibold text-neutral-700 transition-colors hover:bg-neutral-50"
            >
              Request a Demo
            </Link>
          </div>
        </div>
      </section>

      {/* Problem/Solution Section */}
      <section className="bg-white py-16 md:py-20">
        <div className="mx-auto max-w-5xl px-6 md:px-8">
          <div className="mb-8 flex items-center gap-3">
            <div className="h-1 w-12 rounded-full bg-sky-600" />
            <span className="text-sm font-semibold uppercase tracking-wider text-sky-700">
              THE CHALLENGE
            </span>
          </div>
          <h2 className="text-2xl font-bold text-neutral-900 md:text-3xl" style={{ lineHeight: '1.4' }}>
            Buried in Paper and PDFs?
          </h2>
          <div className="mt-8 grid gap-6 md:grid-cols-2">
            <div className="rounded-2xl border-l-4 border-red-400 bg-neutral-50 p-6">
              <h4 className="font-semibold text-neutral-900" style={{ lineHeight: '1.5' }}>Current Challenges</h4>
              <ul className="mt-3 space-y-2 text-sm text-neutral-600" style={{ lineHeight: '1.8' }}>
                <li className="flex items-start gap-2">
                  <span className="mt-1.5 h-1 w-1 flex-shrink-0 rounded-full bg-red-400" />
                  Massive time spent on manual data entry
                </li>
                <li className="flex items-start gap-2">
                  <span className="mt-1.5 h-1 w-1 flex-shrink-0 rounded-full bg-red-400" />
                  Rework due to input errors
                </li>
                <li className="flex items-start gap-2">
                  <span className="mt-1.5 h-1 w-1 flex-shrink-0 rounded-full bg-red-400" />
                  Past documents cannot be found
                </li>
                <li className="flex items-start gap-2">
                  <span className="mt-1.5 h-1 w-1 flex-shrink-0 rounded-full bg-red-400" />
                  Inconsistent formats prevent integration
                </li>
              </ul>
            </div>
            <div className="rounded-2xl border-l-4 border-emerald-500 bg-neutral-50 p-6">
              <h4 className="font-semibold text-neutral-900" style={{ lineHeight: '1.5' }}>After DocIntel</h4>
              <ul className="mt-3 space-y-2 text-sm text-neutral-600" style={{ lineHeight: '1.8' }}>
                <li className="flex items-start gap-2">
                  <span className="mt-1.5 h-1 w-1 flex-shrink-0 rounded-full bg-emerald-500" />
                  Reduce document processing time by up to 80%
                </li>
                <li className="flex items-start gap-2">
                  <span className="mt-1.5 h-1 w-1 flex-shrink-0 rounded-full bg-emerald-500" />
                  Near-zero human error
                </li>
                <li className="flex items-start gap-2">
                  <span className="mt-1.5 h-1 w-1 flex-shrink-0 rounded-full bg-emerald-500" />
                  Find needed information in seconds
                </li>
                <li className="flex items-start gap-2">
                  <span className="mt-1.5 h-1 w-1 flex-shrink-0 rounded-full bg-emerald-500" />
                  Integrate as structured data
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="bg-neutral-50 py-16 md:py-20">
        <div className="mx-auto max-w-5xl px-6 md:px-8">
          <div className="mb-8 flex items-center gap-3">
            <div className="h-1 w-12 rounded-full bg-sky-600" />
            <span className="text-sm font-semibold uppercase tracking-wider text-sky-700">
              FEATURES
            </span>
          </div>
          <h2 className="text-2xl font-bold text-neutral-900 md:text-3xl" style={{ lineHeight: '1.4' }}>
            Platform Capabilities
          </h2>
          <div className="mt-8 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {features.map((feature) => (
              <div key={feature.title} className="rounded-2xl border border-neutral-200 bg-white p-6 shadow-sm transition-all hover:border-sky-200 hover:shadow-md">
                <h4 className="font-semibold text-neutral-900" style={{ lineHeight: '1.5' }}>{feature.title}</h4>
                <p className="mt-2 text-sm text-neutral-600" style={{ lineHeight: '1.8' }}>{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Use Cases Section */}
      <section className="bg-white py-16 md:py-20">
        <div className="mx-auto max-w-5xl px-6 md:px-8">
          <div className="mb-8 flex items-center gap-3">
            <div className="h-1 w-12 rounded-full bg-sky-600" />
            <span className="text-sm font-semibold uppercase tracking-wider text-sky-700">
              USE CASES
            </span>
          </div>
          <h2 className="text-2xl font-bold text-neutral-900 md:text-3xl" style={{ lineHeight: '1.4' }}>
            Application Areas
          </h2>
          <div className="mt-8 grid gap-6 md:grid-cols-2 lg:grid-cols-4">
            {useCases.map((useCase) => (
              <div key={useCase.title} className="rounded-2xl border border-neutral-200 bg-neutral-50 p-6 transition-all hover:border-sky-200 hover:shadow-md">
                <h4 className="font-semibold text-neutral-900" style={{ lineHeight: '1.5' }}>{useCase.title}</h4>
                <p className="mt-2 text-sm text-neutral-600">{useCase.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <section className="bg-neutral-50 py-16 md:py-20">
        <div className="mx-auto max-w-5xl px-6 md:px-8">
          <div className="mb-8 flex items-center gap-3">
            <div className="h-1 w-12 rounded-full bg-sky-600" />
            <span className="text-sm font-semibold uppercase tracking-wider text-sky-700">
              PRICING
            </span>
          </div>
          <h2 className="text-2xl font-bold text-neutral-900 md:text-3xl" style={{ lineHeight: '1.4' }}>
            Licensing Options
          </h2>
          <div className="mt-8 grid gap-6 md:grid-cols-2">
            <div className="rounded-2xl border border-neutral-200 bg-white p-6 shadow-sm transition-all hover:border-sky-200 hover:shadow-md">
              <h3 className="text-lg font-semibold text-neutral-900">Starter</h3>
              <p className="mt-4 text-2xl font-bold text-neutral-900">Contact for pricing</p>
              <ul className="mt-6 space-y-3 text-sm text-neutral-600">
                <li className="flex items-start gap-2">
                  <span className="mt-1.5 h-1 w-1 flex-shrink-0 rounded-full bg-sky-600" />
                  Up to 500 documents/month
                </li>
                <li className="flex items-start gap-2">
                  <span className="mt-1.5 h-1 w-1 flex-shrink-0 rounded-full bg-sky-600" />
                  Basic OCR
                </li>
                <li className="flex items-start gap-2">
                  <span className="mt-1.5 h-1 w-1 flex-shrink-0 rounded-full bg-sky-600" />
                  3 document templates
                </li>
              </ul>
              <Link
                href="/en/contact"
                className="mt-6 inline-flex w-full items-center justify-center rounded-lg border border-sky-600 px-6 py-3 text-sm font-semibold text-sky-700 transition-colors hover:bg-sky-50"
              >
                Contact Us
              </Link>
            </div>
            <div className="rounded-2xl border-2 border-sky-600 bg-white p-6 shadow-sm transition-all hover:shadow-md">
              <h3 className="text-lg font-semibold text-neutral-900">Business</h3>
              <p className="mt-4 text-2xl font-bold text-neutral-900">Custom pricing</p>
              <ul className="mt-6 space-y-3 text-sm text-neutral-600">
                <li className="flex items-start gap-2">
                  <span className="mt-1.5 h-1 w-1 flex-shrink-0 rounded-full bg-sky-600" />
                  Up to 2,000 documents/month
                </li>
                <li className="flex items-start gap-2">
                  <span className="mt-1.5 h-1 w-1 flex-shrink-0 rounded-full bg-sky-600" />
                  High-accuracy OCR
                </li>
                <li className="flex items-start gap-2">
                  <span className="mt-1.5 h-1 w-1 flex-shrink-0 rounded-full bg-sky-600" />
                  Unlimited templates
                </li>
                <li className="flex items-start gap-2">
                  <span className="mt-1.5 h-1 w-1 flex-shrink-0 rounded-full bg-sky-600" />
                  API integration
                </li>
              </ul>
              <Link
                href="/en/contact"
                className="mt-6 inline-flex w-full items-center justify-center rounded-lg bg-sky-600 px-6 py-3 text-sm font-semibold text-white transition-colors hover:bg-sky-700"
              >
                Contact Us
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-gradient-to-br from-sky-700 to-sky-900 py-16 md:py-20">
        <div className="mx-auto max-w-3xl px-6 text-center md:px-8">
          <h2 className="text-2xl font-bold text-white md:text-3xl" style={{ lineHeight: '1.4' }}>
            Automate Your Document Processing
          </h2>
          <p className="mt-4 text-base leading-relaxed text-sky-100 md:text-lg" style={{ lineHeight: '1.8' }}>
            We can demonstrate with your actual document samples. Contact us for a free consultation.
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
              href="/en/products"
              className="inline-flex items-center gap-2 rounded-lg border-2 border-white/30 px-8 py-4 text-base font-semibold text-white transition-all hover:bg-white/10"
            >
              View Other Products
            </Link>
          </div>
        </div>
      </section>

      <Footer lang="en" />
    </main>
  );
}
