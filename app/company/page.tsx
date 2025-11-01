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

export default function CompanyPage() {
  return (
    <main className="min-h-screen">
      <Header lang="ja" />
      <CompanyHero lang="ja" />
      <CorporateProfile lang="ja" />
      <FinancialHighlights lang="ja" />
      <FundingStrategy lang="ja" />
      <CustomerPortfolio lang="ja" />
      <Certifications lang="ja" />
      <Partnerships lang="ja" />
      <OfficeLocations lang="ja" />
      <CompanyTimeline lang="ja" />
      <CompanyCTA lang="ja" />
    </main>
  );
}
