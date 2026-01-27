import Header from '@/components/Header';
import HeroSection from '@/components/HeroSection';
import AboutSection from '@/components/AboutSection';
import HowItWorksSection from '@/components/HowItWorksSection';
import DifferentialsSection from '@/components/DifferentialsSection';
import PlansSection from '@/components/PlansSection';
import TestimonialsSection from '@/components/TestimonialsSection';
import ContactSection from '@/components/ContactSection';
import Footer from '@/components/Footer';

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <HeroSection />
      <AboutSection />
      <HowItWorksSection />
      <DifferentialsSection />
      <TestimonialsSection />
      <PlansSection />
      <ContactSection />
      <Footer />
    </div>
  );
};

export default Index;
