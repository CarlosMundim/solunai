'use client';

import React, { useState } from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: '',
    company: '',
    email: '',
    phone: '',
    subject: '',
    message: ''
  });
  const [submitted, setSubmitted] = useState(false);
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission (client-side only for now)
    setSubmitted(true);
    setTimeout(() => {
      setSubmitted(false);
      setFormData({ name: '', company: '', email: '', phone: '', subject: '', message: '' });
    }, 5000);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const faqs = [
    {
      question: 'どのような業界にサービスを提供していますか？',
      answer: '製造業（自動車、電子機器、精密加工）、人事テクノロジー、グローバルエンジニアリングソリューションを、日本国内および世界中の企業に提供しています。'
    },
    {
      question: '実装にはどのくらいの時間がかかりますか？',
      answer: '実装には通常、範囲と複雑さに応じて3〜9ヶ月かかります。パイロットプログラムは6〜12週間で開始し、迅速に価値を実証できます。'
    },
    {
      question: '一般的なROIはどのくらいですか？',
      answer: 'クライアント事例に基づくと、企業は通常3年間で55〜121%のROIを達成しており、初年度から効率、品質、コスト削減において測定可能な改善が見られます。'
    },
    {
      question: 'メンテナンスサポートは提供されますか？',
      answer: 'はい、すべての契約に24時間365日の監視とサポートが含まれています。プロアクティブなメンテナンス、定期的なアップデート、専任の技術サポートを提供し、最適なパフォーマンスを確保します。'
    },
    {
      question: '既存のシステムと統合できますか？',
      answer: 'もちろんです。すべての主要なMES、ERP、SCADAシステムとシームレスに統合します。私たちのソリューションは、既存のインフラストラクチャを置き換えるのではなく、強化するように設計されています。'
    },
    {
      question: '中小企業にも対応していますか、それとも大企業のみですか？',
      answer: '両方に対応しています。中小企業から大規模多国籍企業まで、あらゆる規模の企業向けにスケーラブルなソリューションを提供しています。'
    },
    {
      question: 'どの言語をサポートしていますか？',
      answer: '日本語と英語の完全なバイリンガルサポートを、ネイティブスピーカーのチームメンバーが提供します。グローバルネットワークを通じて、必要に応じて追加の言語もサポートできます。'
    },
    {
      question: 'どのように始めればよいですか？',
      answer: 'このフォーム、メール、または電話でお問い合わせください。無料相談を予約して、お客様のニーズを評価し、ビジネスに合わせたカスタマイズされた提案を作成します。'
    }
  ];

  return (
    <main className="min-h-screen">
      <Header lang="ja" />

      {/* Hero Section */}
      <section style={{
        background: 'linear-gradient(135deg, #1a1a2e 0%, #2d2d44 100%)',
        padding: '200px 20px',
        textAlign: 'center',
        color: '#ffffff'
      }}>
        <div style={{ maxWidth: '1200px', margin: '0 auto' }}>
          <h1 style={{
            fontSize: '48px',
            fontWeight: 700,
            marginBottom: '24px',
            lineHeight: 1.2
          }}>
            お問い合わせ
          </h1>
          <p style={{
            fontSize: '20px',
            fontWeight: 400,
            color: '#e0e0e0',
            maxWidth: '800px',
            margin: '0 auto'
          }}>
            AIがどのように製造業務を変革できるか、ぜひご相談ください
          </p>
        </div>
      </section>

      {/* Contact Form and Office Info Section */}
      <section style={{
        padding: '80px 20px',
        backgroundColor: '#f9fafb'
      }}>
        <div style={{
          maxWidth: '1200px',
          margin: '0 auto',
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(400px, 1fr))',
          gap: '40px'
        }}>
          {/* Contact Form */}
          <div style={{
            backgroundColor: '#ffffff',
            padding: '40px',
            borderRadius: '16px',
            boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)'
          }}>
            <h2 style={{
              fontSize: '28px',
              fontWeight: 700,
              color: '#171717',
              marginBottom: '24px'
            }}>
              メッセージを送信
            </h2>

            {submitted ? (
              <div style={{
                padding: '24px',
                backgroundColor: '#d1fae5',
                borderRadius: '8px',
                color: '#065f46',
                marginBottom: '24px'
              }}>
                <p style={{ fontSize: '16px', fontWeight: 600 }}>
                  お問い合わせいただきありがとうございます！24営業時間以内にご返信いたします。
                </p>
              </div>
            ) : null}

            <form onSubmit={handleSubmit}>
              <div style={{ marginBottom: '20px' }}>
                <label style={{
                  display: 'block',
                  fontSize: '14px',
                  fontWeight: 600,
                  color: '#171717',
                  marginBottom: '8px'
                }}>
                  お名前 *
                </label>
                <input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  style={{
                    width: '100%',
                    padding: '12px 16px',
                    fontSize: '16px',
                    border: '1px solid #d1d5db',
                    borderRadius: '8px',
                    outline: 'none',
                    transition: 'border-color 0.2s'
                  }}
                />
              </div>

              <div style={{ marginBottom: '20px' }}>
                <label style={{
                  display: 'block',
                  fontSize: '14px',
                  fontWeight: 600,
                  color: '#171717',
                  marginBottom: '8px'
                }}>
                  会社名
                </label>
                <input
                  type="text"
                  name="company"
                  value={formData.company}
                  onChange={handleChange}
                  style={{
                    width: '100%',
                    padding: '12px 16px',
                    fontSize: '16px',
                    border: '1px solid #d1d5db',
                    borderRadius: '8px',
                    outline: 'none'
                  }}
                />
              </div>

              <div style={{ marginBottom: '20px' }}>
                <label style={{
                  display: 'block',
                  fontSize: '14px',
                  fontWeight: 600,
                  color: '#171717',
                  marginBottom: '8px'
                }}>
                  メールアドレス *
                </label>
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  style={{
                    width: '100%',
                    padding: '12px 16px',
                    fontSize: '16px',
                    border: '1px solid #d1d5db',
                    borderRadius: '8px',
                    outline: 'none'
                  }}
                />
              </div>

              <div style={{ marginBottom: '20px' }}>
                <label style={{
                  display: 'block',
                  fontSize: '14px',
                  fontWeight: 600,
                  color: '#171717',
                  marginBottom: '8px'
                }}>
                  電話番号
                </label>
                <input
                  type="tel"
                  name="phone"
                  value={formData.phone}
                  onChange={handleChange}
                  style={{
                    width: '100%',
                    padding: '12px 16px',
                    fontSize: '16px',
                    border: '1px solid #d1d5db',
                    borderRadius: '8px',
                    outline: 'none'
                  }}
                />
              </div>

              <div style={{ marginBottom: '20px' }}>
                <label style={{
                  display: 'block',
                  fontSize: '14px',
                  fontWeight: 600,
                  color: '#171717',
                  marginBottom: '8px'
                }}>
                  件名 *
                </label>
                <input
                  type="text"
                  name="subject"
                  value={formData.subject}
                  onChange={handleChange}
                  required
                  style={{
                    width: '100%',
                    padding: '12px 16px',
                    fontSize: '16px',
                    border: '1px solid #d1d5db',
                    borderRadius: '8px',
                    outline: 'none'
                  }}
                />
              </div>

              <div style={{ marginBottom: '24px' }}>
                <label style={{
                  display: 'block',
                  fontSize: '14px',
                  fontWeight: 600,
                  color: '#171717',
                  marginBottom: '8px'
                }}>
                  メッセージ *
                </label>
                <textarea
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows={6}
                  style={{
                    width: '100%',
                    padding: '12px 16px',
                    fontSize: '16px',
                    border: '1px solid #d1d5db',
                    borderRadius: '8px',
                    outline: 'none',
                    resize: 'vertical',
                    fontFamily: 'inherit'
                  }}
                />
              </div>

              <button
                type="submit"
                style={{
                  width: '100%',
                  padding: '16px 32px',
                  backgroundColor: '#FF5722',
                  color: '#ffffff',
                  fontSize: '18px',
                  fontWeight: 600,
                  border: 'none',
                  borderRadius: '50px',
                  cursor: 'pointer',
                  transition: 'all 0.3s ease',
                  boxShadow: '0 4px 6px rgba(255, 87, 34, 0.3)'
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.backgroundColor = '#E64A19';
                  e.currentTarget.style.transform = 'translateY(-2px)';
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.backgroundColor = '#FF5722';
                  e.currentTarget.style.transform = 'translateY(0)';
                }}
              >
                送信
              </button>

              <p style={{
                marginTop: '16px',
                fontSize: '14px',
                color: '#6b7280',
                textAlign: 'center'
              }}>
                24営業時間以内にご返信いたします
              </p>
            </form>
          </div>

          {/* Office Locations */}
          <div>
            <div style={{
              backgroundColor: '#ffffff',
              padding: '40px',
              borderRadius: '16px',
              boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)',
              marginBottom: '24px'
            }}>
              <h2 style={{
                fontSize: '28px',
                fontWeight: 700,
                color: '#171717',
                marginBottom: '32px'
              }}>
                オフィス所在地
              </h2>

              {/* Yokohama HQ */}
              <div style={{ marginBottom: '32px' }}>
                <h3 style={{
                  fontSize: '20px',
                  fontWeight: 600,
                  color: '#FF5722',
                  marginBottom: '16px'
                }}>
                  横浜本社
                </h3>
                <div style={{ fontSize: '16px', lineHeight: 1.8, color: '#171717' }}>
                  <p style={{ marginBottom: '8px' }}>
                    <strong>WISE NEXT 新横浜 4F</strong>
                  </p>
                  <p style={{ marginBottom: '8px' }}>
                    神奈川県横浜市港北区新横浜2-5-14
                  </p>
                  <p style={{ marginBottom: '8px' }}>
                    〒222-0033
                  </p>
                  <p style={{ marginBottom: '8px' }}>
                    <strong>電話:</strong> 045-285-9480
                  </p>
                  <p>
                    <strong>メール:</strong>{' '}
                    <a href="mailto:info@solunai.co.jp" style={{ color: '#FF5722' }}>
                      info@solunai.co.jp
                    </a>
                  </p>
                </div>
              </div>

              {/* Tokyo Branch */}
              <div>
                <h3 style={{
                  fontSize: '20px',
                  fontWeight: 600,
                  color: '#FF5722',
                  marginBottom: '16px'
                }}>
                  東京支社
                </h3>
                <div style={{ fontSize: '16px', lineHeight: 1.8, color: '#171717' }}>
                  <p style={{ marginBottom: '8px' }}>
                    <strong>銀座大竹ビジデンス 2F</strong>
                  </p>
                  <p style={{ marginBottom: '8px' }}>
                    東京都中央区銀座1-22-11
                  </p>
                  <p style={{ marginBottom: '8px' }}>
                    〒104-0061
                  </p>
                  <p style={{ marginBottom: '8px' }}>
                    <strong>電話:</strong> +81-3-XXXX-XXXX
                  </p>
                  <p>
                    <strong>メール:</strong>{' '}
                    <a href="mailto:tokyo@solunai.co.jp" style={{ color: '#FF5722' }}>
                      tokyo@solunai.co.jp
                    </a>
                  </p>
                </div>
              </div>
            </div>

            {/* Business Hours */}
            <div style={{
              backgroundColor: '#ffffff',
              padding: '32px',
              borderRadius: '16px',
              boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)'
            }}>
              <h3 style={{
                fontSize: '20px',
                fontWeight: 600,
                color: '#171717',
                marginBottom: '16px'
              }}>
                営業時間
              </h3>
              <p style={{ fontSize: '16px', lineHeight: 1.8, color: '#171717' }}>
                月曜日〜金曜日: 9:00 - 18:00 (JST)
                <br />
                土曜日・日曜日: 休業
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section style={{
        padding: '80px 20px',
        backgroundColor: '#ffffff'
      }}>
        <div style={{ maxWidth: '1200px', margin: '0 auto' }}>
          <h2 style={{
            fontSize: '48px',
            fontWeight: 700,
            color: '#171717',
            textAlign: 'center',
            marginBottom: '60px'
          }}>
            よくある質問
          </h2>

          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(500px, 1fr))',
            gap: '24px'
          }}>
            {faqs.map((faq, index) => (
              <div
                key={index}
                style={{
                  backgroundColor: '#f9fafb',
                  padding: '32px',
                  borderRadius: '12px',
                  border: '2px solid transparent',
                  transition: 'all 0.3s ease',
                  cursor: 'pointer'
                }}
                onClick={() => setOpenFaq(openFaq === index ? null : index)}
                onMouseEnter={(e) => {
                  e.currentTarget.style.borderColor = '#FF5722';
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.borderColor = 'transparent';
                }}
              >
                <div style={{
                  display: 'flex',
                  justifyContent: 'space-between',
                  alignItems: 'center',
                  marginBottom: openFaq === index ? '16px' : '0'
                }}>
                  <h3 style={{
                    fontSize: '18px',
                    fontWeight: 600,
                    color: '#171717'
                  }}>
                    {faq.question}
                  </h3>
                  <span style={{
                    fontSize: '24px',
                    color: '#FF5722',
                    transition: 'transform 0.3s ease',
                    transform: openFaq === index ? 'rotate(45deg)' : 'rotate(0deg)'
                  }}>
                    +
                  </span>
                </div>
                {openFaq === index && (
                  <p style={{
                    fontSize: '16px',
                    lineHeight: 1.6,
                    color: '#6b7280'
                  }}>
                    {faq.answer}
                  </p>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Map Section */}
      <section style={{
        padding: '80px 20px',
        backgroundColor: '#f9fafb'
      }}>
        <div style={{ maxWidth: '1200px', margin: '0 auto' }}>
          <h2 style={{
            fontSize: '36px',
            fontWeight: 700,
            color: '#171717',
            textAlign: 'center',
            marginBottom: '40px'
          }}>
            アクセス
          </h2>
          <div style={{
            backgroundColor: '#e5e7eb',
            height: '400px',
            borderRadius: '16px',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            color: '#6b7280',
            fontSize: '18px'
          }}>
            {/* Placeholder for Google Maps - Replace with actual map embed */}
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3247.8573876935857!2d139.61682931526045!3d35.50768598024842!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x60185f7a7a7a7a7a%3A0x7a7a7a7a7a7a7a7a!2sYokohama%2C%20Kanagawa!5e0!3m2!1sen!2sjp!4v1234567890"
              width="100%"
              height="100%"
              style={{ border: 0, borderRadius: '16px' }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            />
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section style={{
        background: 'linear-gradient(135deg, #1a1a2e 0%, #2d2d44 100%)',
        padding: '200px 20px',
        textAlign: 'center'
      }}>
        <div style={{ maxWidth: '800px', margin: '0 auto' }}>
          <h2 style={{
            fontSize: '48px',
            fontWeight: 700,
            color: '#ffffff',
            marginBottom: '24px',
            lineHeight: 1.2
          }}>
            製造業の変革を始めませんか？
          </h2>
          <p style={{
            fontSize: '20px',
            color: '#e0e0e0',
            marginBottom: '40px',
            lineHeight: 1.6
          }}>
            無料相談から始めて、AIがどのように業務を革新できるかをご確認ください
          </p>
          <a
            href="#contact-form"
            style={{
              display: 'inline-block',
              padding: '20px 48px',
              backgroundColor: '#FF5722',
              color: '#ffffff',
              fontSize: '18px',
              fontWeight: 600,
              borderRadius: '50px',
              textDecoration: 'none',
              transition: 'all 0.3s ease',
              boxShadow: '0 8px 16px rgba(255, 87, 34, 0.3)'
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.backgroundColor = '#E64A19';
              e.currentTarget.style.transform = 'translateY(-2px)';
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.backgroundColor = '#FF5722';
              e.currentTarget.style.transform = 'translateY(0)';
            }}
          >
            無料相談を予約
          </a>
        </div>
      </section>

      <Footer lang="ja" />
    </main>
  );
}
