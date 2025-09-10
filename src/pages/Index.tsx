import Navigation from "@/components/Navigation";
import HeroSection from "@/components/HeroSection"; 
import AboutSection from "@/components/AboutSection";
import ProcessSection from "@/components/ProcessSection";
import ServicesSection from "@/components/ServicesSection";
import PricingSection from "@/components/PricingSection";
import FAQSection from "@/components/FAQSection";
import ContactSection from "@/components/ContactSection";
import Footer from "@/components/Footer";
import { lazy, Suspense } from "react";

// Lazy load the heavy Spline component to reduce main-thread work
const SplineShowcaseSection = lazy(() => import("@/components/SplineShowcaseSection"));

const Index = () => {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <Navigation />
      <HeroSection />
      <AboutSection />
      <ProcessSection />
      <ServicesSection />
      <Suspense fallback={
        <section className="py-24 bg-background relative overflow-hidden">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold mb-4">
                Interactive 3D Experiences
              </h2>
              <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
                Discover our cutting-edge Spline integrations that bring your ideas to life
              </p>
            </div>
            <div className="mt-16 h-96 rounded-lg bg-muted/50 flex items-center justify-center">
              <div className="animate-pulse text-muted-foreground">Loading 3D Experience...</div>
            </div>
          </div>
        </section>
      }>
        <SplineShowcaseSection />
      </Suspense>
      <PricingSection />
      <FAQSection />
      <ContactSection />
      <Footer />
    </div>
  );
};

export default Index;
