'use client';

import React from 'react';
import { motion } from 'framer-motion';

interface FreeConsultationOfferProps {
  lang: 'ja' | 'en';
}

const FreeConsultationOffer: React.FC<FreeConsultationOfferProps> = ({ lang }) => {
  const content = {
    ja: {
      title: '無料相談を予約',
      subtitle: 'Schedule Your Free Consultation',
      whatYouGet: '無料相談で得られること（契約義務なし）',
      benefits: [
        '60分間の製造現場アセスメント',
        'あなたの施設に特化したROI試算',
        'テクノロジー導入準備度評価',
        '予備的な変革ロードマップ',
        'ニーズに応じた価格見積もり'
      ],
      roiTitle: '当社のクライアントが達成する典型的なROI',
      roiMetrics: [
        { value: '30-50%', label: 'コスト削減' },
        { value: '95%', label: '品質改善' },
        { value: '40%', label: 'ダウンタイム削減' },
        { value: '4-10ヶ月', label: '投資回収期間' }
      ],
      cta: '今すぐ予約する'
    },
    en: {
      title: 'Schedule Your Free Consultation',
      subtitle: '無料相談を予約',
      whatYouGet: 'What You\'ll Get (No Obligation)',
      benefits: [
        '60-minute manufacturing assessment',
        'Custom ROI projection for your facility',
        'Technology readiness evaluation',
        'Preliminary transformation roadmap',
        'Pricing estimate for your needs'
      ],
      roiTitle: 'Typical ROI Our Clients Achieve',
      roiMetrics: [
        { value: '30-50%', label: 'Cost Reduction' },
        { value: '95%', label: 'Quality Improvement' },
        { value: '40%', label: 'Downtime Reduction' },
        { value: '4-10 months', label: 'Payback Period' }
      ],
      cta: 'Schedule Now'
    }
  };

  const text = content[lang];

  const scrollToForm = () => {
    const formElement = document.getElementById('contact-form');
    if (formElement) {
      formElement.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  return (
    <section className="py-20 bg-gradient-to-br from-blue-50 to-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="max-w-6xl mx-auto"
        >
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
              {text.title}
            </h2>
            <p className="text-xl text-gray-600">
              {text.subtitle}
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-12 items-start">
            {/* Left Column - Benefits */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="bg-white rounded-2xl shadow-xl p-8 md:p-10"
            >
              <h3 className="text-2xl font-bold text-gray-900 mb-6">
                {text.whatYouGet}
              </h3>
              <ul className="space-y-4">
                {text.benefits.map((benefit, index) => (
                  <motion.li
                    key={index}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.4, delay: 0.3 + index * 0.1 }}
                    className="flex items-start gap-3"
                  >
                    <svg className="w-6 h-6 text-green-500 flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    <span className="text-gray-700 text-lg">{benefit}</span>
                  </motion.li>
                ))}
              </ul>

              <motion.button
                onClick={scrollToForm}
                whileHover={{ scale: 1.03 }}
                whileTap={{ scale: 0.98 }}
                className="w-full mt-8 px-8 py-4 bg-solunai-blue text-white font-semibold rounded-full shadow-lg hover:bg-blue-700 transition-all text-lg"
              >
                {text.cta}
              </motion.button>
            </motion.div>

            {/* Right Column - ROI Metrics */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.3 }}
            >
              <div className="bg-gradient-to-br from-solunai-blue to-blue-700 rounded-2xl shadow-xl p-8 md:p-10 text-white">
                <h3 className="text-2xl font-bold mb-8">
                  {text.roiTitle}
                </h3>
                <div className="grid grid-cols-2 gap-6">
                  {text.roiMetrics.map((metric, index) => (
                    <motion.div
                      key={index}
                      initial={{ opacity: 0, scale: 0.8 }}
                      whileInView={{ opacity: 1, scale: 1 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.4, delay: 0.4 + index * 0.1 }}
                      className="bg-white/10 backdrop-blur-sm rounded-xl p-6 text-center"
                    >
                      <div className="text-3xl md:text-4xl font-bold mb-2">
                        {metric.value}
                      </div>
                      <div className="text-sm md:text-base text-blue-100">
                        {metric.label}
                      </div>
                    </motion.div>
                  ))}
                </div>
              </div>

              {/* Additional Info Card */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.6 }}
                className="mt-6 bg-white rounded-xl shadow-lg p-6 border-l-4 border-green-500"
              >
                <div className="flex items-start gap-3">
                  <svg className="w-6 h-6 text-green-500 flex-shrink-0 mt-0.5" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a1 1 0 000 2v3a1 1 0 001 1h1a1 1 0 100-2v-3a1 1 0 00-1-1H9z" clipRule="evenodd" />
                  </svg>
                  <div>
                    <p className="font-semibold text-gray-900 mb-1">
                      {lang === 'ja' ? '完全無料、契約義務なし' : 'Completely Free, No Obligation'}
                    </p>
                    <p className="text-gray-600 text-sm">
                      {lang === 'ja'
                        ? 'アセスメント後、ご希望に応じてご提案させていただきます。強引な営業は一切ありません。'
                        : 'After the assessment, we\'ll provide recommendations only if you\'re interested. No pushy sales.'}
                    </p>
                  </div>
                </div>
              </motion.div>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default FreeConsultationOffer;
