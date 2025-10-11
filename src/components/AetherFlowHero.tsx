import React from 'react';

interface AetherFlowHeroProps {
  className?: string;
}

const AetherFlowHero: React.FC<AetherFlowHeroProps> = ({ className = "" }) => {
  return (
    <div className={`${className} overflow-hidden`}>
      {/* Base flowing background - Pink gradient system */}
      <div
        className="absolute inset-0"
        style={{
          background: `
            radial-gradient(circle at 20% 30%, rgba(255, 71, 163, 0.15) 0%, transparent 60%),
            radial-gradient(circle at 80% 70%, rgba(249, 50, 168, 0.12) 0%, transparent 60%),
            radial-gradient(circle at 50% 20%, rgba(255, 46, 133, 0.18) 0%, transparent 50%),
            radial-gradient(circle at 70% 80%, rgba(255, 214, 102, 0.08) 0%, transparent 70%),
            linear-gradient(135deg, #0B0B0C 0%, #1E1E1F 40%, #0B0B0C 100%)
          `
        }}
      />

      {/* Animated energy flows - Pink accent orbs */}
      <div className="absolute inset-0">
        {/* Primary pink energy orbs */}
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-gradient-neon-glow animate-float opacity-30" />
        <div className="absolute bottom-1/3 right-1/4 w-80 h-80 bg-gradient-orb animate-float opacity-25" style={{ animationDelay: '2s' }} />
        <div className="absolute top-1/2 right-1/3 w-64 h-64 bg-gradient-neon-glow animate-pulse-glow opacity-20" style={{ animationDelay: '4s' }} />

        {/* Central pink energy core */}
        <div className="absolute w-[500px] h-[500px] opacity-50 pointer-events-none aether-energy-core" />

        {/* Flowing pink particle streams */}
        <div className="absolute inset-0 opacity-40 aether-particle-streams" />
      </div>

      {/* Subtle overlay for depth */}
      <div className="absolute inset-0 aether-overlay" />
    </div>
  );
};

export default AetherFlowHero;
