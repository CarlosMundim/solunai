'use client';

import React from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import Link from 'next/link';

export default function MedCommPageEN() {
  const features = [
    {
      title: 'Virtual Patients',
      description: 'AI recreates diverse patient profiles with age, personality, symptoms, and cultural background settings for realistic dialogue practice.'
    },
    {
      title: 'Expert Digital Twins',
      description: 'Replicate experienced physician teaching styles with AI. Provides real-time feedback and guidance to learners.'
    },
    {
      title: 'Automated Assessment',
      description: 'Multi-dimensional evaluation of communication skills including empathy, clarity, questioning techniques, and non-verbal communication.'
    },
    {
      title: 'Japanese Healthcare Context',
      description: 'Scenarios incorporating honorifics, timing, family relationships, and other communication elements specific to Japanese medical settings.'
    },
    {
      title: '24/7 Availability',
      description: 'Learners can practice anytime. Continue learning without wait times even during peak periods.'
    },
    {
      title: 'Learning Analytics',
      description: 'Visualize individual and group progress. Automatically identify weaknesses and generate improvement recommendations.'
    }
  ];

  const scenarios = [
    'Initial Consultation',
    'Delivering Difficult News',
    'Treatment Planning',
    'Family Discussions',
    'Elderly Patient Communication',
    'Informed Consent',
    'Complaint Handling',
    'Cross-Cultural Patients'
  ];

  return (
    <main className="min-h-screen bg-neutral-50">
      <Header lang="en" />

      {/* Hero Section */}
      <section className="bg-white">
        <div className="mx-auto max-w-5xl px-6 py-16 md:px-8 md:py-20">
          <p className="text-xs font-semibold uppercase tracking-[0.2em] text-sky-700">
            KODA MEDCOMM
          </p>
          <h1 className="mt-4 text-2xl font-bold text-neutral-900 md:text-3xl lg:text-4xl" style={{ lineHeight: '1.4' }}>
            AI-Powered Medical Communication Training
          </h1>
          <p className="mt-6 max-w-3xl text-base leading-relaxed text-neutral-700 md:text-lg" style={{ lineHeight: '1.8' }}>
            Train medical students and healthcare professionals in patient communication using AI virtual patients. Practice anytime, anywhere, with consistent quality and detailed performance analytics.
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

      {/* Value Bar */}
      <section className="border-y border-neutral-200 bg-neutral-100">
        <div className="mx-auto grid max-w-5xl grid-cols-2 gap-4 px-6 py-8 md:grid-cols-4 md:px-8">
          {[
            { label: 'Cost vs Traditional SP', value: '1/10' },
            { label: 'Availability', value: '24/7' },
            { label: 'Scenarios Available', value: '100+' },
            { label: 'Feedback', value: 'Immediate' },
          ].map((item) => (
            <div key={item.label} className="rounded-2xl bg-white px-4 py-4 shadow-sm transition-all hover:border-sky-200 hover:shadow-md">
              <p className="text-xs text-neutral-500">{item.label}</p>
              <p className="mt-1 text-lg font-semibold text-neutral-900">{item.value}</p>
            </div>
          ))}
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
            Challenges in Medical Communication Education
          </h2>
          <div className="mt-8 grid gap-6 md:grid-cols-3">
            <div className="rounded-2xl border border-neutral-200 bg-neutral-50 p-6 transition-all hover:border-sky-200 hover:shadow-md">
              <h4 className="font-semibold text-neutral-900" style={{ lineHeight: '1.5' }}>High Cost</h4>
              <p className="mt-2 text-sm text-neutral-600" style={{ lineHeight: '1.8' }}>
                Standardized Patient (SP) sessions cost over 50,000 yen each. Budget constraints limit practice opportunities.
              </p>
            </div>
            <div className="rounded-2xl border border-neutral-200 bg-neutral-50 p-6 transition-all hover:border-sky-200 hover:shadow-md">
              <h4 className="font-semibold text-neutral-900" style={{ lineHeight: '1.5' }}>Inconsistency</h4>
              <p className="mt-2 text-sm text-neutral-600" style={{ lineHeight: '1.8' }}>
                Human SPs vary in performance due to fatigue and mood. Assessment criteria tend to be subjective.
              </p>
            </div>
            <div className="rounded-2xl border border-neutral-200 bg-neutral-50 p-6 transition-all hover:border-sky-200 hover:shadow-md">
              <h4 className="font-semibold text-neutral-900" style={{ lineHeight: '1.5' }}>Scalability</h4>
              <p className="mt-2 text-sm text-neutral-600" style={{ lineHeight: '1.8' }}>
                SP talent is scarce. Cannot meet increasing student numbers, resulting in insufficient practice opportunities.
              </p>
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

      {/* Scenarios Section */}
      <section className="bg-white py-16 md:py-20">
        <div className="mx-auto max-w-5xl px-6 md:px-8">
          <div className="mb-8 flex items-center gap-3">
            <div className="h-1 w-12 rounded-full bg-sky-600" />
            <span className="text-sm font-semibold uppercase tracking-wider text-sky-700">
              SCENARIOS
            </span>
          </div>
          <h2 className="text-2xl font-bold text-neutral-900 md:text-3xl" style={{ lineHeight: '1.4' }}>
            Available Scenarios
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
          <p className="mt-6 text-sm text-neutral-500">
            Custom scenarios can also be developed for your institution.
          </p>
        </div>
      </section>

      {/* Academic Partnership */}
      <section className="bg-gradient-to-br from-slate-800 to-slate-900 py-16 md:py-20">
        <div className="mx-auto max-w-4xl px-6 md:px-8">
          <div className="mb-8 flex items-center gap-3">
            <div className="h-1 w-12 rounded-full bg-sky-400" />
            <span className="text-sm font-semibold uppercase tracking-wider text-sky-300">
              ACADEMIC PARTNERSHIP
            </span>
          </div>
          <div className="rounded-2xl bg-slate-700/50 p-8">
            <p className="text-lg text-slate-200 italic" style={{ lineHeight: '1.8' }}>
              &ldquo;KODA MedComm has the potential to revolutionize medical communication education. This approach combining AI and human strengths will significantly contribute to training the next generation of healthcare professionals.&rdquo;
            </p>
            <div className="mt-6">
              <p className="font-semibold text-white">Professor Jeanette Littlemore</p>
              <p className="text-sm text-slate-400">University of Birmingham</p>
              <p className="text-sm text-slate-400">World authority on medical communication and metaphor research</p>
            </div>
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
              <h3 className="text-lg font-semibold text-neutral-900">Standard</h3>
              <p className="mt-4 text-2xl font-bold text-neutral-900">Contact for pricing</p>
              <ul className="mt-6 space-y-3 text-sm text-neutral-600">
                <li className="flex items-start gap-2">
                  <span className="mt-1.5 h-1 w-1 flex-shrink-0 rounded-full bg-sky-600" />
                  Up to 50 users
                </li>
                <li className="flex items-start gap-2">
                  <span className="mt-1.5 h-1 w-1 flex-shrink-0 rounded-full bg-sky-600" />
                  Basic scenario set
                </li>
                <li className="flex items-start gap-2">
                  <span className="mt-1.5 h-1 w-1 flex-shrink-0 rounded-full bg-sky-600" />
                  Learning analytics dashboard
                </li>
                <li className="flex items-start gap-2">
                  <span className="mt-1.5 h-1 w-1 flex-shrink-0 rounded-full bg-sky-600" />
                  Email support
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
              <h3 className="text-lg font-semibold text-neutral-900">Enterprise</h3>
              <p className="mt-4 text-2xl font-bold text-neutral-900">Custom pricing</p>
              <ul className="mt-6 space-y-3 text-sm text-neutral-600">
                <li className="flex items-start gap-2">
                  <span className="mt-1.5 h-1 w-1 flex-shrink-0 rounded-full bg-sky-600" />
                  Unlimited users
                </li>
                <li className="flex items-start gap-2">
                  <span className="mt-1.5 h-1 w-1 flex-shrink-0 rounded-full bg-sky-600" />
                  Custom scenario development
                </li>
                <li className="flex items-start gap-2">
                  <span className="mt-1.5 h-1 w-1 flex-shrink-0 rounded-full bg-sky-600" />
                  Expert Digital Twins
                </li>
                <li className="flex items-start gap-2">
                  <span className="mt-1.5 h-1 w-1 flex-shrink-0 rounded-full bg-sky-600" />
                  API integration
                </li>
                <li className="flex items-start gap-2">
                  <span className="mt-1.5 h-1 w-1 flex-shrink-0 rounded-full bg-sky-600" />
                  Priority support
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
            Transform Medical Communication Education
          </h2>
          <p className="mt-4 text-base leading-relaxed text-sky-100 md:text-lg" style={{ lineHeight: '1.8' }}>
            Request a demonstration or detailed materials. We are happy to discuss how KODA MedComm can benefit your institution.
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
