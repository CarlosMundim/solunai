import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Solunai - Complete Manufacturing Transformation | AI Solutions + Global Engineering',
  description: 'From AI-powered digital twins to complete EPC and fabrication services—we deliver turnkey manufacturing transformation. Access world-class engineering talent deployed in weeks, plus proven AI solutions that reduce costs 30-50%, improve quality 95%, and deliver ROI in 4-10 months.',
  keywords: 'AI, Manufacturing, Digital Transformation, Digital Twin, EPC, Engineering Services, WorldEmp, FBM Hudson',
};

export default function EnglishLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
