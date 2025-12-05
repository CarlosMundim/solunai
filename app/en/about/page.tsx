'use client';

import React from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import AboutHero from '@/components/about/AboutHero';

export default function AboutPageEN() {
  return (
    <main className="min-h-screen bg-neutral-50">
      <Header lang="en" />

      {/* Hero Section */}
      <AboutHero lang="en" />

      {/* Mission Section */}
      <section className="bg-white py-16 md:py-20">
        <div className="mx-auto max-w-4xl px-6 md:px-8">
          <div className="mb-8 flex items-center gap-3">
            <div className="h-1 w-12 rounded-full bg-sky-600" />
            <span className="text-sm font-semibold uppercase tracking-wider text-sky-700">
              Our Mission
            </span>
          </div>
          <h2 className="text-2xl font-bold text-neutral-900 md:text-3xl" style={{ lineHeight: '1.4' }}>
            Support Japanese workplaces gently
          </h2>
          <div className="mt-6 space-y-4 text-base leading-relaxed text-neutral-700 md:text-lg" style={{ lineHeight: '1.8' }}>
            <p>
              Japan&apos;s communication style is subtle. Politeness, indirect phrasing, reading
              context — these are essential. Most AI systems ignore this. We do not.
            </p>
            <p>
              We focus on reducing misunderstandings, respecting communication style,
              minimising disruption to existing workflows, and ensuring teams feel safe
              using AI. This is why Solunai builds quiet AI, not loud AI.
            </p>
          </div>
        </div>
      </section>

      {/* KODA Platform Section */}
      <section className="bg-neutral-50 py-16 md:py-20">
        <div className="mx-auto max-w-4xl px-6 md:px-8">
          <div className="mb-8 flex items-center gap-3">
            <div className="h-1 w-12 rounded-full bg-sky-600" />
            <span className="text-sm font-semibold uppercase tracking-wider text-sky-700">
              Platform
            </span>
          </div>
          <h2 className="text-2xl font-bold text-neutral-900 md:text-3xl" style={{ lineHeight: '1.4' }}>
            The KODA Platform
          </h2>
          <div className="mt-6 space-y-4 text-base leading-relaxed text-neutral-700 md:text-lg" style={{ lineHeight: '1.8' }}>
            <p>
              At the core of our solutions is KODA — an AI platform tuned specifically for
              Japanese language nuance, Japanese workplace culture and daily operational
              routines. It is designed to provide polite, stable communication patterns.
            </p>
            <p>
              KODA is used in medical education, manufacturing, training, documentation
              support, and cross-cultural workplaces.
            </p>
          </div>
          <a
            href="/en/koda"
            className="mt-8 inline-flex items-center gap-2 rounded-lg border-2 border-sky-600 bg-sky-600 px-6 py-3 text-sm font-semibold text-white transition-all hover:bg-sky-700 hover:border-sky-700"
          >
            Learn more about KODA
            <svg className="h-4 w-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </a>
        </div>
      </section>

      {/* Values Section */}
      <section className="bg-white py-16 md:py-20">
        <div className="mx-auto max-w-5xl px-6 md:px-8">
          <div className="mb-8 flex items-center gap-3">
            <div className="h-1 w-12 rounded-full bg-sky-600" />
            <span className="text-sm font-semibold uppercase tracking-wider text-sky-700">
              Our Values
            </span>
          </div>
          <h2 className="text-2xl font-bold text-neutral-900 md:text-3xl" style={{ lineHeight: '1.4' }}>
            What we believe in
          </h2>
          <div className="mt-10 grid gap-6 md:grid-cols-3 md:gap-8">
            <div className="rounded-2xl border border-neutral-200 bg-neutral-50 p-6 transition-all hover:border-sky-200 hover:shadow-md md:p-8">
              <div className="mb-4 inline-flex h-12 w-12 items-center justify-center rounded-xl bg-sky-100 text-sky-600">
                <svg className="h-6 w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
                </svg>
              </div>
              <h3 className="mb-3 text-lg font-semibold text-neutral-900" style={{ lineHeight: '1.5' }}>
                Respect for the workplace
              </h3>
              <p className="text-sm leading-relaxed text-neutral-600 md:text-base" style={{ lineHeight: '1.7' }}>
                Every team has its own way of working. AI should support that, not
                overwrite it.
              </p>
            </div>
            <div className="rounded-2xl border border-neutral-200 bg-neutral-50 p-6 transition-all hover:border-sky-200 hover:shadow-md md:p-8">
              <div className="mb-4 inline-flex h-12 w-12 items-center justify-center rounded-xl bg-sky-100 text-sky-600">
                <svg className="h-6 w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" />
                </svg>
              </div>
              <h3 className="mb-3 text-lg font-semibold text-neutral-900" style={{ lineHeight: '1.5' }}>
                Start small, grow steadily
              </h3>
              <p className="text-sm leading-relaxed text-neutral-600 md:text-base" style={{ lineHeight: '1.7' }}>
                We believe in beginning with one workflow and expanding naturally. No
                big-bang transformations.
              </p>
            </div>
            <div className="rounded-2xl border border-neutral-200 bg-neutral-50 p-6 transition-all hover:border-sky-200 hover:shadow-md md:p-8">
              <div className="mb-4 inline-flex h-12 w-12 items-center justify-center rounded-xl bg-sky-100 text-sky-600">
                <svg className="h-6 w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M18.364 5.636l-3.536 3.536m0 5.656l3.536 3.536M9.172 9.172L5.636 5.636m3.536 9.192l-3.536 3.536M21 12a9 9 0 11-18 0 9 9 0 0118 0zm-5 0a4 4 0 11-8 0 4 4 0 018 0z" />
                </svg>
              </div>
              <h3 className="mb-3 text-lg font-semibold text-neutral-900" style={{ lineHeight: '1.5' }}>
                Clear and gentle support
              </h3>
              <p className="text-sm leading-relaxed text-neutral-600 md:text-base" style={{ lineHeight: '1.7' }}>
                We avoid unnecessary technical jargon and explain AI in ways that anyone
                in the organisation can understand.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Partnerships Section */}
      <section className="bg-neutral-50 py-16 md:py-20">
        <div className="mx-auto max-w-4xl px-6 md:px-8">
          <div className="mb-8 flex items-center gap-3">
            <div className="h-1 w-12 rounded-full bg-sky-600" />
            <span className="text-sm font-semibold uppercase tracking-wider text-sky-700">
              Partnerships
            </span>
          </div>
          <h2 className="text-2xl font-bold text-neutral-900 md:text-3xl" style={{ lineHeight: '1.4' }}>
            Our Partners
          </h2>
          <div className="mt-8 space-y-6">
            <div className="rounded-xl border border-neutral-200 bg-white p-6 md:p-8">
              <div className="flex items-start gap-6">
                <div className="flex-shrink-0">
                  <img
                    src="/images/logos/WorldEmpLogo.png"
                    alt="WorldEmp Logo"
                    className="h-16 w-auto object-contain"
                  />
                </div>
                <div>
                  <h3 className="mb-2 text-lg font-semibold text-neutral-900">
                    WorldEmp (Netherlands)
                  </h3>
                  <p className="text-base leading-relaxed text-neutral-700" style={{ lineHeight: '1.7' }}>
                    A long-standing engineering partner with more than 20 years of experience in
                    manufacturing and industrial talent.
                  </p>
                </div>
              </div>
            </div>
            <div className="rounded-xl border border-neutral-200 bg-white p-6 md:p-8">
              <h3 className="mb-2 text-lg font-semibold text-neutral-900">
                Educational and medical institutions
              </h3>
              <p className="text-base leading-relaxed text-neutral-700" style={{ lineHeight: '1.7' }}>
                KODA MedComm was developed through collaboration with medical educators
                and researchers.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Leadership Section */}
      <section className="bg-white py-16 md:py-20">
        <div className="mx-auto max-w-4xl px-6 md:px-8">
          <div className="mb-8 flex items-center gap-3">
            <div className="h-1 w-12 rounded-full bg-sky-600" />
            <span className="text-sm font-semibold uppercase tracking-wider text-sky-700">
              Leadership
            </span>
          </div>
          <h2 className="text-2xl font-bold text-neutral-900 md:text-3xl" style={{ lineHeight: '1.4' }}>
            Message from the Founder
          </h2>
          <div className="mt-8 rounded-2xl border border-neutral-200 bg-neutral-50 p-8 md:p-10">
            <blockquote className="mb-6 text-xl font-medium italic text-neutral-800 md:text-2xl" style={{ lineHeight: '1.5' }}>
              &quot;AI should make work easier, not more complicated.&quot;
            </blockquote>
            <div className="space-y-4 text-base leading-relaxed text-neutral-700" style={{ lineHeight: '1.8' }}>
              <p>
                We believe AI is a tool for reducing stress, supporting learning and
                strengthening teams. Solunai is a company built on sincerity, calmness and
                long-term commitment. We aim to create AI that Japanese workplaces can
                trust.
              </p>
            </div>
            <div className="mt-8 flex items-center gap-4 border-t border-neutral-200 pt-6">
              <div>
                <p className="text-lg font-semibold text-neutral-900">Carlos Mundim</p>
                <p className="text-sm text-neutral-600">Founder & Chief</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Company Info Section */}
      <section className="bg-neutral-50 py-16 md:py-20">
        <div className="mx-auto max-w-4xl px-6 md:px-8">
          <div className="mb-8 flex items-center gap-3">
            <div className="h-1 w-12 rounded-full bg-sky-600" />
            <span className="text-sm font-semibold uppercase tracking-wider text-sky-700">
              Company
            </span>
          </div>
          <h2 className="text-2xl font-bold text-neutral-900 md:text-3xl" style={{ lineHeight: '1.4' }}>
            Company Information
          </h2>
          <div className="mt-8 overflow-hidden rounded-xl border border-neutral-200 bg-white">
            <table className="w-full text-left">
              <tbody>
                <tr className="border-b border-neutral-100">
                  <th className="w-40 bg-neutral-50 px-6 py-4 text-sm font-semibold text-neutral-700 md:w-48">
                    Company Name
                  </th>
                  <td className="px-6 py-4 text-sm text-neutral-800 md:text-base">
                    Solunai Co., Ltd.
                  </td>
                </tr>
                <tr className="border-b border-neutral-100">
                  <th className="bg-neutral-50 px-6 py-4 text-sm font-semibold text-neutral-700">
                    Location
                  </th>
                  <td className="px-6 py-4 text-sm text-neutral-800 md:text-base">
                    Yokohama, Japan
                  </td>
                </tr>
                <tr className="border-b border-neutral-100">
                  <th className="bg-neutral-50 px-6 py-4 text-sm font-semibold text-neutral-700">
                    Leadership
                  </th>
                  <td className="px-6 py-4 text-sm text-neutral-800 md:text-base">
                    <div>
                      <p className="font-medium">Carlos Mundim (Founder & Chief)</p>
                      <p className="mt-1 text-neutral-600">Tomoo Furuya (CEO)</p>
                    </div>
                  </td>
                </tr>
                <tr className="border-b border-neutral-100">
                  <th className="bg-neutral-50 px-6 py-4 text-sm font-semibold text-neutral-700">
                    Services
                  </th>
                  <td className="px-6 py-4 text-sm text-neutral-800 md:text-base">
                    AI solutions, KODA platform, education and medical AI, manufacturing
                    support
                  </td>
                </tr>
                <tr className="border-b border-neutral-100">
                  <th className="bg-neutral-50 px-6 py-4 text-sm font-semibold text-neutral-700">
                    Partners
                  </th>
                  <td className="px-6 py-4 text-sm text-neutral-800 md:text-base">
                    WorldEmp B.V., academic and medical institutions
                  </td>
                </tr>
                <tr>
                  <th className="bg-neutral-50 px-6 py-4 text-sm font-semibold text-neutral-700">
                    Website
                  </th>
                  <td className="px-6 py-4 text-sm text-neutral-800 md:text-base">
                    <a
                      href="https://www.solunai.co.jp/"
                      className="text-sky-700 underline hover:text-sky-800"
                    >
                      https://www.solunai.co.jp/
                    </a>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* Contact CTA Section */}
      <section className="bg-gradient-to-br from-sky-700 to-sky-900 py-16 md:py-20">
        <div className="mx-auto max-w-3xl px-6 text-center md:px-8">
          <h2 className="text-2xl font-bold text-white md:text-3xl" style={{ lineHeight: '1.4' }}>
            Contact Us
          </h2>
          <p className="mt-4 text-base leading-relaxed text-sky-100 md:text-lg" style={{ lineHeight: '1.7' }}>
            We welcome enquiries about AI solutions, PoC projects or workplace
            assessments.
          </p>
          <a
            href="/en/contact"
            className="mt-8 inline-flex items-center gap-2 rounded-lg bg-white px-8 py-4 text-base font-semibold text-sky-700 transition-all hover:bg-sky-50 hover:shadow-lg"
          >
            Contact us
            <svg className="h-5 w-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>
          </a>
        </div>
      </section>

      <Footer lang="en" />
    </main>
  );
}
