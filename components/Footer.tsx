'use client';

import React from 'react';
import './Footer.css';

interface FooterProps {
  lang: 'ja' | 'en';
}

const Footer: React.FC<FooterProps> = ({ lang }) => {
  const content = {
    ja: {
      impactHeadline: '人を見る、\n仕事が変わる。',
      solutions: {
        title: 'サービス',
        links: [
          { label: 'サービス一覧', href: '/services' },
          { label: '業務アシストAI', href: '/services#workflow' },
          { label: '人材・教育サポート', href: '/services#training' },
          { label: '経営レポートAI', href: '/services#reports' }
        ]
      },
      company: {
        title: '会社情報',
        links: [
          { label: 'Solunaiについて', href: '/about' },
          { label: '事例・インタビュー', href: '/cases' },
          { label: 'よくあるご質問', href: '/faq' }
        ]
      },
      support: {
        title: 'サポート',
        links: [
          { label: 'お問い合わせ', href: '/contact' },
          { label: 'セミナー・資料', href: '/resources' },
          { label: 'プライバシーポリシー', href: '/privacy' }
        ]
      },
      contact: {
        title: 'お問い合わせ',
        email: 'info@solunai.co.jp',
        headquarters: {
          label: '本社',
          name: 'WISE NEXT 新横浜 4F',
          address: '神奈川県横浜市港北区新横浜2-5-14',
          postalCode: '〒222-0033',
          phone: '045-285-9480'
        },
        tokyoBranch: {
          label: '東京支社',
          name: '銀座大竹ビジデンス 2F',
          address: '東京都中央区銀座1-22-11',
          postalCode: '〒104-0061'
        }
      },
      copyright: '© 2025 Solunai Systems 合同会社'
    },
    en: {
      impactHeadline: 'See the people,\nchange the work.',
      solutions: {
        title: 'Services',
        links: [
          { label: 'All Services', href: '/en/services' },
          { label: 'Workflow Assist AI', href: '/en/services#workflow' },
          { label: 'HR & Training Support', href: '/en/services#training' },
          { label: 'Management Report AI', href: '/en/services#reports' }
        ]
      },
      company: {
        title: 'Company',
        links: [
          { label: 'About Solunai', href: '/en/about' },
          { label: 'Case Studies', href: '/en/cases' },
          { label: 'FAQ', href: '/en/faq' }
        ]
      },
      support: {
        title: 'Support',
        links: [
          { label: 'Contact', href: '/en/contact' },
          { label: 'Resources', href: '/en/resources' },
          { label: 'Privacy Policy', href: '/en/privacy' }
        ]
      },
      contact: {
        title: 'Contact',
        email: 'info@solunai.co.jp',
        headquarters: {
          label: 'Headquarters',
          name: 'WISE NEXT Shin-Yokohama 4F',
          address: '2-5-14 Shin-Yokohama, Kohoku-ku, Yokohama',
          postalCode: 'Kanagawa 222-0033',
          phone: '+81-45-285-9480'
        },
        tokyoBranch: {
          label: 'Tokyo Branch',
          name: 'Ginza Otake Bizidense 2F',
          address: '1-22-11 Ginza, Chuo-ku',
          postalCode: 'Tokyo 104-0061'
        }
      },
      copyright: '© 2025 Solunai Systems G.K.'
    }
  };

  const currentContent = content[lang];

  return (
    <footer className="footer-section">
      <div className="footer-container">
        {/* Logo and Impact Headline */}
        <div className="footer-hero">
          <div className="footer-logo-container">
            <img
              src="/images/Solunai_New_Logo.png"
              alt="Solunai Logo"
              className="footer-logo"
            />
          </div>
          <h2 className="footer-impact-headline">
            {currentContent.impactHeadline.split('\n').map((line, index) => (
              <React.Fragment key={index}>
                {line}
                {index < currentContent.impactHeadline.split('\n').length - 1 && <br />}
              </React.Fragment>
            ))}
          </h2>
        </div>

        {/* Main Footer Content */}
        <div className="footer-grid">
          {/* Solutions Column */}
          <div className="footer-column">
            <h3 className="footer-column-title">{currentContent.solutions.title}</h3>
            <ul className="footer-links">
              {currentContent.solutions.links.map((link, index) => (
                <li key={index}>
                  <a href={link.href} className="footer-link">
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Company Column */}
          <div className="footer-column">
            <h3 className="footer-column-title">{currentContent.company.title}</h3>
            <ul className="footer-links">
              {currentContent.company.links.map((link, index) => (
                <li key={index}>
                  <a href={link.href} className="footer-link">
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Support Column */}
          <div className="footer-column">
            <h3 className="footer-column-title">{currentContent.support.title}</h3>
            <ul className="footer-links">
              {currentContent.support.links.map((link, index) => (
                <li key={index}>
                  <a href={link.href} className="footer-link">
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Column */}
          <div className="footer-column">
            <h3 className="footer-column-title">{currentContent.contact.title}</h3>
            <div className="footer-contact-info">
              <a href={`mailto:${currentContent.contact.email}`} className="footer-link footer-email">
                {currentContent.contact.email}
              </a>

              <div className="footer-office">
                <p className="footer-office-label">{currentContent.contact.headquarters.label}:</p>
                <p className="footer-office-name">{currentContent.contact.headquarters.name}</p>
                <p className="footer-office-address">{currentContent.contact.headquarters.address}</p>
                <p className="footer-office-postal">{currentContent.contact.headquarters.postalCode}</p>
                <p className="footer-office-phone">{currentContent.contact.headquarters.phone}</p>
              </div>

              <div className="footer-office">
                <p className="footer-office-label">{currentContent.contact.tokyoBranch.label}:</p>
                <p className="footer-office-name">{currentContent.contact.tokyoBranch.name}</p>
                <p className="footer-office-address">{currentContent.contact.tokyoBranch.address}</p>
                <p className="footer-office-postal">{currentContent.contact.tokyoBranch.postalCode}</p>
              </div>
            </div>
          </div>
        </div>

        {/* Footer Bottom */}
        <div className="footer-bottom">
          <div className="footer-bottom-content">
            <p className="footer-copyright">{currentContent.copyright}</p>
          </div>

          {/* LinkedIn Icon */}
          <a
            href="https://www.linkedin.com/company/solunai-systems/"
            target="_blank"
            rel="noopener noreferrer"
            className="footer-social"
            aria-label="LinkedIn"
          >
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" fill="currentColor"/>
            </svg>
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
