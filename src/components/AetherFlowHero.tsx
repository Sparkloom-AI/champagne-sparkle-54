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
        <div
          className="absolute w-96 h-96 opacity-20 pointer-events-none"
          style={{
            background: `radial-gradient(circle, hsl(var(--sl-auric-700) / 0.4) 0%, transparent 70%)`,
            left: '50%',
            top: '50%',
            transform: 'translate(-50%, -50%)',
            filter: 'blur(40px)',
            animation: 'pulse-glow 6s ease-in-out infinite'
          }}
        />

        {/* Flowing particle streams */}
        <div
          className="absolute inset-0 opacity-30"
          style={{
            background: `
              radial-gradient(1px 1px at 20px 30px, hsl(var(--sl-auric-700)), transparent),
              radial-gradient(1px 1px at 40px 70px, hsl(var(--sl-pearl-100)), transparent),
              radial-gradient(1px 1px at 90px 40px, hsl(var(--sl-auric-500)), transparent),
              radial-gradient(1px 1px at 130px 90px, hsl(var(--sl-neon-pink-500)), transparent),
              radial-gradient(1px 1px at 160px 30px, hsl(var(--sl-auric-700)), transparent)
            `,
            backgroundRepeat: 'repeat',
            backgroundSize: '200px 200px, 150px 150px, 180px 180px, 220px 220px, 170px 170px',
            animation: 'gradient-shift 12s ease-in-out infinite'
          }}
        />
      </div>

      {/* Subtle overlay for depth */}
      <div
        className="absolute inset-0"
        style={{
          background: `radial-gradient(circle at 50% 50%,
                  hsl(var(--sl-obsidian) / 0.1) 0%,
                  hsl(var(--sl-obsidian) / 0.5) 100%)`
        }}
      />
    </div>
  );
};

export default AetherFlowHero;
