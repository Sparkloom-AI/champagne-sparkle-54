import Navigation from "@/components/Navigation";
import HeroSection from "@/components/HeroSection"; 
import { lazy, Suspense, useEffect, useState } from "react";

// Lazy load heavy components to reduce main-thread work
const ProcessSection = lazy(() => import("@/components/ProcessSection"));
const ServicesSection = lazy(() => import("@/components/ServicesSection"));
const StatisticsSection = lazy(() => import("@/components/StatisticsSection"));
const ResultsSection = lazy(() => import("@/components/ResultsSection"));
const FAQSection = lazy(() => import("@/components/FAQSection"));
const ContactSection = lazy(() => import("@/components/ContactSection"));
const Footer = lazy(() => import("@/components/Footer"));

const Index = () => {
  const [showBelowFold, setShowBelowFold] = useState(false);

  // Extremely aggressive deferral to achieve better TTI and reduce JavaScript execution
  useEffect(() => {
    // Don't load anything below fold until all main-thread work is done
    const loadBelowFold = () => {
      // Use scheduler.postTask if available for better performance
      if ('scheduler' in window && 'postTask' in (window.scheduler as any)) {
        (window.scheduler as any).postTask(() => {
          setShowBelowFold(true);
        }, { priority: 'background' });
      } else {
        // Much longer delay to ensure main thread is completely free
        setTimeout(() => {
          setShowBelowFold(true);
        }, 5000); // 5 second delay to ensure no JavaScript execution blocking
      }
    };
    
    // Wait for multiple indicators that page is ready + longer delay for main thread
    const checkReadiness = () => {
      // Much longer delay to ensure main thread is free
      setTimeout(loadBelowFold, 3000);
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
            <StatisticsSection />
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
