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

// Static version with particle animation background and original hero text
const StaticHeroSection = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Particle Animation Background */}
      <AetherFlowHero />
      
      {/* Subtle gradient wash behind hero text */}
      <div className="absolute inset-0 z-10 pointer-events-none" style={{
        background: 'radial-gradient(ellipse 80% 60% at 50% 40%, rgba(255, 71, 163, 0.12), rgba(249, 50, 168, 0.08), transparent)'
      }} />
      
      {/* Content - Original hero text */}
      <div className="relative z-20 text-center max-w-5xl mx-auto px-6 opacity-100">
        <h1 className="text-5xl md:text-6xl font-semibold mb-8 opacity-100 leading-tight">
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
      
    </section>
  );
};

export default HeroSection;