import React from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import ComputerVisionHero from '@/components/solutions/computer-vision/ComputerVisionHero';
import CVKeyCapabilities from '@/components/solutions/computer-vision/CVKeyCapabilities';
import CVWhatIsCV from '@/components/solutions/computer-vision/CVWhatIsCV';
import PartnershipLogos from '@/components/solutions/digital-twin/PartnershipLogos';
import ComputerVisionCTA from '@/components/solutions/computer-vision/ComputerVisionCTA';

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
        <PartnershipLogos lang="en" />
        <ComputerVisionCTA lang="en" />
      </main>
      <Footer lang="en" />
    </>
  );
}
