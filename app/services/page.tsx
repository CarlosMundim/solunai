import React from 'react';
import Header from '@/components/Header';
import ServicesHero from '@/components/ServicesHero';
import ServicesValueProposition from '@/components/ServicesValueProposition';
import EngineeringServices from '@/components/EngineeringServices';
import ServicesCostComparison from '@/components/ServicesCostComparison';
import ServicesTransformationProcess from '@/components/ServicesTransformationProcess';
import ServicesCompetitiveComparison from '@/components/ServicesCompetitiveComparison';
import ServicesWorldEmpPartnership from '@/components/ServicesWorldEmpPartnership';
import ServicesTechStack from '@/components/ServicesTechStack';
import ServicesCaseProof from '@/components/ServicesCaseProof';
import ServicesServicesFAQ from '@/components/ServicesServicesFAQ';
import ServicesServicesCTA from '@/components/ServicesServicesCTA';

export default function ServicesPage() {
  return (
    <main>
      <Header lang="ja" />
      <ServicesHero lang="ja" />
      <ServicesValueProposition lang="ja" />
      <EngineeringServices lang="ja" />
      <ServicesCostComparison lang="ja" />
      <ServicesTransformationProcess lang="ja" />
      <ServicesCompetitiveComparison lang="ja" />
      <ServicesWorldEmpPartnership lang="ja" />
      <ServicesTechStack lang="ja" />
      <ServicesCaseProof lang="ja" />
      <ServicesServicesFAQ lang="ja" />
      <ServicesServicesCTA lang="ja" />
    </main>
  );
}
