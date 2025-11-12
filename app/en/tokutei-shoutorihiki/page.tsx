'use client';

import React from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import '../../terms/terms.css';

export default function TokuteiShoutorihikiEN() {
  return (
    <main className="min-h-screen bg-white">
      <Header lang="en" />

      {/* Hero Section */}
      <div className="terms-hero">
        <div className="terms-hero-container">
          <div className="terms-breadcrumb">
            <a href="/en">Home</a>
            <span className="breadcrumb-separator">›</span>
            <span>Commercial Transactions Disclosure</span>
          </div>
          <h1 className="terms-hero-title">Commercial Transactions Disclosure</h1>
          <p className="terms-hero-subtitle">特定商取引法に基づく表記</p>
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
              In accordance with the Act on Specified Commercial Transactions (Act No. 57 of 1976), we hereby disclose the following information regarding our business operations and service transactions.
            </p>
          </section>

          {/* Article 1: Business Information */}
          <section className="terms-section">
            <div className="terms-article-header">
              <span className="terms-article-number">Article 1</span>
              <h2 className="terms-article-title">Business Information</h2>
            </div>
            <div className="terms-article-content">
              <div className="terms-contact-card">
                <div className="terms-contact-row">
                  <span className="terms-contact-label">Business Name</span>
                  <span className="terms-contact-value">Solunai Systems Inc. (Solunai Systems K.K.)</span>
                </div>
                <div className="terms-contact-row">
                  <span className="terms-contact-label">Representative</span>
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
                  <span className="terms-contact-label">Phone</span>
                  <span className="terms-contact-value">+81-45-285-9480</span>
                </div>
                <div className="terms-contact-row">
                  <span className="terms-contact-label">Email</span>
                  <span className="terms-contact-value"><a href="mailto:info@solunai.co.jp">info@solunai.co.jp</a></span>
                </div>
                <div className="terms-contact-row">
                  <span className="terms-contact-label">Website</span>
                  <span className="terms-contact-value"><a href="https://solunai.com" target="_blank" rel="noopener noreferrer">https://solunai.com</a></span>
                </div>
              </div>
            </div>
          </section>

          {/* Article 2: Services Provided */}
          <section className="terms-section">
            <div className="terms-article-header">
              <span className="terms-article-number">Article 2</span>
              <h2 className="terms-article-title">Services Provided</h2>
            </div>
            <div className="terms-article-content">
              <p className="terms-text">
                Solunai Systems Inc. offers the following professional services:
              </p>

              <div className="terms-service-card">
                <h3 className="terms-service-title">1. AI Solution Development & Implementation</h3>
                <ul className="terms-list">
                  <li>Digital Twin technology development and implementation</li>
                  <li>Computer Vision quality management systems</li>
                  <li>Predictive maintenance system development</li>
                  <li>Production optimization AI solutions</li>
                  <li>Custom AI solutions for manufacturing industries</li>
                  <li>Integration with existing PLM, MES, and ERP systems</li>
                </ul>
              </div>

              <div className="terms-service-card">
                <h3 className="terms-service-title">2. Global Engineering Services</h3>
                <ul className="terms-list">
                  <li>Global talent placement through partnership with WorldEmp B.V. (Netherlands)</li>
                  <li>AI engineers, data scientists, and manufacturing IT specialists</li>
                  <li>Project-based and contract-based engineering support</li>
                  <li>Multi-disciplinary engineering resources (mechanical, electrical, software)</li>
                </ul>
                <div className="terms-highlight-box" style={{marginTop: '1rem'}}>
                  <p>
                    <strong>Note:</strong> Global engineering services are facilitated through our strategic partner WorldEmp B.V. Services may be subject to separate terms and conditions.
                  </p>
                </div>
              </div>

              <div className="terms-service-card">
                <h3 className="terms-service-title">3. Consulting Services</h3>
                <ul className="terms-list">
                  <li>Manufacturing DX (Digital Transformation) strategy consulting</li>
                  <li>AI adoption feasibility studies and ROI analysis</li>
                  <li>Digital Twin implementation planning and roadmap development</li>
                  <li>Technology stack evaluation and recommendations</li>
                  <li>Process optimization consulting</li>
                </ul>
              </div>
            </div>
          </section>

          {/* Article 3: Pricing */}
          <section className="terms-section">
            <div className="terms-article-header">
              <span className="terms-article-number">Article 3</span>
              <h2 className="terms-article-title">Service Pricing</h2>
            </div>
            <div className="terms-article-content">
              <p className="terms-text">
                Service pricing varies based on project scope, complexity, technical requirements, and duration. All prices are determined through custom quotations after detailed requirements assessment.
              </p>

              <div className="terms-subsection">
                <h3 className="terms-subsection-title">Reference Price Ranges</h3>
                <div className="terms-definitions" style={{background: '#f8fafc'}}>
                  <div className="terms-definition-item">
                    <strong className="terms-definition-term">Pilot Projects</strong>
                    <p className="terms-definition-desc">
                      <strong>Range:</strong> ¥3,000,000 - ¥8,000,000<br />
                      <strong>Duration:</strong> 1-3 months<br />
                      <strong>Scope:</strong> Proof of concept, limited deployment, feasibility validation
                    </p>
                  </div>

                  <div className="terms-definition-item">
                    <strong className="terms-definition-term">Full-Scale Implementation</strong>
                    <p className="terms-definition-desc">
                      <strong>Range:</strong> ¥15,000,000 - ¥50,000,000<br />
                      <strong>Duration:</strong> 6-12 months<br />
                      <strong>Scope:</strong> Enterprise deployment, system integration, comprehensive training
                    </p>
                  </div>

                  <div className="terms-definition-item">
                    <strong className="terms-definition-term">Global Engineer Placement</strong>
                    <p className="terms-definition-desc">
                      <strong>Range:</strong> ¥500,000 - ¥1,500,000 per engineer per month<br />
                      <strong>Duration:</strong> Flexible (minimum 3 months typically)<br />
                      <strong>Note:</strong> Rates vary based on seniority, specialization, and project location
                    </p>
                  </div>

                  <div className="terms-definition-item">
                    <strong className="terms-definition-term">Consulting Services</strong>
                    <p className="terms-definition-desc">
                      <strong>Range:</strong> ¥300,000 - ¥800,000 per day<br />
                      <strong>Note:</strong> Strategy workshops, technical assessments, expert advisory
                    </p>
                  </div>
                </div>
              </div>

              <div className="terms-subsection">
                <h3 className="terms-subsection-title">What's Included in Pricing</h3>
                <ul className="terms-list">
                  <li><strong>Project Management:</strong> Dedicated project manager, status reporting, stakeholder communication</li>
                  <li><strong>Technical Development:</strong> AI model development, software engineering, system integration</li>
                  <li><strong>Implementation Support:</strong> Deployment assistance, configuration, system setup</li>
                  <li><strong>Training:</strong> User training, administrator training, documentation</li>
                  <li><strong>Maintenance Support:</strong> 6-month post-deployment support (full-scale projects only)</li>
                </ul>
              </div>

              <div className="terms-subsection">
                <h3 className="terms-subsection-title">Additional Costs (Not Included)</h3>
                <ul className="terms-list">
                  <li><strong>Consumption Tax:</strong> 10% VAT will be added to all quoted prices</li>
                  <li><strong>Hardware Costs:</strong> GPUs, servers, edge devices (client responsibility)</li>
                  <li><strong>Cloud Infrastructure:</strong> AWS/Azure/GCP usage fees (usage-based, client responsibility)</li>
                  <li><strong>Third-Party Licenses:</strong> Software licenses from NVIDIA, Siemens, Ansys, etc. (if applicable)</li>
                  <li><strong>Travel Expenses:</strong> For on-site work outside Greater Tokyo area (actual cost basis)</li>
                </ul>
              </div>

              <div className="terms-highlight-box">
                <p>
                  <strong>Important:</strong> The prices above are reference ranges only. Actual pricing will be provided in a detailed quotation after requirements analysis, technical assessment, and scope definition. Contact us for a custom quote tailored to your specific needs.
                </p>
              </div>
            </div>
          </section>

          {/* Article 4: Payment Methods */}
          <section className="terms-section">
            <div className="terms-article-header">
              <span className="terms-article-number">Article 4</span>
              <h2 className="terms-article-title">Payment Methods</h2>
            </div>
            <div className="terms-article-content">

              <div className="terms-subsection">
                <h3 className="terms-subsection-title">Accepted Payment Methods</h3>
                <div className="terms-definitions">
                  <div className="terms-definition-item">
                    <strong className="terms-definition-term">Bank Transfer (Wire Transfer)</strong>
                    <p className="terms-definition-desc">
                      Payment to designated bank account upon invoice issuance. This is the standard payment method for corporate clients.
                    </p>
                  </div>

                  <div className="terms-definition-item">
                    <strong className="terms-definition-term">Credit Card</strong>
                    <p className="terms-definition-desc">
                      VISA, Mastercard accepted for transactions under ¥5,000,000. Processing fees may apply.
                    </p>
                  </div>

                  <div className="terms-definition-item">
                    <strong className="terms-definition-term">Installment Payment</strong>
                    <p className="terms-definition-desc">
                      Available for projects exceeding ¥10,000,000. Terms negotiable based on project structure.
                    </p>
                  </div>
                </div>
              </div>

              <div className="terms-subsection">
                <h3 className="terms-subsection-title">Transfer Fees</h3>
                <p className="terms-text">
                  Bank transfer fees are the responsibility of the client.
                </p>
              </div>

              <div className="terms-subsection">
                <h3 className="terms-subsection-title">Bank Account Information</h3>
                <p className="terms-text">
                  Bank account details for payment will be provided separately after contract execution.
                </p>
              </div>
            </div>
          </section>

          {/* Article 5: Payment Timing */}
          <section className="terms-section">
            <div className="terms-article-header">
              <span className="terms-article-number">Article 5</span>
              <h2 className="terms-article-title">Payment Timing and Schedule</h2>
            </div>
            <div className="terms-article-content">

              <div className="terms-subsection">
                <h3 className="terms-subsection-title">Standard Payment Schedule</h3>
                <ul className="terms-list">
                  <li><strong>Upon Contract Signing:</strong> 50% of contract amount (advance payment)</li>
                  <li><strong>Upon Deliverable Completion:</strong> 50% of contract amount (final payment)</li>
                </ul>
              </div>

              <div className="terms-subsection">
                <h3 className="terms-subsection-title">Milestone-Based Payment (Long-Term Projects)</h3>
                <p className="terms-text">
                  For projects exceeding 6 months duration:
                </p>
                <ul className="terms-list">
                  <li><strong>Contract Signing:</strong> 30% of total contract value</li>
                  <li><strong>Intermediate Milestone(s):</strong> 40% of total contract value</li>
                  <li><strong>Final Delivery:</strong> 30% of total contract value</li>
                </ul>
                <p className="terms-text" style={{marginTop: '0.75rem'}}>
                  Specific milestones and payment triggers will be defined in the individual service agreement.
                </p>
              </div>

              <div className="terms-subsection">
                <h3 className="terms-subsection-title">Payment Due Date</h3>
                <p className="terms-text">
                  Payment is due within 30 days of invoice date unless otherwise specified in the service agreement.
                </p>
              </div>

              <div className="terms-warning-box">
                <div className="terms-warning-content">
                  <p className="terms-warning-title">Late Payment Penalties</p>
                  <p className="terms-warning-text">
                    In accordance with Article 514 of the Commercial Code of Japan, late payments will incur interest charges at an annual rate of 14.6%. Additionally, failure to make timely payments may result in suspension of services or termination of the agreement.
                  </p>
                </div>
              </div>
            </div>
          </section>

          {/* Article 6: Service Delivery Timing */}
          <section className="terms-section">
            <div className="terms-article-header">
              <span className="terms-article-number">Article 6</span>
              <h2 className="terms-article-title">Service Delivery Timing</h2>
            </div>
            <div className="terms-article-content">
              <p className="terms-text">
                Service commencement and completion dates will be specified in the individual service agreement. Typical timelines are as follows:
              </p>

              <div className="terms-definitions" style={{background: '#f8fafc'}}>
                <div className="terms-definition-item">
                  <strong className="terms-definition-term">Pilot Projects</strong>
                  <p className="terms-definition-desc">
                    <strong>Start:</strong> 2-6 weeks after contract signing<br />
                    <strong>Duration:</strong> 1-3 months<br />
                    <strong>Completion:</strong> Subject to project scope and complexity
                  </p>
                </div>

                <div className="terms-definition-item">
                  <strong className="terms-definition-term">Full-Scale Implementation</strong>
                  <p className="terms-definition-desc">
                    <strong>Start:</strong> 4-8 weeks after contract signing<br />
                    <strong>Duration:</strong> 6-12 months<br />
                    <strong>Completion:</strong> Phased deployment with defined milestones
                  </p>
                </div>

                <div className="terms-definition-item">
                  <strong className="terms-definition-term">Global Engineer Placement</strong>
                  <p className="terms-definition-desc">
                    <strong>Standard Cases:</strong> 2-6 weeks after requirements confirmation<br />
                    <strong>Complex Cases:</strong> 8-12 weeks (specialized skills, multiple engineers)<br />
                    <strong>Note:</strong> Timing depends on engineer availability and visa requirements
                  </p>
                </div>
              </div>

              <div className="terms-disclaimer-box">
                <p className="terms-text">
                  <strong>Important Notice Regarding Schedules:</strong>
                </p>
                <ul className="terms-list">
                  <li>Timelines may vary based on client requirements, existing system complexity, and internal approval processes</li>
                  <li>Delays in client information provision or specification changes will extend the schedule accordingly</li>
                  <li>We are not responsible for delays caused by force majeure events, including but not limited to natural disasters, pandemics, or government actions</li>
                  <li>Client cooperation is required for timely project completion (access to systems, data provision, stakeholder availability)</li>
                </ul>
              </div>
            </div>
          </section>

          {/* Article 7: Cancellation Policy */}
          <section className="terms-section">
            <div className="terms-article-header">
              <span className="terms-article-number">Article 7</span>
              <h2 className="terms-article-title">Cancellation and Refund Policy</h2>
            </div>
            <div className="terms-article-content">

              <div className="terms-subsection">
                <h3 className="terms-subsection-title">Pre-Contract Cancellation</h3>
                <div className="terms-service-card" style={{background: 'linear-gradient(to right, #f0fdf4, #dcfce7)', border: '2px solid #86efac'}}>
                  <p className="terms-text">
                    <strong>Free cancellation is available before contract signing.</strong>
                  </p>
                  <p className="terms-text">
                    Quotation submission does not create any obligation. You may decline proposals or quotes without incurring any fees.
                  </p>
                </div>
              </div>

              <div className="terms-subsection">
                <h3 className="terms-subsection-title">Post-Contract Cancellation</h3>
                <p className="terms-text">
                  After contract execution, cancellation fees apply based on project completion percentage:
                </p>

                <div className="terms-definitions" style={{background: 'linear-gradient(to right, #fffbeb, #fef3c7)', borderLeft: '4px solid #f59e0b'}}>
                  <div className="terms-definition-item">
                    <strong className="terms-definition-term">Before Service Commencement</strong>
                    <p className="terms-definition-desc">
                      <strong>Cancellation Fee:</strong> 20% of contract amount
                    </p>
                  </div>

                  <div className="terms-definition-item">
                    <strong className="terms-definition-term">0% - 25% Completion</strong>
                    <p className="terms-definition-desc">
                      <strong>Cancellation Fee:</strong> 50% of contract amount
                    </p>
                  </div>

                  <div className="terms-definition-item">
                    <strong className="terms-definition-term">26% - 50% Completion</strong>
                    <p className="terms-definition-desc">
                      <strong>Cancellation Fee:</strong> 70% of contract amount
                    </p>
                  </div>

                  <div className="terms-definition-item">
                    <strong className="terms-definition-term">51% - 75% Completion</strong>
                    <p className="terms-definition-desc">
                      <strong>Cancellation Fee:</strong> 90% of contract amount
                    </p>
                  </div>

                  <div className="terms-definition-item">
                    <strong className="terms-definition-term">76% - 100% Completion</strong>
                    <p className="terms-definition-desc">
                      <strong>Cancellation Fee:</strong> 100% of contract amount (no refund available)
                    </p>
                  </div>
                </div>

                <p className="terms-text" style={{marginTop: '1rem'}}>
                  <strong>Completion Percentage Calculation:</strong> Based on hours worked, milestones completed, and deliverables produced relative to the total project scope.
                </p>
              </div>

              <div className="terms-subsection">
                <h3 className="terms-subsection-title">Refund Processing</h3>
                <p className="terms-text">
                  If a refund is applicable:
                </p>
                <ul className="terms-list">
                  <li><strong>Timeline:</strong> Refund will be processed within 30 days of cancellation request approval</li>
                  <li><strong>Method:</strong> Bank transfer to client's designated account</li>
                  <li><strong>Fees:</strong> Bank transfer fees deducted from refund amount (client responsibility)</li>
                  <li><strong>Currency:</strong> Refunds issued in Japanese Yen (JPY)</li>
                </ul>
              </div>

              <div className="terms-subsection">
                <h3 className="terms-subsection-title">Company-Initiated Cancellation</h3>
                <div className="terms-service-card" style={{background: 'linear-gradient(to right, #f0f9ff, #e0f2fe)', border: '2px solid #0ea5e9'}}>
                  <p className="terms-text">
                    If Solunai Systems is unable to fulfill service obligations due to circumstances within our control:
                  </p>
                  <ul className="terms-list">
                    <li><strong>Full Refund:</strong> 100% refund of all payments made</li>
                    <li><strong>Direct Damages:</strong> Compensation for direct damages incurred, up to the total contract amount</li>
                    <li><strong>Good Faith Efforts:</strong> We will make reasonable efforts to assist with transition or alternative arrangements</li>
                  </ul>
                </div>
              </div>
            </div>
          </section>

          {/* Article 8: Exchange and Returns */}
          <section className="terms-section">
            <div className="terms-article-header">
              <span className="terms-article-number">Article 8</span>
              <h2 className="terms-article-title">Exchange and Returns</h2>
            </div>
            <div className="terms-article-content">
              <p className="terms-text">
                Our business involves the provision of professional services (not physical product sales). Therefore, traditional "returns" and "exchanges" do not apply. However, we provide the following quality assurances:
              </p>

              <div className="terms-subsection">
                <h3 className="terms-subsection-title">Quality Warranty</h3>
                <p className="terms-text">
                  If delivered solutions fail to meet contractual specifications:
                </p>
                <ul className="terms-list">
                  <li><strong>Remediation:</strong> We will correct deficiencies at no additional cost</li>
                  <li><strong>Warranty Period:</strong> 6 months post-delivery (full-scale projects) or 3 months (pilot projects)</li>
                  <li><strong>Coverage:</strong> Functions and performance metrics specified in the contract</li>
                  <li><strong>Response Time:</strong> Critical issues addressed within 48 hours; non-critical within 5 business days</li>
                </ul>
              </div>

              <div className="terms-subsection">
                <h3 className="terms-subsection-title">Warranty Exclusions</h3>
                <p className="terms-text">
                  The warranty does not cover:
                </p>
                <ul className="terms-list">
                  <li><strong>Requirement Changes:</strong> Issues arising from post-delivery scope changes</li>
                  <li><strong>User Error:</strong> Problems caused by client misuse or incorrect operation</li>
                  <li><strong>Environmental Issues:</strong> Insufficient infrastructure, incompatible systems, or inadequate data quality</li>
                  <li><strong>Third-Party Systems:</strong> Integration issues outside our scope of responsibility</li>
                  <li><strong>Force Majeure:</strong> Damage from natural disasters, pandemics, or unforeseeable events</li>
                  <li><strong>Unauthorized Modifications:</strong> Changes made by client or third parties without our approval</li>
                </ul>
              </div>
            </div>
          </section>

          {/* Article 9: Special Sales Conditions */}
          <section className="terms-section">
            <div className="terms-article-header">
              <span className="terms-article-number">Article 9</span>
              <h2 className="terms-article-title">Special Pricing and Contract Terms</h2>
            </div>
            <div className="terms-article-content">

              <div className="terms-service-card">
                <h3 className="terms-service-title">Performance-Based Pricing (Pilot Projects Only)</h3>
                <p className="terms-text">
                  For qualifying pilot projects, we may offer performance-based pricing:
                </p>
                <ul className="terms-list">
                  <li><strong>Upfront Fee:</strong> 30% of total project value</li>
                  <li><strong>Success Fee:</strong> 70% payable upon achieving pre-defined KPIs</li>
                  <li><strong>KPI Non-Achievement:</strong> Project concludes with upfront fee only (no additional payment required)</li>
                </ul>
                <div className="terms-highlight-box" style={{marginTop: '1rem'}}>
                  <p>
                    <strong>Eligibility:</strong> Available only for projects with clearly measurable, objective KPIs (e.g., defect detection accuracy, cost reduction %). Not applicable to all project types.
                  </p>
                </div>
              </div>

              <div className="terms-service-card">
                <h3 className="terms-service-title">Long-Term Contract Discounts</h3>
                <p className="terms-text">
                  Discounts for multi-year service agreements:
                </p>
                <ul className="terms-list">
                  <li><strong>12-Month Contract:</strong> 5% discount on total contract value</li>
                  <li><strong>24-Month Contract:</strong> 10% discount on total contract value</li>
                  <li><strong>36-Month Contract:</strong> 15% discount on total contract value</li>
                </ul>
              </div>

              <div className="terms-service-card">
                <h3 className="terms-service-title">Multi-Service Bundle Discount</h3>
                <p className="terms-text">
                  When contracting for multiple service categories simultaneously:
                </p>
                <ul className="terms-list">
                  <li><strong>AI Solutions + Global Engineering:</strong> 10% discount on combined total</li>
                  <li><strong>Three or More Services:</strong> Custom discount packages available (contact for quote)</li>
                </ul>
              </div>
            </div>
          </section>

          {/* Article 10: Warranty and Liability */}
          <section className="terms-section">
            <div className="terms-article-header">
              <span className="terms-article-number">Article 10</span>
              <h2 className="terms-article-title">Warranty and Liability Limitations</h2>
            </div>
            <div className="terms-article-content">

              <div className="terms-subsection">
                <h3 className="terms-subsection-title">Performance Warranty</h3>
                <p className="terms-text">
                  We warrant that our services will meet the specifications outlined in the service agreement. However, the following disclaimers apply:
                </p>
                <div className="terms-disclaimer-box">
                  <ul className="terms-list">
                    <li><strong>Marketing Claims:</strong> Performance metrics referenced in marketing materials (e.g., "95% quality improvement," "30-50% cost reduction") are based on specific case studies (such as FBM Hudson Italiana pilot project, 2024) and are not guaranteed for all clients.</li>
                    <li><strong>Results Variability:</strong> Actual results depend on multiple factors including industry sector, existing systems, data quality, operational procedures, and organizational readiness.</li>
                    <li><strong>Past Performance:</strong> Historical case study results do not guarantee future outcomes.</li>
                    <li><strong>AI Limitations:</strong> AI model performance varies with data characteristics, environmental conditions, and use cases.</li>
                  </ul>
                </div>
              </div>

              <div className="terms-subsection">
                <h3 className="terms-subsection-title">Limitation of Liability</h3>
                <p className="terms-text">
                  Our liability is limited as follows:
                </p>
                <ul className="terms-list">
                  <li><strong>Direct Damages Only:</strong> We are liable only for direct damages; indirect damages, consequential damages, and lost profits are excluded</li>
                  <li><strong>Maximum Liability:</strong> Total liability capped at the total contract amount paid by client</li>
                  <li><strong>Negligence Standard:</strong> No liability unless caused by our willful misconduct or gross negligence</li>
                  <li><strong>Time Limitation:</strong> Claims must be made within 12 months of delivery</li>
                </ul>
              </div>

              <div className="terms-subsection">
                <h3 className="terms-subsection-title">Client Responsibilities</h3>
                <p className="terms-text">
                  Client is responsible for:
                </p>
                <ul className="terms-list">
                  <li>Providing accurate requirements and timely information</li>
                  <li>Maintaining adequate IT infrastructure and data quality</li>
                  <li>Training users and ensuring proper system usage</li>
                  <li>Compliance with applicable laws and industry regulations</li>
                </ul>
              </div>
            </div>
          </section>

          {/* Article 11: Inquiry Contact */}
          <section className="terms-section terms-contact">
            <div className="terms-contact-header">
              <h2 className="terms-contact-title">Contact for Inquiries</h2>
              <p className="terms-contact-subtitle">For questions about this disclosure or our services</p>
            </div>
            <div className="terms-contact-card">
              <div className="terms-contact-row">
                <span className="terms-contact-label">Company Name</span>
                <span className="terms-contact-value">Solunai Systems Inc. (Solunai Systems K.K.)</span>
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
                <span className="terms-contact-value">+81-45-285-9480 (Weekdays 9:00-18:00 JST)</span>
              </div>
              <div className="terms-contact-row">
                <span className="terms-contact-label">Email</span>
                <span className="terms-contact-value">
                  <a href="mailto:info@solunai.co.jp">info@solunai.co.jp</a><br />
                  <span style={{fontSize: '0.875rem', color: '#6b7280'}}>24/7 reception, response within 48 hours</span>
                </span>
              </div>
              <div className="terms-contact-row">
                <span className="terms-contact-label">Contact Form</span>
                <span className="terms-contact-value">
                  <a href="https://solunai.com/contact" target="_blank" rel="noopener noreferrer">https://solunai.com/contact</a>
                </span>
              </div>
              <div className="terms-contact-row">
                <span className="terms-contact-label">Business Hours</span>
                <span className="terms-contact-value">
                  Monday - Friday: 9:00-18:00 (Japan Standard Time)<br />
                  Closed: Weekends and Japanese National Holidays
                </span>
              </div>
            </div>
          </section>

          {/* Effective Date */}
          <section className="terms-effective-date">
            <p><strong>Effective Date:</strong> November 12, 2025</p>
            <p><strong>Last Updated:</strong> November 12, 2025</p>
            <p style={{marginTop: '1.5rem'}}>Solunai Systems Inc.</p>
            <p>Representative: Carlos Magno Freitas Mundim</p>
          </section>

        </div>
      </div>

      <Footer lang="en" />
    </main>
  );
}
