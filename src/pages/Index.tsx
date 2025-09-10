import Navigation from "@/components/Navigation";
import HeroSection from "@/components/HeroSection"; 
import { lazy, Suspense, useEffect, useState } from "react";

// Lazy load heavy components to reduce main-thread work
const SplineShowcaseSection = lazy(() => import("@/components/SplineShowcaseSection"));
const AboutSection = lazy(() => import("@/components/AboutSection"));
const ProcessSection = lazy(() => import("@/components/ProcessSection"));
const ServicesSection = lazy(() => import("@/components/ServicesSection"));
const PricingSection = lazy(() => import("@/components/PricingSection"));
const FAQSection = lazy(() => import("@/components/FAQSection"));
const ContactSection = lazy(() => import("@/components/ContactSection"));
const Footer = lazy(() => import("@/components/Footer"));

const Index = () => {
  const [showBelowFold, setShowBelowFold] = useState(false);

  // Defer below-the-fold content to reduce initial main-thread work
  useEffect(() => {
    const timer = setTimeout(() => {
      setShowBelowFold(true);
    }, 100); // Small delay to allow hero section to render first

    return () => clearTimeout(timer);
  }, []);

  const LoadingFallback = ({ height = "py-24" }: { height?: string }) => (
    <div className={`${height} bg-background flex items-center justify-center`}>
      <div className="animate-pulse text-muted-foreground">Loading...</div>
    </div>
  );

  return (
    <div className="min-h-screen bg-background text-foreground">
      <Navigation />
      <HeroSection />
      
      {showBelowFold && (
        <>
          <Suspense fallback={<LoadingFallback />}>
            <AboutSection />
          </Suspense>
          <Suspense fallback={<LoadingFallback />}>
            <ProcessSection />
          </Suspense>
          <Suspense fallback={<LoadingFallback />}>
            <ServicesSection />
          </Suspense>
          <Suspense fallback={<LoadingFallback height="py-32" />}>
            <SplineShowcaseSection />
          </Suspense>
          <Suspense fallback={<LoadingFallback />}>
            <PricingSection />
          </Suspense>
          <Suspense fallback={<LoadingFallback />}>
            <FAQSection />
          </Suspense>
          <Suspense fallback={<LoadingFallback />}>
            <ContactSection />
          </Suspense>
          <Suspense fallback={<LoadingFallback height="py-12" />}>
            <Footer />
          </Suspense>
        </>
      )}
    </div>
  );
};

export default Index;
