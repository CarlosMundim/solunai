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
      <Header lang="ja" />
      <ContactHero lang="ja" />
      <FreeConsultationOffer lang="ja" />
      <ContactForm lang="ja" />
      <QuickLinks lang="ja" />
      <TrustIndicators lang="ja" />
      <OfficeInformation lang="ja" />
      <MapLocation lang="ja" />
      <AlternativeContacts lang="ja" />
      <ContactFAQ lang="ja" />
      <FinalCTA lang="ja" />
    </main>
  );
}
