import { Button } from "@/components/ui/button";
import { useEffect, useState } from "react";
import heroBackground from "@/assets/hero-bg.jpg";
import { MeshGradientBackground } from "@/components/ui/mesh-gradient";
const HeroSection = () => {
  const [mousePosition, setMousePosition] = useState({
    x: 0,
    y: 0
  });
  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      const x = (e.clientX / window.innerWidth - 0.5) * 2;
      const y = (e.clientY / window.innerHeight - 0.5) * 2;
      setMousePosition({
        x,
        y
      });
    };
    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);
  return <section className="relative min-h-screen flex items-center justify-center overflow-hidden" style={{
    '--mouse-x': mousePosition.x,
    '--mouse-y': mousePosition.y
  } as React.CSSProperties}>
      {/* Mesh Gradient Background */}
      <MeshGradientBackground className="z-0" speed={0.2} opacity={0.8} />
      
      {/* Animated Background */}
      <div className="absolute inset-0 bg-cover bg-center bg-no-repeat transition-transform duration-100 ease-out opacity-30 z-10" style={{
      backgroundImage: `url(${heroBackground})`,
      transform: `translate(${mousePosition.x * 10}px, ${mousePosition.y * 10}px) scale(1.1)`
    }} />
      
      {/* Dynamic Gradient Overlay */}
      <div className="absolute inset-0 transition-all duration-300 ease-out z-10" style={{
      background: `radial-gradient(circle at ${50 + mousePosition.x * 20}% ${50 + mousePosition.y * 20}%, 
            hsl(var(--sl-obsidian) / 0.2) 0%, 
            hsl(var(--sl-obsidian) / 0.6) 100%)`
    }} />
      
      {/* Animated Floating Orbs */}
      <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-gradient-orb animate-float opacity-20 transition-transform duration-200 ease-out z-10" style={{
      transform: `translate(${mousePosition.x * -15}px, ${mousePosition.y * -10}px)`
    }} />
      <div className="absolute bottom-1/3 right-1/4 w-64 h-64 bg-gradient-orb animate-float opacity-15 transition-transform duration-200 ease-out z-10" style={{
      animationDelay: '2s',
      transform: `translate(${mousePosition.x * 20}px, ${mousePosition.y * -15}px)`
    }} />
      <div className="absolute top-1/2 right-1/3 w-48 h-48 bg-gradient-orb animate-pulse-glow opacity-10 transition-transform duration-200 ease-out z-10" style={{
      animationDelay: '4s',
      transform: `translate(${mousePosition.x * -25}px, ${mousePosition.y * 20}px)`
    }} />
      
      {/* Mouse-responsive Light Effects */}
      <div className="absolute w-96 h-96 opacity-15 pointer-events-none transition-all duration-300 ease-out z-10" style={{
      background: `radial-gradient(circle, hsl(var(--sl-auric-700) / 0.3) 0%, transparent 70%)`,
      left: `${50 + mousePosition.x * 30}%`,
      top: `${50 + mousePosition.y * 30}%`,
      transform: 'translate(-50%, -50%)',
      filter: 'blur(40px)'
    }} />
      
      {/* Particle Effect */}
      <div className="absolute inset-0 opacity-20 z-10" style={{
      background: `radial-gradient(2px 2px at ${20 + mousePosition.x * 10}px ${30 + mousePosition.y * 10}px, hsl(var(--sl-auric-700)), transparent),
                      radial-gradient(2px 2px at ${40 + mousePosition.x * 15}px ${70 + mousePosition.y * 15}px, hsl(var(--sl-pearl-100)), transparent),
                      radial-gradient(1px 1px at ${90 + mousePosition.x * 20}px ${40 + mousePosition.y * 20}px, hsl(var(--sl-auric-500)), transparent)`,
      backgroundRepeat: 'repeat',
      backgroundSize: '100px 100px, 150px 150px, 200px 200px'
    }} />
      
      {/* Content */}
      <div className="relative z-20 text-center max-w-5xl mx-auto px-6">
        <h1 className="text-5xl md:text-7xl font-bold mb-8">
          <span className="bg-gradient-to-r from-text via-accent to-accent-light bg-clip-text text-transparent">From Zero to Hero — Your AI Journey Starts Here</span>
          <br />
          
        </h1>
        
        <p className="text-xl md:text-2xl text-text-muted mb-12 max-w-3xl mx-auto leading-relaxed animate-fade-in-up" style={{
        animationDelay: '0.2s'
      }}>
          Empowering enterprises to slash costs, boost efficiency, and automate workflows 
          with expertly crafted AI solutions delivered in just 30 days.
        </p>
        
        
        <div className="mt-16 text-center animate-fade-in" style={{
        animationDelay: '0.6s'
      }}>
          
          
        </div>
      </div>
      
      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 border-2 border-accent rounded-full flex justify-center">
          <div className="w-1 h-3 bg-accent rounded-full mt-2 animate-pulse"></div>
        </div>
      </div>
    </section>;
};
export default HeroSection;