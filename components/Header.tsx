'use client';

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import './Header.css';

interface HeaderProps {
  lang: 'ja' | 'en';
}

interface DropdownItem {
  href: string;
  label: string;
}

interface NavLink {
  href?: string;
  label: string;
  isRoute?: boolean;
  dropdown?: DropdownItem[];
}

const Header: React.FC<HeaderProps> = ({ lang }) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);
  const [mobileDropdownOpen, setMobileDropdownOpen] = useState<string | null>(null);
  const [isScrolled, setIsScrolled] = useState(false);

  // Scroll listener to morph header
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navigation = {
    ja: {
      links: [
        { href: '/', label: 'ホーム', isRoute: true },
        { href: '/technology', label: 'テクノロジー', isRoute: true },
        {
          label: 'ソリューション',
          dropdown: [
            { href: '/solutions', label: 'ソリューション概要' },
            { href: '/solutions/healthcare', label: '医療・医学教育' },
            { href: '/solutions/nursing', label: '看護・介護教育' },
            { href: '/solutions/corporate-training', label: '企業研修' },
            { href: '/solutions/enterprise-automation', label: '業務自動化' },
            { href: '/solutions/cross-cultural', label: '多文化対応' }
          ]
        },
        {
          label: 'サービス',
          dropdown: [
            { href: '/services', label: 'サービス概要' },
            { href: '/services/advisory', label: 'AI統合アドバイザリー' },
            { href: '/services/automation', label: 'ワークフロー自動化' },
            { href: '/services/simulation', label: 'シミュレーション開発' },
            { href: '/services/sovereignty', label: 'データ主権コンサルティング' },
            { href: '/services/partners', label: 'パートナーソリューション' }
          ]
        },
        { href: '/product', label: 'プロダクト', isRoute: true },
        { href: '/about', label: '企業情報', isRoute: true },
        { href: '/contact', label: 'お問い合わせ', isRoute: true }
      ],
      languageToggle: { href: '/en', label: 'English' }
    },
    en: {
      links: [
        { href: '/en', label: 'Home', isRoute: true },
        { href: '/en/technology', label: 'Technology', isRoute: true },
        {
          label: 'Solutions',
          dropdown: [
            { href: '/en/solutions', label: 'Solutions Overview' },
            { href: '/en/solutions/healthcare', label: 'Healthcare & Medical Education' },
            { href: '/en/solutions/nursing', label: 'Nursing & Caregiver Training' },
            { href: '/en/solutions/corporate-training', label: 'Corporate Communication' },
            { href: '/en/solutions/enterprise-automation', label: 'Enterprise Automation' },
            { href: '/en/solutions/cross-cultural', label: 'Cross-Cultural Workforce' }
          ]
        },
        {
          label: 'Services',
          dropdown: [
            { href: '/en/services', label: 'Services Overview' },
            { href: '/en/services/advisory', label: 'AI Integration Advisory' },
            { href: '/en/services/automation', label: 'Workflow Automation' },
            { href: '/en/services/simulation', label: 'Simulation Development' },
            { href: '/en/services/sovereignty', label: 'Data Sovereignty Consulting' },
            { href: '/en/services/partners', label: 'Partner Solutions' }
          ]
        },
        { href: '/en/product', label: 'Products', isRoute: true },
        { href: '/en/about', label: 'About Us', isRoute: true },
        { href: '/en/contact', label: 'Contact', isRoute: true }
      ],
      languageToggle: { href: '/', label: '日本語' }
    }
  };

  const currentNav = navigation[lang];

  return (
    <header className={`site-header ${isScrolled ? 'scrolled' : ''}`}>
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
            {currentNav.links.map((link, index) => (
              <li
                key={link.href || link.label}
                className={link.dropdown ? 'has-dropdown' : ''}
                onMouseEnter={() => link.dropdown && setActiveDropdown(link.label)}
                onMouseLeave={() => link.dropdown && setActiveDropdown(null)}
              >
                {link.dropdown ? (
                  <>
                    <span className="dropdown-trigger" aria-haspopup="true" aria-expanded={activeDropdown === link.label}>
                      {link.label}
                      <svg className="dropdown-icon" width="12" height="8" viewBox="0 0 12 8" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M1 1L6 6L11 1" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                      </svg>
                    </span>
                    {activeDropdown === link.label && (
                      <ul className="dropdown-menu" role="menu">
                        {link.dropdown.map((item) => (
                          <li key={item.href} role="menuitem">
                            <Link href={item.href}>{item.label}</Link>
                          </li>
                        ))}
                      </ul>
                    )}
                  </>
                ) : link.isRoute ? (
                  <Link href={link.href!}>{link.label}</Link>
                ) : (
                  <a href={link.href}>{link.label}</a>
                )}
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
            {currentNav.links.map((link, index) => (
              <li key={link.href || link.label} className={link.dropdown ? 'has-dropdown' : ''}>
                {link.dropdown ? (
                  <>
                    <button
                      className="mobile-dropdown-trigger"
                      onClick={() => setMobileDropdownOpen(mobileDropdownOpen === link.label ? null : link.label)}
                      aria-expanded={mobileDropdownOpen === link.label}
                    >
                      {link.label}
                      <svg
                        className={`dropdown-icon ${mobileDropdownOpen === link.label ? 'open' : ''}`}
                        width="12"
                        height="8"
                        viewBox="0 0 12 8"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path d="M1 1L6 6L11 1" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                      </svg>
                    </button>
                    {mobileDropdownOpen === link.label && (
                      <ul className="mobile-dropdown-menu">
                        {link.dropdown.map((item) => (
                          <li key={item.href}>
                            <Link
                              href={item.href}
                              onClick={() => {
                                setMobileMenuOpen(false);
                                setMobileDropdownOpen(null);
                              }}
                            >
                              {item.label}
                            </Link>
                          </li>
                        ))}
                      </ul>
                    )}
                  </>
                ) : link.isRoute ? (
                  <Link href={link.href!} onClick={() => setMobileMenuOpen(false)}>
                    {link.label}
                  </Link>
                ) : (
                  <a
                    href={link.href}
                    onClick={() => setMobileMenuOpen(false)}
                  >
                    {link.label}
                  </a>
                )}
              </li>
            ))}
          </ul>
        </nav>
      )}
    </header>
  );
};

export default Header;
