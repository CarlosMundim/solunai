'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import './Header.css';

interface HeaderProps {
  lang: 'ja' | 'en';
}

const Header: React.FC<HeaderProps> = ({ lang }) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const navigation = {
    ja: {
      links: [
        { href: '#solutions', label: 'ソリューション' },
        { href: '#services', label: 'サービス' },
        { href: '#case-studies', label: '事例紹介' },
        { href: '#company', label: '会社情報' },
        { href: '#contact', label: 'お問い合わせ' }
      ],
      languageToggle: { href: '/en', label: 'English' }
    },
    en: {
      links: [
        { href: '#solutions', label: 'Solutions' },
        { href: '#services', label: 'Services' },
        { href: '#case-studies', label: 'Case Studies' },
        { href: '#company', label: 'Company' },
        { href: '#contact', label: 'Contact' }
      ],
      languageToggle: { href: '/', label: '日本語' }
    }
  };

  const currentNav = navigation[lang];

  return (
    <header className="site-header">
      <div className="header-container">
        <div className="logo">
          <Link href={lang === 'ja' ? '/' : '/en'}>
            <Image
              src="/images/Solunai_New_Logo.png"
              alt="Solunai"
              width={160}
              height={40}
              priority
            />
          </Link>
        </div>

        {/* Desktop Navigation */}
        <nav className="main-nav desktop-nav">
          <ul>
            {currentNav.links.map((link) => (
              <li key={link.href}>
                <a href={link.href}>{link.label}</a>
              </li>
            ))}
          </ul>
        </nav>

        {/* Language Toggle */}
        <div className="language-toggle">
          <Link href={currentNav.languageToggle.href} className="lang-switch">
            {currentNav.languageToggle.label}
          </Link>
        </div>

        {/* Mobile Menu Button */}
        <button
          className="mobile-menu-button"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          aria-label="Toggle menu"
        >
          <span className={`hamburger ${mobileMenuOpen ? 'open' : ''}`}>
            <span></span>
            <span></span>
            <span></span>
          </span>
        </button>
      </div>

      {/* Mobile Navigation */}
      {mobileMenuOpen && (
        <nav className="main-nav mobile-nav">
          <ul>
            {currentNav.links.map((link) => (
              <li key={link.href}>
                <a
                  href={link.href}
                  onClick={() => setMobileMenuOpen(false)}
                >
                  {link.label}
                </a>
              </li>
            ))}
          </ul>
        </nav>
      )}
    </header>
  );
};

export default Header;
