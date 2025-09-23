import { Button } from "@/components/ui/button";
import { useEffect, useState, useMemo, useCallback, useRef } from "react";
import heroBackground from "@/assets/hero-bg.jpg";
import heroBackgroundWebP from "@/assets/hero-bg.webp";
import { MeshGradientBackground } from "@/components/ui/mesh-gradient";
const HeroSection = () => {
  const [isFullyInteractive, setIsFullyInteractive] = useState(false);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [backgroundImage, setBackgroundImage] = useState(heroBackground);
  
  // Cache window dimensions to prevent forced reflows
  const windowDimensionsRef = useRef({ width: 0, height: 0 });

  // Static styles for initial render - no JavaScript computation
  const staticStyles = {
    backgroundTransform: 'translate(0px, 0px) scale(1.1)',
    gradientPosition: '50% 50%',
    lightEffectLeft: '50%',
    lightEffectTop: '50%',
    orb1Transform: 'translate(0px, 0px)',
    orb2Transform: 'translate(0px, 0px)',
    orb3Transform: 'translate(0px, 0px)',
    particleBackground: `radial-gradient(2px 2px at 20px 30px, hsl(var(--sl-auric-700)), transparent),
                         radial-gradient(2px 2px at 40px 70px, hsl(var(--sl-pearl-100)), transparent),
                         radial-gradient(1px 1px at 90px 40px, hsl(var(--sl-auric-500)), transparent)`
  };

  // Memoize expensive style calculations - only when interactive
  const dynamicStyles = useMemo(() => {
    if (!isFullyInteractive) return staticStyles;
    
    return {
      backgroundTransform: `translate(${mousePosition.x * 10}px, ${mousePosition.y * 10}px) scale(1.1)`,
      gradientPosition: `${50 + mousePosition.x * 20}% ${50 + mousePosition.y * 20}%`,
      lightEffectLeft: `${50 + mousePosition.x * 30}%`,
      lightEffectTop: `${50 + mousePosition.y * 30}%`,
      orb1Transform: `translate(${mousePosition.x * -15}px, ${mousePosition.y * -10}px)`,
      orb2Transform: `translate(${mousePosition.x * 20}px, ${mousePosition.y * -15}px)`,
      orb3Transform: `translate(${mousePosition.x * -25}px, ${mousePosition.y * 20}px)`,
      particleBackground: `radial-gradient(2px 2px at ${20 + mousePosition.x * 10}px ${30 + mousePosition.y * 10}px, hsl(var(--sl-auric-700)), transparent),
                           radial-gradient(2px 2px at ${40 + mousePosition.x * 15}px ${70 + mousePosition.y * 15}px, hsl(var(--sl-pearl-100)), transparent),
                           radial-gradient(1px 1px at ${90 + mousePosition.x * 20}px ${40 + mousePosition.y * 20}px, hsl(var(--sl-auric-500)), transparent)`
    };
  }, [mousePosition.x, mousePosition.y, isFullyInteractive]);

  // Ultra-aggressive deferral - only enable interactivity after page is fully loaded
  useEffect(() => {
    // Wait for multiple signals that page is ready for interactivity
    const enableInteractivity = () => {
      // Use scheduler.postTask if available for lowest priority
      if ('scheduler' in window && 'postTask' in (window.scheduler as any)) {
        (window.scheduler as any).postTask(() => {
          setIsFullyInteractive(true);
          
          // Only then start WebP detection
          const webp = new Image();
          webp.onload = webp.onerror = () => {
            setBackgroundImage(webp.height === 2 ? heroBackgroundWebP : heroBackground);
          };
          webp.src = 'data:image/webp;base64,UklGRjoAAABXRUJQVlA4IC4AAACyAgCdASoCAAIALmk0mk0iIiIiIgBoSygABc6WWgAA/veff/0PP8bA//LwYAAA';
        }, { priority: 'background' });
      } else {
        // Much longer delay to ensure TTI is achieved first
        setTimeout(() => {
          setIsFullyInteractive(true);
          
          const webp = new Image();
          webp.onload = webp.onerror = () => {
            setBackgroundImage(webp.height === 2 ? heroBackgroundWebP : heroBackground);
          };
          webp.src = 'data:image/webp;base64,UklGRjoAAABXRUJQVlA4IC4AAACyAgCdASoCAAIALmk0mk0iIiIiIgBoSygABc6WWgAA/veff/0PP8bA//LwYAAA';
        }, 5000); // 5 second delay to ensure TTI
      }
    };

    // Wait for multiple readiness indicators
    if (document.readyState === 'complete') {
      enableInteractivity();
    } else {
      window.addEventListener('load', enableInteractivity, { once: true });
    }
  }, []);

  // Cache window dimensions on mount and resize
  useEffect(() => {
    const updateDimensions = () => {
      windowDimensionsRef.current = {
        width: window.innerWidth,
        height: window.innerHeight
      };
    };
    
    updateDimensions();
    window.addEventListener('resize', updateDimensions, { passive: true });
    
    return () => window.removeEventListener('resize', updateDimensions);
  }, []);

  // Ultra-minimal mouse tracking to eliminate blocking
  const throttledMouseUpdate = useCallback((e: MouseEvent) => {
    const { width, height } = windowDimensionsRef.current;
    if (width === 0 || height === 0) return;
    
    // Only update every 200ms minimum to prevent any blocking
    const now = performance.now();
    if (now - (throttledMouseUpdate as any).lastCall < 200) return;
    (throttledMouseUpdate as any).lastCall = now;
    
    // Minimal movement calculation - no complex transforms
    const x = (e.clientX / width - 0.5) * 0.2; // Very reduced sensitivity
    const y = (e.clientY / height - 0.5) * 0.2; // Very reduced sensitivity
    
    // Use the lowest priority possible
    if ('scheduler' in window && 'postTask' in (window.scheduler as any)) {
      (window.scheduler as any).postTask(() => {
        setMousePosition({ x, y });
      }, { priority: 'background' });
    }
  }, []);
  useEffect(() => {
    // Only enable mouse tracking after page is fully interactive
    if (!isFullyInteractive) return;
    
    let lastUpdate = 0;
    
    // Check for reduced motion preference
    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    if (prefersReducedMotion) return;
    
    const handleMouseMove = (e: MouseEvent) => {
      const now = performance.now();
      
      // Ultra aggressive throttling - max 5fps when interactive
      if (now - lastUpdate < 200) return;
      
      throttledMouseUpdate(e);
      lastUpdate = now;
    };
    
    window.addEventListener('mousemove', handleMouseMove, {
      passive: true
    });
    
    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
    };
  }, [throttledMouseUpdate, isFullyInteractive]);
  return <section className="relative min-h-screen flex items-center justify-center overflow-hidden" style={{
    '--mouse-x': mousePosition.x,
    '--mouse-y': mousePosition.y
  } as React.CSSProperties}>
      {/* Lightweight CSS gradient - no JavaScript computation */}
      <div 
        className={`absolute inset-0 z-0`} 
        style={{ 
          background: `
            radial-gradient(circle at 30% 40%, rgba(238, 223, 203, 0.08) 0%, transparent 50%),
            radial-gradient(circle at 70% 60%, rgba(206, 192, 173, 0.06) 0%, transparent 50%),
            linear-gradient(135deg, #0B0B0C 0%, #1E1E1F 40%, #0B0B0C 100%)
          `
        }}
      />
      
      {/* Animated Background */}
      <div className="absolute inset-0 bg-cover bg-center bg-no-repeat transition-transform duration-100 ease-out opacity-30 z-10" style={{
      backgroundImage: `url(${backgroundImage})`,
      transform: dynamicStyles.backgroundTransform
    }} />
      
      {/* Dynamic Gradient Overlay */}
      <div className="absolute inset-0 transition-all duration-300 ease-out z-10" style={{
      background: `radial-gradient(circle at ${dynamicStyles.gradientPosition}, 
              hsl(var(--sl-obsidian) / 0.2) 0%, 
              hsl(var(--sl-obsidian) / 0.6) 100%)`
    }} />
      
      {/* Animated Floating Orbs */}
      <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-gradient-orb animate-float opacity-20 transition-transform duration-200 ease-out z-10" style={{
      transform: dynamicStyles.orb1Transform
    }} />
      <div className="absolute bottom-1/3 right-1/4 w-64 h-64 bg-gradient-neon-glow animate-float opacity-20 transition-transform duration-200 ease-out z-10" style={{
      animationDelay: '2s',
      transform: dynamicStyles.orb2Transform
    }} />
      <div className="absolute top-1/2 right-1/3 w-48 h-48 bg-gradient-orb animate-pulse-glow opacity-10 transition-transform duration-200 ease-out z-10" style={{
      animationDelay: '4s',
      transform: dynamicStyles.orb3Transform
    }} />
      
      {/* Mouse-responsive Light Effects */}
      <div className="absolute w-96 h-96 opacity-15 pointer-events-none transition-all duration-300 ease-out z-10" style={{
      background: `radial-gradient(circle, hsl(var(--sl-auric-700) / 0.3) 0%, transparent 70%)`,
      left: dynamicStyles.lightEffectLeft,
      top: dynamicStyles.lightEffectTop,
      transform: 'translate(-50%, -50%)',
      filter: 'blur(40px)'
    }} />
      
      {/* Particle Effect */}
      <div className="absolute inset-0 opacity-20 z-10" style={{
      background: dynamicStyles.particleBackground,
      backgroundRepeat: 'repeat',
      backgroundSize: '100px 100px, 150px 150px, 200px 200px'
    }} />
      
      {/* Content - Critical text rendered immediately for LCP optimization */}
      <div className="relative z-20 text-center max-w-5xl mx-auto px-6 opacity-100">
        <h1 className="text-5xl md:text-7xl font-bold mb-8 opacity-100">
          <span className="bg-gradient-to-r from-text via-accent-neon to-accent bg-clip-text text-transparent animate-gradient-shift bg-[length:200%_200%] drop-shadow-[0_0_20px_hsl(var(--sl-neon-pink-500)_/_0.3)]">From Zero to Hero
— Your AI Journey Starts Here</span>
          <br />
          
        </h1>
        
        <p className="text-xl md:text-2xl text-text-muted mb-12 max-w-3xl mx-auto leading-relaxed opacity-100">
          Empowering enterprises to slash costs, boost efficiency, and automate workflows 
          with expertly crafted AI solutions delivered in just 30 days.
        </p>
        
        
        <div className="mt-16 text-center opacity-0 animate-fade-in" style={{
        animationDelay: '0.6s'
      }}>
          
          
        </div>
      </div>
      
      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 border-2 border-accent-neon rounded-full flex justify-center shadow-neon">
          <div className="w-1 h-3 bg-accent-neon rounded-full mt-2 animate-pulse"></div>
        </div>
      </div>
    </section>;
};
export default HeroSection;