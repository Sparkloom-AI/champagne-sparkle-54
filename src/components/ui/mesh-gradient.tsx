import { MeshGradient } from "@paper-design/shaders-react";

interface MeshGradientBackgroundProps {
  className?: string;
  speed?: number;
  opacity?: number;
}

export function MeshGradientBackground({ 
  className = "", 
  speed = 0.3,
  opacity = 1 
}: MeshGradientBackgroundProps) {
  return (
    <div className={`absolute inset-0 bg-background ${className}`} style={{ opacity }}>
      {/* Primary mesh gradient */}
      <MeshGradient
        className="absolute inset-0 w-full h-full"
        colors={[
          "#0B0B0C", // sl-obsidian
          "#EEDFCB", // sl-auric-700 (champagne)
          "#CEC0AD", // sl-auric-500 (muted champagne)
          "#1E1E1F", // sl-slate-800
          "#2F2F30"  // sl-graphite-700
        ]}
        speed={speed}
      />
      
      {/* Overlay mesh for added depth */}
      <MeshGradient
        className="absolute inset-0 w-full h-full opacity-40"
        colors={[
          "#0B0B0C", // sl-obsidian
          "#E8E2DC", // sl-pearl-100
          "#EEDFCB", // sl-auric-700
          "#CEC0AD"  // sl-auric-500
        ]}
        speed={speed * 0.7}
      />
    </div>
  );
}