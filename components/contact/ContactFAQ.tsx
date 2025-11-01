'use client';

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

interface ContactFAQProps {
  lang: 'ja' | 'en';
}

interface FAQItem {
  question: string;
  answer: string;
}

const ContactFAQ: React.FC<ContactFAQProps> = ({ lang }) => {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const content = {
    ja: {
      title: 'よくある質問',
      subtitle: 'お問い合わせの前に',
      faqs: [
        {
          question: 'コンサルテーションは本当に無料ですか？',
          answer: 'はい、60分間の初回コンサルテーションは完全無料で、契約義務はありません。お客様のニーズを評価し、ROI試算を提供させていただきます。'
        },
        {
          question: 'どのくらいで返信がありますか？',
          answer: '営業日であれば24時間以内にご連絡いたします。緊急のご用件の場合は、お電話で直接ご連絡いただけますとすぐに対応できます。'
        },
        {
          question: '小規模企業でも対応していますか？',
          answer: 'はい。理想的なクライアントは従業員数50-500名の企業ですが、すべてのお問い合わせを個別に評価させていただきます。規模に関わらず、お気軽にご相談ください。'
        },
        {
          question: 'どのような情報を準備すればよいですか？',
          answer: '現在の生産量、品質指標、設備リスト、直面している課題、予算範囲（把握している場合）などをご準備いただけると、より具体的なご提案が可能です。'
        },
        {
          question: 'コンサルテーション前にNDAを締結できますか？',
          answer: 'はい、可能です。詳細な情報を共有いただく前に、機密保持契約（NDA）を締結することができます。お気軽にお申し付けください。'
        },
        {
          question: 'リモートでのコンサルテーションは可能ですか？',
          answer: 'はい、Zoom、Microsoft Teams、Google Meetなどを利用したビデオコンサルテーションが可能です。対面での打ち合わせも対応しています。'
        }
      ]
    },
    en: {
      title: 'Frequently Asked Questions',
      subtitle: 'Before submitting the form',
      faqs: [
        {
          question: 'Is the consultation really free?',
          answer: 'Yes, the 60-minute initial consultation is completely free with no obligation. We assess your needs and provide ROI estimates to help you make informed decisions.'
        },
        {
          question: 'How long until I hear back?',
          answer: 'We respond within 24 hours on business days. For urgent matters, please call us directly for immediate assistance.'
        },
        {
          question: 'Do you work with small companies?',
          answer: 'Yes. While our ideal clients have 50-500 employees, we assess all inquiries individually. Feel free to reach out regardless of your company size.'
        },
        {
          question: 'What information should I prepare?',
          answer: 'Please prepare information about your current production volume, quality metrics, equipment list, pain points, and budget range (if known) for more specific recommendations.'
        },
        {
          question: 'Can you sign NDA before consultation?',
          answer: 'Yes, we can execute a Non-Disclosure Agreement (NDA) before any detailed discussions. Just let us know your requirements.'
        },
        {
          question: 'Do you offer remote consultations?',
          answer: 'Yes, video consultations are available via Zoom, Microsoft Teams, or Google Meet. In-person meetings are also possible.'
        }
      ]
    }
  };

  const text = content[lang];

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section id="faq" className="py-20 bg-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="max-w-4xl mx-auto"
        >
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              {text.title}
            </h2>
            <p className="text-xl text-gray-600">
              {text.subtitle}
            </p>
          </div>

          <div className="space-y-4">
            {text.faqs.map((faq, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: index * 0.1 }}
                className="bg-white border-2 border-gray-200 rounded-xl overflow-hidden hover:border-solunai-blue transition-colors"
              >
                <button
                  onClick={() => toggleFAQ(index)}
                  className="w-full px-6 md:px-8 py-6 flex items-center justify-between gap-4 text-left hover:bg-gray-50 transition-colors"
                >
                  <span className="font-semibold text-gray-900 text-lg flex-1">
                    {faq.question}
                  </span>
                  <motion.div
                    animate={{ rotate: openIndex === index ? 180 : 0 }}
                    transition={{ duration: 0.3 }}
                    className="flex-shrink-0"
                  >
                    <svg className="w-6 h-6 text-solunai-blue" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                    </svg>
                  </motion.div>
                </button>

                <AnimatePresence>
                  {openIndex === index && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: 'auto', opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.3 }}
                      className="overflow-hidden"
                    >
                      <div className="px-6 md:px-8 pb-6 text-gray-600 leading-relaxed">
                        {faq.answer}
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.div>
            ))}
          </div>

          {/* Additional Help */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.6 }}
            className="mt-12 text-center"
          >
            <div className="bg-blue-50 border-2 border-blue-200 rounded-xl p-8">
              <svg className="w-12 h-12 text-solunai-blue mx-auto mb-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8.228 9c.549-1.165 2.03-2 3.772-2 2.21 0 4 1.343 4 3 0 1.4-1.278 2.575-3.006 2.907-.542.104-.994.54-.994 1.093m0 3h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
              <h3 className="text-xl font-bold text-gray-900 mb-2">
                {lang === 'ja' ? '他にご質問がありますか？' : 'Still have questions?'}
              </h3>
              <p className="text-gray-600 mb-6">
                {lang === 'ja'
                  ? 'お気軽にお問い合わせください。専門スタッフが丁寧にお答えいたします。'
                  : 'Feel free to contact us. Our expert staff will be happy to help.'}
              </p>
              <div className="flex flex-col sm:flex-row justify-center items-center gap-4">
                <button
                  onClick={() => {
                    const formElement = document.getElementById('contact-form');
                    if (formElement) {
                      formElement.scrollIntoView({ behavior: 'smooth', block: 'start' });
                    }
                  }}
                  className="px-8 py-3 bg-solunai-blue text-white font-semibold rounded-full shadow-lg hover:bg-blue-700 hover:shadow-xl transition-all"
                >
                  {lang === 'ja' ? 'フォームでお問い合わせ' : 'Contact via Form'}
                </button>
                <a
                  href="mailto:info@solunai.co.jp"
                  className="px-8 py-3 border-2 border-solunai-blue text-solunai-blue font-semibold rounded-full hover:bg-blue-50 transition-all flex items-center gap-2"
                >
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                  </svg>
                  {lang === 'ja' ? 'メールで問い合わせ' : 'Email Us'}
                </a>
              </div>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default ContactFAQ;
