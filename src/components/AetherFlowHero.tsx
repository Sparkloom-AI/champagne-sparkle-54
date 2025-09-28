import React from 'react';

interface AetherFlowHeroProps {
  className?: string;
}

const AetherFlowHero: React.FC<AetherFlowHeroProps> = ({ className = "" }) => {
  return (
    <div className={`${className} overflow-hidden`}>
      {/* Base flowing background */}
      <div
        className="absolute inset-0"
        style={{
          background: `
            radial-gradient(circle at 20% 30%, rgba(238, 223, 203, 0.12) 0%, transparent 60%),
            radial-gradient(circle at 80% 70%, rgba(206, 192, 173, 0.08) 0%, transparent 60%),
            radial-gradient(circle at 50% 20%, rgba(254, 53, 126, 0.06) 0%, transparent 50%),
            linear-gradient(135deg, #0B0B0C 0%, #1E1E1F 40%, #0B0B0C 100%)
          `
        }}
      />

      {/* Animated energy flows */}
      <div className="absolute inset-0">
        {/* Primary energy orb */}
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-gradient-orb animate-float opacity-25" />
        <div className="absolute bottom-1/3 right-1/4 w-64 h-64 bg-gradient-neon-glow animate-float opacity-25" style={{ animationDelay: '2s' }} />
        <div className="absolute top-1/2 right-1/3 w-48 h-48 bg-gradient-orb animate-pulse-glow opacity-15" style={{ animationDelay: '4s' }} />

        {/* Central energy core */}
        <div className="absolute w-96 h-96 opacity-20 pointer-events-none aether-energy-core" />

        {/* Flowing particle streams */}
        <div className="absolute inset-0 opacity-30 aether-particle-streams" />
      </div>

      {/* Subtle overlay for depth */}
      <div className="absolute inset-0 aether-overlay" />
    </div>
  );
};

export default AetherFlowHero;
