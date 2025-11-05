import React from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import ProductionOptimizationHero from '@/components/solutions/production-optimization/ProductionOptimizationHero';
import POKeyCapabilities from '@/components/solutions/production-optimization/POKeyCapabilities';
import POWhatIsPO from '@/components/solutions/production-optimization/POWhatIsPO';
import PartnershipLogos from '@/components/solutions/digital-twin/PartnershipLogos';
import ComputerVisionCTA from '@/components/solutions/computer-vision/ComputerVisionCTA';

export const metadata = {
  title: 'AI Production Optimization - Solunai',
  description: 'Data-driven throughput increase, waste reduction, and optimal resource allocation. Improve OEE and cut energy costs by 10-20%. AI production optimization solution for SME manufacturers.',
  keywords: 'Production Optimization, AI Manufacturing, OEE Improvement, Lean Manufacturing, Throughput, Waste Reduction, Predictive Maintenance',
};

export default function ProductionOptimizationPage() {
  return (
    <>
      <Header lang="en" />
      <main>
        <ProductionOptimizationHero lang="en" />
        <POKeyCapabilities lang="en" />
        <POWhatIsPO lang="en" />
        <PartnershipLogos lang="en" />
        <ComputerVisionCTA lang="en" />
      </main>
      <Footer lang="en" />
    </>
  );
}
