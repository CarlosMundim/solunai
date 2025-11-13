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
      question: 'What industries do you serve?',
      answer: 'We specialize in manufacturing (automotive, electronics, precision machining), HR technology, and global engineering solutions for companies across Japan and internationally.'
    },
    {
      question: 'How long does implementation take?',
      answer: 'Implementation typically takes 3-9 months depending on the scope and complexity. We can launch pilot programs in as little as 6-12 weeks to demonstrate value quickly.'
    },
    {
      question: "What's the typical ROI?",
      answer: 'Based on our client case studies, companies typically see 55-121% ROI over 3 years, with measurable improvements in efficiency, quality, and cost reduction within the first year.'
    },
    {
      question: 'Do you offer maintenance support?',
      answer: 'Yes, all our contracts include 24/7 monitoring and support. We provide proactive maintenance, regular updates, and dedicated technical support to ensure optimal performance.'
    },
    {
      question: 'Can you integrate with our existing systems?',
      answer: 'Absolutely. We integrate seamlessly with all major MES, ERP, and SCADA systems. Our solutions are designed to enhance your current infrastructure, not replace it.'
    },
    {
      question: 'Do you work with SMEs or only large enterprises?',
      answer: 'Both. We have scalable solutions designed for companies of all sizes, from small and medium enterprises to large multinational corporations.'
    },
    {
      question: 'What languages do you support?',
      answer: 'We provide full bilingual support in Japanese and English, with native-speaking team members. Through our global network, we can support additional languages as needed.'
    },
    {
      question: 'How do we get started?',
      answer: 'Simply contact us through this form, email, or phone. We\'ll schedule a free consultation to assess your needs and develop a customized proposal for your business.'
    }
  ];

  return (
    <main className="min-h-screen">
      <Header lang="en" />

      {/* Hero Section */}
      <section style={{
        background: '#1a2332',
        padding: '120px 20px 60px',
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
            Get in Touch
          </h1>
          <p style={{
            fontSize: '20px',
            fontWeight: 400,
            color: '#e0e0e0',
            maxWidth: '800px',
            margin: '0 auto'
          }}>
            Let's discuss how AI can transform your manufacturing operations
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
              Send Us a Message
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
                  Thank you for contacting us! We'll respond within 24 business hours.
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
                  Name *
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
                  Company
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
                  Email *
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
                  Phone
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
                  Subject *
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
                  Message *
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
                  backgroundColor: '#f5480a',
                  color: '#ffffff',
                  fontSize: '18px',
                  fontWeight: 600,
                  border: 'none',
                  borderRadius: '50px',
                  cursor: 'pointer',
                  transition: 'all 0.3s ease',
                  boxShadow: '0 8px 32px rgba(245, 72, 10, 0.25)'
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.backgroundColor = '#ff6b35';
                  e.currentTarget.style.transform = 'translateY(-2px)';
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.backgroundColor = '#f5480a';
                  e.currentTarget.style.transform = 'translateY(0)';
                }}
              >
                Send Message
              </button>

              <p style={{
                marginTop: '16px',
                fontSize: '14px',
                color: '#6b7280',
                textAlign: 'center'
              }}>
                We'll respond within 24 business hours
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
                Office Locations
              </h2>

              {/* Yokohama HQ */}
              <div style={{ marginBottom: '32px' }}>
                <h3 style={{
                  fontSize: '20px',
                  fontWeight: 600,
                  color: '#f5480a',
                  marginBottom: '16px'
                }}>
                  Yokohama Headquarters
                </h3>
                <div style={{ fontSize: '16px', lineHeight: 1.8, color: '#171717' }}>
                  <p style={{ marginBottom: '8px' }}>
                    <strong>WISE NEXT Shin-Yokohama 4F</strong>
                  </p>
                  <p style={{ marginBottom: '8px' }}>
                    2-5-14 Kohoku-ku, Shin-Yokohama
                  </p>
                  <p style={{ marginBottom: '8px' }}>
                    Kanagawa 222-0033, Japan
                  </p>
                  <p style={{ marginBottom: '8px' }}>
                    <strong>Phone:</strong> +81-45-285-9480
                  </p>
                  <p>
                    <strong>Email:</strong>{' '}
                    <a href="mailto:info@solunai.co.jp" style={{ color: '#f5480a' }}>
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
                  color: '#f5480a',
                  marginBottom: '16px'
                }}>
                  Tokyo Branch
                </h3>
                <div style={{ fontSize: '16px', lineHeight: 1.8, color: '#171717' }}>
                  <p style={{ marginBottom: '8px' }}>
                    <strong>Ginza Otake Bizidense 2F</strong>
                  </p>
                  <p style={{ marginBottom: '8px' }}>
                    1-22-11 Ginza, Chuo-ku
                  </p>
                  <p style={{ marginBottom: '8px' }}>
                    Tokyo 104-0061, Japan
                  </p>
                  <p style={{ marginBottom: '8px' }}>
                    <strong>Phone:</strong> +81-3-XXXX-XXXX
                  </p>
                  <p>
                    <strong>Email:</strong>{' '}
                    <a href="mailto:tokyo@solunai.co.jp" style={{ color: '#f5480a' }}>
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
                Business Hours
              </h3>
              <p style={{ fontSize: '16px', lineHeight: 1.8, color: '#171717' }}>
                Monday - Friday: 9:00 AM - 6:00 PM JST
                <br />
                Saturday - Sunday: Closed
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section style={{
        padding: '120px 20px',
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
            Frequently Asked Questions
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
                  e.currentTarget.style.borderColor = '#f5480a';
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
                    color: '#f5480a',
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
            Find Us
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
        background: '#1a2332',
        padding: '120px 20px',
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
            Ready to Transform Your Manufacturing?
          </h2>
          <p style={{
            fontSize: '20px',
            color: '#e0e0e0',
            marginBottom: '40px',
            lineHeight: 1.6
          }}>
            Get started with a free consultation and discover how AI can revolutionize your operations
          </p>
          <a
            href="#contact-form"
            style={{
              display: 'inline-block',
              padding: '20px 48px',
              backgroundColor: '#f5480a',
              color: '#ffffff',
              fontSize: '18px',
              fontWeight: 600,
              borderRadius: '50px',
              textDecoration: 'none',
              transition: 'all 0.3s ease',
              boxShadow: '0 8px 32px rgba(245, 72, 10, 0.25)'
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.backgroundColor = '#ff6b35';
              e.currentTarget.style.transform = 'translateY(-2px)';
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.backgroundColor = '#f5480a';
              e.currentTarget.style.transform = 'translateY(0)';
            }}
          >
            Schedule Free Consultation
          </a>
        </div>
      </section>

      <Footer lang="en" />
    </main>
  );
}
