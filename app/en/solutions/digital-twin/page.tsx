import React from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import DigitalTwinHero from '@/components/solutions/digital-twin/DigitalTwinHero';
import KeyCapabilities from '@/components/solutions/digital-twin/KeyCapabilities';
import DigitalTwinCTA from '@/components/solutions/digital-twin/DigitalTwinCTA';

export const metadata = {
  title: 'Digital Twin - Solunai',
  description: 'Capture every data point from all factory data sources (IT, OT, cloud, edge) and unify them into a real-time, dynamically updating namespace. Build a complete digital replica of your manufacturing operations.',
  keywords: 'Digital Twin, Manufacturing, IoT, Real-time Data, Factory Automation, NVIDIA Omniverse, ANSYS',
};

export default function DigitalTwinPage() {
  return (
    <>
      <Header lang="en" />
      <main>
        <DigitalTwinHero lang="en" />
        <KeyCapabilities lang="en" />
        <DigitalTwinCTA lang="en" />
      </main>
      <Footer lang="en" />
    </>
  );
}
