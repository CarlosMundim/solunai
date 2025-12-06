'use client';

import React from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import Link from 'next/link';

export default function CulturalPageEN() {
  const features = [
    {
      title: 'Japanese Business Etiquette',
      description: 'Learn the nuances of Japanese business interactions including bowing, meishi (business card) exchange, seating arrangements, and formal greetings.'
    },
    {
      title: 'Communication Coaching',
      description: 'Understand high-context communication, reading between the lines, appropriate use of honorifics, and indirect expression styles.'
    },
    {
      title: 'Cultural Context Insights',
      description: 'Real-time guidance on cultural appropriateness for meetings, negotiations, presentations, and social situations.'
    },
    {
      title: 'Team Collaboration Tools',
      description: 'Bridge cultural gaps in global teams with AI-powered translation that preserves nuance and cultural context.'
    }
  ];

  const scenarios = [
    'First meeting with Japanese clients',
    'Business meal etiquette',
    'Gift-giving customs',
    'Email communication',
    'Negotiation strategies',
    'Networking events',
    'Apology and conflict resolution',
    'Building trust over time'
  ];

  return (
    <main className="min-h-screen bg-neutral-50">
      <Header lang="en" />

      {/* Hero Section */}
      <section className="bg-white">
        <div className="mx-auto max-w-5xl px-6 py-16 md:px-8 md:py-20">
          <p className="text-xs font-semibold uppercase tracking-[0.2em] text-sky-700">
            KODA CULTURAL
          </p>
          <h1 className="mt-4 text-2xl font-bold text-neutral-900 md:text-3xl lg:text-4xl" style={{ lineHeight: '1.4' }}>
            Cross-Cultural Intelligence Platform
          </h1>
          <p className="mt-6 max-w-3xl text-base leading-relaxed text-neutral-700 md:text-lg" style={{ lineHeight: '1.8' }}>
            Navigate Japanese business culture with confidence. AI-powered training and real-time guidance for etiquette, communication styles, and cultural nuances.
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

      {/* Learning Scenarios */}
      <section className="bg-white py-16 md:py-20">
        <div className="mx-auto max-w-5xl px-6 md:px-8">
          <div className="mb-8 flex items-center gap-3">
            <div className="h-1 w-12 rounded-full bg-sky-600" />
            <span className="text-sm font-semibold uppercase tracking-wider text-sky-700">
              LEARNING SCENARIOS
            </span>
          </div>
          <h2 className="text-2xl font-bold text-neutral-900 md:text-3xl" style={{ lineHeight: '1.4' }}>
            Practical Situations Covered
          </h2>
          <div className="mt-8 flex flex-wrap gap-3">
            {scenarios.map((scenario) => (
              <span
                key={scenario}
                className="rounded-full bg-neutral-100 px-4 py-2 text-sm text-neutral-700"
              >
                {scenario}
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* Who Benefits */}
      <section className="bg-neutral-50 py-16 md:py-20">
        <div className="mx-auto max-w-5xl px-6 md:px-8">
          <div className="mb-8 flex items-center gap-3">
            <div className="h-1 w-12 rounded-full bg-sky-600" />
            <span className="text-sm font-semibold uppercase tracking-wider text-sky-700">
              WHO BENEFITS
            </span>
          </div>
          <h2 className="text-2xl font-bold text-neutral-900 md:text-3xl" style={{ lineHeight: '1.4' }}>
            Ideal Users
          </h2>
          <div className="mt-8 grid gap-6 md:grid-cols-3">
            <div className="rounded-2xl border border-neutral-200 bg-white p-6 shadow-sm transition-all hover:border-sky-200 hover:shadow-md">
              <h4 className="font-semibold text-neutral-900" style={{ lineHeight: '1.5' }}>Global Companies</h4>
              <p className="mt-2 text-sm text-neutral-600" style={{ lineHeight: '1.8' }}>
                Teams working with Japanese partners, clients, or subsidiaries who need cultural fluency.
              </p>
            </div>
            <div className="rounded-2xl border border-neutral-200 bg-white p-6 shadow-sm transition-all hover:border-sky-200 hover:shadow-md">
              <h4 className="font-semibold text-neutral-900" style={{ lineHeight: '1.5' }}>New Executives</h4>
              <p className="mt-2 text-sm text-neutral-600" style={{ lineHeight: '1.8' }}>
                Leaders taking on Japan-related roles who need to build cultural competency quickly.
              </p>
            </div>
            <div className="rounded-2xl border border-neutral-200 bg-white p-6 shadow-sm transition-all hover:border-sky-200 hover:shadow-md">
              <h4 className="font-semibold text-neutral-900" style={{ lineHeight: '1.5' }}>Expats & Assignees</h4>
              <p className="mt-2 text-sm text-neutral-600" style={{ lineHeight: '1.8' }}>
                Professionals relocating to Japan or managing Japanese teams remotely.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-gradient-to-br from-sky-700 to-sky-900 py-16 md:py-20">
        <div className="mx-auto max-w-3xl px-6 text-center md:px-8">
          <h2 className="text-2xl font-bold text-white md:text-3xl" style={{ lineHeight: '1.4' }}>
            Build Cultural Fluency
          </h2>
          <p className="mt-4 text-base leading-relaxed text-sky-100 md:text-lg" style={{ lineHeight: '1.8' }}>
            Equip your team with the cultural intelligence needed for successful Japan business relationships.
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
