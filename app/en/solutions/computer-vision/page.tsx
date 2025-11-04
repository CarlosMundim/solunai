import React from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import ComputerVisionHero from '@/components/solutions/computer-vision/ComputerVisionHero';
import CVKeyCapabilities from '@/components/solutions/computer-vision/CVKeyCapabilities';
import CVWhatIsCV from '@/components/solutions/computer-vision/CVWhatIsCV';
import CVROI from '@/components/solutions/computer-vision/CVROI';
import CVTechnologyStack from '@/components/solutions/computer-vision/CVTechnologyStack';
import CVGovernmentSupport from '@/components/solutions/computer-vision/CVGovernmentSupport';
import CVImplementationFramework from '@/components/solutions/computer-vision/CVImplementationFramework';
import DigitalTwinCTA from '@/components/solutions/digital-twin/DigitalTwinCTA';

export const metadata = {
  title: 'Computer Vision QC - Solunai',
  description: 'Continuously convert siloed, unstructured data from across your manufacturing operations into clean, modeled, and standardized formats. AI-powered automated inspection for quality improvement.',
  keywords: 'Computer Vision, Quality Control, AI Inspection, Deep Learning, Manufacturing',
};

export default function ComputerVisionPage() {
  return (
    <>
      <Header lang="en" />
      <main>
        <ComputerVisionHero lang="en" />
        <CVKeyCapabilities lang="en" />
        <CVWhatIsCV lang="en" />
        <CVROI lang="en" />
        <CVTechnologyStack lang="en" />
        <CVGovernmentSupport lang="en" />
        <CVImplementationFramework lang="en" />
        <DigitalTwinCTA lang="en" />
      </main>
      <Footer lang="en" />
    </>
  );
}
