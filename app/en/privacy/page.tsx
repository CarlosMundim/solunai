'use client';

import React from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import '../../terms/terms.css';

export default function PrivacyPolicyEN() {
  return (
    <main className="min-h-screen bg-white">
      <Header lang="en" />

      {/* Hero Section */}
      <div className="terms-hero">
        <div className="terms-hero-container">
          <div className="terms-breadcrumb">
            <a href="/en">Home</a>
            <span className="breadcrumb-separator">›</span>
            <span>Privacy Policy</span>
          </div>
          <h1 className="terms-hero-title">Privacy Policy</h1>
          <p className="terms-hero-subtitle">プライバシーポリシー</p>
          <div className="terms-meta">
            <span className="terms-date">Enacted: November 13, 2025</span>
            <span className="terms-separator">|</span>
            <span className="terms-date">Last Updated: November 13, 2025</span>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="terms-container">
        <div className="terms-content">

          {/* Introduction */}
          <section className="terms-section terms-intro">
            <p className="terms-intro-text">
              Solunai Systems Inc. ("we," "our," or "the Company") complies with the Act on the Protection of Personal Information (APPI) and handles your personal information appropriately. This Privacy Policy explains how we collect, use, manage, and protect personal information.
            </p>
          </section>

          {/* Section 1: Basic Policy */}
          <section className="terms-section">
            <div className="terms-article-header">
              <span className="terms-article-number">Section 1</span>
              <h2 className="terms-article-title">Basic Policy</h2>
            </div>
            <div className="terms-article-content">
              <p className="terms-text">
                Solunai Systems Inc. recognizes the importance of protecting personal information and is committed to:
              </p>
              <ul className="terms-list">
                <li>Complying with the Act on the Protection of Personal Information (APPI) and related laws and regulations</li>
                <li>Implementing appropriate security measures to protect personal information</li>
                <li>Using personal information only for legitimate business purposes</li>
                <li>Respecting the rights of individuals regarding their personal information</li>
                <li>Continuously improving our personal information protection practices</li>
              </ul>
            </div>
          </section>

          {/* Section 2: Company Information */}
          <section className="terms-section">
            <div className="terms-article-header">
              <span className="terms-article-number">Section 2</span>
              <h2 className="terms-article-title">Company Information</h2>
            </div>
            <div className="terms-article-content">
              <div className="terms-contact-card">
                <div className="terms-contact-row">
                  <span className="terms-contact-label">Company Name</span>
                  <span className="terms-contact-value">Solunai Systems Inc. (Solunai Systems K.K.)</span>
                </div>
                <div className="terms-contact-row">
                  <span className="terms-contact-label">Representative</span>
                  <span className="terms-contact-value">Carlos Magno Freitas Mundim</span>
                </div>
                <div className="terms-contact-row">
                  <span className="terms-contact-label">Head Office</span>
                  <span className="terms-contact-value">
                    WISE NEXT Shin-Yokohama 4F<br />
                    2-6-20 Shin-Yokohama, Kohoku-ku, Yokohama-shi, Kanagawa 222-0033, Japan
                  </span>
                </div>
                <div className="terms-contact-row">
                  <span className="terms-contact-label">Phone</span>
                  <span className="terms-contact-value">045-285-9480</span>
                </div>
                <div className="terms-contact-row">
                  <span className="terms-contact-label">Email</span>
                  <span className="terms-contact-value"><a href="mailto:privacy@solunai.co.jp">privacy@solunai.co.jp</a></span>
                </div>
                <div className="terms-contact-row">
                  <span className="terms-contact-label">Protection Manager</span>
                  <span className="terms-contact-value">Carlos Mundim (Chief Technology Officer)</span>
                </div>
              </div>
            </div>
          </section>

          {/* Section 3: Personal Information We Collect */}
          <section className="terms-section">
            <div className="terms-article-header">
              <span className="terms-article-number">Section 3</span>
              <h2 className="terms-article-title">Personal Information We Collect</h2>
            </div>
            <div className="terms-article-content">

              <div className="terms-subsection">
                <h3 className="terms-subsection-title">3.1 Information Directly Provided by You</h3>
                <p className="terms-text">
                  We collect personal information that you voluntarily provide when you:
                </p>
                <ul className="terms-list">
                  <li><strong>Contact Us:</strong> Name, company name, job title, email address, phone number, business address</li>
                  <li><strong>Request Services:</strong> Industry, company size, number of employees, project requirements, technical specifications</li>
                  <li><strong>Enter into Contracts:</strong> Billing information, authorized signatory details, procurement contact information</li>
                  <li><strong>Use Our Services:</strong> Project data, system configurations, user credentials, access logs</li>
                  <li><strong>Subscribe to Communications:</strong> Email preferences, communication preferences</li>
                </ul>
              </div>

              <div className="terms-subsection">
                <h3 className="terms-subsection-title">3.2 Information Automatically Collected</h3>
                <p className="terms-text">
                  When you visit our website or use our services, we automatically collect:
                </p>
                <ul className="terms-list">
                  <li><strong>Device Information:</strong> IP address, browser type and version, operating system, device identifiers</li>
                  <li><strong>Usage Information:</strong> Pages viewed, time spent on pages, access dates and times, referral URLs</li>
                  <li><strong>Location Data:</strong> Geographic location based on IP address</li>
                  <li><strong>Cookies and Tracking:</strong> Information collected through cookies, web beacons, and similar technologies</li>
                </ul>
              </div>

              <div className="terms-subsection">
                <h3 className="terms-subsection-title">3.3 Information from Third Parties</h3>
                <p className="terms-text">
                  We may receive personal information from:
                </p>
                <ul className="terms-list">
                  <li><strong>Business Partners:</strong> Information shared by partners like WorldEmp B.V. for collaborative projects</li>
                  <li><strong>Public Sources:</strong> Publicly available business information (company registries, industry databases)</li>
                  <li><strong>Marketing Platforms:</strong> Information from business networking platforms (LinkedIn, industry events)</li>
                </ul>
              </div>
            </div>
          </section>

          {/* Section 4: Purpose of Use */}
          <section className="terms-section">
            <div className="terms-article-header">
              <span className="terms-article-number">Section 4</span>
              <h2 className="terms-article-title">Purpose of Use</h2>
            </div>
            <div className="terms-article-content">
              <p className="terms-text">
                In accordance with Article 18 of APPI, we use personal information for the following purposes:
              </p>

              <div className="terms-service-card">
                <h3 className="terms-service-title">Service Delivery and Contract Fulfillment</h3>
                <ul className="terms-list">
                  <li>Responding to inquiries and consultation requests</li>
                  <li>Preparing and providing quotes, proposals, and technical documentation</li>
                  <li>Providing AI solutions, engineering services, and consulting services</li>
                  <li>Implementing, deploying, and maintaining systems and software</li>
                  <li>Providing customer support and after-sales service</li>
                  <li>Processing payments and managing billing</li>
                </ul>
              </div>

              <div className="terms-service-card">
                <h3 className="terms-service-title">Communication and Marketing</h3>
                <ul className="terms-list">
                  <li>Sending service updates, technical newsletters, and product information</li>
                  <li>Marketing activities including email campaigns and event invitations</li>
                  <li>Conducting customer satisfaction surveys</li>
                  <li>Providing information about new solutions and capabilities</li>
                </ul>
              </div>

              <div className="terms-service-card">
                <h3 className="terms-service-title">Service Improvement and Analytics</h3>
                <ul className="terms-list">
                  <li>Analyzing website usage and service performance</li>
                  <li>Improving our products, services, and customer experience</li>
                  <li>Creating statistical data and analytics (in anonymized form)</li>
                  <li>Research and development activities</li>
                </ul>
              </div>

              <div className="terms-service-card">
                <h3 className="terms-service-title">Legal and Security Purposes</h3>
                <ul className="terms-list">
                  <li>Complying with legal obligations and regulatory requirements</li>
                  <li>Detecting, preventing, and responding to security incidents</li>
                  <li>Protecting the rights, property, and safety of our company, users, and third parties</li>
                  <li>Enforcing our terms of service and policies</li>
                </ul>
              </div>
            </div>
          </section>

          {/* Section 5: Third-Party Provision */}
          <section className="terms-section">
            <div className="terms-article-header">
              <span className="terms-article-number">Section 5</span>
              <h2 className="terms-article-title">Third-Party Provision of Personal Information</h2>
            </div>
            <div className="terms-article-content">
              <p className="terms-text">
                We do not provide your personal information to third parties without your consent, except in the following cases:
              </p>

              <div className="terms-subsection">
                <h3 className="terms-subsection-title">5.1 Service Providers and Business Partners</h3>

                <div className="terms-partner-card">
                  <div className="terms-partner-header">
                    <h3 className="terms-partner-name">WorldEmp B.V.</h3>
                    <span className="terms-partner-badge">Strategic Partner</span>
                  </div>
                  <p className="terms-partner-desc">
                    <strong>Country:</strong> Netherlands (European Union)
                  </p>
                  <p className="terms-partner-desc">
                    <strong>Information Shared:</strong> Project requirements, technical specifications, contact information for authorized personnel
                  </p>
                  <p className="terms-partner-desc">
                    <strong>Purpose:</strong> Provision of global engineering services (engineer dispatch, technical consulting)
                  </p>
                  <p className="terms-partner-desc">
                    <strong>Legal Basis:</strong> Service contract execution, consent where required by law
                  </p>
                  <p className="terms-partner-desc">
                    <strong>Safeguards:</strong> EU GDPR-compliant data processing agreement, appropriate security measures
                  </p>
                </div>

                <div className="terms-definitions">
                  <div className="terms-definition-item">
                    <strong className="terms-definition-term">Cloud Service Providers</strong>
                    <p className="terms-definition-desc">
                      <strong>Providers:</strong> Microsoft Azure, AWS, Google Cloud Platform<br />
                      <strong>Information Shared:</strong> System data, application logs, user-generated content<br />
                      <strong>Purpose:</strong> Infrastructure hosting, data storage, system operations<br />
                      <strong>Location:</strong> Japan and other regions as specified in service agreements
                    </p>
                  </div>

                  <div className="terms-definition-item">
                    <strong className="terms-definition-term">Technology Partners</strong>
                    <p className="terms-definition-desc">
                      <strong>Partners:</strong> NVIDIA, Siemens, Ansys, PTC<br />
                      <strong>Information Shared:</strong> Technical implementation details, system configurations<br />
                      <strong>Purpose:</strong> Software licensing, technical support, solution implementation
                    </p>
                  </div>

                  <div className="terms-definition-item">
                    <strong className="terms-definition-term">Analytics and Marketing Tools</strong>
                    <p className="terms-definition-desc">
                      <strong>Services:</strong> Google Analytics, marketing automation platforms<br />
                      <strong>Information Shared:</strong> Website usage data, email engagement metrics<br />
                      <strong>Purpose:</strong> Website analytics, marketing campaign performance
                    </p>
                  </div>
                </div>
              </div>

              <div className="terms-subsection">
                <h3 className="terms-subsection-title">5.2 Legal Requirements and Protection of Rights</h3>
                <p className="terms-text">
                  We may disclose personal information without consent when:
                </p>
                <ul className="terms-list">
                  <li>Required by law, regulation, or legal process (court orders, subpoenas)</li>
                  <li>Necessary to protect life, body, or property of individuals</li>
                  <li>Necessary for public health or child welfare</li>
                  <li>Necessary to cooperate with national or local government agencies</li>
                  <li>Required to protect our rights, property, or safety</li>
                </ul>
              </div>

              <div className="terms-subsection">
                <h3 className="terms-subsection-title">5.3 Cross-Border Data Transfers</h3>
                <div className="terms-highlight-box">
                  <p>
                    <strong>Important Notice:</strong> When we transfer personal information to countries outside Japan (particularly to WorldEmp B.V. in the Netherlands), we comply with Article 28 of APPI by implementing appropriate safeguards including GDPR-compliant data processing agreements, security measures equivalent to those required in Japan, and obtaining your consent where legally required.
                  </p>
                </div>
              </div>
            </div>
          </section>

          {/* Section 6: Security Measures */}
          <section className="terms-section">
            <div className="terms-article-header">
              <span className="terms-article-number">Section 6</span>
              <h2 className="terms-article-title">Security Safeguards</h2>
            </div>
            <div className="terms-article-content">
              <p className="terms-text">
                In accordance with Article 23 of APPI, we implement the following security measures to protect personal information:
              </p>

              <div className="terms-subsection">
                <h3 className="terms-subsection-title">6.1 Organizational Safeguards</h3>
                <ul className="terms-list">
                  <li><strong>Privacy Officer:</strong> Designated Personal Information Protection Manager (CTO)</li>
                  <li><strong>Policies and Procedures:</strong> Internal regulations governing personal information handling</li>
                  <li><strong>Employee Training:</strong> Regular training and awareness programs for all personnel</li>
                  <li><strong>Access Controls:</strong> Role-based access restrictions and need-to-know principles</li>
                  <li><strong>Vendor Management:</strong> Due diligence and contractual safeguards for service providers</li>
                </ul>
              </div>

              <div className="terms-subsection">
                <h3 className="terms-subsection-title">6.2 Technical Safeguards</h3>
                <ul className="terms-list">
                  <li><strong>Encryption:</strong> SSL/TLS encryption for data transmission, encryption at rest for sensitive data</li>
                  <li><strong>Network Security:</strong> Firewalls, intrusion detection/prevention systems, network segmentation</li>
                  <li><strong>Access Authentication:</strong> Multi-factor authentication, strong password policies</li>
                  <li><strong>Malware Protection:</strong> Antivirus software, endpoint security solutions</li>
                  <li><strong>Monitoring and Logging:</strong> Security event logging, regular monitoring and auditing</li>
                  <li><strong>Vulnerability Management:</strong> Regular security assessments, patch management</li>
                </ul>
              </div>

              <div className="terms-subsection">
                <h3 className="terms-subsection-title">6.3 Physical Safeguards</h3>
                <ul className="terms-list">
                  <li><strong>Facility Security:</strong> Access control systems for office premises</li>
                  <li><strong>Document Management:</strong> Secure storage and disposal of physical documents containing personal information</li>
                  <li><strong>Device Security:</strong> Laptop encryption, mobile device management</li>
                </ul>
              </div>

              <div className="terms-warning-box">
                <div className="terms-warning-content">
                  <p className="terms-warning-title">Security Incident Response</p>
                  <p className="terms-warning-text">
                    In the event of a data breach or security incident affecting personal information, we will promptly investigate, take remedial action, and notify affected individuals and relevant authorities as required by law.
                  </p>
                </div>
              </div>
            </div>
          </section>

          {/* Section 7: Retention Period */}
          <section className="terms-section">
            <div className="terms-article-header">
              <span className="terms-article-number">Section 7</span>
              <h2 className="terms-article-title">Retention Period</h2>
            </div>
            <div className="terms-article-content">
              <p className="terms-text">
                We retain personal information for the following periods:
              </p>

              <div className="terms-definitions" style={{background: '#f8fafc'}}>
                <div className="terms-definition-item">
                  <strong className="terms-definition-term">Inquiry Information</strong>
                  <p className="terms-definition-desc">
                    <strong>Retention Period:</strong> 2 years after consultation ends<br />
                    <strong>Legal Basis:</strong> Business necessity for customer relationship management
                  </p>
                </div>

                <div className="terms-definition-item">
                  <strong className="terms-definition-term">Contract and Transaction Records</strong>
                  <p className="terms-definition-desc">
                    <strong>Retention Period:</strong> 7 years after transaction completion<br />
                    <strong>Legal Basis:</strong> Corporate Tax Law (税法) requirements for business records
                  </p>
                </div>

                <div className="terms-definition-item">
                  <strong className="terms-definition-term">Marketing Information</strong>
                  <p className="terms-definition-desc">
                    <strong>Retention Period:</strong> Until unsubscribe request or 3 years of inactivity<br />
                    <strong>Legal Basis:</strong> Consent-based processing
                  </p>
                </div>

                <div className="terms-definition-item">
                  <strong className="terms-definition-term">Access Logs</strong>
                  <p className="terms-definition-desc">
                    <strong>Retention Period:</strong> 6 months<br />
                    <strong>Legal Basis:</strong> Security monitoring and incident response
                  </p>
                </div>

                <div className="terms-definition-item">
                  <strong className="terms-definition-term">Project Data</strong>
                  <p className="terms-definition-desc">
                    <strong>Retention Period:</strong> As specified in service agreements (typically 1-3 years after project completion)<br />
                    <strong>Legal Basis:</strong> Contractual obligations, warranty support
                  </p>
                </div>
              </div>

              <p className="terms-text" style={{marginTop: '1.5rem'}}>
                After the retention period expires, we will securely delete or anonymize personal information unless retention is required by law or for legitimate business purposes (e.g., ongoing litigation, regulatory investigations).
              </p>
            </div>
          </section>

          {/* Section 8: Your Rights */}
          <section className="terms-section">
            <div className="terms-article-header">
              <span className="terms-article-number">Section 8</span>
              <h2 className="terms-article-title">Your Rights (Disclosure and Other Requests)</h2>
            </div>
            <div className="terms-article-content">
              <p className="terms-text">
                Under Articles 33-39 of the Act on the Protection of Personal Information (APPI), you have the following rights:
              </p>

              <div className="terms-definitions" style={{background: 'linear-gradient(to right, #eff6ff, #f0f9ff)', border: 'none', padding: '2rem'}}>
                <div className="terms-definition-item">
                  <strong className="terms-definition-term" style={{fontSize: '1.125rem', color: '#0f172a'}}>1. Right to Request Disclosure</strong>
                  <p className="terms-definition-desc">
                    You can request disclosure of your personal information held by us. We will respond within a reasonable timeframe and may charge a fee (up to 1,000 yen) to cover administrative costs.
                  </p>
                </div>

                <div className="terms-definition-item">
                  <strong className="terms-definition-term" style={{fontSize: '1.125rem', color: '#0f172a'}}>2. Right to Request Correction, Addition, or Deletion</strong>
                  <p className="terms-definition-desc">
                    If your personal information is inaccurate, you can request correction, addition, or deletion. We will investigate and respond promptly.
                  </p>
                </div>

                <div className="terms-definition-item">
                  <strong className="terms-definition-term" style={{fontSize: '1.125rem', color: '#0f172a'}}>3. Right to Request Suspension of Use or Erasure</strong>
                  <p className="terms-definition-desc">
                    If your personal information is being used beyond the specified purposes or was obtained illegally, you can request suspension of use or erasure.
                  </p>
                </div>

                <div className="terms-definition-item">
                  <strong className="terms-definition-term" style={{fontSize: '1.125rem', color: '#0f172a'}}>4. Right to Request Suspension of Third-Party Provision</strong>
                  <p className="terms-definition-desc">
                    If your personal information was provided to third parties illegally, you can request suspension of such provision.
                  </p>
                </div>

                <div className="terms-definition-item">
                  <strong className="terms-definition-term" style={{fontSize: '1.125rem', color: '#0f172a'}}>5. Right to Withdraw Consent</strong>
                  <p className="terms-definition-desc">
                    Where processing is based on your consent (e.g., marketing emails), you can withdraw consent at any time.
                  </p>
                </div>
              </div>

              <div className="terms-subsection">
                <h3 className="terms-subsection-title">How to Exercise Your Rights</h3>
                <p className="terms-text">
                  To exercise any of the above rights, please contact us:
                </p>
                <div className="terms-contact-card">
                  <div className="terms-contact-row">
                    <span className="terms-contact-label">Email</span>
                    <span className="terms-contact-value"><a href="mailto:privacy@solunai.co.jp">privacy@solunai.co.jp</a></span>
                  </div>
                  <div className="terms-contact-row">
                    <span className="terms-contact-label">Phone</span>
                    <span className="terms-contact-value">045-285-9480 (Business hours: Weekdays 9:00-17:00 JST)</span>
                  </div>
                  <div className="terms-contact-row">
                    <span className="terms-contact-label">Mail</span>
                    <span className="terms-contact-value">
                      Solunai Systems Inc. - Privacy Rights Department<br />
                      WISE NEXT Shin-Yokohama 4F, 2-6-20 Shin-Yokohama, Kohoku-ku, Yokohama-shi, Kanagawa 222-0033, Japan
                    </span>
                  </div>
                </div>

                <div className="terms-highlight-box" style={{marginTop: '1.5rem'}}>
                  <p>
                    <strong>Note:</strong> For identity verification purposes, we may request a copy of your identification document. For disclosure requests, we may charge a fee of up to 1,000 yen to cover administrative costs. We will respond to your request within 30 days.
                  </p>
                </div>
              </div>
            </div>
          </section>

          {/* Section 9: Cookies */}
          <section className="terms-section">
            <div className="terms-article-header">
              <span className="terms-article-number">Section 9</span>
              <h2 className="terms-article-title">Cookies and Tracking Technologies</h2>
            </div>
            <div className="terms-article-content">

              <div className="terms-subsection">
                <h3 className="terms-subsection-title">9.1 What Are Cookies?</h3>
                <p className="terms-text">
                  Cookies are small text files that websites place on your computer or mobile device to store information about your visit. Cookies allow the website to remember your preferences and improve your experience.
                </p>
              </div>

              <div className="terms-subsection">
                <h3 className="terms-subsection-title">9.2 How We Use Cookies</h3>
                <div className="terms-definitions">
                  <div className="terms-definition-item">
                    <strong className="terms-definition-term">Essential Cookies</strong>
                    <p className="terms-definition-desc">
                      Required for website functionality (authentication, security, form submissions). Cannot be disabled.
                    </p>
                  </div>

                  <div className="terms-definition-item">
                    <strong className="terms-definition-term">Analytics Cookies</strong>
                    <p className="terms-definition-desc">
                      Help us understand website usage (Google Analytics). Track page views, session duration, user flows.
                    </p>
                  </div>

                  <div className="terms-definition-item">
                    <strong className="terms-definition-term">Preference Cookies</strong>
                    <p className="terms-definition-desc">
                      Remember your settings (language selection, display preferences).
                    </p>
                  </div>

                  <div className="terms-definition-item">
                    <strong className="terms-definition-term">Marketing Cookies</strong>
                    <p className="terms-definition-desc">
                      Track your interests to provide relevant content and measure campaign effectiveness.
                    </p>
                  </div>
                </div>
              </div>

              <div className="terms-subsection">
                <h3 className="terms-subsection-title">9.3 Managing Cookies</h3>
                <p className="terms-text">
                  You can control cookies through your browser settings:
                </p>
                <ul className="terms-list">
                  <li><strong>Block All Cookies:</strong> Prevent all cookies from being set (may impact website functionality)</li>
                  <li><strong>Delete Cookies:</strong> Remove cookies already stored on your device</li>
                  <li><strong>Third-Party Cookies:</strong> Block cookies from third-party services</li>
                  <li><strong>Cookie Notifications:</strong> Receive alerts when cookies are being set</li>
                </ul>
                <p className="terms-text">
                  Please note that disabling cookies may limit your ability to use certain features of our website.
                </p>
              </div>
            </div>
          </section>

          {/* Section 10: Complaints and Inquiries */}
          <section className="terms-section">
            <div className="terms-article-header">
              <span className="terms-article-number">Section 10</span>
              <h2 className="terms-article-title">Complaints and Consultation Contact</h2>
            </div>
            <div className="terms-article-content">

              <div className="terms-subsection">
                <h3 className="terms-subsection-title">10.1 Company Contact</h3>
                <div className="terms-contact-card">
                  <p style={{fontSize: '1.125rem', fontWeight: 600, color: '#0f172a', marginBottom: '1.5rem'}}>
                    Solunai Systems Inc. - Personal Information Protection Consultation Office
                  </p>
                  <div className="terms-contact-row">
                    <span className="terms-contact-label">Address</span>
                    <span className="terms-contact-value">
                      WISE NEXT Shin-Yokohama 4F<br />
                      2-6-20 Shin-Yokohama, Kohoku-ku, Yokohama-shi, Kanagawa 222-0033, Japan
                    </span>
                  </div>
                  <div className="terms-contact-row">
                    <span className="terms-contact-label">Email</span>
                    <span className="terms-contact-value"><a href="mailto:privacy@solunai.co.jp">privacy@solunai.co.jp</a></span>
                  </div>
                  <div className="terms-contact-row">
                    <span className="terms-contact-label">Phone</span>
                    <span className="terms-contact-value">045-285-9480 (Weekdays 9:00-17:00 JST)</span>
                  </div>
                </div>
              </div>

              <div className="terms-subsection">
                <h3 className="terms-subsection-title">10.2 Recognized Personal Information Protection Organization</h3>
                <p className="terms-text">
                  We are not currently a member of any recognized personal information protection organization.
                </p>
              </div>

              <div className="terms-subsection">
                <h3 className="terms-subsection-title">10.3 Supervisory Authority</h3>
                <div className="terms-contact-card" style={{background: '#f8fafc'}}>
                  <p style={{fontSize: '1.125rem', fontWeight: 600, color: '#0f172a', marginBottom: '1.5rem'}}>
                    Personal Information Protection Commission (個人情報保護委員会)
                  </p>
                  <div className="terms-contact-row">
                    <span className="terms-contact-label">Address</span>
                    <span className="terms-contact-value">
                      Kasumigaseki Common Gate West Tower 32F<br />
                      3-2-1 Kasumigaseki, Chiyoda-ku, Tokyo 100-0013, Japan
                    </span>
                  </div>
                  <div className="terms-contact-row">
                    <span className="terms-contact-label">Phone</span>
                    <span className="terms-contact-value">03-6457-9680 (Main)</span>
                  </div>
                  <div className="terms-contact-row">
                    <span className="terms-contact-label">Website</span>
                    <span className="terms-contact-value">
                      <a href="https://www.ppc.go.jp/" target="_blank" rel="noopener noreferrer">https://www.ppc.go.jp/</a>
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* Section 11: Policy Changes */}
          <section className="terms-section">
            <div className="terms-article-header">
              <span className="terms-article-number">Section 11</span>
              <h2 className="terms-article-title">Changes to This Privacy Policy</h2>
            </div>
            <div className="terms-article-content">
              <p className="terms-text">
                We may update this Privacy Policy from time to time to reflect:
              </p>
              <ul className="terms-list">
                <li>Changes in applicable laws and regulations</li>
                <li>Updates to our services and business practices</li>
                <li>Technological developments and security enhancements</li>
                <li>Feedback from users and regulatory guidance</li>
              </ul>

              <p className="terms-text">
                <strong>Notice of Changes:</strong> When we make material changes to this Privacy Policy, we will:
              </p>
              <ul className="terms-list">
                <li>Post the updated policy on our website with a new "Last Updated" date</li>
                <li>Provide prominent notice on our website for at least 30 days</li>
                <li>Notify you by email if you have an active service agreement with us</li>
                <li>Obtain your consent if required by law</li>
              </ul>

              <p className="terms-text">
                The updated Privacy Policy will take effect from the date posted on our website unless otherwise specified. Your continued use of our services after the effective date constitutes acceptance of the updated policy.
              </p>
            </div>
          </section>

          {/* Contact Section */}
          <section className="terms-section terms-contact">
            <div className="terms-contact-header">
              <h2 className="terms-contact-title">Contact for Privacy Inquiries</h2>
              <p className="terms-contact-subtitle">For questions about this Privacy Policy or our data practices</p>
            </div>
            <div className="terms-contact-card">
              <div className="terms-contact-row">
                <span className="terms-contact-label">Company Name</span>
                <span className="terms-contact-value">Solunai Systems Inc. (Solunai Systems K.K.)</span>
              </div>
              <div className="terms-contact-row">
                <span className="terms-contact-label">Privacy Officer</span>
                <span className="terms-contact-value">Carlos Magno Freitas Mundim (Chief Technology Officer)</span>
              </div>
              <div className="terms-contact-row">
                <span className="terms-contact-label">Head Office</span>
                <span className="terms-contact-value">
                  WISE NEXT Shin-Yokohama 4F<br />
                  2-6-20 Shin-Yokohama, Kohoku-ku, Yokohama-shi, Kanagawa 222-0033, Japan
                </span>
              </div>
              <div className="terms-contact-row">
                <span className="terms-contact-label">Email</span>
                <span className="terms-contact-value"><a href="mailto:privacy@solunai.co.jp">privacy@solunai.co.jp</a></span>
              </div>
              <div className="terms-contact-row">
                <span className="terms-contact-label">Phone</span>
                <span className="terms-contact-value">045-285-9480</span>
              </div>
            </div>
          </section>

          {/* Effective Date */}
          <section className="terms-effective-date">
            <p><strong>Enacted:</strong> November 13, 2025</p>
            <p><strong>Last Updated:</strong> November 13, 2025</p>
            <p style={{marginTop: '1rem'}}>Solunai Systems Inc.</p>
            <p>Representative Director: Carlos Magno Freitas Mundim</p>
          </section>

        </div>
      </div>

      <Footer lang="en" />
    </main>
  );
}
