import Navigation from "@/components/Navigation";
import HeroSection from "@/components/HeroSection"; 
import AboutSection from "@/components/AboutSection";
import ProcessSection from "@/components/ProcessSection";
import ServicesSection from "@/components/ServicesSection";
import { SplineShowcaseSection } from "@/components/SplineShowcaseSection";
import PricingSection from "@/components/PricingSection";
import ContactSection from "@/components/ContactSection";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <Navigation />
      <HeroSection />
      <AboutSection />
      <ProcessSection />
      <ServicesSection />
      <SplineShowcaseSection />
      <PricingSection />
      <ContactSection />
      <Footer />
    </div>
  );
};

export default Index;
