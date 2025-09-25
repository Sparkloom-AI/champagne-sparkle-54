import { lazy, Suspense, useState, useEffect } from "react";
import AetherFlowHero from "@/components/AetherFlowHero";

// Lazy load the interactive version only when needed
const InteractiveHeroSection = lazy(() => import("./InteractiveHeroSection"));

const HeroSection = () => {
  const [shouldLoadInteractive, setShouldLoadInteractive] = useState(false);

  // Defer interactive loading until significant user interaction
  useEffect(() => {
    let interactionCount = 0;
    const requiredInteractions = 3;

    const handleInteraction = () => {
      interactionCount++;
      if (interactionCount >= requiredInteractions) {
        // Additional delay to ensure main thread is free
        setTimeout(() => {
          setShouldLoadInteractive(true);
        }, 2000);
        
        // Remove listeners once triggered
        window.removeEventListener('click', handleInteraction);
        window.removeEventListener('scroll', handleInteraction);
        window.removeEventListener('mousemove', handleInteraction);
      }
    };

    // Only add listeners if page is visible and motion is not reduced
    if (!document.hidden && !window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
      window.addEventListener('click', handleInteraction, { passive: true });
      window.addEventListener('scroll', handleInteraction, { passive: true });
      window.addEventListener('mousemove', handleInteraction, { passive: true });
    }

    return () => {
      window.removeEventListener('click', handleInteraction);
      window.removeEventListener('scroll', handleInteraction);
      window.removeEventListener('mousemove', handleInteraction);
    };
  }, []);

  // Render interactive version if loaded
  if (shouldLoadInteractive) {
    return (
      <Suspense fallback={<StaticHeroSection />}>
        <InteractiveHeroSection />
      </Suspense>
    );
  }

  // Render static version by default
  return <StaticHeroSection />;
};

// Static version with no JavaScript execution
const StaticHeroSection = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* AetherFlowHero Background */}
      <AetherFlowHero className="absolute inset-0 z-10" />
      
      {/* Content - Critical text rendered immediately for LCP optimization */}
      <div className="relative z-20 text-center max-w-5xl mx-auto px-6 opacity-100">
        <h1 className="text-5xl md:text-7xl font-bold mb-8 opacity-100 leading-tight">
          <span className="bg-gradient-to-r from-text via-accent-neon to-accent bg-clip-text text-transparent animate-gradient-shift bg-[length:200%_200%] drop-shadow-[0_0_20px_hsl(var(--sl-neon-pink-500)_/_0.3)] block">
            From Zero to Hero
          </span>
          <span className="bg-gradient-to-r from-text via-accent-neon to-accent bg-clip-text text-transparent animate-gradient-shift bg-[length:200%_200%] drop-shadow-[0_0_20px_hsl(var(--sl-neon-pink-500)_/_0.3)] block">
            Your AI Journey Starts Here
          </span>
        </h1>
        
        <p className="text-xl md:text-2xl text-text-muted mb-12 max-w-3xl mx-auto leading-relaxed opacity-100">
          Empowering enterprises to slash costs, boost efficiency, and automate workflows 
          with expertly crafted AI solutions delivered in just 30 days.
        </p>
      </div>
      
      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 border-2 border-accent-neon rounded-full flex justify-center shadow-neon">
          <div className="w-1 h-3 bg-accent-neon rounded-full mt-2 animate-pulse"></div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;