'use client';

import React from 'react';
import './Footer.css';

interface FooterProps {
  lang: 'ja' | 'en';
}

const Footer: React.FC<FooterProps> = ({ lang }) => {
  const content = {
    ja: {
      impactHeadline: 'AI革命\n日本の製造業における',
      solutions: {
        title: 'ソリューション',
        links: [
          { label: '概要', href: '/solutions/overview' },
          { label: 'デジタルツイン', href: '/solutions/digital-twin' },
          { label: 'コンピュータビジョン', href: '/solutions/computer-vision' },
          { label: '予知保全', href: '/solutions/predictive-maintenance' },
          { label: '生産最適化', href: '/solutions/production-optimization' },
          { label: 'グローバルエンジニア', href: '/solutions/global-engineering' }
        ]
      },
      company: {
        title: '企業情報',
        links: [
          { label: '会社概要', href: '/about' },
          { label: 'チーム', href: '/about#team' },
          { label: 'パートナー', href: '/about#partners' }
        ]
      },
      support: {
        title: 'サポート',
        links: [
          { label: 'お問い合わせ', href: '/contact' },
          { label: 'プライバシーポリシー', href: '/privacy' },
          { label: '利用規約', href: '/terms' }
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
      copyright: '© 2025 Solunai Systems K.K.'
    },
    en: {
      impactHeadline: 'AI revolution\nin\nJapanese manufacturing',
      solutions: {
        title: 'Solutions',
        links: [
          { label: 'Overview', href: '/en/solutions/overview' },
          { label: 'Digital Twin', href: '/en/solutions/digital-twin' },
          { label: 'Computer Vision', href: '/en/solutions/computer-vision' },
          { label: 'Predictive Maintenance', href: '/en/solutions/predictive-maintenance' },
          { label: 'Production Optimization', href: '/en/solutions/production-optimization' },
          { label: 'Global Engineering', href: '/en/solutions/global-engineering' }
        ]
      },
      company: {
        title: 'Company',
        links: [
          { label: 'About Us', href: '/en/about' },
          { label: 'Team', href: '/en/about#team' },
          { label: 'Partners', href: '/en/about#partners' }
        ]
      },
      support: {
        title: 'Support',
        links: [
          { label: 'Contact Us', href: '/en/contact' },
          { label: 'Privacy Policy', href: '/en/privacy' },
          { label: 'Terms of Service', href: '/en/terms' }
        ]
      },
      contact: {
        title: 'Contact',
        email: 'info@solunai.co.jp',
        headquarters: {
          label: 'Headquarters',
          name: 'WISE NEXT Shin-Yokohama 4F',
          address: '2-5-14 Kohoku-ku, Yokohama',
          postalCode: 'Kanagawa 222-0033',
          phone: '045-285-9480'
        },
        tokyoBranch: {
          label: 'Tokyo Branch',
          name: 'Ginza Otake Bizidense 2F',
          address: '1-22-11 Ginza, Chuo-ku',
          postalCode: 'Tokyo 104-0061'
        }
      },
      copyright: '© 2025 Solunai Systems K.K.'
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
