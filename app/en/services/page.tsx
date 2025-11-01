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

export default function ServicesPageEN() {
  return (
    <main>
      <Header lang="en" />
      <ServicesHero lang="en" />
      <ServicesValueProposition lang="en" />
      <EngineeringServices lang="en" />
      <ServicesCostComparison lang="en" />
      <ServicesTransformationProcess lang="en" />
      <ServicesCompetitiveComparison lang="en" />
      <ServicesWorldEmpPartnership lang="en" />
      <ServicesTechStack lang="en" />
      <ServicesCaseProof lang="en" />
      <ServicesServicesFAQ lang="en" />
      <ServicesServicesCTA lang="en" />
    </main>
  );
}
