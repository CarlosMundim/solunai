'use client';

import Header from '@/components/Header';
import ContactHero from '@/components/contact/ContactHero';
import FreeConsultationOffer from '@/components/contact/FreeConsultationOffer';
import ContactForm from '@/components/contact/ContactForm';
import QuickLinks from '@/components/contact/QuickLinks';
import TrustIndicators from '@/components/contact/TrustIndicators';
import OfficeInformation from '@/components/contact/OfficeInformation';
import MapLocation from '@/components/contact/MapLocation';
import AlternativeContacts from '@/components/contact/AlternativeContacts';
import ContactFAQ from '@/components/contact/ContactFAQ';
import FinalCTA from '@/components/contact/FinalCTA';

export default function ContactPage() {
  return (
    <main className="min-h-screen">
      <Header lang="en" />
      <ContactHero lang="en" />
      <FreeConsultationOffer lang="en" />
      <ContactForm lang="en" />
      <QuickLinks lang="en" />
      <TrustIndicators lang="en" />
      <OfficeInformation lang="en" />
      <MapLocation lang="en" />
      <AlternativeContacts lang="en" />
      <ContactFAQ lang="en" />
      <FinalCTA lang="en" />
    </main>
  );
}
