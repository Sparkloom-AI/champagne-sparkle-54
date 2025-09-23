'use client'

import { useState, useEffect } from 'react'

interface SplineSceneProps {
  scene: string
  className?: string
}

export function SplineScene({ scene, className }: SplineSceneProps) {
  const [shouldLoadSpline, setShouldLoadSpline] = useState(false);
  
  // Ultra-aggressive deferral - only load after significant user engagement
  useEffect(() => {
    let interactionCount = 0;
    let timeoutId: NodeJS.Timeout;
    
    const handleInteraction = () => {
      interactionCount++;
      // Only load 3D scene after multiple interactions and delay
      if (interactionCount >= 3) {
        timeoutId = setTimeout(() => {
          if (document.visibilityState === 'visible' && !window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
            setShouldLoadSpline(true);
          }
        }, 5000); // 5 second delay even after interactions
      }
    };
    
    // Listen for multiple types of engagement
    document.addEventListener('click', handleInteraction, { passive: true });
    document.addEventListener('scroll', handleInteraction, { passive: true });
    document.addEventListener('mousemove', handleInteraction, { passive: true });
    
    return () => {
      document.removeEventListener('click', handleInteraction);
      document.removeEventListener('scroll', handleInteraction);
      document.removeEventListener('mousemove', handleInteraction);
      if (timeoutId) clearTimeout(timeoutId);
    };
  }, []);
  
  // Lightweight CSS-only placeholder that looks professional
  if (!shouldLoadSpline) {
    return (
      <div className={`${className} bg-gradient-to-br from-sl-obsidian via-sl-slate-800 to-sl-obsidian relative overflow-hidden`}>
        {/* Professional geometric pattern */}
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-1/4 left-1/4 w-32 h-32 border border-sl-auric-700/20 rounded-full animate-pulse"></div>
          <div className="absolute top-1/2 right-1/3 w-24 h-24 border border-sl-auric-500/20 rounded-lg rotate-45 animate-pulse" style={{animationDelay: '1s'}}></div>
          <div className="absolute bottom-1/3 left-1/2 w-20 h-20 border border-sl-pearl-100/20 rounded-full animate-pulse" style={{animationDelay: '2s'}}></div>
        </div>
        
        {/* Center content */}
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="text-center space-y-4">
            <div className="w-16 h-16 border-2 border-sl-auric-700/40 rounded-full mx-auto relative">
              <div className="absolute inset-2 border border-sl-auric-500/30 rounded-full"></div>
            </div>
            <p className="text-sm text-muted-foreground">Interactive 3D Experience</p>
            <p className="text-xs text-muted-foreground opacity-70">Click around to activate</p>
          </div>
        </div>
      </div>
    );
  }

  // Lazy load the actual Spline component only when needed
  const SplineComponent = () => {
    const [Spline, setSpline] = useState<any>(null);
    
    useEffect(() => {
      import('@splinetool/react-spline').then((module) => {
        setSpline(() => module.default);
      });
    }, []);
    
    if (!Spline) {
      return (
        <div className="w-full h-full flex items-center justify-center">
          <div className="w-8 h-8 border-4 border-sl-auric-700 border-t-transparent rounded-full animate-spin"></div>
        </div>
      );
    }
    
    return <Spline scene={scene} className={className} />;
  };

  return <SplineComponent />;
}