import Navigation from "@/components/Navigation";
import HeroSection from "@/components/HeroSection";
import { lazy, Suspense, useEffect } from "react";
import { handleInitialHashNavigation } from "@/lib/navigation";

// Import main sections directly (no lazy loading for immediate rendering)
import ProcessSection from "@/components/ProcessSection";
import ServicesSection from "@/components/ServicesSection";
import ResultsSection from "@/components/ResultsSection";
import FAQSection from "@/components/FAQSection";
import ContactSection from "@/components/ContactSection";

// Keep only Footer lazy-loaded as it's not critical to LCP
const Footer = lazy(() => import("@/components/Footer"));

const Index = () => {

  // Handle initial hash navigation when page loads
  useEffect(() => {
    handleInitialHashNavigation();
  }, []);

  // Simplified hash navigation - sections are now immediately available
  useEffect(() => {
    const handleHashNavigation = () => {
      if (window.location.hash) {
        const hash = window.location.hash.substring(1);
        const element = document.getElementById(hash);

        if (element) {
          // Use getBoundingClientRect for accurate positioning
          const rect = element.getBoundingClientRect();
          const navHeight = 80;
          const scrollPosition = window.scrollY + rect.top - navHeight;

          // Scroll to section with smooth behavior
          window.scrollTo({
            top: scrollPosition,
            behavior: 'smooth'
          });
        }
      }
    };

    // Handle initial hash on mount with small delay for DOM readiness
    const initialHashTimer = setTimeout(handleHashNavigation, 100);

    // Handle hash changes (browser back/forward)
    const handleHashChange = () => {
      setTimeout(handleHashNavigation, 100);
    };

    window.addEventListener('hashchange', handleHashChange);

    return () => {
      clearTimeout(initialHashTimer);
      window.removeEventListener('hashchange', handleHashChange);
    };
  }, []);

  const LoadingFallback = ({ height = "py-12" }: { height?: string }) => (
    <div className={`${height} bg-background flex items-center justify-center`}>
      <div className="animate-pulse text-muted-foreground">Loading...</div>
    </div>
  );

  return (
    <div className="min-h-screen bg-background text-foreground">
      <Navigation />
      <HeroSection />

      {/* All main sections now render immediately - no showBelowFold gating */}
      <ProcessSection />
      <ServicesSection />
      <ResultsSection />
      <FAQSection />
      <ContactSection />

      {/* Footer remains lazy-loaded as it's not critical to LCP */}
      <Suspense fallback={<LoadingFallback />}>
        <Footer />
      </Suspense>
    </div>
  );
};

export default Index;
