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
            { href: '/solutions/digital-twin', label: 'デジタルツイン' },
            { href: '/solutions/computer-vision', label: 'コンピュータビジョン' },
            { href: '/solutions/predictive-maintenance', label: '予知保全' },
            { href: '/solutions/production-optimization', label: '生産最適化' }
          ]
        },
        {
          label: 'サービス',
          dropdown: [
            { href: '/services/ai-implementation', label: 'AI実装' },
            { href: '/services/global-engineering', label: 'グローバルエンジニアリング' }
          ]
        },
        { href: '/about', label: '私たちについて', isRoute: true },
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
            { href: '/en/solutions/digital-twin', label: 'Digital Twin' },
            { href: '/en/solutions/computer-vision', label: 'Computer Vision' },
            { href: '/en/solutions/predictive-maintenance', label: 'Predictive Maintenance' },
            { href: '/en/solutions/production-optimization', label: 'Production Optimization' }
          ]
        },
        {
          label: 'Services',
          dropdown: [
            { href: '/en/services/ai-implementation', label: 'AI Implementation' },
            { href: '/en/services/global-engineering', label: 'Global Engineering' }
          ]
        },
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
