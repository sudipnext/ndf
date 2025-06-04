import Header from '@/components/Header'
import HeroSection from '@/components/HeroSection';
import WorkWeLoveSection from '@/components/WorkWeLoveSection';
import ServicesSection from '@/components/ServiceSection';
import TechnologySection from '@/components/TechnologySection';
import ExperienceSection from '@/components/ExperienceSection';
import TestimonialsSection from '@/components/TestimonialSection';
import ContactSection from '@/components/ContactSection';
import Footer from '@/components/Footer';

export default function Home() {
  return (
    <main>
      <Header />
      <HeroSection />
      <WorkWeLoveSection />
      <ServicesSection />
      <TechnologySection />
      <ExperienceSection />
      <TestimonialsSection />
      <ContactSection />
      <Footer />
    </main>
  );
}
