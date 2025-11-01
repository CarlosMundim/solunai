import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Company Information | Solunai - Transforming Manufacturing with Digital Twins',
  description: 'Solunai Systems K.K. corporate profile, financials, certifications, and partnerships. Proven technology and strong financial foundation driving Japanese manufacturing digitalization. FBM Hudson €2.5M-€3.8M contract, ISO 27001/SOC 2 certified.',
  keywords: 'Company Information, Corporate Profile, Financial Highlights, Certifications, ISO 27001, SOC 2, Digital Twin, Manufacturing, Solunai',
  openGraph: {
    title: 'Company Information | Solunai Systems K.K.',
    description: 'Proven technology and strong financial foundation. FBM Hudson €2.5M-€3.8M contract, ISO 27001/SOC 2 certified.',
    type: 'website',
    locale: 'en_US',
  },
};

export default function CompanyLayoutEN({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
