import { Header } from '../components/Header';
import { Hero } from '../components/Hero';
import { Features } from '../components/Features';
import { Categories } from '../components/Categories';
import { BestSellers } from '../components/BestSellers';
import { OurStory } from '../components/OurStory';
import { Services } from '../components/Services';
import { Process } from '../components/Process';
import { Engagement } from '../components/Engagement';
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
      <Features />
      <Categories />
      <BestSellers />
      <OurStory />
      <Services />
      <Process />
      <Engagement />
      <Testimonials />
      <QuoteForm />
      <Footer />
      <WhatsAppButton />
    </main>
  );
};
