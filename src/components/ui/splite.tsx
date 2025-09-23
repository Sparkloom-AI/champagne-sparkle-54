'use client'

import { Suspense, lazy, useState, useEffect } from 'react'
const Spline = lazy(() => import('@splinetool/react-spline'))

interface SplineSceneProps {
  scene: string
  className?: string
}

export function SplineScene({ scene, className }: SplineSceneProps) {
  const [shouldLoad, setShouldLoad] = useState(false);
  
  // Defer 3D scene loading to prevent main thread blocking
  useEffect(() => {
    const timer = setTimeout(() => {
      // Only load if user hasn't left the page and system isn't under stress
      if (document.visibilityState === 'visible') {
        setShouldLoad(true);
      }
    }, 2000); // Significant delay to allow page to fully render first
    
    return () => clearTimeout(timer);
  }, []);
  
  // Don't render at all if page is hidden or user prefers reduced motion
  if (!shouldLoad || window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
    return (
      <div className="w-full h-full flex items-center justify-center bg-sl-obsidian/50">
        <div className="text-center space-y-4">
          <div className="w-16 h-16 border-2 border-sl-auric-700/30 rounded-full mx-auto"></div>
          <p className="text-sm text-muted-foreground">3D Scene</p>
        </div>
      </div>
    );
  }

  return (
    <Suspense 
      fallback={
        <div className="w-full h-full flex items-center justify-center">
          <div className="w-8 h-8 border-4 border-sl-auric-700 border-t-transparent rounded-full animate-spin"></div>
        </div>
      }
    >
      <Spline
        scene={scene}
        className={className}
      />
    </Suspense>
  )
}