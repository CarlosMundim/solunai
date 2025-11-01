'use client';

import Header from '@/components/Header';
import CompanyHero from '@/components/company/CompanyHero';
import CorporateProfile from '@/components/company/CorporateProfile';
import FinancialHighlights from '@/components/company/FinancialHighlights';
import FundingStrategy from '@/components/company/FundingStrategy';
import CustomerPortfolio from '@/components/company/CustomerPortfolio';
import Certifications from '@/components/company/Certifications';
import Partnerships from '@/components/company/Partnerships';
import OfficeLocations from '@/components/company/OfficeLocations';
import CompanyTimeline from '@/components/company/CompanyTimeline';
import CompanyCTA from '@/components/company/CompanyCTA';

export default function CompanyPageEN() {
  return (
    <main className="min-h-screen">
      <Header lang="en" />
      <CompanyHero lang="en" />
      <CorporateProfile lang="en" />
      <FinancialHighlights lang="en" />
      <FundingStrategy lang="en" />
      <CustomerPortfolio lang="en" />
      <Certifications lang="en" />
      <Partnerships lang="en" />
      <OfficeLocations lang="en" />
      <CompanyTimeline lang="en" />
      <CompanyCTA lang="en" />
    </main>
  );
}
