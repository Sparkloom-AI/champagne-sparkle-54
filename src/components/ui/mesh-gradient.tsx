import { MeshGradient } from "@paper-design/shaders-react";
import { useState, useEffect } from "react";

interface MeshGradientBackgroundProps {
  className?: string;
  speed?: number;
  opacity?: number;
}

export function MeshGradientBackground({ 
  className = "", 
  speed = 0.1, // Reduced default speed to minimize computation
  opacity = 1 
}: MeshGradientBackgroundProps) {
  const [isVisible, setIsVisible] = useState(false);
  const [shouldAnimate, setShouldAnimate] = useState(true);
  
  // Defer mesh gradient rendering and respect user preferences
  useEffect(() => {
    // Check for reduced motion preference
    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    setShouldAnimate(!prefersReducedMotion);
    
    // Defer rendering to prevent blocking initial load
    const timer = setTimeout(() => {
      setIsVisible(true);
    }, 500);
    
    return () => clearTimeout(timer);
  }, []);
  
  // Simple gradient fallback for reduced motion or delayed loading
  if (!isVisible || !shouldAnimate) {
    return (
      <div 
        className={`absolute inset-0 bg-gradient-to-br from-sl-obsidian via-sl-slate-800 to-sl-obsidian ${className}`} 
        style={{ opacity }}
      />
    );
  }

  return (
    <div className={`absolute inset-0 bg-background ${className}`} style={{ opacity }}>
      {/* Single mesh gradient to reduce computation */}
      <MeshGradient
        className="absolute inset-0 w-full h-full"
        colors={[
          "#0B0B0C", // sl-obsidian
          "#EEDFCB", // sl-auric-700 (champagne)
          "#CEC0AD", // sl-auric-500 (muted champagne)
          "#1E1E1F"  // sl-slate-800
        ]}
        speed={speed}
      />
    </div>
  );
}