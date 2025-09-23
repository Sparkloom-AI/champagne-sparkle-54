import { lazy, Suspense, useState, useEffect } from "react";
import heroBackgroundWebP from "@/assets/hero-bg.webp";

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
      {/* Lightweight CSS gradient - no JavaScript computation */}
      <div 
        className="absolute inset-0 z-0" 
        style={{ 
          background: `
            radial-gradient(circle at 30% 40%, rgba(238, 223, 203, 0.08) 0%, transparent 50%),
            radial-gradient(circle at 70% 60%, rgba(206, 192, 173, 0.06) 0%, transparent 50%),
            linear-gradient(135deg, #0B0B0C 0%, #1E1E1F 40%, #0B0B0C 100%)
          `
        }}
      />
      
      {/* Static Background */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat opacity-30 z-10" 
        style={{
          backgroundImage: `url(${heroBackgroundWebP})`,
          transform: 'translate(0px, 0px) scale(1.1)'
        }} 
      />
      
      {/* Static Gradient Overlay */}
      <div 
        className="absolute inset-0 z-10" 
        style={{
          background: `radial-gradient(circle at 50% 50%, 
                  hsl(var(--sl-obsidian) / 0.2) 0%, 
                  hsl(var(--sl-obsidian) / 0.6) 100%)`
        }} 
      />
      
      {/* Static Floating Orbs */}
      <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-gradient-orb animate-float opacity-20 z-10" />
      <div className="absolute bottom-1/3 right-1/4 w-64 h-64 bg-gradient-neon-glow animate-float opacity-20 z-10" style={{ animationDelay: '2s' }} />
      <div className="absolute top-1/2 right-1/3 w-48 h-48 bg-gradient-orb animate-pulse-glow opacity-10 z-10" style={{ animationDelay: '4s' }} />
      
      {/* Static Light Effects */}
      <div 
        className="absolute w-96 h-96 opacity-15 pointer-events-none z-10" 
        style={{
          background: `radial-gradient(circle, hsl(var(--sl-auric-700) / 0.3) 0%, transparent 70%)`,
          left: '50%',
          top: '50%',
          transform: 'translate(-50%, -50%)',
          filter: 'blur(40px)'
        }} 
      />
      
      {/* Static Particle Effect */}
      <div 
        className="absolute inset-0 opacity-20 z-10" 
        style={{
          background: `radial-gradient(2px 2px at 20px 30px, hsl(var(--sl-auric-700)), transparent),
                       radial-gradient(2px 2px at 40px 70px, hsl(var(--sl-pearl-100)), transparent),
                       radial-gradient(1px 1px at 90px 40px, hsl(var(--sl-auric-500)), transparent)`,
          backgroundRepeat: 'repeat',
          backgroundSize: '100px 100px, 150px 150px, 200px 200px'
        }} 
      />
      
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