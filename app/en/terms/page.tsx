'use client';

import React from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import '../../terms/terms.css';

export default function TermsOfServiceEN() {
  return (
    <main className="min-h-screen bg-white">
      <Header lang="en" />

      {/* Hero Section */}
      <div className="terms-hero">
        <div className="terms-hero-container">
          <div className="terms-breadcrumb">
            <a href="/en">Home</a>
            <span className="breadcrumb-separator">›</span>
            <span>Terms of Service</span>
          </div>
          <h1 className="terms-hero-title">Terms of Service</h1>
          <p className="terms-hero-subtitle">利用規約</p>
          <div className="terms-meta">
            <span className="terms-date">Effective Date: November 12, 2025</span>
            <span className="terms-separator">|</span>
            <span className="terms-date">Last Updated: November 12, 2025</span>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="terms-container">
        <div className="terms-content">

          {/* Introduction */}
          <section className="terms-section terms-intro">
            <p className="terms-intro-text">
              These Terms of Service (hereinafter referred to as "Terms") set forth the conditions of use for services (hereinafter referred to as "Services") provided by Solunai Systems Inc. (hereinafter referred to as "Company") to users. All users are required to use the Services in accordance with these Terms.
            </p>
          </section>

          {/* Article 1: Applicability */}
          <section className="terms-section">
            <div className="terms-article-header">
              <span className="terms-article-number">Article 1</span>
              <h2 className="terms-article-title">Applicability</h2>
            </div>
            <div className="terms-article-content">
              <ol className="terms-list">
                <li>These Terms apply to all relationships between the Company and users regarding the use of the Services.</li>
                <li>Rules, guidelines, and other provisions posted by the Company on its website regarding the Services (hereinafter referred to as "Individual Provisions") constitute part of these Terms.</li>
                <li>If there is any conflict between these Terms and Individual Provisions, the Individual Provisions shall take precedence unless otherwise specified.</li>
              </ol>
            </div>
          </section>

          {/* Article 2: Definitions */}
          <section className="terms-section">
            <div className="terms-article-header">
              <span className="terms-article-number">Article 2</span>
              <h2 className="terms-article-title">Definitions</h2>
            </div>
            <div className="terms-article-content">
              <p className="terms-text">
                The following terms used in these Terms shall have the meanings set forth below:
              </p>
              <div className="terms-definitions">
                <div className="terms-definition-item">
                  <strong className="terms-definition-term">"User"</strong>
                  <p className="terms-definition-desc">
                    Refers to individuals or corporations that have entered into a service contract with the Company, including prospective users who are considering the use of services.
                  </p>
                </div>
                <div className="terms-definition-item">
                  <strong className="terms-definition-term">"Services"</strong>
                  <p className="terms-definition-desc">
                    Refers to all services provided by the Company, including but not limited to AI solution development and implementation, global engineering services, and consulting services.
                  </p>
                </div>
                <div className="terms-definition-item">
                  <strong className="terms-definition-term">"Agreement"</strong>
                  <p className="terms-definition-desc">
                    Refers to the agreement regarding the use of services established between the Company and the user based on these Terms.
                  </p>
                </div>
                <div className="terms-definition-item">
                  <strong className="terms-definition-term">"Confidential Information"</strong>
                  <p className="terms-definition-desc">
                    Refers to technical, business, or other information disclosed by either party and designated as confidential.
                  </p>
                </div>
              </div>
            </div>
          </section>

          {/* Article 3: Services Provided */}
          <section className="terms-section">
            <div className="terms-article-header">
              <span className="terms-article-number">Article 3</span>
              <h2 className="terms-article-title">Services Provided</h2>
            </div>
            <div className="terms-article-content">
              <p className="terms-text">
                The Company provides the following services. Details of each service will be separately agreed upon based on individual contracts or proposals:
              </p>

              {/* Service 1: AI Solutions */}
              <div className="terms-service-card">
                <h3 className="terms-service-title">1. AI Solution Development and Implementation</h3>
                <ul className="terms-list">
                  <li>AI model development, training, and optimization</li>
                  <li>Computer vision solutions (image/video processing, object detection, defect detection)</li>
                  <li>Digital twin development and operational optimization</li>
                  <li>Predictive maintenance systems</li>
                  <li>Production optimization solutions</li>
                  <li>Integration with existing systems (PLM, MES, ERP, etc.)</li>
                </ul>
              </div>

              {/* Service 2: Global Engineering */}
              <div className="terms-service-card">
                <h3 className="terms-service-title">2. Global Engineering Services (WorldEmp Partnership)</h3>
                <ul className="terms-list">
                  <li>On-demand access to certified engineers worldwide</li>
                  <li>Multi-disciplinary engineering support (mechanical, electrical, software, industrial)</li>
                  <li>Project-based or long-term engineering resource provision</li>
                  <li>Technical consulting and system integration</li>
                </ul>
                <div className="terms-highlight-box">
                  <p>
                    <strong>Note:</strong> Global engineering services are provided through our strategic partner WorldEmp B.V. (Netherlands). Specific terms related to engineer dispatch and resource provision are subject to separate agreements with WorldEmp.
                  </p>
                </div>
              </div>

              {/* Service 3: Consulting */}
              <div className="terms-service-card">
                <h3 className="terms-service-title">3. Consulting Services</h3>
                <ul className="terms-list">
                  <li>Digital transformation strategy consulting</li>
                  <li>AI/ML implementation feasibility studies</li>
                  <li>Process optimization analysis</li>
                  <li>Technology stack evaluation and recommendations</li>
                </ul>
              </div>
            </div>
          </section>

          {/* Article 4: User Obligations */}
          <section className="terms-section">
            <div className="terms-article-header">
              <span className="terms-article-number">Article 4</span>
              <h2 className="terms-article-title">User Obligations</h2>
            </div>
            <div className="terms-article-content">
              <p className="terms-text">
                Users are obligated to comply with the following when using the Services:
              </p>
              <ol className="terms-list">
                <li>Provide accurate information necessary for service delivery</li>
                <li>Cooperate reasonably in system integration, testing, and implementation activities</li>
                <li>Prepare and maintain the necessary IT infrastructure and environment for service operation</li>
                <li>Comply with applicable laws, regulations, and industry standards</li>
                <li>Not use the Services for illegal purposes or in violation of public order and morals</li>
                <li>Not infringe upon the intellectual property rights of the Company or third parties</li>
                <li>Make timely payments for services rendered in accordance with agreed terms</li>
                <li>Maintain confidentiality of proprietary information and trade secrets</li>
              </ol>
            </div>
          </section>

          {/* Article 5: Fees and Payment Terms */}
          <section className="terms-section">
            <div className="terms-article-header">
              <span className="terms-article-number">Article 5</span>
              <h2 className="terms-article-title">Service Fees and Payment Terms</h2>
            </div>
            <div className="terms-article-content">
              <div className="terms-subsection">
                <h3 className="terms-subsection-title">5.1 Fee Structure</h3>
                <p className="terms-text">
                  Service fees are determined based on the following factors:
                </p>
                <ul className="terms-list">
                  <li><strong>Project Scope:</strong> Complexity, scale, and duration of the project</li>
                  <li><strong>Resource Requirements:</strong> Engineering hours, computational resources, licenses</li>
                  <li><strong>Technology Stack:</strong> Third-party tools, platforms, and services required</li>
                  <li><strong>Deliverables:</strong> Specifications, documentation, training, and support included</li>
                </ul>
              </div>

              <div className="terms-subsection">
                <h3 className="terms-subsection-title">5.2 Payment Terms</h3>
                <ol className="terms-list">
                  <li>Payment terms will be specified in individual contracts or proposals</li>
                  <li>For project-based services, payments may be structured as:
                    <ul className="terms-sublist">
                      <li>Fixed fee with milestone-based payments</li>
                      <li>Time and materials basis with monthly invoicing</li>
                      <li>Hybrid models combining fixed and variable components</li>
                    </ul>
                  </li>
                  <li>Unless otherwise agreed, invoices are payable within 30 days of invoice date</li>
                  <li>Late payments may incur interest charges as permitted by law</li>
                  <li>All fees are exclusive of consumption tax (VAT/GST), which will be added as applicable</li>
                </ol>
              </div>

              <div className="terms-warning-box">
                <div className="terms-warning-content">
                  <p className="terms-warning-title">Important Payment Notice</p>
                  <p className="terms-warning-text">
                    Failure to make timely payments may result in suspension of services, termination of the agreement, and/or legal action to recover outstanding amounts. The Company reserves the right to withhold deliverables until payment is received in full.
                  </p>
                </div>
              </div>
            </div>
          </section>

          {/* Article 6: Performance Disclaimers */}
          <section className="terms-section">
            <div className="terms-article-header">
              <span className="terms-article-number">Article 6</span>
              <h2 className="terms-article-title">Disclaimers Regarding Performance and Results</h2>
            </div>
            <div className="terms-article-content">
              <div className="terms-disclaimer-box">
                <p className="terms-text">
                  <strong>IMPORTANT DISCLAIMER:</strong> Users acknowledge and agree to the following regarding AI solutions and performance metrics:
                </p>
                <ol className="terms-list">
                  <li><strong>Accuracy and Performance Variability:</strong> AI model accuracy, precision, and performance metrics (including but not limited to those demonstrated in case studies, prototypes, or demonstrations) may vary significantly based on:
                    <ul className="terms-sublist">
                      <li>Quality, quantity, and representativeness of training data</li>
                      <li>Environmental conditions and operational parameters</li>
                      <li>Integration with existing systems and data sources</li>
                      <li>Changes in input data characteristics over time</li>
                    </ul>
                  </li>
                  <li><strong>No Guarantee of Specific Results:</strong> The Company makes no guarantee or warranty that AI solutions will achieve specific accuracy levels, cost savings, efficiency improvements, or other business outcomes shown in demonstrations, case studies, or projections.</li>
                  <li><strong>Prototype vs. Production:</strong> Prototype demonstrations and proof-of-concept results are indicative only and do not guarantee production system performance. Production deployment requires proper data collection, model training, validation, and tuning specific to the user's environment.</li>
                  <li><strong>Continuous Improvement Requirement:</strong> AI systems require ongoing monitoring, retraining, and optimization to maintain performance. Users are responsible for providing necessary data and resources for model maintenance.</li>
                  <li><strong>Industry Standards:</strong> All performance targets and expectations should be established through mutually agreed-upon acceptance criteria defined in project specifications.</li>
                </ol>
              </div>
            </div>
          </section>

          {/* Article 7: Intellectual Property */}
          <section className="terms-section">
            <div className="terms-article-header">
              <span className="terms-article-number">Article 7</span>
              <h2 className="terms-article-title">Intellectual Property Rights</h2>
            </div>
            <div className="terms-article-content">
              <div className="terms-subsection">
                <h3 className="terms-subsection-title">7.1 Ownership of Pre-Existing IP</h3>
                <p className="terms-text">
                  All intellectual property rights in the Company's pre-existing methodologies, frameworks, tools, libraries, and know-how remain the exclusive property of the Company.
                </p>
              </div>

              <div className="terms-subsection">
                <h3 className="terms-subsection-title">7.2 Developed IP</h3>
                <p className="terms-text">
                  Intellectual property rights in deliverables developed specifically for the user under a service agreement shall be handled as follows:
                </p>
                <ul className="terms-list">
                  <li><strong>Custom Developments:</strong> IP rights in custom AI models, software, and solutions developed exclusively for the user may be assigned or licensed to the user as specified in the individual contract</li>
                  <li><strong>Generalized Components:</strong> The Company retains rights to generalized frameworks, algorithms, and methodologies that may be reused across multiple projects</li>
                  <li><strong>Data Rights:</strong> Users retain ownership of their input data. The Company may retain derivative insights and model weights subject to confidentiality obligations</li>
                </ul>
              </div>

              <div className="terms-subsection">
                <h3 className="terms-subsection-title">7.3 Third-Party IP</h3>
                <p className="terms-text">
                  Users are responsible for obtaining necessary licenses for third-party software, platforms, and technologies required for service delivery. The Company will advise on licensing requirements but does not assume responsibility for user's license compliance.
                </p>
              </div>
            </div>
          </section>

          {/* Article 8: Limitation of Liability */}
          <section className="terms-section">
            <div className="terms-article-header">
              <span className="terms-article-number">Article 8</span>
              <h2 className="terms-article-title">Disclaimer and Limitation of Liability</h2>
            </div>
            <div className="terms-article-content">
              <div className="terms-subsection">
                <h3 className="terms-subsection-title">8.1 Service Warranty Disclaimer</h3>
                <p className="terms-text">
                  The Company provides Services on an "as is" and "as available" basis. Except as expressly stated in individual service agreements, the Company makes no warranties, express or implied, including but not limited to:
                </p>
                <ul className="terms-list">
                  <li>Warranties of merchantability or fitness for a particular purpose</li>
                  <li>Warranties of uninterrupted or error-free service</li>
                  <li>Warranties regarding third-party platforms or services</li>
                </ul>
              </div>

              <div className="terms-subsection">
                <h3 className="terms-subsection-title">8.2 Limitation of Liability</h3>
                <p className="terms-text">
                  To the maximum extent permitted by applicable law:
                </p>
                <ol className="terms-list">
                  <li>The Company's total liability for any claims arising out of or related to the Services shall not exceed the total fees paid by the user for the specific service giving rise to the claim in the 12 months preceding the claim</li>
                  <li>The Company shall not be liable for any indirect, incidental, consequential, special, or punitive damages, including but not limited to:
                    <ul className="terms-sublist">
                      <li>Loss of profits, revenue, or business opportunities</li>
                      <li>Business interruption or production downtime</li>
                      <li>Loss of data or information</li>
                      <li>Cost of substitute services or solutions</li>
                    </ul>
                  </li>
                  <li>These limitations apply regardless of the legal theory (contract, tort, negligence, strict liability, or otherwise) and even if the Company has been advised of the possibility of such damages</li>
                </ol>
              </div>

              <div className="terms-subsection">
                <h3 className="terms-subsection-title">8.3 Exceptions</h3>
                <p className="terms-text">
                  The above limitations do not apply to:
                </p>
                <ul className="terms-list">
                  <li>Damages caused by the Company's willful misconduct or gross negligence</li>
                  <li>Liability that cannot be limited by applicable law</li>
                  <li>Breaches of confidentiality obligations</li>
                  <li>Infringement of intellectual property rights</li>
                </ul>
              </div>
            </div>
          </section>

          {/* Article 9: Third-Party Services */}
          <section className="terms-section">
            <div className="terms-article-header">
              <span className="terms-article-number">Article 9</span>
              <h2 className="terms-article-title">Third-Party Services and Strategic Partners</h2>
            </div>
            <div className="terms-article-content">

              {/* WorldEmp Partnership Card */}
              <div className="terms-partner-card">
                <div className="terms-partner-header">
                  <h3 className="terms-partner-name">WorldEmp B.V.</h3>
                  <span className="terms-partner-badge">Strategic Partner</span>
                </div>
                <p className="terms-partner-desc">
                  Global engineering services are provided through our strategic partner WorldEmp B.V. (Netherlands), which maintains a worldwide network of certified engineers across multiple disciplines. When users engage global engineering services, they may be required to enter into separate agreements directly with WorldEmp or through the Company as intermediary.
                </p>
                <p className="terms-partner-desc">
                  <strong>Service Scope:</strong> WorldEmp provides on-demand engineering resources in mechanical engineering, electrical engineering, software development, industrial automation, and related technical disciplines. Engineer qualifications, rates, and terms of engagement are subject to WorldEmp's standard terms and conditions.
                </p>
                <p className="terms-partner-desc">
                  <strong>Disclaimer:</strong> While the Company facilitates access to WorldEmp's services and may coordinate project requirements, the Company is not responsible for the performance, quality, or availability of engineers provided by WorldEmp. Users should review WorldEmp's terms of service separately.
                </p>

                <div className="terms-tech-stack">
                  <h4 className="terms-tech-title">Technology Partners</h4>
                  <p className="terms-text" style={{fontSize: '0.95rem', marginBottom: '0.75rem'}}>
                    The Company collaborates with leading technology providers:
                  </p>
                  <ul className="terms-tech-list">
                    <li><strong>NVIDIA:</strong> GPU computing, AI/ML frameworks, edge computing</li>
                    <li><strong>Siemens:</strong> PLM solutions, MES integration, industrial automation</li>
                    <li><strong>Ansys:</strong> Simulation software, digital twin modeling</li>
                    <li><strong>PTC ThingWorx:</strong> IoT platforms, digital twin infrastructure</li>
                    <li><strong>OPC UA / ISA-95:</strong> Industrial communication standards</li>
                  </ul>
                </div>
              </div>

              <div className="terms-subsection">
                <h3 className="terms-subsection-title">9.2 Third-Party Platform Disclaimer</h3>
                <p className="terms-text">
                  The Company may utilize third-party platforms, cloud services, software libraries, and APIs in delivering Services. The Company:
                </p>
                <ul className="terms-list">
                  <li>Does not warrant the availability, performance, or security of third-party services</li>
                  <li>Is not responsible for changes, discontinuation, or pricing changes by third-party providers</li>
                  <li>Will make reasonable efforts to notify users of significant changes affecting service delivery</li>
                  <li>May pass through third-party costs to users as agreed in service contracts</li>
                </ul>
              </div>
            </div>
          </section>

          {/* Article 10: Confidentiality */}
          <section className="terms-section">
            <div className="terms-article-header">
              <span className="terms-article-number">Article 10</span>
              <h2 className="terms-article-title">Confidentiality</h2>
            </div>
            <div className="terms-article-content">
              <ol className="terms-list">
                <li>Both parties agree to keep confidential all Confidential Information disclosed by the other party and to use such information solely for the purpose of performing obligations under the service agreement</li>
                <li>Confidential Information does not include information that:
                  <ul className="terms-sublist">
                    <li>Is publicly available through no fault of the receiving party</li>
                    <li>Was rightfully in the receiving party's possession prior to disclosure</li>
                    <li>Is independently developed without reference to the disclosing party's Confidential Information</li>
                    <li>Is rightfully obtained from a third party without breach of confidentiality obligations</li>
                  </ul>
                </li>
                <li>The receiving party may disclose Confidential Information if required by law, provided that it gives the disclosing party prior notice and cooperates in any effort to obtain protective treatment</li>
                <li>Confidentiality obligations shall survive termination of the service agreement for a period of 3 years</li>
                <li>Upon termination or upon request, each party shall return or destroy all Confidential Information of the other party</li>
              </ol>
            </div>
          </section>

          {/* Article 11: Term and Termination */}
          <section className="terms-section">
            <div className="terms-article-header">
              <span className="terms-article-number">Article 11</span>
              <h2 className="terms-article-title">Agreement Term and Termination</h2>
            </div>
            <div className="terms-article-content">
              <div className="terms-subsection">
                <h3 className="terms-subsection-title">11.1 Agreement Term</h3>
                <p className="terms-text">
                  The service agreement shall commence on the effective date specified in the individual contract and continue for the duration specified therein. Ongoing service agreements may be renewed by mutual written agreement.
                </p>
              </div>

              <div className="terms-subsection">
                <h3 className="terms-subsection-title">11.2 Termination for Convenience</h3>
                <p className="terms-text">
                  Either party may terminate the agreement for convenience by providing written notice as specified in the individual contract (typically 30-90 days). The user shall be responsible for payment of services rendered up to the termination date.
                </p>
              </div>

              <div className="terms-subsection">
                <h3 className="terms-subsection-title">11.3 Termination for Cause</h3>
                <p className="terms-text">
                  Either party may terminate the agreement immediately upon written notice if:
                </p>
                <ul className="terms-list">
                  <li>The other party materially breaches these Terms and fails to cure within 30 days of written notice</li>
                  <li>The other party becomes insolvent, files for bankruptcy, or ceases business operations</li>
                  <li>Continuation of the agreement becomes illegal or impossible due to regulatory changes</li>
                </ul>
              </div>

              <div className="terms-subsection">
                <h3 className="terms-subsection-title">11.4 Effects of Termination</h3>
                <p className="terms-text">
                  Upon termination:
                </p>
                <ul className="terms-list">
                  <li>The Company shall deliver all completed deliverables and work-in-progress as agreed</li>
                  <li>The user shall pay all outstanding fees for services rendered</li>
                  <li>Both parties shall return or destroy Confidential Information as required</li>
                  <li>Provisions regarding intellectual property, confidentiality, limitation of liability, and dispute resolution shall survive termination</li>
                </ul>
              </div>
            </div>
          </section>

          {/* Article 12: Governing Law and Jurisdiction */}
          <section className="terms-section">
            <div className="terms-article-header">
              <span className="terms-article-number">Article 12</span>
              <h2 className="terms-article-title">Governing Law and Jurisdiction</h2>
            </div>
            <div className="terms-article-content">
              <ol className="terms-list">
                <li>These Terms and all service agreements shall be governed by and construed in accordance with the laws of Japan, without regard to its conflict of law provisions</li>
                <li>The Tokyo District Court shall have exclusive jurisdiction as the court of first instance for any disputes arising out of or in connection with these Terms or the Services</li>
                <li>The parties agree to attempt good faith negotiations to resolve any disputes before resorting to litigation</li>
                <li>For international users, the parties may agree to alternative dispute resolution mechanisms such as arbitration under the rules of the Japan Commercial Arbitration Association (JCAA) or other mutually agreed arbitration bodies</li>
              </ol>
            </div>
          </section>

          {/* Article 13: Changes to Terms */}
          <section className="terms-section">
            <div className="terms-article-header">
              <span className="terms-article-number">Article 13</span>
              <h2 className="terms-article-title">Amendments to Terms</h2>
            </div>
            <div className="terms-article-content">
              <ol className="terms-list">
                <li>The Company may amend these Terms at any time by posting updated Terms on its website</li>
                <li>Users will be notified of material changes via email or website notification at least 30 days prior to the effective date</li>
                <li>Continued use of the Services after the effective date of amended Terms constitutes acceptance of such amendments</li>
                <li>Users who do not agree to amended Terms may terminate the agreement in accordance with Article 11</li>
                <li>Amendments to these Terms do not affect the terms of existing individual service contracts unless explicitly agreed by both parties</li>
              </ol>
            </div>
          </section>

          {/* Contact Information */}
          <section className="terms-section terms-contact">
            <div className="terms-contact-header">
              <h2 className="terms-contact-title">Contact Information</h2>
              <p className="terms-contact-subtitle">For inquiries regarding these Terms of Service</p>
            </div>
            <div className="terms-contact-card">
              <div className="terms-contact-row">
                <span className="terms-contact-label">Company Name</span>
                <span className="terms-contact-value">Solunai Systems Inc.</span>
              </div>
              <div className="terms-contact-row">
                <span className="terms-contact-label">Head Office</span>
                <span className="terms-contact-value">
                  WISE NEXT Shin-Yokohama 4F<br />
                  2-6-20 Shin-Yokohama, Kohoku-ku, Yokohama-shi, Kanagawa 222-0033, Japan
                </span>
              </div>
              <div className="terms-contact-row">
                <span className="terms-contact-label">Tokyo Branch</span>
                <span className="terms-contact-value">
                  Ginza, Chuo-ku, Tokyo, Japan
                </span>
              </div>
              <div className="terms-contact-row">
                <span className="terms-contact-label">Email</span>
                <span className="terms-contact-value">
                  <a href="mailto:info@solunai.com">info@solunai.com</a>
                </span>
              </div>
              <div className="terms-contact-row">
                <span className="terms-contact-label">Website</span>
                <span className="terms-contact-value">
                  <a href="https://solunai.com" target="_blank" rel="noopener noreferrer">https://solunai.com</a>
                </span>
              </div>
            </div>
          </section>

          {/* Effective Date */}
          <section className="terms-effective-date">
            <p><strong>Effective Date:</strong> November 12, 2025</p>
            <p><strong>Last Updated:</strong> November 12, 2025</p>
          </section>

        </div>
      </div>

      <Footer lang="en" />
    </main>
  );
}
