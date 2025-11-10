'use client';

import React from 'react';
import { motion } from 'framer-motion';
import Link from 'next/link';

interface QuickLinksProps {
  lang: 'ja' | 'en';
}

const QuickLinks: React.FC<QuickLinksProps> = ({ lang }) => {
  const content = {
    ja: {
      title: 'お問い合わせ前の参考資料',
      subtitle: 'より詳しい情報は以下の資料をご覧ください',
      links: [
        {
          title: '会社概要',
          description: 'Solunaiの企業情報、ビジョン、実績を掲載したPDF資料',
          type: 'PDF',
          icon: 'document',
          href: '#',
          badge: 'ダウンロード'
        },
        {
          title: 'プラットフォームデモ',
          description: 'Solunaiプラットフォームの機能を3分で紹介する動画',
          type: '3分',
          icon: 'video',
          href: '#',
          badge: '視聴する'
        },
        {
          title: 'FBM Hudson事例紹介',
          description: '国際プロジェクトの詳細な導入事例',
          type: '事例',
          icon: 'chart',
          href: '/case-studies',
          badge: '詳細を見る'
        },
        {
          title: 'ソリューション・価格',
          description: '各ソリューションの詳細と価格プランのご案内',
          type: 'ページ',
          icon: 'solution',
          href: '/solutions',
          badge: '詳細を見る'
        },
        {
          title: 'チーム紹介',
          description: '経験豊富な専門家チームのご紹介',
          type: 'ページ',
          icon: 'team',
          href: '/team',
          badge: '詳細を見る'
        },
        {
          title: 'よくある質問',
          description: 'お客様からよく寄せられる質問と回答',
          type: 'FAQ',
          icon: 'question',
          href: '#faq',
          badge: '見る'
        }
      ]
    },
    en: {
      title: 'Helpful Resources Before You Contact',
      subtitle: 'Learn more about Solunai with these resources',
      links: [
        {
          title: 'Company Profile',
          description: 'PDF document with Solunai\'s company information, vision, and track record',
          type: 'PDF',
          icon: 'document',
          href: '#',
          badge: 'Download'
        },
        {
          title: 'Platform Demo',
          description: '3-minute video introducing the Solunai platform features',
          type: '3 min',
          icon: 'video',
          href: '#',
          badge: 'Watch'
        },
        {
          title: 'FBM Hudson Case Study',
          description: 'Detailed international project implementation case study',
          type: 'Case',
          icon: 'chart',
          href: '/en/case-studies',
          badge: 'Read More'
        },
        {
          title: 'Solutions & Pricing',
          description: 'Detailed information about our solutions and pricing plans',
          type: 'Page',
          icon: 'solution',
          href: '/en/solutions',
          badge: 'Explore'
        },
        {
          title: 'Our Team',
          description: 'Meet our team of experienced professionals',
          type: 'Page',
          icon: 'team',
          href: '/en/team',
          badge: 'View'
        },
        {
          title: 'FAQ',
          description: 'Frequently asked questions and answers',
          type: 'FAQ',
          icon: 'question',
          href: '#faq',
          badge: 'View'
        }
      ]
    }
  };

  const text = content[lang];

  const getIcon = (iconType: string) => {
    const icons: Record<string, JSX.Element> = {
      document: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 21h10a2 2 0 002-2V9.414a1 1 0 00-.293-.707l-5.414-5.414A1 1 0 0012.586 3H7a2 2 0 00-2 2v14a2 2 0 002 2z" />
        </svg>
      ),
      video: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 10l4.553-2.276A1 1 0 0121 8.618v6.764a1 1 0 01-1.447.894L15 14M5 18h8a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v8a2 2 0 002 2z" />
        </svg>
      ),
      chart: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
        </svg>
      ),
      solution: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 3v2m6-2v2M9 19v2m6-2v2M5 9H3m2 6H3m18-6h-2m2 6h-2M7 19h10a2 2 0 002-2V7a2 2 0 00-2-2H7a2 2 0 00-2 2v10a2 2 0 002 2zM9 9h6v6H9V9z" />
        </svg>
      ),
      team: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M13 7a4 4 0 11-8 0 4 4 0 018 0z" />
        </svg>
      ),
      question: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8.228 9c.549-1.165 2.03-2 3.772-2 2.21 0 4 1.343 4 3 0 1.4-1.278 2.575-3.006 2.907-.542.104-.994.54-.994 1.093m0 3h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
        </svg>
      )
    };
    return icons[iconType] || icons.document;
  };

  return (
    <section className="py-20 bg-gradient-to-br from-gray-50 to-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="max-w-6xl mx-auto"
        >
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              {text.title}
            </h2>
            <p className="text-xl text-gray-600">
              {text.subtitle}
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {text.links.map((link, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <Link
                  href={link.href}
                  className="block group h-full"
                >
                  <div className="bg-white rounded-xl shadow-lg border border-gray-200 p-6 h-full hover:shadow-2xl hover:border-solunai-blue transition-all duration-300">
                    <div className="flex items-start justify-between mb-4">
                      <div className="p-3 bg-blue-50 rounded-lg text-solunai-blue group-hover:bg-solunai-blue group-hover:text-white transition-colors">
                        {getIcon(link.icon)}
                      </div>
                      <span className="px-3 py-1 bg-gray-100 text-gray-600 text-xs font-semibold rounded-full">
                        {link.type}
                      </span>
                    </div>

                    <h3 className="text-lg font-bold text-gray-900 mb-2 group-hover:text-solunai-blue transition-colors">
                      {link.title}
                    </h3>

                    <p className="text-gray-600 text-sm mb-4 leading-relaxed">
                      {link.description}
                    </p>

                    <div className="flex items-center text-solunai-blue font-semibold text-sm group-hover:gap-2 transition-all">
                      <span>{link.badge}</span>
                      <svg className="w-4 h-4 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                      </svg>
                    </div>
                  </div>
                </Link>
              </motion.div>
            ))}
          </div>

          {/* Bottom CTA */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.6 }}
            className="mt-12 text-center"
          >
            <p className="text-gray-600 mb-4">
              {lang === 'ja'
                ? 'さらに詳しい情報が必要ですか？'
                : 'Need more information?'}
            </p>
            <button
              onClick={() => {
                const formElement = document.getElementById('contact-form');
                if (formElement) {
                  formElement.scrollIntoView({ behavior: 'smooth', block: 'start' });
                }
              }}
              className="px-8 py-3 bg-solunai-blue text-white font-semibold rounded-full shadow-lg hover:bg-blue-700 hover:shadow-xl transition-all"
            >
              {lang === 'ja' ? 'お問い合わせフォームへ' : 'Go to Contact Form'}
            </button>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default QuickLinks;
