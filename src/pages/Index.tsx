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

  // Much more aggressive deferral to prevent blocking
  useEffect(() => {
    // Don't load anything below fold until page is fully interactive
    const loadBelowFold = () => {
      // Use scheduler.postTask if available for better performance
      if ('scheduler' in window && 'postTask' in (window.scheduler as any)) {
        (window.scheduler as any).postTask(() => {
          setShowBelowFold(true);
        }, { priority: 'background' });
      } else {
        // Much longer delay to ensure initial render is complete
        setTimeout(() => {
          setShowBelowFold(true);
        }, 2000);
      }
    };
    
    // Wait for multiple indicators that page is ready
    if (document.readyState === 'complete') {
      loadBelowFold();
    } else {
      window.addEventListener('load', loadBelowFold);
    }
    
    return () => window.removeEventListener('load', loadBelowFold);
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
