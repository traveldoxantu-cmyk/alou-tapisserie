import React from 'react';
import { Header } from '../components/Header';
import { Hero } from '../components/Hero';
import { Engagement } from '../components/Engagement';
import { Services } from '../components/Services';
import { Collections } from '../components/Collections';
import { Testimonials } from '../components/Testimonials';
import { QuoteForm } from '../components/QuoteForm';
import { Footer } from '../components/Footer';
import { WhatsAppButton } from '../components/WhatsAppButton';
import { Toaster } from 'sonner';

export const Home = () => {
  return (
    <main className="bg-[#FDFCFB] text-[#331D19] selection:bg-[#331D19] selection:text-white overflow-hidden">
      <Toaster position="top-center" expand={true} richColors />
      <Header />
      <Hero />
      <Engagement />
      <Services />
      <Collections />
      <Testimonials />
      <QuoteForm />
      <Footer />
      <WhatsAppButton />
    </main>
  );
};
