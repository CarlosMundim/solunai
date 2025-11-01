'use client';

import React from 'react';
import { motion } from 'framer-motion';

interface OfficeInformationProps {
  lang: 'ja' | 'en';
}

const OfficeInformation: React.FC<OfficeInformationProps> = ({ lang }) => {
  const content = {
    ja: {
      title: 'オフィス情報',
      headquarters: '本社',
      companyName: 'Solunai株式会社',
      companyNameEn: 'Solunai Systems K.K.',
      address: '〒[郵便番号]\n神奈川県[市区町村]\n[番地・建物名]',
      contact: 'お問い合わせ',
      email: 'info@solunai.co.jp',
      phone: '[電話番号]',
      line: 'LINE ID: [LINE ID]',
      hours: '営業時間',
      businessHours: '月曜日 - 金曜日: 9:00 - 18:00 (日本標準時)',
      closedDays: '土曜日、日曜日、祝日: 休業',
      responseTime: '返信時間',
      emailResponse: 'メールでのお問い合わせ: 24時間以内（営業日）',
      urgentMatters: '緊急のご用件: お電話にて直接ご連絡ください'
    },
    en: {
      title: 'Office Information',
      headquarters: 'Headquarters',
      companyName: 'Solunai Systems K.K.',
      companyNameEn: 'Solunai株式会社',
      address: '〒[Postal Code]\n[Address Line 1]\nKanagawa, Japan',
      contact: 'Contact',
      email: 'info@solunai.co.jp',
      phone: '[Phone Number]',
      line: 'LINE ID: [LINE ID]',
      hours: 'Business Hours',
      businessHours: 'Monday - Friday: 9:00 - 18:00 (Japan Standard Time)',
      closedDays: 'Saturday, Sunday, National Holidays: Closed',
      responseTime: 'Response Time',
      emailResponse: 'Email inquiries: Within 24 hours (business days)',
      urgentMatters: 'Urgent matters: Please call directly'
    }
  };

  const text = content[lang];

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

          <div className="grid md:grid-cols-2 gap-12">
            {/* Office Details */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="space-y-8"
            >
              {/* Headquarters */}
              <div className="bg-gradient-to-br from-blue-50 to-white rounded-xl p-8 shadow-lg border border-blue-100">
                <div className="flex items-start gap-4 mb-4">
                  <div className="p-3 bg-solunai-blue rounded-lg">
                    <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
                    </svg>
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-gray-900 mb-2">{text.headquarters}</h3>
                    <p className="font-semibold text-gray-900">{text.companyName}</p>
                    <p className="text-sm text-gray-600">{text.companyNameEn}</p>
                  </div>
                </div>
                <div className="mt-6 pl-16">
                  <p className="text-gray-700 whitespace-pre-line leading-relaxed">
                    {text.address}
                  </p>
                </div>
              </div>

              {/* Contact Methods */}
              <div className="space-y-4">
                <h3 className="text-xl font-bold text-gray-900 mb-4 flex items-center gap-2">
                  <svg className="w-6 h-6 text-solunai-blue" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                  </svg>
                  {text.contact}
                </h3>

                <div className="space-y-3">
                  <div className="flex items-center gap-3 p-4 bg-gray-50 rounded-lg hover:bg-gray-100 transition-colors">
                    <svg className="w-5 h-5 text-solunai-blue flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                    </svg>
                    <a href={`mailto:${text.email}`} className="text-gray-700 hover:text-solunai-blue transition-colors">
                      {text.email}
                    </a>
                  </div>

                  <div className="flex items-center gap-3 p-4 bg-gray-50 rounded-lg hover:bg-gray-100 transition-colors">
                    <svg className="w-5 h-5 text-solunai-blue flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                    </svg>
                    <span className="text-gray-700">{text.phone}</span>
                  </div>

                  <div className="flex items-center gap-3 p-4 bg-gray-50 rounded-lg hover:bg-gray-100 transition-colors">
                    <svg className="w-5 h-5 text-solunai-blue flex-shrink-0" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M19.27 5.33C17.94 4.71 16.5 4.26 15 4a.09.09 0 0 0-.07.03c-.18.33-.39.76-.53 1.09a16.09 16.09 0 0 0-4.8 0c-.14-.34-.35-.76-.54-1.09c-.01-.02-.04-.03-.07-.03c-1.5.26-2.93.71-4.27 1.33c-.01 0-.02.01-.03.02c-2.72 4.07-3.47 8.03-3.1 11.95c0 .02.01.04.03.05c1.8 1.32 3.53 2.12 5.24 2.65c.03.01.06 0 .07-.02c.4-.55.76-1.13 1.07-1.74c.02-.04 0-.08-.04-.09c-.57-.22-1.11-.48-1.64-.78c-.04-.02-.04-.08-.01-.11c.11-.08.22-.17.33-.25c.02-.02.05-.02.07-.01c3.44 1.57 7.15 1.57 10.55 0c.02-.01.05-.01.07.01c.11.09.22.17.33.26c.04.03.04.09-.01.11c-.52.31-1.07.56-1.64.78c-.04.01-.05.06-.04.09c.32.61.68 1.19 1.07 1.74c.03.01.06.02.09.01c1.72-.53 3.45-1.33 5.25-2.65c.02-.01.03-.03.03-.05c.44-4.53-.73-8.46-3.1-11.95c-.01-.01-.02-.02-.04-.02zM8.52 14.91c-1.03 0-1.89-.95-1.89-2.12s.84-2.12 1.89-2.12c1.06 0 1.9.96 1.89 2.12c0 1.17-.84 2.12-1.89 2.12zm6.97 0c-1.03 0-1.89-.95-1.89-2.12s.84-2.12 1.89-2.12c1.06 0 1.9.96 1.89 2.12c0 1.17-.83 2.12-1.89 2.12z"/>
                    </svg>
                    <span className="text-gray-700">{text.line}</span>
                  </div>
                </div>
              </div>
            </motion.div>

            {/* Business Hours & Response Time */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="space-y-8"
            >
              {/* Business Hours */}
              <div className="bg-gradient-to-br from-solunai-blue to-blue-700 rounded-xl p-8 shadow-lg text-white">
                <div className="flex items-start gap-4 mb-6">
                  <div className="p-3 bg-white/20 rounded-lg">
                    <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                  </div>
                  <div>
                    <h3 className="text-xl font-bold mb-4">{text.hours}</h3>
                    <div className="space-y-3">
                      <div className="flex items-start gap-3">
                        <svg className="w-5 h-5 flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                        </svg>
                        <p className="text-blue-50 leading-relaxed">{text.businessHours}</p>
                      </div>
                      <div className="flex items-start gap-3">
                        <svg className="w-5 h-5 flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                        </svg>
                        <p className="text-blue-50 leading-relaxed">{text.closedDays}</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Response Time */}
              <div className="bg-green-50 border-2 border-green-200 rounded-xl p-8 shadow-lg">
                <div className="flex items-start gap-4">
                  <div className="p-3 bg-green-500 rounded-lg">
                    <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                    </svg>
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-gray-900 mb-4">{text.responseTime}</h3>
                    <div className="space-y-3">
                      <div className="flex items-start gap-3">
                        <svg className="w-5 h-5 text-green-600 flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                        </svg>
                        <p className="text-gray-700 leading-relaxed">{text.emailResponse}</p>
                      </div>
                      <div className="flex items-start gap-3">
                        <svg className="w-5 h-5 text-green-600 flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                        </svg>
                        <p className="text-gray-700 leading-relaxed">{text.urgentMatters}</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Trust Badge */}
              <div className="bg-gray-50 rounded-xl p-6 border border-gray-200">
                <div className="flex items-center justify-center gap-8 text-sm text-gray-600">
                  <div className="flex flex-col items-center">
                    <svg className="w-8 h-8 text-solunai-blue mb-2" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M2.166 4.999A11.954 11.954 0 0010 1.944 11.954 11.954 0 0017.834 5c.11.65.166 1.32.166 2.001 0 5.225-3.34 9.67-8 11.317C5.34 16.67 2 12.225 2 7c0-.682.057-1.35.166-2.001zm11.541 3.708a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                    </svg>
                    <span className="font-semibold">ISO 27001</span>
                  </div>
                  <div className="flex flex-col items-center">
                    <svg className="w-8 h-8 text-solunai-blue mb-2" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M2.166 4.999A11.954 11.954 0 0010 1.944 11.954 11.954 0 0017.834 5c.11.65.166 1.32.166 2.001 0 5.225-3.34 9.67-8 11.317C5.34 16.67 2 12.225 2 7c0-.682.057-1.35.166-2.001zm11.541 3.708a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                    </svg>
                    <span className="font-semibold">SOC 2</span>
                  </div>
                  <div className="flex flex-col items-center">
                    <svg className="w-8 h-8 text-solunai-blue mb-2" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M2.166 4.999A11.954 11.954 0 0010 1.944 11.954 11.954 0 0017.834 5c.11.65.166 1.32.166 2.001 0 5.225-3.34 9.67-8 11.317C5.34 16.67 2 12.225 2 7c0-.682.057-1.35.166-2.001zm11.541 3.708a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                    </svg>
                    <span className="font-semibold">GDPR</span>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default OfficeInformation;
