'use client';

import React from 'react';
import { motion } from 'framer-motion';

interface TrustIndicatorsProps {
  lang: 'ja' | 'en';
}

const TrustIndicators: React.FC<TrustIndicatorsProps> = ({ lang }) => {
  const content = {
    ja: {
      title: 'Solunaiに問い合わせる理由',
      sections: [
        {
          title: '実証された実績',
          icon: 'trophy',
          items: [
            'FBM Hudson国際プロジェクト（進行中）',
            '実証済みのクライアント成果',
            '迅速な投資回収'
          ],
          color: 'from-yellow-500 to-orange-500'
        },
        {
          title: '経験豊富な専門家チーム',
          icon: 'team',
          items: [
            '60年以上の製造業経験を結集',
            'Carlos: Continentalでの実証済み成長実績',
            'Tomoo: 戦略的エグジット実績'
          ],
          color: 'from-blue-500 to-indigo-600'
        },
        {
          title: 'エンタープライズ技術',
          icon: 'tech',
          items: [
            'NVIDIA Omniverse、ANSYS、Microsoft Azure',
            'ISO 27001、SOC 2、GDPR認証',
            '24/7プラットフォーム稼働'
          ],
          color: 'from-purple-500 to-pink-500'
        },
        {
          title: 'グローバル + ローカル',
          icon: 'global',
          items: [
            'WorldEmpパートナーシップ（オランダ）',
            '日本の製造業に精通した専門知識',
            'バイリンガルチーム（日本語、英語、ポルトガル語）'
          ],
          color: 'from-green-500 to-teal-500'
        }
      ]
    },
    en: {
      title: 'Why Contact Solunai?',
      sections: [
        {
          title: 'Proven Track Record',
          icon: 'trophy',
          items: [
            'FBM Hudson international project (ongoing)',
            'Proven client results',
            'Rapid investment payback'
          ],
          color: 'from-yellow-500 to-orange-500'
        },
        {
          title: 'Expert Team',
          icon: 'team',
          items: [
            '60+ years combined manufacturing experience',
            'Carlos: Proven growth achievement (Continental)',
            'Tomoo: Strategic exits'
          ],
          color: 'from-blue-500 to-indigo-600'
        },
        {
          title: 'Enterprise Technology',
          icon: 'tech',
          items: [
            'NVIDIA Omniverse, ANSYS, Microsoft Azure',
            'ISO 27001, SOC 2, GDPR certified',
            '24/7 platform operations'
          ],
          color: 'from-purple-500 to-pink-500'
        },
        {
          title: 'Global + Local',
          icon: 'global',
          items: [
            'WorldEmp partnership (Netherlands)',
            'Deep Japanese manufacturing expertise',
            'Bilingual team (Japanese, English, Portuguese)'
          ],
          color: 'from-green-500 to-teal-500'
        }
      ]
    }
  };

  const text = content[lang];

  const getIcon = (iconType: string) => {
    const icons: Record<string, JSX.Element> = {
      trophy: (
        <svg className="w-10 h-10" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z" />
        </svg>
      ),
      team: (
        <svg className="w-10 h-10" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
        </svg>
      ),
      tech: (
        <svg className="w-10 h-10" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 3v2m6-2v2M9 19v2m6-2v2M5 9H3m2 6H3m18-6h-2m2 6h-2M7 19h10a2 2 0 002-2V7a2 2 0 00-2-2H7a2 2 0 00-2 2v10a2 2 0 002 2zM9 9h6v6H9V9z" />
        </svg>
      ),
      global: (
        <svg className="w-10 h-10" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
        </svg>
      )
    };
    return icons[iconType] || icons.trophy;
  };

  return (
    <section className="py-20 bg-gradient-to-br from-gray-900 to-gray-800 text-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="max-w-6xl mx-auto"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-16">
            {text.title}
          </h2>

          <div className="grid md:grid-cols-2 gap-8">
            {text.sections.map((section, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="relative"
              >
                <div className="bg-white/5 backdrop-blur-sm rounded-2xl p-8 border border-white/10 hover:border-white/20 transition-all h-full">
                  {/* Gradient Header */}
                  <div className={`inline-flex items-center justify-center p-4 rounded-xl bg-gradient-to-br ${section.color} mb-6`}>
                    {getIcon(section.icon)}
                  </div>

                  <h3 className="text-2xl font-bold mb-6">{section.title}</h3>

                  <ul className="space-y-4">
                    {section.items.map((item, itemIndex) => (
                      <motion.li
                        key={itemIndex}
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.4, delay: 0.2 + itemIndex * 0.1 }}
                        className="flex items-start gap-3"
                      >
                        <svg className="w-6 h-6 text-green-400 flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                        </svg>
                        <span className="text-gray-200 leading-relaxed">{item}</span>
                      </motion.li>
                    ))}
                  </ul>
                </div>
              </motion.div>
            ))}
          </div>

          {/* Stats Bar */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.5 }}
            className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-6"
          >
            {[
              { value: lang === 'ja' ? '国際' : 'Global', label: lang === 'ja' ? 'プロジェクト実績' : 'Project Track Record' },
              { value: lang === 'ja' ? '実証済み' : 'Proven', label: lang === 'ja' ? '成果実績' : 'Results' },
              { value: '60+', label: lang === 'ja' ? '年の経験' : 'Years Experience' },
              { value: '24/7', label: lang === 'ja' ? 'サポート' : 'Support' }
            ].map((stat, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: 0.6 + index * 0.1 }}
                className="bg-white/10 backdrop-blur-sm rounded-xl p-6 text-center border border-white/10"
              >
                <div className="text-3xl md:text-4xl font-bold text-white mb-2">
                  {stat.value}
                </div>
                <div className="text-sm text-gray-300">
                  {stat.label}
                </div>
              </motion.div>
            ))}
          </motion.div>

          {/* Bottom CTA */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.8 }}
            className="mt-16 text-center"
          >
            <p className="text-xl text-gray-300 mb-6">
              {lang === 'ja'
                ? '実績と信頼のあるパートナーと一緒に、製造業の未来を創造しましょう'
                : 'Partner with a proven and trusted company to create the future of manufacturing'}
            </p>
            <button
              onClick={() => {
                const formElement = document.getElementById('contact-form');
                if (formElement) {
                  formElement.scrollIntoView({ behavior: 'smooth', block: 'start' });
                }
              }}
              className="px-10 py-4 bg-white text-gray-900 font-bold rounded-full shadow-xl hover:shadow-2xl hover:scale-105 transition-all"
            >
              {lang === 'ja' ? '今すぐ無料相談を予約' : 'Schedule Free Consultation Now'}
            </button>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default TrustIndicators;
