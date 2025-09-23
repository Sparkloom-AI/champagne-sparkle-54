import React from 'react';

interface MeshGradientBackgroundProps {
  className?: string;
  opacity?: number;
}

// Pure CSS mesh gradient with no JavaScript execution during initial load
export function MeshGradientBackground({ 
  className = "", 
  opacity = 1 
}: MeshGradientBackgroundProps) {
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