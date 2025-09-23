import { useState, useEffect } from "react";

interface MeshGradientBackgroundProps {
  className?: string;
  speed?: number;
  opacity?: number;
}

export function MeshGradientBackground({ 
  className = "", 
  speed = 0.1,
  opacity = 1 
}: MeshGradientBackgroundProps) {
  const [shouldLoadShaders, setShouldLoadShaders] = useState(false);
  
  // Never load heavy shaders during initial page load - they cause massive blocking
  useEffect(() => {
    let interactionTimer: NodeJS.Timeout;
    let hasUserInteracted = false;
    
    const handleInteraction = () => {
      if (!hasUserInteracted) {
        hasUserInteracted = true;
        // Even after interaction, wait significantly before loading shaders
        interactionTimer = setTimeout(() => {
          if (!window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
            setShouldLoadShaders(true);
          }
        }, 10000); // 10 second delay after first interaction
      }
    };
    
    document.addEventListener('click', handleInteraction, { passive: true, once: true });
    document.addEventListener('scroll', handleInteraction, { passive: true, once: true });
    
    return () => {
      document.removeEventListener('click', handleInteraction);
      document.removeEventListener('scroll', handleInteraction);
      if (interactionTimer) clearTimeout(interactionTimer);
    };
  }, []);
  
  // Use lightweight CSS gradient by default - no JavaScript computation
  if (!shouldLoadShaders) {
    return (
      <div 
        className={`absolute inset-0 ${className}`} 
        style={{ 
          opacity,
          background: `
            radial-gradient(circle at 20% 30%, rgba(238, 223, 203, 0.1) 0%, transparent 50%),
            radial-gradient(circle at 80% 70%, rgba(206, 192, 173, 0.08) 0%, transparent 50%),
            radial-gradient(circle at 40% 80%, rgba(232, 226, 220, 0.06) 0%, transparent 50%),
            linear-gradient(135deg, #0B0B0C 0%, #1E1E1F 50%, #0B0B0C 100%)
          `
        }}
      />
    );
  }

  // Lazy load mesh gradient library only after significant delay
  const MeshGradientComponent = () => {
    const [MeshGradient, setMeshGradient] = useState<any>(null);
    
    useEffect(() => {
      import("@paper-design/shaders-react").then((module) => {
        setMeshGradient(() => module.MeshGradient);
      });
    }, []);
    
    if (!MeshGradient) {
      return (
        <div 
          className={`absolute inset-0 ${className}`} 
          style={{ 
            opacity,
            background: `linear-gradient(135deg, #0B0B0C 0%, #1E1E1F 50%, #0B0B0C 100%)`
          }}
        />
      );
    }
    
    return (
      <div className={`absolute inset-0 bg-background ${className}`} style={{ opacity }}>
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
  };

  return <MeshGradientComponent />;
}