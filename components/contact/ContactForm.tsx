'use client';

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

interface ContactFormProps {
  lang: 'ja' | 'en';
}

interface FormData {
  // Step 1
  companyName: string;
  industry: string;
  employeeCount: string;
  revenue: string;
  website: string;
  // Step 2
  name: string;
  title: string;
  email: string;
  phone: string;
  contactMethod: string;
  // Step 3
  challenges: string;
  solutions: string[];
  // Step 4
  timeline: string;
  budget: string;
  source: string;
  sourceDetail: string;
  // Privacy
  privacyAccepted: boolean;
  // Honeypot
  honeypot: string;
}

const ContactForm: React.FC<ContactFormProps> = ({ lang }) => {
  const [currentStep, setCurrentStep] = useState(1);
  const [formData, setFormData] = useState<FormData>({
    companyName: '',
    industry: '',
    employeeCount: '',
    revenue: '',
    website: '',
    name: '',
    title: '',
    email: '',
    phone: '',
    contactMethod: '',
    challenges: '',
    solutions: [],
    timeline: '',
    budget: '',
    source: '',
    sourceDetail: '',
    privacyAccepted: false,
    honeypot: ''
  });
  const [errors, setErrors] = useState<Record<string, string>>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const content = {
    ja: {
      formTitle: 'お問い合わせフォーム',
      steps: ['会社情報', 'ご担当者情報', '課題・ニーズ', 'タイムライン'],
      step1: {
        title: 'ステップ 1: 会社情報',
        companyName: '会社名',
        industry: '業種',
        industries: [
          { value: '', label: '選択してください' },
          { value: 'hvac', label: 'HVAC（空調設備）' },
          { value: 'automotive', label: '自動車部品' },
          { value: 'electronics', label: '電子機器' },
          { value: 'machinery', label: '機械製造' },
          { value: 'food', label: '食品加工' },
          { value: 'precision', label: '精密機器' },
          { value: 'other', label: 'その他' }
        ],
        employeeCount: '従業員数',
        employeeCounts: [
          { value: '', label: '選択してください' },
          { value: '<50', label: '50名未満' },
          { value: '50-200', label: '50-200名' },
          { value: '200-500', label: '200-500名' },
          { value: '500-1000', label: '500-1000名' },
          { value: '1000+', label: '1000名以上' }
        ],
        revenue: '年間売上高（任意）',
        revenues: [
          { value: '', label: '選択してください' },
          { value: '<500M', label: '5億円未満' },
          { value: '500M-1B', label: '5億円-10億円' },
          { value: '1B-5B', label: '10億円-50億円' },
          { value: '5B-10B', label: '50億円-100億円' },
          { value: '10B+', label: '100億円以上' }
        ],
        website: 'ウェブサイトURL（任意）'
      },
      step2: {
        title: 'ステップ 2: ご担当者情報',
        name: 'お名前',
        title: '役職',
        email: 'メールアドレス',
        phone: '電話番号',
        contactMethod: '希望連絡方法',
        contactMethods: [
          { value: '', label: '選択してください' },
          { value: 'email', label: 'メール' },
          { value: 'phone', label: '電話' },
          { value: 'line', label: 'LINE' },
          { value: 'teams', label: 'Microsoft Teams' }
        ]
      },
      step3: {
        title: 'ステップ 3: 課題・ニーズ',
        challenges: 'どのような課題に直面していますか？',
        challengesPlaceholder: '例：品質管理の問題、生産効率の低下、ダウンタイムの削減、見積作成の効率化など',
        solutions: '興味のあるソリューション（複数選択可）',
        solutionOptions: [
          { value: 'quotation', label: 'AI見積自動化' },
          { value: 'maintenance', label: '予知保全' },
          { value: 'quality', label: 'コンピュータビジョン品質管理' },
          { value: 'scheduling', label: 'AI生産スケジューリング' },
          { value: 'unsure', label: 'わからない - アセスメントが必要' }
        ]
      },
      step4: {
        title: 'ステップ 4: タイムライン・情報源',
        timeline: 'いつ開始したいですか？',
        timelines: [
          { value: '', label: '選択してください' },
          { value: 'immediate', label: 'すぐに（1-2ヶ月）' },
          { value: 'planning', label: '計画段階（3-6ヶ月）' },
          { value: 'exploring', label: '検討中（6-12ヶ月）' },
          { value: 'research', label: '調査のみ' }
        ],
        budget: '予算は確保済みですか？（任意）',
        budgets: [
          { value: '', label: '選択してください' },
          { value: '5-20M', label: 'はい（500万円-2000万円）' },
          { value: '20-50M', label: 'はい（2000万円-5000万円）' },
          { value: '50M+', label: 'はい（5000万円以上）' },
          { value: 'not-yet', label: 'まだ' },
          { value: 'financing', label: '融資を検討中' }
        ],
        source: '当社をどのようにお知りになりましたか？',
        sources: [
          { value: '', label: '選択してください' },
          { value: 'search', label: 'ウェブ検索' },
          { value: 'referral', label: '紹介' },
          { value: 'event', label: '業界イベント' },
          { value: 'linkedin', label: 'LinkedIn' },
          { value: 'news', label: 'ニュース・記事' },
          { value: 'other', label: 'その他' }
        ],
        sourceDetail: '詳細（紹介者名など）'
      },
      privacy: {
        title: 'プライバシー・コンプライアンス',
        points: [
          'ISO 27001認証 - お客様の情報は安全に保護されます',
          '第三者とデータを共有することは一切ありません',
          '個人情報保護法（APPI）およびGDPRに準拠',
          'いつでもデータの削除を要求できます'
        ],
        acceptance: 'プライバシーポリシーおよび利用規約に同意します',
        privacyPolicy: 'プライバシーポリシー',
        terms: '利用規約'
      },
      buttons: {
        next: '次へ',
        previous: '戻る',
        submit: '無料相談を予約'
      },
      errors: {
        required: 'この項目は必須です',
        email: '有効なメールアドレスを入力してください',
        phone: '有効な電話番号を入力してください',
        privacy: 'プライバシーポリシーに同意してください'
      },
      success: {
        title: 'お問い合わせありがとうございます！',
        message: '24時間以内（営業日）にご連絡いたします。',
        detail: '確認メールをお送りしました。'
      }
    },
    en: {
      formTitle: 'Contact Form',
      steps: ['Company Info', 'Your Info', 'Challenges', 'Timeline'],
      step1: {
        title: 'Step 1: Company Information',
        companyName: 'Company Name',
        industry: 'Industry',
        industries: [
          { value: '', label: 'Select...' },
          { value: 'hvac', label: 'HVAC' },
          { value: 'automotive', label: 'Automotive' },
          { value: 'electronics', label: 'Electronics' },
          { value: 'machinery', label: 'Machinery' },
          { value: 'food', label: 'Food Processing' },
          { value: 'precision', label: 'Precision Equipment' },
          { value: 'other', label: 'Other' }
        ],
        employeeCount: 'Number of Employees',
        employeeCounts: [
          { value: '', label: 'Select...' },
          { value: '<50', label: 'Less than 50' },
          { value: '50-200', label: '50-200' },
          { value: '200-500', label: '200-500' },
          { value: '500-1000', label: '500-1000' },
          { value: '1000+', label: '1000+' }
        ],
        revenue: 'Annual Revenue (Optional)',
        revenues: [
          { value: '', label: 'Select...' },
          { value: '<500M', label: 'Less than ¥500M' },
          { value: '500M-1B', label: '¥500M - ¥1B' },
          { value: '1B-5B', label: '¥1B - ¥5B' },
          { value: '5B-10B', label: '¥5B - ¥10B' },
          { value: '10B+', label: 'Over ¥10B' }
        ],
        website: 'Website URL (Optional)'
      },
      step2: {
        title: 'Step 2: Your Information',
        name: 'Your Name',
        title: 'Title/Position',
        email: 'Email',
        phone: 'Phone',
        contactMethod: 'Preferred Contact Method',
        contactMethods: [
          { value: '', label: 'Select...' },
          { value: 'email', label: 'Email' },
          { value: 'phone', label: 'Phone' },
          { value: 'line', label: 'LINE' },
          { value: 'teams', label: 'Microsoft Teams' }
        ]
      },
      step3: {
        title: 'Step 3: Your Challenges',
        challenges: 'What challenges are you facing?',
        challengesPlaceholder: 'E.g., Quality control issues, Production efficiency, Downtime reduction, Quote estimation bottlenecks, etc.',
        solutions: 'Which solutions interest you? (Select all that apply)',
        solutionOptions: [
          { value: 'quotation', label: 'AI Quotation Automation' },
          { value: 'maintenance', label: 'Predictive Maintenance' },
          { value: 'quality', label: 'Computer Vision Quality Control' },
          { value: 'scheduling', label: 'AI Production Scheduling' },
          { value: 'unsure', label: 'Not sure - need assessment' }
        ]
      },
      step4: {
        title: 'Step 4: Timeline & Source',
        timeline: 'When would you like to start?',
        timelines: [
          { value: '', label: 'Select...' },
          { value: 'immediate', label: 'Immediately (1-2 months)' },
          { value: 'planning', label: 'Planning phase (3-6 months)' },
          { value: 'exploring', label: 'Exploring options (6-12 months)' },
          { value: 'research', label: 'Research only' }
        ],
        budget: 'Budget allocated? (Optional)',
        budgets: [
          { value: '', label: 'Select...' },
          { value: '5-20M', label: 'Yes (¥5M-¥20M)' },
          { value: '20-50M', label: 'Yes (¥20M-¥50M)' },
          { value: '50M+', label: 'Yes (Over ¥50M)' },
          { value: 'not-yet', label: 'Not yet' },
          { value: 'financing', label: 'Seeking financing' }
        ],
        source: 'How did you hear about us?',
        sources: [
          { value: '', label: 'Select...' },
          { value: 'search', label: 'Web search' },
          { value: 'referral', label: 'Referral' },
          { value: 'event', label: 'Industry event' },
          { value: 'linkedin', label: 'LinkedIn' },
          { value: 'news', label: 'News/article' },
          { value: 'other', label: 'Other' }
        ],
        sourceDetail: 'Details (e.g., referrer name)'
      },
      privacy: {
        title: 'Privacy & Compliance',
        points: [
          'ISO 27001 certified - Your information is secure',
          'We never share data with third parties',
          'APPI & GDPR compliant',
          'You can request data deletion anytime'
        ],
        acceptance: 'I agree to the Privacy Policy and Terms of Service',
        privacyPolicy: 'Privacy Policy',
        terms: 'Terms of Service'
      },
      buttons: {
        next: 'Next',
        previous: 'Previous',
        submit: 'Schedule Free Consultation'
      },
      errors: {
        required: 'This field is required',
        email: 'Please enter a valid email address',
        phone: 'Please enter a valid phone number',
        privacy: 'Please accept the privacy policy'
      },
      success: {
        title: 'Thank you for contacting us!',
        message: 'We will respond within 24 hours (business days).',
        detail: 'A confirmation email has been sent to you.'
      }
    }
  };

  const text = content[lang];

  const validateStep = (step: number): boolean => {
    const newErrors: Record<string, string> = {};

    if (step === 1) {
      if (!formData.companyName.trim()) newErrors.companyName = text.errors.required;
      if (!formData.industry) newErrors.industry = text.errors.required;
      if (!formData.employeeCount) newErrors.employeeCount = text.errors.required;
    }

    if (step === 2) {
      if (!formData.name.trim()) newErrors.name = text.errors.required;
      if (!formData.title.trim()) newErrors.title = text.errors.required;
      if (!formData.email.trim()) {
        newErrors.email = text.errors.required;
      } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
        newErrors.email = text.errors.email;
      }
      if (!formData.phone.trim()) {
        newErrors.phone = text.errors.required;
      }
      if (!formData.contactMethod) newErrors.contactMethod = text.errors.required;
    }

    if (step === 3) {
      if (!formData.challenges.trim()) newErrors.challenges = text.errors.required;
      if (formData.solutions.length === 0) newErrors.solutions = text.errors.required;
    }

    if (step === 4) {
      if (!formData.timeline) newErrors.timeline = text.errors.required;
      if (!formData.source) newErrors.source = text.errors.required;
      if (!formData.privacyAccepted) newErrors.privacyAccepted = text.errors.privacy;
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleNext = () => {
    if (validateStep(currentStep)) {
      setCurrentStep(prev => Math.min(prev + 1, 4));
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  };

  const handlePrevious = () => {
    setCurrentStep(prev => Math.max(prev - 1, 1));
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    // Honeypot check
    if (formData.honeypot) {
      console.log('Spam detected');
      return;
    }

    if (!validateStep(4)) return;

    setIsSubmitting(true);

    try {
      // Here you would integrate with your backend API or email service
      // Example: await fetch('/api/contact', { method: 'POST', body: JSON.stringify(formData) });

      // Simulate API call
      await new Promise(resolve => setTimeout(resolve, 2000));

      console.log('Form submitted:', formData);
      setIsSubmitted(true);
    } catch (error) {
      console.error('Submission error:', error);
      alert(lang === 'ja' ? 'エラーが発生しました。もう一度お試しください。' : 'An error occurred. Please try again.');
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleInputChange = (field: keyof FormData, value: string | boolean | string[]) => {
    setFormData(prev => ({ ...prev, [field]: value }));
    if (errors[field]) {
      setErrors(prev => {
        const newErrors = { ...prev };
        delete newErrors[field];
        return newErrors;
      });
    }
  };

  const handleCheckboxChange = (value: string) => {
    setFormData(prev => ({
      ...prev,
      solutions: prev.solutions.includes(value)
        ? prev.solutions.filter(s => s !== value)
        : [...prev.solutions, value]
    }));
  };

  if (isSubmitted) {
    return (
      <section id="contact-form" className="py-20 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            className="max-w-2xl mx-auto text-center"
          >
            <div className="mb-8">
              <svg className="w-20 h-20 text-green-500 mx-auto" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
            </div>
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              {text.success.title}
            </h2>
            <p className="text-xl text-gray-600 mb-4">
              {text.success.message}
            </p>
            <p className="text-gray-500">
              {text.success.detail}
            </p>
          </motion.div>
        </div>
      </section>
    );
  }

  return (
    <section id="contact-form" className="py-20 bg-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-4xl font-bold text-gray-900 mb-8">
              {text.formTitle}
            </h2>

            {/* Progress Indicator */}
            <div className="flex justify-between items-center mb-12">
              {[1, 2, 3, 4].map((step) => (
                <div key={step} className="flex-1 flex items-center">
                  <div className="flex flex-col items-center flex-1">
                    <div className={`w-10 h-10 rounded-full flex items-center justify-center font-bold transition-all ${
                      currentStep >= step
                        ? 'bg-solunai-blue text-white'
                        : 'bg-gray-200 text-gray-500'
                    }`}>
                      {step}
                    </div>
                    <div className={`mt-2 text-xs md:text-sm font-medium transition-all ${
                      currentStep >= step ? 'text-solunai-blue' : 'text-gray-400'
                    }`}>
                      {text.steps[step - 1]}
                    </div>
                  </div>
                  {step < 4 && (
                    <div className={`flex-1 h-1 mx-2 transition-all ${
                      currentStep > step ? 'bg-solunai-blue' : 'bg-gray-200'
                    }`}></div>
                  )}
                </div>
              ))}
            </div>
          </motion.div>

          <form onSubmit={handleSubmit} className="bg-gray-50 rounded-2xl shadow-xl p-8 md:p-12">
            <AnimatePresence mode="wait">
              {/* Step 1: Company Information */}
              {currentStep === 1 && (
                <motion.div
                  key="step1"
                  initial={{ opacity: 0, x: 50 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -50 }}
                  transition={{ duration: 0.3 }}
                >
                  <h3 className="text-2xl font-bold text-gray-900 mb-8">{text.step1.title}</h3>

                  <div className="space-y-6">
                    <div>
                      <label className="block text-sm font-semibold text-gray-700 mb-2">
                        {text.step1.companyName} <span className="text-red-500">*</span>
                      </label>
                      <input
                        type="text"
                        value={formData.companyName}
                        onChange={(e) => handleInputChange('companyName', e.target.value)}
                        className={`w-full px-4 py-3 border rounded-lg focus:ring-2 focus:ring-solunai-blue focus:border-transparent ${
                          errors.companyName ? 'border-red-500' : 'border-gray-300'
                        }`}
                      />
                      {errors.companyName && <p className="mt-1 text-sm text-red-500">{errors.companyName}</p>}
                    </div>

                    <div>
                      <label className="block text-sm font-semibold text-gray-700 mb-2">
                        {text.step1.industry} <span className="text-red-500">*</span>
                      </label>
                      <select
                        value={formData.industry}
                        onChange={(e) => handleInputChange('industry', e.target.value)}
                        className={`w-full px-4 py-3 border rounded-lg focus:ring-2 focus:ring-solunai-blue focus:border-transparent ${
                          errors.industry ? 'border-red-500' : 'border-gray-300'
                        }`}
                      >
                        {text.step1.industries.map(option => (
                          <option key={option.value} value={option.value}>{option.label}</option>
                        ))}
                      </select>
                      {errors.industry && <p className="mt-1 text-sm text-red-500">{errors.industry}</p>}
                    </div>

                    <div>
                      <label className="block text-sm font-semibold text-gray-700 mb-2">
                        {text.step1.employeeCount} <span className="text-red-500">*</span>
                      </label>
                      <select
                        value={formData.employeeCount}
                        onChange={(e) => handleInputChange('employeeCount', e.target.value)}
                        className={`w-full px-4 py-3 border rounded-lg focus:ring-2 focus:ring-solunai-blue focus:border-transparent ${
                          errors.employeeCount ? 'border-red-500' : 'border-gray-300'
                        }`}
                      >
                        {text.step1.employeeCounts.map(option => (
                          <option key={option.value} value={option.value}>{option.label}</option>
                        ))}
                      </select>
                      {errors.employeeCount && <p className="mt-1 text-sm text-red-500">{errors.employeeCount}</p>}
                    </div>

                    <div>
                      <label className="block text-sm font-semibold text-gray-700 mb-2">
                        {text.step1.revenue}
                      </label>
                      <select
                        value={formData.revenue}
                        onChange={(e) => handleInputChange('revenue', e.target.value)}
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-solunai-blue focus:border-transparent"
                      >
                        {text.step1.revenues.map(option => (
                          <option key={option.value} value={option.value}>{option.label}</option>
                        ))}
                      </select>
                    </div>

                    <div>
                      <label className="block text-sm font-semibold text-gray-700 mb-2">
                        {text.step1.website}
                      </label>
                      <input
                        type="url"
                        value={formData.website}
                        onChange={(e) => handleInputChange('website', e.target.value)}
                        placeholder="https://"
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-solunai-blue focus:border-transparent"
                      />
                    </div>
                  </div>
                </motion.div>
              )}

              {/* Step 2: Your Information */}
              {currentStep === 2 && (
                <motion.div
                  key="step2"
                  initial={{ opacity: 0, x: 50 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -50 }}
                  transition={{ duration: 0.3 }}
                >
                  <h3 className="text-2xl font-bold text-gray-900 mb-8">{text.step2.title}</h3>

                  <div className="space-y-6">
                    <div>
                      <label className="block text-sm font-semibold text-gray-700 mb-2">
                        {text.step2.name} <span className="text-red-500">*</span>
                      </label>
                      <input
                        type="text"
                        value={formData.name}
                        onChange={(e) => handleInputChange('name', e.target.value)}
                        className={`w-full px-4 py-3 border rounded-lg focus:ring-2 focus:ring-solunai-blue focus:border-transparent ${
                          errors.name ? 'border-red-500' : 'border-gray-300'
                        }`}
                      />
                      {errors.name && <p className="mt-1 text-sm text-red-500">{errors.name}</p>}
                    </div>

                    <div>
                      <label className="block text-sm font-semibold text-gray-700 mb-2">
                        {text.step2.title} <span className="text-red-500">*</span>
                      </label>
                      <input
                        type="text"
                        value={formData.title}
                        onChange={(e) => handleInputChange('title', e.target.value)}
                        className={`w-full px-4 py-3 border rounded-lg focus:ring-2 focus:ring-solunai-blue focus:border-transparent ${
                          errors.title ? 'border-red-500' : 'border-gray-300'
                        }`}
                      />
                      {errors.title && <p className="mt-1 text-sm text-red-500">{errors.title}</p>}
                    </div>

                    <div>
                      <label className="block text-sm font-semibold text-gray-700 mb-2">
                        {text.step2.email} <span className="text-red-500">*</span>
                      </label>
                      <input
                        type="email"
                        value={formData.email}
                        onChange={(e) => handleInputChange('email', e.target.value)}
                        className={`w-full px-4 py-3 border rounded-lg focus:ring-2 focus:ring-solunai-blue focus:border-transparent ${
                          errors.email ? 'border-red-500' : 'border-gray-300'
                        }`}
                      />
                      {errors.email && <p className="mt-1 text-sm text-red-500">{errors.email}</p>}
                    </div>

                    <div>
                      <label className="block text-sm font-semibold text-gray-700 mb-2">
                        {text.step2.phone} <span className="text-red-500">*</span>
                      </label>
                      <input
                        type="tel"
                        value={formData.phone}
                        onChange={(e) => handleInputChange('phone', e.target.value)}
                        className={`w-full px-4 py-3 border rounded-lg focus:ring-2 focus:ring-solunai-blue focus:border-transparent ${
                          errors.phone ? 'border-red-500' : 'border-gray-300'
                        }`}
                      />
                      {errors.phone && <p className="mt-1 text-sm text-red-500">{errors.phone}</p>}
                    </div>

                    <div>
                      <label className="block text-sm font-semibold text-gray-700 mb-2">
                        {text.step2.contactMethod} <span className="text-red-500">*</span>
                      </label>
                      <select
                        value={formData.contactMethod}
                        onChange={(e) => handleInputChange('contactMethod', e.target.value)}
                        className={`w-full px-4 py-3 border rounded-lg focus:ring-2 focus:ring-solunai-blue focus:border-transparent ${
                          errors.contactMethod ? 'border-red-500' : 'border-gray-300'
                        }`}
                      >
                        {text.step2.contactMethods.map(option => (
                          <option key={option.value} value={option.value}>{option.label}</option>
                        ))}
                      </select>
                      {errors.contactMethod && <p className="mt-1 text-sm text-red-500">{errors.contactMethod}</p>}
                    </div>
                  </div>
                </motion.div>
              )}

              {/* Step 3: Challenges */}
              {currentStep === 3 && (
                <motion.div
                  key="step3"
                  initial={{ opacity: 0, x: 50 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -50 }}
                  transition={{ duration: 0.3 }}
                >
                  <h3 className="text-2xl font-bold text-gray-900 mb-8">{text.step3.title}</h3>

                  <div className="space-y-6">
                    <div>
                      <label className="block text-sm font-semibold text-gray-700 mb-2">
                        {text.step3.challenges} <span className="text-red-500">*</span>
                      </label>
                      <textarea
                        value={formData.challenges}
                        onChange={(e) => handleInputChange('challenges', e.target.value)}
                        rows={6}
                        placeholder={text.step3.challengesPlaceholder}
                        className={`w-full px-4 py-3 border rounded-lg focus:ring-2 focus:ring-solunai-blue focus:border-transparent ${
                          errors.challenges ? 'border-red-500' : 'border-gray-300'
                        }`}
                      />
                      {errors.challenges && <p className="mt-1 text-sm text-red-500">{errors.challenges}</p>}
                    </div>

                    <div>
                      <label className="block text-sm font-semibold text-gray-700 mb-4">
                        {text.step3.solutions} <span className="text-red-500">*</span>
                      </label>
                      <div className="space-y-3">
                        {text.step3.solutionOptions.map(option => (
                          <label key={option.value} className="flex items-center p-4 border border-gray-300 rounded-lg hover:bg-gray-50 cursor-pointer transition-colors">
                            <input
                              type="checkbox"
                              checked={formData.solutions.includes(option.value)}
                              onChange={() => handleCheckboxChange(option.value)}
                              className="w-5 h-5 text-solunai-blue border-gray-300 rounded focus:ring-solunai-blue"
                            />
                            <span className="ml-3 text-gray-700">{option.label}</span>
                          </label>
                        ))}
                      </div>
                      {errors.solutions && <p className="mt-1 text-sm text-red-500">{errors.solutions}</p>}
                    </div>
                  </div>
                </motion.div>
              )}

              {/* Step 4: Timeline & Source */}
              {currentStep === 4 && (
                <motion.div
                  key="step4"
                  initial={{ opacity: 0, x: 50 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -50 }}
                  transition={{ duration: 0.3 }}
                >
                  <h3 className="text-2xl font-bold text-gray-900 mb-8">{text.step4.title}</h3>

                  <div className="space-y-6">
                    <div>
                      <label className="block text-sm font-semibold text-gray-700 mb-2">
                        {text.step4.timeline} <span className="text-red-500">*</span>
                      </label>
                      <select
                        value={formData.timeline}
                        onChange={(e) => handleInputChange('timeline', e.target.value)}
                        className={`w-full px-4 py-3 border rounded-lg focus:ring-2 focus:ring-solunai-blue focus:border-transparent ${
                          errors.timeline ? 'border-red-500' : 'border-gray-300'
                        }`}
                      >
                        {text.step4.timelines.map(option => (
                          <option key={option.value} value={option.value}>{option.label}</option>
                        ))}
                      </select>
                      {errors.timeline && <p className="mt-1 text-sm text-red-500">{errors.timeline}</p>}
                    </div>

                    <div>
                      <label className="block text-sm font-semibold text-gray-700 mb-2">
                        {text.step4.budget}
                      </label>
                      <select
                        value={formData.budget}
                        onChange={(e) => handleInputChange('budget', e.target.value)}
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-solunai-blue focus:border-transparent"
                      >
                        {text.step4.budgets.map(option => (
                          <option key={option.value} value={option.value}>{option.label}</option>
                        ))}
                      </select>
                    </div>

                    <div>
                      <label className="block text-sm font-semibold text-gray-700 mb-2">
                        {text.step4.source} <span className="text-red-500">*</span>
                      </label>
                      <select
                        value={formData.source}
                        onChange={(e) => handleInputChange('source', e.target.value)}
                        className={`w-full px-4 py-3 border rounded-lg focus:ring-2 focus:ring-solunai-blue focus:border-transparent ${
                          errors.source ? 'border-red-500' : 'border-gray-300'
                        }`}
                      >
                        {text.step4.sources.map(option => (
                          <option key={option.value} value={option.value}>{option.label}</option>
                        ))}
                      </select>
                      {errors.source && <p className="mt-1 text-sm text-red-500">{errors.source}</p>}
                    </div>

                    {(formData.source === 'referral' || formData.source === 'other') && (
                      <div>
                        <label className="block text-sm font-semibold text-gray-700 mb-2">
                          {text.step4.sourceDetail}
                        </label>
                        <input
                          type="text"
                          value={formData.sourceDetail}
                          onChange={(e) => handleInputChange('sourceDetail', e.target.value)}
                          className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-solunai-blue focus:border-transparent"
                        />
                      </div>
                    )}

                    {/* Honeypot field - hidden from users */}
                    <input
                      type="text"
                      name="website_url"
                      value={formData.honeypot}
                      onChange={(e) => handleInputChange('honeypot', e.target.value)}
                      style={{ position: 'absolute', left: '-9999px' }}
                      tabIndex={-1}
                      autoComplete="off"
                    />

                    {/* Privacy Section */}
                    <div className="mt-8 p-6 bg-blue-50 rounded-lg border border-blue-100">
                      <h4 className="font-bold text-gray-900 mb-3">{text.privacy.title}</h4>
                      <ul className="space-y-2 mb-4">
                        {text.privacy.points.map((point, index) => (
                          <li key={index} className="flex items-start gap-2 text-sm text-gray-700">
                            <svg className="w-5 h-5 text-green-500 flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                            </svg>
                            <span>{point}</span>
                          </li>
                        ))}
                      </ul>

                      <label className={`flex items-start gap-3 p-4 border-2 rounded-lg cursor-pointer transition-colors ${
                        errors.privacyAccepted ? 'border-red-500 bg-red-50' : 'border-gray-300 bg-white hover:bg-gray-50'
                      }`}>
                        <input
                          type="checkbox"
                          checked={formData.privacyAccepted}
                          onChange={(e) => handleInputChange('privacyAccepted', e.target.checked)}
                          className="w-5 h-5 text-solunai-blue border-gray-300 rounded focus:ring-solunai-blue mt-0.5"
                        />
                        <span className="text-sm text-gray-700">
                          {text.privacy.acceptance}
                        </span>
                      </label>
                      {errors.privacyAccepted && <p className="mt-2 text-sm text-red-500">{errors.privacyAccepted}</p>}

                      <div className="mt-3 flex gap-4 text-sm">
                        <a href="#" className="text-solunai-blue hover:underline">{text.privacy.privacyPolicy}</a>
                        <a href="#" className="text-solunai-blue hover:underline">{text.privacy.terms}</a>
                      </div>
                    </div>
                  </div>
                </motion.div>
              )}
            </AnimatePresence>

            {/* Navigation Buttons */}
            <div className="flex justify-between items-center mt-12 pt-8 border-t border-gray-200">
              {currentStep > 1 ? (
                <button
                  type="button"
                  onClick={handlePrevious}
                  className="px-8 py-3 border-2 border-gray-300 text-gray-700 font-semibold rounded-full hover:bg-gray-50 transition-all"
                >
                  {text.buttons.previous}
                </button>
              ) : (
                <div></div>
              )}

              {currentStep < 4 ? (
                <button
                  type="button"
                  onClick={handleNext}
                  className="px-8 py-3 bg-solunai-blue text-white font-semibold rounded-full hover:bg-blue-700 transition-all shadow-lg hover:shadow-xl"
                >
                  {text.buttons.next}
                </button>
              ) : (
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="px-8 py-3 bg-green-600 text-white font-semibold rounded-full hover:bg-green-700 transition-all shadow-lg hover:shadow-xl disabled:opacity-50 disabled:cursor-not-allowed flex items-center gap-2"
                >
                  {isSubmitting ? (
                    <>
                      <svg className="animate-spin h-5 w-5" viewBox="0 0 24 24">
                        <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" fill="none" />
                        <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z" />
                      </svg>
                      <span>{lang === 'ja' ? '送信中...' : 'Submitting...'}</span>
                    </>
                  ) : (
                    text.buttons.submit
                  )}
                </button>
              )}
            </div>
          </form>
        </div>
      </div>
    </section>
  );
};

export default ContactForm;
