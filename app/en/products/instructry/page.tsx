'use client';

import React from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import Link from 'next/link';

export default function InstructryPageEN() {
  const features = [
    {
      title: 'Expert Knowledge Capture',
      description: 'Extract and preserve tacit knowledge from veteran workers through structured interviews, observation analysis, and documentation.'
    },
    {
      title: 'Visual Work Instructions',
      description: 'AI-generated step-by-step guides with images, annotations, and video clips for complex procedures.'
    },
    {
      title: 'Troubleshooting AI',
      description: 'AI assistant trained on expert knowledge that helps workers diagnose and solve problems in real-time.'
    },
    {
      title: 'Skills Transfer Acceleration',
      description: 'Track competency development and identify the most effective knowledge transfer methods.'
    }
  ];

  const challenges = [
    {
      title: 'The 2025 Problem',
      description: 'Japan faces mass retirements of skilled workers. Decades of expertise risk being lost forever.'
    },
    {
      title: 'Tacit Knowledge',
      description: 'Most expert knowledge is unwritten - intuitions, judgments, and shortcuts learned over years.'
    },
    {
      title: 'Training Gaps',
      description: 'Traditional apprenticeship takes years. Organizations cannot wait that long.'
    }
  ];

  const industries = [
    'Manufacturing',
    'Construction',
    'Maintenance',
    'Quality Control',
    'Process Industries',
    'Skilled Trades'
  ];

  return (
    <main className="min-h-screen bg-neutral-50">
      <Header lang="en" />

      {/* Hero Section */}
      <section className="bg-white">
        <div className="mx-auto max-w-5xl px-6 py-16 md:px-8 md:py-20">
          <p className="text-xs font-semibold uppercase tracking-[0.2em] text-sky-700">
            KODA INSTRUCTRY
          </p>
          <h1 className="mt-4 text-2xl font-bold text-neutral-900 md:text-3xl lg:text-4xl" style={{ lineHeight: '1.4' }}>
            Industrial Knowledge Management
          </h1>
          <p className="mt-6 max-w-3xl text-base leading-relaxed text-neutral-700 md:text-lg" style={{ lineHeight: '1.8' }}>
            Capture and transfer expert knowledge in manufacturing and industrial settings. Preserve decades of expertise before retirement and accelerate skills transfer to the next generation.
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

      {/* Challenge Section */}
      <section className="bg-white py-16 md:py-20">
        <div className="mx-auto max-w-5xl px-6 md:px-8">
          <div className="mb-8 flex items-center gap-3">
            <div className="h-1 w-12 rounded-full bg-sky-600" />
            <span className="text-sm font-semibold uppercase tracking-wider text-sky-700">
              THE CHALLENGE
            </span>
          </div>
          <h2 className="text-2xl font-bold text-neutral-900 md:text-3xl" style={{ lineHeight: '1.4' }}>
            Why Knowledge Preservation Matters Now
          </h2>
          <div className="mt-8 grid gap-6 md:grid-cols-3">
            {challenges.map((challenge) => (
              <div key={challenge.title} className="rounded-2xl border border-neutral-200 bg-neutral-50 p-6 transition-all hover:border-sky-200 hover:shadow-md">
                <h4 className="font-semibold text-neutral-900" style={{ lineHeight: '1.5' }}>{challenge.title}</h4>
                <p className="mt-2 text-sm text-neutral-600" style={{ lineHeight: '1.8' }}>{challenge.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="bg-neutral-50 py-16 md:py-20">
        <div className="mx-auto max-w-5xl px-6 md:px-8">
          <div className="mb-8 flex items-center gap-3">
            <div className="h-1 w-12 rounded-full bg-sky-600" />
            <span className="text-sm font-semibold uppercase tracking-wider text-sky-700">
              SOLUTION
            </span>
          </div>
          <h2 className="text-2xl font-bold text-neutral-900 md:text-3xl" style={{ lineHeight: '1.4' }}>
            How KODA Instructry Helps
          </h2>
          <div className="mt-8 grid gap-6 md:grid-cols-2">
            {features.map((feature) => (
              <div key={feature.title} className="rounded-2xl border border-neutral-200 bg-white p-6 shadow-sm transition-all hover:border-sky-200 hover:shadow-md md:p-8">
                <h3 className="text-lg font-semibold text-neutral-900" style={{ lineHeight: '1.5' }}>{feature.title}</h3>
                <p className="mt-2 text-sm text-neutral-600" style={{ lineHeight: '1.8' }}>{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Industries */}
      <section className="bg-white py-16 md:py-20">
        <div className="mx-auto max-w-5xl px-6 md:px-8">
          <div className="mb-8 flex items-center gap-3">
            <div className="h-1 w-12 rounded-full bg-sky-600" />
            <span className="text-sm font-semibold uppercase tracking-wider text-sky-700">
              INDUSTRIES
            </span>
          </div>
          <h2 className="text-2xl font-bold text-neutral-900 md:text-3xl" style={{ lineHeight: '1.4' }}>
            Application Areas
          </h2>
          <div className="mt-8 flex flex-wrap gap-3">
            {industries.map((industry) => (
              <span
                key={industry}
                className="rounded-full bg-neutral-100 px-4 py-2 text-sm text-neutral-700"
              >
                {industry}
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-gradient-to-br from-sky-700 to-sky-900 py-16 md:py-20">
        <div className="mx-auto max-w-3xl px-6 text-center md:px-8">
          <h2 className="text-2xl font-bold text-white md:text-3xl" style={{ lineHeight: '1.4' }}>
            Preserve Your Organization&apos;s Expertise
          </h2>
          <p className="mt-4 text-base leading-relaxed text-sky-100 md:text-lg" style={{ lineHeight: '1.8' }}>
            Don&apos;t let decades of knowledge walk out the door. Start capturing and transferring critical expertise today.
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
