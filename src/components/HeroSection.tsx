import { lazy, Suspense, useState, useEffect } from "react";
import AetherFlowHero from "@/components/ui/aether-flow-hero";

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

// Static version - now just renders the new AetherFlowHero component
const StaticHeroSection = () => {
  return <AetherFlowHero />;
};

export default HeroSection;