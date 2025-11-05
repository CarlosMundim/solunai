import React from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import PredictiveMaintenanceHero from '@/components/solutions/predictive-maintenance/PredictiveMaintenanceHero';
import PMKeyCapabilities from '@/components/solutions/predictive-maintenance/PMKeyCapabilities';
import PMWhatIsPM from '@/components/solutions/predictive-maintenance/PMWhatIsPM';
import PartnershipLogos from '@/components/solutions/digital-twin/PartnershipLogos';
import DigitalTwinCTA from '@/components/solutions/digital-twin/DigitalTwinCTA';

export const metadata = {
  title: 'Predictive Maintenance - Solunai',
  description: 'Predict equipment failures in advance with AI predictive maintenance. Reduce unplanned downtime by up to 80% and cut annual maintenance costs by 40%. 24/7 equipment health monitoring with sensors and AI.',
  keywords: 'Predictive Maintenance, AI, Machine Learning, Equipment Monitoring, Downtime Reduction, Cost Reduction, Manufacturing DX',
};

export default function PredictiveMaintenancePage() {
  return (
    <>
      <Header lang="en" />
      <main>
        <PredictiveMaintenanceHero lang="en" />
        <PMKeyCapabilities lang="en" />
        <PMWhatIsPM lang="en" />
        <PartnershipLogos lang="en" />
        <DigitalTwinCTA lang="en" />
      </main>
      <Footer lang="en" />
    </>
  );
}
