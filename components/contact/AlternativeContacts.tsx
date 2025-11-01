'use client';

import React from 'react';
import { motion } from 'framer-motion';

interface AlternativeContactsProps {
  lang: 'ja' | 'en';
}

const AlternativeContacts: React.FC<AlternativeContactsProps> = ({ lang }) => {
  const content = {
    ja: {
      title: 'その他のお問い合わせ先',
      international: {
        title: '海外のお客様へ',
        items: [
          '英語サポート対応可能',
          'タイムゾーン調整可能',
          'ビデオ会議（Zoom、Teams、Google Meet）'
        ]
      },
      media: {
        title: 'メディア関係者の方',
        email: 'press@solunai.co.jp',
        description: '取材・プレスリリース等のお問い合わせ'
      },
      partnership: {
        title: 'パートナーシップ',
        email: 'partnerships@solunai.co.jp',
        description: '協業・提携に関するお問い合わせ'
      },
      investor: {
        title: '投資家の方',
        email: 'ir@solunai.co.jp',
        description: 'IR・投資家向け情報のお問い合わせ'
      }
    },
    en: {
      title: 'Alternative Contact Methods',
      international: {
        title: 'For International Clients',
        items: [
          'English support available',
          'Time zone accommodations',
          'Video conference consultations (Zoom, Teams, Google Meet)'
        ]
      },
      media: {
        title: 'Media Inquiries',
        email: 'press@solunai.co.jp',
        description: 'For interviews, press releases, etc.'
      },
      partnership: {
        title: 'Partnership Inquiries',
        email: 'partnerships@solunai.co.jp',
        description: 'For collaboration and partnership opportunities'
      },
      investor: {
        title: 'Investor Relations',
        email: 'ir@solunai.co.jp',
        description: 'For investor relations and financial information'
      }
    }
  };

  const text = content[lang];

  const contacts = [
    {
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 20H5a2 2 0 01-2-2V6a2 2 0 012-2h10a2 2 0 012 2v1m2 13a2 2 0 01-2-2V7m2 13a2 2 0 002-2V9a2 2 0 00-2-2h-2m-4-3H9M7 16h6M7 8h6v4H7V8z" />
        </svg>
      ),
      title: text.media.title,
      email: text.media.email,
      description: text.media.description,
      color: 'from-purple-500 to-purple-700'
    },
    {
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
        </svg>
      ),
      title: text.partnership.title,
      email: text.partnership.email,
      description: text.partnership.description,
      color: 'from-blue-500 to-blue-700'
    },
    {
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
        </svg>
      ),
      title: text.investor.title,
      email: text.investor.email,
      description: text.investor.description,
      color: 'from-green-500 to-green-700'
    }
  ];

  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="max-w-6xl mx-auto"
        >
          <h2 className="text-4xl font-bold text-center text-gray-900 mb-16">
            {text.title}
          </h2>

          {/* International Clients */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="mb-12"
          >
            <div className="bg-gradient-to-br from-solunai-blue to-blue-700 rounded-2xl shadow-xl p-8 md:p-12 text-white">
              <div className="flex items-start gap-6">
                <div className="p-4 bg-white/20 rounded-xl">
                  <svg className="w-10 h-10" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
                <div className="flex-1">
                  <h3 className="text-2xl font-bold mb-6">{text.international.title}</h3>
                  <div className="grid md:grid-cols-3 gap-6">
                    {text.international.items.map((item, index) => (
                      <motion.div
                        key={index}
                        initial={{ opacity: 0, y: 10 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.4, delay: 0.3 + index * 0.1 }}
                        className="flex items-start gap-3"
                      >
                        <svg className="w-5 h-5 flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                        </svg>
                        <span className="text-blue-50">{item}</span>
                      </motion.div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Contact Cards */}
          <div className="grid md:grid-cols-3 gap-8">
            {contacts.map((contact, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.3 + index * 0.1 }}
                className="bg-white rounded-xl shadow-lg border border-gray-200 overflow-hidden hover:shadow-2xl transition-shadow"
              >
                <div className={`bg-gradient-to-br ${contact.color} p-6 text-white`}>
                  <div className="flex items-center gap-3 mb-2">
                    {contact.icon}
                    <h3 className="text-xl font-bold">{contact.title}</h3>
                  </div>
                </div>

                <div className="p-6">
                  <p className="text-gray-600 mb-4 text-sm leading-relaxed">
                    {contact.description}
                  </p>

                  <a
                    href={`mailto:${contact.email}`}
                    className="flex items-center gap-2 text-solunai-blue hover:text-blue-700 font-semibold transition-colors group"
                  >
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                    </svg>
                    <span className="group-hover:underline">{contact.email}</span>
                  </a>
                </div>
              </motion.div>
            ))}
          </div>

          {/* Additional Info */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.6 }}
            className="mt-12 text-center"
          >
            <div className="inline-flex items-center gap-2 px-6 py-3 bg-blue-50 border border-blue-200 rounded-full text-sm text-gray-700">
              <svg className="w-5 h-5 text-solunai-blue" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a1 1 0 000 2v3a1 1 0 001 1h1a1 1 0 100-2v-3a1 1 0 00-1-1H9z" clipRule="evenodd" />
              </svg>
              <span>
                {lang === 'ja'
                  ? 'すべてのお問い合わせは24時間以内（営業日）に返信いたします'
                  : 'All inquiries will be responded to within 24 hours (business days)'}
              </span>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default AlternativeContacts;
