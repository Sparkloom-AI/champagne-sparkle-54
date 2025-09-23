import Navigation from "@/components/Navigation";
import HeroSection from "@/components/HeroSection"; 
import { lazy, Suspense, useEffect, useState } from "react";

// Lazy load heavy components to reduce main-thread work
const ProcessSection = lazy(() => import("@/components/ProcessSection"));
const ServicesSection = lazy(() => import("@/components/ServicesSection"));

const ResultsSection = lazy(() => import("@/components/ResultsSection"));
const FAQSection = lazy(() => import("@/components/FAQSection"));
const ContactSection = lazy(() => import("@/components/ContactSection"));
const Footer = lazy(() => import("@/components/Footer"));

const Index = () => {
  const [showBelowFold, setShowBelowFold] = useState(false);

  // Optimized deferral for better user experience while maintaining performance
  useEffect(() => {
    // Load below-fold content after critical rendering is complete
    const loadBelowFold = () => {
      // Use scheduler.postTask if available for better performance
      if ('scheduler' in window && 'postTask' in (window.scheduler as any)) {
        (window.scheduler as any).postTask(() => {
          setShowBelowFold(true);
        }, { priority: 'background' });
      } else {
        // Reduced delay for better user experience
        setTimeout(() => {
          setShowBelowFold(true);
        }, 1000); // Reduced from 5000ms to 1000ms
      }
    };
    
    // Wait for page to be ready with reduced delay
    const checkReadiness = () => {
      // Reduced delay for faster interaction
      setTimeout(loadBelowFold, 500); // Reduced from 3000ms to 500ms
    };
    
    if (document.readyState === 'complete') {
      checkReadiness();
    } else {
      window.addEventListener('load', checkReadiness, { once: true });
    }
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
            <ProcessSection />
          </Suspense>
          <Suspense fallback={<LoadingFallback />}>
            <ServicesSection />
          </Suspense>
          <Suspense fallback={<LoadingFallback />}>
            <ResultsSection />
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
