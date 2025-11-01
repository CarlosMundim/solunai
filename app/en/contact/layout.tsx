import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Contact Us | Solunai Systems K.K.',
  description: 'Start your manufacturing transformation today. Get a free 60-minute consultation to solve your challenges. ISO 27001 certified, 24-hour response guarantee.',
  keywords: 'contact, free consultation, manufacturing DX, AI implementation, predictive maintenance, quality control, quotation automation',
  openGraph: {
    title: 'Contact Us | Solunai Systems K.K.',
    description: 'Start your manufacturing transformation. Free 60-minute consultation to solve your challenges.',
    type: 'website',
  },
};

export default function ContactLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
